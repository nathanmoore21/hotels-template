// import React from "react";
// import functionRoomImage from "./images/functionroom.png"; // Import the image
// import hotelData from "../components/data/hotel-data.json"; // Import the data

// const FunctionRoom = () => {
//   const functionRoomData = hotelData[0].function_room; // Assuming the data structure is an array and you want the first item

//   return (
//     <div style={{ display: "flex", width: "100%", backgroundColor: "#FFFFFF" }}>
//       {/* Left side with image */}
//       <div style={{ flex: 1 }}>
//         <img src={functionRoomImage} alt="Function Room" style={{ width: "100%", maxWidth: "300px" }} />
//       </div>

//       {/* Right side with text and buttons */}
//       <div style={{ flex: 2, padding: "20px" }}>
//         <h1>Hello</h1>
//         <p>Will you and your guests require the use of our function room?</p>
//         <p>Additional €{functionRoomData.price_per_day} a day</p>
//         <div>
//           <button style={{ marginRight: "10px" }}>Yes</button>
//           <button>No</button>
//         </div>

//         {/* Display amenities */}
//         <div style={{ marginTop: "20px" }}>
//           <h3>Amenities</h3>
//           <div style={{ display: "flex", flexWrap: "wrap" }}>
//             {functionRoomData.amenities.map((amenity, index) => (
//               <div key={index} style={{ width: "50%", marginBottom: "10px" }}>
//                 {amenity}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FunctionRoom;
