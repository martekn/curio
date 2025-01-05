import { atom } from "jotai";
import { API_URL, CART_STORAGE_KEY } from "@/constants";
import { CartItem, Product, ProductFetch } from "@/types";
import { request } from "@/utils/request";
import { atomWithStorage } from "jotai/utils";

/**
 * Atom to hold the cart items. This is a persistent atom using storage.
 */
export const cartAtom = atomWithStorage<CartItem[]>(CART_STORAGE_KEY, []);

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
 * Atom that calculates the total price of all items in the cart.
 * The total is computed by multiplying the price of each product by its quantity
 * and summing up the results for all items in the cart.
 *
 * @returns {string} The total price of all items in the cart, formatted to two decimal places.
 */
export const totalPriceAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0);

  return totalPrice.toFixed(2);
});

/**
 * Atom that calculates the total discounted price of all items in the cart.
 * The total is computed by multiplying the discounted price of each product by its quantity
 * and summing up the results for all items in the cart.
 *
 * @returns {string} The total discounted price of all items in the cart, formatted to two decimal places.
 */
export const totalDiscountedPriceAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.product.discountedPrice * cartItem.quantity,
    0
  );

  return totalPrice.toFixed(2);
});

/**
 * Atom that fetches updated product information and populates the cart with the latest data.
 * This atom performs a fetch request for each cart item and updates the cart state.
 */
export const fetchCartItemsAtom = atom(null, async (get, set) => {
  const cartItems = get(cartAtom);
  const loading = get(fetchCartLoadingAtom);

  if (loading) return;

  try {
    set(fetchCartLoadingAtom, true);
    set(fetchCartErrorAtom, false);

    const updatedCart = await Promise.all<CartItem>(
      cartItems.map((item) => {
        return new Promise(async (resolve, reject) => {
          const { data, error } = await request<ProductFetch>(`${API_URL}${item.product.id}`, "get");
          if (!error && data && "data" in data) {
            const fetchedProducts = data.data;
            resolve({ ...item, product: fetchedProducts });
          }

          reject(new Error(`Failed to fetch product data for item ID: ${item.product.id}`));
        });
      })
    );

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
});

/**
 * Atom that removes a product from the cart by its ID.
 * @param id The ID of the product to remove
 */
export const removeFromCartAtom = atom(null, (get, set, id: Product["id"]) => {
  const cart = get(cartAtom);
  const updatedCart = cart.filter((item) => item.product.id !== id);

  set(cartAtom, updatedCart);
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
});

/**
 * Atom that decreases the quantity of a product in the cart by its ID.
 * If the quantity reaches 0 or below, the product will be removed from the cart.
 * @param id The ID of the product whose quantity to decrease
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
});

/**
 * An atom that clears the cart by setting it to an empty array.
 */
export const clearCartAtom = atom(null, (get, set) => {
  set(cartAtom, []);
});
