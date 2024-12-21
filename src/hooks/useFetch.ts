import { useState, useEffect } from "react";

type HTTPmethods = "put" | "patch" | "post" | "get" | "Delete";

interface UseFetchReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: boolean;
}

/**
 * A custom hook to perform HTTP requests and manage the loading, error, and response states.
 *
 * @template T - The type of the response data.
 * @param url - The URL for the HTTP request.
 * @param method - The HTTP method to use (e.g., "get", "post").
 * @param [body] - The optional request body for methods like POST or PUT.
 * @returns An object containing the response data, loading state, and error state.
 *
 * @example
 * const { data, loading, error } = useFetch<User>('https://api.example.com/users', 'get');
 *
 * if (loading) {
 *   return <p>Loading...</p>;
 * }
 *
 * if (error) {
 *   return <p>Error occurred.</p>;
 * }
 *
 * return <div>{JSON.stringify(data)}</div>;
 */
export const useFetch = <T>(
  url: string,
  method: HTTPmethods,
  body?: BodyInit | undefined | null
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (url.length) {
        setLoading(true);
        try {
          let response;
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
          const data: T | undefined = await response.json();
          setData(data);
        } catch (error) {
          console.error(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [body, method, url]);

  return { data, loading, error };
};
