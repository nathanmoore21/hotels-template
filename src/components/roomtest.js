// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import { Icon } from "@iconify/react";
// import bedIcon from "@iconify-icons/mdi/bed";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import DatePicker from "react-multi-date-picker";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleDown,
//   faAngleUp,
//   faExpand,
//   faUsers,
//   faBed,
// } from "@fortawesome/free-solid-svg-icons";
// import hotelData from "./data/hotel-data.json";

// import RiuPlaza from "./images/riu-plaza-dublin.jpeg";
// import LogoImage from "./images/logo.svg";

// const validationSchema = yup.object({
//   firstName: yup.string().required("First Name is required"),
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
// });

// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         p: 1,
//         m: 1,
//         bgcolor: (theme) =>
//           theme.palette.mode === "dark" ? "#101010" : "grey.100",
//         color: (theme) =>
//           theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//         border: "1px solid",
//         borderColor: (theme) =>
//           theme.palette.mode === "dark" ? "grey.800" : "grey.300",
//         borderRadius: 2,
//         fontSize: "0.875rem",
//         fontWeight: "700",
//         position: "relative",
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

// Item.propTypes = {
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };

// export default function FlexGrow() {
//   const formik = useFormik({
//     initialValues: {
//       firstName: localStorage.getItem("firstName") || "",
//       email: localStorage.getItem("email") || "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   useEffect(() => {
//     localStorage.setItem("firstName", formik.values.firstName);
//     localStorage.setItem("email", formik.values.email);
//   }, [formik.values.firstName, formik.values.email]);

//   const [isOpen, setIsOpen] = useState(false);
//   const [showSecondFields, setShowSecondFields] = useState(false);

//   const [expandSpecialRequests, setExpandSpecialRequests] = useState(false);
//   const [expandAccessibilityRequests, setExpandAccessibilityRequests] =
//     useState(false);
//   const [expandArrival, setExpandArrival] = useState(false);
//   const [specialRequestMessage, setSpecialRequestMessage] = useState("");
//   const [selectedAccessibilityRequests, setSelectedAccessibilityRequests] =
//     useState([]);
//   const [checkInDate, setCheckInDate] = useState(() => {
//     const storedDate = localStorage.getItem("checkInDate");
//     return storedDate ? new Date(JSON.parse(storedDate)) : null;
//   });

//   const [checkOutDate, setCheckOutDate] = useState(() => {
//     const storedDate = localStorage.getItem("checkOutDate");
//     return storedDate ? new Date(JSON.parse(storedDate)) : null;
//   });

//   const accessibilityOptions = [
//     "Wheelchair accessible (may have limitations)",
//     "Wheelchair accessible parking",
//     "Wheelchair-accessible concierge desk",
//     "Wheelchair-accessible lounge",
//     "Wheelchair-accessible meeting spaces/business center",
//     "Wheelchair-accessible on-site restaurant",
//     "Wheelchair-accessible registration desk",
//   ];

//   const handleCheckboxChange = (value) => {
//     const isSelected = selectedAccessibilityRequests.includes(value);
//     let updatedSelection = [];
//     if (isSelected) {
//       updatedSelection = selectedAccessibilityRequests.filter(
//         (item) => item !== value
//       );
//     } else {
//       updatedSelection = [...selectedAccessibilityRequests, value];
//     }
//     setSelectedAccessibilityRequests(updatedSelection);
//     localStorage.setItem(
//       "selectedAccessibilityRequests",
//       JSON.stringify(updatedSelection)
//     );
//   };

//   useEffect(() => {
//     const storedSelection = localStorage.getItem(
//       "selectedAccessibilityRequests"
//     );
//     if (storedSelection) {
//       setSelectedAccessibilityRequests(JSON.parse(storedSelection));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("checkInDate", JSON.stringify(checkInDate));
//   }, [checkInDate]);

//   useEffect(() => {
//     localStorage.setItem("checkOutDate", JSON.stringify(checkOutDate));
//   }, [checkOutDate]);

