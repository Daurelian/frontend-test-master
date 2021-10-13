import boiler from "./images/boiler.png";
function App() {
  return (
    <div className="container">
      <div className="row">
        <h5 className="order_for">
          Ordina per: migliori recensioni{" "}
          <i class="fas fa-angle-down order_for_icon"></i>
        </h5>
      </div>
      <div className="row">
        <div className="col-2 filter">
          {/* Filtro */}
          <p class="filterTitle">CATEGORIE</p>
          <h5 class="filterSubTitle">Riscaldamento</h5>
          <ol>
            <h5 class="filterSubTitle">Casa e acqua </h5>
            <h5 class="filterSubTitle"> Casa </h5>
            <h5 class="filterSubTitle"> Acqua </h5>
          </ol>
          <hr size="2"></hr>
          <div>
            <h5 class="filterTitle">SCEGLI PER</h5>
            <h5 class="filterSubTitle"> Disponibili </h5>
            <h5 class="filterSubTitle"> In promozione </h5>
            <h5 class="filterTitle">MARCHE</h5>
            <h5 class="filterSubTitle container_filter">
              {" "}
              <input type="checkbox"></input> <span class="checkmark"></span>{" "}
              Ariston{" "}
            </h5>
            <h5 class="filterSubTitle"> Baxi </h5>
            <h5 class="filterSubTitle"> Ariston </h5>
            <h5 class="filterTitle">TIPOLOGIA</h5>
            <h5 class="filterSubTitle"> A Condensazione </h5>
            <h5 class="filterSubTitle"> Camera Aperta </h5>
            <h5 class="filterSubTitle"> Camera Stagna </h5>
            <h5 class="filterTitle">ALIMENTAZIONE</h5>
            <h5 class="filterSubTitle"> Elettrica </h5>
            <h5 class="filterSubTitle"> Metano </h5>
            <h5 class="filterTitle">Utilizzo</h5>
            <h5 class="filterSubTitle"> Esterno</h5>
            <h5 class="filterSubTitle"> Interno </h5>
            <h5 class="filterSubTitle"> Interno/Esterno </h5>
            <h5 class="filterTitle">POTENZA NOMINALE(kW)</h5>
            <h5 class="filterSubTitle"> 19.5 </h5>
            <h5 class="filterSubTitle"> 24 </h5>
            <h5 class="filterSubTitle"> 25 </h5>
            <h5 class="filterSubTitle"> da 30 a 34</h5>
            <h5 class="filterTitle">RECENSIONI</h5>
            <div>
              <span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 product">
          <div className="row">
            {/* Card */}
            <div className="col-4 card_product">
              <img src={boiler} alt="Boiler_Image" className="image_product" />
              <i class="far fa-heart prefer_product"></i>
              <span className="alert_product">Risparmi il 20%</span>
              <h5 className="title_product">Ariston</h5>
              <p className="description_product">
                Matis condens - Condensing Boiler 24 kW Methane - Indoor
              </p>
              <span className="price_product">1.350,00 €</span>
              <span className="sale_product"> 1.570 €</span>
              <h6 className="information_product">
                Sopralluogo e installazione inclusi
              </h6>
              <hr class="divisor_product"></hr>
              <span class="icon">
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="far fa-star icon_product"></i>
              </span>
              <span className="confront">CONFRONTA</span>
            </div>
            {/* Fine Card */}
            <div className="col-4 card_product">
              <img src={boiler} alt="Boiler_Image" />
              <i class="far fa-heart prefer_product"></i>
              <span className="alert_product">Risparmi il 20%</span>
              <h5 className="title_product">Ariston</h5>
              <p className="description_product">
                Matis condens - Condensing Boiler 24 kW Methane - Indoor
              </p>
              <span className="price_product">1.350,00 €</span>
              <span className="sale_product"> 1.570 €</span>
              <h6 className="information_product">
                Sopralluogo e installazione inclusi
              </h6>
              <hr class="divisor_product"></hr>
              <span class="icon">
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="far fa-star icon_product"></i>
              </span>
              <span className="confront">CONFRONTA</span>
            </div>
            <div className="col-4 card_product">
              <img src={boiler} alt="Boiler_Image" />
              <i class="far fa-heart prefer_product"></i>
              <span className="alert_product">Risparmi il 20%</span>
              <h5 className="title_product">Ariston</h5>
              <p className="description_product">
                Matis condens - Condensing Boiler 24 kW Methane - Indoor
              </p>
              <span className="price_product">1.350,00 €</span>
              <span className="sale_product"> 1.570 €</span>
              <h6 className="information_product">
                Sopralluogo e installazione inclusi
              </h6>
              <hr class="divisor_product"></hr>
              <span class="icon">
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="fas fa-star icon_product"></i>
                <i class="far fa-star icon_product"></i>
              </span>
              <span className="confront">CONFRONTA</span>
            </div>
            <div className="col-4 card_product">
              <img src={boiler} alt="Boiler_Image" />
              <i class="fas fa-star"></i>
              <i class="fas fa-heart"></i>
              <p>Test font Avenir</p>
              <h3>Test font Avenir Black</h3>
            </div>
          </div>

          <div className="col-12">
            <hr class="divisor_footer"></hr>
          </div>
          <div className="row footer">
            <div className="col-4">
              <span className="page_prev">
                <i class="fas fa-angle-left page_icon_prev"></i>Prev
              </span>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <span className="page_next">
                Next<i class="fas fa-angle-right page_icon_next"></i>
              </span>
            </div>
          </div>
        </div>
        {/* <div className='col-4'>
          <i class='fas fa-heart'></i>
        </div>
        <div className='col-4'>
          <i class='fas fa-star'></i>
        </div>
        <div className='col-4'>
          <p>Test font Avenir</p>
          <h3>Test font Avenir Black</h3>
        </div> */}
      </div>
    </div>
  );
}

export default App;
