import { useEffect, useState } from "react";

function useGetItemSearch(query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/searchItem?q=${query}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [query]);
  return [data];
}

export { useGetItemSearch };
