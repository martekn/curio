import { useState, useEffect } from "react";
import { request } from "@/utils/request";
import { RequestError, HTTPMethods } from "@/types";

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
  method: HTTPMethods,
  body?: BodyInit | undefined | null
): { data: T | RequestError | undefined; loading: boolean; error: boolean } => {
  const [data, setData] = useState<T | RequestError>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const performFetch = async () => {
      setLoading(true);
      setError(false);

      const result = await request<T>(url, method, body);

      setData(result.data);
      setLoading(result.loading);
      setError(result.error);
    };

    if (url) {
      performFetch();
    }
  }, [url, method, body]);

  return { data, loading, error };
};
