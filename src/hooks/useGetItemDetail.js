import { useEffect, useState } from "react";

function useGetItemDetail(id) {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    setDetail(false);
    fetch(`/api/items?id=${id}`)
      .then((data) => data.json())
      .then((data) => setDetail(data));
  }, [id]);
  return [detail];
}

export { useGetItemDetail };
