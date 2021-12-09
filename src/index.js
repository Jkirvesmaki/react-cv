import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

theme.typography.h3 = {
  fontFamily: ["Abel", "Sans-Serif"].join(","),
  fontSize: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
theme.typography.h4 = {
  fontFamily: ["Abel", "Sans-Serif"].join(","),
  fontSize: "1.2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};
theme.typography.h6 = {
  fontFamily: ["Abel", "Sans-Serif"].join(","),
  fontSize: "1.1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
