import React from "react";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";

export const Fixedheader = () => {
    const data = [
      {
        id: "1",
        SNO: 1,
        NAME: "Yonna",
        LASTNAME: "Qond",
        POSITION: "Financial Controller",
        DATE: "2012/02/21",
        SALARY: "$143,654",
        EMAIL: "i.bond@datatables.net",
      },
      {
        id: "2",
        SNO: 2,
        NAME: "Zonna",
        LASTNAME: "Jond",
        POSITION: "Accountant",
        DATE: "2012/02/21",
        SALARY: "$343,654",
        EMAIL: "a.bond@datatables.net",
      },
      {
        id: "3",
        SNO: 3,
        NAME: "Nonna",
        LASTNAME: "Tond",
        POSITION: "Chief Executive Officer",
        DATE: "2012/02/21",
        SALARY: "$743,654",
        EMAIL: "s.bond@datatables.net",
      },
      {
        id: "4",
        SNO: 4,
        NAME: "Bonna",
        LASTNAME: "Oond",
        POSITION: "Chief Operating Officer",
        DATE: "2012/02/21",
        SALARY: "$643,654",
        EMAIL: "w.bond@datatables.net",
      },
      {
        id: "5",
        SNO: 5,
        NAME: "Honna",
        LASTNAME: "Pond",
        POSITION: "Data Coordinator",
        DATE: "2012/02/21",
        SALARY: "$243,654",
        EMAIL: "e.bond@datatables.net",
      },
      {
        id: "6",
        SNO: 6,
        NAME: "Fonna",
        LASTNAME: "Nond",
        POSITION: "Developer",
        DATE: "2012/02/21",
        SALARY: "$543,654",
        EMAIL: "r.bond@datatables.net",
      },
      {
        id: "7",
        SNO: 7,
        NAME: "Aonna",
        LASTNAME: "Xond",
        POSITION: "Development lead",
        DATE: "2012/02/21",
        SALARY: "$843,654",
        EMAIL: "g.bond@datatables.net",
      },
      {
        id: "8",
        SNO: 8,
        NAME: "Qonna",
        LASTNAME: "Vond",
        POSITION: "Director",
        DATE: "2012/02/21",
        SALARY: "$743,654",
        EMAIL: "x.bond@datatables.net",
      },
      {
        id: "9",
        SNO: 9,
        NAME: "Jond",
        LASTNAME: "Zonna",
        POSITION: "Marketing Officer",
        DATE: "2012/02/21",
        SALARY: "$543,654",
        EMAIL: "k.bond@datatables.net",
      },
      {
        id: "10",
        SNO: 10,
        NAME: "Yonna",
        LASTNAME: "Qond",
        POSITION: "Financial Controller",
        DATE: "2012/02/21",
        SALARY: "$143,654",
        EMAIL: "s.bond@datatables.net",
      },
      {
        id: "11",
        SNO: 11,
        NAME: "Yonna",
        LASTNAME: "Qond",
        POSITION: "Financial Controller",
        DATE: "2012/02/21",
        SALARY: "$143,654",
        EMAIL: "b.bond@datatables.net",
      },
      {
        id: "12",
        SNO: 12,
        NAME: "Yonna",
        LASTNAME: "Qond",
        POSITION: "Financial Controller",
        DATE: "2012/02/21",
        SALARY: "$143,654",
        EMAIL: "o.bond@datatables.net",
      },
      {
        id: "13",
        SNO: 13,
        NAME: "Qonna",
        LASTNAME: "Pond",
        POSITION: "Data Coordinator",
        DATE: "2012/02/21",
        SALARY: "$243,654",
        EMAIL: "q.bond@datatables.net",
      },
      {
        id: "14",
        SNO: 14,
        NAME: "Yonna",
        LASTNAME: "Qond",
        POSITION: "Financial Controller",
        DATE: "2012/02/21",
        SALARY: "$143,654",
        EMAIL: "m.bond@datatables.net",
      },
    ];
    const columns: any= [
      {
        name: "S.NO",
        selector: (row:any) => [row.SNO],
        sortable: true,
      },
      {
        name: "NAME",
        selector: (row:any) => [row.NAME],
        sortable: true,
      },
      {
        name: "LAST NAME",
        selector: (row:any) => [row.LASTNAME],
        sortable: true,
      },
      {
        name: "POSITION",
        selector: (row:any) => [row.POSITION],
        sortable: true,
      },
      {
        name: "DATE",
        selector: (row:any) => [row.DATE],
        sortable: true,
      },
      {
        name: " SALARY",
        selector: (row:any) => [row.SALARY],
        sortable: true,
      },
      {
        name: "EMAIL",
        selector: (row:any) => [row.EMAIL],
        sortable: true,
      },
    ];
    
    const [allData , setAllData] = React.useState<any>(data)

    let allElement2:any[] = [];

    let myfunction = (InputData:any) => {
      for(let allElement of data){
        if(allElement.NAME.toLowerCase().includes(InputData.toLowerCase())){
          if(allElement.NAME.toLowerCase().startsWith(InputData.toLowerCase())){
            allElement2.push(allElement)
          }
        }
      }
      setAllData(allElement2)
    }
    return (
      <span className="datatable fixedheader">
        <label className="float-end">
        <input type="text" placeholder="Search..." className="mb-4 form-control-sm  form-control" onChange={(ele)=>{myfunction(ele.target.value)}}/>
        </label>
          <DataTable
            title=""
            columns={columns}
            data={allData}
            fixedHeader
            pagination
          />
      </span>
    );
  };
  