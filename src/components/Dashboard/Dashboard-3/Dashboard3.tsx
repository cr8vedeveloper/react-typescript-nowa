import React from "react";
import { Link } from "react-router-dom";
import * as Dashboard3data from "./data";
import {COLUMNS,DATATABLE,GlobalFilter} from "./data"
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
const Dashboard3 = () => {
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

  const { globalFilter, pageIndex, pageSize }:any = state;
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">DASHBOARD</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Sales
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col sm={12} lg={12} md={12} xl={7}>
          <Card className=" primary-custom-card1">
            <Card.Body>
              <Row>
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                  <div className="prime-card">
                    <img
                      className="img-fluid"
                      src={require("../../../assets/img/png/dashboard8.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                  <div className="text-justified align-items-center">
                    <h2 className="text-dark font-weight-semibold mb-3 mt-2">
                      Hi, Welcome Back{" "}
                      <span className="text-primary">Nick!</span>
                    </h2>
                    <p className="text-dark tx-17 mb-2 lh-3">
                      {" "}
                      You have used the 100% of free plan storage. Please
                      upgrade your plan to get unlimited storage.
                    </p>
                    <p className="font-weight-semibold tx-12 mb-4">
                      For billing related queries, contact us through support
                      chat or mail us at team@spruko.com{" "}
                    </p>
                    <Button className="btn btn-primary mb-3 shadow" variant="">
                      Upgrade to new Plan
                    </Button>
                  </div>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={5} lg={12} md={12} sm={12}>
          {/* <!-- <div className="container"> --> */}
          <Row>
            <Col xs={12} lg={6} xl={6} md={12}>
              <Card className="sales-card circle-image1">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12 ">Today Orders</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            5,472
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className="text-success font-weight-semibold">
                            {" "}
                            +427
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-shopping-bag tx-16 text-primary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={6} xl={6} md={12}>
              <Card className="sales-card circle-image2">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Today Earnings</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            $47,589
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-down mx-2 text-danger"></i>
                          <span className="font-weight-semibold text-danger">
                            {" "}
                            -453
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-dollar-sign tx-16 text-info"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={6} xl={6} md={12}>
              <Card className="sales-card circle-image3">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Profit Gain</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-20 font-weight-semibold mb-2">
                            $8,943
                          </h4>
                        </div>
                        <p className="mb-0 tx-12 text-muted">
                          Last week
                          <i className="fa fa-caret-up mx-2 text-success"></i>
                          <span className=" text-success font-weight-semibold">
                            {" "}
                            +788
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-external-link tx-16 text-secondary"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
            <Col xs={12} lg={6} xl={6} md={12}>
              <Card className="sales-card circle-image4">
                <Row>
                  <div className="col-8">
                    <div className="ps-4 pt-4 pe-3 pb-4">
                      <div className="">
                        <h6 className="mb-2 tx-12">Total Earnings</h6>
                      </div>
                      <div className="pb-0 mt-0">
                        <div className="d-flex">
                          <h4 className="tx-22 font-weight-semibold mb-2">
                            $57.12M
                          </h4>
                        </div>
                        <p className="mb-0 tx-12  text-muted">
                          Last week
                          <i className="fa fa-caret-down mx-2 text-danger"></i>
                          <span className="text-danger font-weight-semibold">
                            {" "}
                            -693
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                      <i className="fe fe-credit-card tx-16 text-warning"></i>
                    </div>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* <!-- </div> --> */}
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row --> */}
      <Row>
        <Col xl={6} lg={12} md={12} sm={12}>
          <Card className=" custom-card overflow-hidden">
            <Card.Header className=" border-bottom-0">
              <div>
                <h3 className="card-title mb-2 ">Project Budget</h3>{" "}
                <span className="d-block tx-12 mb-0 text-muted"></span>
              </div>
            </Card.Header>
            <Card.Body>
              <div id="statistics3"><Dashboard3data.Statistics3/></div>
            </Card.Body>
          </Card>
        </Col>
        <Col dm={12} lg={12} xl={3}>
          <Card className=" overflow-hidden">
            <Card.Header className=" pb-1">
              <h3 className="card-title mb-2">Recent Customers</h3>
            </Card.Header>
            <Card.Body className=" p-0 customers mt-1">
              <ListGroup className=" list-lg-group list-group-flush">
                <Link to="#" className="border-0">
                  <ListGroupItem className=" list-group-item-action border-0">
                    <div className="media mt-0">
                      <img
                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                        src={require("../../../assets/img/faces/2.jpg")}
                        alt=""
                      />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-0">
                            <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                              Samantha Melon
                            </h5>
                            <p className="mb-0 tx-12 text-muted">
                              User ID: #1234
                            </p>
                          </div>
                          <span className="ms-auto wd-45p tx-14">
                            <span className="float-end badge badge-success-transparent">
                              <span className="op-7 text-success font-weight-semibold">
                                paid{" "}
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </Link>
                <Link to="#" className="border-0">
                  <ListGroupItem className=" list-group-item-action border-0">
                    <div className="media mt-0">
                      <img
                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                        src={require("../../../assets/img/faces/1.jpg")}
                        alt=""
                      />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                              Allie Grater
                            </h5>
                            <p className="mb-0 tx-12 text-muted">
                              User ID: #1234
                            </p>
                          </div>
                          <span className="ms-auto wd-45p tx-14">
                            <span className="float-end badge badge-danger-transparent ">
                              <span className="op-7 text-danger font-weight-semibold">
                                Pending
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </Link>
                <Link to="#" className="border-0">
                  <ListGroupItem className=" list-group-item-action border-0">
                    <div className="media mt-0">
                      <img
                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                        src={require("../../../assets/img/faces/5.jpg")}
                        alt=""
                      />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                              Gabe Lackmen
                            </h5>
                            <p className="mb-0 tx-12 text-muted">
                              User ID: #1234
                            </p>
                          </div>
                          <span className="ms-auto wd-45p  tx-14">
                            <span className="float-end badge badge-danger-transparent ">
                              <span className="op-7 text-danger font-weight-semibold">
                                Pending
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </Link>
                <Link to="#" className="border-0">
                  <ListGroupItem className=" list-group-item-action border-0">
                    <div className="media mt-0">
                      <img
                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                        src={require("../../../assets/img/faces/7.jpg")}
                        alt=""
                      />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                              Manuel Labor
                            </h5>
                            <p className="mb-0 tx-12 text-muted">
                              User ID: #1234
                            </p>
                          </div>
                          <span className="ms-auto wd-45p tx-14">
                            <span className="float-end badge badge-success-transparent ">
                              <span className="op-7 text-success font-weight-semibold">
                                Paid
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </Link>
                <Link to="#" className="border-0">
                  <ListGroupItem className=" list-group-item-action border-0">
                    <div className="media mt-0">
                      <img
                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                        src={require("../../../assets/img/faces/9.jpg")}
                        alt=""
                      />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                              Hercules Bing
                            </h5>
                            <p className="mb-0 tx-12 text-muted">
                              User ID: #1754
                            </p>
                          </div>
                          <span className="ms-auto wd-45p tx-14">
                            <span className="float-end badge badge-success-transparent ">
                              <span className="op-7 text-success font-weight-semibold">
                                Paid
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </Link>
                <Link to="#" className="border-0">
                  <ListGroupItem className=" list-group-item-action border-0">
                    <div className="media mt-0">
                      <img
                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                        src={require("../../../assets/img/faces/11.jpg")}
                        alt=""
                      />
                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <div className="mt-1">
                            <h5 className="mb-1 tx-13 font-weight-sembold text-dark">
                              Manuel Labor
                            </h5>
                            <p className="mb-0 tx-12 text-muted">
                              User ID: #1234
                            </p>
                          </div>
                          <span className="ms-auto wd-45p tx-14">
                            <span className="float-end badge badge-danger-transparent ">
                              <span className="op-7 text-danger font-weight-semibold">
                                Pending
                              </span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </Link>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={3}>
          <Card className=" overflow-hidden">
            <Card.Header className=" pb-1">
              <Card.Title className=" mb-2">
                Warehouse Operating Costs
              </Card.Title>
            </Card.Header>
            <Card.Body className=" p-0">
              <ListGroup className="projects-list border-0">
                <ListGroupItem
                 
                  className=" list-group-item-action flex-column align-items-start border-0"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Order Picking
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      3,876
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>{" "}
                      <span className="text-success">03%</span> last month
                    </span>
                    <span className="text-muted  tx-11">5 days ago</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem
                 
                  className=" list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Storage
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      2,178
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-down text-danger me-1"></i>
                      <span className="text-danger"> 16%</span> last month
                    </span>
                    <span className="text-muted  tx-11">2 days ago</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem
                 
                  className=" list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Shipping
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      1,367
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success"> 06%</span> last month
                    </span>
                    <span className="text-muted  tx-11">1 days ago</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem
                 
                  className="list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Receiving
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      678
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-down text-danger me-1"></i>
                      <span className="text-danger"> 25%</span> last month
                    </span>
                    <span className="text-muted  tx-11">10 days ago</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem
                 
                  className=" list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Review
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      578
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success"> 55%</span> last month
                    </span>
                    <span className="text-muted  tx-11">11 days ago</span>
                  </div>
                </ListGroupItem>
                <ListGroupItem
                 
                  className=" list-group-item-action flex-column align-items-start border-bottom-0  border-start-0 border-end-0 border-top"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <p className="tx-13 mb-2 font-weight-semibold text-dark">
                      Profit
                    </p>
                    <h4 className="text-dark mb-0 font-weight-semibold text-dark tx-18">
                      $27,215
                    </h4>
                  </div>
                  <div className="d-flex w-100 justify-content-between">
                    <span className="text-muted  tx-12">
                      <i className="fa fa-caret-up text-success me-1"></i>
                      <span className="text-success"> 32%</span> last month
                    </span>
                    <span className="text-muted  tx-11">11 days ago</span>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <!-- row --> */}
      <Row className=" row-sm">
        <Col md={12} lg={12} xl={3}>
          <Card>
            <Card.Header className=" bg-transparent pb-0">
              <div>
                <h3 className="card-title mb-2">Timeline</h3>
              </div>
            </Card.Header>
            <Card.Body className=" mt-0">
              <div className="latest-timeline mt-4">
                <ul className="timeline mb-0">
                  <li>
                    <div className="featured_icon1"></div>
                  </li>
                  <li className="mt-0 activity border br-5 p-2">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        23 Sep, 2021
                      </span>
                    </div>
                    <Link to="#" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Anita Letterback
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .{" "}
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon1"></div>
                  </li>
                  <li className="mt-0 activity border br-5 p-2">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        16 Aug, 2021
                      </span>
                    </div>
                    <Link to="#" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Paddy O'Furniture
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .{" "}
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon1"></div>
                  </li>
                  <li className="mt-0 activity border br-5 p-2">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        23 Feb, 2021
                      </span>
                    </div>
                    <Link to="#" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark">
                        Olive Yew
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .{" "}
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon1"></div>
                  </li>
                  <li className="mt-0 activity border br-5 p-2">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        21 june, 2021
                      </span>
                    </div>
                    <Link to="#" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Maureen Biologist
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt.{" "}
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon1"></div>
                  </li>
                  <li className="mt-0 activity border br-5 p-2">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        04 Aug, 2021
                      </span>
                    </div>
                    <Link to="#" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Peg Legge
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .{" "}
                    </p>
                  </li>
                  <li>
                    <div className="featured_icon1"></div>
                  </li>
                  <li className="mt-0 activity border br-5 p-2 mb-3">
                    <div>
                      <span className="tx-11 text-muted float-end">
                        01 Jan, 2022
                      </span>
                    </div>
                    <Link to="#" className="tx-12 text-dark">
                      <p className="mb-1 font-weight-semibold text-dark tx-13">
                        Neetato
                      </p>
                    </Link>
                    <p className="text-muted mt-0 mb-0 tx-12">
                      Lorem ipsum dolor tempor incididunt .{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={3}>
          <Card>
            <Card.Header className=" pb-2">
              <h3 className="card-title mb-2">MAIN TASKS</h3>
            </Card.Header>
            <Card.Body className=" p-0 customers mt-1">
              <div className="">
                <label className="p-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">
                    accurate information at any given point.
                  </span>
                  <span className="ms-auto">
                    <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                      Today
                    </span>
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">
                    sharing the information with clients or stakeholders.
                  </span>
                  <span className="ms-auto">
                    <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                      Today
                    </span>
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">
                    Hearing the information and responding .
                  </span>
                  <span className="ms-auto">
                    <span className="badge badge-primary-transparent font-weight-semibold px-2 py-1 tx-11 me-2 float-end">
                      22 hrs
                    </span>
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">
                    Setting up and customizing your own sales.
                  </span>
                  <span className="ms-auto">
                    {" "}
                    <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                      1 Day
                    </span>
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">
                    To have a complete 360° overview of sales information,
                    having.
                  </span>
                  <span className="ms-auto">
                    {" "}
                    <span className="badge badge-light-transparent font-weight-semibold px-2 py-1 tx-11 me-2">
                      2 Days
                    </span>
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">New Admin Launched.</span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto mb-4">
                    To maximize profits and improve productivity.
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input defaultChecked type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto mb-4">
                    Increase work state.
                  </span>
                </label>
                <label className="p-2 mt-2 d-flex">
                  <span className="check-box mb-0 ms-2">
                    <span className="ckbox">
                      <input type="checkbox" />
                      <span></span>
                    </span>
                  </span>
                  <span className="mx-3 my-auto">
                    Setting up and customizing your own sales.
                  </span>
                </label>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={12} xl={3}>
          <Card>
            <Card.Header className=" pb-3">
              <h3 className="card-title mb-2">SALES ACTIVITY</h3>
            </Card.Header>
            <Card.Body className=" p-0 customers mt-1">
              <div className="country-card pt-0">
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">India</span>
                    <div className="ms-auto">
                      <span className="text-danger mx-1">
                        <i className="fe fe-trending-down"></i>
                      </span>
                      <span className="number-font">$32,879</span> (65%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: 60 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex mb-1">
                    <span className="tx-13 font-weight-semibold">Russia</span>
                    <div className="ms-auto">
                      <span className="text-info mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$22,710</span> (55%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: 50 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Canada</span>
                    <div className="ms-auto">
                      <span className="text-danger mx-1">
                        <i className="fe fe-trending-down"></i>
                      </span>
                      <span className="number-font">$56,291</span> (69%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-secondary"
                      style={{ width: 80 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Brazil</span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$34,209</span> (60%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: 60 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">
                      United States
                    </span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$45,870</span> (86%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: 80 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Germany</span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$67,357</span> (73%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: 70 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">Italy</span>
                    <div className="ms-auto">
                      <span className="text-success mx-1">
                        <i className="fe fe-trending-up"></i>
                      </span>
                      <span className="number-font">$43,537</span> (73%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-orange"
                      style={{ width: 55 }}
                    ></div>
                  </div>
                </div>
                <div className="mb-0">
                  <div className="d-flex">
                    <span className="tx-13 font-weight-semibold">U.A.E</span>
                    <div className="ms-auto">
                      <span className="text-danger mx-1">
                        <i className="fe fe-trending-down"></i>
                      </span>
                      <span className="number-font">$56,291</span> (69%)
                    </div>
                  </div>
                  <div className="progress ht-5 br-5 mt-2">
                    <div
                      className="progress-bar bg-purpple"
                      style={{ width: 80 }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={3}>
          <Card>
            <Card.Header className=" pb-0">
              <h3 className="card-title mb-2">Weekly Visitors</h3>
            </Card.Header>
            <Card.Body className=" pb-0">
              <Row className=" mb-5">
                <Col xxl={6} xl={6} className="col-6">
                  <div className="text-muted tx-12 text-center mb-2">
                    Average Male Visitors
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3 tx-26 font-weight-semibold">
                      2,132
                    </span>
                    <span className="text-success font-weight-semibold">
                      <i className="fa fa-caret-up me-2"></i>0.23%
                    </span>
                  </div>
                </Col>
                <Col xxl={6} xl={6}  className="col-6">
                  <div className="text-muted tx-12 text-center mb-2">
                    Average Female Visitors
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3 tx-26 font-weight-semibold">
                      1,053
                    </span>
                    <span className="text-danger font-weight-semibold">
                      <i className="fa fa-caret-down me-2"></i>0.11%
                    </span>
                  </div>
                </Col>
              </Row>
              <div id="Viewers2"><Dashboard3data.Viewers3 /></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row  --> */}
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Product Summary</h4>
            </Card.Header>
            <Card.Body className=" pt-0">
              <div className="table-responsive">
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
      <table
        {...getTableProps()}
        className="table table-bordered text-nowrap mb-0"
      >
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
              <tr className="text-center" {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>
  );
};

Dashboard3.propTypes = {};

Dashboard3.defaultProps = {};

export default Dashboard3;
