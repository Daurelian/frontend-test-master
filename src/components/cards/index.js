import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import Card from "./card";

export default function Cards({ boiler, setBoiler }) {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:9000/boilers");
      if (response.status === 200) {
        console.log(response);
        setBoiler(response.data);
      }
    }
    fetchData();
  }, []);

  const initialState = { id: boiler._id, product: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        if (state.product.includes(action.payload)) {
          console.log("if", state.product);
          const result_array = state.product.filter(
            (e) => e !== action.payload
          );
          return { ...state, product: result_array };
        } else {
          console.log("else", state.product);
          return { ...state, product: [...state.product, action.payload] };
        }

        break;
      default:
        return state;
    }
  }

  return (
    <div className="row">
      {/* Card */}
      {boiler.map((boiler) => (
        <div className="col-4 card_product">
          <Card
            id={boiler._id}
            brand={boiler.brand}
            descrizione={boiler.descrizione}
            immagine={boiler.immagine}
            inSconto={boiler.inSconto}
            note={boiler.note}
            prezzo={boiler.prezzo}
            prezzoPreSconto={boiler.prezzoPreSconto}
            stelle={boiler.stelle}
            dispatch={dispatch}
          />
        </div>
      ))}
      {/* Fine Card */}
    </div>
  );
}
