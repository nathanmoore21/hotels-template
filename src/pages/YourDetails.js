import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import Stepper from "../components/Stepper"; // Import the Stepper component
import YourDetailsLayout from "../components/YourDetailsLayout"; // Import the YourDetailsLayout component
import Footer from "../components/Footer"; // Import the Footer component

// Define the YourDetails component
function YourDetails() {
  // Return YourDetails component
  return (
    <div>
      {/* ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {/* Stepper component */}
        <Stepper />
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {/* YourDetailsLayout component */}
          <YourDetailsLayout />
        </div>
        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default YourDetails;
