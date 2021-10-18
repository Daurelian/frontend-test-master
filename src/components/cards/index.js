import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import Card from "./card";

export default function Cards({ boiler, setBoiler, state, dispatch }) {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:9000/boilers");
      if (response.status === 200) {
        // console.log(response);

        const disponibile_filter = response.data.filter(
          state.filters.disponible
            ? (e) => e.disponibile === state.filters.disponibile
            : (e) => e
        );

        const inSconto_filter = disponibile_filter.filter(
          state.filters.inSconto
            ? (e) => e.inSconto === state.filters.inSconto
            : (e) => e
        );

        const ariston_filter = inSconto_filter.filter(
          state.filters.ariston
            ? (e) => e.brand === state.filters.ariston
            : (e) => e
        );

        const baxi_filter = ariston_filter.filter(
          state.filters.baxi ? (e) => e.brand === state.filters.baxi : (e) => e
        );

        const condensazione_filter = baxi_filter.filter(
          state.filters.condensazione
            ? (e) => e.tipologia === state.filters.condensazione
            : (e) => e
        );

        const cameraAperta_filter = condensazione_filter.filter(
          state.filters.cameraAperta
            ? (e) => e.tipologia === state.filters.cameraAperta
            : (e) => e
        );

        const cameraStagna_filter = cameraAperta_filter.filter(
          state.filters.cameraStagna
            ? (e) => e.tipologia === state.filters.cameraStagna
            : (e) => e
        );

        const elettrica_filter = cameraStagna_filter.filter(
          state.filters.elettrica
            ? (e) => e.alimentazione === state.filters.elettrica
            : (e) => e
        );

        const metano_filter = elettrica_filter.filter(
          state.filters.metano
            ? (e) => e.alimentazione === state.filters.metano
            : (e) => e
        );

        const pn19_filter = metano_filter.filter(
          state.filters.pn19
            ? (e) => e.potenzaNominale === state.filters.pn19
            : (e) => e
        );

        const pn24_filter = pn19_filter.filter(
          state.filters.pn24
            ? (e) => e.potenzaNominale === state.filters.pn24
            : (e) => e
        );

        const pn28_filter = pn24_filter.filter(
          state.filters.pn28
            ? (e) => e.potenzaNominale === state.filters.pn28
            : (e) => e
        );

        const pn30_filter = pn28_filter.filter(
          state.filters.pn30
            ? (e) => e.potenzaNominale === state.filters.pn30
            : (e) => e
        );

        const esterno_filter = pn30_filter.filter(
          state.filters.esterno
            ? (e) => e.utilizzo === state.filters.esterno
            : (e) => e
        );

        const interno_filter = esterno_filter.filter(
          state.filters.interno
            ? (e) => e.utilizzo === state.filters.interno
            : (e) => e
        );

        const internoEsterno_filter = interno_filter.filter(
          state.filters.internoEsterno
            ? (e) => e.utilizzo === state.filters.internoEsterno
            : (e) => e
        );

        const stars5_filter = internoEsterno_filter.filter(
          state.filters.stars5
            ? (e) => e.stelle === Number(state.filters.stars5)
            : (e) => e
        );

        const stars4_filter = stars5_filter.filter(
          state.filters.stars4
            ? (e) => e.stelle === Number(state.filters.stars4)
            : (e) => e
        );

        const stars3_filter = stars4_filter.filter(
          state.filters.stars3
            ? (e) => e.stelle === Number(state.filters.stars3)
            : (e) => e
        );

        const stars2_filter = stars3_filter.filter(
          state.filters.stars2
            ? (e) => e.stelle === Number(state.filters.stars2)
            : (e) => e
        );

        const stars1_filter = stars2_filter.filter(
          state.filters.stars1
            ? (e) => e.stelle === Number(state.filters.stars1)
            : (e) => e
        );

        setBoiler(stars1_filter);

        // const lollo = [];
        // const giggi = Object.entries(state.filters);
        // console.log("giggi", giggi);
        // giggi.map((e) => (e[1] ? lollo.push(e) : ""));
        // console.log("lollo", lollo);
        //
        // const fifo = Object.fromEntries(lollo);
        // console.log(fifo);
      }
    }
    fetchData();
  }, [
    state.filters.disponibile,
    state.filters.inSconto,
    state.filters.ariston,
    state.filters.baxi,
    state.filters.condensazione,
    state.filters.cameraAperta,
    state.filters.cameraStagna,
    state.filters.elettrica,
    state.filters.metano,
    state.filters.pn19,
    state.filters.pn24,
    state.filters.pn28,
    state.filters.pn30,
    state.filters.esterno,
    state.filters.interno,
    state.filters.internoEsterno,
    state.filters.stars5,
    state.filters.stars4,
    state.filters.stars3,
    state.filters.stars2,
    state.filters.stars1,
  ]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get("http://localhost:9000/boilers");
  //     if (response.status === 200) {
  //       // console.log(response);
  //       setBoiler(response.data);
  //     }
  //   }
  //   fetchData();
  // }, [state.filter]);

  // console.log("prova", boiler);
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
