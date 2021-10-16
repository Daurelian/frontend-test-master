import React, { useState, useReducer } from "react";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Banner from "./components/banner";

/* eslint-disable no-alert */

function App() {
  const [boiler, setBoiler] = useState([]);

  const initialState = {
    id: boiler._id,
    product: [],
    filters: { disponibile: false, inSconto: false },
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

      case "filter_inSconto":
        return {
          ...state,
          filters: { ...state.filters, inSconto: !state.filters.inSconto },
        };

      // case "filter_sconto":
      //   return {
      //     ...state,
      //     filters: {
      //       ...state.filters,
      //       inSconto: !state.filters.inSconto,
      //     },
      //   };

      // case "filter":
      //   return { ...state, filter: action.payload };
      // default:
      //   return state;
      default:
        return state;
    }
  }
  console.log(
    "sconto & disponibile",
    state.filters.inSconto,
    state.filters.disponibile
  );
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
        <Filter dispatch={dispatch} />

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
