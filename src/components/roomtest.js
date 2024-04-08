// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { Icon } from "@iconify/react";
// import bedIcon from "@iconify-icons/mdi/bed";
// import wifiIcon from "@iconify-icons/mdi/wifi";
// import gymIcon from "@iconify-icons/mdi/dumbbell";
// import noSmokingIcon from "@iconify-icons/mdi/smoking-off";
// import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faWifi,
//   faBowlFood,
//   faBellConcierge,
// } from "@fortawesome/free-solid-svg-icons";

// import RiuPlaza from "./images/riu-plaza-dublin.jpeg";
// import LogoImage from "./images/logo.svg";

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

// export default function Form() {
//   const [formValues, setFormValues] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//   });

//   React.useEffect(() => {
//     const storedValues = localStorage.getItem("formValues");
//     if (storedValues) {
//       setFormValues(JSON.parse(storedValues));
//     }
//   }, []);

//   React.useEffect(() => {
//     localStorage.setItem("formValues", JSON.stringify(formValues));
//   }, [formValues]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formValues);
//   };

//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
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
//                 maxWidth: "610px",
//                 minWidth: "610px",
//               }}
//             >
//               <h4 style={{marginBottom: "0px"}}>Your Unique Booking Code: MQ1234</h4>
//               <p style={{marginTop: "0px", marginBottom: "4px"}}>Want to discuss your booking before you confirm? Call us on{" 555-123-4567 "}</p>
//             </Item>
//             <Item
//               sx={{
//                 flexGrow: 2,
//                 p: 1,
//                 bgcolor: "#FFFFFF",
//                 border: "2px solid #CACCD2",
//                 borderRadius: 1,

