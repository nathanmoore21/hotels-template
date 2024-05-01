import React, { useState, useEffect } from "react"; // Import the React and useState hooks
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import Footer from "../components/Footer"; // Import the Footer component
import SortDropdown from "../components/SortDropdown"; // Import the SortDropdown component
import FilterCheckboxes from "../components/FilterCheckboxes"; //  Import the FilterCheckboxes component
import HotelResult from "../components/HotelResult"; // Import the HotelResult component
import hotelData from "../components/data/hotel-data.json"; //  Import the hotelData JSON file
import Search from "../components/Search"; // Import the Search component

// Define the Results component
function Results() {
  // Declare variable sortBy and a function setSortBy to update it, initialised with null (no initial sorting criteria selected)
  const [sortBy, setSortBy] = useState(null);
  // Declare variable selectedAmenities and a function setSelectedAmenities to update it, initialised with an empty array
  // Initialising with an empty array allows it to store selected amenities; initially, no amenities are selected
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Declare variable filteredHotels and a function setFilteredHotels to update it, initialised with an empty array
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Declare variable resultCount and a function setResultCount to update it, initialised with 0
  const [resultCount, setResultCount] = useState(0);

  useEffect(() => {
    // Update result count when filteredHotels changes
    setResultCount(filteredHotels.length);
  }, [filteredHotels]);

  // Define hotel room amenities
  const hotelRoomAmenities = [
    "Complimentary Wi-Fi",
    "Pool",
    "Airport Shuttle Included",
    "Room Service",
    "Air Conditioning",
  ];

  // Define function room amenities
  const functionRoomAmenities = [
    "Audio-visual Equipment",
    "High-speed Wi-Fi",
    "Flexible Seating Options",
    "Catering Services",
    "Climate Control",
  ];

  const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");
const [guestRating, setGuestRating] = useState("");
const [starRating, setStarRating] = useState("");


  // Combine both arrays into one array
  const predefinedAmenities = [...hotelRoomAmenities, ...functionRoomAmenities];

  // Use the useEffect hook to update the filteredHotels variable when sortBy or selectedAmenities change
  useEffect(() => {
    // Sort the hotels based on the selected sorting criteria
      setFilteredHotels(filterHotels(sortHotels(sortBy)));
  }, [sortBy, selectedAmenities, minPrice, maxPrice, guestRating, starRating]);
  
  

  // Define a function to sort the hotels based on the selected sorting criteria
  const sortHotels = (sortBy) => {
    // If the hotelData array is empty, return an empty array
    if (!hotelData || hotelData.length === 0) return [];

    // Map through the hotelData array and convert the price strings to numbers
    let hotelsWithNumericPrices = hotelData.map((hotel) => ({
      // Spread operator is used to copy all the properties from the hotel object
      ...hotel,
      // Map through the hotel_room array and convert the price strings to numbers
      hotel_room: hotel.hotel_room.map((room) => ({
        ...room,
        price_per_night: parseFloat(room["price_per_night"]),
      })),
      // Map through the function_room array and convert the price strings to numbers
      function_room: {
        ...hotel.function_room,
        price_per_day: parseFloat(hotel.function_room["price_per_day"]),
      },
    }));

    // Sort the hotels based on the selected sorting criteria
    // sortBy is used to determine the sorting criteria
    //.slice() is used to create a shallow (new) copy of the hotels array
    // .sort() is used to sort the hotels array based on the sorting criteria
    // a and b are the two elements being compared
    // a.hotel_room[0]["price_per_night"] is the price of the first room in hotel a
    // b.hotel_room[0]["price_per_night"] is the price of the first room in hotel b
    // price low to high
    if (sortBy === "priceLowToHigh") {
      return hotelsWithNumericPrices
        .slice()
        .sort(
          (a, b) =>
            a.hotel_room[0]["price_per_night"] -
            b.hotel_room[0]["price_per_night"]
        );
      // price high to low
    } else if (sortBy === "priceHighToLow") {
      return hotelsWithNumericPrices
        .slice()
        .sort(
          (a, b) =>
            b.hotel_room[0]["price_per_night"] -
            a.hotel_room[0]["price_per_night"]
        );
      // function room price low to high
    } else if (sortBy === "functionRoomPriceLowToHigh") {
      return hotelsWithNumericPrices
        .slice()
        .sort(
          (a, b) =>
            a.function_room["price_per_day"] - b.function_room["price_per_day"]
        );
      // function room price high to low
    } else if (sortBy === "functionRoomPriceHighToLow") {
      return hotelsWithNumericPrices
        .slice()
        .sort(
          (a, b) =>
            b.function_room["price_per_day"] - a.function_room["price_per_day"]
        );
      // guest rating high to low
    } else if (sortBy === "guestRatingHighToLow") {
      return hotelsWithNumericPrices
        .slice()
        .sort((a, b) => b.guest_review_rating - a.guest_review_rating);
      // guest rating low to high
    } else if (sortBy === "guestRatingLowToHigh") {
      return hotelsWithNumericPrices
        .slice()
        .sort((a, b) => a.guest_review_rating - b.guest_review_rating);
      // default case is used to return the hotels array as is
    } else {
      return hotelsWithNumericPrices;
    }
  };

  // Define a function to filter the hotels based on the selected amenities
  const filterHotels = (hotels) => {
    // If the hotels array is empty, return an empty array
    if (!hotels || hotels.length === 0 || selectedAmenities.length === 0) {
      // Return the hotels array
      return hotels;
    }

    // Return a new array of hotels that include all the selected amenities
    return hotels.filter((hotel) => {
      // Check if the hotel contains all selected amenities
      const includesAmenity = selectedAmenities.every((amenity) => {
        // console.log() to log messages to the console for debugging
        console.log(
          `Checking amenity ${amenity} for hotel ${hotel.hotel_name}`
        );
        // Check if the hotel or function room amenities include the selected amenity
        const included =
          hotel.amenities.includes(amenity) ||
          // Check if the function room has the selected amenity
          (hotel.function_room &&
            hotel.function_room.amenities.includes(amenity));
        // console.log() to log messages to the console for debugging
        console.log(`Amenity ${amenity} included: ${included}`);
        return included;
      });

      // console.log() to log messages to the console for debugging
      console.log(
        `Hotel ${hotel.hotel_name} includes all selected amenities: ${includesAmenity}`
      );
      return includesAmenity;
    });
  };

  // Define a function to handle changes to the selected amenities
  const handleCheckboxChange = (e) => {
    // Update the selectedAmenities array based on the selected amenity
    // e.target.value is the value of the checkbox that was clicked
    const amenity = e.target.value;
    // If the selectedAmenities array includes the selected amenity, remove it from the array
    setSelectedAmenities((prevState) => {
      // .includes() is used to check if the selected amenity is already in the array
      if (prevState.includes(amenity)) {
        // .filter() is used to create a new array with all the elements
        // item !== amenity is used to remove the selected amenity from the array
        return prevState.filter((item) => item !== amenity);
      } else {
        // ...prevState is the spread operator used to create a new array with all the elements from the prevState array
        return [...prevState, amenity];
      }
    });
  };

  const handleFilterChange = ({
    minPrice,
    maxPrice,
    guestRating,
    starRating,
  }) => {
    // Filter hotels based on the price range, guest rating, star rating, and selected amenities
    let filteredHotels = hotelData.filter((hotel) => {
      // Convert the minPrice and maxPrice strings to numbers
      const min = minPrice !== "" ? parseInt(minPrice) : 0;
      const max = maxPrice !== "" ? parseInt(maxPrice) : Number.MAX_VALUE;
      // Set the default minRating and maxRating values
      let minRating = 0;
      let maxRating = 10;
      // switch statement to set the minRating and maxRating based on the guestRating
      switch (guestRating) {
        case "9+":
          minRating = 9;
          break;
        case "8+":
          minRating = 8;
          break;
        case "7+":
          minRating = 7;
          break;
        // default case is used to set the minRating to 0 and maxRating to 10
        default:
          break;
      }
      return (
        // Check if the hotel meets all filter criteria
        hotel.hotel_room.some(
          (room) =>
            parseFloat(room.price_per_night) >= min &&
            parseFloat(room.price_per_night) <= max
        ) &&
        hotel.guest_review_rating >= minRating &&
        hotel.guest_review_rating < maxRating &&
        (starRating === "" || hotel.star_rating.toString() === starRating)
      );
    });

    // Sort the filtered hotels based on the selected sorting criteria
    if (sortBy) {
      filteredHotels = sortHotels(sortBy, filteredHotels);
    }
    // Update the filteredHotels array with the new filtered hotels
    setFilteredHotels(filteredHotels);
  };

  // Return the JSX for the Results component
  return (
    // Add a div with a background color of #FBF8F2
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Add the ResponsiveAppBar component */}
      <ResponsiveAppBar />
      {/* Add padding to the top of the page to account for the fixed position of the app bar */}
      <div
        style={{
          paddingTop: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingLeft: "20px" }}>
          <Search />
          <div style={{ display: "flex", marginBottom: "10px" }}>
            {/* Add a div with flex: 1 to push the sort dropdown to the right */}
            {/* <div style={{ flex: 1 }}></div> */}
          </div>
          {/* Add a div with display: flex and marginBottom: 10px to align the filter checkboxes and hotel results */}
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <div style={{ flex: "0 0 250px", marginRight: "20px" }}>
              {/* The FilterCheckboxes component will display the predefined amenities and allow users to select amenities to filter the hotels */}
              <FilterCheckboxes
    predefinedAmenities={predefinedAmenities}
    selectedAmenities={selectedAmenities}
    onChange={handleCheckboxChange}
    onFilterChange={handleFilterChange}
    minPrice={minPrice}
    setMinPrice={setMinPrice}
    maxPrice={maxPrice}
    setMaxPrice={setMaxPrice}
    guestRating={guestRating}
    setGuestRating={setGuestRating}
    starRating={starRating}
    setStarRating={setStarRating}
/>

            </div>
            <div
              style={{ flex: "1", display: "flex", flexDirection: "column" }}
            >
              <div style={{ marginBottom: "10px", display: "inline-block" }}>
                {/* The SortDropdown component will allow users to select a sorting criteria for the hotel results */}
                <SortDropdown
                  // Pass the sortBy variable and setSortBy function as props to the SortDropdown component
                  value={sortBy}
                  // Update the sortBy variable when the user selects a sorting criteria
                  onChange={(e) => setSortBy(e.target.value)}
                  // Define the options for the SortDropdown component
                  options={[
                    { label: "Price: Low to High", value: "priceLowToHigh" },
                    { label: "Price: High to Low", value: "priceHighToLow" },
                    {
                      label: "Function Room Price: Low to High",
                      value: "functionRoomPriceLowToHigh",
                    },
                    {
                      label: "Function Room Price: High to Low",
                      value: "functionRoomPriceHighToLow",
                    },
                  ]}
                  // result count is passed as a prop to the SortDropdown component
                  resultCount={filteredHotels.length}
                />
              </div>
              <div>
                {/* // Display the results found */}
                {filteredHotels.length > 0 ? (
                  filteredHotels.map((hotel, index) => (
                    <HotelResult key={index} hotel={hotel} />
                  ))
                ) : (
                  // Display a message when no results are found
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginTop: "4rem",
                    }}
                  >
                    <h3>
                      Oh no! It looks like we've run out of options for you!
                    </h3>
                    <p style={{ fontSize: "20px" }}>
                      Please adjust your filters to find available options.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Results;



body {
  background-color: #f3f3f5;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.6875rem;
  letter-spacing: 0.12px;
  line-height: 1.5;
  color: #191e3a;
}
/* styles for h1 */
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* styles for h2 */
h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.6875rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* styles for h3 */
h3 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.4375rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* styles for h4 */
h4 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.1875rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* styles for h5 */
h5 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1.0625rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* styles for h6 */
h6 {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* //////////////////////////////////////// Icons */

/* styles for icon text */
.icon-text {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 0.6875rem;
  letter-spacing: 0.12px;
  color: #191e3a;
}

/* styles for icon text */
.CO1-icon-text {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.12px;
  color: #191e3a;
}

/* //////////////////////////////////////// Form */

/* styles for field label */
.field-label {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.2px;
  color: #191e3a;
}

/* styles for checkbox label */
.checkbox-label {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.12px;
  color: #191e3a;
}

/* styles for checkbox */
.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

/* styles for radio */
.radio-label {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.12px;
  color: #191e3a;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

/* styles for radio button */
.radio-label input[type="radio"] {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

/* styles for input fields */
input[type="text"],
input[type="email"] {
  width: 16.8125rem;
  height: 2rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* styles for field labels */
.field-label {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.8125rem;
  letter-spacing: 0.2px;
  color: #191e3a;
  margin-top: 8px;
}

/* styles for required field indicator */
.required-indicator {
  color: #f03346;
}

/* styles for button */
button[type="submit"] {
  width: 7.3125rem;
  background-color: #1169e0;
  text-transform: none;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  margin-left: auto;
  color: #ffffff;
}

/* //////////////////////////////////////// Hotel Information Box (at checkout) */

/* title */
.info-title {
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* body */
.info-body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* time */
.info-time {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.8125rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: right;
}

/* //////////////////////////////////////// Footer */

/* styles for footer */
 .footer-columns {
  display: flex;
  width: 100%;
  margin-right: 430px;
  padding-top: 100px;
}

/* styles for footer column */
.footer-column {
  flex: 1;
}

/* styles for footer title */
.footer-title {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.0625rem;
  letter-spacing: 0.1px;
  color: #191e3a;
  margin-top: 1%;
  margin-bottom: 1%;
}

/* styles for footer links */
.footer-column ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
  margin-bottom: 8px;
}

/* styles for footer links */
.footer-column li {
  margin-bottom: 8px;
}

/* styles for footer links */
.footer-column ul li a {
  text-decoration: none;
  font-size: 0.875rem;
  color: #1169e0;
  margin-bottom: 10%;
}

/* styles for footer links */
.footer-column ul li a:hover {
  text-decoration: underline;
}

/* //////////////////////////////////////// Router */

/* styles for router link */
.router-link {
  color: inherit;
  text-decoration: none;
}

/* //////////////////////////////////////// Checkbox */

/* styles for checkbox */
.checkbox-label {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}

/* ////////////////////// Search Form */

/* styles for search form */
.search-form {
  display: flex;
  flex-wrap: wrap;
}

/* styles for search form group */
.search-form-group {
  flex: 1 1 auto;
  margin-right: 20px;
}

/* styles for search field label */
.search-field-label {
  display: block;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.2px;
  color: #191e3a;
  margin-bottom: 5px;
}

/* styles for search field */
.search-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

/* styles for search button */
.search-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* styles for search button hover */
.search-button:hover {
  background-color: #0056b3;
}

/* styles for search button active */
.rmdp-input {
  width: 20.9375rem !important;
  /* width: 28.9375rem !important; */
}

