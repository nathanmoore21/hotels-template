// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import SortDropdown from "../components/SortDropdown";
import FilterCheckboxes from "../components/FilterCheckboxes";
import HotelResult from "../components/HotelResult";
import hotelData from "../components/data/hotel-data.json";

import SearchBar from "../components/SearchBar";
import Search from "../components/Search";

// Define the Results component
function Results() {
  // Declare variable sortBy and a function setSortBy to update it, initialised with null (no initial sorting criteria selected)
  const [sortBy, setSortBy] = useState(null);
  // Declare variable selectedAmenities and a function setSelectedAmenities to update it, initialised with an empty array
  // Initialising with an empty array allows it to store selected amenities; initially, no amenities are selected
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedFRAmenities, setSelectedFRAmenities] = useState([]);

  // Declare variable filteredHotels and a function setFilteredHotels to update it, initialised with an empty array
  const [filteredHotels, setFilteredHotels] = useState([]);
  // Declare variable predefinedAmenities and initialise it with an array of predefined amenities to select from
  const predefinedAmenities = [
    "Complimentary Wi-Fi",
    "Mini-fridge",
    "Iron and ironing board",
    "Room service",
    "Air conditioning",
    "Concierge service",
  ];

  // Declare variable and initialise it with an array of predefined function room amenities to select from
  const predefinedFRAmenities = [
    "Audiovisual equipment",
    "High-speed Wi-Fi",
    "Flexible seating arrangements",
    "Catering services",
    "Dedicated event planning staff",
    "Climate control",
    "Test",
  ];

  // Use the useEffect hook to update the filteredHotels variable when sortBy or selectedAmenities change
  useEffect(() => {
    // Sort the hotels based on the selected sorting criteria
    setFilteredHotels(filterHotels(sortHotels(sortBy)));
  }, [sortBy, selectedAmenities]);

  // Define a function to sort the hotels based on the selected sorting criteria
  const sortHotels = (sortBy) => {
    // If the hotelData is empty, return an empty array
    if (!hotelData || hotelData.length === 0) return [];
    // If the sortBy variable is empty, return the hotelData as is
    let hotelsWithNumericPrices = hotelData.map((hotel) => ({
      // Return a new object with the same properties as the hotel object
      // ... is the spread operator
      ...hotel,
      // Map the hotel_room array to a new array of objects
      hotel_room: hotel.hotel_room.map((room) => ({
        // Return a new object with the same properties as the room object
        ...room,
        // Convert the price_per_night property to a number
        // parseFloat is used to convert the string to a number
        price_per_night: parseFloat(room["price_per_night"]),
      })),
    }));

    // Sort the hotels based on the selected sorting criteria
    // If the sortBy variable is "priceLowToHigh", sort the hotels in ascending order of price
    if (sortBy === "priceLowToHigh") {
      // Return a new array of hotels sorted in ascending order of price
      return (
        hotelsWithNumericPrices
          // .slice() is used to create a shallow (new) copy of the array
          .slice()
          // .sort() is used to sort the array
          .sort(
            // (a, b) is a comparison function that compares two elements of the array
            (a, b) =>
              // Return the difference between the price of the first room in the first hotel (and second)
              // Subtracting b's price from a's price, the comparison function determines the order
              a.hotel_room[0]["price_per_night"] -
              b.hotel_room[0]["price_per_night"]
          )
      );
      // If the sortBy variable is "priceHighToLow", sort the hotels in descending order of price
    } else if (sortBy === "priceHighToLow") {
      return hotelsWithNumericPrices
        .slice()
        .sort(
          (a, b) =>
            b.hotel_room[0]["price_per_night"] -
            a.hotel_room[0]["price_per_night"]
        );
    } else {
      // If the sortBy variable is empty, return the hotelData as is
      return hotelsWithNumericPrices;
    }
  };

  // Define a function to filter the hotels based on the selected amenities
  const filterHotels = (hotels) => {
    // If the hotels array is empty, return an empty array
    // If the selectedAmenities array is empty, return the hotels array as is
    // If the selectedAmenities array is not empty, filter the hotels based on the selected amenities
    if (!hotels || hotels.length === 0 || selectedAmenities.length === 0) {
      // Return the hotels array
      return hotels;
    }
    // Return a new array of hotels that include all the selected amenities
    return hotels.filter((hotel) =>
      // .every() is used to check if all the selected amenities are included in the hotel's amenities
      selectedAmenities.every((amenity) => hotel.amenities.includes(amenity))
    );
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

  // Define a function to handle changes to the selected function room amenities
  const handleFRAmenitiesChange = (e, amenity) => {
    // isChecked is a boolean that is true if the checkbox is checked
    const isChecked = e.target.checked;
    // Update the selectedFRAmenities array based on the selected amenity
    setSelectedFRAmenities((prevState) => {
      // if the checkbox is checked, add the amenity to the array
      if (isChecked) {
        // return a new array with the selected amenity added
        return [...prevState, amenity];
      } else {
        // else return an array when the selected amenity removed
        return prevState.filter((item) => item !== amenity);
      }
    });
  };

  // Define a function to handle changes to the filter criteria
  const handleFilterChange = ({
    minPrice,
    maxPrice,
    guestRating,
    starRating,
  }) => {
    // Filter hotels based on the price range, guest rating, and star rating
    // .filter() is used to create a new array with all the elements
    let filteredHotels = hotelData.filter((hotel) => {
      // const roomPrices is an array of prices for each room in the hotel
      const roomPrices = hotel.hotel_room.map((room) =>
        // parseFloat is used to convert the string to a number
        parseFloat(room.price_per_night)
      );
      // Convert the minPrice and maxPrice strings to numbers
      // parseInt is used to convert the string to a number
      // !== "" is used to check if the string is not empty
      const min = minPrice !== "" ? parseInt(minPrice) : 0;
      // Number.MAX_VALUE is the largest possible value
      const max = maxPrice !== "" ? parseInt(maxPrice) : Number.MAX_VALUE;
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
        // .some() is used to check if any of the room prices are within the price range
        // >= is used to check if the price is greater than or equal to the min price
        // <= is used to check if the price is less than or equal to the max price
        // && is the AND operator
        roomPrices.some((price) => price >= min && price <= max) &&
        hotel.guest_review_rating >= minRating &&
        hotel.guest_review_rating < maxRating &&
        // === "" is used to check if the starRating is empty
        // || is the OR operator
        (starRating === "" || hotel.star_rating.toString() === starRating) &&
        // .every() is used to check if all the selected amenities are included in the function room amenities
        selectedFRAmenities.every((amenity) =>
          hotel.function_room.amenities.includes(amenity)
        )
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
    <div style={{ backgroundColor: "#FBF8F2" }}>
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
          {/* <SearchBar /> */}
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
                predefinedFRAmenities={predefinedFRAmenities}
                selectedFRAmenities={selectedFRAmenities}
                onChangeFRAmenities={handleFRAmenitiesChange}
              />
            </div>
            <div
              style={{ flex: "1", display: "flex", flexDirection: "column" }}
            >
              <div style={{ marginBottom: "10px", display: "inline-block" }}>
                {/* The SortDropdown component will allow users to select a sorting criteria for the hotel results */}
                <SortDropdown
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                />
              </div>
              <div>
                {/* Map through the filteredHotels array and display the HotelResult component for each hotel */}
                {filteredHotels.map((hotel, index) => (
                  <HotelResult key={index} hotel={hotel} />
                ))}
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
