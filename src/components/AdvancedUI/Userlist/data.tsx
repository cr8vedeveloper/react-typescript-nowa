import React from "react";
import { Link } from "react-router-dom";

export const columns:any = [
  {
    name: "Photo",
    selector: (row:any) => [row.Photo],
    sortable: true,
    cell: (row:any) => <div className={row.class}>{row.img}</div>,
  },
  {
    name: "Name",
    selector: (row:any) => [row.Name],
    sortable: true,
    cell: (row:any) => (
      <span>
        <p className="tx-14 font-weight-semibold text-dark mb-1">{row.Name}</p>
        <p className="tx-12 text-muted mb-0">{row.Email}</p>
      </span>
    ),
  },
  {
    name: " Role",
    selector: (row:any) => [row.Role],
    sortable: true,
    cell: (row:any) => (
      <span>
        <span className="text-muted tx-13">{row.Role}</span>
      </span>
    ),
  },
  {
    name: "Last Active",
    selector: (row:any) => [row.LastActive],
    sortable: true,
    cell: (row:any) => (
      <span>
        <span className="badge bg-light text-muted tx-13">{row.Last}</span>
      </span>
    ),
  },
  {
    name: "Country",
    selector: (row:any) => [row.Country],
    sortable: true,
    cell: (row:any) => (
      <span>
        <span className="text-muted tx-13">{row.Country}</span>
      </span>
    ),
  },
  {
    name: "Verification",
    selector: (row:any) => [row.Verification],
    sortable: true,
    cell: (row:any) => (
      <span>
        <span className={row.color}>{row.Verification}</span>
      </span>
    ),
  },
  {
    name: "Joined Date",
    selector: (row:any) => [row.JoinedDate],
    sortable: true,
    cell: (row:any) => (
      <span>
        <span className="text-muted tx-13">{row.Date}</span>
      </span>
    ),
  },
  {
    name: "Joined Date",
    selector: (row:any) => [row.JoinedDate],
    sortable: true,
    cell: (row:any) => (
      <span>
        <Link
          to="#"
          className="btn btn-icon btn-primary-light me-2"
          data-bs-toggle="tooltip"
          title=""
          data-bs-original-title="Edit"
        >
          <i className="las la-pen"></i>
        </Link>
      </span>
    ),
  },
];
export const data = [
  {
   SNO:"1",
    img: (
      <img
        src={require("../../../assets/img/faces/4.jpg")}
        className="rounded-circle"
        alt=""
      />
    ),
    Name: "Ajanto",
    Email: "ajanto.aja445@hotmail.in",
    Role: "Architect",
    Last: "20 days ago",
    Country: "France",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "23-7-2021",
    class: "avatar-md  rounded-circle",
  },

  {
   SNO:"2",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/7.jpg")}
      />
    ),
    Name: "Kelly",
    Email: "kellybelly357@webmail.org",
    Role: "Senior Javascript Developer",
    Last: " 36 mins ago",
    Country: "Columbia",
    Verification: "Not Verified",
    color:
      "badge font-weight-semibold bg-secondary-transparent text-secondary tx-11",
    Date: "13-3-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"3",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/8.jpg")}
      />
    ),
    Name: "Satou",
    Email: "satousatti3345@gmail.org",
    Role: "Accountant",
    Last: "11 hrs ago",
    Country: "Spain",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "12-6-2020",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"4",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/9.jpg")}
      />
    ),
    Name: "Williamson",
    Email: "Williamson.wilson123@gmail.in",
    Role: "Integration Specialist",
    Last: "21 hrs ago",
    Country: "Bermuda",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "29-1-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"5",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/11.jpg")}
      />
    ),
    Name: "Davidson",
    Email: "davidson.david@hotmail.com",
    Role: "Integration Specialist",
    Last: "14 mins ago",
    Country: "Portugal",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "19-8-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"6",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/13.jpg")}
      />
    ),
    Name: "Frost",
    Email: "Frostpup143@gmail.org",
    Role: "Software Engineer",
    Last: "19 hrs ago",
    Country: "India",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "31-1-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"7",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/14.jpg")}
      />
    ),
    Name: "Gaines",
    Email: "Gaines.j@hotmail.in",
    Role: "Office Manager",
    Last: "15 days ago",
    Country: "Romania",
    Verification: "Not Verified",
    color:
      "badge font-weight-semibold bg-secondary-transparent text-secondary tx-11",
    Date: "27-3-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"8",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/15.jpg")}
      />
    ),
    Name: "Flynn",
    Email: "flynn.gov@gmail.in",
    Role: "Support Lead",
    Last: "1 month ago",
    Country: "Japan",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "23-5-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"9",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/16.jpg")}
      />
    ),
    Name: "Marshall",
    Email: "Marshall@ravichandra.mail",
    Role: "Regional Director",
    Last: "2 days ago",
    Country: "Mexico",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "11-7-2020",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"10",
    img: (
      <img
        alt="avatar"
        className="rounded-circle"
        src={require("../../../assets/img/faces/17.jpg")}
      />
    ),
    Name: "Kennedy",
    Email: "Kennedy@123.org.in",
    Role: "Senior Marketing Designer",
    Last: "12 mins ago",
    Country: "Italy",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "26-4-2021",
    class: "avatar-md  rounded-circle",
  },
  {
   SNO:"11",
    img: "W",
    Name: "Winters",
    Email: "winters.w345@gmail.org",
    Role: "Front end Designer",
    Last: "20 days ago",
    Country: "Greece",
    Verification: "Not Verified",
    color:
      "badge font-weight-semibold bg-secondary-transparent text-secondary tx-11",
    Date: "11-2-2021",
    class: "avatar avatar-md bg-success text-white rounded-circle",
  },
  {
   SNO:"12",
    img: "CX",
    Name: "Cox",
    Email: "morenocox.g111@gmail.in",
    Role: "Junior Technical Author",
    Last: "1 month ago",
    Country: "Texas",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "25-5-2021",
    class: "avatar avatar-md bg-secondary text-white rounded-circle",
  },
  {
   SNO:"13",
    img: "H",
    Name: "Hurst",
    Email: "Hurst.h@webmail.org.in",
    Role: "Javascript Developer",
    Last: "17 days ago",
    Country: "Iceland",
    Verification: "Verified",
    color:
      "badge font-weight-semibold bg-success-transparent text-success tx-11",
    Date: "16-4-2021",
    class: "avatar avatar-md bg-warning text-white rounded-circle",
  },
  {
   SNO:"14",
    img: "CH",
    Name: "Chandler",
    Email: "Chandler.k@mobimail.in",
    Role: "Sales Assistant",
    Last: "28 days ago",
    Country: "China",
    Verification: "Not Verified",
    color:
      "badge font-weight-semibold bg-secondary-transparent text-secondary tx-11",
    Date: "3-4-2021",
    class: "avatar avatar-md bg-info text-white rounded-circle",
  },
];
