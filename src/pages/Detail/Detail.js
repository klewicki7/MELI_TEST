import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemDetail } from "../../hooks/useGetItemDetail";
import "./index.scss";

function Detail() {
  const { id } = useParams();
  const [detail, description] = useGetItemDetail(id);

  return (
    <div className="section-container">
      <section className="article-container">
        <article className="detail-container bg-white">
          <div className="image-container bg-white">
            <img
              className="image-detail bg-white"
              src={detail.thumbnail}
              alt={"photo"}
            />
          </div>
          <div className="text-detail-container bg-white">
            <h2 className="bg-white mt-16">{detail.title}</h2>
            <h2 className="bg-white mt-32 mb-32">ARS ${detail.price}</h2>
            <button className="btn mr-32">Comprar</button>
          </div>
        </article>
        <section className="description-container bg-white">
          <h2 className="descripcion-text bg-white">
            Descripcion del producto
          </h2>
          <p className="bg-white descipcion-p">{description.plain_text}</p>
        </section>
      </section>
    </div>
  );
}

export default Detail;
