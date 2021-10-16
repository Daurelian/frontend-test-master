import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import Card from "./card";

export default function Cards({ boiler, setBoiler, state, dispatch }) {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:9000/boilers");
      if (response.status === 200) {
        // console.log(response);
        // console.log("con", state.filters.inSconto);
        state.filters.disponibile
          ? setBoiler(
              response.data.filter(
                (e) => e.disponibile === state.filters.disponibile
              )
            )
          : setBoiler(response.data.filter((e) => (e.brand = "Ariston"))); // setBoiler(
        //     response.data.filter((e) => e.inSconto === state.filters.inSconto)
        //   )
      }
    }
    fetchData();
  }, [state.filters.disponibile, state.filters.insconto]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get("http://localhost:9000/boilers");
  //     if (response.status === 200) {
  //       // console.log(response);
  //       setBoiler(response.data.filter((e) => e.disponibile === state.filter));
  //     }
  //   }
  //   fetchData();
  // }, [state.filter]);

  // console.log("finale", state.product);
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
