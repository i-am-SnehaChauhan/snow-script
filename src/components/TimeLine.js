import React from "react";
import Timeline from "../assets/Timeline.png";
import { Box } from "@mui/system";

const TimeLine = () => {
  return (
    <>
      <div
        id="timeline"
        style={{
          margin: "2px", // Adjust the value as needed
        }}
      >
        <h1
          className="mainHeading"
          style={{
            display: "block",
            maxWidth: "100%",
            textAlign: "center",
            color: "white",
            fontWeight: "900",
            fontFamily: "sans-serif",
            marginTop: "40px",
            marginBottom: "10px",
            padding: "0 50px", // Default padding for medium and large screens
          }}
        >
          TimeLine
        </h1>
      </div>

      <Box
        style={{
          position: "relative",
          padding: "10px 30px", // Default padding for small screens
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          color: "white",
          filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))",
          overflow: "hidden",
          zIndex: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <img
          src={Timeline}
          alt="timeline"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            justifyContent: "center",
          }}
        />
      </Box>
    </>
  );
};

export default TimeLine;
