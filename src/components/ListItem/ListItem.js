import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { currency } from "../../utils";

function ListItem({ item, breadcrum}) {
  return (
    <article className="article-card bg-white">
      <Link className="img-container bg-white" to={`/items/${item.id}/${breadcrum}`}>
        <img
          className="img-card bg-yellow m-16"
          src={item.thumbnail}
          alt="phone"
        />
      </Link>

      <section className="details-container bg-white">
        <div className="details bg-white">
          <Link className="link-w bg-white" to={`/items/${item.id}/${breadcrum}`}>
            <h2 className="bg-white mb-32 title-text">
              {item.prices.prices[0].currency_id} {currency(item.prices.prices[0].amount)}
            </h2>
            <h2 className="bg-white title-text">{item.title}</h2>
          </Link>
        </div>
        <div className="city-container bg-white">
          <h3 className="bg-white text-city">
            {item.address.state_name}
          </h3>
        </div>
      </section>
    </article>
  );
}

export default ListItem;
