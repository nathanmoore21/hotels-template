import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import StepperRoom from "../components/StepperRoom"; // Import the StepperRoom component
import RoomDetailsLayout from "../components/RoomDetailsLayout"; // Import the RoomDetailsLayout component 
import Footer from "../components/Footer"; // Import the Footer component

//  Define the RoomDetails component
function RoomDetails() {
  return (
    <div>
      {/* // ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        {/* // StepperRoom component */}
        <StepperRoom />
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {/* // RoomDetailsLayout component */}
          <RoomDetailsLayout />
        </div>
        {/* // Footer component */}
        <Footer />
      </div>
    </div>
  );
}

export default RoomDetails;
