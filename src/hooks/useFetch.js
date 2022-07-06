//hook generico

import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await fetch(url);
        const body = await res.json();
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  });
};
