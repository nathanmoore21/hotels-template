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

// Create a component called HotelPage
// Pass in the hotels as a prop
// useParams is a hook from react-router-dom
const HotelPage = ({ hotels }) => {
  const { name } = useParams();

  // Find the hotel with the matching name
  // Decode the name using decodeURIComponent
  const hotel = hotels.find(
    (hotel) => hotel["hotel_name"] === decodeURIComponent(name)
  );

  // Add state for selected rooms
  // {} is the initial value, an empty object
  const [selectedRooms, setSelectedRooms] = useState({});
  // false is the initial value (function room is not selected)
  const [groupBooking, setGroupBooking] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  // Add a component for the basket
  const YourBasket = ({
    totalRooms,
    totalPrice,
    totalGuests,
    groupBooking,
    toggleExpanded,
    expanded,
  }) => {
    return (
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <div
          style={{
            width: "400px",
            textAlign: "left",
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Your Basket
          </h1>
          {/* If expanded is true, show the expanded content */}
          {expanded ? (
            <div>
              <h5>Total Rooms in Basket: {totalRooms}</h5>
              <h5>Total Price Per Night: €{totalPrice}</h5>
              <h5>Total Price: €{totalPrice * 2}</h5>
              <h5>Number of Guests: {totalGuests}</h5>
              <h5>Function room selection: {groupBooking ? "Yes" : "No"}</h5>
              <Link to="/YourDetails" className="router-link">
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  style={{ marginTop: "1rem" }}
                >
                  Next
                </Button>
              </Link>
              <button onClick={toggleExpanded}>Collapse</button>
            </div>
          ) : (
            <div>
              <h5>Total Price: €{totalPrice}</h5>
              <button onClick={toggleExpanded}>Expand</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Function to toggle the expanded state
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
        <div style={{ width: "70%", backgroundColor: "#FFFFFF" }}>
          <img
            src={RiuPlaza}
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
            <div style={{}}>
              <Link
                to="#overview"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                }}
              >
                Overview
              </Link>
              <Link
                to="#rooms"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                }}
              >
                Rooms
              </Link>
              <Link
                to="#amenities"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                }}
              >
                Amenities
              </Link>
              <Link
                to="#accessibility"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                }}
              >
                Accessibility
              </Link>
              <Link
                to="#policies"
                style={{
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                }}
              >
                Policies
              </Link>
            </div>
            <button
              style={{
                backgroundColor: "#1169E0",
                color: "white",
                borderRadius: "15px",
                padding: "10px 20px",
                border: "none",
              }}
            >
              Reserve
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1rem",
              }}
            >
              {" "}
              <h2 style={{ fontSize: "32px" }}>{hotel["hotel_name"]}</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Use Array.from to create an array with the length of the star rating */}
                {/* Use the map function to create an array based off of stars */}
                {/* (_, index) is the current value and index */}
                {Array.from({ length: hotel.star_rating }, (_, index) => (
                  <Icon
                    key={index}
                    icon={starIcon}
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                ))}
              </div>
              <p>{hotel["description"]}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "green",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                <Icon
                  icon={checkmarkIcon}
                  style={{ fontSize: "15px", marginRight: "5px" }}
                />
                <span>Fully Refundable</span>
                <Icon
                  icon={checkmarkIcon}
                  style={{
                    fontSize: "15px",
                    marginRight: "5px",
                    marginLeft: "10px",
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
                  }}
                >
                  <div
                    style={{
                      marginRight: "0.5rem",
                      border: "1px solid black",
                      borderRadius: "4px",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {hotel.guest_review_rating}
                  </div>
                  Guest Rating
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      marginRight: "0.5rem",
                      border: "1px solid black",
                      borderRadius: "4px",
                      padding: "0.2rem 0.5rem",
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
                  marginBottom: "5px",
                }}
              >
                See all 1,204 reviews
              </div>
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "17px",
                  color: "#191E3A",
                }}
              >
                Popular Amenities
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", width: "50%" }}>
                {hotel.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    style={{ width: "50%", marginBottom: "5px" }}
                  >
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "13px",
                  color: "#1169E0",
                  marginTop: "5px",
                }}
              >
                See all
              </div>
            </div>
            {/* content on the right */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#191E3A",
                  marginTop: "5px",
                }}
              >
                What's Around
              </p>
              <img
                src={mapImage}
                alt="Map"
                style={{ maxWidth: "278px", height: "auto" }}
              />
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#191E3A",
                  marginTop: "5px",
                }}
              >
                {hotel.address}
              </p>
              <div
                style={{
                  fontWeight: "medium",
                  fontSize: "13px",
                  color: "#1169E0",
                  marginTop: "5px",
                }}
              >
                View in a map
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
                {hotel.nearby.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconifyIcon
                      icon={locationIcon}
                      style={{ fontSize: "20px", marginRight: "5px" }}
                    />
                    <span>{item.location}</span>
                    <span style={{ marginLeft: "10px" }}>{item.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FUNCTION ROOM INFO */}
      <div style={{ width: "70%", margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Group Booking</h1>{" "}
        <div style={{ display: "flex", backgroundColor: "#FFFFFF" }}>
          <div style={{ width: "50%" }}>
            <p style={{ fontSize: "17px", fontWeight: "600" }}>
              Will you and your guests require the use of our function room?
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "lighter",
                fontStyle: "italic",
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
                  // Use the groupBooking state to determine the background color
                  // ? "#1169E0" : "#FFFFFF" means if groupBooking is true, use #1169E0, else use #FFFFFF
                  backgroundColor: groupBooking ? "#1169E0" : "#FFFFFF",
                  color: groupBooking ? "#FFFFFF" : "#191E3A",
                  border: groupBooking ? "none" : "2px solid #EBEBEB",
                }}
                // Use the handleGroupBookingSelection function to update the groupBooking state
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
              {/* Map through the amenities and display them */}
              {/* Use the index as the key */}
              {/* Use the amenity as the value */}
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
                  {amenity}
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
      <br />

      {/* AVAILABLE ROOMS FOR YOUR STAY */}
      <div style={{ width: "70%", margin: "0 auto", textAlign: "left" }}>
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>
          Available Rooms for your stay
        </h1>{" "}
        {hotel.hotel_room.map((room, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "13px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={twinRoomImage}
                alt="Twin Room"
                style={{
                  width: "250px",
                  marginRight: "20px",
                  // Clip the image to create a slanted edge
                  clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
                }}
              />

              <div style={{ textAlign: "left" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "600" }}>
                  {room.type}
                </h2>
                <ul style={{ listStyle: "none", padding: 0, fontSize: "13px" }}>
                  <li>
                    {" "}
                    <strong>Size:</strong> {room.size}
                  </li>
                  <li>
                    {" "}
                    <strong>Sleeps:</strong> {room.sleeps}
                  </li>
                  <li>
                    {" "}
                    <strong>Bed Type:</strong> {room.bed_type}
                  </li>
                  <li>
                    {" "}
                    <strong>Price Per Night:</strong> €{room.price_per_night}.00
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: "19px", fontWeight: "600" }}>
                Number of Rooms
              </h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "50%",
                    backgroundColor: "#EBEBEB",
                    color: "#191E3A",
                    border: "2px solid #818494",
                  }}
                  // Pass in the room to the handleRemoveRoom function
                  onClick={() => handleRemoveRoom(room)}
                >
                  -
                </button>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    margin: "0 10px",
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
                    backgroundColor: "#EBEBEB",
                    color: "#191E3A",
                    border: "2px solid #818494",
                  }}
                  // Pass in the room to the handleAddRoom function
                  onClick={() => handleAddRoom(room)}
                >
                  +
                </button>
              </div>
              <p>Total Room Value</p>
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                €
                {selectedRooms[room.type]
                  ? // If the room is selected, calculate the total price
                    // ? is the ternary operator for if/else
                    selectedRooms[room.type] * room.price_per_night + ".00"
                  : "0.00"}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* YOUR BASKET */}
      <YourBasket
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
