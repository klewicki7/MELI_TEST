import React from "react";
import ListItem from "../ListItem/ListItem";
import "./index.scss";
import ItemNotFound from "../NotFound/ItemNotFound";
import RenderComponent from "../RenderComponentWithLoading/RenderComponent";

function ListItems({ data }) {
  return (
    <main>
      <section className="list-container">
        {data ? (
          <RenderComponent isLoading={!data.results?.length > 0}>
            {data.results?.map((e) => (
              <ListItem item={e} />
            ))}
          </RenderComponent>
        ) : (
          <ItemNotFound />
        )}
      </section>
    </main>
  );
}

export default ListItems;
