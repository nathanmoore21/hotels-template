import * as React from "react"; // * as React is used to import the entire React library
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";

// Create the IndicatorTopStepper component
export default function IndicatorTopStepper() {
  return (
    // Add the Stepper component
    // --StepIndicator-size is used to set the size of the step indicator
    <Stepper sx={{ width: "100%", "--StepIndicator-size": "42px" }}>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator
            variant="solid"
            color="#1169E0"
            // sx is used to add custom styles to the StepIndicator component
            sx={{
              color: "#ffffff",
              backgroundColor: "#1169E0",
            }}
          >
            1
          </StepIndicator>
        }
      ></Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator
            variant="outlined"
            sx={{ color: "#191E3A", borderColor: "#1169E0" }}
          >
            2
          </StepIndicator>
        }
      ></Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator
            variant="outlined"
            sx={{ color: "#191E3A", borderColor: "#1169E0" }}
          >
            3
          </StepIndicator>
        }
      ></Step>
    </Stepper>
  );
}
