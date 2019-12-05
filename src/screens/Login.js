import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import store from "../store/store";

import {
  Container,
  FormContainer,
  TitleContainer,
  Title,
  Input,
  Text,
  Submit,
  Cancel,
  Div
} from "../assets/styles/Login";

import ROUTES from "../constants/routes.json";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isLogged: false
  };

  handleSubmit = () => {
    const username = this.state.username;
    const password = this.state.password;

    if (
      username === this.props.user.username &&
      password === this.props.user.password
    ) {
      const data = {
        isLogged: true,
        fname: "José",
        lname: "Chavarría"
      };

      this.setState({
        isLogged: true
      });

      store.dispatch({
        type: "SET_USERDATA",
        payload: {
          customer: data
        }
      });
    }
  };

  render() {
    return (
      <div>
        <TitleContainer>
          {this.state.isLogged ? <Redirect to={ROUTES.HOME} /> : null}
          <Title>The Point</Title>
        </TitleContainer>
        <Container>
          <FormContainer>
            <Div>
              <Text>Inicia sesión</Text>
              <Input
                placeholder="Nombre de usuario"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <Input
                placeholder="Contraseña"
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Div>
            <Div>
              <Submit onClick={() => this.handleSubmit()}>Ingresar</Submit>
              <Cancel to={ROUTES.HOME}>Regresar al inicio</Cancel>
            </Div>
          </FormContainer>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Login);
