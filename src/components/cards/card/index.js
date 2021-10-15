import React from "react";
import boiler from "../../../images/boiler.png";
import { useReducer } from "react";
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
  const initialState = { id: id, product: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        if (state.product.find((e) => e === id))
          return { ...state, product: state.product.push(id) };
        else {
          console.log("else", state.product);
          return { ...state, product: [] };
        }

        break;
      default:
        return state;
    }
  }

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
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "toggle" })}
            ></input>
            <div class="checkmark_card"></div>
          </div>
        </div>
      </div>
    </>
  );
}
