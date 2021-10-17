import React from "react";

export default function Filter({ dispatch }) {
  return (
    <div className="col-3 filter">
      {/* Filtro */}
      <p class="filterTitle">CATEGORIE</p>
      <h5 class="filterSubTitle purple">Riscaldamento</h5>
      <ol>
        <h5 class="filterSubTitle">Casa e acqua </h5>
        <h5 class="filterSubTitle"> Casa </h5>
        <h5 class="filterSubTitle"> Acqua </h5>
      </ol>
      <hr size="3"></hr>
      <div>
        <h5 class="filterTitle">SCEGLI PER</h5>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="true"
            onChange={(event) =>
              dispatch({
                type: "filter_disponibile",
                payload: event.target.value,
              })
            }
          ></input>
          <span class="checkmark"></span>
          <span>Disponibili</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="true"
            onChange={(event) =>
              dispatch({
                type: "filter_inSconto",
                payload: event.target.value,
              })
            }
          ></input>
          <span class="checkmark"></span>
          <span>In promozione </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">MARCHE</h5>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="Ariston"
            onChange={(event) =>
              dispatch({
                type: "filter_ariston",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Ariston</span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="Baxi"
            onChange={(event) =>
              dispatch({
                type: "filter_baxi",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Baxi</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="Ariston"
            onChange={(event) =>
              dispatch({
                type: "filter_ariston",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Ariston </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">TIPOLOGIA</h5>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="condensazione"
            onChange={(event) =>
              dispatch({
                type: "filter_condensazione",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>A Condensazione</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="camera-aperta"
            onChange={(event) =>
              dispatch({
                type: "filter_cameraAperta",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Camera Aperta</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="camera-stagna"
            onChange={(event) =>
              dispatch({
                type: "filter_cameraStagna",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span> Camera Stagna</span> <span>(3)</span>
        </div>
        <h5 class="filterTitle">ALIMENTAZIONE</h5>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="elettrica"
            onChange={(event) =>
              dispatch({
                type: "filter_elettrica",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Elettrica</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="metano"
            onChange={(event) =>
              dispatch({
                type: "filter_metano",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span> <span>Metano </span>
          <span>(3)</span>
        </div>

        <h5 class="filterTitle">POTENZA NOMINALE(kW)</h5>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="19.5"
            onChange={(event) =>
              dispatch({
                type: "filter_pn19",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span> 19.5 </span>
          <span>(3)</span>{" "}
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="24"
            onChange={(event) =>
              dispatch({
                type: "filter_pn24",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span> <span>24 </span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="28"
            onChange={(event) =>
              dispatch({
                type: "filter_pn28",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span> <span>28 </span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="30"
            onChange={(event) =>
              dispatch({
                type: "filter_pn30",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span> <span>da 30 a 34 </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">UTILIZZO</h5>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="esterno"
            onChange={(event) =>
              dispatch({
                type: "filter_esterno",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span> <span> Esterno </span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="interno"
            onChange={(event) =>
              dispatch({
                type: "filter_interno",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Interno</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input
            type="checkbox"
            value="interno-esterno"
            onChange={(event) =>
              dispatch({
                type: "filter_internoEsterno",
                payload: event.target.value,
              })
            }
          ></input>{" "}
          <span class="checkmark"></span>
          <span>Interno/Esterno</span> <span>(3)</span>
        </div>
        <h5 class="filterTitle">RECENSIONI</h5>
        <div class="footer-filter">
          <div class="star-distance container_filter">
            <div>
              <input
                type="checkbox"
                value="5"
                onChange={(event) =>
                  dispatch({
                    type: "filter_stars5",
                    payload: event.target.value,
                  })
                }
              ></input>{" "}
              <span class="checkmark"></span>
            </div>
            <div>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"> </i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
            </div>
            <span>(3)</span>
          </div>
          <div class="star-distance container_filter">
            <div>
              <input
                type="checkbox"
                value="4"
                onChange={(event) =>
                  dispatch({
                    type: "filter_stars4",
                    payload: event.target.value,
                  })
                }
              ></input>{" "}
              <span class="checkmark"></span>
            </div>
            <div>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
            </div>
            <span>(3)</span>
          </div>
          <div class="star-distance container_filter">
            <div>
              <input
                type="checkbox"
                value="3"
                onChange={(event) =>
                  dispatch({
                    type: "filter_stars3",
                    payload: event.target.value,
                  })
                }
              ></input>{" "}
              <span class="checkmark"></span>
            </div>
            <div>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
            </div>
            <span>(3)</span>
          </div>
          <div class="star-distance container_filter">
            <div>
              <input
                type="checkbox"
                value="2"
                onChange={(event) =>
                  dispatch({
                    type: "filter_stars2",
                    payload: event.target.value,
                  })
                }
              ></input>{" "}
              <span class="checkmark"></span>
            </div>
            <div>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
            </div>
            <span>(3)</span>
          </div>
          <div class="star-distance">
            <div class="container_filter">
              <input
                type="checkbox"
                value="1"
                onChange={(event) =>
                  dispatch({
                    type: "filter_stars1",
                    payload: event.target.value,
                  })
                }
              ></input>{" "}
              <span class="checkmark"></span>
            </div>
            <div>
              <i class="fas fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
              <i class="far fa-star star-filter darkPurple"></i>
            </div>
            <span>(3)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
