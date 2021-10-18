import React, { useState, useReducer } from "react";
import Filters from "./filters";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Banner from "./components/banner";

/* eslint-disable no-alert */

function App() {
  const [boiler, setBoiler] = useState([]);
  const [filterNumber, setFilterNumber] = useState([]);
  const initialState = {
    id: boiler._id,
    product: [],
    filters: {
      disponibile: false,
      inSconto: false,
      ariston: false,
      baxi: false,
      condensazione: false,
      cameraAperta: false,
      cameraStagna: false,
      elettrica: false,
      metano: false,
      pn19: false,
      pn24: false,
      pn28: false,
      pn30: false,
      esterno: false,
      interno: false,
      internoEsterno: false,
      stars5: false,
      stars4: false,
      stars3: false,
      stars2: false,
      stars1: false,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        if (state.product.includes(action.payload)) {
          const result_array = state.product.filter(
            (e) => e !== action.payload
          );
          return { ...state, product: result_array };
        } else {
          return { ...state, product: [...state.product, action.payload] };
        }

        break;
      case "filter_disponibile":
        return {
          ...state,
          filters: {
            ...state.filters,
            disponibile: !state.filters.disponibile,
          },
        };
        break;
      case "filter_inSconto":
        return {
          ...state,
          filters: { ...state.filters, inSconto: !state.filters.inSconto },
        };
        break;
      case "filter_ariston":
        return {
          ...state,
          filters: {
            ...state.filters,
            ariston: !state.filters.ariston ? action.payload : false,
          },
        };

      case "filter_baxi":
        return {
          ...state,
          filters: {
            ...state.filters,
            baxi: !state.filters.baxi ? action.payload : false,
          },
        };
      case "filter_condensazione":
        return {
          ...state,
          filters: {
            ...state.filters,
            condensazione: !state.filters.condensazione
              ? action.payload
              : false,
          },
        };
      case "filter_cameraAperta":
        return {
          ...state,
          filters: {
            ...state.filters,
            cameraAperta: !state.filters.cameraAperta ? action.payload : false,
          },
        };
      case "filter_cameraStagna":
        return {
          ...state,
          filters: {
            ...state.filters,
            cameraStagna: !state.filters.cameraStagna ? action.payload : false,
          },
        };

      case "filter_elettrica":
        return {
          ...state,
          filters: {
            ...state.filters,
            elettrica: !state.filters.elettrica ? action.payload : false,
          },
        };

      case "filter_metano":
        return {
          ...state,
          filters: {
            ...state.filters,
            metano: !state.filters.metano ? action.payload : false,
          },
        };

      case "filter_pn19":
        return {
          ...state,
          filters: {
            ...state.filters,
            pn19: !state.filters.pn19 ? action.payload : false,
          },
        };

      case "filter_pn24":
        return {
          ...state,
          filters: {
            ...state.filters,
            pn24: !state.filters.pn24 ? action.payload : false,
          },
        };

      case "filter_pn28":
        return {
          ...state,
          filters: {
            ...state.filters,
            pn28: !state.filters.pn28 ? action.payload : false,
          },
        };

      case "filter_pn30":
        return {
          ...state,
          filters: {
            ...state.filters,
            pn30: !state.filters.pn30 ? action.payload : false,
          },
        };

      case "filter_esterno":
        return {
          ...state,
          filters: {
            ...state.filters,
            esterno: !state.filters.esterno ? action.payload : false,
          },
        };

      case "filter_interno":
        return {
          ...state,
          filters: {
            ...state.filters,
            interno: !state.filters.interno ? action.payload : false,
          },
        };

      case "filter_internoEsterno":
        return {
          ...state,
          filters: {
            ...state.filters,
            internoEsterno: !state.filters.internoEsterno
              ? action.payload
              : false,
          },
        };

      case "filter_stars5":
        return {
          ...state,
          filters: {
            ...state.filters,
            stars5: !state.filters.stars5 ? action.payload : false,
          },
        };

      case "filter_stars4":
        return {
          ...state,
          filters: {
            ...state.filters,
            stars4: !state.filters.stars4 ? action.payload : false,
          },
        };

      case "filter_stars3":
        return {
          ...state,
          filters: {
            ...state.filters,
            stars3: !state.filters.stars3 ? action.payload : false,
          },
        };

      case "filter_stars2":
        return {
          ...state,
          filters: {
            ...state.filters,
            stars2: !state.filters.stars2 ? action.payload : false,
          },
        };

      case "filter_stars1":
        return {
          ...state,
          filters: {
            ...state.filters,
            stars1: !state.filters.stars1 ? action.payload : false,
          },
        };

      default:
        return state;
    }
  }

  return (
    <div className="container">
      <div className="row fixed_banner">
        <Banner state={state} />
      </div>
      <div className="row order_row">
        <h5 className="order_for">
          Ordina per: migliori recensioni{" "}
          <i class="fas fa-angle-down order_for_icon"></i>
        </h5>
      </div>
      <div className="row">
        <Filters
          filterNumber={filterNumber}
          setFilterNumber={setFilterNumber}
          dispatch={dispatch}
        />

        <div className="col-9 product">
          <Cards
            boiler={boiler}
            setBoiler={setBoiler}
            state={state}
            dispatch={dispatch}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
