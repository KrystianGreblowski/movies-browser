import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
