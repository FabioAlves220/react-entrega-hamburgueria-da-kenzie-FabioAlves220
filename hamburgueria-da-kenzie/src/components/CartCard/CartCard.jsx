import "./CartCard.css";
export const CartCard = ({
  product,
  products,
  setCurrentSale,
  currentSale,
  unidades,
}) => {
  function handleRemove(productRemoveId) {
    const newArr = currentSale.filter((product) => {
      return product.id !== productRemoveId;
    });
    setCurrentSale(newArr);
  }

  return (
    <li className="cartProductCard">
      <div className="cartImgBox">
        <img src={product.img} />
      </div>
      <div className="cartInfoBox">
        <div className="nameAndCategory">
          <h2 className="cartProductName">{product.name}</h2>
          <span className="cartCategory">{product.category}</span>
        </div>
        <div className="cartButtonBox">
          <button
            className="removeButton"
            onClick={() => handleRemove(product.id)}
          >
            Remover
          </button>
          <span className="unidades">{unidades}</span>
        </div>
      </div>
    </li>
  );
};
