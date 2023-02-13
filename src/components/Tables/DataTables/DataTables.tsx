import React from 'react';
import {  Card,Breadcrumb, Col, Row } from 'react-bootstrap';
import {BasicTable} from "./Basictable"
import{Fixedheader} from "./Fixedheader"
import { ExportCSV } from './Exportcvs';
import{DataTabless} from "./Deleterows"
import {Savetable} from "./Addrows"
const DataTables = () => (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            DATA TABLES
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Tables
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Data tables
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Basic DataTable</h6>
                <p className="text-muted card-sub-title">
                  Searching, ordering and paging goodness will be immediately
                  added to the table, as shown in this example.
                </p>
              </div>
              <div className="table-responsive">
                <BasicTable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  File export Datatables
                </h6>
                <p className="text-muted card-sub-title">
                  Exporting data from a table can often be a key part of a
                  complex application. The Buttons extension for DataTables
                  provides three plug-ins that provide overlapping functionality
                  for data export:
                </p>
              </div>
              <div className="table-responsive fileexport pos-relative">
                <ExportCSV />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Deleted Row DataTable
                </h6>
                <p className="text-muted card-sub-title">
                  Responsive is an extension for DataTables that resolves that
                  problem by optimising the table's layout for different screen
                  sizes through the dynamic insertion and removal of columns
                  from the table.
                </p>
              </div>
              <div className="table-responsive pos-relative deleterow">
                <DataTabless />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Deleted Row DataTable
                </h6>
                <p className="text-muted card-sub-title">
                  Responsive is an extension for DataTables that resolves that
                  problem by optimising the table's layout for different screen
                  sizes through the dynamic insertion and removal of columns
                  from the table.
                </p>
              </div>
              <div className="table-responsive  deleted-table">
                
                <Savetable/>
                
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                Sticky Header Datatables
                </h6>
                <p className="text-muted card-sub-title">
                  Exporting data from a table can often be a key part of a
                  complex application. The Buttons extension for DataTables
                  provides three plug-ins that provide overlapping functionality
                  for data export:
                </p>
              </div>
              <div className="table-responsive stickyheader export-table">
                <Fixedheader />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  </div>
);

DataTables.propTypes = {};

DataTables.defaultProps = {};

export default DataTables;
