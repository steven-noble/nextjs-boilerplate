import { useState, useEffect } from 'react';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface UseQueryResponse<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

export const useQuery = <T, B = undefined>(
  api: string,
  method: HttpMethod = 'POST',
  body?: B
): UseQueryResponse<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}${api}`, {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          ...(body && { body: JSON.stringify(body) }), // Ensures body is stringified if it's provided
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api, method, body]);

  return { loading, data, error };
};