//                 maxWidth: "610px",
//                 minWidth: "610px",              }}
//             >
//               <div>
//                 <h3>Temple Bar Hotel</h3>
//               </div>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <Icon
//                   icon={bedIcon}
//                   style={{ fontSize: "1.1875rem", marginRight: "8px" }}
//                 />
//                 <h4 style={{ fontSize: "1.1875rem", margin: "0" }}>
//                   Step 1: Your Details
//                 </h4>
//               </div>
//               <hr
//                 style={{
//                   borderTop: "1px solid #CACCD2",
//                   width: "100%",
//                   margin: "10px 0",
//                 }}
//               />
//               <div>
//                 <h5>Property Highlights</h5>
//                 <div className="CO1-icon-text">
//                   <FontAwesomeIcon
//                     icon={faWifi}
//                     style={{ marginRight: "0.5rem" }}
//                   />
//                   Complimentary Wi-Fi
//                   <FontAwesomeIcon
//                     icon={faBowlFood}
//                     style={{ marginRight: "0.5rem", marginLeft: "0.8rem" }}
//                   />
//                   Mini-fridge
//                   <FontAwesomeIcon
//                     icon={faBellConcierge}
//                     style={{ marginRight: "0.5rem", marginLeft: "0.8rem" }}
//                   />
//                   Room Service
//                 </div>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <h5 className="field-label">
//                   First Name <span className="required-indicator">*</span>
//                 </h5>
//                 <TextField
//                   id="firstName"
//                   name="firstName"
//                   value={formValues.firstName}
//                   onChange={handleChange}
//                   required
//                   InputProps={{
//                     className: "input-field",
//                   }}
//                 />
//                 <h5 className="field-label">
//                   Last Name <span className="required-indicator">*</span>
//                 </h5>
//                 <TextField
//                   id="lastName"
//                   name="lastName"
//                   value={formValues.lastName}
//                   onChange={handleChange}
//                   required
//                   InputProps={{
//                     className: "input-field",
//                   }}
//                 />
//                 <h5 className="field-label">
//                   Email Address <span className="required-indicator">*</span>
//                 </h5>
//                 <TextField
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formValues.email}
//                   onChange={handleChange}
//                   required
//                   InputProps={{
//                     className: "input-field",
//                   }}
//                 />
//                 <h5 className="field-label">
//                   Phone Number <span className="required-indicator">*</span>
//                 </h5>
//                 <TextField
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formValues.phoneNumber}
//                   onChange={handleChange}
//                   required
//                   InputProps={{
//                     className: "input-field",
//                   }}
//                 />
//                 <div style={{ marginTop: "1rem" }}>
//                   <label className="checkbox-label">
//                     <input type="checkbox" />
//                     Check this box if you would not like to receive Hotels.com
//                     special deals email newsletter that contains great hotel
//                     promotions.
//                   </label>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "flex-end",
//                     marginTop: "1rem",
//                   }}
//                 >
//                   <Link to="/RoomDetails" className="router-link">
//                     <Button
//                       color="primary"
//                       variant="contained"
//                       type="submit"
//                       style={{ marginLeft: "1rem" }}
//                     >
//                       Next
//                     </Button>
//                   </Link>
//                 </div>
//               </form>
//             </Item>
//           </div>
//         </div>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             p: 1,
//             borderRadius: 1,
//             margin: "auto",
//             paddingTop: "0px",
//           }}
//         >
//           <Item
//             sx={{
//               flexGrow: 3,
//               p: 1,
//               bgcolor: "#FFFFFF",
//               border: "2px solid #CACCD2",
//               borderRadius: 1,
//             }}
//           >
//             <Item
//               sx={{
//                 bgcolor: "#F3F3F5",
//                 p: 1,
//                 border: "2px solid #CACCD2",
//                 borderRadius: 1,
//               }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="Temple Bar Hotel"
//                 style={{
//                   height: "187px",
//                   border: "6px solid #FFFFFF",
//                   borderRadius: "1px",
//                   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//                 }}
//               />
//               <div>
//                 <p className="info-title">Temple Bar Hotel</p>
//                 <p className="info-body">123 Main Street, Dublin, Ireland</p>
//               </div>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div
//                   style={{
//                     backgroundColor: "#217952",
//                     padding: "0.5rem",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <h4 style={{ margin: "0", color: "#ffffff" }}>9.2</h4>
//                 </div>
//                 <h5 style={{ marginLeft: "0.5rem" }}>Excellent</h5>
//               </div>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={LogoImage}
//                   alt="Logo"
//                   style={{ height: "15px", marginRight: "0.5rem" }}
//                 />
//                 <p className="info-body">1,204 reviews</p>
//               </div>
//               <Item
//                 sx={{
//                   flexGrow: 2,
//                   bgcolor: "#FFFFFF",
//                   border: "2px solid #217952",
//                   borderRadius: 1,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "flex-start",
//                   padding: "1rem",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <p className="info-body">Check-in</p>
//                   <p className="info-body" style={{ fontWeight: 600 }}>
//                     Friday, March 29, 2024
//                   </p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <p className="info-body"></p>
//                   <p className="info-body">(3:00pm)</p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <p className="info-body">Check-out</p>
//                   <p className="info-body" style={{ fontWeight: 600 }}>
//                     Sunday, March 31, 2024
//                   </p>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "100%",
//                   }}
//                 >
//                   <p className="info-body"></p>
//                   <p className="info-body">(noon)</p>
//                 </div>
//                 <Item
//                   sx={{
//                     bgcolor: "#FFFFFF",
//                     width: "80%",
//                     margin: "auto",

//                     border: "2px solid #217952",
//                     borderRadius: 1,
//                     padding: "1rem",
//                   }}
//                 >
//                   <h5>Your Stay Breakdown</h5>
//                   <div className="body-text">
//                     <p className="info-body">2 nights, 14 guests</p>
//                     <ul className="info-body" style={{ paddingLeft: "13px" }}>
//                       <li>Standard Double Room x3</li>
//                       <li>Deluxe Suite x1</li>
//                       <li>King Deluxe Suite x1</li>
//                     </ul>
//                     <br />
//                     <p className="info-body">Extras:</p>
//                     <ul className="info-body" style={{ paddingLeft: "13px" }}>
//                       <li>Function Room</li>
//                     </ul>
//                   </div>
//                   <br></br>
//                   <div style={{ textAlign: "right" }}>
//                     <p className="info-body">Total:</p>
//                     <h4>€2,860.00</h4>
//                   </div>
//                 </Item>
//               </Item>
//             </Item>
//           </Item>
//         </Box>
//       </div>
//     </>
//   );
// }
