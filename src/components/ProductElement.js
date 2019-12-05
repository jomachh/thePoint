import React from "react";
import {
  ElementContainer,
  Image,
  Divider,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  Stock
} from "../assets/styles/Home";

export const ProductElement = ({ imageURL, name, price, stock }) => {
  return (
    <ElementContainer>
      <Image src={imageURL} alt="producto" />
      <Divider />
      <ProductDetails>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
        <Stock>{stock}</Stock>
      </ProductDetails>
    </ElementContainer>
  );
};
