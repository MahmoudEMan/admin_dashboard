import * as React from "react";
import TreeView from "@mui/lab/TreeView/TreeView";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TreeItem from "@mui/lab/TreeItem/TreeItem";
import treeItemClasses from "@mui/lab/TreeItem/treeItemClasses";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

import {
  Category,
  Dashboard,
  Graduation,
  Market,
  Marketing,
  Order,
  Pages,
  Price,
  SalesMan,
  Service,
  Setting,
  Store,
  Support,
  Template,
  User,
  Wallet,
} from "../../assets/Icons";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  //   ["& .MuiTreeItem-content"]: { display: "none" },
  [`& .${treeItemClasses.content}`]: {
    flexDirection: "row-reverse",
    // color: theme.palette.text.secondary,
    // borderTopRightRadius: theme.spacing(2),
    // borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    padding: "0.5rem 0 0.5rem 0.5rem",
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const { bgColor, color, labelIcon: LabelIcon, labelText, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <img
            src={LabelIcon}
            color="inherit"
            style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
            alt=""
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              flexGrow: 1,
              fontSize: "1rem",
              fontFamily: "Tajawal, sans-serif !important",
            }}
          >
            {labelText}
          </Typography>
        </Box>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const SideBar = () => {
  return (
    <Box className={styles.sidebar}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<IoIosArrowDown />}
        defaultExpandIcon={<IoIosArrowBack />}
        onNodeSelect={(e) => {
          const parent = e.target.closest(".MuiTreeView-root");
          const childId = e.target.closest(".MuiTreeItem-root").id;
          const childrenExpanded = parent.querySelectorAll(".Mui-expanded");
          // childrenExpanded.forEach((item) => {
          //   item.classList.remove("Mui-expanded");
          // });
          console.log(parent, childId, childrenExpanded);
        }}
        children
        sx={{
          flexGrow: 1,
          maxWidth: 400,
          overflowY: "auto",
          overflowX: "hidden",
          "& > .MuiTreeItem-root .MuiTreeItem-root": {
            backgroundColor: "rgba(29, 187, 190, 0.4)",
            margin: "0.25rem 0",
            borderRadius: "5px",
            padding: "0.25rem 1rem",
          },
          "& > .MuiTreeItem-root .Mui-expanded.MuiTreeItem-content": {
            backgroundColor: "#02466A !important",
            color: "#fff !important",
            transition: "0.1s",
            borderRight: "6px solid #1DBBBE",
            borderRadius: "10px",
            paddingRight: "2px",
          },
          "& .MuiTreeItem-root .MuiTreeItem-label": {
            fontFamily: "Tajawal, sans-serif !important",
          },
          "& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper li:has(> .MuiTreeItem-content.Mui-selected) ":
            {
              backgroundColor: "#1DBBBE",
            },
          "& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content.Mui-selected,& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content.Mui-focused ":
            {
              backgroundColor: "transparent !important",
              color: "#fff !important",
            },
          "& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content:hover ":
            {
              backgroundColor: "transparent",
            },
          "& > a .MuiTreeItem-root .MuiTreeItem-content.Mui-selected": {
            backgroundColor: "#1DBBBE !important",
            color: "#fff !important",
            transition: "0.1s",
            borderRight: "6px solid #1DBBBE",
            borderRadius: "10px",
            paddingRight: "2px",
          },
        }}
      >
        <Link to={"/"}>
          <StyledTreeItem
            nodeId="1"
            labelText="الرئيسية"
            labelIcon={Dashboard}
          />
        </Link>
        <StyledTreeItem
          expanded={{ backgroundColor: "red" }}
          sx={{}}
          nodeId="2"
          labelText="السوق"
          labelIcon={Market}
        >
          <Link to={"/سوق_اطلبها"}>
            <StyledTreeItem
              nodeId="33"
              labelText="سوق أطلبها"
              labelIcon={<FaCircle />}
            ></StyledTreeItem>
          </Link>
          <Link to={"/السوق_العام"}>
            <StyledTreeItem
              nodeId="34"
              labelText="السوق العام"
              labelIcon={<FaCircle />}
            ></StyledTreeItem>
          </Link>
          <Link to={"/المخزون"}>
            <StyledTreeItem
              nodeId="35"
              labelText="المخزون"
              labelIcon={<FaCircle />}
            ></StyledTreeItem>
          </Link>
        </StyledTreeItem>

        <Link to={"/المتاجر"}>
          <StyledTreeItem
            sx={{
              "& .MuiCollapse-root": {
                transitionDuration: "3s ",
              },
            }}
            nodeId="4"
            labelText="المتاجر"
            labelIcon={Store}
          >
            <Link to={"/نشاط_المتاجر"}>
              <StyledTreeItem nodeId="5" label="نشاط المتاجر" />
            </Link>
            <Link to={"/عرض_المتاجر"}>
              <StyledTreeItem nodeId="6" label="المتاجر" />
            </Link>
            <Link to={"/حالة_التسجيل"}>
              <StyledTreeItem nodeId="7" label="حالة التسجيل" />
            </Link>
          </StyledTreeItem>
        </Link>

        <Link to={"/الباقات"}>
          <StyledTreeItem
            sx={{
              "& .MuiCollapse-root": {
                transitionDuration: "3s ",
              },
            }}
            nodeId="8"
            labelText="الباقات"
            labelIcon={Price}
          >
            <Link to={"/الاشتراكات_الحالية"}>
              <StyledTreeItem nodeId="9" label="الاشتراكات الحالية" />
            </Link>
          </StyledTreeItem>
        </Link>

        <Link to={"/الخدمات"}>
          <StyledTreeItem
            nodeId="10"
            labelText="الخدمات"
            labelIcon={Service}
          ></StyledTreeItem>
        </Link>
        <Link to={"/أكاديمية_اطلبها"}>
          <StyledTreeItem
            nodeId="11"
            labelText="أكاديمية أطلبها"
            labelIcon={Graduation}
          ></StyledTreeItem>
        </Link>
        <StyledTreeItem
          sx={{
            "& .MuiCollapse-root": {
              transitionDuration: "3s ",
            },
          }}
          nodeId="12"
          labelText="القالب"
          labelIcon={Template}
        >
          <Link to={"/"}>
            <StyledTreeItem nodeId="13" label="نشاط المتاجر" />
          </Link>
          <Link to={"/"}>
            <StyledTreeItem nodeId="14" label="المتاجر" />
          </Link>
          <Link to={"/حالة_التسجيل"}>
            <StyledTreeItem nodeId="15" label="حالة التسجيل" />
          </Link>
        </StyledTreeItem>
        <Link to={"/"}>
          <StyledTreeItem
            nodeId="16"
            labelText="الصفحات"
            labelIcon={Pages}
          ></StyledTreeItem>
        </Link>
        <Link to={"/جدول_المستخدمين"}>
          <StyledTreeItem
            nodeId="17"
            labelText="المستخدمين"
            labelIcon={User}
          ></StyledTreeItem>
        </Link>
        <StyledTreeItem
          sx={{
            "& .MuiCollapse-root": {
              transitionDuration: "3s ",
            },
          }}
          nodeId="18"
          labelText="التسويق"
          labelIcon={Marketing}
        >
          <Link to={"/"}>
            <StyledTreeItem nodeId="19" label="نشاط المتاجر" />
          </Link>
        </StyledTreeItem>
        <StyledTreeItem
          sx={{
            "& .MuiCollapse-root": {
              transitionDuration: "3s ",
            },
          }}
          nodeId="20"
          labelText="المندوبين"
          labelIcon={SalesMan}
        >
          <Link to={"/"}>
            <StyledTreeItem nodeId="21" label="عرض المناديب" />
          </Link>
          <Link to={"/"}>
            <StyledTreeItem nodeId="22" label="حالة التسجيل" />
          </Link>
        </StyledTreeItem>
        <StyledTreeItem
          sx={{
            "& .MuiCollapse-root": {
              transitionDuration: "3s ",
            },
          }}
          nodeId="23"
          labelText="التصنيفات"
          labelIcon={Category}
        >
          <Link to={"/"}>
            <StyledTreeItem nodeId="24" label="عرض المناديب" />
          </Link>
          <Link to={"/"}>
            <StyledTreeItem nodeId="25" label="حالة التسجيل" />
          </Link>
        </StyledTreeItem>
        <Link to={"/"}>
          <StyledTreeItem
            nodeId="26"
            labelText="الطلبات"
            labelIcon={Order}
          ></StyledTreeItem>
        </Link>
        <Link to={"/"}>
          <StyledTreeItem
            nodeId="27"
            labelText="المحفظة"
            labelIcon={Wallet}
          ></StyledTreeItem>
        </Link>
        <Link to={"/"}>
          <StyledTreeItem
            nodeId="28"
            labelText="الدعم الفنى"
            labelIcon={Support}
          ></StyledTreeItem>
        </Link>
        <StyledTreeItem
          sx={{
            "& .MuiCollapse-root": {
              transitionDuration: "3s ",
            },
          }}
          nodeId="29"
          labelText="الإعدادات"
          labelIcon={Setting}
        >
          <Link to={"/"}>
            <StyledTreeItem nodeId="30" label="الواجهة" />
          </Link>
          <Link to={"/"}>
            <StyledTreeItem nodeId="31" label="المستخدمين" />
          </Link>
        </StyledTreeItem>
      </TreeView>
    </Box>
  );
};

export default SideBar;
