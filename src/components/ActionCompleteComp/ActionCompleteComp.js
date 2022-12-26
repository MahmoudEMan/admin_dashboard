import React, { useContext } from "react";
import ReactDom from "react-dom";
import styles from "./ActionCompleteComp.module.css";
import Context from "../../store/context";

import { ReactComponent as ClearIcon } from "../../assets/Icons/icon-24-actioins-clear.svg";
import { ReactComponent as CheckMark } from "../../assets/Icons/icon-36-actions-checkamark.svg";
import { ReactComponent as Rejected } from "../../assets/Icons/icon-24-actions- fuals.svg";

import Box from "@mui/material/Box";

const BackDrop = ({ onClick }) => {
  return (
    <div
      className="fixed back_drop  bottom-0 left-0 w-full  opacity-50 z-50"
      style={{
        height: "calc( 100vh - 80px )",
        backgroundColor: "rgba(246, 246, 246, 0.75)",
      }}
    ></div>
  );
};
const ActionComplete = ({ cancelEarly }) => {
  const contextStore = useContext(Context);
  const { title, actionWarning, setEndActionTitle } = contextStore;

  return (
    <>
      <BackDrop />
      <div
        className="fixed shadow-lg p-6 fcc back_drop -translate-x-1/2 rounded  left-1/2   bg-slate-50  z-50"
        style={{ height: "170px", width: "556px", top: "100px" }}
      >
        <Box
          onClick={() => {
            setEndActionTitle(null);
          }}
          className={"absolute cursor-pointer top-6 left-6"}
        >
          <ClearIcon></ClearIcon>
        </Box>
        <div
          className={`absolute bottom-0 right-0 h-4 ${styles.line_anim}`}
          style={{
            backgroundColor: actionWarning ? "rgba(255, 56, 56, 1)" : "#3AE374",
          }}
        ></div>
        <div className="flex gap-8 items-center">
          <Box
            sx={{
              "& svg": {
                width: "2rem",
                height: "2rem",
              },
            }}
          >
            {actionWarning ? <Rejected></Rejected> : <CheckMark></CheckMark>}
          </Box>

          <h2 className="font-medium text-2xl" style={{ color: "#011723" }}>
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

const ActionCompleteComp = ({ title, cancelEarly }) => {
  return (
    <>
      {ReactDom.createPortal(
        <ActionComplete title={title} cancelEarly={cancelEarly} />,
        document.getElementById("action_div")
      )}
      {/* <ActionComplete></ActionComplete> */}
    </>
  );
};

export default ActionCompleteComp;
