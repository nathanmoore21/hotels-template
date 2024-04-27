import * as React from "react"; // Import React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
// import icons from "@fortawesome/free-solid-svg-icons";
import {
  faMoon,
  faTag,
  faCalendarDays,
  faSpa,
  faPersonSwimming,
  faPaw,
  faHotTubPerson,
  faHouseChimney,
  faWater,
  faBuilding,
  faKitchenSet,
  faFireFlameCurved,
  faLeaf,
  faChildReaching,
  faCampground,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
// access the hotel data
import hotelData from "./data/hotel-data.json";
// import the Link component to allow for navigation
import { Link } from "react-router-dom";

// Create the HomePageGrid component
export default function HomePageGrid() {
  // Slice the hotel data to get the first 4 hotels which will be called trendingHotels
  const trendingHotels = hotelData.slice(0, 4);

  // Create a function to get the rating info based on the rating and add some text
  const getRatingInfo = (rating) => {
    // If the rating is greater than or equal to 9.5, return Exceptional and so on
    if (rating >= 9.5) {
      return {
        text: "Exceptional",
      };
    } else if (rating >= 9.4) {
      return {
        text: "Wonderful",
      };
    } else if (rating >= 8.9) {
      return {
        text: "Excellent",
      };
    } else if (rating >= 8.4) {
      return {
        text: "Very Good",
      };
    } else {
      return { text: "Good" };
    }
  };

  // this styling approach was used near the beginning of the project, it wasnt my preferred method of styling, so for the reamaing of the components i styled in line as well as a css file for some components.

  // Create the styles for the HomePageGrid component
  const containerStyle = {
    width: "80%",
    margin: "0 auto",
  };

  const boxStyle = {
    width: "97%",
    margin: "0 auto",
    height: "auto",
    borderRadius: "1.5rem",
    backgroundColor: "#E71E42",
    padding: "1rem",
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    marginBottom: "2rem",
  };

  const firstHeadingBoxStyle = {
    width: "15rem",
    height: "7.3125rem",
    borderRadius: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const firstHeadingTextStyle = {
    color: "#FFFFFF",
    fontSize: "1.502vw",
    fontWeight: "bold",
    textAlign: "left",
  };

  const sectionBoxStyle = {
    width: "25%",
    height: "7.3125rem",
    borderRadius: "1.5rem",
    backgroundColor: "#A2122B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2%",
  };

  const sectionTextStyle = {
    color: "#FFFFFF",
    fontSize: "1vw",
    fontWeight: "300",
    textAlign: "left",
    marginRight: "1rem",
    paddingLeft: "1rem",
  };

  const sectionIconStyle = {
    width: "2.5vw",
    height: "2.5vw",
    marginRight: "1rem",
    paddingLeft: "1rem",
    color: "#ffffff",
  };

  const circleContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  const iconColor = "#1169E0";

  const circleStyle = {
    width: "4.73vw",
    height: "4.73vw",
    borderRadius: "50%",
    border: "1px solid #818494",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const circleTextStyle = {
    color: "#191E3A",
    fontSize: "0.9vw",
    fontWeight: "normal",
    textAlign: "center",
    marginLeft: "8px",
    maxWidth: "80%",
  };

  const iconSize = "2vw";

  // Create an array of circles to be displayed as icons
  const circles = [
    {
      // text to be displayed below the icon
      text: "Spa",
      // icon to be displayed
      icon: (
        // Link to the home page
        <Link to="/">
          {/* FontAwesomeIcon component to display the icon */}
          <FontAwesomeIcon
            icon={faSpa}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Pool",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faPersonSwimming}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Pets",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faPaw}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Hot Tub",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faHotTubPerson}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Cottage",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouseChimney}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Sea View",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faWater}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Apartment",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faBuilding}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Hostle",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faKitchenSet}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Castle",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Farm",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faLeaf}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Families",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faChildReaching}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
    {
      text: "Chalet",
      icon: (
        <Link to="/">
          <FontAwesomeIcon
            icon={faCampground}
            style={{ fontSize: iconSize, color: iconColor }}
          />
        </Link>
      ),
    },
  ]
    // .map through the circles array and return a div for each circle
    // index is the index of the current circle
    .map((circle, index) => (
      <div key={index} style={{ textAlign: "center" }}>
        {/* // circleStyle is the style for the circle div */}
        {/* // circleTextStyle is the style for the text below the icon */}
        <div style={circleStyle}>{circle.icon}</div>
        {/* // circle.text is the text to be displayed below the icon */}
        {/* // circleTextStyle is the style for the text below the icon */}
        <div style={circleTextStyle}>{circle.text}</div>
      </div>
    ));

  return (
    <>
      {/* create a banner for the home page */}
      <div style={boxStyle}>
        {/* Section 1 */}
        <div style={firstHeadingBoxStyle}>
          <h2 style={firstHeadingTextStyle}>
            Find and Book Your Perfect Group Stay
          </h2>
        </div>

        {/* Section 2 */}
        <div style={sectionBoxStyle}>
          <FontAwesomeIcon icon={faMoon} style={sectionIconStyle} />
          <h2 style={sectionTextStyle}>
            Mix and Match Rooms to Suit Your Preferences
          </h2>
        </div>

        {/* Section 3 */}
        <div style={sectionBoxStyle}>
          <FontAwesomeIcon icon={faTag} style={sectionIconStyle} />
          <h2 style={sectionTextStyle}>
            Share the Cost; Each Room Covers Their Own Share
          </h2>
        </div>

        {/* Section 4 */}
        <div style={sectionBoxStyle}>
          <FontAwesomeIcon icon={faCalendarDays} style={sectionIconStyle} />
          <h2 style={sectionTextStyle}>
            Flexible Room Check-In and Check-Out Dates
          </h2>
        </div>
      </div>

      <div>
        <h3>Discover your new favourite stay</h3>
        <div style={circleContainerStyle}>{circles}</div>
      </div>

      <h3 style={{ marginTop: "3rem" }}>
        Looking for the perfect place to stay?
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          width: "100%",
        }}
      >
        {/* Map through trendingHotels and render each hotel */}
        {trendingHotels.map((hotel, index) => {
          // get the rating info for the hotel
          const ratingInfo = getRatingInfo(hotel.guest_review_rating);
          return (
            <div
              key={index}
              style={{
                width: "23%",
                backgroundColor: "#ffffff",
                borderRadius: "0.5rem",
                border: "1px solid #DFE0E4",
              }}
            >
              {/* // Link to each hotel page */}
              <Link
                // link to the hotel page with the hotel name as the parameter
                // use encodeURIComponent to encode the hotel name
                to={`/hotel/${encodeURIComponent(hotel.hotel_name)}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={hotel.image}
                  alt={hotel.hotel_name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginLeft: "0.5rem",
                    marginBottom: "0",
                    ...ratingInfo,
                  }}
                >
                  {hotel.hotel_name}
                </div>
                <div
                  style={{
                    marginLeft: "0.5rem",
                    marginTop: "0",
                    marginBottom: "1rem",
                    fontSize: "0.8rem",
                  }}
                >
                  {hotel.address}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                    margin: "0.5rem",
                    ...ratingInfo,
                  }}
                >
                  <strong>{hotel.guest_review_rating}/10</strong>{" "}
                  {ratingInfo.text}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Link
        to="/results"
        className="router-link"
        style={{ color: "#1169E0", fontSize: "14px" }}
      >
        See all properties{" "}
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "12px" }} />
      </Link>

      <h3 style={{ marginTop: "3rem" }}>
        Explore stays in trending destinations
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          width: "100%",
          height: "215px",
        }}
      >
        <div
          style={{
            width: "23%",
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            border: "1px solid #DFE0E4",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              // import images from unsplash
              src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Japan"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <div
              style={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "0.5rem",
                marginBottom: "0",
              }}
            >
              Tokyo
            </div>
            <div
              style={{
                marginLeft: "0.5rem",
                marginTop: "0",
                marginBottom: "1rem",
                fontSize: "0.8rem",
              }}
            >
              Japan
            </div>
          </Link>
        </div>

        <div
          style={{
            width: "23%",
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            border: "1px solid #DFE0E4",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src="https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="London"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <div
              style={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "0.5rem",
                marginBottom: "0",
              }}
            >
              London
            </div>
            <div
              style={{
                marginLeft: "0.5rem",
                marginTop: "0",
                marginBottom: "1rem",
                fontSize: "0.8rem",
              }}
            >
              United Kingdom
            </div>
          </Link>
        </div>

        <div
          style={{
            width: "23%",
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            border: "1px solid #DFE0E4",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rome"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <div
              style={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "0.5rem",
                marginBottom: "0",
              }}
            >
              Rome
            </div>
            <div
              style={{
                marginLeft: "0.5rem",
                marginTop: "0",
                marginBottom: "1rem",
                fontSize: "0.8rem",
              }}
            >
              Italy
            </div>
          </Link>
        </div>
        <div
          style={{
            width: "23%",
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            border: "1px solid #DFE0E4",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src="https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="New York"
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <div
              style={{
                textAlign: "left",
                fontSize: "1rem",
                fontWeight: "bold",
                marginLeft: "0.5rem",
                marginBottom: "0",
              }}
            >
              New York
            </div>
            <div
              style={{
                marginLeft: "0.5rem",
                marginTop: "0",
                marginBottom: "1rem",
                fontSize: "0.8rem",
              }}
            >
              United States of America
            </div>
          </Link>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#FFFFFF",
          borderRadius: "0.5rem",
          border: "1px solid #DFE0E4",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "5rem",
        }}
      >
        <img
          src="https://a.travel-assets.com/mad-service/footer/bnaBanners/HCOM_POOL_Stocksy_300dpi.jpg"
          alt="Swimming Pool"
          style={{
            width: "45%",
            borderTopLeftRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
            marginLeft: "0rem",
          }}
        />
        <div>
          <h2 style={{ margin: "1rem", fontSize: "1.7vw" }}>
            With the Hotels.com App, You Can:
          </h2>
          <ul style={{ fontSize: "1vw" }}>
            <li>Save on Selected Hotels</li>
            <li>Earn One Reward Night* for Every 10 Nights You Stay</li>
            <li>Search, Book, and Save on the Go</li>
          </ul>
          <h5 style={{ margin: "1rem", marginTop: "3rem", fontSize: "0.9vw" }}>
            Scan the QR Code with Your Device Camera and Download Our App
          </h5>
          <Link
            style={{
              margin: "1vw",
              color: "#1169E0",
              textDecoration: "underline",
              fontSize: "0.8vw",
            }}
            onClick={(e) => (e.target.style.color = "#1169E0")}
          >
            See Hotels.com Rewards Terms & Conditions
          </Link>
        </div>

        <img
          src="https://a.travel-assets.com/mad-service/qr-code/hcom/marquee_edr/qrcode_Marquee_EDR_-_en_IE.png"
          alt="QR Code"
          style={{
            marginTop: "1rem",
            marginRight: "0.5rem",
            width: "10vw",
            height: "10vw",
          }}
        />
      </div>
    </>
  );
}
