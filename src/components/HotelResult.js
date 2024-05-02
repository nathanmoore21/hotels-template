// import relevant libraries and icons
import React, { useState } from "react"; // Import the React and useState hooks
import { Link } from "react-router-dom"; // Import the Link component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // Import the solid heart icon
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // Import the regular heart icon
import amenitiesIcons from "./data/amenitiesIcons"; // Import the amenitiesIcons object

// create HotelResult that takes in a prop hotel
const HotelResult = ({ hotel }) => {
  // create state for isHeartClicked and setIsHeartClicked and set it to false (if the user wants to save the hotel)
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // create function handleHeartClick that toggles the state of isHeartClicked
  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  // destructure the hotel object to get the name, description, address, image, amenities, and price
  const { hotel_name: name, description, address, image, amenities } = hotel;

  // get the price of the hotel
  const price = hotel.hotel_room[0].price_per_night;
  // get the first 3 amenities of the hotel
  const amenitiesList = amenities.slice(0, 3);

  // get the rating of the hotel
  const getRatingInfo = (rating) => {
    // if the rating is greater than or equal to 9.5, return Exceptional and so on
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
      // else return Good
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
          // display the image of the hotel
          src={image}
          alt="Hotel Image"
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
          // when the user clicks on the heart icon, call the handleHeartClick function
          onClick={handleHeartClick}
        >
          {/* // display the heart icon, if the heart is clicked, display the solid heart icon, else display the regular heart icon */}
          <FontAwesomeIcon
            icon={isHeartClicked ? solidHeart : regularHeart}
            style={{ color: "#FF0000", fontSize: "20px", cursor: "pointer"}}
          />
        </div>
      </div>

      <div style={{ margin: "5px" }}>
        {/* // when the user clicks on the hotel name, redirect the user to the hotel page in a new tab  */}
        {/* // this saves the slected filters and replicates the real hotels.com site */}
        <Link
          to={`/hotel/${name}`}
          target="_blank"
          // noreferrer prevents the page from being able to access the window.opener property
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div style={{ fontWeight: "600", fontSize: "1.3rem", margin: 0 }}>
            {/* // display the name, address, description of the hotel */}
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
            Reserve now, pay later.
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
            <div>Best Price Guarantee</div>
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
                  // get the rating info of the hotel
                  // if the rating is greater than or equal to 9.5, return Exceptional
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
                  // get the rating info of the hotel
                  // if the rating is greater than or equal to 9.5, return Exceptional
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
              marginBottom: "0px",
              textAlign: "right",
              lineHeight: "1",
            }}
          >
            from{" "}
            <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>€{price}</h2>{" "}
            per night for <br /> each room
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HotelResult;
