import "./ProductCard.css";

export const ProductCard = ({
  product,
  setCurrentSale,
  currentSale,
  handleClick,
}) => {
  return (
    <li className="productCard">
      <div className="imgBox">
        <img src={product.img} />
      </div>
      <div className="infoBox">
        <h2 className="productName">{product.name}</h2>
        <span className="category">{product.category}</span>
        <span className="price">{`R$ ${product.price}`}</span>
        <button className="addButton" onClick={() => handleClick(product.id)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
