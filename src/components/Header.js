import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <Box m={2}>
      <Stack
        direction="row"
        spacing={100}
        mx={10}
        className=" items-center justify-center"
      >
        <Box>
          <img
            className="w-24 h-10 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcEJ9TLcuvhziD7SPcom4LJQOY0uWKMc5S6TqIshb&s"
          />
        </Box>
        <Stack direction="row" spacing={3} className=" items-center">
          <Typography variant="h6">Blog</Typography>
          <Box>
            <img
              className="w-6 h-10 rounded-full "
              // sx={{ borderRadius: "100%" }}
              src="https://m.media-amazon.com/images/I/61H5S0NN19L._SL1024_.jpg"
            />
          </Box>

          <CgProfile className="w-7 h-7" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
