import React from "react";
import { Store, CountDown } from "../../../../assets/Icons/index";

const INITIAL_DETAILS = [
  {
    icon: Store,
    iconColor:
      "invert(40%) sepia(12%) saturate(2446%) hue-rotate(85deg) brightness(98%) contrast(90%)",
    title: " تاجر جديد ",
    num: " 23",
  },
  {
    icon: CountDown,
    iconColor: "",
    title: " طلب في الانتظار ",
    num: " 490",
  },
  {
    icon: CountDown,
    iconColor:
      "invert(40%) sepia(12%) saturate(2446%) hue-rotate(85deg) brightness(98%) contrast(0%)",
    title: " طلب مكتمل ",
    num: " 120",
  },
  {
    icon: Store,
    iconColor:
      "invert(40%) sepia(12%) saturate(2446%) hue-rotate(85deg) brightness(98%) contrast(90%)",
    title: " تاجر جديد ",
    num: " 23",
  },
  {
    icon: CountDown,
    iconColor: "",
    title: " طلب في الانتظار ",
    num: " 490",
  },
];

const QuickDetails = () => {
  return (
    <div className="flex-1 shadow-lg rounded-lg overflow-hidden">
      <div
        className="h-12 flex items-center pr-4"
        style={{ backgroundColor: "rgb(210,241,242)" }}
      >
        <h2 className="font-semibold">تفاصيل سريعة</h2>
      </div>
      <div>
        {INITIAL_DETAILS.map((item) => {
          return (
            <div className="flex justify-between h-24 items-center p-4">
              <div className="flex">
                <div className="w-28 pr-6">
                  <img
                    className="h-6 w-6 object-cover  rounded-full"
                    style={{ filter: `${item.iconColor}` }}
                    src={item.icon}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h2 className="font-medium">
                    {item.num} {item.title}
                  </h2>
                </div>
              </div>
              <div className="my-auto">
                <h2>Last 24 Hours</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickDetails;
