import { useState } from "react";
import { Total } from "../Total/Total";
import "./Cart.css";
import { CartCard } from "../CartCard/CartCard";
export const Cart = ({ currentSale, setCurrentSale }) => {
  const total = currentSale.reduce(
    (acc, cur) => acc + cur.price * cur.unidades,
    0
  );
  console.log(total);

  function removeAll(currentSale, setCurrentSale) {
    setCurrentSale([]);
  }

  return (
    <div className="cartBox">
      <div className="cartTitleBox">
        <h1 className="cartTitle">Carrinho de compras</h1>
      </div>
      <ul>
        {currentSale.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            unidades={product.unidades}
          />
        ))}
      </ul>
      <div className="totalBox">
        <div className="totalContainer">
          <h2>Total</h2>
          <span>{`R$ ${total.toFixed(2)}`}</span>
        </div>
        <button className="removerButton" onClick={() => setCurrentSale([])}>
          Remover Todos
        </button>
      </div>
    </div>
  );
};
