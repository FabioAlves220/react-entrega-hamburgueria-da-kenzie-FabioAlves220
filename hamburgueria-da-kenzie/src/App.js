import logo from "../src/assets/logo.png";
import { useState, useEffect } from "react";
import { ProductsList } from "./components/ProductList/ProductsList";

import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { api } from "./lib/axios";

import { normalizeString } from "./lib/normalize";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} />
          <div className="searchBox">
            <input
              type="text"
              // onChange={(event) => filterProducts(event.target.value)}
              onChange={(event) => setFilter(event.target.value)}
            ></input>
            <button
              onClick={() => {
                filterProducts(filter);
                toast("🦄 Wow so easy!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
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
      <ToastContainer />
    </>
  );
}

export default App;
