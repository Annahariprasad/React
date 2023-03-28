import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C2C2E",
      dark: "#224DFF",
    },
    secondary: {
      main: "#696A6E",
      light: "#F7F8FA",
    },
    success: {
      main: "#17A076",
      light: "#F2FCFB",
    },
    warning: {
      main: "#A08817",
      light: "#FAF8EB",
    },
    error: {
      main: "#224DFF",
    },
  },

  typography: {
    h1: {
      // fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
    },
    subtitle1: {
      // fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      // fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      // fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
    caption: {
      // fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
    },
  },
});

export default theme;
