import * as React from "react";
import IncreaseRateChartPiece from "./IncreaseRateChartPiece/IncreaseRateChartPiece";

const IncreaseRateChart = () => {
  const array = [];
  for (let index = 0; index < 10; index++) {
    array.push(new Date().getFullYear() - index);
  }
  return (
    <div className="bg-slate-50 flex-1">
      <div className="flex justify-between pr-16">
        <div>
          <h2 className="text-xl font-medium">احصائيات توضح معدل الزيادة</h2>
          <div className="flex justify-between mt-6">
            <h2 className="flex-1">
              متاجر فعلة{" "}
              <span
                className="inline-flex mr-1 h-3 w-3 rounded-full"
                style={{ border: "3px solid #B6BE34" }}
              ></span>
            </h2>
            <h2 className="flex-1">
              متاجر غير فعالة{" "}
              <span
                className="inline-flex mr-1 h-3 w-3 rounded-full"
                style={{ border: "3px solid #b6be3480" }}
              ></span>
            </h2>
          </div>
        </div>

        {/* <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              IconComponent={() => {
                return <KeyboardArrowDownIcon></KeyboardArrowDownIcon>;
              }}
            >
              {array.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box> */}
      </div>
      <IncreaseRateChartPiece></IncreaseRateChartPiece>
    </div>
  );
};

export default IncreaseRateChart;
