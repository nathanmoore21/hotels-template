import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import HomePageGrid from "../components/HomePageGrid"; // Import the HomePageGrid component
import Footer from "../components/Footer"; // Import the Footer component
import Search from "../components/Search"; // Import the Search component

// Define the Index component
function Index() {
  return (
    <div>
      {/* // ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div style={{ paddingTop: "70px" }}>
        {" "}
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {" "}
          <h2>Where to?</h2>
          {/* // Search component */}
          <Search />
        </div>{" "}
        <div style={{ width: "80%", margin: "0 auto", paddingBottom: "30px" }}>
          {/* // HomePageGrid component */}
          <HomePageGrid />
        </div>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Index;
