import React, { useEffect, useState } from "react";
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
  console.log(boiler);
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
          />
        </div>
      ))}
      {/* Fine Card */}
    </div>
  );
}
