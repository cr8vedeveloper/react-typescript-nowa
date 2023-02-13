import React from 'react';
import { Button, Row, Col, Card, Form, FormGroup, Modal } from "react-bootstrap";
import { data, columns } from './data';
import { Link } from 'react-router-dom';
import DataTable from "react-data-table-component";
const Userlist = () => {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	function convertArrayOfObjectsToCSV(array: any) {
		let result: any;

		const columnDelimiter = ",";
		const lineDelimiter = "\n";
		const keys = Object.keys(data[0]);

		result = "";
		result += keys.join(columnDelimiter);
		result += lineDelimiter;

		array.forEach((item: any) => {
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

	//Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
	function downloadCSV(array: any) {
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

	const Export = ({ onExport }: any) => (
		<Button onClick={(e: any) => onExport(e.target.value)}>Export</Button>
	);
	const actionsMemo = React.useMemo(
		() => <Export onExport={() => downloadCSV(data)} />,
		[]
	);
	const [selectedRows, setSelectedRows] = React.useState([]);
	const [toggleCleared, setToggleCleared] = React.useState(false);
	let selectdata: any = [];
	const handleRowSelected = React.useCallback((state: any) => {
		setSelectedRows(state.selectedRows);
	}, []);
	const contextActions = React.useMemo(() => {
		const Selectdata = () => {
			if (window.confirm(`download:\r ${selectedRows.map((r: any) => r.SNO)}?`)) {
				setToggleCleared(!toggleCleared);
				data.map((e: any) => {
					selectedRows.map((sr: any) => {
						if (e.SNO === sr.SNO) {
							selectdata.push(e);
						}
						return sr;
					});
					return e;
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
        if(allElement.Name.toLowerCase().includes(InputData.toLowerCase())){
          if(allElement.Name.toLowerCase().startsWith(InputData.toLowerCase())){
            allElement2.push(allElement)
          }
        }
      }
      setAllData(allElement2)
    }
	return (
		<div>

			{/* <!-- breadcrumb --> */}
			<div className="breadcrumb-header justify-content-between">
				<div className="left-content mt-2">
					<Link className="btn ripple btn-primary" to="#" onClick={handleShow}><i className="fe fe-plus me-2"></i>Add New User</Link>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header className="modal-header">
							<h6 className="modal-title">Add User</h6>
							<Button variant="" className="btn-close" type="button" onClick={handleClose}>
								<span aria-hidden="true">×</span></Button>
						</Modal.Header>

						<Modal.Body className="modal-body"> <div className="p-4">
							<Form className="form-horizontal">
								<FormGroup className="form-group">
									<Form.Control type="text" className="form-control" id="inputName" placeholder="Name" />
								</FormGroup>
								<FormGroup className="form-group">
									<Form.Control type="text" className="form-control" id="inputName1" placeholder="Role" />
								</FormGroup>
								<FormGroup className="form-group">
									<Form.Control type="email" className="form-control" id="inputEmail3" placeholder="Email" />
								</FormGroup>
								<FormGroup className="form-group mb-0 justify-content-end">
									<div className="checkbox">
										<div className="custom-checkbox custom-control">
											<input type="checkbox" data-checkboxes="mygroup" className="custom-control-input" id="checkbox-2" />
											<label htmlFor="checkbox-2" className="custom-control-label mt-1 text-dark">New User?</label>
										</div>
									</div>
								</FormGroup>
							</Form>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="" className="btn ripple btn-primary" type="button">
								Add
							</Button>
							<Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
			{/* <!-- /breadcrumb -->

					<!--Row-->
						<!-- Row --> */}
			<Row className=" row-sm">
				<Col lg={12}>
					<Card className="custom-card">
						<Card.Body>
							<div className="table-responsive ">
								<span className="datatable">
									<span className="uselistdata">
										<label className="float-end">
											<input type="text" placeholder="Search..." className="mb-4 form-control-sm form-control" onChange={(ele) => { myfunction(ele.target.value) }} />
										</label>
										<DataTable
											columns={columns}
											data={allData}
											actions={actionsMemo}
											contextActions={contextActions}
											onSelectedRowsChange={handleRowSelected}
											clearSelectedRows={toggleCleared}
											defaultSortAsc={false}
											selectableRows
											pagination
										/>
									</span>
								</span>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/* <!-- End Row -->
					<!-- row closed  --> */}
		</div>
	);
}

Userlist.propTypes = {};

Userlist.defaultProps = {};

export default Userlist;
