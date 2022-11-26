import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DataIcon } from "../../../../assets/Icons/index";
import { DatePicker as DateRange, Space } from "antd";
// import { DateRangePicker } from "@adobe/react-spectrum";

import "rsuite/DateRangePicker/styles/index.less";
// import "rsuite/dist/rsuite-rtl.min.css";

import { DateRangePicker } from "rsuite";

const DatePicker = () => {
  const [fromValue, setFromValue] = React.useState(dayjs(null));
  const [toValue, setToValue] = React.useState(dayjs(null));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        spacing={3}
        sx={{
          flexDirection: "row",
          "&:has(.ant-picker-focused) .suffix_icon": {
            backgroundColor: "#0BF1D1 !important",
          },
          "& .ant-picker": {
            borderColor: "rgb(2, 70, 106)",
            transition: "0.2s",
          },
          "& .ant-picker.ant-picker-focused": {
            borderColor: "#0BF1D1 !important",
          },
        }}
      >
        <div
          className="w-20 flex suffix_icon duration-200 justify-center p-2 items-center rounded-r-md"
          style={{ backgroundColor: "#02466A" }}
        >
          <img src={DataIcon} alt="" />
        </div>
        <DateRange.RangePicker
          className="main_page_date_picker rounded-none rounded-l-sm  mt-0 w-80"
          style={{
            backgroundColor: "rgb(239, 249, 255)",
          }}
          placeholder={["اختر الفترة من إلى", ""]}
          allowEmpty={[true, true]}
          onChange={(e) => {
            console.log(e);
            const date = new Date(e[0]);
            const [year, month, day] = [
              date.getFullYear(),
              date.getMonth() + 1,
              date.getDate(),
            ];
            console.log(year, month, day);
          }}
          suffixIcon={""}
        />
        {/* <DateRangePicker
          onChange={(e) => {
            const date = new Date(e[0]);
            const [year, month, day] = [
              date.getFullYear(),
              date.getMonth() + 1,
              date.getDate(),
            ];
            console.log(year, month, day);
          }}
          appearance="default"
          placeholder="اختر الفترة من إلى"
          style={{ width: 230 }}
          cleanable={false}
        /> */}
        {/* <MobileDatePicker
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
        /> */}
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePicker;
