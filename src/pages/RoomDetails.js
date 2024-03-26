import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import StepperRoom from "../components/StepperRoom";
import RoomDetailsLayout from "../components/RoomDetailsLayout";
import Footer from "../components/Footer";

function RoomDetails() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        <StepperRoom />
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          <RoomDetailsLayout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RoomDetails;
