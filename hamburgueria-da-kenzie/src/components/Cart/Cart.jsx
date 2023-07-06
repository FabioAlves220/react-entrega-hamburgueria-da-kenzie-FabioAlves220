import "./Cart.css";
import { CartCard } from "../CartCard/CartCard";
export const Cart = ({ currentSale, setCurrentSale }) => {
  const total = currentSale.reduce(
    (acc, cur) => acc + cur.price * cur.unidades,
    0
  );

  const productsArray = currentSale;

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
      {productsArray.length > 0 && (
        <div className="totalBox">
          <div className="totalContainer">
            <h2>Total</h2>
            <span>{`R$ ${total.toFixed(2)}`}</span>
          </div>
          <button className="comprarButton">Finalizar Compra</button>
          <button className="removerButton" onClick={() => setCurrentSale([])}>
            Limpar o carrinho
          </button>
        </div>
      )}
      {productsArray.length === 0 && (
        <div className="totalBox">
          <div className="emptyContainer">
            <h2>Seu carrinho está vazio</h2>
            <span>Adicione items</span>
          </div>
        </div>
      )}
    </div>
  );
};
