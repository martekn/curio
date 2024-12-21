/**
  * Creates a debounced function that delays invoking the provided function
 * until a specified amount of time has passed since the last time it was invoked.
 *
 * @function
 * @param func - The function to be debounced.
 * @param [timeout=150] - The time in milliseconds to wait before invoking `func`.
 * @returns A debounced version of the provided function.
 * @example
    const addNumbers = (a: number, b: number): number => a + b;

    const debouncedAdd = debounce(addNumbers, 300);
    debouncedAdd(10, 20);
);
 */
export const debounce = <Args extends unknown[], Output>(
  func: (...args: Args) => Output,
  timeout: number = 150
): ((...args: Args) => void) => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};
