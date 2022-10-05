import { getProducts } from "../../services/getProducts";
import { useState } from "react";
import { useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductsList.css";
import { api } from "../../lib/axios";
import { Total } from "../Total/Total";

export const ProductsList = ({ products, setCurrentSale, currentSale }) => {
  function handleClick(productId) {
    const product = products.find((product) => {
      return product.id === productId;
    });
    if (
      currentSale.some((item) => {
        return item.id === product.id;
      })
    ) {
      const productIndex = currentSale.findIndex((item) => {
        return item.id === product.id;
      });
      const currentSaleCopy = [...currentSale];
      currentSaleCopy[productIndex].unidades++;
      setCurrentSale(currentSaleCopy);
    } else {
      product.unidades = 1;
      setCurrentSale([...currentSale, product]);
    }
  }
  return (
    <ul className="productsList">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};
