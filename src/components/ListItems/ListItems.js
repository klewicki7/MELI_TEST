import React, { useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import "./index.scss";

function ListItems({ data }) {
  return (
    <main>
      <section className="list-container">
        {data.results?.length > 0 ? (
          data.results.map((e) => <ListItem item={e} />)
        ) : (
          <h2>No se encontraron resultados.</h2>
        )}
      </section>
    </main>
  );
}

export default ListItems;
