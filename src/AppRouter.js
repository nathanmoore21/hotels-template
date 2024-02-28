// Import React library to use, and create components
import React from "react";
// Import routing components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import individual page components
import Index from "./pages/index";
import Results from "./pages/Results";
import Hotel from "./pages/Hotel";
import YourDetails from "./pages/YourDetails";
import RoomDetails from "./pages/RoomDetails";
import CardDetails from "./pages/CardDetails";
// Import components for hotel page
import HotelPage from "./components/HotelPage";
// Import JSON data containing hotel information
import hotelData from "./components/data/hotel-data.json";

// Define the main AppRouter component responsible for routing
function AppRouter() {
  return (
    // Wrap the entire routing structure in BrowserRouter to enable routing
    <BrowserRouter>
      <Routes>
        {/* Each Route component defines a path and the component to render for that path */}
        <Route path="/" element={<Index />} />
        <Route path="/results" element={<Results />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/yourdetails" element={<YourDetails />} />
        <Route path="/roomdetails" element={<RoomDetails />} />
        <Route path="/carddetails" element={<CardDetails />} />
        {/* <Route exact path="/" element={<HotelGrid hotels={hotelData} />} /> */}

        {/* Render HotelPage component for dynamic hotel paths */}
        {/* Pass hotelData to HotelPage component */}
        <Route path="/hotel/:name" element={<HotelPage hotels={hotelData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