//   useEffect(() => {
//     const storedMessage = localStorage.getItem("specialRequestMessage");
//     if (storedMessage) {
//       setSpecialRequestMessage(storedMessage);
//     }
//   }, []);

//   const handleSpecialRequestChange = (e) => {
//     const message = e.target.value;
//     setSpecialRequestMessage(message);
//     localStorage.setItem("specialRequestMessage", message);
//   };

//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "flex-start" }}>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             <Item
//               sx={{
//                 flexGrow: 2,
//                 p: 1,
//                 bgcolor: "#FFFFFF",
//                 border: "2px solid #CACCD2",
//                 borderRadius: 1,
//                 maxWidth: "600px",
//               }}
//             >
//               <div>
//                 <h3>Hotel Riu Plaza The Gresham Dublin</h3>
//               </div>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <Icon
//                   icon={bedIcon}
//                   style={{ fontSize: "1.1875rem", marginRight: "8px" }}
//                 />
//                 <h4 style={{ fontSize: "1.1875rem", margin: "0" }}>
//                   Step 2: Room Details
//                 </h4>
//               </div>
//               <hr style={{ width: "100%", borderColor: "#CACCD2", borderWidth: "1px", borderStyle: "solid" }} />


//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "stretch",
//                   width: "99%",
//                   height: "auto",
//                   background: "#ffffff",
//                   borderRadius: "13px",
//                   border: "1px solid #DFE0E4",
//                   marginBottom: "10px", // Added margin: 0
//                   paddingBottom: "0px !important",
//                 }}
//               >
//                 <div style={{ width: "35%", marginRight: "10px" }}>
//                   <img
//                     src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     alt="Twin Room"
//                     style={{
//                       width: "100%",
//                       height: "auto", // Changed height to auto
//                       borderTopLeftRadius: "13px",
//                       borderBottomLeftRadius: "13px",
//                       clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)",
//                       verticalAlign: "bottom", // Add this line
//                     }}
//                   />
//                 </div>
//                 <div style={{ width: "65%" }}>
//                   <h2
//                     style={{
//                       fontSize: "18px",
//                       fontWeight: "300",
//                       marginBottom: "10px",
//                     }}
//                   >
//                     Standard Double Room
//                   </h2>
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       padding: 0,
//                       margin: 0,
//                       fontWeight: "100",
//                       fontSize: "11px",
//                     }}
//                   >
//                     {" "}
//                     {/* Removed marginBottom: 0 */}
//                     <li style={{ marginBottom: "0px" }}>
//                       <FontAwesomeIcon
//                         icon={faExpand}
//                         style={{
//                           fontSize: "13px",
//                           marginLeft: "2px",
//                           marginRight: "4px",
//                         }}
//                       />{" "}
//                       30 sq m
//                     </li>
//                     <li style={{ marginBottom: "0px" }}>
//                       <FontAwesomeIcon
//                         icon={faUsers}
//                         style={{ marginRight: "3px" }}
//                       />{" "}
//                       Sleeps 2
//                     </li>
//                     <li style={{ marginBottom: "0px", fontSize: "11px" }}>
//                       <FontAwesomeIcon
//                         icon={faBed}
//                         style={{ marginRight: "7px" }}
//                       />
//                       1 Double Bed
//                     </li>
//                     <li
//                       style={{
//                         marginBottom: "0px",
//                         textAlign: "right",
//                         marginRight: "10px",
//                         fontSize: "16px",
//                         marginBottom: "0px",
//                       }}
//                     >
//                       €110.00
//                       <div style={{ fontSize: "11px", marginTop: "0px" }}>
//                         per night
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <form onSubmit={formik.handleSubmit}>








