// useState is a Hook that allows you to have state variables in functional components
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Define the FilterCheckboxes component
function FilterCheckboxes({
  predefinedAmenities,
  selectedAmenities,
  onChange,
  onFilterChange,
}) {
  // Split predefined amenities into hotel room amenities and function room amenities (5 each)
  const hotelRoomAmenities = predefinedAmenities.slice(0, 5);
  const functionRoomAmenities = predefinedAmenities.slice(5, 10);
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
  // onFilterChange is a function that takes an object as an argument and updates the state
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    onFilterChange({
      minPrice: e.target.value,
      maxPrice,
      guestRating,
      starRating,
    });
  };

  // Define event handlers for max price
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

  // Define event handlers for star ratings
  const handleStarRatingChange = (rating) => {
    // If the star rating is already selected, deselect it
    // === is strict equality operator, which means it checks both the type (string, number, etc.) and the value (1, 2, etc.)
    // rating.toString() converts the rating to a string
    // ? is a ternary operator, which is a shorthand for if-else statement
    // "" is the default value for starRating
    // : is the else part of the ternary operator
    const newRating = starRating === rating.toString() ? "" : rating.toString();
    // Update the star rating state
    setStarRating(newRating);
    // Update the filter state
    onFilterChange({ minPrice, maxPrice, guestRating, starRating: newRating });
  };

  // Define state for selected area
  const [selectedArea, setSelectedArea] = useState("");

  // Define event handlers for area
  // value is the value of the radio button
  const handleAreaChange = (value) => {
    // Update the selected area state
    setSelectedArea(value);
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
      {/* // Embed a Google Map */}
      <iframe
        width="260"
        height="160"
        style={{
          border: 0,
          borderRadius: "12px",
          marginBottom: "10px",
        }}
        // Google Maps Embed URL with the location of Temple Bar, Dublin, Ireland
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
        Hotel Room Amenities
      </div>
      {/* map over the hotel room amenities */}
      {/* for each amenity, create a checkbox */}
      {/* index is the index of the current element being processed in the array */}
      {hotelRoomAmenities.map((amenity, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={amenity}
              //includes() method determines whether an array includes a certain value among its entries, returning true or false
              checked={selectedAmenities.includes(amenity)}
              // onChange is an event handler that updates the state
              onChange={onChange}
            />
            {/* // Display the amenity */}
            {amenity}
          </label>
        </div>
      ))}

      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Function Room Amenities
      </div>
      {functionRoomAmenities.map((amenity, index) => (
        <div key={index} style={{ marginBottom: "5px" }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={amenity}
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
          // label is the text that appears above the input field
          label="Min"
          // id is a unique identifier for the input field
          id="outlined-min-price"
          variant="outlined"
          size="small"
          // value is the value of the input field
          value={minPrice}
          // onChange is an event handler that updates the state
          onChange={handleMinPriceChange}
          // style is an object that contains CSS properties
          style={{ marginRight: "10px", width: "120px" }}
          // InputProps is an object that contains properties for the input field
          InputProps={{
            style: { fontSize: "12px" },
            sx: { bgcolor: "white" },
          }}
          // InputLabelProps is an object that contains properties for the input label
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
            // value ="" means that the default value is an empty string
            value=""
            // checked is a boolean attribute that is checked if the value is true
            checked={guestRating === ""}
            // onChange is an event handler that updates the state
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
        {/* // map over the star ratings */}
        {/* 1, 2, 3, 4, 5 stars */}
        {[1, 2, 3, 4, 5].map((rating) => (
          <label key={rating} style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="starRating"
              value={rating}
              // checked is a boolean attribute that is checked if the value is true
              checked={starRating === rating.toString()}
              // onChange is an event handler that updates the state
              onChange={() => handleStarRatingChange(rating.toString())}
              style={{ display: "none" }}
            />
            <div
              style={{
                border:
                  // if the star rating is already selected, change the border to 2px solid black
                  // else, change the border to 1px solid black
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
              // onClick is an event handler that updates the state
              onClick={() => handleStarRatingChange(rating.toString())}
            >
              {/* // Display the star rating */}
              {rating} <FontAwesomeIcon icon={faStar} />
            </div>
          </label>
        ))}
      </div>

      {/* // checkbox Traveller experience - doesn't work, just a placeholder */}
      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Traveller Experience
      </div>
      <label className="checkbox-label">
        <input type="checkbox" />
        Eco-certified
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        LGBTQ Welcoming
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        Business-friendly
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        Family-friendly
      </label>

      {/* //checkbox for accessibility - doesn't work, just a placeholder*/}
      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Accessibility
      </div>
      <label className="checkbox-label">
        <input type="checkbox" />
        Lift
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        Stair-free Path to Entrance
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        Service Animals Allowed
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        Roll-in Shower
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        In-room Accessibility
      </label>
      <label className="checkbox-label">
        <input type="checkbox" />
        Wheelchair-accessible Parking
      </label>

      {/* // radio buttons for area - doesn't work, just a placeholder*/}
      <div style={{ fontSize: "15px", marginTop: "30px", fontWeight: 400 }}>
        Area
      </div>

      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Dublin City"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Dublin City
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Blanchardstown"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Blanchardstown
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Malahide"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Malahide
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Dun Laoghaire"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Dun Laoghaire
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Tallaght"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Tallaght
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Connolly Station"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Connolly Station
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Howth"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Howth
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Swords"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Swords
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Leopardstown"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Leopardstown
      </label>
      <label className="radio-label">
        <input
          type="radio"
          name="area"
          value="Clontarf"
          onChange={(e) => handleAreaChange(e.target.value)}
        />
        Clontarf
      </label>
    </Box>
  );
}

export default FilterCheckboxes;
