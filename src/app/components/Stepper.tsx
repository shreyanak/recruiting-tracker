import React from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function HorizontalLinearStepper() {
  const [clicked1, setClicked1] = React.useState(false);
  const [clicked2, setClicked2] = React.useState(false);
  const [clicked3, setClicked3] = React.useState(false);
  const [clicked4, setClicked4] = React.useState(false);

  const handleClick = (setter: any) => {
    setter((prev: any) => !prev);
  };

  return (
    <Stack direction="row">
      <div>
        <IconButton
          sx={{ marginTop: "-12px", marginLeft: "170px" }}
          onClick={() => handleClick(setClicked1)}
        >
          {clicked1 ? (
            <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <Typography
          sx={{ marginTop: "10px", marginLeft: "120px" }}
          color="text.secondary"
          gutterBottom
        >
          Online Assesment
        </Typography>
      </div>
      <div>
        <IconButton
          sx={{ marginTop: "-12px", marginLeft: "300px" }}
          onClick={() => handleClick(setClicked2)}
        >
          {clicked2 ? (
            <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <Box
          sx={{ marginTop: "-23px", marginRight: "55px", marginLeft: "-40px" }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: clicked2 ? "#a5d6a7" : "gray",
              height: clicked2 ? "2px" : "1px",
            }}
          ></Box>
        </Box>
        <Typography
          sx={{ marginTop: "30px", marginLeft: "285px" }}
          color="text.secondary"
          gutterBottom
        >
          Interview
        </Typography>
      </div>
      <div>
        <IconButton
          sx={{ marginTop: "-12px", marginLeft: "300px" }}
          onClick={() => handleClick(setClicked3)}
        >
          {clicked3 ? (
            <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <Box
          sx={{ marginTop: "-23px", marginRight: "70px", marginLeft: "-15px" }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: clicked3 ? "#a5d6a7" : "gray",
              height: clicked3 ? "2px" : "1px",
            }}
          ></Box>
        </Box>
        <Typography
          sx={{ marginTop: "30px", marginLeft: "285px" }}
          color="text.secondary"
          gutterBottom
        >
          Final Round
        </Typography>
      </div>
      <div>
        <IconButton
          sx={{ marginTop: "-12px", marginLeft: "240px" }}
          onClick={() => handleClick(setClicked4)}
        >
          {clicked4 ? (
            <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
          ) : (
            <RadioButtonUncheckedIcon />
          )}
        </IconButton>
        <Box
          sx={{ marginTop: "-23px", marginRight: "40px", marginLeft: "-35px" }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: clicked4 ? "#a5d6a7" : "gray",
              height: clicked4 ? "2px" : "1px",
            }}
          ></Box>
        </Box>
        <Typography
          sx={{ marginTop: "30px", marginLeft: "245px" }}
          color="text.secondary"
          gutterBottom
        >
          Offer
        </Typography>
      </div>
    </Stack>
  );
}

