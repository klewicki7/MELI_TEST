import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemDetail } from "../../hooks/useGetItemDetail";
import RenderComponent from "../../components/RenderComponentWithLoading/RenderComponent";
import "./index.scss";
import ImageDetails from "../../components/ImageDetails/ImageDetails";

function Detail() {
  const { id } = useParams();
  const [detail] = useGetItemDetail(id);

  return (
    <div className="container-article">
      <RenderComponent isLoading={!detail}>
        <article className="container-card-detail bg-white ">
          <div className="container-descripcion bg-white">
            <ImageDetails
              pictures={detail.item?.pictures}
              thumbnail={detail.item?.thumbnail}
            />
            <div className="bg-white descripcion-container">
              <h2 className="bg-white">Descripcion del producto</h2>
              <p className="bg-white">{detail.item?.plain_text}</p>
            </div>
          </div>
          <div className="bg-white container-title-card">
            <h2 className="bg-white text-title">{detail.item?.title}</h2>
            <div className="bg-white container-price-btn">
              <h2 className="bg-white text-price">$ {detail.item?.price}</h2>
              <button className="bg-white btn">Comprar</button>
            </div>
          </div>
        </article>
      </RenderComponent>
    </div>
  );
}

export default Detail;
