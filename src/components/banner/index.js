import React from "react";

export default function Banner({ state }) {
  if (state.product.length === 0) return "";
  else if (state.product.length === 1)
    return (
      <>
        <div className="col-12 banner">
          <h6 className="text_confront">
            Seleziona altri due prodotti per confrontarli
          </h6>
          <button
            disabled={true}
            type="button"
            className="button_confront_disable"
          >
            CONFRONTA
          </button>
        </div>
      </>
    );
  else if (state.product.length === 2)
    return (
      <>
        <div className="col-12 banner">
          <h6 className="text_confront">
            Seleziona ancora un prodotto per un confronto più dettagliato
          </h6>
          <button
            disabled={true}
            type="button"
            className="button_confront_disable"
          >
            CONFRONTA
          </button>
        </div>
      </>
    );
  else if (state.product.length === 3)
    return (
      <>
        <div className="col-12 banner">
          <h6 className="text_confront">Confronta i modelli selezionati</h6>
          <button type="button" className="button_confront">
            CONFRONTA
          </button>
        </div>
      </>
    );
  else if (state.product.length > 3)
    return (
      <>
        <div className="col-12 banner">
          <h6 className="text_confront">
            Hai selezionato troppi prodotti, selezionane solo 3
          </h6>
          <button
            disabled={true}
            type="button "
            className="button_confront_disable"
          >
            CONFRONTA
          </button>
        </div>
      </>
    );
}
