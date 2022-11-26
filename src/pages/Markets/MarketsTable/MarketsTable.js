import React, { useState } from "react";
// import styles from "./MarketsTable.module.css";
import PageNavigate from "../../../components/PageNavigate/PageNavigate";
import Button from "../../../UI/Button/Button";
import MarketsTableSec from "../../../components/MarketsPagesComp/MarketsTable/MarketsTableSec/MarketsTableSec";
import AddNewMarket from "../../../components/MarketsPagesComp/MarketsTable/AddNewMarket/AddNewMarket";

// import { ReactComponent as Call } from "../../../assets/Icons/icon-24- call.svg";

const MarketsTable = () => {
  const [showAddNewMarket, setShowAddNewMarket] = useState(false);
  return (
    <div className={`pr-4 pt-8`} style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center justify-between">
        <PageNavigate currentPage={"عرض المتاجر"} parentPage={"المتاجر"} />

        <Button
          onClick={() => {
            setShowAddNewMarket(true);
          }}
          type={"normal"}
        >
          انشاء متجر
        </Button>
      </div>
      {showAddNewMarket && (
        <AddNewMarket
          cancel={() => {
            setShowAddNewMarket(false);
          }}
        />
      )}
      <div className="mt-8" dir="ltr">
        <MarketsTableSec />
      </div>
    </div>
  );
};

export default MarketsTable;
