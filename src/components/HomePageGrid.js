import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import hotelData from "../components/data/hotel-data.json";
import { Link } from "react-router-dom";

export default function HomePageGrid() {
  const trendingHotels = hotelData.slice(0, 4);

  const getRatingInfo = (rating) => {
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

  const containerStyle = {
    width: "80%",
    margin: "0 auto",
  };

  const boxStyle = {
    width: "100%",
    margin: "0 auto",
    height: "8.6875rem",
    borderRadius: "1.5rem",
    backgroundColor: "#E71E42",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
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
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "left",
  };

  const sectionBoxStyle = {
    width: "15rem",
    height: "7.3125rem",
    borderRadius: "1.5rem",
    backgroundColor: "#A2122B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sectionTextStyle = {
    color: "#FFFFFF",
    fontSize: "0.9375rem",
    fontWeight: "300",
    textAlign: "left",
    marginRight: "1rem",
    paddingLeft: "1rem",
  };

  const sectionIconStyle = {
    width: "3rem",
    height: "3rem",
    marginRight: "1rem",
    paddingLeft: "1rem",
    color: "#ffffff",
  };

  const circleContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  const circleTextStyle = {
    color: "#191E3A",
    fontSize: "0.875rem",
    fontWeight: "normal",
    textAlign: "center",
    padding: "0.5rem",
    maxWidth: "80%",
  };

  const circleStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "1px solid #818494",
    margin: "0 0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconColor = "#1169E0";

  const iconSize = "2rem";

  const circles = [
    {
      text: "Spa",
      icon: (
        <Link to="/">
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
      text: "Pet friendly",
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
      text: "Hot tub",
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
      text: "Sea view",
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
      text: "Apart hotel",
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
      text: "Family friendly",
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
        <div style={circleStyle}>{circle.icon}</div>
        <div style={circleTextStyle}>{circle.text}</div>
      </div>
    ));

  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={boxStyle}>
          {/* Section 1 */}
          <div style={firstHeadingBoxStyle}>
            <h2 style={firstHeadingTextStyle}>
              Find and book your perfect stay
            </h2>
          </div>

          {/* Section 2 */}
          <div style={sectionBoxStyle}>
            <FontAwesomeIcon icon={faMoon} style={sectionIconStyle} />
            <h2 style={sectionTextStyle}>
              Earn rewards on every night you stay
            </h2>
          </div>

          {/* Section 3 */}
          <div style={sectionBoxStyle}>
            <FontAwesomeIcon icon={faTag} style={sectionIconStyle} />
            <h2 style={sectionTextStyle}>Save more with member prices</h2>
          </div>

          {/* Section 4 */}
          <div style={sectionBoxStyle}>
            <FontAwesomeIcon icon={faCalendarDays} style={sectionIconStyle} />
            <h2 style={sectionTextStyle}>
              Free cancellation options if plans change
            </h2>
          </div>
        </div>

        <div>
          <h3>Discover your new favourite stay</h3>
          <div style={circleContainerStyle}>{circles}</div>
        </div>

        <h3>Looking for the perfect place to stay?</h3>

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
                <Link
                  to="/"
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
          height: "300px",
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
            width: "auto",
            height: "100%",
            borderTopLeftRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
            marginLeft: "0rem",
          }}
        />
        <div>
          <h2 style={{ margin: "1rem" }}>With the Hotels.com app, you can:</h2>
          <ul style={{ fontSize: "0.8rem" }}>
            <li>Save on select hotels</li>
            <li>Earn one reward night* for every 10 nights you stay</li>
            <li>Search, book, and save on the go</li>
          </ul>
          <h5 style={{ margin: "1rem", marginTop: "3rem" }}>
            Scan the QR code with your device camera and download our app
          </h5>
          <Link
            style={{
              margin: "1rem",
              color: "#1169E0",
              textDecoration: "underline",
              fontSize: "0.8rem",
            }}
            onClick={(e) => (e.target.style.color = "#1169E0")}
          >
            *See Hotels.com Rewards terms & conditions
          </Link>
        </div>

        <img
          src="https://a.travel-assets.com/mad-service/qr-code/hcom/marquee_edr/qrcode_Marquee_EDR_-_en_IE.png"
          alt="QR Code"
          style={{
            marginTop: "1rem",
            marginRight: "0.5rem",
            width: "9rem",
            height: "9rem",
          }}
        />
      </div>
    </>
  );
}
