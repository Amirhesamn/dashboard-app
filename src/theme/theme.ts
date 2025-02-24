import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
});

export default theme;
