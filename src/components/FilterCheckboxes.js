import React, { useState } from "react";
import mapImage from "./images/map1.png"; // Import the image
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Define the FilterCheckboxes component
function FilterCheckboxes({
  // Destructure the props (items i need to use)
  predefinedAmenities,
  selectedAmenities,
  onChange,
  onFilterChange,
}) {
  // Define state for min and max price
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // Define state for guest rating
  const [guestRating, setGuestRating] = useState("");
  // Define state for star rating
  const [starRating, setStarRating] = useState("");

  // Define event handlers for min and max price
  // e is the event object
  // e.target.value is the value of the input field
  // Define event handlers for min and max price
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    onFilterChange({
      minPrice: e.target.value,
      maxPrice,
      guestRating,
      starRating,
    });
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    onFilterChange({
      minPrice,
      maxPrice: e.target.value,
      guestRating,
      starRating,
    });
  };

  // Define event handlers for guest ratings
  const handleGuestRatingChange = (e) => {
    setGuestRating(e.target.value);
    onFilterChange({
      minPrice,
      maxPrice,
      guestRating: e.target.value,
      starRating,
    });
  };

  const handleStarRatingChange = (rating) => {
    const newRating = starRating === rating.toString() ? "" : rating.toString();
    setStarRating(newRating);

    onFilterChange({ minPrice, maxPrice, guestRating, starRating: newRating });
  };

  return (
    <Box
      component="form"
      // GET A BETTER UNDERSTANDING OF THE BELOW SYNTAX
      // '& > :not(style)' will apply the styles to all children except the style component
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <iframe
        width="260"
        height="160"
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

      <hr style={{ borderColor: "#DFE0E4", marginBottom: "10px" }} />
      <div style={{ fontSize: "17px", marginTop: "10px", fontWeight: 500 }}>
        Filter By
      </div>
      <div style={{ fontSize: "15px", marginTop: "10px", fontWeight: 400 }}>
        Popular Amenities
      </div>
      {/* Map over the predefinedAmenities array */}
      {/* For each amenity, create a checkbox */}
      {/* index is the index of the current amenity */}
      {predefinedAmenities.map((amenity, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={amenity}
              //includes() method determines whether an array includes a certain value
              checked={selectedAmenities.includes(amenity)}
              onChange={onChange}
            />
            {amenity}
          </label>
        </div>
      ))}

      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Total Price
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <TextField
          label="Min"
          id="outlined-min-price"
          variant="outlined"
          size="small"
          value={minPrice}
          onChange={handleMinPriceChange}
          style={{ marginRight: "10px", width: "120px" }}
          InputProps={{
            style: { fontSize: "12px" },
            sx: { bgcolor: "white" },
          }}
          InputLabelProps={{
            style: { fontSize: "12px", alignItems: "center" },
          }}
        />
        <TextField
          label="Max"
          id="outlined-max-price"
          variant="outlined"
          size="small"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          style={{ marginRight: "10px", width: "120px" }}
          InputProps={{
            style: { fontSize: "12px" },
            sx: { bgcolor: "white" },
          }}
          InputLabelProps={{
            style: { fontSize: "12px", alignItems: "center" },
          }}
        />
      </div>
      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Guest Rating
      </div>
      <div style={{}}>
        <label className="radio-label">
          <input
            type="radio"
            name="guestRating"
            value=""
            checked={guestRating === ""}
            onChange={handleGuestRatingChange}
          />
          Any
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="guestRating"
            value="9+"
            checked={guestRating === "9+"}
            onChange={handleGuestRatingChange}
          />
          Wonderful 9+
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="guestRating"
            value="8+"
            checked={guestRating === "8+"}
            onChange={handleGuestRatingChange}
          />
          Vey good 8+
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="guestRating"
            value="7+"
            checked={guestRating === "7+"}
            onChange={handleGuestRatingChange}
          />
          Good 7+
        </label>
      </div>
      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Property Class
      </div>
      <div style={{ fontSize: "13px" }}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="starRating"
              value={rating}
              checked={starRating === rating.toString()}
              onChange={() => handleStarRatingChange(rating.toString())} 
              style={{ display: "none" }}
            />
            <div
              style={{
                border:
                  starRating === rating.toString()
                    ? "2px solid black"
                    : "1px solid black",
                borderRadius: "4px", 
                padding: "5px",
                backgroundColor:
                  starRating === rating.toString() ? "#ECF4FD" : "transparent",
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => handleStarRatingChange(rating.toString())} 
            >
              {rating} <FontAwesomeIcon icon={faStar} />
            </div>
          </label>
        ))}
      </div>
    </Box>
  );
}

export default FilterCheckboxes;
