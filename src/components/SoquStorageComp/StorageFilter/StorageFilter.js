import React from "react";
import Button from "../../../UI/Button/Button";
// import styles from "./StorageFilter.module.css";
import { ReactComponent as Search } from "../../../assets/Icons/icon_24_search.svg";
import { ReactComponent as Filter } from "../../../assets/Icons/icon-24-filter.svg";

const StorageFilter = () => {
  return (
    <div className="my-8   ">
      <div className="flex gap-4 bg-slate-50 px-8 pb-6 pt-12  rounded-lg">
        <Button className={"flex gap-4"} type="outline" svg={<Filter></Filter>}>
          فلتر
        </Button>
        <label className={`h-full w-full flex-1 relative `}>
          <input
            className="w-full h-12 outline-0 pr-16 rounded-lg "
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
        <Button className={""} type="normal">
          رفع ملف
        </Button>
        <Button
          style={{ backgroundColor: "rgb(180,237,238)" }}
          className={""}
          type="normal"
          fontColor={"text-slate-900"}
        >
          تصدير ملف
        </Button>
      </div>
    </div>
  );
};

export default StorageFilter;
