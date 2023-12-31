import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ProgressBar from "./ProgressBar";

export default function HorizontalLinearStepper() {
  const [clicked1, setClicked1] = React.useState(false);
  const [clicked2, setClicked2] = React.useState(false);
  const [clicked3, setClicked3] = React.useState(false);
  const [clicked4, setClicked4] = React.useState(false);

  const click1 = () => {
    setClicked1(!clicked1);
  };

  const click2 = () => {
    setClicked2(!clicked2);
  };

  const click3 = () => {
    setClicked3(!clicked3);
  };

   const click4 = () => {
     setClicked4(!clicked4);
   };

  return (
    <Stack direction="row">
      <div>
        {clicked1 ? (
          <IconButton
            sx={{ marginTop: "-12px", marginLeft: "100px" }}
            onClick={click1}
          >
            <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
          </IconButton>
        ) : (
          <IconButton
            sx={{ marginTop: "-12px", marginLeft: "100px" }}
            onClick={click1}
          >
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}
        <Typography
          sx={{ marginTop: "10px", marginLeft: "50px" }}
          color="text.secondary"
          gutterBottom
        >
          Online Assesment
        </Typography>
      </div>
      <div>
        {clicked2 ? (
          <>
            <IconButton
              sx={{ marginTop: "-12px", marginLeft: "300px" }}
              onClick={click2}
            >
              <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
            </IconButton>
            <Box
              sx={{
                marginTop: "-23px",
                marginRight: "55px",
                marginLeft: "-40px",
              }}
            >
              <ProgressBar />
            </Box>
          </>
        ) : (
          <IconButton
            sx={{ marginTop: "-12px", marginLeft: "300px" }}
            onClick={click2}
          >
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}
        <Typography
          sx={{ marginTop: "10px", marginLeft: "285px" }}
          color="text.secondary"
          gutterBottom
        >
          Interview
        </Typography>
      </div>
      <div>
        {clicked3 ? (
          <>
            <IconButton
              sx={{ marginTop: "-12px", marginLeft: "300px" }}
              onClick={click3}
            >
              <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
            </IconButton>
            <Box
              sx={{
                marginTop: "-23px",
                marginRight: "70px",
                marginLeft: "-15px",
              }}
            >
              <ProgressBar />
            </Box>
          </>
        ) : (
          <IconButton
            sx={{ marginTop: "-12px", marginLeft: "300px" }}
            onClick={click3}
          >
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}
        <Typography
          sx={{ marginTop: "10px", marginLeft: "285px" }}
          color="text.secondary"
          gutterBottom
        >
          Final Round
        </Typography>
      </div>
      <div>
        {clicked4 ? (
          <>
            <IconButton
              sx={{ marginTop: "-12px", marginLeft: "300px" }}
              onClick={click4}
            >
              <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
            </IconButton>
            <Box
              sx={{
                marginTop: "-23px",
                marginRight: "35px",
                marginLeft: "-40px",
              }}
            >
              <ProgressBar />
            </Box>
          </>
        ) : (
          <IconButton
            sx={{ marginTop: "-12px", marginLeft: "300px" }}
            onClick={click4}
          >
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}
        <Typography
          sx={{ marginTop: "10px", marginLeft: "305px" }}
          color="text.secondary"
          gutterBottom
        >
          Offer
        </Typography>
      </div>
    </Stack>
  );
}
