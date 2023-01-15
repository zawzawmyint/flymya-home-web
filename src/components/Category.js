import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

// import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";

import { BsBuilding } from "react-icons/bs";
import { BiBus } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { GiAirBalloon, GiCommercialAirplane } from "react-icons/gi";

const Category = () => {
  return (
    <>
      <Stack
        m={10}
        direction="row"
        spacing={10}
        className=" flex justify-center items-center"
      >
        <Box className=" text-cyan-400">
          <GiCommercialAirplane className=" w-12 h-12" />
          <Typography>Flights</Typography>
        </Box>
        <Box>
          <BsBuilding className=" w-12 h-12" />
          <Typography>Hotels</Typography>
        </Box>
        <Box>
          <BiBus className=" w-12 h-12" />
          <Typography>Buses</Typography>
        </Box>
        <Box>
          <FaCarSide className=" w-12 h-12" />
          <Typography>Cars</Typography>
        </Box>
        <Box>
          <GiAirBalloon className=" w-12 h-12" />
          <Typography>Balloons</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Category;
