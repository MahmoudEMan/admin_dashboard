import React, { useState } from "react";
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
import { GiPlainCircle } from "react-icons/gi";

import { ReactComponent as Dashboard } from "../../assets/Icons/icon-24-dashboard.svg";
import { ReactComponent as Market } from "../../assets/Icons/icon-24-market.svg";
import { ReactComponent as Store } from "../../assets/Icons/icon-24-store.svg";
import { ReactComponent as Category } from "../../assets/Icons/icon-24-Category.svg";
import { ReactComponent as Graduation } from "../../assets/Icons/icon-24-graduatioin.svg";
import { ReactComponent as Template } from "../../assets/Icons/icon-24-template.svg";
import { ReactComponent as Pages } from "../../assets/Icons/icon-24-pages.svg";
import { ReactComponent as User } from "../../assets/Icons/icon-24-user.svg";
import { ReactComponent as Marketing } from "../../assets/Icons/icon-24-marketing.svg";
import { ReactComponent as SalesMan } from "../../assets/Icons/icon-24-sales man.svg";
import { ReactComponent as Order } from "../../assets/Icons/icon-24-order.svg";
import { ReactComponent as Wallet } from "../../assets/Icons/icon-24-wallet.svg";
import { ReactComponent as Support } from "../../assets/Icons/icon-24-support.svg";
import { ReactComponent as Price } from "../../assets/Icons/icon-24-price.svg";
import { ReactComponent as Setting } from "../../assets/Icons/icon-24-setting.svg";
import { ReactComponent as DolarIcon } from "../../assets/Icons/dolar icon.svg";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    flexDirection: "row-reverse",
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
  const {
    bgColor,
    color,
    svg,
    labelIcon: LabelIcon,
    labelText,
    ...other
  } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
          }}
        >
          {LabelIcon && (
            <img
              src={LabelIcon}
              color="inherit"
              style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              alt=""
            />
          )}
          {svg}
          <Typography
            variant="body2"
            className="whitespace-nowrap"
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
        margin: "0.25rem 0",
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
  const [expanded, setExpanded] = useState(["1"]);
  const handleExpanding = (id) => () => {
    setExpanded([id]);
  };
  return (
    <Box
      sx={{
        "&  path": {
          fill: "#02466A",
        },
        "&  .Mui-expanded .MuiTreeItem-iconContainer path": {
          fill: "#fff",
        },
        "&  .Mui-expanded .MuiTreeItem-label path, .single_link .Mui-selected .MuiTreeItem-label path":
          {
            fill: "#1DBBBE",
          },
        "&  .Mui-expanded .MuiTreeItem-label g, .single_link .Mui-selected .MuiTreeItem-label g":
          {
            fill: "#1DBBBE",
          },
      }}
      className={styles.sidebar}
    >
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<IoIosArrowDown />}
        defaultExpandIcon={<IoIosArrowBack />}
        expanded={expanded}
        sx={{
          flexGrow: 1,
          maxWidth: 400,
          overflowY: "auto",
          overflowX: "hidden",
          "& .MuiTreeItem-group .MuiTreeItem-content": {
            width: "fit-content",
          },
          "& .MuiTypography-root": {
            color: "#02466A",
          },
          "& .Mui-expanded .MuiTypography-root , & .single_link .Mui-selected .MuiTypography-root":
            {
              color: "#fff",
            },
          "& > .MuiTreeItem-root .MuiTreeItem-root ": {
            backgroundColor: "#C0E9FF",
            margin: "0.25rem 0",
            borderRadius: "5px",
            padding: "0.25rem 1rem",
          },
          "& > a .MuiTreeItem-root:has(.Mui-expanded) .MuiCollapse-root .MuiTreeItem-root ":
            {
              backgroundColor: "#C0E9FF",
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
          "& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper li:has(> .MuiTreeItem-content.Mui-selected) , & > a .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper li:has(> .MuiTreeItem-content.Mui-selected)":
            {
              backgroundColor: "#1DBBBE",
            },
          "& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content.Mui-selected,& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content.Mui-focused ":
            {
              backgroundColor: "transparent !important",
            },
          "& > a .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content.Mui-selected":
            {
              backgroundColor: "transparent !important",
            },
          "& > .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content:hover,& > a .MuiTreeItem-root .MuiCollapse-root .MuiCollapse-wrapper .MuiTreeItem-content:hover ":
            {
              backgroundColor: "transparent",
            },
          "& > a .MuiTreeItem-root .Mui-expanded.MuiTreeItem-content , & > a.single_link .MuiTreeItem-root .Mui-selected.MuiTreeItem-content":
            {
              backgroundColor: "#02466A !important",
              color: "#fff !important",
              transition: "0.1s",
              borderRight: "6px solid #1DBBBE",
              borderRadius: "8px",
              paddingRight: "2px",
            },
        }}
      >
        <Link className="single_link" to={"/"}>
          <StyledTreeItem
            nodeId="1"
            onClick={handleExpanding("1")}
            labelText="الرئيسية"
            svg={
              <Dashboard
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          />
        </Link>
        <StyledTreeItem
          sx={{}}
          nodeId="2"
          onClick={handleExpanding("2")}
          labelText="السوق"
          svg={
            <Market style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }} />
          }
        >
          <Link to={"/سوق_اطلبها"}>
            <StyledTreeItem
              nodeId="33"
              labelText="سوق أطلبها"
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
            ></StyledTreeItem>
          </Link>
          <Link to={"/السوق_العام"}>
            <StyledTreeItem
              nodeId="34"
              labelText="السوق العام"
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
            ></StyledTreeItem>
          </Link>
          <Link to={"/المخزون"}>
            <StyledTreeItem
              nodeId="35"
              labelText="المخزون"
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
            ></StyledTreeItem>
          </Link>
        </StyledTreeItem>

        <Link to={"/المتاجر"}>
          <StyledTreeItem
            onClick={handleExpanding("4")}
            sx={{
              "& .MuiCollapse-root": {
                transitionDuration: "3s ",
              },
            }}
            nodeId="4"
            labelText="المتاجر"
            svg={
              <Store
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          >
            <Link to={"/نشاط_المتاجر"}>
              <StyledTreeItem
                svg={
                  <GiPlainCircle
                    style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                  />
                }
                nodeId="5"
                labelText="نشاط المتاجر"
              ></StyledTreeItem>
            </Link>

            <Link to={"/عرض_المتاجر"}>
              <StyledTreeItem
                svg={
                  <GiPlainCircle
                    style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                  />
                }
                nodeId="6"
                labelText="المتاجر"
              />
            </Link>
            <Link to={"/حالة_التسجيل"}>
              <StyledTreeItem
                nodeId="7"
                labelText="حالة التسجيل"
                svg={
                  <GiPlainCircle
                    style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                  />
                }
              />
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
            onClick={handleExpanding("8")}
            nodeId="8"
            labelText="الباقات"
            svg={
              <Price
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          >
            <Link to={"/الاشتراكات_الحالية"}>
              <StyledTreeItem
                nodeId="9"
                svg={
                  <DolarIcon
                    style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                  />
                }
                labelText="الاشتراكات الحالية"
              />
            </Link>
          </StyledTreeItem>
        </Link>

        <Link className="single_link" to={"/الخدمات"}>
          <StyledTreeItem
            nodeId="10"
            onClick={handleExpanding("")}
            labelText="الخدمات"
            svg={
              <Category
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          ></StyledTreeItem>
        </Link>
        <Link className="single_link" to={"/أكاديمية_اطلبها"}>
          <StyledTreeItem
            nodeId="11"
            onClick={handleExpanding("")}
            labelText="أكاديمية أطلبها"
            svg={
              <Graduation
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          ></StyledTreeItem>
        </Link>
        <Link to={"/القالب"}>
          <StyledTreeItem
            sx={{
              "& .MuiCollapse-root": {
                transitionDuration: "3s ",
              },
            }}
            nodeId="12"
            labelText="القالب"
            onClick={handleExpanding("12")}
            svg={
              <Template
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          >
            <Link to={"/السلايدر"}>
              <StyledTreeItem
                svg={
                  <GiPlainCircle
                    style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                  />
                }
                nodeId="13"
                labelText="السلايدر"
              />
            </Link>
            <Link to={"/التقسيم"}>
              <StyledTreeItem
                svg={
                  <GiPlainCircle
                    style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                  />
                }
                nodeId="14"
                labelText="التقسيم"
              />
            </Link>
          </StyledTreeItem>
        </Link>
        <Link className="single_link" to={"/"}>
          <StyledTreeItem
            nodeId="16"
            labelText="الصفحات"
            onClick={handleExpanding("")}
            svg={
              <Pages
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          ></StyledTreeItem>
        </Link>
        <Link className="single_link" to={"/جدول_المستخدمين"}>
          <StyledTreeItem
            nodeId="17"
            labelText="المستخدمين"
            onClick={handleExpanding("")}
            svg={
              <User style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }} />
            }
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
          onClick={handleExpanding("18")}
          svg={
            <Marketing
              style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
            />
          }
        >
          <Link to={"/"}>
            <StyledTreeItem
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
              nodeId="19"
              labelText="نشاط المتاجر"
            />
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
          onClick={handleExpanding("20")}
          svg={
            <SalesMan
              style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
            />
          }
        >
          <Link to={"/"}>
            <StyledTreeItem
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
              nodeId="21"
              labelText="عرض المناديب"
            />
          </Link>
          <Link to={"/"}>
            <StyledTreeItem
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
              nodeId="22"
              labelText="حالة التسجيل"
            />
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
          onClick={handleExpanding("23")}
          svg={
            <Category
              style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
            />
          }
        >
          <Link to={"/"}>
            <StyledTreeItem
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
              nodeId="24"
              labelText="عرض المناديب"
            />
          </Link>
          <Link to={"/"}>
            <StyledTreeItem
              svg={
                <GiPlainCircle
                  style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
                />
              }
              nodeId="25"
              labelText="حالة التسجيل"
            />
          </Link>
        </StyledTreeItem>
        <Link className="single_link" to={"/"}>
          <StyledTreeItem
            nodeId="26"
            labelText="الطلبات"
            onClick={handleExpanding("")}
            svg={
              <Order
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          ></StyledTreeItem>
        </Link>
        <Link className="single_link" to={"/"}>
          <StyledTreeItem
            nodeId="27"
            labelText="المحفظة"
            onClick={handleExpanding("")}
            svg={
              <Wallet
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
          ></StyledTreeItem>
        </Link>
        <Link className="single_link" to={"/"}>
          <StyledTreeItem
            nodeId="28"
            labelText="الدعم الفنى"
            onClick={handleExpanding("")}
            svg={
              <Support
                style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
              />
            }
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
          onClick={handleExpanding("29")}
          svg={
            <Setting
              style={{ marginLeft: 5, height: "1.2rem", zIndex: "10" }}
            />
          }
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
