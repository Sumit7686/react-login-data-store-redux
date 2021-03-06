import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { SignUpReducer } from "./Reducers/SignUpReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(SignUpReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
