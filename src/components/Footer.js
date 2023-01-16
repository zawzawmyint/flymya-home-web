import { Box, ButtonGroup, Divider, Stack } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { AiFillCaretDown } from "react-icons/ai";
import { MdFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { hover } from "@testing-library/user-event/dist/hover";

const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const buttons = [
    <Button key="one">-</Button>,
    <Button key="two">1</Button>,
    <Button key="three">+</Button>,
  ];

  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <Box className=" h-44 bg-cyan-400 relative rounded-md ">
      <Box className=" bg-white py-0 flex justify-center items-center gap-2 w-3/4 rounded-xl absolute top-10 left-36">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="domestic"
            control={<Radio checked size="small" />}
            label="Domestic"
          />
          <FormControlLabel
            value="international"
            control={<Radio size="small" />}
            label="International"
          />
        </RadioGroup>
        <Divider orientation="vertical" variant="middle" flexItem />

        <Box className=" flex justify-center items-center gap-2">
          <Box>Myanmar Citizens</Box>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="yes"
              control={<Radio checked size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box className=" flex justify-center items-center gap-2">
          <Box>Trip Type</Box>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
            size="small"
            className=" text-lg font-extrabold"
          >
            <MenuItem value={10}>One Way</MenuItem>
            <MenuItem value={20}>Round Trip</MenuItem>
          </Select>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />

        <Box>
          <Button aria-describedby={id} variant="text" onClick={handleClick}>
            <Typography className=" normal-case text-black">
              Passenger 1 Adult
            </Typography>{" "}
            <AiFillCaretDown className=" text-black" />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box className="flex flex-col gap-3">
              <Stack direction="row" spacing={5} className="p-2">
                <Box>
                  <Typography variant="subtitle2">Adult</Typography>
                  <Typography variant="caption">(Age 12 and over)</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > *": {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                </Box>
              </Stack>
              <Stack direction="row" spacing={10} className="px-2">
                <Box>
                  <Typography variant="subtitle2">Child</Typography>
                  <Typography variant="caption">(Age 2-11)</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > *": {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                </Box>
              </Stack>
              <Stack direction="row" spacing={6} className="p-2">
                <Box>
                  <Typography variant="subtitle2">Infant</Typography>
                  <Typography variant="caption">(Between Age 2)</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& > *": {
                      m: 1,
                    },
                  }}
                >
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                </Box>
              </Stack>
            </Box>
          </Popover>
        </Box>
      </Box>
      <Stack
        direction="row"
        spacing={15}
        className="bg-white  absolute top-20 left-24 w-5/6 rounded-xl p-0"
      >
        <Stack direction="row" spacing={4} className=" items-center gap-5 ">
          <MdFlightTakeoff className=" text-[50px]" />
          {"From "}
        </Stack>

        <Stack direction="row" spacing={2} className=" items-center gap-5">
          <Divider orientation="vertical" variant="middle" flexItem />
          <MdOutlineFlightLand className=" text-[50px]" />
          {"To "}
        </Stack>

        <Stack direction="row" spacing={18} className=" relative">
          <Divider orientation="vertical" variant="middle" flexItem />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Custom input"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <input ref={inputRef} {...inputProps} />
                  {InputProps?.endAdornment}
                </Box>
              )}
            />
          </LocalizationProvider>
          <Button
            size="small"
            variant="text"
            className=" h-8 w-24 absolute top-2 right-7"
            sx={{
              backgroundColor: "orange",
              "&:hover": {
                backgroundColor: "orange",
              },
              borderRadius: "10px",
            }}
          >
            <Typography variant="body1" className="normal-case text-white">
              Search
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
