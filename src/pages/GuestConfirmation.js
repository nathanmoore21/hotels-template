import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; // Import the faCheckCircle icon
import { Link } from "react-router-dom"; // Import the Link component
import Button from "@mui/material/Button"; // Import the Button component

// Define the Confirmation component
function GuestConfirmation() {
  return (
    // Return the Confirmation component
    // relative positioning is used to position the confirmation message in the center of the screen
    // 100vh is used to set the height of the confirmation message to 100% of the viewport height
    <div style={{ position: "relative", height: "100vh" }}>
      {/* // Render the ResponsiveAppBar component */}
      <ResponsiveAppBar />
      <div
        style={{
          // absolute positioning is used to position the confirmation message in the center of the screen
          position: "absolute",
          // top and left are set to 50% to center the confirmation message horizontally and vertically
          top: "50%",
          left: "50%",
          // translate(-50%, -50%) is used to center the confirmation message using negative margins
          transform: "translate(-50%, -50%)",
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
          Your Payment Was Successful
        </p>
        <p
          style={{
            fontSize: "1vw",
          }}
        >
          Confirmation Code: MQ1234
        </p>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          {/* // Add a link to the home page */}
          <Link to="/" className="router-link" style={{ marginRight: "1rem" }}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ width: "150px" }}
            >
              Go Home
            </Button>
          </Link>{" "}
          {/* // add a link to the payments page */}
          <Link to="/payments" className="router-link">
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ width: "150px" }}
            >
              Your Booking
            </Button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default GuestConfirmation;
