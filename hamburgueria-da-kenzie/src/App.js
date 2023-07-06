import logo from "../src/assets/logo.png";
import { useState, useEffect } from "react";
import { ProductsList } from "./components/ProductList/ProductsList";

import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { api } from "./lib/axios";

import { normalizeString } from "./lib/normalize";

function App() {
  const [products, setProducts] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filter, setFilter] = useState("");
  //----------

  useEffect(() => {
    const apiResult = async () => {
      const response = await api.get();
      setProducts(response.data);
      setDisplayList(response.data);
    };
    apiResult();
  }, []);
  //----------
  function filterProducts(search) {
    const searchNormalized = normalizeString(search);
    const filteredList = products.filter((product) => {
      if (
        normalizeString(product.name).includes(searchNormalized) ||
        normalizeString(product.category).includes(searchNormalized)
      ) {
        return true;
      }
      return false;
    });
    setDisplayList(filteredList);
  }

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      filterProducts(filter);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" onClick={handleLogoClick} />
          <div className="searchBox">
            <input
              type="text"
              onChange={(event) => setFilter(event.target.value)}
              onKeyDown={handleKeyDown}
            ></input>
            <button
              className="searchButton"
              onClick={() => {
                filterProducts(filter);
              }}
            >
              Pesquisar
            </button>
          </div>
        </header>
        <div className="main">
          <div className="productListBox">
            <ProductsList
              products={displayList}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              setProducts={setProducts}
            />
          </div>
          <div className="cartBox">
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
