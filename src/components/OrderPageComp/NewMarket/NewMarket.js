import React, { useState, useEffect, useContext } from "react";
import Context from "../../../store/context";

import { Currency } from "../../../assets/Icons/index";
import Button from "../../../UI/Button/Button";
import styles from "./NewMarket.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TagsInput } from "react-tag-input-component";
import ImageUploading from "react-images-uploading";
import { IoMdCloudUpload } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";
import { AiFillStar } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { ReactComponent as PdfIcon } from "../../../assets/Icons/pfd.svg";
// import { ReactComponent as Category } from "../../../assets/Icons/stc";
import { ReactComponent as CallIcon } from "../../../assets/Icons/icon-24- call.svg";
import { ReactComponent as SupportIcon } from "../../../assets/Icons/icon-support.svg";
import { ReactComponent as StatusIcon } from "../../../assets/Icons/status.svg";
import { ReactComponent as TypeSupportIcon } from "../../../assets/Icons/type support.svg";
// import marketLogo from "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png";
import { IoCalendar } from "react-icons/io5";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

const BackDrop = ({ onClick, complaintDetails }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed back_drop bottom-0 left-0  w-full bg-slate-900 opacity-50  z-10 ${styles.back_drop}`}
      style={{ height: "calc(100% - 4rem)" }}
    ></div>
  );
};
const categoryList = [
  "الكترونيات",
  "ألعاب وهدايا",
  "مستلزمات طبية",
  "مواد غذائية",
];
const activate = ["مفعل", "غير مفعل"];

const stateChanges = [
  { value: "منتهية", color: "#3AE374" },
  {
    value: "غير منتهية",
    color: "#D3D3D3",
  },
  {
    value: "قيد المعالجة",
    color: "#FF9F1A",
  },
];

const AddCountry = ({ cancel, complaintDetails }) => {
  const contextStore = useContext(Context);
  const { setEndActionTitle, setActionWarning } = contextStore;
  const [countryNumber, setCountryNumber] = useState("");

  const [cityNumber, setCityNumber] = useState("");
  const [arabicCountryName, setArabicCountryName] = useState("");
  const [englishCountryName, setEnglishCountryName] = useState("");
  const [value, setValue] = React.useState("1");
  const [category, setCategory] = useState("");
  const [specialProduct, setSpecialProduct] = useState("");
  const [condition, setCondition] = useState("");

  const {
    state,
    orderNumber,
    orderType,
    variety,
    marketLinkAddress,
    packageType,
    email,
    marketType,
    marketName,
    phoneNumber,
    deliveryAddress,
    neighborHood,
    mailAddress,
    deliveryCompany,
  } = complaintDetails;

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

  const handleCountryName = (event) => {
    setCountryNumber(event.target.value);
  };

  const findStateChanges = stateChanges.find(
    (i) => complaintDetails.state == i.value
  );

  // useEffect(() => {
  //   if (data) {
  //     setCountryNumber(data.CountryNumber);
  //     setCityNumber(data.cityNumber);
  //     setArabicCountryName(data.name);
  //     setEnglishCountryName(data.nameEn);
  //   }
  // }, [data]);

  return (
    <>
      <BackDrop onClick={cancel}></BackDrop>
      <div
        className={`fixed bottom-0 left-0 bg-slate-50 z-20  ${styles.container}`}
        style={{
          width: "1104px",
          height: "calc(100% - 5rem)",
          backgroundColor: "rgba(235, 235, 235, 1)",
        }}
      >
        <div className="flex h-full flex-col justify-between ">
          <div
            className="p-4 flex justify-between items-center pl-36 pr-16"
            style={{
              height: "135px",
              backgroundColor: "rgba(235, 235, 235, 1)",
            }}
          >
            <div>
              <h2 className="font-semibold text-2xl  mb-3">تفاصيل الطلب</h2>
              <div className="flex">
                <div className={`flex items-center gap-2 `}>
                  <div
                    onClick={cancel}
                    className={`flex items-center gap-2 cursor-pointer ${styles.arrow_con}`}
                  >
                    <GoArrowRight
                      style={{ color: "#02466A", fontSize: "1.2rem" }}
                    />
                  </div>

                  <h2 className="font-semibold ml-4"> الطلبات </h2>
                </div>

                <h2 className="font-semibold ml-4"> / جدول الطلبات </h2>

                <h3 className="font-medium" style={{ color: "#67747B" }}>
                  / تفاصيل طلب متجر جديد
                </h3>
              </div>
            </div>
            <div>
              <h2 className={"font-medium"} style={{ color: "#4D4F5C" }}>
                رقم الشكوى
              </h2>
              <div
                className="mt-1 flex items-center shadow-lg rounded-lg justify-center  h-16 w-44"
                style={{ backgroundColor: "#B6BE34" }}
              >
                <h2 className="text-slate-50 text-2xl font-medium">
                  {complaintDetails.orderNumber}{" "}
                </h2>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 overflow-y-scroll pl-36  ${styles.content}`}
            style={{ backgroundColor: "rgb(235, 235, 235)" }}
          >
            <Box
              className=" pt-10 pr-16"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <TabContext value={value}>
                <Box className="pl-24" sx={{}}>
                  <TabList
                    sx={{
                      "& .MuiButtonBase-root": {
                        backgroundColor: "#EAE8FF",
                        ml: "1rem",
                        borderRadius: "0.25rem",
                        color: "#8D8AD3",
                        transition: "0.1s",
                        fontSize: "22px",
                        fontWeight: "400",
                      },
                      "& .MuiButtonBase-root.Mui-selected": {
                        backgroundColor: "#A4A1FB",
                        color: "#FFFFFF",
                        boxShadow: "-1px 0px 13px 3px rgb(0 0 0 / 20%) inset",
                      },
                      "& .MuiTabs-indicator": { display: "none" },
                    }}
                    onChange={handleChange}
                    variant="fullWidth"
                  >
                    <Tab
                      disableRipple={true}
                      label="بيانات المتجر الأساسية"
                      value="1"
                    />
                    <Tab
                      disableRipple={true}
                      label="بيانات الشحن والدفع"
                      value="2"
                    />
                  </TabList>
                </Box>
                <Box sx={{ height: "600px", mt: "1.25rem" }}>
                  <TabPanel value="1" className="pr-0 ">
                    <div className="flex gap-28">
                      <div className="flex-1">
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            اسم المتجر
                          </h2>
                          <label>
                            <input
                              value={marketName}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            رابط المتجر
                          </h2>
                          <label>
                            <input
                              value={marketLinkAddress}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            نوع الباقة
                          </h2>
                          <label>
                            <input
                              value={packageType}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            البريد الالكترونى
                          </h2>
                          <label>
                            <input
                              value={email}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            رقم الجوال
                          </h2>
                          <label>
                            <input
                              value={phoneNumber}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            نوع الكيان
                          </h2>
                          <label>
                            <input
                              value={marketType}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            فئة المتجر
                          </h2>
                          <label>
                            <input
                              value={variety}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            رخصة تجارية
                          </h2>
                          <div
                            className="flex w-full  items-center gap-2 rounded-lg p-4 "
                            style={{
                              backgroundColor: "#EFF9FF",
                              border: "1px solid #A7A7A7",
                            }}
                          >
                            <h2
                              value={"ترخيص "}
                              className="outline-none text-xl  font-medium"
                              style={{
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            >
                              ترخيص الشركة
                            </h2>
                            <PdfIcon></PdfIcon>
                          </div>
                          <a style={{ color: "#0077FF" }} href="" download>
                            تنزيل الملف
                          </a>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            بطاقة الهوية
                          </h2>
                          <div
                            className="flex w-full  items-center gap-2 rounded-lg p-4 "
                            style={{
                              backgroundColor: "#EFF9FF",
                              border: "1px solid #A7A7A7",
                            }}
                          >
                            <h2
                              value={"ترخيص "}
                              className="outline-none text-xl  font-medium"
                              style={{
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            >
                              الهوية
                            </h2>
                            <PdfIcon></PdfIcon>
                          </div>
                          <a style={{ color: "#0077FF" }} href="" download>
                            تنزيل الملف
                          </a>
                        </div>
                        <div className="mb-6 flex gap-5">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            شعار المتجر
                          </h2>
                          <div className="w-28">
                            <img
                              className="h-14 w-14 object-cover  rounded-full"
                              src={
                                "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value="2" className="pr-0 pt-0">
                    <div className="flex gap-28 mt-16">
                      <div className="flex-1">
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            عنوان الشحن
                          </h2>
                          <label>
                            <input
                              value={deliveryAddress}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            الحي
                          </h2>
                          <label>
                            <input
                              value={neighborHood}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            الرمز البريدي
                          </h2>
                          <label>
                            <input
                              value={mailAddress}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div className="mb-6">
                          <h2
                            className="mb-2 font-medium"
                            style={{ color: "#011723" }}
                          >
                            شركة الشحن المعتمدة
                          </h2>
                          <label>
                            <input
                              value={deliveryCompany}
                              className="w-full outline-none text-xl rounded-lg p-4 font-medium"
                              placeholder="المنتجات المميزة"
                              style={{
                                backgroundColor: "#EFF9FF",
                                border: "1px solid #A7A7A7",
                                color: "#011723",
                              }}
                              disabled
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2>خيارات الدفع</h2>
                        <div className="mt-8 ">
                          <div className="flex mb-6 item-center gap-4">
                            <div
                              className={"h-5 w-5 rounded-full"}
                              style={{ backgroundColor: "#0BF1D1" }}
                            ></div>
                          </div>
                          <div className="flex mb-6 item-center gap-4">
                            <div
                              className={"h-5 w-5 rounded-full"}
                              style={{ backgroundColor: "#0BF1D1" }}
                            ></div>
                          </div>
                          <div className="flex mb-6 item-center gap-4">
                            <div
                              className={"h-5 w-5 rounded-full"}
                              style={{ backgroundColor: "#0BF1D1" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
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
              style={{ backgroundColor: `#3AE374` }}
              type={"normal"}
              onClick={() => {
                setEndActionTitle("تم قبول طلب إضافة متجر جديد بنجاح");
                cancel();
              }}
            >
              قبول المتجر
            </Button>
            <Button
              className={"h-14 w-44"}
              style={{ borderColor: `#FF3838` }}
              textStyle={{ color: "#FF3838" }}
              type={"outline"}
              onClick={() => {
                setEndActionTitle("تم رفض طلب إضافة متجر جديد");
                setActionWarning(true);
                cancel();
              }}
            >
              رفض المتجر
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCountry;
