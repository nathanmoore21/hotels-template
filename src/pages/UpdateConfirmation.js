import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import the faCheckCircle icon
import { Link } from "react-router-dom"; // Import the Link component
import Button from "@mui/material/Button"; // Import the Button component

// Define the Confirmation component
function Confirmation() {
  return (
    //relatively position the div
    //set the height of the div to 100vh (100% of the viewport height)
    <div style={{ position: "relative", height: "100vh" }}>
      {/* ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div
        style={{
          position: "absolute", // Set position to absolute
          top: "50%", // Set top to 50%
          left: "50%", // Set left to 50%
          transform: "translate(-50%, -50%)", // Translate the div to the center of the screen
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          height: "30%",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          border: "2px solid #1169E0",
          overflow: "auto",
        }}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{
            fontSize: "3vw",
            color: "green",
          }}
        />

        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: "bold",
            marginBottom: "0",
            marginTop: "10px",
          }}
        >
          Your booking has been updated
        </p>
        <p
          style={{
            fontSize: "1vw",
          }}
        >
          Booking Code: MQ1234
        </p>
        <Link to="/" className="router-link">
          <Button
            color="primary"
            variant="contained"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
