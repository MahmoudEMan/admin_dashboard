import React, { useState } from "react";
import styles from "./MarketsActivity.module.css";
import PageNavigate from "../../../components/PageNavigate/PageNavigate";
import Button from "../../../UI/Button/Button";
import { IoIosAdd } from "react-icons/io";
import MarketsActivityTable from "../../../components/MarketsPagesComp/MarketsActivity/MarketsActivityTable/MarketsActivityTable";
import AddAnActivity from "../../../components/MarketsPagesComp/MarketsActivity/AddAnActivity/AddAnActivity";

const MarketsActivity = () => {
  const [showAddActivity, setShowAddActivity] = useState(false);
  return (
    <div className={`${styles.recording_status} p-4`}>
      <div className="flex items-center justify-between">
        <PageNavigate currentPage={"نشاط المتاجر"} parentPage={"المتاجر"} />
        <Button
          onClick={() => {
            setShowAddActivity(true);
          }}
          type={"normal"}
          svg={
            <IoIosAdd style={{ color: "#fff", fontSize: "1.25rem" }}></IoIosAdd>
          }
        >
          إضافة نشاط
        </Button>
      </div>
      {showAddActivity && (
        <AddAnActivity
          cancel={() => {
            setShowAddActivity(false);
          }}
        ></AddAnActivity>
      )}
      <div dir="ltr">
        <MarketsActivityTable />
      </div>

      <div className="mt-8" dir="ltr">
        {/* <UsersTable /> */}
      </div>
    </div>
  );
};

export default MarketsActivity;
