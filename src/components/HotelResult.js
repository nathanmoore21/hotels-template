import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import amenitiesIcons from "./data/amenitiesIcons";

const HotelResult = ({ hotel }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const { hotel_name: name, description, address, image, amenities } = hotel;

  const price = hotel.hotel_room[0].price_per_night;
  const amenitiesList = amenities.slice(0, 3);

  const getRatingInfo = (rating) => {
    if (rating >= 9.5) {
      return {
        backgroundColor: "#217952",
        color: "#FFFFFF",
        text: "Exceptional",
      };
    } else if (rating >= 9.4) {
      return {
        backgroundColor: "#217952",
        color: "#FFFFFF",
        text: "Wonderful",
      };
    } else if (rating >= 8.9) {
      return {
        backgroundColor: "#217952",
        color: "#FFFFFF",
        text: "Excellent",
      };
    } else if (rating >= 8.4) {
      return {
        backgroundColor: "#217952",
        color: "#FFFFFF",
        text: "Very Good",
      };
    } else {
      return { backgroundColor: "#DFE0E4", color: "#191E3A", text: "Good" };
    }
  };

  return (
    <div
      style={{
        width: "42.0625rem",
        height: "14.5rem",
        margin: "1rem 0",
        display: "flex",
        backgroundColor: "white",
        borderRadius: "12px",
        border: "1px solid #DFE0E4",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "14rem",
          height: "14.5rem",
          marginRight: "1rem",
          overflow: "hidden",
          position: "relative",
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
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "30px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleHeartClick}
        >
          <FontAwesomeIcon
            icon={isHeartClicked ? solidHeart : regularHeart}
            style={{ color: "#FF0000", fontSize: "20px" }}
          />
        </div>
      </div>

      <div style={{ margin: "5px" }}>
        <Link
          to={`/hotel/${name}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ fontWeight: "600", fontSize: "1.3rem", margin: 0 }}>
            {name}
          </div>

          <div style={{ marginBottom: "0", fontSize: "0.8rem" }}>{address}</div>
          <div style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
            {description}
          </div>

          {/* <ul style={{ listStyleType: "none", fontSize: "1.2em" }}>
          {amenitiesList.map((amenity, index) => (
            <li key={index} style={{ marginBottom: "5px" }}>
              <FontAwesomeIcon
                icon={amenitiesIcons[amenity]}
                style={{ marginRight: "5px", marginLeft: "3px" }}
              />
              {amenity}
            </li>
          ))}
        </ul> */}
          <div style={{ marginTop: "1.5rem", fontSize: "0.8rem" }}>
            Reserve now, pay later
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.7rem",
            }}
          >
            <img
              src="https://a.travel-assets.com/egds/marks/brands/hotels/loyalty.svg"
              style={{ height: "20px", width: "20px", marginRight: "0.2rem" }}
            ></img>
            <div>Collect stamps</div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "0.5rem",
                  borderRadius: "4px",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                  ...getRatingInfo(hotel.guest_review_rating),
                }}
              >
                {hotel.guest_review_rating}
              </div>
              <div style={{ marginRight: "0.5rem", fontSize: "0.8rem" }}>
                <strong>{getRatingInfo(hotel.guest_review_rating).text}</strong>
                <br />
                Guest Rating
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginRight: "0.5rem",
                  borderRadius: "4px",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                  ...getRatingInfo(hotel.event_management_rating),
                }}
              >
                {hotel.event_management_rating}
              </div>
              <div style={{ marginRight: "0.5rem", fontSize: "0.8rem" }}>
                <strong>
                  {getRatingInfo(hotel.event_management_rating).text}
                </strong>
                <br />
                Event Rating
              </div>
            </div>
          </div>
          <p
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              padding: "1rem",
              marginBottom: "1px",
              textAlign: "right",
            }}
          >
            from <h2>€{price}</h2> per night
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HotelResult;
