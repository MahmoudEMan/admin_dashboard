import React, { useState } from "react";
import PageNavigate from "../../../components/PageNavigate/PageNavigate";
import MarketsApis from "../../../components/GeneralSouqComp/MarketsApis";
import AddApi from "../../../components/GeneralSouqComp/AddApi/AddApi";

import Button from "../../../UI/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";

const GeneralSouq = () => {
  const [showAddApi, setShowAddApi] = useState(false);
  const [editDetails, setEditDetails] = useState(null);

  const handleEditing = (url, logo, marketTitle) => {
    setEditDetails({ url, logo, marketTitle });
    setShowAddApi(true);
  };
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
            onClick={() => {
              setShowAddApi(true);
            }}
          >
            اضافة API
          </Button>
        </div>
      </div>
      {showAddApi && (
        <AddApi
          cancel={() => {
            setShowAddApi(false);
            setEditDetails(null);
          }}
          editDetails={editDetails}
        ></AddApi>
      )}
      <div className="mt-8">
        <MarketsApis
          edit={(url, logo, marketTitle) => {
            handleEditing(url, logo, marketTitle);
          }}
        />
      </div>
    </div>
  );
};

export default GeneralSouq;
