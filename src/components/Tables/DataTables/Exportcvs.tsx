import React from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
// import DataTableExtensions from "react-data-table-component-extensions";


function convertArrayOfObjectsToCSV(array:any) {
    let result:any;
  
    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(data[0]);
  
    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
  
    array.forEach((item:any) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;
  
        result += item[key];
  
        ctr++;
      });
      result += lineDelimiter;
    });
  
    return result;
  }
  
  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  function downloadCSV(array:any) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;
  
    const filename = "export.csv";
  
    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }
  
    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }
  
  const Export = ({ onExport }:any) => (
    <Button onClick={(e:any) => onExport(e.target.value)}>Export</Button>
  );
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
  const columns:any = [
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
  
  export const ExportCSV = () => {
    const actionsMemo = React.useMemo(() => <Export onExport={() => {downloadCSV(data)}} />, []);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    let selectdata:any = [];
    const handleRowSelected = React.useCallback((state:any) => {
      setSelectedRows(state.selectedRows);
    }, []);
    const contextActions = React.useMemo(() => {
      const Selectdata = () => {
        if (window.confirm(`download:\r ${selectedRows.map((r:any) => r.SNO)}?`)) {
          setToggleCleared(!toggleCleared);
          data.map((e) => {
            selectedRows.map((sr:any) => {
              if (e.id === sr.id) {
                selectdata.push(e);
              }
              return selectedRows;
            });
            return data;
          });
          downloadCSV(selectdata);
        }
      };
  
      return <Export onExport={() => Selectdata()} icon="true" />;
    }, [data, selectdata, selectedRows]);
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
       <span className="datatable">
<label className="float-end">
      <input type="text" placeholder="Search..." className="mb-4 form-control-sm form-control" onChange={(ele)=>{myfunction(ele.target.value)}}/>
      </label>

        <DataTable
          columns={columns}
          data={allData}
          actions={actionsMemo}
          contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
          selectableRows
          pagination
        />
      </span>
    );
  };

