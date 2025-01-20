/** @format */

import { Container, Box, Typography } from "@mui/material";
import React from "react";

function PageNotFound() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="Not Found"
          style={{ height: 300, width: 300 }}
        />
        <Typography
          variant="h4"
          color="error"
          sx={{
            "@media (max-width:600px)": {
              fontSize: 20,
            },
          }}
        >
          404 - Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            "@media (max-width:600px)": {
              fontSize: 13,
            },
          }}
        >
          The page you're looking for doesn't exist.
        </Typography>
      </Box>
    </Container>
  );
}

export default PageNotFound;
