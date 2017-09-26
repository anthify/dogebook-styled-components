import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducer from "./reducers/";

import { ThemeProvider } from "styled-components";
import theme from "./themes/facebook"; // or twitter
import Feed from "./containers/Feed";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Feed />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
