import React from "react";
import boiler from "../../../images/boiler.png";
import Stars from "./stars";

export default function Card({
  id,
  brand,
  descrizione,
  immagine,
  inSconto,
  note,
  prezzo,
  prezzoPreSconto,
  stelle,
}) {
  return (
    <>
      <img src={boiler} alt="Boiler_Image" className="image_product" />
      <i class="far fa-heart prefer_product"></i>

      {inSconto ? (
        <span className="alert_product">Risparmi il 20%</span>
      ) : (
        <></>
      )}

      <h5 className="title_product"> {brand} </h5>
      <p className="description_product">{descrizione}</p>
      <span className="price_product">{prezzo}</span>
      <span className="sale_product"> {prezzoPreSconto}</span>
      <h6 className="information_product">{note}</h6>
      <hr class="divisor_product"></hr>
      <div className="under_product">
        <div class="icon_span">
          {/* {stelle}
          <i class="fas fa-star icon_product"></i>
          <i class="fas fa-star icon_product"></i>
          <i class="fas fa-star icon_product"></i>
          <i class="fas fa-star icon_product"></i>
          <i class="far fa-star icon_product"></i> */}
          <Stars stelle={stelle} />
        </div>
        <span className="confront">CONFRONTA</span>
        <div>
          <div class="container_filter_card">
            <input type="checkbox"></input>
            <div class="checkmark_card"></div>
          </div>
        </div>
      </div>
    </>
  );
}
