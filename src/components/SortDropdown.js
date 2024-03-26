import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import hotelData from "../components/data/hotel-data.json";

// Create the SortDropdown component
// onChange is a function that is passed as a prop to the SortDropdown component
// --onChange is called when the value of the dropdown changes
function SortDropdown({ onChange }) {
  // Create the value and setValue state variables
  // --value is used to store the value of the dropdown
  // recommended is the default value of the dropdown
  const [value, setValue] = useState("Recommended");
  // Create the propertyCount and setPropertyCount state variables
  // --propertyCount is used to store the number of properties available
  // useState(0) is used to set the initial value of propertyCount to 0
  const [propertyCount, setPropertyCount] = useState(0);

  useEffect(() => {
    // Count the number of properties available
    setPropertyCount(hotelData.length);
  }, []);

  // Create the handleChange function
  const handleChange = (event) => {
    // Set the value of the dropdown to the value selected by the user
    setValue(event.target.value);
    // Call the onChange function and pass the event as an argument
    onChange(event);
  };

  // Return the SortDropdown component
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "160px" }}>
        <p
          style={{
            margin: "0",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            fontSize: "10px",
            letterSpacing: "0.8px",
          }}
        >
          {/* Display the amount of properties */}
          {propertyCount} properties
        </p>
        <p
          style={{
            margin: "0",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "500",
            fontSize: "12px",
            letterSpacing: "1px",
          }}
        >
          What we are paid impacts our sort order
        </p>
      </div>
      <FormControl style={{ marginLeft: "8px" }}>
        {/* Create the dropdown */}
        <InputLabel id="sort-dropdown-label" style={{ fontSize: "14px", backgroundColor: "transparent" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="sort-dropdown-label"
          id="sort-dropdown"
          // Set the value of the dropdown to the value variable
          value={value}
          label="Sort By"
          // Call the handleChange function when the value of the dropdown changes
          onChange={handleChange}
          style={{
            borderRadius: "9px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            letterSpacing: "0.3px",
            color: "#191E3A",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "#818494",
            padding: "4px 8px", // Reduced padding
            height: "43px", // Reduced height
            width: "252px",
          }}
        >
          {/* Create the dropdown options */}
          <MenuItem value="Recommended">Recommended</MenuItem>
          <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SortDropdown;
