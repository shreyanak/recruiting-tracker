import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = ["Online Assesment ", "Interview", "Final Round", "Offer"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
    const [clicked, setClicked] = React.useState(false);


  const isClicked = () => {
      setClicked(!clicked)
      
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };


  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <IconButton onClick={isClicked}>
                {clicked ? (
                  <CheckCircleIcon sx={{ color: "#a5d6a7" }} />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </IconButton>

              <Typography
                style={{ textAlign: "center", fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {label}
              </Typography>
            </Step>
          );
        })}
          </Stepper>
    </Box>
  );
}
