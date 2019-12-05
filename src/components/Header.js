import React from "react";
import {
  HeaderContainer,
  Search,
  SearchIconContainer,
  LogInButton,
  SignInButton,
  Title
} from "../assets/styles/Home";
import ROUTES from "../constants/routes.json";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";

export const Header = ({ customer }) => {
  return (
    <div>
      <HeaderContainer>
        <Search>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
        </Search>
        <Title>The Point</Title>
        {!customer.isLogged ? (
          <>
            <div>
              <LogInButton to={ROUTES.LOGIN}>Iniciar sesión</LogInButton>
              <SignInButton>Registrate</SignInButton>
            </div>
          </>
        ) : (
          <></>
        )}
      </HeaderContainer>
    </div>
  );
};
