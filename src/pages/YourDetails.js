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
      {/* Add padding to the top of the page for the fixed position of the app bar */}
      <div style={{ paddingTop: "70px" }}>
        <Stepper />
        <YourDetailsLayout />
        <Footer />
      </div>
    </div>
  );
}

export default YourDetails;
