import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../../../UI/Button/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import FormLabel from "@mui/material/FormLabel";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DataIcon } from "../../../assets/Icons/index";
import { FiSend } from "react-icons/fi";

const packagesOptions = ["تجديد الاشتراك", "الغاء الاشتراك"];

const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed back_drop top-0 left-0 h-full w-full bg-slate-900 opacity-50 z-10"
    ></div>
  );
};

const TraderAlert = ({ cancel, traderPackageDetails }) => {
  const [fromValue, setFromValue] = React.useState(dayjs(null));
  const [toValue, setToValue] = React.useState(dayjs(null));
  const [packageOption, setPackageOption] = useState("");
  const [description, setDescription] = useState({
    htmlValue: "<h1></h1>\n",
    editorState: EditorState.createEmpty(),
  });

  const onEditorStateChange = (editorValue) => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );
    console.log(editorStateInHtml);

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue,
    });
  };
  const handleCategory = (event) => {
    setPackageOption(event.target.value);
  };
  console.log(traderPackageDetails);
  return (
    <>
      <BackDrop onClick={cancel} />
      <div
        className="fixed trader_alert overflow-y-scroll flex flex-col top-1/2 translate-x-2/4 -translate-y-2/4 right-2/4 z-20 rounded-md overflow-hidden"
        style={{ height: "40rem", width: "51.25rem", maxHeight: "75%" }}
      >
        <div
          className="h-16 w-full flex items-center justify-between py-4 px-4"
          style={{ backgroundColor: "#1DBBBE" }}
        >
          <h2></h2>
          <h2 className="text-slate-50 text-center">ارسال تنبيه للتاجر </h2>
          <IoMdCloseCircleOutline
            color={"#fff"}
            className={"cursor-pointer"}
            onClick={cancel}
          ></IoMdCloseCircleOutline>
        </div>
        <div
          className="flex-1 p-4 pt-10"
          style={{ backgroundColor: "rgb(246,246,246)" }}
        >
          <div className="flex gap-24">
            <div>
              <h2 className="font-medium h-8">اسم النشاط</h2>
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
                  height: "3rem",
                  width: "11rem",
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
            <div>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue="schedule"
                  name="row-radio-buttons-group"
                  sx={{
                    gap: "3rem",
                    height: "2rem",
                    "&  .MuiTypography-root": {
                      color: "#ADB5B9",
                      fontWeight: "500",
                      transition: "0.2s",
                    },
                    "& .MuiFormControlLabel-root:has(.Mui-checked) .MuiTypography-root":
                      {
                        color: "#011723",
                      },
                    "& .MuiRadio-root ": {
                      color: "#ADB5B9",
                    },
                    "& .Mui-checked ": {
                      color: "#011723 !important",
                    },
                  }}
                >
                  <FormControlLabel
                    value="schedule"
                    control={<Radio />}
                    label="جدولة التنبيه"
                    sx={{
                      margin: "0",
                      gap: "1rem",
                      alignItems: "flex-start",
                      "& .MuiButtonBase-root": { padding: "0" },
                    }}
                  />
                  <FormControlLabel
                    value="immediately"
                    control={<Radio />}
                    label="ارسال فورى"
                    sx={{
                      margin: "0",
                      gap: "1rem",
                      alignItems: "flex-start",
                      "& .MuiButtonBase-root": { padding: "0" },
                    }}
                  />
                </RadioGroup>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3} sx={{ flexDirection: "row" }}>
                    <div
                      className="w-20 flex justify-center items-center rounded-r-md"
                      style={{ backgroundColor: "#1DBBBE" }}
                    >
                      <img src={DataIcon} alt="" />
                    </div>
                    <MobileDatePicker
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
                    />
                  </Stack>
                </LocalizationProvider>
              </FormControl>
            </div>
          </div>
          <div className="mt-28">
            <h2 className="mb-4 font-medium">نص الرسالة</h2>
            {/* <textarea
              className={"p-4 outline-0 rounded-md"}
              style={{
                width: "100%",
                border: "1px solid rgba(167, 167, 167, 0.5)",
                resize: "none",
              }}
              resize={false}
              name=""
              placeholder="وصف تفاصيل المنتج"
              id=""
              cols="30"
              rows="1"
            ></textarea> */}
            <Editor
              toolbarHidden={false}
              editorState={description.editorState}
              onEditorStateChange={onEditorStateChange}
              inDropdown={true}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbar={{
                options: ["inline", "textAlign"],
                inline: {
                  options: ["bold", "italic"],
                },
              }}
            />
            <h2>
              صديقنا التاجر،
              <span style={{ color: "#FF9F1A" }}>
                باقي {traderPackageDetails.daysLeft} يوم على انتهاء اشتراكك
              </span>
            </h2>
            <h2>تواصل مع الدعم الفني للحصول على كود خصم لتجديد اشتراكك</h2>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={cancel}
              type={"normal"}
              className={"text-center mt-12"}
              style={{ backgroundColor: "#02466A" }}
              svg={<FiSend color={"#fff"} />}
            >
              ارسال
            </Button>
            <Button
              type={"outline"}
              className={"text-center  mt-12"}
              style={{ borderColor: "#02466A" }}
              textStyle={{ color: "#02466A" }}
              onClick={cancel}
            >
              الغاء
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraderAlert;
