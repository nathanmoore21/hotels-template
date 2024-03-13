import * as React from "react";

export default function HomePageGrid() {
  const containerStyle = {
    width: "80%", 
    margin: "0 auto", 
  };

  const boxStyle = {
    width: "68.5rem",
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
  };

  const iconStyle = {
    width: "5rem", 
    height: "5rem", 
    marginRight: "1rem",
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
  };

  const circleStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    border: "1px solid #818494",
    margin: "0 0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const circles = [
    { text: "Spa", icon: "spa_icon.png" },
    { text: "Pool", icon: "pool_icon.png" },
    { text: "Pet friendly", icon: "gym_icon.png" },
    { text: "Hot tub", icon: "pool_icon.png" },
    { text: "Cottage", icon: "pool_icon.png" },
    { text: "Sea view", icon: "pool_icon.png" },
    { text: "Apartment", icon: "pool_icon.png" },
    { text: "Apart hotel", icon: "pool_icon.png" },
    { text: "Farm", icon: "pool_icon.png" },
    { text: "Family friendly", icon: "pool_icon.png" },
    { text: "Chalet", icon: "pool_icon.png" },
    { text: "Castle", icon: "pool_icon.png" },
  ]
  // .map through the circles array and return a div for each circle
  // index is the index of the current circle
  .map((circle, index) => (
    <div key={index} style={{ textAlign: "center" }}>
      <div style={circleStyle}>
        {/* <img src={circle.icon} /> */}
      </div>
      <div style={circleTextStyle}>{circle.text}</div>
    </div>
  ));

  return (
    <>
      <div style={containerStyle}>
        <div style={boxStyle}>
          
          {/* Section 1 */}
          <div style={firstHeadingBoxStyle}>
            <h2 style={firstHeadingTextStyle}>
              Find and book your perfect stay
            </h2>
          </div>

          {/* Section 2 */}
          <div style={sectionBoxStyle}>
            <img src="placeholder_icon.png" alt="icon" style={iconStyle} />
            <h2 style={sectionTextStyle}>
              Earn rewards on every night you stay
            </h2>
          </div>

          {/* Section 3 */}
          <div style={sectionBoxStyle}>
            <img src="placeholder_icon.png" alt="icon" style={iconStyle} />
            <h2 style={sectionTextStyle}>Save more with member prices</h2>
          </div>

          {/* Section 4 */}
          <div style={sectionBoxStyle}>
            <img src="placeholder_icon.png" alt="icon" style={iconStyle} />
            <h2 style={sectionTextStyle}>
              Free cancellation options if plans change
            </h2>
          </div>
        </div>

        <div>
          <h5>Discover your new favourite stay</h5>
          <div style={circleContainerStyle}>{circles}</div>
        </div>
        <h5>Explore stays in trending destinations</h5>
      </div>
    </>
  );
}
