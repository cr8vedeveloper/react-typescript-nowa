import React from "react";
import { Breadcrumb, Card, Col, Row,Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const DefaultTables = () =>{ 
  const data = [
    {
      id: "1",
      Name: "Joan Powell",
      Position: "Associate Developer",
      Salary: "$450,870",
    },
    {
      id: "2",
      Name: "Gavin Gibson",
      Position: "Account manager",
      Salary: "$230,540",
    },
    {
      id: "3",
      Name: "Julian Kerr",
      Position: "Senior Javascript Developer",
      Salary: "$55,300",
    },
    {
      id: "4",
      Name: "Cedric Kelly",
      Position: "Accountant",
      Salary: "$234,100",
    },
    {
      id: "5",
      Name: "Samantha May",
      Position: "Junior Technical Author",
      Salary: "$43,198",
    },
  ];
  
  return(
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">TABLES</span>
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
            Basic tables
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row opened --> */}
    <Row className="row-sm">
      <Col xl={12}>
        <Card>
          <Card.Header className=" pb-0">
            <div className="d-flex justify-content-between">
              <h4 className="card-title mg-b-0">SIMPLE TABLE</h4>
            </div>
            <p className="tx-12 tx-gray-500 mb-2">
              Example of Nowa Simple Table. <Link to="#">Learn more</Link>
            </p>
          </Card.Header>
          <Card.Body>
          <div className="table-responsive">
        <Table className="table mg-b-0 text-md-nowrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list:any, index:any) => (
              <tr key={index}>
                <th scope="row">{list.id}</th>
                <td>{list.Name}</td>
                <td>{list.Position}</td>
                <td>{list.Salary}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col xl={12}>
        <Card>
          <Card.Header className=" pb-0">
            <div className="d-flex justify-content-between">
              <h4 className="card-title mg-b-0">STRIPED ROWS</h4>
            </div>
            <p className="tx-12 tx-gray-500 mb-2">
              Example of Nowa Striped Rows.. <Link to="#">Learn more</Link>
            </p>
          </Card.Header>
          <Card.Body>
          <div className="table-responsive">
        <Table className="table table-bordered table-striped mg-b-0 text-md-nowrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list:any, index:any) => (
              <tr key={index}>
                <th scope="row">{list.id}</th>
                <td>{list.Name}</td>
                <td>{list.Position}</td>
                <td>{list.Salary}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
            {/*<!-- bd --> */}
          </Card.Body>
          {/*<!-- bd --> */}
        </Card>
        {/*<!-- bd --> */}
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col xl={12}>
        <div className="card mg-b-20">
          <Card.Header className=" pb-0">
            <div className="d-flex justify-content-between">
              <h4 className="card-title mg-b-0">Bordered Table</h4>
            </div>
            <p className="tx-12 tx-gray-500 mb-2">
              Example of Nowa Bordered Table.. <Link to="#">Learn more</Link>
            </p>
          </Card.Header>
          <Card.Body>
          <div className="table-responsive">
        <Table className="table table-bordered mg-b-0 text-md-nowrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list:any, index:any) => (
              <tr key={index}>
                <th scope="row">{list.id}</th>
                <td>{list.Name}</td>
                <td>{list.Position}</td>
                <td>{list.Salary}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
          </Card.Body>
        </div>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col xl={12}>
        <Card>
          <Card.Header className=" pb-0">
            <div className="d-flex justify-content-between">
              <h4 className="card-title mg-b-0">Hoverable Rows Table</h4>
            </div>
            <p className="tx-12 tx-gray-500 mb-2">
              Example of Nowa Hoverable Rows Table.. <Link to="#">Learn more</Link>
            </p>
          </Card.Header>
          <Card.Body>
          <div className="table-responsive">
        <Table className="table table-bordered table-hover mb-0 text-md-nowrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list:any, index:any) => (
              <tr key={index}>
                <th scope="row">{list.id}</th>
                <td>{list.Name}</td>
                <td>{list.Position}</td>
                <td>{list.Salary}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}
    </Row>
    {/* <!-- /row --> */}
  </div>
);}

DefaultTables.propTypes = {};

DefaultTables.defaultProps = {};

export default DefaultTables;
