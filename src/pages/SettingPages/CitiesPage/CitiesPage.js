import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import CitiesComp from "../../../components/SettingComp/CitiesPageComp/CitiesComp/CitiesComp";
import AddCity from "../../../components/SettingComp/CitiesPageComp/AddCity/AddCity";
import FunctionalRoles from "../../../components/UsersPageComp/FunctionalRoles/FunctionalRoles";
import { AiOutlinePlus } from "react-icons/ai";

const CitiesPage = () => {
  const [showAddNewCountry, setShowAddNewCountry] = useState(false);
  const [editData, setEditData] = useState(null);
  return (
    <div
      className={`px-4 pt-8 mt-5 pl-36 pr-24`}
      style={{ backgroundColor: "#fafafa" }}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">جدول المدن</h2>
        <Button
          svg={<AiOutlinePlus color="#fff" />}
          type={"normal"}
          style={{ backgroundColor: "#1DBBBE" }}
          fontSize={"text-2xl font-light"}
          onClick={() => {
            setShowAddNewCountry(true);
            setEditData(null);
          }}
        >
          اضافة مدينة
        </Button>
      </div>
      {showAddNewCountry && (
        <AddCity
          cancel={() => {
            setShowAddNewCountry(false);
          }}
          data={editData}
        ></AddCity>
      )}

      <CitiesComp
        setData={(data) => {
          setEditData(data);
          setShowAddNewCountry(true);
        }}
      ></CitiesComp>
    </div>
  );
};

export default CitiesPage;
