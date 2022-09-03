import { useEffect, useState } from "react";

function useGetItemDetail(id) {
  const [detail, setDetail] = useState([]);
  const [description, setDescription] = useState("");
  useEffect(() => {
    setDetail(false)
    fetch(`/api/items?id=${id}`)
      .then((data) => data.json())
      .then((data) => {
        setDetail(data[0]);
        setDescription(data[1]);
      });
  }, [id]);

  return [detail, description];
}

export { useGetItemDetail };
