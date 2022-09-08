import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Spinner = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgb(0 0 0 / 40%)",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="secondary" />;
      </Box>
    </Box>
  );
};

export default Spinner;
