import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import styles from "./UserInfo.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";

import Person from "../../../assets/Icons/Image Person.png";
const BackDrop = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed back_drop bottom-0 left-0  w-full bg-slate-900  z-10 ${styles.back_drop}`}
      style={{ height: "calc(100% - 4rem)" }}
    ></div>
  );
};

//

const UserInfo = ({ cancel, user }) => {
  return (
    <>
      <BackDrop onClick={cancel}></BackDrop>
      <div
        className={`fixed bottom-0 left-0 bg-slate-50 z-20 otlobha_new_product ${styles.container}`}
        style={{ width: "1104px", height: "calc(100% - 4rem)" }}
      >
        <div className="flex h-full flex-col justify-between">
          <div
            className="p-8"
            style={{
              height: "135px",
              backgroundColor: "rgba(235, 235, 235, 1)",
            }}
          >
            <h2 className="font-semibold text-2xl  mb-3">
              اضافة منتج جديد للسوق
            </h2>
            <h2>أدخل بيانات المنتج ليتم اضافته في منتجات سوق اطلبها</h2>
          </div>
          <div
            className={`flex-1 px-20 overflow-y-scroll py-12  ${styles.content}`}
          >
            <div className="flex justify-between">
              <div className="flex gap-4 ">
                <div className="h-44 w-44">
                  <img className="h-full w-full" src={Person} alt="" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">{user.name}</h2>
                  <h2 className="text-lg mb-4 flex gap-2 items-center">
                    <HiOutlineMail
                      style={{
                        cursor: "pointer",
                        color: "rgba(29, 187, 190, 1)",
                        fontSize: "1.5rem",
                      }}
                    ></HiOutlineMail>
                    {user.email}
                  </h2>
                  <h2 className="text-lg mb-4 flex gap-2 items-center">
                    <IoIosCall
                      style={{
                        cursor: "pointer",
                        color: "rgba(29, 187, 190, 1)",
                        fontSize: "1.5rem",
                      }}
                    ></IoIosCall>
                    {966123455}
                  </h2>
                </div>
              </div>
              <div>
                <Button
                  style={{
                    width: "278px",
                    backgroundColor: "rgba(2, 70, 106, 1)",
                  }}
                  type={"normal"}
                >
                  {user.role}
                </Button>
              </div>
            </div>
          </div>
          <div
            className="p-8 flex justify-center gap-4"
            style={{
              height: "135px",
              backgroundColor: "rgba(235, 235, 235, 1)",
            }}
          >
            <Button
              style={{
                borderColor: `rgba(2, 70, 106, 1)`,
              }}
              textStyle={{ color: "rgba(2, 70, 106, 1)" }}
              className={"h-14 w-44"}
              type={"outline"}
              onClick={cancel}
            >
              اغلاق
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
