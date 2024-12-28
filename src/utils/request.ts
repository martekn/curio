import { RequestError, HTTPMethods } from "@/types";

/**
 * A utility function to perform HTTP requests and manage the loading, error, and response states.
 *
 * @template T - The type of the response data.
 * @param url - The URL for the HTTP request.
 * @param method - The HTTP method to use (e.g., "get", "post").
 * @param [body] - The optional request body for methods like POST or PUT.
 * @returns A promise resolving to an object containing the response data, loading state, and error state.
 *
 * @example
 * const fetchDataExample = async () => {
 *   const { data, loading, error } = await fetchData<User>('https://api.example.com/users', 'get');
 *
 *   if (loading) {
 *     console.log("Loading...");
 *   }
 *
 *   if (error) {
 *     console.error("Error occurred.");
 *   }
 *
 *   console.log("Fetched data:", data);
 * };
 *
 * fetchDataExample();
 */
export const request = async <T>(
  url: string,
  method: HTTPMethods,
  body?: BodyInit | undefined | null
): Promise<{ data: T | RequestError; loading: boolean; error: boolean }> => {
  let loading = true;
  let error = false;
  let data: T | RequestError;

  if (!url.length) {
    data = {
      errors: [
        {
          message: "The request URL is missing. Please provide a valid URL.",
        },
      ],
    };
    return { data, loading: false, error: true };
  }

  let response;
  try {
    switch (method) {
      case "get":
        response = await fetch(url);
        break;
      default:
        response = await fetch(url, {
          method: method,
          body,
        });
        break;
    }
  } catch (err) {
    console.error(err);
    error = true;
  }

  if (response) {
    error = !response.ok;

    data = await response.json();
  } else {
    data = {
      errors: [
        {
          message: "An error occurred while processing your request. Please try again later.",
        },
      ],
    };
  }

  loading = false;

  return { data: data as T | RequestError, loading, error };
};
