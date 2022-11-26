import React from "react";
import PageNavigate from "../../components/PageNavigate/PageNavigate";
import ServicesTable from "../../components/ServicesPageComp/ServicesTable/ServicesTable";

import Button from "../../UI/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import NewService from "../../components/ServicesPageComp/NewService/NewService";

const ServicesPage = () => {
  const [showNewProductInfo, setShowNewProductInfo] = useState(false);
  return (
    <div className={`p-4`} style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center justify-between">
        <PageNavigate currentPage={"الخدمات"} />
        <div className="flex gap-2">
          <Button
            className={"flex justify-center items-center"}
            type={"normal"}
            svg={<AiOutlinePlus color="#fff" />}
            style={{ backgroundColor: "#02466A" }}
            color={"white"}
            onClick={() => {
              setShowNewProductInfo(true);
            }}
          >
            إضافة خدمة
          </Button>
        </div>
      </div>
      {showNewProductInfo && (
        <NewService
          cancel={() => {
            setShowNewProductInfo(false);
          }}
        />
      )}
      <div dir={"ltr"} className="mt-20">
        <ServicesTable></ServicesTable>
      </div>
    </div>
  );
};

export default ServicesPage;
