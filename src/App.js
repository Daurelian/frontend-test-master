import React, { useState } from "react";
import Filter from "./components/filter";
import Cards from "./components/cards";

function App() {

  const [boiler, setBoiler] = useState([])

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
         </div>
        </div>
       </div>
  );
}

export default App;
