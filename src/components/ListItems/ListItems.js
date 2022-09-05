import React from "react";
import ListItem from "../ListItem/ListItem";
import "./index.scss";
import ItemNotFound from "../NotFound/ItemNotFound";
import RenderComponent from "../RenderComponentWithLoading/RenderComponent";
import BreadCrum from "../breadcrum/BreadCrum";

function ListItems({ data }) {
  return (
    <main>
      <section className="list-container">
        <BreadCrum categories={data.categories}/>
        {data ? (
          <RenderComponent isLoading={!data.items?.length > 0}>
            {data.items?.map((e) => (
              <ListItem item={e} breadcrum={data.categories} key={e.id} />
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
