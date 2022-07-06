//hook generico

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch(url);
        const body = await res.json();

        if (res.ok) {
          setData(body.data);
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fecthData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
