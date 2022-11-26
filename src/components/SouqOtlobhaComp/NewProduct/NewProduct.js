import React, { useState } from "react";
import { Currency } from "../../../assets/Icons/index";
import Button from "../../../UI/Button/Button";
import styles from "./NewProduct.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TagsInput } from "react-tag-input-component";
import ImageUploading from "react-images-uploading";
import { IoMdCloudUpload } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

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
const NewProduct = ({ cancel }) => {
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
                  اسم المنتج
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
              <div className="flex mb-8 ">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  وصف المنتج
                </h2>
                <textarea
                  className={formInputClasses}
                  style={{ ...formInputStyle, resize: "none" }}
                  resize={false}
                  name=""
                  placeholder="وصف تفاصيل المنتج"
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex mb-8 ">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  سعر الشراء
                </h2>
                <label
                  className="flex rounded-md overflow-hidden"
                  style={formInputStyle}
                >
                  <div className="p-4 flex flex-1">
                    <img className="ml-2 opacity-50" src={Currency} alt="" />
                    <input
                      className="flex-1 border-none outline-none"
                      placeholder="0"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div
                    className="h-full w-16 flex justify-center items-center text-lg"
                    style={{
                      borderRight: "1px solid #ccc",
                      backgroundColor: "#fafafa",
                    }}
                  >
                    ر.س
                  </div>
                </label>
              </div>
              <div className="flex mb-8 ">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  سعر البيع (مقترح)
                </h2>
                <label
                  className="flex rounded-md overflow-hidden"
                  style={formInputStyle}
                >
                  <div className="p-4 flex flex-1">
                    <img className="ml-2 opacity-50" src={Currency} alt="" />
                    <input
                      className="flex-1 border-none outline-none"
                      placeholder="0"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div
                    className="h-full w-16 flex justify-center items-center text-lg"
                    style={{
                      borderRight: "1px solid #ccc",
                      backgroundColor: "#fafafa",
                    }}
                  >
                    ر.س
                  </div>
                </label>
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  كود المنتج (SKU)
                </h2>
                <label>
                  <input
                    className={formInputClasses}
                    style={formInputStyle}
                    placeholder="#251"
                    type="text"
                    name="name"
                  />
                </label>
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  التصنيف
                </h2>
                <FormControl sx={{ width: 555 }}>
                  <Select
                    value={age}
                    onChange={handleCategory}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    renderValue={(selected) => {
                      if (age === "") {
                        return <h2>اختر التصنيف</h2>;
                      }
                      return selected;
                    }}
                    sx={{
                      height: "3.5rem",
                      border: "1px solid rgba(167, 167, 167, 0.5)",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  >
                    {category.map((item, idx) => {
                      return (
                        <MenuItem
                          key={idx}
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
                </FormControl>
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  القسم
                </h2>
                <TagsInput
                  value={tagsSelected.slice(-2, tagsSelected.length)}
                  onChange={setTagsSelected}
                  name="القسم"
                  placeHolder="القسم"
                />
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  صور المنتج الرئيسية
                </h2>
                <ImageUploading
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["jpg", "png", "jpeg"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                      className="upload__image-wrapper relative overflow-hidden"
                      style={{
                        width: "555px",
                        height: "300px",
                        border: images[0] ? "none" : "3px dashed #ccc",
                        borderRadius: "10px",
                      }}
                      onClick={() => {
                        onImageUpload();
                      }}
                      {...dragProps}
                    >
                      <div className="image-item h-full w-full cursor-pointer">
                        {/* <button
                          style={isDragging ? { color: "red" } : null}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Click or Drop here
                        </button> */}
                        {!images[0] && (
                          <div className="flex flex-col justify-center items-center gap-6 h-full w-full">
                            <IoMdCloudUpload size={"2em"}></IoMdCloudUpload>
                            <h2 className="font-semibold">اسحب الصورة هنا</h2>
                            <h2>(سيتم قبول الصور png & jpg)</h2>
                          </div>
                        )}
                        {images[0] && (
                          <img
                            src={images[0]?.data_url}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </ImageUploading>
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  الصور المتعددة او الفيديو
                </h2>
                <ImageUploading
                  value={multiImages}
                  onChange={onChangeMultiImages}
                  multiple
                  maxNumber={5}
                  dataURLKey="data_url"
                  acceptType={["jpg"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div
                      className="upload__image-wrapper relative flex justify-between gap-6"
                      style={{
                        width: "555px",
                      }}
                    >
                      {imageList.map((image, index) => {
                        return (
                          <div
                            key={index}
                            className="relative h-24 w-24 flex justify-center items-center cursor-pointer"
                          >
                            <img
                              className="object-cover h-24 w-24"
                              src={image.data_url}
                              alt=""
                            />
                            <div
                              onClick={() => onImageRemove(index)}
                              className="absolute h-full w-full top-0 left-0 hover:bg-slate-900 hover:opacity-70 opacity-0 duration-200 flex justify-center items-center"
                            >
                              <TiDeleteOutline
                                style={{ fontSize: "1.5rem", color: "red" }}
                              ></TiDeleteOutline>
                            </div>
                          </div>
                        );
                      })}
                      {emptyMultiImages.map((image, idx) => {
                        return (
                          <div
                            key={idx}
                            className=" h-24 w-24 flex justify-center items-center cursor-pointer"
                            style={{ border: "3px dashed #ccc" }}
                            onClick={() => {
                              onImageUpload();
                            }}
                          >
                            <GrAddCircle
                              style={{ fontSize: "1.25rem" }}
                            ></GrAddCircle>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </ImageUploading>
              </div>
              <div className="flex mb-8">
                <h2 className={formTitleClasses} style={formTitleStyle}>
                  المخزون
                </h2>
                <label>
                  <input
                    className={formInputClasses}
                    style={formInputStyle}
                    placeholder="0"
                    type="text"
                    name="name"
                  />
                </label>
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

export default NewProduct;
