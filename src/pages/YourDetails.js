import React from "react";
// Import the components to be used in this file
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Stepper from "../components/Stepper";
import YourDetailsLayout from "../components/YourDetailsLayout";
import Footer from "../components/Footer";

// Define the YourDetails component
function YourDetails() {
  // Return YourDetails component
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        <Stepper />
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          <YourDetailsLayout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default YourDetails;
