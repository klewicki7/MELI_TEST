import React from "react";
import { useParams } from "react-router-dom";
import ListItems from "../../components/ListItems/ListItems";
import { useGetItemSearch } from "../../hooks/useGetItemSearch";

function List() {
  const { search } = useParams();

  const [data] = useGetItemSearch(search);

  return <ListItems data={data} />;
}

export default List;
