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
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              fontWeight: "900",
              fontSize: "16px",
            }}
          >
            Your Unique Booking Code: MQ1234
          </div>
        </div>
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          <CardDetailsLayout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CardDetails;
