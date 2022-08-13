import { useEffect, useState } from 'react';

import { instance } from '@/api/api';

function useFetch<T>(url: string, method: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance({
      method,
      url,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [method, url]);

  return { data, error, loading };
}

export default useFetch;
