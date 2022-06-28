import './App.css';

function App() {
  return (
    <div className="App">
      <div className="containerProduct">
        <div className="ImageProduct"></div>
        <div className="textProduct">
          <span className="textPerfume">PERFUME</span>
          <h1 className="titleNameProduct">Gabrielle Essence Eau De Parfum</h1>
          <p className="descritionProduct">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="prices">
            <span className="pricePrincipal">$149.99</span>
            <span className="priceAntigo">$169.99</span>
          </div>
          <button className="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
