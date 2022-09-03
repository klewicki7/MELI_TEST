import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function ListItem({ item }) {
  return (
    <article className="article-card bg-white">
      <Link className="img-container bg-white" to={`/items/${item.id}`}>
        <img
          className="img-card bg-yellow m-16"
          src={item.thumbnail}
          alt="phone"
        />
      </Link>

      <section className="details-container bg-white">
        <div className="details bg-white">
          <Link className="link-w bg-white" to={`/items/${item.id}`}>
            <h2 className="bg-white mb-32">
              {item.prices.prices[0].currency_id} {item.prices.prices[0].amount}
            </h2>
            <h2 className="bg-white">{item.title}</h2>
          </Link>
        </div>
        <div className="city-container bg-white">
          <h3 className="bg-white">
            {item.address.state_name}
          </h3>
        </div>
      </section>
    </article>
  );
}

export default ListItem;
