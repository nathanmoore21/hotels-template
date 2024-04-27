import React from "react"; // Import the React library
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faFrown } from "@fortawesome/free-solid-svg-icons"; // Import the frown icon
import Button from "@material-ui/core/Button"; // Import Material-UI Button component

function PageNotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ResponsiveAppBar />
      <FontAwesomeIcon
        icon={faFrown}
        style={{ fontSize: "4rem", marginBottom: "1rem" }}
      />
      <h1>Uh-oh! This page seems to be missing...</h1>
      <Button
        variant="contained"
        style={{
          marginTop: "1rem",
          backgroundColor: "#0B6ADD",
          textTransform: "none",
          color: "white",
        }}
        // Redirect the user to the home page when the button is clicked
        onClick={() => (window.location.href = "/")}
      >
        Go Home
      </Button>
    </div>
  );
}

export default PageNotFound;
