import boiler from "./images/boiler.png";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {/* Filtro */}
          <label>CATEGORIE</label>
          <p>Riscaldamento</p>
            <ol>
            <p> Casa e acqua </p>
            <p> Casa </p>
            <p> Acqua </p>
          <hr size="2"></hr>
          <div>
            <label>SCEGLI PER</label>
            <p> Disponibili </p>
            <p> In promozione </p> 
            <label>MARCHE</label>
            <p> Ariston </p>
            <p> Baxi </p> 
            <p> Ariston </p>
            <label>TIPOLOGIA</label>
            <p> A Condensazione </p>
            <p> Camera Aperta </p> 
            <p> Camera Stagna </p>
            <label>ALIMENTAZIONE</label>
            <p> Elettrica </p>
            <p> Metano </p> 
            <label>POTENZA NOMINALE(kW)</label>
            <p> 19.5 </p>
            <p> 24 </p> 
            <p> 25 </p> 
            <p> da </p> 
            </div>
            </ol>
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


