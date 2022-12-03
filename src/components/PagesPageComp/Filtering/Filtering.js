import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineSearch } from "react-icons/ai";
import { ReactComponent as FilterIcon } from "../../../assets/Icons/icon-24-filter.svg";
import { IoIosArrowDown } from "react-icons/io";

const categoryList = [
  "الكترونيات",
  "ألعاب وهدايا",
  "مستلزمات طبية",
  "مواد غذائية",
];

const Filtering = () => {
  const [category, setCategory] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex gap-4 mt-10">
      <label className={` flex-1 relative `}>
        <input
          className="h-full  outline-0 pr-10 rounded-lg "
          placeholder=" ابحث عن صفحة"
          type="text"
          name="name"
          onChange={() => {
            console.log("zed");
          }}
          style={{
            border: "1px solid #8D8AD3",
            width: "654px",
          }}
        />
        <div className={`absolute top-1/2 right-4 -translate-y-2/4`}>
          <AiOutlineSearch color="#8D8AD3" size={"18px"}></AiOutlineSearch>
        </div>
      </label>
      <Select
        value={category}
        IconComponent={() => {
          return (
            <IoIosArrowDown
              className="select_arrow duration-200"
              fill={"#8D8AD3"}
              size={"1.2rem"}
            />
          );
        }}
        onChange={handleCategoryChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(selected) => {
          if (category === "") {
            return (
              <h2
                style={{ color: "#8D8AD3" }}
                className="flex items-center gap-2"
              >
                <FilterIcon /> فرز حسب
              </h2>
            );
          }
          return (
            <h2
              style={{ color: "#8D8AD3" }}
              className="flex items-center gap-2"
            >
              <FilterIcon /> {selected}
            </h2>
          );
        }}
        className={"rounded-lg"}
        sx={{
          height: "3.5rem",
          backgroundColor: "#fff",
          width: "100%",
          pl: "1rem",
          "& path": {
            fill: "#8D8AD3",
          },
          "&.Mui-focused .select_arrow": {
            transform: "rotate(180deg)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #8D8AD3",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #8D8AD3",
          },
        }}
      >
        {categoryList.map((item) => {
          return (
            <MenuItem
              className=""
              sx={{
                backgroundColor: "#fff",
                height: "3rem",

                "&:hover": {},
                "ul:has(&)": {
                  padding: "0",
                },
              }}
              value={`${item}`}
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Filtering;
