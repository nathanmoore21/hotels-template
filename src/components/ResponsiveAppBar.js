// This component is the responsive app bar that is displayed at the top of the page.
import * as React from "react";
import AppBar from "@mui/material/AppBar"; // Import the AppBar component
import Box from "@mui/material/Box"; // Import the Box component
import Toolbar from "@mui/material/Toolbar"; // Import the Toolbar component
import Container from "@mui/material/Container"; // Import the Container component
import Button from "@mui/material/Button"; // Import the Button component
import LogoImage from "./images/logo.svg"; // Import the logo image
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Menu from "@mui/material/Menu"; // Import Menu component
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Import faChevronDown icon

// Create an array of page names to be displayed in the app bar
const pages = ["English", "List your Property", "Support", "Trips", "Sign In"];

// Create the ResponsiveAppBar component
function ResponsiveAppBar() {
  // Create state for groupBooking and set it to null
  const [groupBooking, setGroupBooking] = React.useState(null);

  // Create function handleMenuOpen that sets the groupBooking state to the event current target
  const handleMenuOpen = (event) => {
    // Set the groupBooking state to the event current target
    setGroupBooking(event.currentTarget);
  };

  // Create function handleMenuClose that sets the groupBooking state to null
  const handleMenuClose = () => {
    // Set the groupBooking state to null
    setGroupBooking(null);
  };

  // Return the AppBar component
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
                alt="Hotels.com Logo"
                style={{ height: "32px", marginRight: "8px" }}
              />{" "}
            </Link>
            <Button
              aria-controls="group-booking-menu"
              aria-haspopup="true"
              // When the user clicks on the button, call the handleMenuOpen function
              onClick={handleMenuOpen}
              sx={{
                color: "#F03346",
                textTransform: "none",
                "&:hover": {
                  color: "#D21543",
                  bgcolor: "transparent",
                },
              }}
            >
              Group Booking{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "5px" }}
              />
            </Button>
            {/* // Create a Menu component */}
            <Menu
              // Set the id of the Menu component to group-booking-menu
              id="group-booking-menu"
              // Set the anchorEl of the Menu component to the groupBooking state
              // anchorEl is used to set the position of the menu
              anchorEl={groupBooking}
              // Set the open prop of the Menu component to true if the groupBooking state is not null
              open={Boolean(groupBooking)}
              // When the user clicks outside the menu, call the handleMenuClose function
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: "175px",
                },
              }}
            >
              {/* // Create a MenuItem component */}
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="#"
                  className="router-link"
                  style={{ fontSize: "14px" }}
                >
                  {" "}
                  Shop Travel
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  to="#"
                  className="router-link"
                  style={{ fontSize: "14px" }}
                >
                  {" "}
                  Hotels.com® Rewards
                </Link>
              </MenuItem>
            </Menu>
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
                    color: "#D21543",
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
