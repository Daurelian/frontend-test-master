import React from "react";

export default function Banner({ state }) {
  if (state.product.length === 0) return "";
  else if (state.product.length === 1)
    return (
      <>
        <div className="col-6 banner">
          <h6 className="text_confront">Seleziona altri due prodotti</h6>
        </div>
        <div className="col-6 banner">
          <button type="button" className="button_confront">
            CONFRONTA
          </button>
        </div>
      </>
    );
  else if (state.product.length === 2)
    return (
      <>
        <div className="col-6 banner">
          <h6 className="text_confront">Seleziona un'altro prodotto</h6>
        </div>
        <div className="col-6 banner">
          <button type="button" className="button_confront">
            CONFRONTA
          </button>
        </div>
      </>
    );
  else if (state.product.length === 3)
    return (
      <>
        <div className="col-6 banner">
          <h6 className="text_confront">Può essere fatto il confronto</h6>
        </div>
        <div className="col-6 banner">
          <button type="button" className="button_confront">
            CONFRONTA
          </button>
        </div>
      </>
    );
  else if (state.product.length > 3)
    return (
      <>
        <div className="col-6 banner">
          <h6 className="text_confront">
            Hai selezionato troppi prodotti, selezionane solo 3
          </h6>
        </div>
        <div className="col-6 banner">
          <button type="button" className="button_confront">
            CONFRONTA
          </button>
        </div>
      </>
    );
}
