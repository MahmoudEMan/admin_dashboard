import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Currency } from "../../../assets/Icons/index";
import Button from "../../../UI/Button/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductDetails from "./ProductDetails/ProductDetails";

const ItemCategory = (props) => {
  const {
    title,
    id,
    img,
    price,
    inStore,
    checkedList,
    handleCheckboxClick,
    category,
    section,
    handleProductDetails,
  } = props;
  const item = props.item;

  return (
    <li
      className="mb-6  flex justify-between"
      style={{ backgroundColor: "#fff", padding: "1rem 0.5rem" }}
    >
      <div className="flex">
        <Checkbox
          sx={{ display: "inline", padding: "0" }}
          className="ml-4"
          item={id}
          value={id}
          checked={checkedList.includes(id)}
          onChange={handleCheckboxClick}
        />
        <div className=" ">
          <img className="h-36 w-36 object-cover" src={img} alt="" />
        </div>
        <div
          className="flex flex-col justify-between mr-4"
          style={{ width: "356px" }}
        >
          <div
            className="h-11 flex items-center"
            style={{ border: "1px solid #ccc", padding: "0.25rem 0.75rem" }}
          >
            <h2>{title}</h2>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <h2>سعر الشراء</h2>
              <div
                className="h-11 flex items-center mt-2"
                style={{ border: "1px solid #ccc" }}
              >
                <div className="flex-1 flex items-center py-1 px-3">
                  <img className="ml-2 opacity-50" src={Currency} alt="" />
                  <h2>{price}</h2>
                </div>

                <div
                  className="w-12 h-full flex items-center justify-center"
                  style={{ backgroundColor: "#FAFAFA" }}
                >
                  ر.س
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2>الكمية في المخزن</h2>
              <div
                className="h-11 flex items-center mt-2"
                style={{ border: "1px solid #ccc" }}
              >
                <div className="flex-1 flex items-center justify-center py-1 px-3">
                  <h2>{inStore}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 gap-12 flex flex-col justify-between">
        <div className="flex gap-4 flex-1">
          <div className="flex font-medium bg-red-50 flex-1 justify-center items-center">
            {category}
          </div>
          <div className="flex font-medium bg-red-50 flex-1 justify-center items-center">
            {section}
          </div>
        </div>
        <div className="flex gap-4 flex-1">
          <Button
            onClick={() => {
              handleProductDetails(item);
            }}
            fontSize={"text-xs"}
            type={"outline"}
          >
            تفاصيل المنتج
          </Button>
          <Button fontWeight={"font-medium"} type={"outline"}>
            المزيد
            <MdKeyboardArrowDown className="inline mr-2" />
          </Button>
        </div>
      </div>
    </li>
  );
};

const ProductsTable = () => {
  const [categories, setCategories] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [itemsChecked, setItemsChecked] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  console.log(checkedList, itemsChecked);

  useEffect(() => {
    const initialCategories = [
      {
        id: 251,
        title: "سماعة هيدفون أصلية",
        sellPrice: 30,
        price: 40,
        inStore: 500,
        category: "الكترونيات",
        section: "سماعات",
        info: "سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة",
        img: "https://i.pcmag.com/imagery/reviews/07t6yzTnRvFvs8uD2xeYsB0-1.fit_lim.size_320x180.v1639090940.jpg",
      },
      {
        id: 40,
        title: "عطر خليجى فخم",
        sellPrice: 30,
        price: 40,
        inStore: 400,
        category: "تجميل",
        section: "عطور",
        info: "سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة",
        img: "https://cdn.shopify.com/s/files/1/0024/0196/0036/products/c78ef2ef-2808-4506-8a2e-513758223f2d_600x.jpg?v=1617071592",
      },
      {
        id: 60,
        title: "عطر ماكس",
        sellPrice: 55,
        price: 62,
        inStore: 150,
        category: "تجميل",
        section: "عطور",
        info: "سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة",
        img: "https://img.freepik.com/free-photo/front-view-fragrance-bottle-transparent-white-floor_140725-11635.jpg?w=360&t=st=1667826920~exp=1667827520~hmac=6c7de9e656a11083057ebf29cf242e9db41e0952ab03d89090ea8a0cb24975b5",
      },
      {
        id: 456,
        title: "عطر ماكس",
        sellPrice: 95,
        price: 120,
        inStore: 232,
        category: "تجميل",
        section: "عطور",
        info: "سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة سماعة هيدفدون أصلية سماعة هيدفدون أصلية سماعة",
        img: "https://img.freepik.com/free-photo/front-view-fragrance-bottle-transparent-white-floor_140725-11635.jpg?w=360&t=st=1667826920~exp=1667827520~hmac=6c7de9e656a11083057ebf29cf242e9db41e0952ab03d89090ea8a0cb24975b5",
      },
    ];

    setCategories(initialCategories);
  }, []);

  const handleCheckboxClick = (e) => {
    const { value, checked } = e.target;
    let arr = [...checkedList];
    if (checked) {
      setCheckedList([...checkedList, value * 1]); //*1 해줘야 number로 들어가서 type 호환이 됨.
      arr.push(value);
    } else {
      setCheckedList(checkedList.filter((item) => item !== value));
      arr.pop();
    }
    if (arr.length === categories.length) {
      setItemsChecked(true);
    } else {
      setItemsChecked(false);
    }
  };
  const handleProductDetails = (item) => {
    setShowProductDetails(true);
    setProductDetails(item);
  };

  const selectItem = (e) => {
    const { checked } = e.target;
    console.log(e.target.checked);
    const collection = [];

    if (checked) {
      for (const category of categories) {
        collection.push(category.id);
      }
    }

    setCheckedList(collection);
    setItemsChecked(checked);
  };

  return (
    <div dir="rtl">
      {showProductDetails && (
        <ProductDetails
          items={productDetails}
          closeDetails={() => {
            setShowProductDetails(false);
          }}
        />
      )}
      <header>
        <label>
          <Checkbox checked={itemsChecked} onClick={selectItem.bind(this)} />
          تحديد الكل
        </label>
      </header>
      <ul className="">
        {categories.map((category) => {
          console.log({ ...category });
          return (
            <ItemCategory
              {...category}
              item={category}
              key={category.id}
              handleCheckboxClick={handleCheckboxClick}
              checkedList={checkedList}
              handleProductDetails={handleProductDetails}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsTable;
