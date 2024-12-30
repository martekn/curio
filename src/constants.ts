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
