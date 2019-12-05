import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background: #00bcd4;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.44);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.44);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 35px;
  margin-left: 10px;
  background: #b2ebf2;
  border-radius: 17px;
  transition: 0.5s;

  &:hover {
    width: 350px;
    background: #ff9800;
  }
`;

export const SearchIconContainer = styled.div`
  margin: 0;
  margin-left: 6px;
  margin-top: 3px;
`;

export const LogInButton = styled(Link)`
  text-decoration: none;
  background: transparent;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  padding: 10px;
  margin-right: 10px;
  transition: 0.5s;

  &:hover {
    background: #ff9800;
    cursor: pointer;
  }
`;

export const SignInButton = styled.button`
  background: transparent;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  padding: 10px;
  margin-right: 10px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  color: white;
  font-size: 35px;
  position: absolute;
  right: 48%;
  margin: 0 auto;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
`;

export const SubTitle = styled.h1`
  font-family: "Raleway", sans-serif;
  color: #0097a7;
  font-size: 30px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ElementContainer = styled.div`
  margin: 10px;
  border-radius: 3px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.44);
  width: 350px;
  transition: 0.3s;
  background: white;

  &:hover {
    background: #0097a7;
    color: white;
  }
`;

export const Image = styled.img`
  width: inherit;
  height: 350px;
  object-fit: cover;
`;

export const Divider = styled.div`
  height: 2px;
  background: #0097a7;
`;

export const ProductDetails = styled.div`
  padding: 10px;
`;

export const ProductTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  color: #212121 || inherit;
  margin: 0;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.h4`
  font-family: "Raleway", sans-serif;
  color: #757575 || inherit;
  margin: 0;
  margin-bottom: 10px;
`;

export const Stock = styled.h5`
  font-family: "Raleway", sans-serif;
  color: #bdbdbd || inherit;
  margin: 0;
`;
