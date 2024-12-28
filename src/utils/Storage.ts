"use client";

/**
 * Creates a storage interface for the given storage API (localStorage or sessionStorage).
 *
 * @private
 * @memberof Storage
 * @param storage - The storage API to create an interface for.
 * @returns  The storage interface with get, set, remove, clear, and has methods.
 */
const storageFactory = (
  storage: Storage
): {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
  has(key: string): boolean;
} => {
  return {
    /**
     * Retrieves an item from storage and tries to parse it as JSON if it's a stringified object.
     *
     *
     * @memberof Storage
     * @method
     * @param key - The key of the item to retrieve from storage.
     * @returns The parsed JSON object if successful, the original value if it's not a stringified object, or null if an error occurred.
     */
    get(key) {
      const value = storage.getItem(key);
      try {
        if (!value) {
          throw Error;
        }
        return JSON.parse(value);
      } catch {
        return value;
      }
    },

    /**
     * Stores a value in storage. If the value is not a string, it is stringified before storing.
     *
     *
     * @memberof Storage
     * @method
     * @param key - The key under which the value will be stored.
     * @param value - The value to be stored.
     */
    set(key, value) {
      try {
        const valueToStore = typeof value === "string" ? value : JSON.stringify(value);
        storage.setItem(key, valueToStore);
      } catch (error) {
        console.error(`Error setting storage item "${key}"`, error);
      }
    },

    /**
     * Removes a value stored in storage under the given key.
     *
     *
     * @memberof Storage
     * @method
     * @param key - The key under which the value is stored and should be removed.
     */
    remove(key) {
      storage.removeItem(key);
    },

    /**
     * Clears all keys out of the storage.
     *
     *
     * @memberof Storage
     * @method
     */
    clear() {
      storage.clear();
    },

    /**
     * Checks if a given key exists in the storage.
     *
     *
     * @memberof Storage
     * @method
     * @param key - The key to check.
     * @returns Returns true if the key exists, or false otherwise.
     */
    has(key) {
      return this.get(key) !== null;
    },
  };
};

/**
 * The Storage object provides methods for interacting with the browser's session storage and local storage.
 *
 * @namespace Storage
 * @property local - Interface for interacting with the browser's local storage.
 * @property session - Interface for interacting with the browser's session storage.
 */
export const Storage = Object.freeze({
  /**
   * Interface for interacting with the browser's local storage.
   *
   * @memberof Storage
   * @example
   * Storage.local.get()
   */
  local: storageFactory(localStorage),

  /**
   * Interface for interacting with the browser's session storage.
   *
   * @memberof Storage
   * @example
   * Storage.session.clear()
   */
  session: storageFactory(sessionStorage),
});
