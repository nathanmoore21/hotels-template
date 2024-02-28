// This component is the responsive app bar that is displayed at the top of the page.
import * as React from "react";
import AppBar from "@mui/material/AppBar"; // Import the AppBar component
import Box from "@mui/material/Box"; // Import the Box component
import Toolbar from "@mui/material/Toolbar"; // Import the Toolbar component
import Container from "@mui/material/Container"; // Import the Container component
import Button from "@mui/material/Button"; // Import the Button component
import LogoImage from "./images/logo.svg"; // Import the logo image
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Create an array of page names to be displayed in the app bar
const pages = ["English", "List your Property", "Support", "Trips", "Sign In"];

// Create the ResponsiveAppBar component
function ResponsiveAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ top: 0, left: 0, right: 0, zIndex: 1000, bgcolor: "white" }} // zIndex is used to control the stacking order of elements
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", pl: 2 }} // pl is used to add padding to the left
          >
            <Link to="/" className="router-link">
              <img
                src={LogoImage}
                alt="Logo"
                style={{ height: "32px", marginRight: "8px" }}
              />{" "}
            </Link>
            <Button
              sx={{
                color: "#F03346",
                textTransform: "none",
                "&:hover": {
                  color: "#D21543", // Change text color on hover
                  bgcolor: "transparent",
                },
              }}
            >
              Shop Travel
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
            {/* Map over the pages array and create a button for each page */}
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  mx: 1,
                  color: "#F03346",
                  textTransform: "none",
                  "&:hover": {
                    color: "#D21543", // Change text color on hover
                    bgcolor: "transparent",
                  },
                }}
              >
                {/* Add the page name to the button */}
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
