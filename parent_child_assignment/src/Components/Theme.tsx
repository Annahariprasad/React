import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#696A6E",
    },
    secondary: {
      main: "#2C2C2E",
    },
  },
  typography: {
    subtitle1: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "20px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
    },
  },
});

export default theme;
