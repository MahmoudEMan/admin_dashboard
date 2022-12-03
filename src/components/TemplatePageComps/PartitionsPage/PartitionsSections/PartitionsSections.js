import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../../../UI/Button/Button";

const categoryList = [
  "الكترونيات",
  "ألعاب وهدايا",
  "مستلزمات طبية",
  "مواد غذائية",
];
const activate = ["مفعل", "غير مفعل"];

const PartitionsSections = () => {
  const [value, setValue] = React.useState("1");
  const [category, setCategory] = useState("");
  const [specialProduct, setSpecialProduct] = useState("");
  const [condition, setCondition] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSpecialProductChange = (event) => {
    setSpecialProduct(event.target.value);
  };
  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="pr-20 pt-5 pl-24" style={{ backgroundColor: "#FFFFFF" }}>
      <TabContext value={value}>
        <Box sx={{}}>
          <TabList
            sx={{
              "& .MuiButtonBase-root": {
                backgroundColor: "#ECECEC",
                ml: "1rem",
                borderRadius: "0.25rem",
                color: "#011723",
                transition: "0.1s",
              },
              "& .MuiButtonBase-root.Mui-selected": {
                backgroundColor: "#5EBFF2",
                color: "#011723",
              },
              "& .MuiTabs-indicator": { display: "none" },
            }}
            onChange={handleChange}
          >
            <Tab disableRipple={true} label="القسم الأول" value="1" />
            <Tab disableRipple={true} label="القسم الثانى" value="2" />
            <Tab disableRipple={true} label="القسم الثالث" value="3" />
          </TabList>
        </Box>
        <Box sx={{ height: "27.5rem", mt: "2.5rem" }}>
          <TabPanel value="1" className="pr-0">
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                اسم القسم
              </h2>
              <label>
                <input
                  className="w-full outline-none rounded p-4"
                  placeholder="المنتجات المميزة"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECECEC",
                  }}
                  type="text"
                  name="name"
                />
              </label>
            </div>
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                التصنيف
              </h2>
              <Select
                value={category}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleCategoryChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (category === "") {
                    return <h2>جميع الأصناف</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
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
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                منتجات مميزة
              </h2>
              <Select
                value={specialProduct}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleSpecialProductChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (specialProduct === "") {
                    return <h2>مفعل</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
                  },
                }}
              >
                {activate.map((item) => {
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
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                الحالة
              </h2>
              <Select
                value={condition}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleConditionChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (condition === "") {
                    return <h2>الحالة</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
                  },
                }}
              >
                {activate.map((item) => {
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
          </TabPanel>
          <TabPanel value="2">
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                اسم القسم
              </h2>
              <label>
                <input
                  className="w-full outline-none rounded p-4"
                  placeholder="المتاجر المميزة"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECECEC",
                  }}
                  type="text"
                  name="name"
                />
              </label>
            </div>
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                النشاط
              </h2>
              <Select
                value={category}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleCategoryChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (category === "") {
                    return <h2>جميع الأنشطة</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
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
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                الحالة
              </h2>
              <Select
                value={specialProduct}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleSpecialProductChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (specialProduct === "") {
                    return <h2>مفعل</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
                  },
                }}
              >
                {activate.map((item) => {
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
          </TabPanel>
          <TabPanel value="3">
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                اسم القسم
              </h2>
              <label>
                <input
                  className="w-full outline-none rounded p-4"
                  placeholder=""
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #ECECEC",
                  }}
                  type="text"
                  name="name"
                />
              </label>
            </div>
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                النشاط
              </h2>
              <Select
                value={category}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleCategoryChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (category === "") {
                    return <h2>ـــ</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
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
            <div className="mb-5">
              <h2 className="mb-2" style={{ color: "#011723" }}>
                الحالة{" "}
              </h2>
              <Select
                value={specialProduct}
                IconComponent={() => {
                  return <IoIosArrowDown size={"1rem"} />;
                }}
                onChange={handleSpecialProductChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(selected) => {
                  if (specialProduct === "") {
                    return <h2>ــ</h2>;
                  }
                  return selected;
                }}
                className={"rounded-lg"}
                sx={{
                  height: "3.5rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  pl: "1rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #A7A7A780",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #03787A",
                  },
                }}
              >
                {activate.map((item) => {
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
          </TabPanel>
        </Box>
      </TabContext>
      <div className="flex gap-4 mt-8">
        <Button
          className={"rounded"}
          style={{ backgroundColor: "#3AE374", width: "180px" }}
          fontSize={"text-xl"}
          type={"normal"}
        >
          تعديل
        </Button>
        <Button
          className={"rounded"}
          style={{
            backgroundColor: "#3AE37400",
            border: "1px solid #ADB5B9",
            width: "180px",
          }}
          textStyle={{ color: "#011723" }}
          fontSize={"text-xl"}
          type={"normal"}
        >
          إلغاء
        </Button>
      </div>
    </Box>
  );
};

export default PartitionsSections;
