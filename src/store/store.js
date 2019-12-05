import { createStore } from "redux";
import reducerProducts from "../reducers/products";

const store = createStore(reducerProducts, {
  customer: {
    isLogged: false,
    fname: "",
    lname: ""
  },
  user: {
    username: "jomachh",
    password: "hola123"
  }
});

export default store;
