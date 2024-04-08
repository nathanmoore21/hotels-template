import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import GuestCardDetailsLayout from "../components/GuestCardDetailsLayout"; // Import the GuestCardDetailsLayout component
import Footer from "../components/Footer"; // Import the Footer component

function CardDetails() {
  return (
    <div>
      {/* // ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {/* // GuestCardDetailsLayout component */}
          <GuestCardDetailsLayout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CardDetails;
