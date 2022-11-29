import React from "react";
import PageNavigate from "../../../components/PageNavigate/PageNavigate";
import MarketsApis from "../../../components/GeneralSouqComp/MarketsApis";

import Button from "../../../UI/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";

const GeneralSouq = () => {
  return (
    <div className={`p-4 pl-36`} style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center justify-between">
        <PageNavigate
          currentPage={"السوق العام"}
          nestedPage={true}
          parentPage={"السوق"}
        />
        <div className="flex gap-2">
          <Button
            className={"flex justify-center items-center"}
            type={"normal"}
            svg={<AiOutlinePlus color="#fff" />}
            color={"white"}
          >
            اضافة API
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <MarketsApis />
      </div>
      <div className="mt-8" dir="ltr">
        {/* <UsersTable /> */}
      </div>
    </div>
  );
};

export default GeneralSouq;
