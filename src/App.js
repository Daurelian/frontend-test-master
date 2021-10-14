import React, { useState } from "react";
import Filter from "./components/filter";
import Cards from "./components/cards";

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
          <div className="col-12">
            <hr class="divisor_footer"></hr>
          </div>
          <div className="row footer">
            <div className="col-4">
              <span className="page_prev">
                <i class="fas fa-angle-left page_icon_prev"></i>Prev
              </span>
            </div>
            <div className="col-4">
              <ul className="ul_footer">
                <a class="active list_link" href="#home">
                  <li className="li_footer">1</li>
                </a>
                <a class="active list_link" href="#home">
                  <li className="li_footer">2</li>
                </a>
                <a class="active list_link" href="#home">
                  <li className="li_footer">3</li>
                </a>
              </ul>
            </div>
            <div className="col-4">
              <span className="page_next">
                Next<i class="fas fa-angle-right page_icon_next"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
