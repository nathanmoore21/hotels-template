import React, { useState, useEffect } from "react"; // Import the useState and useEffect hooks from React
import ResponsiveAppBar from "../components/ResponsiveAppBar"; // Import the ResponsiveAppBar component
import Footer from "../components/Footer"; // Import the Footer component
import SortDropdown from "../components/SortDropdown"; // Import the SortDropdown component
import FilterCheckboxes from "../components/FilterCheckboxes"; // Import the FilterCheckboxes component
import HotelResult from "../components/HotelResult"; // Import the HotelResult component
import hotelData from "../components/data/hotel-data.json"; // Import the hotel data from the hotel-data.json file
import Search from "../components/Search"; // Import the Search component

function Results() {
  // Create a sortBy state variable and a setSortBy function to update the sortBy variable
  const [sortBy, setSortBy] = useState(null);
  // Create a selectedAmenities state variable and a setSelectedAmenities function to update the selectedAmenities variable
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  // Create a filteredHotels state variable and a setFilteredHotels function to update the filteredHotels variable
  const [filteredHotels, setFilteredHotels] = useState([]);
  // Create a resultCount state variable and a setResultCount function to update the resultCount variable
  const [resultCount, setResultCount] = useState(0);
  // Create a minPrice state variable and a setMinPrice function to update the minPrice variable
  const [minPrice, setMinPrice] = useState("");
  // Create a maxPrice state variable and a setMaxPrice function to update the maxPrice variable
  const [maxPrice, setMaxPrice] = useState("");
  // Create a guestRating state variable and a setGuestRating function to update the guestRating variable
  const [guestRating, setGuestRating] = useState("");
  // Create a starRating state variable and a setStarRating function to update the starRating variable
  const [starRating, setStarRating] = useState("");

  // Update the result count when the filteredHotels array changes
  useEffect(() => {
    // .length returns the number of items in the filteredHotels array
    setResultCount(filteredHotels.length);
  }, [filteredHotels]);

  // Handle change in checkboxes for amenities
  const handleCheckboxChange = (e) => {
    // Get the value of the checkbox that was clicked
    const amenity = e.target.value;
    // Update the selectedAmenities array based on the checkbox that was clicked
    setSelectedAmenities((prevState) =>
      // If the selectedAmenities array already includes the amenity, remove it
      prevState.includes(amenity)
        ? // Filter out the amenity that was clicked
          // !== means not equal to
          prevState.filter((item) => item !== amenity)
        : // If the selectedAmenities array does not include the amenity, add it
          [...prevState, amenity]
    );
  };

  // Handle changes in filter options
  const handleFilterChange = (filters) => {
    // Destructure the filters object to get the minPrice, maxPrice, guestRating, and starRating values
    const { minPrice, maxPrice, guestRating, starRating } = filters;
    // Update the minPrice, maxPrice, guestRating, and starRating state variables
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setGuestRating(guestRating);
    setStarRating(starRating);
    // Filter the hotels based on the selected filters
    const filtered = filterHotels(sortHotels(sortBy, hotelData));
    // Update the filteredHotels state variable
    setFilteredHotels(filtered);
  };

  // Define the predefined amenities for hotel rooms and function rooms
  const hotelRoomAmenities = [
    "Complimentary Wi-Fi",
    "Pool",
    "Airport Shuttle Included",
    "Room Service",
    "Air Conditioning",
  ];

  const functionRoomAmenities = [
    "Audio-visual Equipment",
    "High-speed Wi-Fi",
    "Flexible Seating Options",
    "Catering Services",
    "Climate Control",
  ];

  // Combine the hotel room and function room amenities into a single array
  const predefinedAmenities = [...hotelRoomAmenities, ...functionRoomAmenities];

  // Update the filteredHotels array when the sortBy, selectedAmenities, minPrice, maxPrice, guestRating, or starRating variables change
  useEffect(() => {
    // Sort the hotels based on the selected sorting criteria
    const sortedHotels = sortHotels(sortBy);
    // Update the filteredHotels array based on the selected filters
    setFilteredHotels(filterHotels(sortedHotels));
  }, [sortBy, selectedAmenities, minPrice, maxPrice, guestRating, starRating]);

  // Sort the hotels based on the selected sorting criteria
  const sortHotels = (sortBy) => {
    // Convert the price_per_night and price_per_day values to numbers
    let hotelsPrices = hotelData.map((hotel) => ({
      // Spread the hotel object to include all existing properties
      ...hotel,
      // Map over the hotel_room array to convert the price_per_night values to numbers
      hotel_room: hotel.hotel_room.map((room) => ({
        // Spread the room object to include all existing properties
        ...room,
        // Convert the price_per_night value to a number
        price_per_night: parseFloat(room.price_per_night),
      })),
      // Convert the price_per_day value to a number
      function_room: {
        // Spread the function_room object to include all existing properties
        ...hotel.function_room,
        // Convert the price_per_day value to a number
        price_per_day: parseFloat(hotel.function_room.price_per_day),
      },
    }));

    // Sort the hotels based on the selected sorting criteria
    switch (sortBy) {
      // Sort the hotels from low to high based on the price_per_night value
      case "priceLowToHigh":
    // .sort() is used to sort the hotels array based on the sorting criteria
    // a and b are the two elements being compared
    // a.hotel_room[0]["price_per_night"] is the price of the first room in hotel a
    // b.hotel_room[0]["price_per_night"] is the price of the first room in hotel b
    // price low to high
        return hotelsPrices.sort(
          (a, b) =>
            a.hotel_room[0].price_per_night - b.hotel_room[0].price_per_night
        );
      case "priceHighToLow":
        return hotelsPrices.sort(
          (a, b) =>
            b.hotel_room[0].price_per_night - a.hotel_room[0].price_per_night
        );
      case "functionRoomPriceLowToHigh":
        return hotelsPrices.sort(
          (a, b) =>
            a.function_room.price_per_day - b.function_room.price_per_day
        );
      case "functionRoomPriceHighToLow":
        return hotelsPrices.sort(
          (a, b) =>
            b.function_room.price_per_day - a.function_room.price_per_day
        );
      case "guestRatingHighToLow":
        return hotelsPrices.sort(
          (a, b) => b.guest_review_rating - a.guest_review_rating
        );
      case "guestRatingLowToHigh":
        return hotelsPrices.sort(
          (a, b) => a.guest_review_rating - b.guest_review_rating
        );
      default:
        return hotelsPrices;
    }
  };

  // Filter the hotels based on the selected filters
  const filterHotels = (hotels) => {
    return hotels.filter((hotel) => {
      // Check if the hotel meets the selected filter criteria
      const meetsPriceCriteria = hotel.hotel_room.some((room) => {
        // Convert the price_per_night value to a number
        const pricePerNight = parseFloat(room.price_per_night);
        // Convert the minPrice and maxPrice values to numbers
        const min = minPrice ? parseFloat(minPrice) : 0;
        // Number.MAX_VALUE is the largest positive representable number in JavaScript
        const max = maxPrice ? parseFloat(maxPrice) : Number.MAX_VALUE;

        // Check if the price_per_night value is within the minPrice and maxPrice range
        return pricePerNight >= min && pricePerNight <= max;
      });

      // Check if the hotel meets the selected filter criteria
      const meetsGuestRatingCriteria = guestRating
      // Check if the hotel's guest_review_rating is greater than or equal to the selected guestRating
        ? hotel.guest_review_rating >= parseInt(guestRating)
        // If no guestRating is selected, return true
        : true;
        // Check if the hotel meets the selected filter criteria
      const meetsStarRatingCriteria = starRating
      // Check if the hotel's star_rating is equal to the selected starRating
        ? hotel.star_rating.toString() === starRating
        // If no starRating is selected, return true
        : true;
        // Check if the hotel meets the selected filter criteria
      const meetsAmenitiesCriteria =
      // Check if the selectedAmenities array is empty or if the hotel's amenities array includes all selected amenities
      // === 0 means the selectedAmenities array is empty
      // || means or
      // .every checks if all elements in the selectedAmenities array meet the condition
        selectedAmenities.length === 0 ||
        selectedAmenities.every(
          // Check if the hotel's amenities array includes the selected amenity
          (amenity) =>
          // .includes checks if the hotel's amenities array includes the selected amenity
            hotel.amenities.includes(amenity) ||
            // Check if the hotel's hotel_room array includes the selected amenity 
            (hotel.function_room &&
              hotel.function_room.amenities.includes(amenity))
        );

        // Return true if the hotel meets all selected filter criteria
      return (
        meetsPriceCriteria &&
        meetsGuestRatingCriteria &&
        meetsStarRatingCriteria &&
        meetsAmenitiesCriteria
      );
    });
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
