import React, { useState } from 'react';
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Button } from "../components/ButtonElement";
import Snowfall from "react-snowfall";
import BG from "../assets/BG.jpg";
import text from "../assets/text.png";
import snowMan from "../assets/snowMan.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  const join = () => {
    window.open("https://forms.gle/7GCJFgDamBqM5hxFA", "_blank");
  }

  const theme = useTheme();

  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        overflowX: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      <Snowfall
        snowflakeCount={250}
        color="#fff"
        style={{
          zIndex: 0,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            backgroundImage: `url(${BG})`,
            backgroundSize: "cover",
            opacity: 1,
          },
          color: "#333",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
          },
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            height: "auto",
            alignItems: "center",
            marginLeft: "150px",
            top: 0,
            marginTop: "-80px",
            [theme.breakpoints.down("sm")]: {
              marginTop: "auto", // Override marginTop for mobile screens
            },
          }}
        >
          <img
            src={text}
            alt="Your Alt Text"
            style={{
              maxWidth: "200%",
              height: "auto",
              borderRadius: "8px",
              filter: "drop-shadow(0px 0px 10px rgba(0, 0.2, 0.5, 1))",
              [theme.breakpoints.down("sm")]: {
                marginTop: "100px", // Override marginTop for mobile screens
              },
            }}
          />
          <Button
            to="https://forms.gle/7GCJFgDamBqM5hxFA"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            onClick={join}
            style={{
              fontFamily: "Exo 2, sans-serif",
              fontWeight: 600,
              marginTop: "20px", // Add margin top for spacing
            }}
          >
            Register Now
          </Button>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            margin: 20,
          }}
        >
          <img
            src={snowMan}
            alt="Your Alt Text"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
