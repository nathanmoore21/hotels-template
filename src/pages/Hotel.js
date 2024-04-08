import React from "react"; // Import the React library
import { Link } from "react-router-dom"; // Import the Link component
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import HotelGrid from "../components/HotelGrid"; // Import the HotelGrid component
import Footer from "../components/Footer"; // Import the Footer component

// Define the Hotels component
function Hotels() {
  return (
    <div>
      {/* // ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        {/* // HotelGrid component */}
        <HotelGrid />
        {/* // link to the YourDetails page */}
        <Link to="/YourDetails" className="router-link">
          <h1>Checkout</h1>
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default Hotels;
