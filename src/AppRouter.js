import React, { useEffect } from "react"; // Import the React and useEffect hooks
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Import the BrowserRouter, Routes, Route, and useLocation components
import Index from "./pages/index"; // Import the Index component
import Results from "./pages/Results"; // Import the Results component
import Hotel from "./pages/Hotel"; // Import the Hotel component
import YourDetails from "./pages/YourDetails"; // Import the YourDetails component
import RoomDetails from "./pages/RoomDetails"; // Import the RoomDetails component
import CardDetails from "./pages/CardDetails"; // Import the CardDetails component
import GuestCardDetails from "./pages/GuestCardDetails"; // Import the GuestCardDetails component
import Confirmation from "./pages/Confirmation"; // Import the Confirmation component
import UpdateConfirmation from "./pages/UpdateConfirmation"; // Import the UpdateConfirmation component
import Payments from "./pages/Payments"; // Import the Payments component
import HotelPage from "./components/HotelPage"; // Import the HotelPage component
import hotelData from "./components/data/hotel-data.json"; // Import the hotelData object from the hotel-data.json file

// Define the ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  // Call the useEffect hook
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Define the AppRouter component
function AppRouter() {
  return (
    // BrowserRouter component
    <BrowserRouter>
      {/* // ScrollToTop component */}
      <ScrollToTop />
      {/* Routes component */}
      <Routes>
        {/* Route component */}
        <Route path="/" element={<Index />} />
        <Route path="/results" element={<Results />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/yourdetails" element={<YourDetails />} />
        <Route path="/roomdetails" element={<RoomDetails />} />
        <Route path="/carddetails" element={<CardDetails />} />
        <Route path="/guestcarddetails" element={<GuestCardDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/updateconfirmation" element={<UpdateConfirmation />} />
        <Route path="/payments" element={<Payments />} />
        {/* // path for each hotel */}
        <Route path="/hotel/:name" element={<HotelPage hotels={hotelData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
