import React from "react";
import { Box, Typography } from "@mui/material";
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

function CardHead() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5em",
          color: "#c0c0c0",
          padding: ".5em",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: ".8rem",
            letterSpacing: "-.5px",
          }}
        >
          The hotel
        </Typography>
        <ApartmentOutlinedIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5em",
          backgroundColor: "#f24c4c",
          color: "white",
          padding: ".5em",
          borderTopLeftRadius: ".5em",
          borderTopRightRadius: ".5em",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "800",
            fontSize: ".8rem",
            letterSpacing: "-.5px",
          }}
        >
          aviation
        </Typography>
        <LocalAirportOutlinedIcon />
      </Box>
    </Box>
  );
}

export default CardHead;
