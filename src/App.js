function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {/* Filtro */}

          <div>
          <label>CATEGORIE</label>
          <p>Riscaldamento
            <ol>
            <p> Casa e acqua </p>
            <p> Casa </p>
            <p> Acqua </p>
            </ol>
          </p>
          </div>
          
        </div>
        <div className="col-8">
          <div className="row">
            {/* Card */}
            <div className="col-4">
              <i class="fas fa-heart"></i>
            </div>
            <div className="col-4">
              <i class="fas fa-star"></i>
            </div>
            <div className="col-4">
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
