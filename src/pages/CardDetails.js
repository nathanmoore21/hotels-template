import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import StepperCard from "../components/StepperCard";
import CardDetailsLayout from "../components/CardDetailsLayout";
import Footer from "../components/Footer";

function CardDetails() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        <StepperCard />
        <CardDetailsLayout />
        <Footer />
      </div>
    </div>
  );
}

export default CardDetails;
