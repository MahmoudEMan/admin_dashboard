import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import UsersTable from "../../components/UsersPageComp/UsersTable";
import AddNewUser from "../../components/UsersPageComp/AddNewUser/AddNewUser";
import FunctionalRoles from "../../components/UsersPageComp/FunctionalRoles/FunctionalRoles";

const Users = () => {
  const [showAddNewUser, setShowAddNewUser] = useState(false);
  const [showFunctionalRoles, setShowFunctionalRoles] = useState(false);

  return (
    <div className="relative pl-36">
      <div className="flex justify-end">
        <div className="flex gap-4">
          <Button
            type={"outline"}
            style={{ borderColor: "#B6BE34" }}
            textStyle={{ color: "#B6BE34" }}
            onClick={() => {
              setShowAddNewUser(true);
            }}
          >
            اضافة مستخدم
          </Button>
          <Button
            onClick={() => {
              setShowFunctionalRoles(true);
            }}
            type={"normal"}
          >
            {" "}
            الأدوار
          </Button>
        </div>
      </div>
      {showFunctionalRoles && (
        <FunctionalRoles
          cancel={() => {
            setShowFunctionalRoles(false);
          }}
        ></FunctionalRoles>
      )}
      {showAddNewUser && (
        <AddNewUser
          cancel={() => {
            setShowAddNewUser(false);
          }}
        ></AddNewUser>
      )}
      <UsersTable></UsersTable>
    </div>
  );
};

export default Users;
