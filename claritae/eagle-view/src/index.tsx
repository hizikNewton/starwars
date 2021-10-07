import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import App from "./App";
import { LayoutProvider } from "./context/providers";
import themes from "./themes";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <LayoutProvider>
    <ThemeProvider theme={themes.default}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </LayoutProvider>,
  document.getElementById("root")
);
