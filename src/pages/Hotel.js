import React from "react";
import { Link } from "react-router-dom"; 
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HotelGrid from "../components/HotelGrid";
import Footer from "../components/Footer";

function Hotels() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        <HotelGrid />
        <Link to="/YourDetails" className="router-link">
          <h1>Checkout</h1>
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default Hotels;
