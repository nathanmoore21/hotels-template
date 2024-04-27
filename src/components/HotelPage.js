// import relevant libraries and components
import React, { useState } from "react"; // Import the useState hook
import { useParams } from "react-router-dom"; // Import the useParams hook
import ResponsiveAppBar from "./ResponsiveAppBar"; // Import the ResponsiveAppBar component
import Footer from "./Footer"; // Import the Footer component
import { Link } from "react-router-dom"; // Import the Link component
import { Icon } from "@iconify/react"; // Import the Icon component
import starIcon from "@iconify/icons-ion/ios-star"; // Import the star icon
import checkmarkIcon from "@iconify/icons-ion/checkmark"; // Import the checkmark icon
import locationIcon from "@iconify-icons/mdi/map-marker"; // Import the location icon
import Button from "@material-ui/core/Button"; // Import the Button component
import { Icon as IconifyIcon } from "@iconify/react"; // Import the Icon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
// Import the icons from the fontawesome library
import {
  faBabyCarriage,
  faChildReaching,
  faArrowLeft,
  faGreaterThan,
  faExpand,
  faBed,
  faUsers,
  faShoppingBasket,
  faAngleDown,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import amenitiesIcons so we can access the icons from file
import amenitiesIcons from "./data/amenitiesIcons";

// Create the HotelPage component
const HotelPage = ({ hotels }) => {
  // Get the name parameter from the URL
  // useParams is a hook that creates a dynamic URL parameter
  const { name } = useParams();
  // Find the hotel with the matching name
  // Decode the name using decodeURIComponent
  const hotel = hotels.find(
    (hotel) => hotel["hotel_name"] === decodeURIComponent(name)
  );

  // Add a function to handle the next button click, (flase by default)
  const [nextClicked, setNextClicked] = useState(false);

  // Add a function to handle the next button click
  // .every() checks if all values in the object are 0
  // if 0 is found, set nextClicked to true
  const handleNextClick = () => {
    if (Object.values(selectedRooms).every((quantity) => quantity === 0)) {
      setNextClicked(true);
      return;
    }
    // Redirect to the next page
    window.location.href = "/YourDetails";
  };

  // useState to store the selected rooms
  const [selectedRooms, setSelectedRooms] = useState({});
  // set group booking to false by default (will the use require a function room)
  const [groupBooking, setGroupBooking] = useState(false);
  // set expanded to false by default
  const [expanded, setExpanded] = useState(false);
  // set activeLink to #overview by default
  const [activeLink, setActiveLink] = useState("#overview");
  // set isHeartClicked to false by default (will the user save the hotel)
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // Add functions to handle adding and removing rooms
  const handleAddRoom = (room) => {
    // Update the selected rooms state
    setSelectedRooms((prevRooms) => {
      // Create a new object with the previous rooms
      // Use the spread operator to copy the previous rooms
      const updatedRooms = { ...prevRooms };
      // Update the quantity of the selected room
      // || 0 is used to default to 0 if the room is not in the object
      updatedRooms[room.type] = (updatedRooms[room.type] || 0) + 1;
      // Return the updated rooms
      return updatedRooms;
    });
  };

  // Add a function to handle removing rooms
  const handleRemoveRoom = (room) => {
    setSelectedRooms((prevRooms) => {
      const updatedRooms = { ...prevRooms };
      // || 0 is used to default to 0 if the room is not in the object
      // - 1 is used to decrease the quantity, 0 is the minimum value
      updatedRooms[room.type] = Math.max((updatedRooms[room.type] || 0) - 1, 0);
      return updatedRooms;
    });
  };

  // Add functions to calculate the total rooms
  const getTotalRooms = () => {
    // Use Object.values to get an array of the values
    // Use reduce to sum the values
    return Object.values(selectedRooms).reduce(
      // total is the running total
      // quantity is the current value
      // 0 is the initial value of total
      (total, quantity) => total + quantity,
      0
    );
  };

  // Add functions to calculate the total guests
  const getTotalGuests = () => {
    let totalGuests = 0;
    // Loop through the selected rooms
    // Add the number of guests for each room type
    // Use the hotel data to find the number of guests
    // Add the number of guests to the total
    for (const [roomType, quantity] of Object.entries(selectedRooms)) {
      // Find the room with the matching type
      const room = hotel.hotel_room.find((room) => room.type === roomType);
      // If the room exists, add the number of guests to the total
      if (room) {
        // Multiply the quantity by the number of guests
        totalGuests += quantity * room.sleeps;
      }
    }
    return totalGuests;
  };

  // Add a function to calculate the total price
  const getTotalPrice = () => {
    // Set the initial total price to 0
    let totalPrice = 0;
    // Loop through the selected rooms
    // Add the price for each room type
    // Object.entries understands each room type and its quantity as an array
    for (const [roomType, quantity] of Object.entries(selectedRooms)) {
      // Find the room with the matching type
      const room = hotel.hotel_room.find((room) => room.type === roomType);
      // If the room exists, add the price to the total
      if (room) {
        // Multiply the quantity by the price
        // =+ is a shorthand for adding to the total
        totalPrice += quantity * parseFloat(room.price_per_night);
      }
    }
    // If group booking is selected, add the function room price to the total
    if (groupBooking && functionRoomData) {
      totalPrice += parseFloat(functionRoomData.price_per_day);
    }
    // toFixed(2) is used to round the total to 2 decimal places
    return totalPrice.toFixed(2);
  };

  // If the hotel is not found, return the message
  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  // Get the function room data
  const functionRoomData = hotel.function_room;

  // Add a function to handle the group booking selection (Yes or No)
  const handleGroupBookingSelection = (value) => {
    setGroupBooking(value);
  };

  // Get the hotel image
  const image = hotel.image;

  // Add a function to get the rating color
  const getRatingColor = (rating) => {
    // If the rating is greater than or equal to 8, return green
    if (rating >= 8) {
      return { backgroundColor: "#217952", color: "#FFFFFF" };
    } else {
      // Otherwise, return grey
      return { backgroundColor: "#DFE0E4", color: "#191E3A" };
    }
  };

  // Add a function to handle the heart click
  const handleHeartClick = () => {
    // Toggle the isHeartClicked state
    setIsHeartClicked(!isHeartClicked);
  };

  // Add a function to handle the basket click (currently not used in the project)
  const handleClick = (link) => {
    // Set the active link
    setActiveLink(link);
  };

  const collapsedWidth = "150px";
  const expandedWidth = "220px";

  // Create the Basket component, which is currently not used in the project
  const Basket = ({
    // Pass the props to the Basket component
    totalRooms,
    totalPrice,
    totalGuests,
    groupBooking,
    toggleExpanded,
    expanded,
  }) => {
    return (
      <div>
        {/* // If the basket is expanded, add a div to cover the screen */}
        {expanded && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={toggleExpanded}
          />
        )}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: expanded ? expandedWidth : "auto",
              textAlign: "left",
              backgroundColor: expanded ? "white" : "transparent",
              borderRadius: expanded ? "10px" : "50%",
              padding: expanded ? "20px" : 0,
              // If the basket is expanded, add a box shadow
              boxShadow: expanded ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
              cursor: "pointer",
              display: "flex",
            }}
            // onClick the toggleExpanded function
            onClick={toggleExpanded}
          >
            {/* // If the basket is expanded, show the close icon */}
            {expanded ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    fontWeight: "100",
                    marginBottom: "0.5rem",
                  }}
                >
                  Your Basket <FontAwesomeIcon icon={faAngleDown} />
                </h1>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>
                    Total Rooms in Basket:
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "3rem",
                      fontWeight: "bold",
                    }}
                  >
                    {totalRooms}
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>Total Price:</span>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "auto",
                      fontWeight: "bold",
                    }}
                  >
                    {/* // Multiply the total price by 2 (for two nights) */}€
                    {totalPrice * 2}
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>Number of Guests:</span>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "auto",
                      fontWeight: "bold",
                    }}
                  >
                    {totalGuests}
                  </span>
                </div>
                <div
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: "15px" }}>
                    Function room selection:
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      marginLeft: "auto",
                      fontWeight: "bold",
                    }}
                  >
                    {/* // If groupBooking is true, show Yes, else show No */}
                    {groupBooking ? "Yes" : "No"}
                  </span>
                </div>
                {/* link to your details */}
                <Link
                  to="/YourDetails"
                  className="router-link"
                  style={{ alignSelf: "flex-end" }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{ marginTop: "1rem" }}
                  >
                    Next
                  </Button>
                </Link>
              </div>
            ) : (
              // If the basket is not expanded, show the basket icon
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "2px solid #1169E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  style={{ fontSize: "40px", color: "#CACCD2" }}
                />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Add a function to toggle the expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ backgroundColor: "#FBF8F2" }}>
      <ResponsiveAppBar />
      <div
        style={{
          paddingTop: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            backgroundColor: "#FFFFFF",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FBF8F2",
              display: "flex",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{
                color: "#1169E0",
                fontSize: "14px",
                paddingRight: "8px",
              }}
            />
            <Link
              to="/results"
              className="router-link"
              style={{ color: "#1169E0", fontSize: "14px" }}
            >
              See all properties
            </Link>
            <div
              style={{
                cursor: "pointer",
                marginLeft: "auto",
                border: "1px solid #CACCD2",
                borderRadius: "25px",
                padding: "8px",
                display: "inline-flex",
                alignItems: "center",
              }}
              // onClick the handleHeartClick function
              onClick={handleHeartClick}
            >
              <div style={{ marginRight: "8px" }}>
                <FontAwesomeIcon
                  icon={isHeartClicked ? solidHeart : regularHeart}
                  style={{ color: "#FF0000", fontSize: "20px" }}
                />
              </div>
              <span style={{ color: "#191E3A", fontSize: "14px" }}>
                {/* // If isHeartClicked is true, show Saved, else show Save (the hotel) */}
                {isHeartClicked ? "Saved" : "Save"}
              </span>
            </div>
          </div>

          {/* // Add the hotel image, name, star rating, and description */}
          <img
            src={image}
            alt="Hotel Image"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <div
            style={{
              backgroundColor: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              fontSize: "13px",
              color: "#191E3A",
              borderBottom: "2px solid #DFE0E4",
            }}
          >
            {/* // add a small menu for the hotel page */}
            <div style={{ padding: "5px" }}>
              <a
                // Add the href to the overview section
                to="#overview"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  // If the active link is #overview, use #1169E0, else use #191E3A
                  color: activeLink === "#overview" ? "#1169E0" : "#191E3A",
                  // If the active link is #overview, use bold, else use normal
                  fontWeight: activeLink === "#overview" ? "bold" : "normal",
                  // If the active link is #overview, use 2px solid #1169E0, else use 2px solid transparent
                  borderBottom:
                    activeLink === "#overview"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                // onClick the handleClick function with #overview (which is the active link when the page is loaded)
                onClick={() => handleClick("#overview")}
              >
                Overview
              </a>

              <a
                href="#function-room"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color:
                    activeLink === "#Function Room" ? "#1169E0" : "#191E3A",
                  fontWeight:
                    activeLink === "#Function Room" ? "bold" : "normal",
                  borderBottom:
                    activeLink === "#Function Room"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#Function Room")}
              >
                Function Room
              </a>

              <a
                href="#family-friendly-services"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color:
                    activeLink === "#Family Friendly Services"
                      ? "#1169E0"
                      : "#191E3A",
                  fontWeight:
                    activeLink === "#Family Friendly Services"
                      ? "bold"
                      : "normal",
                  borderBottom:
                    activeLink === "#Family Friendly Services"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#Family Friendly Services")}
              >
                Family Friendly Services
              </a>

              <a
                href="#accessibility"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color:
                    activeLink === "#accessibility" ? "#1169E0" : "#191E3A",
                  fontWeight:
                    activeLink === "#accessibility" ? "bold" : "normal",
                  borderBottom:
                    activeLink === "#accessibility"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#accessibility")}
              >
                Accessibility
              </a>

              <a
                href="#policies"
                style={{
                  textDecoration: "none",
                  color: activeLink === "#policies" ? "#1169E0" : "#191E3A",
                  fontWeight: activeLink === "#policies" ? "bold" : "normal",
                  borderBottom:
                    activeLink === "#policies"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#policies")}
              >
                Policies
              </a>
            </div>
            <button
              style={{
                backgroundColor: "#1169E0",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "25px",
                padding: "10px 20px",
                border: "none",
              }}
            >
              <a
                href="#rooms-section"
                style={{ textDecoration: "none", color: "white" }}
              >
                Reserve a Room
              </a>
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "row", width: "90%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "400",
                  marginBottom: "0px",
                }}
              >
                {/* // Add the hotel name */}
                {hotel["hotel_name"]}
              </h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Use Array.from to create an array with the length of the star rating */}
                {/* Use the map function to create an array based off of stars */}
                {/* (_, index) is the current value and index */}
                {Array.from({ length: hotel.star_rating }, (_, index) => (
                  <Icon
                    key={index}
                    icon={starIcon}
                    style={{
                      fontSize: "14px",
                      color: "#4D5166",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "20px",
                  marginTop: "2px",
                }}
              >
                {/* // Add the hotel description */}
                {hotel["description"]}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#217952",
                  fontWeight: "600",
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                <Icon
                  icon={checkmarkIcon}
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    color: "#217952",
                  }}
                />
                {/* pay within 31 days, since it is a large booking, the hotel can't wait until last minute incase the party cancel */}
                <span>Reserve Now, Pay Within 31 Days</span>
              </div>
              <div style={{ display: "flex", marginBottom: "0.5rem" }}>
                <div
                  style={{
                    marginRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      marginRight: "0.5rem",
                      borderRadius: "4px",
                      padding: "0.2rem 0.5rem",
                      fontSize: "12px",
                      // Use the getRatingColor function to get the color based on the rating
                      ...getRatingColor(hotel.guest_review_rating),
                    }}
                  >
                    {hotel.guest_review_rating}
                  </div>
                  Guest Rating
                </div>
                <div
                  style={{
                    marginRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{
                      marginRight: "0.5rem",
                      borderRadius: "4px",
                      padding: "0.2rem 0.5rem",
                      fontSize: "12px",
                      // Use the getRatingColor function to get the color based on the rating
                      ...getRatingColor(hotel.event_management_rating),
                    }}
                  >
                    {hotel.event_management_rating}
                  </div>
                  Event Rating
                </div>
              </div>
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "13px",
                  color: "#1169E0",
                  marginBottom: "20px",
                }}
              >
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  See all 1,204 reviews{" "}
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    style={{ fontSize: "9px" }}
                  />
                </Link>
              </div>
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "17px",
                  color: "#191E3A",
                  marginBottom: "10px",
                }}
              >
                Popular Amenities
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "75%",
                  fontSize: "14px",
                  marginTop: "0px",
                }}
              >
                {/* // Map through the amenities and display them */}
                {hotel.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    style={{
                      width: "50%",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* // Use the amenitiesIcons object to get the icon */}
                    <FontAwesomeIcon
                      icon={amenitiesIcons[amenity]}
                      style={{ marginRight: "5px", marginLeft: "3px" }}
                    />
                    {/* // Add the amenity */}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "13px",
                  color: "#1169E0",
                  marginTop: "0px",
                }}
              >
                <div id="function-room"></div>
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  See all{" "}
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    style={{ fontSize: "9px" }}
                  />
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "auto",
                marginRight: "1rem",
                marginTop: "1.4rem",
                width: "50%",
              }}
            >
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "18px",
                  color: "#191E3A",
                  marginTop: "5px",
                  marginBottom: "3px",
                }}
              >
                What's Around
              </p>

              {/* // Add a map to show the (FAKE) location of the hotel */}
              <iframe
                width="325"
                height="auto"
                style={{
                  border: 0,
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
                // Use the Google Maps Embed API to show the map of the hotel (a fake location)
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9527.511181835902!2d-6.284163838527213!3d53.34544372355672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9cb559ea73%3A0x2600c7a819c83012!2sTemple%20Bar%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sus!4v1710941241962!5m2!1sen!2sus"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Embedded Google Map"
              ></iframe>

              <p
                style={{
                  fontWeight: 200,
                  fontSize: "14px",
                  color: "#191E3A",
                  marginTop: "0px",
                }}
              >
                {hotel.address}
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
                {/* // Map through the nearby locations and display them */}
                {hotel.nearby.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      fontSize: "14px",
                      fontWeight: "100",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {/* // Use the locationIcon to show the location icon */}
                      <IconifyIcon
                        icon={locationIcon}
                        style={{ fontSize: "20px", marginRight: "5px" }}
                      />
                      <span>{item.location}</span>
                    </div>
                    <span>{item.distance}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* FUNCTION ROOM INFO */}
      <div
        style={{
          width: "70%",
          margin: "0 auto",
          textAlign: "left",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Function Room</h1>{" "}
        <div
          style={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px 0 0 20px",
            maxHeight: "30rem",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div style={{ width: "50%", marginLeft: "15px" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              Will you and your guests require the use of our function room?
            </p>

            <p
              style={{
                fontSize: "13px",
                fontWeight: "lighter",
                fontStyle: "italic",
                marginTop: "0px",
              }}
            >
              {/* // display the price per day for the function room */}
              Additional €{functionRoomData?.price_per_day} a day
            </p>
            <div>
              <button
                style={{
                  width: "107px",
                  height: "42px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "7px",
                  marginRight: "10px",
                  marginBottom: "20px",
                  // Use the groupBooking state to determine the background color
                  // ? "#1169E0" : "#FFFFFF" means if groupBooking is true, use #1169E0, else use #FFFFFF
                  backgroundColor: groupBooking ? "#1169E0" : "#FFFFFF",
                  color: groupBooking ? "#FFFFFF" : "#191E3A",
                  border: groupBooking ? "none" : "2px solid #EBEBEB",
                  cursor: "pointer",
                }}
                // onClick the handleGroupBookingSelection function with true
                // true means the user requires the function room
                onClick={() => handleGroupBookingSelection(true)}
              >
                Yes
              </button>
              <button
                style={{
                  width: "107px",
                  height: "42px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "7px",
                  backgroundColor: groupBooking ? "#FFFFFF" : "#1169E0",
                  color: groupBooking ? "#191E3A" : "#FFFFFF",
                  border: groupBooking ? "2px solid #EBEBEB" : "none",
                  cursor: "pointer",
                }}
                // onClick the handleGroupBookingSelection function with false
                // false means the user does not require the function room
                onClick={() => handleGroupBookingSelection(false)}
              >
                No
              </button>
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                marginTop: "0px",
                marginBottom: "5px",
              }}
            >
              {/* // display some important information about the function room */}
              What's Included?
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "10px",
              }}
            >
              {/* // Map through the amenities and display them */}
              {functionRoomData?.amenities.map((amenity, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: "10px",
                    fontSize: "13px",
                    color: "#191E3A",
                    fontWeight: "100",
                  }}
                >
                  <FontAwesomeIcon
                    icon={amenitiesIcons[amenity]}
                    style={{ marginRight: "5px", marginLeft: "3px" }}
                  />
                  <span>{amenity}</span>
                </div>
              ))}
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "13px",
                  color: "#1169E0",
                  marginTop: "5px",
                }}
              >
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  See all{" "}
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    style={{ fontSize: "9px" }}
                  />
                </Link>
              </div>
            </div>

            <div
              style={{
                fontSize: "15px",
                color: "#191E3A",
                marginTop: "20px",

                textAlign: "center",
              }}
            >
              <hr />
              <div style={{ marginTop: "20px", fontSize: "0.8vw" }}>
                <i>
                  "The dedicated team not only provided the necessary equipment
                  and amenities but also set up the function room according to
                  our specifications, allowing us to focus on enjoying our event
                  to the fullest."
                </i>{" "}
                - John Doe
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "13px",
                  color: "#1169E0",
                  marginTop: "8px",
                }}
              >
                <div id="family-friendly-services"></div>

                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  See all reviews{" "}
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    style={{ fontSize: "0.5vw" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{ width: "70%", marginRight: "0px", marginBottom: "0px" }}
          >
            <div
              style={{
                position: "relative", // Absolute position for finer control
                overflow: "hidden", // Ensure no overflow
                width: "100%", // Ensures the div is fully using its parent's set width
                height: "100%", // Match the height to keep aspect ratio correct
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1620735692151-26a7e0748429?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Function Room"
                style={{
                  width: "100%", // Full width
                  height: "100%", // Full height
                  objectFit: "cover", // Cover the area completely
                  objectPosition: "center", // Center the image vertically
                  clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* KIDS CLUB INFO */}
      <div style={{ width: "70%", margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>
          {" "}
          {hotel["hotel_name"]} is Kid Friendly!
        </h1>{" "}
        <div
          style={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px 0 0 20px",
          }}
        >
          <div style={{ width: "50%", marginLeft: "15px", fontSize: "13px" }}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "600",
                marginBottom: "5px",
              }}
            >
              Keep your little ones entertained and safe while you enjoy your
              stay.{" "}
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: "lighter",
                fontStyle: "italic",
                marginTop: "8px",
              }}
            >
              Kids Daycare is included in the total cost, simply add their name,
              age and other relevant information at the checkout.
            </p>

            <div style={{ marginBottom: "15px" }}>
              <div style={{ marginBottom: "3px" }}>
                {" "}
                If your child is aged from 2-12, let them join in on:{" "}
              </div>
              <ul style={{ marginTop: "0" }}>
                <li style={{ marginBottom: "3px" }}>
                  Creative arts and crafts activities
                </li>
                <li style={{ marginBottom: "3px" }}>
                  Interactive games and toys
                </li>
                <li style={{ marginBottom: "3px" }}>
                  Storytime and educational activities
                </li>
                <li style={{ marginBottom: "3px" }}>
                  Healthy snacks and meals
                </li>
              </ul>
            </div>

            <hr />
            <div id="rooms-section"></div>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <b>Opening Hours:</b> Monday to Friday: 9:00 AM - 7:00 PM
            </div>
            <div style={{ textAlign: "center" }}>
              <b>Phone Number:</b> (585) 572-9237
            </div>
          </div>

          <div
            style={{ width: "70%", marginRight: "0px", marginBottom: "0px" }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Function Room"
                style={{
                  width: "100%",
                  clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
                  verticalAlign: "top",
                  maxHeight: "325px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* AVAILABLE ROOMS FOR YOUR STAY */}
      <div
        style={{
          width: "70%",
          margin: "0px auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>
          Available Rooms for Your Stay
        </h1>{" "}
        {/* // Map through the hotel rooms and display them */}
        {hotel.hotel_room.map((room, index) => (
          <div
            key={index}
            style={{
              // Display the rooms in a row
              display: "inline-block",
              // Set the width to 32.33% (3 rooms in a row)
              width: "32.33%",
              // Set the margin to 1.6% (to create space between the rooms)
              // If the index is not 0, set the marginLeft to 1.6%, else set it to 0
              marginLeft: index !== 0 ? "1.6%" : 0,
              verticalAlign: "top",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                marginBottom: "20px",
                borderRadius: "13px",
                border: "1px solid #DFE0E4",
              }}
            >
              <img
                src={room.room_image}
                alt="Room image"
                style={{
                  width: "100%",
                  height: "200px",
                  marginBottom: 0,
                  borderTopLeftRadius: "13px",
                  borderTopRightRadius: "13px",
                }}
              />

              <div style={{ textAlign: "left" }}>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "300",
                    marginLeft: "15px",
                  }}
                >
                  {room.type}
                </h2>
                <ul
                  style={{ listStyle: "none", padding: 0, marginLeft: "15px" }}
                >
                  {/* // Add the room details */}
                  <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                    <FontAwesomeIcon
                      icon={faExpand}
                      style={{ fontSize: "19px", marginRight: "4px" }}
                    />{" "}
                    {room.size}
                  </li>
                  <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{ fontSize: "14px", marginRight: "3px" }}
                    />{" "}
                    Sleeps {room.sleeps}
                  </li>
                  <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                    <FontAwesomeIcon
                      icon={faBed}
                      style={{ fontSize: "14px", marginRight: "7px" }}
                    />
                    {room.bed_type}
                  </li>
                  <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                    <FontAwesomeIcon
                      icon={faBabyCarriage}
                      style={{ fontSize: "16px", marginRight: "9px" }}
                    />
                    Bedside Cot Available
                  </li>
                  <li style={{ marginBottom: "10px", fontSize: "16px" }}>
                    <FontAwesomeIcon
                      icon={faChildReaching}
                      style={{ fontSize: "16px", marginRight: "12px" }}
                    />
                    Suitable for Children
                  </li>
                  <li
                    style={{
                      textAlign: "right",
                      marginRight: "15px",
                      fontSize: "17px",
                      marginBottom: "0px",
                    }}
                  >
                    {" "}
                    {/* // Add the price per night */}€{room.price_per_night}.00
                    <div
                      style={{
                        fontSize: "11px",
                        marginTop: "0px",
                        lineHeight: "1",
                      }}
                    >
                      per night for <br /> each room
                    </div>
                  </li>
                </ul>
              </div>

              <hr />

              <div>
                <h2
                  style={{
                    fontSize: "19px",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                >
                  Number of Rooms
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* // adding and removing rooms */}{" "}
                  <button
                    style={{
                      width: "30px",
                      height: "30px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      color: "#191E3A",
                      border: "1px solid #1169E0",
                      cursor: "pointer",
                    }}
                    // onClick the handleRemoveRoom function with the room
                    onClick={() => handleRemoveRoom(room)}
                  >
                    -
                  </button>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "100",
                      margin: "0 20px",
                    }}
                  >
                    {/* // Display the number of rooms selected, the minimum is 0 */}
                    {/* // || 0 means if selectedRooms[room.type] is undefined, use 0 */}
                    {selectedRooms[room.type] || 0}
                  </span>
                  <button
                    style={{
                      width: "30px",
                      height: "30px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      color: "#191E3A",
                      border: "1px solid #1169E0",
                      cursor: "pointer",
                    }}
                    // onClick the handleAddRoom function with the room
                    onClick={() => handleAddRoom(room)}
                  >
                    +
                  </button>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    textAlign: "right",
                    marginRight: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Total:
                  <div style={{ fontSize: "19px", fontWeight: "600" }}>
                    €
                    {/* // If the room is selected, show the total price for the room */}
                    {selectedRooms[room.type]
                      ? // show the total price for the room
                        selectedRooms[room.type] * room.price_per_night + ".00"
                      : // Else, show 0.00
                        "0.00"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "70%",
          margin: "0px auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {/* // basket */}
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>
          Your Stay with {hotel["hotel_name"]}
        </h1>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            backgroundColor: "#FFFFFF",
            borderRadius: "13px",
            border: "1px solid #DFE0E4",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt="Hotel"
            style={{
              width: "60%",
              height: "auto",
              marginBottom: "0",
              verticalAlign: "top",
              borderTopLeftRadius: "13px",
              borderBottomLeftRadius: "13px",
              marginRight: "20px",
              maxHeight: "450px",
              objectFit: "cover",
            }}
          />
          <div style={{ paddingRight: "20px", width: "40%" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "7px",
                fontWeight: "300",
              }}
            >
              <h1> Ready to Checkout?</h1>
            </div>
            <hr style={{ borderTop: "2px solid #1169e0", width: "100%" }} />
            <div style={{ fontSize: "14px" }}>
              <p style={{ marginBottom: "3px" }}>
                Check In Date: <b>Friday, May 10, 2024</b> (3:00p.m){" "}
              </p>
              <p style={{ marginTop: "0px" }}>
                Check Out Date: <b>Sunday, May 12, 2024</b> (noon)
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ marginRight: "4px" }}
                />
                {/* // Display the total guests */}2 nights, {getTotalGuests()}{" "}
                guests{" "}
              </p>
              <div style={{ display: "flex", marginBottom: "0.5rem" }}>
                <div
                  style={{
                    marginRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                  }}
                >
                  <div
                    style={{
                      marginRight: "0.5rem",
                      borderRadius: "4px",
                      padding: "0.2rem 0.5rem",
                      fontSize: "15px",
                      // Use the getRatingColor function to get the color based on the rating
                      ...getRatingColor(hotel.guest_review_rating),
                    }}
                  >
                    {/* // Display the guest review rating */}
                    {hotel.guest_review_rating}
                  </div>
                  Guest Rating
                </div>

                <img
                  src="https://1000logos.net/wp-content/uploads/2020/10/Hotels-com-Logo.jpg"
                  alt="Hotels.com logo"
                  style={{ width: "40%", height: "30px", objectFit: "cover" }}
                />
              </div>
              <p style={{ marginBottom: "0px" }}>Rooms Selected: </p>
              <ul style={{ margin: "0px" }}>
                {
                  // Check if there are no selected rooms or all selected room quantities are zero
                  Object.entries(selectedRooms).length === 0 ||
                  Object.values(selectedRooms).every(
                    (quantity) => quantity === 0
                  ) ? (
                    // If true, render a list item with the text "No rooms selected"
                    <li>No rooms selected</li>
                  ) : (
                    // If false, map over selected rooms, filter out rooms with zero quantity, and render each selected room with its quantity
                    Object.entries(selectedRooms)
                      .filter(([roomType, quantity]) => quantity > 0)
                      .map(([roomType, quantity]) => (
                        <li key={roomType}>
                          {/* // Display the room type and quantity */}
                          {roomType} x{quantity}
                        </li>
                      ))
                  )
                }
              </ul>

              <p style={{ marginBottom: "0px" }}>Extras Selected:</p>

              <ul style={{ margin: "0px" }}>
                <li>
                  {/* // Display the function room if groupBooking is true, else display "No Extras Selected" */}
                  {groupBooking ? "Function Room Added" : "No extras selected"}
                </li>
              </ul>
              <div style={{ textAlign: "right", lineHeight: "1" }}>
                <p className="info-body">Total for 2 nights:</p>
                <h4 style={{ fontSize: "24px" }}>€{getTotalPrice() * 2}.00</h4>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{ marginTop: "1rem" }}
              // onClick the handleNextClick function
              onClick={handleNextClick}
            >
              Next
            </Button>
          </div>
          {/* // If nextClicked is true and all selected rooms have a quantity of 0, display an error message */}
          {nextClicked &&
            Object.values(selectedRooms).every(
              (quantity) => quantity === 0
            ) && (
              <p
                style={{
                  color: "#E71E42",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "right",
                }}
              >
                Please choose at least one room to proceed.
              </p>
            )}
        </div>
      </div>
      {/* OLD BASKET */}
      {/* <Basket
        // Pass in the total rooms, total price, total guests, group booking, toggleExpanded, and expanded
        totalRooms={getTotalRooms()}
        totalPrice={getTotalPrice()}
        totalGuests={getTotalGuests()}
        groupBooking={groupBooking}
        toggleExpanded={toggleExpanded}
        expanded={expanded}
      /> */}

      <Footer />
    </div>
  );
};

export default HotelPage;
