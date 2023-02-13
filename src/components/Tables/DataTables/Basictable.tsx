import React from "react";
import { Button, Form, } from "react-bootstrap";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
export const COLUMNS:any = [
  {
    Header: "Name",
    accessor: "Name",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Position",
    accessor: "Position",
    className: "wd-25p borderrigth",
  },
  {
    Header: "Office",
    accessor: "Office",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Age",
    accessor: "Age",
    className: "wd-15p borderrigth",
  },
  {
    Header: "Salary",
    accessor: "Salary",
    className: "wd-20p borderrigth",
  },
];
export const DATATABLE = [
  {
    Id: "1",
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: "61",
    Salary: "$320,800",
  },
  {
    Id: "2",
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "63",
    Salary: "$170,750",
  },
  {
    Id: "3",
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: "66",
    Salary: "$86,000",
  },
  {
    Id: "4",
    Name: "Cedric Kelly",
    Position: "Senior Javascript Developer",
    Office: "Edinburgh",
    Age: "22",
    Salary: "$433,060",
  },
  {
    Id: "5",
    Name: "Airi Satou",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "33",
    Salary: "$162,700",
  },
  {
    Id: "6",
    Name: "Brielle Williamson",
    Position: "Integration Specialist",
    Office: "New York",
    Age: "61",
    Salary: "$372,000",
  },
  {
    Id: "7",
    Name: "Herrod Chandler",
    Position: "Sales Assistant",
    Office: "San Francisco",
    Age: "59",
    Salary: "$137,500",
  },
  {
    Id: "8",
    Name: "Rhona Davidson",
    Position: "Integration Specialist",
    Office: "Tokyo",
    Age: "55",
    Salary: "$327,900",
  },
  {
    Id: "9",
    Name: "Colleen Hurst",
    Position: "Javascript Developer",
    Office: "San Francisco",
    Age: "39",
    Salary: "$205,500",
  },
  {
    Id: "10",
    Name: "Sonya Frost",
    Position: "Software Engineer",
    Office: "Edinburgh",
    Age: "23",
    Salary: "$103,600",
  },
  {
    Id: "11",
    Name: "Jena Gaines",
    Position: "Office Manager",
    Office: "London",
    Age: "30",
    Salary: "$90,560",
  },
  {
    Id: "12",
    Name: "Quinn Flynn",
    Position: "Support Lead",
    Office: "Edinburgh",
    Age: "22",
    Salary: "$342,000",
  },
  {
    Id: "13",
    Name: "Charde Marshall",
    Position: "Regional Director",
    Office: "San Francisco",
    Age: "36",
    Salary: "$470,600",
  },
  {
    Id: "14",
    Name: "Haley Kennedy",
    Position: "Senior Marketing Designer",
    Office: "London",
    Age: "43",
    Salary: "$313,500",
  },
  {
    Id: "15",
    Name: "Tatyana Fitzpatrick",
    Position: "Regional Director",
    Office: "London",
    Age: "19",
    Salary: "$385,750",
  },
  {
    Id: "16",
    Name: "Michael Silva",
    Position: "Marketing Designer",
    Office: "London",
    Age: "66",
    Salary: "$198,500",
  },
  {
    Id: "17",
    Name: "Paul Byrd",
    Position: "Chief Financial Officer (CFO)",
    Office: "New York",
    Age: "64",
    Salary: "$725,000",
  },
  {
    Id: "18",
    Name: "Gloria Little",
    Position: "Systems Administrator",
    Office: "New York",
    Age: "59",
    Salary: "$237,500",
  },
  {
    Id: "19",
    Name: "Bradley Greer",
    Position: "Software Engineer",
    Office: "London",
    Age: "41",
    Salary: "$132,000",
  },
  {
    Id: "20",
    Name: "Dai Rios",
    Position: "Personnel Lead",
    Office: "Edinburgh",
    Age: "35",
    Salary: "$217,500",
  },
  {
    Id: "21",
    Name: "Jenette Caldwell",
    Position: "Development Lead",
    Office: "New York",
    Age: "30",
    Salary: "$345,000",
  },
  {
    Id: "22",
    Name: "Yuri Berry",
    Position: "Chief Marketing Officer (CMO)",
    Office: "New York",
    Age: "40",
    Salary: "$675,000",
  },
  {
    Id: "23",
    Name: "Caesar Vance",
    Position: "Pre-Sales Support",
    Office: "New York",
    Age: "21",
    Salary: "$106,450",
  },
  {
    Id: "24",
    Name: "Doris Wilder",
    Position: "Sales Assistant",
    Office: "Sidney",
    Age: "23",
    Salary: "$85,600",
  },
  {
    Id: "25",
    Name: "Angelica Ramos",
    Position: "Chief Executive Officer (CEO)",
    Office: "London",
    Age: "47",
    Salary: "$1,200,000",
  },
  {
    Id: "26",
    Name: "Gavin Joyce",
    Position: "Developer",
    Office: "Edinburgh",
    Age: "42",
    Salary: "$92,575",
  },
  {
    Id: "27",
    Name: "Jennifer Chang",
    Position: "Regional Director",
    Office: "Singapore",
    Age: "28",
    Salary: "$357,650",
  },
  {
    Id: "28",
    Name: "Brenden Wagner",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "28",
    Salary: "$206,850",
  },
  {
    Id: "29",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    Salary: "$850,000",
  },
  {
    Id: "30",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    Salary: "$163,000",
  },
  {
    Id: "31",
    Name: "Michelle House",
    Position: "Integration Specialist",
    Office: "Sidney",
    Age: "37",
    Salary: "$95,400",
  },
  {
    Id: "32",
    Name: "Suki Burks",
    Position: "Developer",
    Office: "London",
    Age: "53",
    Salary: "$114,500",
  },
  {
    Id: "33",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    Salary: "$145,000",
  },
  {
    Id: "34",
    Name: "Gavin Cortez",
    Position: "Team Leader",
    Office: "San Francisco",
    Age: "22",
    Salary: "$235,500",
  },
  {
    Id: "35",
    Name: "Martena Mccray",
    Position: "Post-Sales support",
    Office: "Edinburgh",
    Age: "46",
    Salary: "$324,050",
  },
  {
    Id: "36",
    Name: "Unity Butler",
    Position: "Marketing Designer",
    Office: "San Francisco",
    Age: "47",
    Salary: "$85,675",
  },
  {
    Id: "37",
    Name: "Howard Hatfield",
    Position: "Office Manager",
    Office: "San Francisco",
    Age: "51",
    Salary: "$164,500",
  },
  {
    Id: "38",
    Name: "Hope Fuentes",
    Position: "Secretary",
    Office: "San Francisco",
    Age: "41",
    Salary: "$109,850",
  },
  {
    Id: "39",
    Name: "Vivian Harrell",
    Position: "Financial Controller",
    Office: "San Francisco",
    Age: "62",
    Salary: "$452,500",
  },
  {
    Id: "40",
    Name: "Timothy Mooney",
    Position: "Office Manager",
    Office: "London",
    Age: "37",
    Salary: "$136,200",
  },
  {
    Id: "41",
    Name: "Jackson Bradshaw",
    Position: "Director",
    Office: "New York",
    Age: "65",
    Salary: "$645,750",
  },
  {
    Id: "42",
    Name: "Olivia Liang",
    Position: "Support Engineer",
    Office: "Singapore",
    Age: "64",
    Salary: "$234,500",
  },
  {
    Id: "43",
    Name: "Bruno Nash",
    Position: "Software Engineer",
    Office: "London",
    Age: "38",
    Salary: "$163,500",
  },
  {
    Id: "44",
    Name: "Sakura Yamamoto",
    Position: "Support Engineer",
    Office: "Tokyo",
    Age: "37",
    Salary: "$139,575",
  },
  {
    Id: "45",
    Name: "Thor Walton",
    Position: "Developer",
    Office: "New York",
    Age: "61",
    Salary: "$98,540",
  },
  {
    Id: "46",
    Name: "Finn Camacho",
    Position: "Support Engineer",
    Office: "San Francisco",
    Age: "47",
    Salary: "$87,500",
  },
  {
    Id: "47",
    Name: "Serge Baldwin",
    Position: "Data Coordinator",
    Office: "Singapore",
    Age: "64",
    Salary: "$138,575",
  },
  {
    Id: "48",
    Name: "Zenaida Frank",
    Position: "Software Engineer",
    Office: "New York",
    Age: "63",
    Salary: "$125,250",
  },
  {
    Id: "49",
    Name: "Zorita Serrano",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "56",
    Salary: "$115,000",
  },
  {
    Id: "50",
    Name: "Jennifer Acosta",
    Position: "Junior Javascript Developer",
    Office: "Edinburgh",
    Age: "43",
    Salary: "$75,650",
  },
  {
    Id: "51",
    Name: "Cara Stevens",
    Position: "Sales Assistant",
    Office: "New York",
    Age: "46",
    Salary: "$145,600",
  },
  {
    Id: "52",
    Name: "Hermione Butler",
    Position: "Regional Director",
    Office: "London",
    Age: "47",
    Salary: "$356,250",
  },
  {
    Id: "53",
    Name: "Lael Greer",
    Position: "Systems Administrator",
    Office: "London",
    Age: "21",
    Salary: "$103,500",
  },
  {
    Id: "54",
    Name: "Jonas Alexander",
    Position: "Developer",
    Office: "San Francisco",
    Age: "30",
    Salary: "$86,500",
  },
  {
    Id: "55",
    Name: "Shad Decker",
    Position: "Regional Director",
    Office: "Edinburgh",
    Age: "51",
    Salary: "$183,000",
  },
  {
    Id: "56",
    Name: "Michael Bruce",
    Position: "Javascript Developer",
    Office: "Singapore",
    Age: "29",
    Salary: "$183,000",
  },
  {
    Id: "57",
    Name: "Donna Snider",
    Position: "Customer Support",
    Office: "New York",
    Age: "27",
    Salary: "$112,000",
  },
  {
    Id: "58",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    Salary: "$850,000",
  },
  {
    Id: "59",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    Salary: "$163,000",
  },
  {
    Id: "60",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    Salary: "$145,000",
  },
];
export const BasicTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }:any = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="d-flex">
        <select
          className=" mb-4 selectpage border me-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="table table-hover mb-0">
        <thead>
          {headerGroups.map((headerGroup:any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column:any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row:any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell:any) => {
                  return (
                    <td className="borderrigth" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-block d-sm-flex mt-4 ">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="ms-sm-auto ">
          <Button
            variant=""
            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" << "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" < "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" > "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" >> "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </Button>
        </span>
      </div>
    </>
  );
};
const GlobalFilter = ({ filter, setFilter }:any) => {
  return (
    <span className="d-flex ms-auto">
      <Form.Control
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
