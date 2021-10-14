import React from "react";

export default function Filter (props){

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
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>
              Disponibili <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>
              In promozione <span>(3)</span>
            </h5>
            <h5 class="filterTitle">MARCHE</h5>
            <h5 class="filterSubTitle container_filter">
              <input type="checkbox"></input> <span class="checkmark"></span>
              Ariston<span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Baxi <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Ariston <span>(3)</span>
            </h5>
            <h5 class="filterTitle">TIPOLOGIA</h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span> A
              Condensazione <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Camera Aperta <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Camera Stagna <span>(3)</span>
            </h5>
            <h5 class="filterTitle">ALIMENTAZIONE</h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Elettrica <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Metano <span>(3)</span>
            </h5>
            <h5 class="filterTitle">UTILIZZO</h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Esterno<span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Interno <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Interno/Esterno <span>(3)</span>
            </h5>
            <h5 class="filterTitle">POTENZA NOMINALE(kW)</h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              19.5<span>(3)</span>{" "}
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span> 24{" "}
              <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span> 25{" "}
              <span>(3)</span>
            </h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span> da
              30 a 34<span>(3)</span>
            </h5>
            <h5 class="filterTitle">RECENSIONI</h5>
            <div class="footer-filter">
              <div class="star-distance container_filter">
                <div>
                  <input type="checkbox"></input>{" "}
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
                  <input type="checkbox"></input>{" "}
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
                  <input type="checkbox"></input>{" "}
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
                  <input type="checkbox"></input>{" "}
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
                  <input type="checkbox"></input>{" "}
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
    
)








}