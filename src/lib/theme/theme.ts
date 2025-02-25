import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#3B82F6", // Tailwind blue-500
    },
    secondary: {
      main: "#EF4444", // Tailwind red-500
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default theme;
