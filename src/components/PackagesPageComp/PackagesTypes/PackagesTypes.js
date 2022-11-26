import React, { useState } from "react";
import Plans from "./Plans/Plans";

const PackagesTypes = () => {
  const [yearlyPlan, setYearlyPlan] = useState(false);
  return (
    <div className="relative">
      <div className="flex justify-center gap-4 my-12">
        <h2 className="font-semibold">سنوى/شهرى </h2>
        <div
          className={`w-8 h-5 relative rounded-xl cursor-pointer shadow-inner duration-500 ${""}`}
          style={{ backgroundColor: yearlyPlan ? "#3AE374" : "#A7A7A7" }}
          onClick={() => {
            setYearlyPlan(!yearlyPlan);
          }}
        >
          <div
            className={`w-3 h-3 rounded-full absolute bg-slate-50 top-1  duration-100 ${
              yearlyPlan ? "left-4" : "left-1"
            }`}
          ></div>
        </div>
      </div>
      <Plans yearlyPlan={yearlyPlan}></Plans>
    </div>
  );
};

export default PackagesTypes;
