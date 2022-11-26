import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../../../../UI/Button/Button";

const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed back_drop top-0 left-0 h-full w-full bg-slate-900 opacity-50 z-10"
    ></div>
  );
};

const AddAnActivity = ({ cancel }) => {
  return (
    <>
      <BackDrop onClick={cancel} />
      <div
        className="fixed flex flex-col top-12 translate-x-2/4 right-2/4 z-20 rounded-md overflow-hidden"
        style={{ height: "36rem", width: "51.25rem" }}
      >
        <div
          className="h-16 w-full flex items-center justify-between px-4"
          style={{ backgroundColor: "#02466A" }}
        >
          <h2></h2>
          <h2 className="text-slate-50 text-center">احصائيات المنتج </h2>
          <IoMdCloseCircleOutline
            color={"#fff"}
            className={"cursor-pointer"}
            onClick={cancel}
          ></IoMdCloseCircleOutline>
        </div>
        <div
          className="flex-1 px-44 pt-10"
          style={{ backgroundColor: "rgb(246,246,246)" }}
        >
          <h2 className="font-medium">اسم النشاط</h2>
          <label>
            <input
              className="w-full outline-none shadow-lg rounded-md p-4 my-4"
              placeholder="ادخل اسم النشاط"
              type="text"
              name="name"
            />
          </label>
          <div className="flex gap-4">
            <Button
              onClick={cancel}
              type={"normal"}
              className={"text-center w-full mt-12"}
              style={{ backgroundColor: "#02466A" }}
            >
              اغلاق
            </Button>
            <Button
              type={"outline"}
              className={"text-center w-full mt-12"}
              style={{ borderColor: "#02466A" }}
              textStyle={{ color: "#02466A" }}
            >
              حفظ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAnActivity;
