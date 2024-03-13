import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HomePageGrid from "../components/HomePageGrid";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Search from "../components/Search";

function Index() {
  return (
    <div>
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        {/* <SearchBar /> */}
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {" "}
          <Search />
        </div>{" "}
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
