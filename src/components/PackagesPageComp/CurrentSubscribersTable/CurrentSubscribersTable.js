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
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { BsTrash } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

import { Gift } from "../../../assets/Icons/index";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const trader = { title: "تاجر", class: "rgba(164, 161, 251, 0.4)" };
const proTrader = { title: "تاجر محترف", class: "#00CCF266" };
const privateBrand = { title: "براند خاص", class: "#B6BE3466" };

function createData(name, packageType, daysLeft, packageLength) {
  return {
    name,
    packageType,
    daysLeft,
    packageLength,
  };
}

const rows = [
  createData("أمازون", trader, 90, "3 شهور"),
  createData("صحتى", proTrader, 67, "6 شهور"),
  createData("تسعة", privateBrand, 7, "سنوى"),
  createData("أمfازون", trader, 90, "3 شهور"),
  createData("صحfتى", proTrader, 67, "6 شهور"),
  createData("تسعfة", privateBrand, 7, "سنوى"),
  createData("أمازوfن", trader, 90, "3 شهور"),
  createData("league", proTrader, 67, "6 شهور"),
  createData("تfسعة", privateBrand, 7, "سنوى"),
  createData("أمازfون", trader, 90, "3 شهور"),
  createData("صحfdتى", proTrader, 67, "6 شهور"),
  createData("تسfعة", privateBrand, 7, "سنوى"),
  createData("starbucjs", trader, 90, "3 شهور"),
  createData("صfdحتى", proTrader, 67, "6 شهور"),
  createData("تسdعة", privateBrand, 7, "سنوى"),
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
    id: "situation",
    numeric: false,
    disablePadding: false,
    label: "الإجراء",
    width: "5rem",
  },
  {
    id: "daysLeft",
    numeric: true,
    disablePadding: false,
    label: "ينتهى خلال",
    sort: true,
  },
  {
    id: "rate",
    numeric: true,
    disablePadding: false,
    label: "مدة الاشتراك",
    sort: true,
  },
  {
    id: "opened",
    numeric: true,
    disablePadding: false,
    label: "اسم المتجر",
  },
  {
    id: "activity",
    numeric: true,
    disablePadding: false,
    label: "نوع الباقة",
    sort: true,
  },

  {
    id: "name",
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
    <TableHead sx={{ backgroundColor: "rgba(182, 190, 52, 0.2)" }}>
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
            }}
          >
            {headCell.sort && (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {!orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
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

export default function EnhancedTable({ openTraderAlert }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);

  const [data, setData] = React.useState(rows);
  const [rowsPerPage, setRowsPerPage] = React.useState(data.length);

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
  const deleteItems = () => {
    const array = [...data];
    selected.forEach((item, idx) => {
      const findIndex = array.findIndex((i) => item === i.name);
      array.splice(findIndex, 1);
    });
    setData(array);
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
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

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
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
                          <HiOutlineMail
                            onClick={() => {}}
                            style={{
                              cursor: "pointer",
                              color: "rgba(29, 187, 190, 1)",
                              fontSize: "1rem",
                            }}
                          ></HiOutlineMail>
                          <FiSend
                            onClick={() => {
                              openTraderAlert(row);
                            }}
                            style={{
                              cursor: "pointer",
                              color: "rgba(29, 187, 190, 1)",
                              fontSize: "1rem",
                            }}
                          ></FiSend>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className="">
                          <h2 dir="rtl" className="font-medium">
                            <span className="ml-1">{row.daysLeft}</span>
                            <span>يوم</span>
                          </h2>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <h2 className="font-medium">{row.packageLength}</h2>
                      </TableCell>

                      <TableCell
                        align="right"
                        sx={{ display: "flex", gap: "0.5rem", p: "24px" }}
                      >
                        <img src={Gift} alt="" />
                        <h2 className="font-medium">{row.name}</h2>
                      </TableCell>
                      <TableCell align="right">
                        <div
                          className={`h-10 w-28 font-medium rounded-3xl ml-auto flex justify-center items-center`}
                          style={{ backgroundColor: row.packageType.class }}
                        >
                          {row.packageType.title}
                        </div>
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
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
