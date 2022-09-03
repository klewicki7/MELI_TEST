import React from "react";
import "./index.scss";
import notFound from "../../assets/images/not-found.png";

function ItemNotFound() {
  return (
    <section className="bg-white not-found-container">
      <div className="bg-white not-found-img-container">
        <img className="bg-white" src={notFound} alt="" />
      </div>
      <div className="bg-white ">
        <h2 className="bg-white">
          No hay publicaciones que coincidan con tu busqueda.
        </h2>
        <ul className="bg-white ul-pasos">
          <li className="bg-white">
            <b className="bg-white">Revisá la ortografía</b> de la palabra
          </li>
          <li className="bg-white">
            Utilizá <b className="bg-white">palabras más genéricas</b> o menos
            palabras.
          </li>
          <li className="bg-white">
            Navegá por las categorías para encontrar un producto similar
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ItemNotFound;
