import boiler from "./images/boiler.png";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {/* Filtro */}
          <p class="filterTitle">CATEGORIE</p>
          <h5>Riscaldamento</h5>
            <ol>
            <h5 class="checkmark"> Casa e acqua </h5>
            <h5> Casa </h5>
            <h5> Acqua </h5>
            </ol>
          <hr size="2"></hr>
          <div>
            <h5 class="filterTitle" >SCEGLI PER</h5>
            <h5> Disponibili </h5>
            <h5> In promozione </h5> 
            <h5 class="filterTitle" >MARCHE</h5>
            <h5> Ariston </h5>
            <h5> Baxi </h5> 
            <h5> Ariston </h5>
            <h5 class="filterTitle">TIPOLOGIA</h5>
            <h5> A Condensazione </h5>
            <h5> Camera Aperta </h5> 
            <h5> Camera Stagna </h5>
            <h5 class="filterTitle">ALIMENTAZIONE</h5>
            <h5> Elettrica </h5>
            <h5> Metano </h5> 
            <h5 class="filterTitle">POTENZA NOMINALE(kW)</h5>
            <h5> 19.5 </h5>
            <h5> 24 </h5> 
            <h5> 25 </h5> 
            <h5> da </h5> 
            <h5 class="filterTitle">RECENSIONI</h5>
             <div>
          <i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>
        </div>
            </div>
        </div>
        <div className="col-8">
          <div className="row">
            {/* Card */}
            <div className="col-4">
              <img src={boiler} alt="Boiler_Image" />
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <i class="fas fa-star"></i>
              <i class="fas fa-heart"></i>
              <p>Test font Avenir</p>
              <h3>Test font Avenir Black</h3>
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


