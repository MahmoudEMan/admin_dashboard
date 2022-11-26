import React, { useState } from "react";
import { Currency } from "../../../../assets/Icons/index";
import Button from "../../../../UI/Button/Button";
import styles from "./AddUnit.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TagsInput } from "react-tag-input-component";
import ImageUploading from "react-images-uploading";
import { IoMdCloudUpload } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { GrAttachment } from "react-icons/gr";

const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed back_drop bottom-0 left-0  w-full bg-slate-900  z-10 ${styles.back_drop}`}
      style={{ height: "calc(100% - 4rem)" }}
    ></div>
  );
};
const category = ["الكترونيات", "ألعاب وهدايا", "مستلزمات طبية", "مواد غذائية"];

const formTitleClasses = "font-semibold text-lg";
const formTitleStyle = { width: "315px" };
//
const formInputClasses = "p-4 outline-0 rounded-md";
const formInputStyle = {
  width: "555px",
  border: "1px solid rgba(167, 167, 167, 0.5)",
};

const AddUnit = ({ cancel }) => {
  const [age, setAge] = useState("");
  const [tagsSelected, setTagsSelected] = useState([]);
  const [images, setImages] = useState([]);
  const [multiImages, setMultiImages] = useState([]);
  console.log(multiImages);

  const emptyMultiImages = [];
  for (let index = 0; index < 5 - multiImages.length; index++) {
    emptyMultiImages.push(index);
  }
  console.log(images);
  const maxNumber = 2;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };
  const onChangeMultiImages = (imageList, addUpdateIndex) => {
    // data for submit
    setMultiImages(imageList);
  };
  const handleCategory = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <BackDrop onClick={cancel}></BackDrop>
      <div
        className={`fixed bottom-0 left-0 bg-slate-50 z-20 otlobha_new_product ${styles.container}`}
        style={{ width: "1104px", height: "calc(100% - 4rem)" }}
      >
        <div className="flex h-full flex-col justify-between">
          <div
            className="p-8"
            style={{
              height: "135px",
              backgroundColor: "rgba(235, 235, 235, 1)",
            }}
          >
            <h2 className="font-semibold text-2xl  mb-3">
              اضافة منتج جديد للسوق
            </h2>
            <h2>أدخل بيانات المنتج ليتم اضافته في منتجات سوق اطلبها</h2>
          </div>
          <div
            className={`flex-1 overflow-y-scroll py-12 pr-8 ${styles.content}`}
          >
            <form action="">
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  عنوان الوحدة
                </h2>
                <label>
                  <input
                    className={formInputClasses}
                    style={formInputStyle}
                    placeholder="اسم المنتج"
                    type="text"
                    name="name"
                  />
                </label>
              </div>

              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  ملفات مرفقة
                </h2>
                <label
                  className="flex p-4 items-center"
                  style={{ width: "555px", border: "1px solid #ccc" }}
                  htmlFor=""
                >
                  <input
                    className={`flex-1 ${styles.file_select}`}
                    type="file"
                    placeholder="asdasdasd"
                  />
                  <div>
                    <GrAttachment></GrAttachment>
                  </div>
                </label>
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  إضافة فيديو
                </h2>
                <div>
                  <div>
                    <input type="text" />
                    <h2>zed</h2>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="p-8 flex justify-center gap-4"
            style={{
              height: "135px",
              backgroundColor: "rgba(235, 235, 235, 1)",
            }}
          >
            <Button
              className={"h-14 w-44"}
              style={{ backgroundColor: `rgba(2, 70, 106, 1)` }}
              type={"normal"}
            >
              حفظ
            </Button>
            <Button
              style={{
                borderColor: `rgba(2, 70, 106, 1)`,
              }}
              textStyle={{ color: "rgba(2, 70, 106, 1)" }}
              className={"h-14 w-44"}
              type={"outline"}
              onClick={cancel}
            >
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUnit;
