import React from "react";
import { Body as Div, SubTitle, List } from "../assets/styles/Home";
import { ProductElement } from "../components/ProductElement";

export const Body = () => {
  return (
    <Div>
      <SubTitle>Tendencias</SubTitle>
      <List>
        <ProductElement
          imageURL="https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/DD/B4/936a9a35-e992-4ac2-944f-d16023151e9e.jpg"
          name="OnePlus 7 Pro"
          price="$579"
          stock="Quedan 679 unidades"
        />
        <ProductElement
          imageURL="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
          name="Amazon Echo Dot 3"
          price="$22"
          stock="Quedan 10000 unidades"
        />
        <ProductElement
          imageURL="https://images-na.ssl-images-amazon.com/images/I/71pidzmW9-L._AC_SL1368_.jpg"
          name="Cuerda de luz LED"
          price="$40.79"
          stock="Quedan 10 unidades"
        />
        <ProductElement
          imageURL="https://images-na.ssl-images-amazon.com/images/I/91kRqT4xWfL._AC_SL1500_.jpg"
          name="Sceptre - Monitor LED curvo"
          price="$105"
          stock="Queda 1 unidads"
        />
      </List>
    </Div>
  );
};
