import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Container from "./containers/App.js";
import store from "./store/index.js";


render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
)
