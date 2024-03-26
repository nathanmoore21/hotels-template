import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import RiuPlaza from "./images/riu-plaza-dublin.jpeg";
import { Icon } from "@iconify/react";
import starIcon from "@iconify/icons-ion/ios-star";
import checkmarkIcon from "@iconify/icons-ion/checkmark";
import mapImage from "./images/map1.png";
import { Icon as IconifyIcon } from "@iconify/react";
import locationIcon from "@iconify-icons/mdi/map-marker";
import functionRoomImage from "./images/functionroom.png";
import twinRoomImage from "./images/twinRoom.png";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faGreaterThan,
  faExpand,
  faBed,
  faUsers,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faShoppingBasket,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import amenitiesIcons from "./data/amenitiesIcons";

const HotelPage = ({ hotels }) => {
  const { name } = useParams();

  // Find the hotel with the matching name
  // Decode the name using decodeURIComponent
  const hotel = hotels.find(
    (hotel) => hotel["hotel_name"] === decodeURIComponent(name)
  );

  const [selectedRooms, setSelectedRooms] = useState({});
  const [groupBooking, setGroupBooking] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("#overview");
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

  const image = hotel.image;

  const getRatingColor = (rating) => {
    if (rating >= 8) {
      return { backgroundColor: "#217952", color: "#FFFFFF" };
    } else {
      return { backgroundColor: "#DFE0E4", color: "#191E3A" };
    }
  };

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const collapsedWidth = "150px";
  const expandedWidth = "220px";

  const Basket = ({
    totalRooms,
    totalPrice,
    totalGuests,
    groupBooking,
    toggleExpanded,
    expanded,
  }) => {
    return (
      <div>
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
              boxShadow: expanded ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
              cursor: "pointer",
              display: "flex",
            }}
            onClick={toggleExpanded}
          >
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
                    €{totalPrice * 2}
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
                    {groupBooking ? "Yes" : "No"}
                  </span>
                </div>
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
              onClick={handleHeartClick}
            >
              <div style={{ marginRight: "8px" }}>
                <FontAwesomeIcon
                  icon={isHeartClicked ? solidHeart : regularHeart}
                  style={{ color: "#FF0000", fontSize: "20px" }}
                />
              </div>
              <span style={{ color: "#191E3A", fontSize: "14px" }}>
                {isHeartClicked ? "Saved" : "Save"}
              </span>
            </div>
          </div>

          <img
            src={image}
            alt="Hotel"
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
            <div style={{ padding: "5px" }}>
              <Link
                to="#overview"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color: activeLink === "#overview" ? "#1169E0" : "#191E3A",
                  fontWeight: activeLink === "#overview" ? "bold" : "normal",
                  borderBottom:
                    activeLink === "#overview"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#overview")}
              >
                Overview
              </Link>

              <Link
                to="#rooms"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color: activeLink === "#rooms" ? "#1169E0" : "#191E3A",
                  fontWeight: activeLink === "#rooms" ? "bold" : "normal",
                  borderBottom:
                    activeLink === "#rooms"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#rooms")}
              >
                Rooms
              </Link>

              <Link
                to="#amenities"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color: activeLink === "#amenities" ? "#1169E0" : "#191E3A",
                  fontWeight: activeLink === "#amenities" ? "bold" : "normal",
                  borderBottom:
                    activeLink === "#amenities"
                      ? "2px solid #1169E0"
                      : "2px solid transparent",
                  paddingBottom: "20px",
                  fontSize: "14px",
                }}
                onClick={() => handleClick("#amenities")}
              >
                Amenities
              </Link>

              <Link
                to="#accessibility"
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
              </Link>

              <Link
                to="#policies"
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
              </Link>
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
                Reserve a room
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
                <span>Fully Refundable</span>
                <Icon
                  icon={checkmarkIcon}
                  style={{
                    fontSize: "18px",
                    marginRight: "5px",
                    marginLeft: "10px",
                    color: "#217952",
                  }}
                />
                <span>Reserve now, Pay later</span>
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
                    <FontAwesomeIcon
                      icon={amenitiesIcons[amenity]}
                      style={{ marginRight: "5px", marginLeft: "3px" }}
                    />
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
                <Link
                  to="#"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  See all
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

              <iframe
                width="325"
                height="auto"
                style={{
                  border: 0,
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
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

      {/* FUNCTION ROOM INFO */}
      <div style={{ width: "70%", margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Group Booking</h1>{" "}
        <div
          style={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            borderRadius: "20px 0 0 20px",
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
                fontSize: "12px",
                fontWeight: "lighter",
                fontStyle: "italic",
                marginTop: "0px",
              }}
            >
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
                onClick={() => handleGroupBookingSelection(false)}
              >
                No
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridGap: "10px",
              }}
            >
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
                src={functionRoomImage}
                alt="Function Room"
                style={{
                  width: "100%",
                  clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="rooms-section"></div>
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
          Available rooms for your stay
        </h1>{" "}
        {hotel.hotel_room.map((room, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              width: "32.33%",
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
                alt="Twin Room"
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
                  <li
                    style={{
                      textAlign: "right",
                      marginRight: "15px",
                      fontSize: "17px",
                      marginBottom: "0px",
                    }}
                  >
                    {" "}
                    €{room.price_per_night}.00
                    <div style={{ fontSize: "11px", marginTom: "0px" }}>
                      per night
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
                  {" "}
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
                    {selectedRooms[room.type]
                      ? selectedRooms[room.type] * room.price_per_night + ".00"
                      : "0.00"}
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
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Checkout</h1>{" "}
      </div>
      {/* BASKET */}
      <Basket
        // Pass in the total rooms, total price, total guests, group booking, toggleExpanded, and expanded
        totalRooms={getTotalRooms()}
        totalPrice={getTotalPrice()}
        totalGuests={getTotalGuests()}
        groupBooking={groupBooking}
        toggleExpanded={toggleExpanded}
        expanded={expanded}
      />

      <Footer />
    </div>
  );
};

export default HotelPage;
