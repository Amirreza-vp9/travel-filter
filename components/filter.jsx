import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";
import CardHead from "./cardHead";
import { CTextField } from "./mui/customComponents";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    orange: {
      main: "#f24c4c",
    },
    gray: {
      main: "rgba(0, 0, 0, 0.38)",
    },
  },
});

function Filter() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "23em",
          backgroundColor: "white",
          border: "1px solid #c0c0c0",
          height: "25em",
          padding: ".5em",
          borderRadius: "1em",
        }}
      >
        <CardHead />
        <Divider sx={{ backgroundColor: "#f24c4c" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1em",
            marginTop: "1.5em",
            width: "100%",
          }}
        >
          <CTextField
            label={"flight category"}
            arr={["Economic", "commercial", "The first kind"]}
            defaultOption="Economic"
          />
          <CTextField
            label={"travel type"}
            arr={["one way trip", "round trip"]}
            defaultOption="one way trip"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Filter;
