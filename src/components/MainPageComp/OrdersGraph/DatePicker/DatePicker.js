import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DataIcon } from "../../../../assets/Icons/index";

const DatePicker = () => {
  const [fromValue, setFromValue] = React.useState(dayjs(null));
  const [toValue, setToValue] = React.useState(dayjs(null));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{ flexDirection: "row" }}>
        <div
          className="w-20 flex justify-center items-center rounded-r-md"
          style={{ backgroundColor: "#02466A" }}
        >
          <img src={DataIcon} alt="" />
        </div>
        <MobileDatePicker
          placeholder="من"
          value={fromValue}
          onChange={(newValue) => {
            setFromValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  height: "3rem",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderLeft: "none",
                  borderRadius: "0",
                },
                "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  { borderLeft: "none", borderRadius: "0" },
              }}
              placeholder="اختر الفترة من "
              {...params}
            />
          )}
          className="mt-0"
        />
        <MobileDatePicker
          placeholder="من"
          value={toValue}
          onChange={(newValue) => {
            setToValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiInputBase-root": {
                  height: "3rem",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRight: "none",
                  borderRadius: "6px 0 0 6px",
                },
                "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
                  { borderRadius: "6px 0 0 6px" },
              }}
              placeholder="إلى"
              {...params}
            />
          )}
          className="mt-0"
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePicker;
