/**
 * Key used for storing and retrieving cart data in local storage.
 * @constant
 */
export const CART_STORAGE_KEY = "cart";

/**
 * Base URL for API requests to the Noroff API.
 * @constant
 */
export const API_URL = "https://v2.api.noroff.dev/online-shop/";

/**
 * An array of navigation items used in the site's navigation.
 * Each item contains a `href` and `label` for creating menu links.
 * @constant
 * @property href - The URL path the navigation item links to.
 * @property label - The label displayed for the navigation item.
 */
export const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
];

/**
 * The unique identifier for the product featured in the hero section.
 * This ID is used to highlight a specific product prominently on the homepage.
 *
 * @constant
 */
export const HERO_PRODUCT_ID = "9be4812e-16b2-44e6-bc55-b3aef9db2b82";

/**
 * The maximum rating value for a product.
 * This constant is used as a reference for calculating and displaying product ratings (e.g., a 5-star system).
 *
 * @constant
 */
export const MAX_PRODUCT_RATING = 5;
