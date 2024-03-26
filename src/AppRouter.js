import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/index";
import Results from "./pages/Results";
import Hotel from "./pages/Hotel";
import YourDetails from "./pages/YourDetails";
import RoomDetails from "./pages/RoomDetails";
import CardDetails from "./pages/CardDetails";
import Confirmation from "./pages/Confirmation";
import HotelPage from "./components/HotelPage";
import hotelData from "./components/data/hotel-data.json";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/results" element={<Results />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/yourdetails" element={<YourDetails />} />
        <Route path="/roomdetails" element={<RoomDetails />} />
        <Route path="/carddetails" element={<CardDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/hotel/:name" element={<HotelPage hotels={hotelData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
