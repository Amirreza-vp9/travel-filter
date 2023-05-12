import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Box, TextField, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const textFielTheme = createTheme({
  direction: "rtl",
  palette: {
    orange: {
      main: "#f24c4c",
    },
    gray: {
      main: "rgba(0, 0, 0, 0.38)",
    },
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const CTextField = ({ label, arr, defaultOption }) => {
  const [select, setSelect] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [inputValue, setInputValue] = useState(defaultOption);
  const [inputValue2, setInputValue2] = useState(defaultOption);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={textFielTheme}>
        <div dir="rtl" style={{ position: "relative" }}>
          <TextField
            label={label}
            color="orange"
            value={inputValue}
            autoFocus={true}
            size="small"
            onSelect={() => {
              setSelect(true);
              setOpenModal(true);
            }}
            onBlur={() => setSelect(false)}
            InputLabelProps={{
              style: {
                color: `${select ? "#f24c4c" : "rgba(0, 0, 0, 0.38)"}`,
              },
            }}
            InputProps={{
              style: { fontSize: ".8rem" },
            }}
            sx={{
              "&:hover": {
                borderColor: "black",
              },
              borderColor: "rgba(0, 0, 0, 0.38)",
              display: { sm: "none", xs: "block" },
            }}
          />
          <KeyboardArrowDownIcon
            color="gray"
            sx={{
              position: "absolute",
              right: ".15em",
              top: ".25em",
              display: { sm: "none", xs: "block" },
            }}
          />

          {/* responsive */}
          <FormControl
            sx={{ width: "10.5em", display: { sm: "flex", xs: "none" } }}
            color="orange"
          >
            <InputLabel
              id="customlabel"
              sx={{ fontSize: ".9rem", color: "rgba(0, 0, 0, 0.38)" }}
            >
              {label}
            </InputLabel>
            <Select
              labelId="customlabel"
              id="select"
              value={inputValue}
              onChange={handleChange}
              label={label}
              IconComponent={KeyboardArrowDownIcon}
              size="small"
              sx={{ fontSize: ".75rem" }}
            >
              <MenuItem
                dir="rtl"
                value={arr[0]}
                sx={{
                  width: "10.5em",
                  height: "3em",
                  "&:hover": {
                    backgroundColor: "#f24c4c95",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: ".75rem",
                    fontWeight: "bold",
                    marginLeft: "1.25em",
                  }}
                >
                  {arr[0]}
                </Typography>
              </MenuItem>
              <Radio
                color="orange"
                size="small"
                sx={{ position: "absolute", top: ".75em", left: "0" }}
                checked={inputValue === arr[0] ? true : false}
              />
              <MenuItem
                dir="rtl"
                value={arr[1]}
                sx={{
                  width: "10.5em",
                  height: "3em",
                  "&:hover": {
                    backgroundColor: "#f24c4c95",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: ".75rem",
                    fontWeight: "bold",
                    marginLeft: "1.25em",
                  }}
                >
                  {arr[1]}
                </Typography>
              </MenuItem>
              <Radio
                color="orange"
                size="small"
                sx={{ position: "absolute", top: "3.75em", left: "0" }}
                checked={inputValue === arr[1] ? true : false}
              />
              {arr[2] ? (
                <MenuItem
                  dir="rtl"
                  value={arr[2]}
                  sx={{
                    width: "10.5em",
                    height: "3em",
                    "&:hover": {
                      backgroundColor: "#f24c4c95",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: ".75rem",
                      fontWeight: "bold",
                      marginLeft: "1.25em",
                    }}
                  >
                    {arr[2]}
                  </Typography>
                </MenuItem>
              ) : (
                ""
              )}
              {arr[2] ? (
                <Radio
                  color="orange"
                  size="small"
                  sx={{ position: "absolute", top: "6.75em", left: "0" }}
                  checked={inputValue === arr[2] ? true : false}
                />
              ) : (
                ""
              )}
            </Select>
          </FormControl>
        </div>
        {openModal ? (
          <>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                background: "black",
                opacity: ".4",
                position: "absolute",
                zIndex: "10",
              }}
              onClick={() => setOpenModal(false)}
            ></div>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                flexDirection: "column",
                gap: "2em",
                position: "absolute",
                bottom: "0",
                borderRadius: ".5em",
                padding: "1em",
                zIndex: "15",
                background: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <CloseIcon
                  sx={{
                    marginLeft: "auto",
                    width: "1.25em",
                    height: "1.25em",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenModal(false)}
                />
                <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  {label}
                </Typography>
              </Box>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={inputValue}
                name="radio-buttons-group"
                sx={{
                  marginRight: "auto",
                }}
                onChange={(e) => setInputValue2(e.target.value)}
              >
                <FormControlLabel
                  dir="rtl"
                  value={arr[0]}
                  control={<Radio color="orange" />}
                  label={arr[0]}
                />
                <FormControlLabel
                  dir="rtl"
                  value={arr[1]}
                  control={<Radio color="orange" />}
                  label={arr[1]}
                />
                {arr[2] ? (
                  <FormControlLabel
                    dir="rtl"
                    value={arr[2]}
                    control={<Radio color="orange" />}
                    label={arr[2]}
                  />
                ) : (
                  ""
                )}
              </RadioGroup>
              <Button
                sx={{
                  width: "100%",
                  color: "white",
                  background: "#f24c4c",
                  "&:hover": {
                    background: "#b43a3a",
                  },
                }}
                onClick={() => {
                  setOpenModal(false);
                  setInputValue(inputValue2);
                }}
              >
                support
              </Button>
            </Box>
          </>
        ) : (
          ""
        )}
      </ThemeProvider>
    </CacheProvider>
  );
};
