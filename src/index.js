import React from "react";
import ReactDOM from "react-dom/client"; 
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
