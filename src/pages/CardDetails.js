import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import StepperCard from "../components/StepperCard"; // Import the StepperCard component
import CardDetailsLayout from "../components/CardDetailsLayout"; // Import the CardDetailsLayout component
import Footer from "../components/Footer"; // Import the Footer component

// Define the CardDetails component
function CardDetails() {
  return (
    <div>
      {/* // ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {/* // StepperCard component */}
        <StepperCard />
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {/* // CardDetailsLayout component */}
          <CardDetailsLayout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CardDetails;
