import React from "react";
import "./index.scss"

function BreadCrum({categories}) {
  return (
    <section className="breadcrum">
      <ul className="list-breadcrum">
        {categories?.map((e) => (
          <li key={e}>
            <a href="#">{e}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BreadCrum;
