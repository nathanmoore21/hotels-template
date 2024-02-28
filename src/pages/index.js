import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HomePageGrid from "../components/HomePageGrid"; 
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; 

function Index() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        <HomePageGrid />
        <Link to="/results" className="router-link">
          Results
        </Link>
        <Footer />
      </div>
    </div>
  );
}

export default Index;
