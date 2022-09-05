import React from "react";
import "./index.scss";

function BreadCrum({ categories }) {
  if (typeof categories === "string") {
    categories = categories.split(",");
  }

  return (
    <section className="breadcrum">
      <ul className="list-breadcrum">
        {categories?.map((e) => (
          <li key={e}>
            <a className="breadcrum-a" href="#">{e}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BreadCrum;
