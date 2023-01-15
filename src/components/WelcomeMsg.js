import { Box, Typography } from "@mui/material";
import React from "react";

const WelcomeMsg = () => {
  return (
    <Box mt={4}>
      <Typography
        sx={{ fontWeight: 600 }}
        className="text-center text-cyan-400"
        variant="h2"
      >
        Travel is easy with us
      </Typography>
    </Box>
  );
};

export default WelcomeMsg;