//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   {/* Other content remains the same */}
//                   <div>
//                     {/* First guest fields */}
//                     <div style={{ display: "flex", alignItems: "center" }}>
//                       <div
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           borderRadius: "50%",
//                           border: "1px solid #1169E0",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           marginRight: "8px",
//                           color: "#191E3A",
//                           fontSize: "1rem",
//                         }}
//                       >
//                         1
//                       </div>
//                       <TextField
//                         style={{ marginRight: "1rem", width: "40%"}}
//                         id="firstName"
//                         name="firstName"
//                         placeholder="Guest Name"
//                         value={formik.values.firstName}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.firstName &&
//                           Boolean(formik.errors.firstName)
//                         }
//                       />
//                       <TextField
//                         id="email"
//                         name="email"
//                         placeholder="Guest Email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.email && Boolean(formik.errors.email)
//                         }
//                         style={{ marginRight: "1rem", width: "40%" }}
//                       />
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => setShowSecondFields(!showSecondFields)}
//                       >
//                         <FontAwesomeIcon
//                           icon={showSecondFields ? faAngleUp : faAngleDown}
//                         />
//                       </div>
//                     </div>
//                     {/* Toggle button for second guest fields */}

//                     {/* Second guest fields */}
//                     {showSecondFields && (
//                       <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
//                         <div
//                           style={{
//                             width: "30px",
//                             height: "30px",
//                             borderRadius: "50%",
//                             border: "1px solid #ffffff",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginRight: "8px",
//                             color: "#ffffff",
//                             fontSize: "1rem",
//                           }}
//                         >
//                           1
//                         </div>
//                         <TextField
//                         style={{ marginRight: "1rem", width: "40%" }}
//                         id="secondFirstName"
//                           name="secondFirstName"
//                           placeholder="Second Guest Name"
//                           value={formik.values.secondFirstName}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           error={
//                             formik.touched.secondFirstName &&
//                             Boolean(formik.errors.secondFirstName)
//                           }
//                         />
//                         <TextField
//                           id="secondEmail"
//                           name="secondEmail"
//                           placeholder="Second Guest Email"
//                           value={formik.values.secondEmail}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           error={
//                             formik.touched.secondEmail &&
//                             Boolean(formik.errors.secondEmail)
//                           }
//                           style={{ marginRight: "1rem", width: "40%" }}

