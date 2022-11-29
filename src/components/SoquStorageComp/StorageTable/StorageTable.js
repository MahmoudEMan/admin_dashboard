import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as SortIcon } from "../../../assets/Icons/icon-24-sort.svg";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { visuallyHidden } from "@mui/utils";
import { BsTrash } from "react-icons/bs";
import { Gift, CarImg, CameraImg, ShoesImg } from "../../../assets/Icons/index";
import { ReactComponent as EditIcon } from "../../../assets/Icons/editt 2.svg";
import { ReactComponent as AddIcon } from "../../../assets/Icons/icon-24-action-add.svg";
import { MdOutlineAddBox } from "react-icons/md";

function createData(name, activity, amount, price, sku, icon) {
  return {
    name,
    activity,
    amount,
    price,
    sku,
    icon,
  };
}

const rows = [
  createData("سماعة هيدفون أصلي", "الكترونيات", 200, 28, 151, CarImg),
  createData("عطر خليجي فخم", "عطور", 340, 45, 48, CameraImg),
  createData("سيارة تحكم ريموت", "هدايا وألعاب", 180, 55, 47, ShoesImg),
  createData("منتج1", "الكترونيات", 454, 28, 151, CarImg),
  createData("منتج2", "عطور", 54, 45, 48, CameraImg),
  createData("منتج3", "هدايا وألعاب", 452, 55, 47, ShoesImg),
  createData("منتج47", "الكترونيات", 462, 28, 151, CarImg),
  createData("منتج5", "عطور", 264, 45, 48, CameraImg),
  createData("منتج6", "هدايا وألعاب", 426, 55, 47, ShoesImg),
  createData("منتج17", "الكترونيات", 426, 28, 151, CarImg),
  createData("منتج16", "عطور", 426, 45, 48, CameraImg),
  createData("منتج159", "هدايا وألعاب", 246, 55, 47, ShoesImg),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "الإجراء",
    width: "5rem",
  },
  {
    id: "price",
    numeric: false,
    disablePadding: false,
    label: "سعر الوحدة",
    sort: false,
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "الكمية",
    sort: true,
  },
  {
    id: "activity",
    numeric: true,
    disablePadding: false,
    label: "التصنيف",
    sort: true,
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "اسم المنتج",
  },
  {
    id: "productNumber",
    numeric: true,
    disablePadding: false,
    label: "رقم المنتج",
  },
  {
    id: "number",
    numeric: true,
    disablePadding: false,
    label: "م",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ backgroundColor: "rgba(209,243,221)" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              width: headCell.width ? headCell.width : "auto",
              fontSize: "1rem",
              color: "#02466A",
            }}
          >
            {headCell.sort && (
              <TableSortLabel
                IconComponent={() => {
                  return <SortIcon />;
                }}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {!orderBy === headCell.id ? (
                  <Box component="span">
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
            {!headCell.sort && headCell.label}
          </TableCell>
        ))}
        <TableCell padding={"none"}></TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, onClick, rowCount, onSelectAllClick } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="flex gap-2 items-center">
        <div></div>
        {numSelected > 0 && (
          <Tooltip onClick={onClick} title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}

        {numSelected > 0 && (
          <Typography
            sx={{}}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        )}
      </div>

      <div className="flex items-center">
        <h2 className="font-medium">تحديد الكل</h2>
        <Checkbox
          sx={{
            color: "#1DBBBE",
            "& .MuiSvgIcon-root": {
              color: "#1DBBBE",
            },
          }}
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
          inputProps={{
            "aria-label": "select all desserts",
          }}
        />
      </div>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState(rows);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const rowsPerPagesCount = [10, 20, 30, 50, 100];
  const handleRowsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const allRows = () => {
    const num = Math.ceil(data.length / rowsPerPage);
    const arr = [];
    for (let index = 0; index < num; index++) {
      arr.push(index + 1);
    }
    return arr;
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar
          onClick={deleteItems}
          numSelected={selected.length}
          rowCount={data.length}
          onSelectAllClick={handleSelectAllClick}
        /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      //   onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        <div className="flex items-center gap-2">
                          <BsTrash
                            onClick={() => {
                              const findIndex = data.findIndex(
                                (item) => item.name === row.name
                              );
                              const arr = [...data];
                              arr.splice(findIndex, 1);
                              setData(arr);
                            }}
                            style={{
                              cursor: "pointer",
                              color: "red",
                              fontSize: "1rem",
                            }}
                          ></BsTrash>
                          <EditIcon width={"18px"}></EditIcon>
                          <MdOutlineAddBox
                            color="#1DBBBE"
                            size={"18px"}
                          ></MdOutlineAddBox>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="">
                          <h2 dir="rtl" className="font-medium">
                            <span className="ml-1">{row.price}</span>
                            <span>ر.س</span>
                          </h2>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div>
                          <h2 className="font-medium">{row.amount}</h2>
                        </div>
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{ display: "flex", gap: "0.5rem", p: "24px 0" }}
                      >
                        <img src={Gift} alt="" />
                        <h2 className="font-medium">{row.activity}</h2>
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex items-center justify-end gap-3">
                          <h2>{row.name}</h2>
                          <img src={row.icon} alt="" />
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <h2 className="inline font-medium">{row.sku}</h2>
                      </TableCell>
                      <TableCell align="right">
                        {(index + 1).toLocaleString("en-US", {
                          minimumIntegerDigits: 2,
                          useGrouping: false,
                        })}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-2 p-2 rounded-md"
          style={{ border: "1px solid #2D62ED" }}
        >
          <div
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleRowsClick}
            className={
              "h-9 w-9 rounded-sm flex justify-center items-center cursor-pointer"
            }
            style={{ backgroundColor: "#0099FB" }}
          >
            <MdOutlineKeyboardArrowDown
              color="#fff"
              fontSize={"1.5rem"}
            ></MdOutlineKeyboardArrowDown>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {rowsPerPagesCount.map((rowsPer, rowsIdx) => {
              return (
                <MenuItem
                  value={rowsPer}
                  onClick={(e) => {
                    handleChangeRowsPerPage(e);
                    handleClose();
                  }}
                  key={rowsIdx}
                >
                  {rowsPer}
                </MenuItem>
              );
            })}
          </Menu>
          <h2 className="font-medium" style={{ color: "#0077FF" }}>
            عدد الصفوف
          </h2>
        </div>
      </div>
    </Box>
  );
}
