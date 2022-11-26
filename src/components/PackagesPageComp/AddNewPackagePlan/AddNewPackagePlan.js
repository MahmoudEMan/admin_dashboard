import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AiFillStar } from "react-icons/ai";
import Select from "@mui/material/Select";
import Button from "../../../UI/Button/Button";
import styles from "./AddNewPackagePlan.module.css";
import MenuItem from "@mui/material/MenuItem";
import { GoArrowRight } from "react-icons/go";

const packagesOptions = [
  "100 منتج",
  "10 تصنيفات",
  "دعم فني 24",
  "تجربة مجانية",
  "توفير مخازن",
  "تخصيص القالب",
  "خدمات الاستشارة",
];

const AddNewPackagePlan = ({ cancel }) => {
  const [packageOption, setPackageOption] = useState("");
  const handleCategory = (event) => {
    setPackageOption(event.target.value);
  };
  return (
    <div
      className="absolute pl-36 top-0 right-0  z-10  w-full h-full"
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div onClick={cancel} className={` ${styles.arrow_con}`}>
            <GoArrowRight style={{ color: "#02466A", fontSize: "1.2rem" }} />
          </div>
          <h2>الباقات والأسعار</h2>
        </div>
        <Button type={"normal"}>اعتماد الباقة </Button>
      </div>
      <div>
        <h2 className="mb-2 font-medium" style={{ color: "#1DBBBE" }}>
          رقم الباقة
        </h2>
        <label htmlFor="">
          <input
            className="text-center p-2 outline-none rounded-lg placeholder:text-gray-800"
            style={{ backgroundColor: "#D3D3D3" }}
            placeholder="0212"
            type="text"
          />
        </label>
        <div className="mt-6 p-8 shadow-lg" style={{ backgroundColor: "#fff" }}>
          <h2 className="font-medium">
            <AiFillStar
              style={{
                display: "inline-block",
                marginLeft: "1rem",
                color: "red",
              }}
            ></AiFillStar>
            البيانات الأساسية
          </h2>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Paper className="flex items-center shadow-none">
                  <h2 className="w-40">اسم الباقة</h2>
                  <label className="flex-1" htmlFor="">
                    <input
                      className=" w-full p-2 outline-none rounded-lg placeholder:text-gray-800"
                      style={{ backgroundColor: "#EFF9FF" }}
                      placeholder="أدخل حروف انجليزية وأرقام"
                      type="text"
                    />
                  </label>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="flex items-center shadow-none">
                  <h2 className="w-40">الخصم</h2>
                  <label className="flex-1" htmlFor="">
                    <input
                      className=" w-full p-2 outline-none rounded-lg placeholder:text-gray-800"
                      style={{ backgroundColor: "#EFF9FF" }}
                      placeholder="أدخل مبلغ الخصم"
                      type="number"
                    />
                  </label>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="flex items-center shadow-none">
                  <h2 className="w-40">المبلغ الشهري</h2>
                  <label className="flex-1" htmlFor="">
                    <input
                      className=" w-full p-2 outline-none rounded-lg placeholder:text-gray-800"
                      style={{ backgroundColor: "#EFF9FF" }}
                      placeholder="50 ر.س"
                      type="number"
                    />
                  </label>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="flex items-center shadow-none">
                  <h2 className="w-40">المبلغ السنوي</h2>
                  <label className="flex-1" htmlFor="">
                    <input
                      className=" w-full p-2 outline-none rounded-lg placeholder:text-gray-800"
                      style={{ backgroundColor: "#EFF9FF" }}
                      placeholder="500 ر.س"
                      type="number"
                    />
                  </label>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="mt-6 p-8 shadow-lg" style={{ backgroundColor: "#fff" }}>
          <h2 className="font-medium">
            <AiFillStar
              style={{
                display: "inline-block",
                marginLeft: "1rem",
                color: "red",
              }}
            ></AiFillStar>
            الخطة الباقة
          </h2>
          <Select
            value={packageOption}
            onChange={handleCategory}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            renderValue={(selected) => {
              if (packageOption === "") {
                return <h2>الكل</h2>;
              }
              return selected;
            }}
            sx={{
              height: "3.5rem",
              width: "100%",
              border: "1px solid rgba(29, 187, 190, 1)",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {packagesOptions.map((item) => {
              return (
                <MenuItem
                  className="souq_storge_category_filter_items"
                  sx={{
                    backgroundColor: "rgba(211, 211, 211, 1)",
                    height: "3rem",
                    "&:hover": {},
                  }}
                  value={`${item}`}
                >
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default AddNewPackagePlan;