//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   {/* Dropdown Menu */}
//                   <div
//                     style={{
//                       textDecoration: "none",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                       fontWeight: "normal",
//                       color: "#1169E0",
//                       marginLeft: "2.5rem",
//                       marginBottom: "1px",
//                       marginTop: "0.3rem",
//                     }}
//                     onClick={() => setIsOpen(!isOpen)}
//                   >
//                     Booking Preferences{" "}
//                     <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
//                   </div>
//                   {isOpen && (
//                     <ul
//                       style={{
//                         listStyleType: "none",
//                         marginTop: "0",
//                         paddingLeft: 0,
//                       }}
//                     >
//                       <li
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                         onClick={() =>
//                           setExpandSpecialRequests(!expandSpecialRequests)
//                         }
//                       >
//                         <span
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             fontSize: "11px",
//                             fontWeight: "normal",
//                             color: "#1169E0",
//                             marginLeft: "3.5rem",
//                           }}
//                         >
//                           Any special requests?{" "}
//                           <FontAwesomeIcon
//                             icon={
//                               expandSpecialRequests ? faAngleUp : faAngleDown
//                             }
//                           />
//                         </span>
//                         {expandSpecialRequests && (
//                           <div onClick={(e) => e.stopPropagation()}>
//                             <p
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0rem",
//                                 fontSize: "11px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               Please include details of your special request and
//                               we’ll forward it to the property. Please note,
//                               your request is not guaranteed and if you don’t
//                               hear back from the property, you may want to
//                               contact them directly to confirm.
//                             </p>
//                             <TextField
//                               id="specialRequests"
//                               name="specialRequests"
//                               variant="outlined"
//                               fullWidth
//                               multiline
//                               rows={4}
//                               InputProps={{ style: { fontSize: "12px" } }}
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0rem",
//                                 width: "90%",
//                               }}
//                               value={specialRequestMessage}
//                               onChange={handleSpecialRequestChange} // Update this line
//                             />
//                           </div>
//                         )}
//                       </li>
//                       <li
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                         onClick={() =>
//                           setExpandAccessibilityRequests(
//                             !expandAccessibilityRequests
//                           )
//                         }
//                       >
//                         <span
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             fontSize: "11px",
//                             fontWeight: "normal",
//                             color: "#1169E0",
//                             marginLeft: "3.5rem",
//                           }}
//                         >
//                           Any accessibility requests?{" "}
//                           <FontAwesomeIcon
//                             icon={
//                               expandAccessibilityRequests
//                                 ? faAngleUp
//                                 : faAngleDown
//                             }
//                           />
//                         </span>
//                         {expandAccessibilityRequests && (
//                           <div onClick={(e) => e.stopPropagation()}>
//                             <p
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0rem",
//                                 fontSize: "11px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               Please choose the accessibility options you
//                               require and we’ll forward your request to the
//                               property. Please note, your request is not
//                               guaranteed and if you don’t hear back from the
//                               property, you may want to contact them directly to
//                               confirm.{" "}
//                             </p>
//                             <div
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0px",
//                                 fontSize: "12px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               {accessibilityOptions.map((option) => (
//                                 <li key={option}>
//                                   <input
//                                     type="checkbox"
//                                     value={option}
//                                     onChange={(e) =>
//                                       handleCheckboxChange(e.target.value)
//                                     }
//                                     checked={selectedAccessibilityRequests.includes(
//                                       option
//                                     )}
//                                   />
//                                   {option}
//                                 </li>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                       <li
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                         onClick={() => setExpandArrival(!expandArrival)}
//                       >
//                         <span
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             fontSize: "11px",
//                             fontWeight: "normal",
//                             color: "#1169E0",
//                             marginLeft: "3.5rem",
//                           }}
//                         >
//                           Will this guest be arriving on the same day?{" "}
//                           <FontAwesomeIcon
//                             icon={expandArrival ? faAngleUp : faAngleDown}
//                           />
//                         </span>
//                         {expandArrival && (
//                           <div onClick={(e) => e.stopPropagation()}>
//                             <div
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0px",
//                                 fontSize: "12px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               <p
//                                 style={{
//                                   marginTop: "0rem",
//                                   fontSize: "11px",
//                                   fontWeight: "100",
//                                 }}
//                               >
//                                 Please include details of your date change for
//                                 this guest and we’ll forward it to the property.
//                                 Please note, your request is not guaranteed and
//                                 if you don’t hear back from the property, you
//                                 may want to contact them directly to confirm.
//                               </p>
//                               <div>Check In:</div>
//                               <DatePicker
//                                 format="DD MMM, YYYY"
//                                 value={checkInDate}
//                                 onChange={(value) => setCheckInDate(value)}
//                                 style={{ marginRight: "1rem" }}
//                               />
//                               <div style={{ marginTop: "10px" }}>
//                                 Check Out:
//                               </div>
//                               <DatePicker
//                                 format="DD MMM, YYYY"
//                                 value={checkOutDate}
//                                 onChange={(value) => setCheckOutDate(value)}
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                     </ul>
//                   )}

//                   <ul>
//                     {formik.touched.firstName && formik.errors.firstName && (
//                       <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
//                         {formik.errors.firstName}
//                       </li>
//                     )}
//                     {formik.touched.email && formik.errors.email && (
//                       <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
//                         {formik.errors.email}
//                       </li>
//                     )}
//                   </ul>


//                   <div style={{ display: "flex", flexDirection: "column" }}>
//                   {/* Other content remains the same */}
//                   <div>
//                     {/* First guest fields */}
//                     <div style={{ display: "flex", alignItems: "center" }}>
//                       <div
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           borderRadius: "50%",
//                           border: "1px solid #1169E0",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           marginRight: "8px",
//                           color: "#191E3A",
//                           fontSize: "1rem",
//                         }}
//                       >
//                         2
//                       </div>
//                       <TextField
//                         style={{ marginRight: "1rem", width: "40%"}}
//                         id="firstName"
//                         name="firstName"
//                         placeholder="Guest Name"
//                         value={formik.values.firstName}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.firstName &&
//                           Boolean(formik.errors.firstName)
//                         }
//                       />
//                       <TextField
//                         id="email"
//                         name="email"
//                         placeholder="Guest Email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={
//                           formik.touched.email && Boolean(formik.errors.email)
//                         }
//                         style={{ marginRight: "1rem", width: "40%" }}
//                       />
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => setShowSecondFields(!showSecondFields)}
//                       >
//                         <FontAwesomeIcon
//                           icon={showSecondFields ? faAngleUp : faAngleDown}
//                         />
//                       </div>
//                     </div>
//                     {/* Toggle button for second guest fields */}

//                     {/* Second guest fields */}
//                     {showSecondFields && (
//                       <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
//                         <div
//                           style={{
//                             width: "30px",
//                             height: "30px",
//                             borderRadius: "50%",
//                             border: "1px solid #ffffff",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             marginRight: "8px",
//                             color: "#ffffff",
//                             fontSize: "1rem",
//                           }}
//                         >
//                           2
//                         </div>
//                         <TextField
//                         style={{ marginRight: "1rem", width: "40%" }}
//                         id="secondFirstName"
//                           name="secondFirstName"
//                           placeholder="Second Guest Name"
//                           value={formik.values.secondFirstName}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           error={
//                             formik.touched.secondFirstName &&
//                             Boolean(formik.errors.secondFirstName)
//                           }
//                         />
//                         <TextField
//                           id="secondEmail"
//                           name="secondEmail"
//                           placeholder="Second Guest Email"
//                           value={formik.values.secondEmail}
//                           onChange={formik.handleChange}
//                           onBlur={formik.handleBlur}
//                           error={
//                             formik.touched.secondEmail &&
//                             Boolean(formik.errors.secondEmail)
//                           }
//                           style={{ marginRight: "1rem", width: "40%" }}

//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   {/* Dropdown Menu */}
//                   <div
//                     style={{
//                       textDecoration: "none",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                       fontWeight: "normal",
//                       color: "#1169E0",
//                       marginLeft: "2.5rem",
//                       marginBottom: "1px",
//                       marginTop: "0.3rem",
//                     }}
//                     onClick={() => setIsOpen(!isOpen)}
//                   >
//                     Booking Preferences{" "}
//                     <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
//                   </div>
//                   {isOpen && (
//                     <ul
//                       style={{
//                         listStyleType: "none",
//                         marginTop: "0",
//                         paddingLeft: 0,
//                       }}
//                     >
//                       <li
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                         onClick={() =>
//                           setExpandSpecialRequests(!expandSpecialRequests)
//                         }
//                       >
//                         <span
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             fontSize: "11px",
//                             fontWeight: "normal",
//                             color: "#1169E0",
//                             marginLeft: "3.5rem",
//                           }}
//                         >
//                           Any special requests?{" "}
//                           <FontAwesomeIcon
//                             icon={
//                               expandSpecialRequests ? faAngleUp : faAngleDown
//                             }
//                           />
//                         </span>
//                         {expandSpecialRequests && (
//                           <div onClick={(e) => e.stopPropagation()}>
//                             <p
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0rem",
//                                 fontSize: "11px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               Please include details of your special request and
//                               we’ll forward it to the property. Please note,
//                               your request is not guaranteed and if you don’t
//                               hear back from the property, you may want to
//                               contact them directly to confirm.
//                             </p>
//                             <TextField
//                               id="specialRequests"
//                               name="specialRequests"
//                               variant="outlined"
//                               fullWidth
//                               multiline
//                               rows={4}
//                               InputProps={{ style: { fontSize: "12px" } }}
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0rem",
//                                 width: "90%",
//                               }}
//                               value={specialRequestMessage}
//                               onChange={handleSpecialRequestChange} // Update this line
//                             />
//                           </div>
//                         )}
//                       </li>
//                       <li
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                         onClick={() =>
//                           setExpandAccessibilityRequests(
//                             !expandAccessibilityRequests
//                           )
//                         }
//                       >
//                         <span
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             fontSize: "11px",
//                             fontWeight: "normal",
//                             color: "#1169E0",
//                             marginLeft: "3.5rem",
//                           }}
//                         >
//                           Any accessibility requests?{" "}
//                           <FontAwesomeIcon
//                             icon={
//                               expandAccessibilityRequests
//                                 ? faAngleUp
//                                 : faAngleDown
//                             }
//                           />
//                         </span>
//                         {expandAccessibilityRequests && (
//                           <div onClick={(e) => e.stopPropagation()}>
//                             <p
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0rem",
//                                 fontSize: "11px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               Please choose the accessibility options you
//                               require and we’ll forward your request to the
//                               property. Please note, your request is not
//                               guaranteed and if you don’t hear back from the
//                               property, you may want to contact them directly to
//                               confirm.{" "}
//                             </p>
//                             <div
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0px",
//                                 fontSize: "12px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               {accessibilityOptions.map((option) => (
//                                 <li key={option}>
//                                   <input
//                                     type="checkbox"
//                                     value={option}
//                                     onChange={(e) =>
//                                       handleCheckboxChange(e.target.value)
//                                     }
//                                     checked={selectedAccessibilityRequests.includes(
//                                       option
//                                     )}
//                                   />
//                                   {option}
//                                 </li>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                       <li
//                         style={{ marginTop: "4px", cursor: "pointer" }}
//                         onClick={() => setExpandArrival(!expandArrival)}
//                       >
//                         <span
//                           style={{
//                             textDecoration: "none",
//                             cursor: "pointer",
//                             fontSize: "11px",
//                             fontWeight: "normal",
//                             color: "#1169E0",
//                             marginLeft: "3.5rem",
//                           }}
//                         >
//                           Will this guest be arriving on the same day?{" "}
//                           <FontAwesomeIcon
//                             icon={expandArrival ? faAngleUp : faAngleDown}
//                           />
//                         </span>
//                         {expandArrival && (
//                           <div onClick={(e) => e.stopPropagation()}>
//                             <div
//                               style={{
//                                 marginLeft: "3.5rem",
//                                 marginTop: "0px",
//                                 fontSize: "12px",
//                                 fontWeight: "100",
//                               }}
//                             >
//                               <p
//                                 style={{
//                                   marginTop: "0rem",
//                                   fontSize: "11px",
//                                   fontWeight: "100",
//                                 }}
//                               >
//                                 Please include details of your date change for
//                                 this guest and we’ll forward it to the property.
//                                 Please note, your request is not guaranteed and
//                                 if you don’t hear back from the property, you
//                                 may want to contact them directly to confirm.
//                               </p>
//                               <div>Check In:</div>
//                               <DatePicker
//                                 format="DD MMM, YYYY"
//                                 value={checkInDate}
//                                 onChange={(value) => setCheckInDate(value)}
//                                 style={{ marginRight: "1rem" }}
//                               />
//                               <div style={{ marginTop: "10px" }}>
//                                 Check Out:
//                               </div>
//                               <DatePicker
//                                 format="DD MMM, YYYY"
//                                 value={checkOutDate}
//                                 onChange={(value) => setCheckOutDate(value)}
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                     </ul>
//                   )}

//                   <ul>
//                     {formik.touched.firstName && formik.errors.firstName && (
//                       <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
//                         {formik.errors.firstName}
//                       </li>
//                     )}
//                     {formik.touched.email && formik.errors.email && (
//                       <li style={{ color: "#D42F2F", fontWeight: "normal" }}>
//                         {formik.errors.email}
//                       </li>
//                     )}
//                   </ul>
//                   <hr style={{ width: "95%", borderColor: "#CACCD2", borderWidth: "1px", borderStyle: "solid" }} />
// </div>






//                   {/* Submit Button */}
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       marginTop: "1rem",
//                     }}
//                   >
//                     <Link to="/CardDetails" className="router-link">
//                       <Button
//                         color="primary"
//                         variant="contained"
//                         type="submit"
//                         style={{ marginLeft: "1rem" }}
//                       >
//                         Next
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </form>
//             </Item>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }
