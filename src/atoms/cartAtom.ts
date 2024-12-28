import { Storage } from "@/utils/Storage";
import { atom } from "jotai";
import { API_URL, CART_STORAGE_KEY } from "@/constants";
import { Product, ProductFetch } from "@/types";
import { request } from "@/utils/request";

interface CartItem {
  quantity: number;
  product: Product;
}

/**
 * Initializes the cart, either from local storage or an empty cart if no data exists.
 * @returns {CartItem[]} The initial cart state
 */
const setInitialCartAtom = (): CartItem[] => {
  const cart = Storage.local.get<CartItem[]>(CART_STORAGE_KEY);

  if (cart) {
    return cart;
  }

  return [];
};

/**
 * Atom to hold the cart items, initially set by `setInitialCartAtom`.
 */
export const cartAtom = atom(setInitialCartAtom());

/**
 * Atom to track if the cart items are being fetched.
 */
export const fetchCartLoadingAtom = atom<boolean>(false);

/**
 * Atom to track if there was an error while fetching cart items.
 */
export const fetchCartErrorAtom = atom<boolean>(false);

/**
 * Atom that calculates the total quantity of items in the cart.
 * @returns The total quantity of items in the cart
 */
export const quantityTotalAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

  return totalQuantity;
});

/**
 * Atom that fetches updated product information and populates the cart with the latest data.
 * This atom performs a fetch request for each cart item and updates the cart state in local storage.
 */
export const fetchCartItemsAtom = atom(null, async (get, set) => {
  const cartItems = get(cartAtom); // Get the current cart items
  const loading = get(fetchCartLoadingAtom);

  if (loading) return;

  try {
    set(fetchCartLoadingAtom, true);
    set(fetchCartErrorAtom, false);

    const updatedCart = await Promise.all<CartItem>(
      cartItems.map((item) => {
        return new Promise(async (resolve, reject) => {
          const { data, error } = await request<ProductFetch>(`${API_URL}${item.product.id}`, "get");

          if (!error && data && "data" in data && Array.isArray(data.data)) {
            const fetchedProducts = data.data;
            resolve({ ...item, product: fetchedProducts });
          }

          reject(new Error(`Failed to fetch product data for item ID: ${item.product.id}`));
        });
      })
    );

    Storage.local.set(CART_STORAGE_KEY, updatedCart);
    set(cartAtom, updatedCart);
  } catch (error) {
    set(fetchCartErrorAtom, true);
    console.error("Error fetching cart items:", error);
  } finally {
    set(fetchCartLoadingAtom, false);
  }
});

/**
 * Atom that adds a new product to the cart. If the product already exists, it increases the quantity.
 * @param product The product to add to the cart
 */
export const addToCartAtom = atom(null, (get, set, product: Product) => {
  const cart = get(cartAtom);
  const newCartItem = { quantity: 1, product };
  const currentProduct = cart.find((item) => item.product.id === newCartItem.product.id);

  // If the product already exists, increase the quantity
  if (currentProduct) {
    set(increaseProductQuantityAtom, newCartItem.product.id);
    return;
  }

  set(cartAtom, [...cart, newCartItem]);
  Storage.local.set(CART_STORAGE_KEY, [...cart, newCartItem]);
});

/**
 * Atom that removes a product from the cart by its ID.
 * @param id The ID of the product to remove
 */
export const removeFromCartAtom = atom(null, (get, set, id: Product["id"]) => {
  const cart = get(cartAtom);
  const updatedCart = cart.filter((item) => item.product.id !== id);

  set(cartAtom, updatedCart);
  Storage.local.set(CART_STORAGE_KEY, updatedCart);
});

/**
 * Atom that increases the quantity of a product in the cart by its ID.
 * @param id The ID of the product whose quantity to increase
 */
export const increaseProductQuantityAtom = atom(null, (get, set, id: Product["id"]) => {
  const cart = get(cartAtom);

  const updatedCart = cart.map((item) => {
    if (item.product.id === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });

  set(cartAtom, updatedCart);
  Storage.local.set(CART_STORAGE_KEY, updatedCart);
});

/**
 * Atom that decreases the quantity of a product in the cart by its ID.
 * If the quantity reaches 0 or below, the product will be removed from the cart.
 * @param {Product["id"]} id The ID of the product whose quantity to decrease
 */
export const decreaseProductQuantityAtom = atom(null, (get, set, id: Product["id"]) => {
  const cart = get(cartAtom);
  let hasQuantity = true;

  const updatedCart = cart.map((item) => {
    if (item.product.id === id) {
      if (item.quantity - 1 <= 0) {
        hasQuantity = false;
      }
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });

  // Remove the product from the cart if quantity is 0 or below
  if (!hasQuantity) {
    set(removeFromCartAtom, id);
    return;
  }

  set(cartAtom, updatedCart);
  Storage.local.set(CART_STORAGE_KEY, updatedCart);
});
