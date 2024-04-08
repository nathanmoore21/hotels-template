import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import Footer from "../components/Footer"; // Import the Footer component
import PaymentsLayout from "../components/PaymentsLayout"; // Import the PaymentsLayout component

//  Define the RoomDetails component
function RoomDetails() {
  return (
    <div>
      {/* // ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {/* // PaymentsLayout component */}
          <PaymentsLayout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RoomDetails;
