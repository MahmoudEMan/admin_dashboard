import React, { useState } from "react";
import { Filter, Product } from "../../../assets/Icons/index";
import PageNavigate from "../../../components/PageNavigate/PageNavigate";
import Button from "../../../UI/Button/Button";
import ProductsTable from "../../../components/SouqOtlobhaComp/ProductsTable/ProductsTable";
import FilteringOptions from "../../../components/SouqOtlobhaComp/FilteringOptions/FilteringOptions";
import NewProduct from "../../../components/SouqOtlobhaComp/NewProduct/NewProduct";

const SouqOtlobha = () => {
  const [showFilteringOptions, setShowFilteringOptions] = useState(false);
  const [showNewProductInfo, setShowNewProductInfo] = useState(false);
  return (
    <div className={`p-4 pl-36`} style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center justify-between">
        <PageNavigate
          currentPage={"سوق اطلبها"}
          nestedPage={true}
          parentPage={"السوق"}
        />
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setShowFilteringOptions(!showFilteringOptions);
            }}
            type={"outline"}
            img={Filter}
          >
            فرز
          </Button>
          <Button
            onClick={() => {
              setShowNewProductInfo(true);
            }}
            type={"normal"}
            img={Product}
            color={"bTow"}
          >
            إضافة منتج جديد
          </Button>
        </div>
      </div>
      {showNewProductInfo && (
        <NewProduct
          cancel={() => {
            setShowNewProductInfo(false);
          }}
        />
      )}
      <div>
        <FilteringOptions
          showFilteringOptions={showFilteringOptions}
          hideFilteringOptions={() => {
            setShowFilteringOptions(false);
          }}
        ></FilteringOptions>
      </div>
      <div className="mt-4" dir="ltr">
        <ProductsTable />
      </div>
    </div>
  );
};

export default SouqOtlobha;
