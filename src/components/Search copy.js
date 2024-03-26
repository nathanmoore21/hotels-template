// import React, { useState, useEffect, useRef } from "react";
// import { Formik, Form, Field } from "formik";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faLocationDot,
//   faCalendar,
//   faPlus,
//   faMinus,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-multi-date-picker";

// const Search = () => {
//   const navigate = useNavigate();

//   const [dateRange, setDateRange] = useState(null); // State to manage selected date range
//   const [showLocationPopup, setShowLocationPopup] = useState(false); // State to manage location popup visibility
//   const [selectedLocation, setSelectedLocation] = useState("Going to"); // State to manage selected location
//   const [showTravellersOptions, setShowTravellersOptions] = useState(false); // State to manage visibility of travellers options
//   const [adults, setAdults] = useState(1); // State to manage number of adults
//   const [children, setChildren] = useState(0); // State to manage number of children
//   const travellersRef = useRef(null); // Ref for travellers dropdown

//   const fakeLocations = ["Paris", "New York", "London", "Tokyo", "Sydney"]; // Fake list of locations

//   useEffect(() => {
//     // Function to close dropdown when clicking outside it
//     const handleClickOutside = (event) => {
//       if (
//         travellersRef.current &&
//         !travellersRef.current.contains(event.target)
//       ) {
//         setShowTravellersOptions(false);
//       }
//     };

//     // Add event listener to detect clicks outside the dropdown
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       // Cleanup the event listener when component unmounts
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLocationClick = (location) => {
//     setSelectedLocation(location);
//     setShowLocationPopup(false);
//   };

//   const handleDatesClick = () => {
//     // handle dates click logic
//   };

//   const handleTravellersClick = () => {
//     setShowTravellersOptions(!showTravellersOptions);
//   };

//   const handleAddAdult = (event) => {
//     event.stopPropagation();
//     setAdults(adults + 1);
//   };

//   const handleRemoveAdult = (event) => {
//     event.stopPropagation();
//     if (adults > 1) {
//       setAdults(adults - 1);
//     }
//   };

//   const handleAddChild = (event) => {
//     event.stopPropagation();
//     setChildren(children + 1);
//   };

//   const handleRemoveChild = (event) => {
//     event.stopPropagation();
//     if (children > 0) {
//       setChildren(children - 1);
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         location: "Going to",
//         travellers: 18,
//       }}
//       onSubmit={() => {
//         // Submit the form with the selected date range
//         navigate("/results");
//       }}
//     >
//       {() => (
//         <Form style={{ display: "flex", alignItems: "center" }}>
//           <div
//             className="search-form-group"
//             style={{
//               position: "relative",
//               flex: "1",
//               marginRight: "10px",
//               height: "42px",
//               width: "20.9375rem !important",
//             }}
//             onClick={() => setShowLocationPopup(!showLocationPopup)}
//           >
//             <FontAwesomeIcon
//               icon={faLocationDot}
//               style={{
//                 position: "absolute",
//                 left: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 color: "#191E3A",
//               }}
//             />
//             <div
//               className="search-field"
//               style={{
//                 paddingLeft: "30px",
//                 height: "42px",
//                 border: "1px solid #818494",
//                 backgroundColor: "transparent",
//                 borderRadius: "9px",
//                 width: "20.9375rem !important",
//               }}
//             >
//               {selectedLocation}
//             </div>
//             {/* Popup for Going to */}
//             {showLocationPopup && (
//               <div
//                 className="popup"
//                 style={{
//                   position: "absolute",
//                   top: "calc(100% + 10px)",
//                   left: 0,
//                   backgroundColor: "white",
//                   padding: "10px",
//                   border: "1px solid black",
//                 }}
//               >
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                   {fakeLocations.map((location, index) => (
//                     <li
//                       key={index}
//                       onClick={() => handleLocationClick(location)}
//                     >
//                       {location}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <div
//             className="search-form-group"
//             style={{
//               position: "relative",
//               flex: "1",
//               marginRight: "10px",
//               // width: "10rem !important"
//             }}
//             onClick={handleDatesClick}
//           >
//             <FontAwesomeIcon
//               icon={faCalendar}
//               style={{
//                 position: "absolute",
//                 left: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 color: "#191E3A",
//               }}
//             />
//             <DatePicker
//               range
//               dateSeparator=" to "
//               value={dateRange}
//               onChange={setDateRange}
//               format="DD MMM YYYY"
//               className="search-field"
//               style={{
//                 width: "20.9375rem !important",
//                 height: "42px",
//                 border: "1px solid #818494",
//                 backgroundColor: "transparent",
//                 borderRadius: "9px",
//                 paddingLeft: "30px",
//               }}
//               inputStyle={{
//                 height: "42px !important",
//                 width: "20.9375rem !important",
//               }} // Apply custom styles with !important
//             />
//           </div>

//           <div
//             className="search-form-group"
//             style={{
//               position: "relative",
//               flex: "1",
//             }}
//             onClick={handleTravellersClick}
//           >
//             <FontAwesomeIcon
//               icon={faUser}
//               style={{
//                 fontSize: "15px",
//                 position: "absolute",
//                 left: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 color: "#191E3A",
//               }}
//             />
//             <div
//               className="search-field"
//               style={{
//                 paddingLeft: "30px",
//                 height: "42px",
//                 border: "1px solid #818494",
//                 backgroundColor: "transparent",
//                 borderRadius: "9px",
//                 width: "335px !important",
//               }}
//             >
//               Travellers
//             </div>
//             {/* Travellers Options */}
//             {showTravellersOptions && (
//               <div
//               className="travellers-options"
//               ref={travellersRef}
//               style={{
//                 width: "335px", // Adjust the width as needed
//                 position: "absolute",
//                 top: "calc(100% + 10px)",
//                 left: 0,
//                 backgroundColor: "white",
//                 padding: "10px",
//                 border: "1px solid black",
//                 borderRadius: "10px",
//               }}
//             >
            
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                   <div style={{ marginRight: "10px" }}>
//                     <FontAwesomeIcon
//                       icon={faMinus}
//                       onClick={handleRemoveAdult}
//                       style={{ cursor: "pointer" }}
//                     />
//                   </div>
//                   <div style={{ marginRight: "10px" }}>{adults} Adults</div>
//                   <div>
//                     <FontAwesomeIcon
//                       icon={faPlus}
//                       onClick={handleAddAdult}
//                       style={{ cursor: "pointer" }}
//                     />
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginTop: "5px",
//                   }}
//                 >
//                   <div style={{ marginRight: "10px" }}>
//                     <FontAwesomeIcon
//                       icon={faMinus}
//                       onClick={handleRemoveChild}
//                       style={{ cursor: "pointer" }}
//                     />
//                   </div>
//                   <div style={{ marginRight: "10px" }}>{children} Children</div>
//                   <div>
//                     <FontAwesomeIcon
//                       icon={faPlus}
//                       onClick={handleAddChild}
//                       style={{ cursor: "pointer" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="search-button"
//             style={{
//               height: "42px",
//               width: "100px",
//               borderRadius: "20px",
//               marginTop: "3px",
//             }}
//           >
//             Search
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default Search;
