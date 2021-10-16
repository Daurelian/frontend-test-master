import React from "react";

export default function Filter(props) {
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
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Disponibili</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>In promozione </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">MARCHE</h5>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Ariston</span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Baxi</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Ariston </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">TIPOLOGIA</h5>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>A Condensazione</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Camera Aperta</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span> Camera Stagna</span> <span>(3)</span>
        </div>
        <h5 class="filterTitle">ALIMENTAZIONE</h5>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Elettrica</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>{" "}
          <span>Metano </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">UTILIZZO</h5>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>{" "}
          <span> Esterno </span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Interno</span> <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span>Interno/Esterno</span> <span>(3)</span>
        </div>
        <h5 class="filterTitle">POTENZA NOMINALE(kW)</h5>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>
          <span> 19.5 </span>
          <span>(3)</span>{" "}
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>{" "}
          <span>24 </span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>{" "}
          <span>25 </span>
          <span>(3)</span>
        </div>
        <div class="filterSubTitle container_filter">
          <input type="checkbox"></input> <span class="checkmark"></span>{" "}
          <span>da 30 a 34 </span>
          <span>(3)</span>
        </div>
        <h5 class="filterTitle">RECENSIONI</h5>
        <div class="footer-filter">
          <div class="star-distance container_filter">
            <div>
              <input type="checkbox"></input> <span class="checkmark"></span>
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
              <input type="checkbox"></input> <span class="checkmark"></span>
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
              <input type="checkbox"></input> <span class="checkmark"></span>
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
              <input type="checkbox"></input> <span class="checkmark"></span>
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
              <input type="checkbox"></input> <span class="checkmark"></span>
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
