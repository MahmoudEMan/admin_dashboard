import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as Search } from "../../assets/Icons/icon_24_search.svg";
import TableComp from "./TableComp/TableComp";
import UserInfo from "./UserInfo/UserInfo";

const category = ["أدمن", "محرر", "إدارة", "دعم فنى"];

const UsersTable = () => {
  const [age, setAge] = React.useState("");
  const [user, setUser] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleCategory = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-medium mb-8">جدول المستخدمين</h2>
      <h2 className="mb-2">فرز حسب</h2>
      <div className="mb-4">
        <FormControl
          className="flex flex-row gap-4"
          sx={{ minWidth: 120, flex: "1" }}
        >
          <Select
            value={age}
            onChange={handleCategory}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            renderValue={(selected) => {
              if (age === "") {
                return <h2>الكل</h2>;
              }
              return selected;
            }}
            className={"flex-1"}
            sx={{
              height: "3.5rem",
              border: "1px solid rgba(29, 187, 190, 1)",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            {category.map((item) => {
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
          <label className={`flex-1 h-14 relative `}>
            <input
              className="w-full h-full outline-0 pr-16 rounded-lg "
              placeholder=" للبحث قم بإدخال رقم أو اسم المنتج"
              type="text"
              name="name"
              onChange={() => {
                console.log("zed");
              }}
              style={{ border: "2px solid rgba(29, 187, 190, 1)" }}
            />
            <div className={`absolute top-1/2 right-4 -translate-y-2/4`}>
              <Search></Search>
            </div>
          </label>
        </FormControl>
      </div>
      {showUserInfo && (
        <UserInfo
          user={user}
          cancel={() => {
            setShowUserInfo(false);
          }}
        ></UserInfo>
      )}
      <div dir={"ltr"}>
        <TableComp
          setUser={(userDetected) => {
            setUser(userDetected);
            setShowUserInfo(true);
          }}
        ></TableComp>
      </div>
    </div>
  );
};

export default UsersTable;