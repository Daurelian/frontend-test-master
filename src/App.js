import React, { useState } from "react";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Footer from "./components/footer";

function App() {
  const [boiler, setBoiler] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <h5 className="order_for">
          Ordina per: migliori recensioni{" "}
          <i class="fas fa-angle-down order_for_icon"></i>
        </h5>
      </div>
      <div className="row">
        <Filter />

        <div className="col-9 product">
          <Cards boiler={boiler} setBoiler={setBoiler} />
          <Footer />
        </div>
      </div>
      <div className="row">
        <div className="col-6 banner">
          <h6 className="text_confront">Seleziona altri due prodotti</h6>
        </div>
        <div className="col-6 banner">
          <button type="button" className="button_confront">
            CONFRONTA
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
