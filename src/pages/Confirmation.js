import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Confirmation() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ResponsiveAppBar />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          height: "40%",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          border: "2px solid #1169E0",
          overflow: "auto",
        }}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{
            fontSize: "5vw",
            color: "green",
          }}
        />

        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: "bold",
            marginBottom: "0",
            marginTop: "10px",
          }}
        >
          Your payment is confirmed
        </p>
        <p
          style={{
            fontSize: "1vw",
          }}
        >
          Confirmation Code: MQ1234
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
