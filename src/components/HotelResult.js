import React from "react";
// Impor link to route around the site
import { Link } from "react-router-dom";
// Import the image
import RiuPlaza from "./images/riu-plaza-dublin.jpeg";

// Create a component called HotelResult
// hotel is passed in as a prop
// ({ hotel }) is destructuring the hotel prop (getting what we know)
// } = hotel; is destructuring the hotel object
const HotelResult = ({ hotel }) => {
  const {
    //rename hotel_name to name
    hotel_name: name,
    description,
    address,
    image,
    amenities,
  } = hotel;
  // Extract price_per_night from the first room of the hotel
  const price = hotel.hotel_room[0].price_per_night;

  // Get the first three amenities
  // Slice the amenities array to get the first three amenities
  const amenitiesList = amenities.slice(0, 3);

  return (
    <div
      style={{
        width: "42.0625rem",
        height: "14.5rem",
        margin: "1rem 0",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "12px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "14rem",
          height: "14.5rem",
          marginRight: "1rem",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt="Riu Plaza Dublin"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "none",
          }}
        />
      </div>
      <div>
        {/* Add a link to the hotel page */}
        {/* Use the hotel name as the link text */}
        {/* Use the hotel name as the link path */}
        <Link to={`/hotel/${name}`} style={{ textDecoration: "none" }}>
          <h5>{name}</h5>
        </Link>
        <p className="icon-text">{address}</p>
        <p>{description}</p>

        {/* Display the first three amenities as a list */}
        <ul>
          {amenitiesList.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>

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

        <p
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            padding: "1rem",
          }}
        >
          from <h2>€{price}</h2> per night
        </p>
      </div>
    </div>
  );
};

export default HotelResult;
