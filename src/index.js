import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import App from "./core/App";
import { GlobalStyle } from "./core/GlobalStyle";
import store from "./core/store";

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
