import React, { useState } from "react";
import mapImage from "./images/map1.png"; // Import the image
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// Define the FilterCheckboxes component
function FilterCheckboxes({
  // Destructure the props (items i need to use)
  predefinedAmenities,
  selectedAmenities,
  onChange,
  onFilterChange,
  predefinedFRAmenities,
  selectedFRAmenities,
  onChangeFRAmenities,
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
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  // Define event handlers for min and max price
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Define event handlers for guest ratings
  const handleGuestRatingChange = (e) => {
    setGuestRating(e.target.value);
  };

  // Define event handlers for star ratings
  const handleStarRatingChange = (e) => {
    setStarRating(e.target.value);
  };

  // Define event handler for the Apply Filter button
  const handleFilter = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Call the onFilterChange prop function
    onFilterChange({ minPrice, maxPrice, guestRating, starRating });
  };

  return (
    <Box
      // Box component will render a form element
      component="form"
      // GET A BETTER UNDERSTANDING OF THE BELOW SYNTAX
      // '& > :not(style)' will apply the styles to all children except the style component
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <img
        src={mapImage}
        alt="Map"
        style={{
          width: "260px",
          height: "130px",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      />
      <hr style={{ marginBottom: "10px" }} />
      <div style={{ fontSize: "17px", marginTop: "10px", fontWeight: 500 }}>
        Filter By:
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
      <div style={{ fontSize: "15px", marginTop: "10px", fontWeight: 400 }}>
        Function Room Amenities
      </div>
      {/* Function Room Amenities */}
      {/* Map over the predefinedFRAmenities array */}
      {/* For each amenity, create a checkbox */}
      {/* index is the index of the current amenity */}
      {predefinedFRAmenities.map((amenity, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={amenity}
              checked={selectedFRAmenities.includes(amenity)}
              // Call the onChangeFRAmenities function when the checkbox is clicked
              onChange={(e) => onChangeFRAmenities(e, amenity)}
            />
            {amenity}
          </label>
        </div>
      ))}
      <div style={{ fontSize: "15px", marginTop: "10px", fontWeight: 400 }}>
        Total Price
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <TextField
          label="Min"
          id="outlined-min-price"
          variant="outlined"
          size="small"
          value={minPrice}
          // Call the handleMinPriceChange function when the input value changes
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
      <div style={{ fontSize: "15px", marginTop: "10px", fontWeight: 400 }}>
        Guest Rating
      </div>
      <div style={{ fontSize: "13px", marginBottom: "5px" }}>
        <label>
          <input
            type="radio"
            name="guestRating"
            value=""
            // If guestRating is an empty string, the radio button is checked
            checked={guestRating === ""}
            // Call the handleGuestRatingChange function when the radio button is clicked
            onChange={handleGuestRatingChange}
          />
          All
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="guestRating"
            value="9+"
            checked={guestRating === "9+"}
            onChange={handleGuestRatingChange}
          />
          9+
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="guestRating"
            value="8+"
            checked={guestRating === "8+"}
            onChange={handleGuestRatingChange}
          />
          8+
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="guestRating"
            value="7+"
            checked={guestRating === "7+"}
            onChange={handleGuestRatingChange}
          />
          7+
        </label>
      </div>
      <div style={{ fontSize: "15px", marginTop: "10px", fontWeight: 400 }}>
        Property Class
      </div>
      <div style={{ fontSize: "13px" }}>
        <label>
          <input
            type="radio"
            name="starRating"
            value=""
            // If starRating is an empty string, the radio button is checked
            checked={starRating === ""}
            // Call the handleStarRatingChange function when the radio button is clicked
            onChange={handleStarRatingChange}
          />
          Any
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="starRating"
            value="5"
            checked={starRating === "5"}
            onChange={handleStarRatingChange}
          />
          5 Stars
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="starRating"
            value="4"
            checked={starRating === "4"}
            onChange={handleStarRatingChange}
          />
          4 Stars
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="starRating"
            value="3"
            checked={starRating === "3"}
            onChange={handleStarRatingChange}
          />
          3 Stars
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="starRating"
            value="2"
            checked={starRating === "2"}
            onChange={handleStarRatingChange}
          />
          2 Stars
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="starRating"
            value="1"
            checked={starRating === "1"}
            onChange={handleStarRatingChange}
          />
          1 Star
        </label>
      </div>
      <button style={{ marginTop: "10px" }} onClick={handleFilter}>
        Apply Filter
      </button>
    </Box>
  );
}

export default FilterCheckboxes;
