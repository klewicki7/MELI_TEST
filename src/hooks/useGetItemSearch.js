import { useEffect, useState } from "react";

function useGetItemSearch(query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/searchItem?q=${query}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.results.length > 0) {
          setData(data);
        } else {
          setData(false);
        }
      });
  }, [query]);

  return [data];
}

export { useGetItemSearch };
