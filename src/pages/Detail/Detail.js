import React from "react";
import RenderComponent from "../../components/RenderComponentWithLoading/RenderComponent";
import ImageDetails from "../../components/ImageDetails/ImageDetails";
import { useParams } from "react-router-dom";
import { useGetItemDetail } from "../../hooks/useGetItemDetail";
import "./index.scss";
import { currency } from "../../utils";
import BreadCrum from "../../components/breadcrum/BreadCrum";

function Detail() {
  const { id, breadcrum } = useParams();
  console.log(breadcrum)
  const [detail] = useGetItemDetail(id);
  return (
    <div className="container-center">
      <BreadCrum categories={breadcrum} />
      <RenderComponent isLoading={!detail}>
        <article className="container-card-detail bg-white ">
          <div className="container-item bg-white">
            <ImageDetails
              pictures={detail.item?.pictures}
              thumbnail={detail.item?.thumbnail}
            />
            <div className="bg-white container-descripcion">
              <h2 className="bg-white">Descripcion del producto</h2>
              <p className="bg-white">{detail.item?.plain_text}</p>
            </div>
          </div>
          <div className="bg-white container-title-card">
            <h2 className="bg-white text-title">{detail.item?.title}</h2>
            <div className="bg-white container-price-btn">
              <h2 className="bg-white text-price">
                $ {currency(detail.item?.price)}
              </h2>
              <button className="bg-white btn">Comprar ahora</button>
            </div>
          </div>
        </article>
      </RenderComponent>
    </div>
  );
}

export default Detail;
