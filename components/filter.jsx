import React from "react";
import { Box, Divider } from "@mui/material";
import CardHead from "./cardHead";

function Filter() {
  return (
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
    </Box>
  );
}

export default Filter;
