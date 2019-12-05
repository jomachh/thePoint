import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #0097a7;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 500px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.44);
  border-radius: 5px;
  background: #b2ebf2;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  position: absolute;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  color: white;
  font-size: 55px;
`;

export const Input = styled.input`
  border: 1px solid white;
  border-radius: 5px;
  height: 35px;
  width: 80%;
  padding: 5px;
  margin: 5px;
  background: #00bcd4;
  color: white;
  font-size: 20px;
  font-family: "Raleway", sans-serif;

  &::placeholder {
    color: white;
  }
`;

export const Text = styled.p`
  color: #0097a7;
  font-family: "Raleway", sans-serif;
  font-size: 35px;
`;

export const Submit = styled.button`
  text-decoration: none;
  background: #ff9800;
  border: 2px solid white;
  width: 85%;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Cancel = styled(Link)`
  text-decoration: none;
  background: #bdbdbd;
  border: 2px solid white;
  width: 80%;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
