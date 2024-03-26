import * as React from "react";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import { Link } from "react-router-dom";

export default function IndicatorTopStepper() {
  return (
    <Stepper sx={{ width: "100%", "--StepIndicator-size": "42px" }}>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator
            variant="solid"
            color="#1169E0"
            sx={{
              color: "#ffffff",
              backgroundColor: "#1169E0",
            }}
          >
            <Link to="/YourDetails" className="router-link">
              1
            </Link>
          </StepIndicator>
        }
      ></Step>
      <Step
        orientation="vertical"
        indicator={
          <StepIndicator
            variant="solid"
            color="#1169E0"
            sx={{
              color: "#ffffff",
              backgroundColor: "#1169E0",
            }}
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
