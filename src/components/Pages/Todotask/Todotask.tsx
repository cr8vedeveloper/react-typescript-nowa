import React from 'react';
import { Button,Card, Col, Row, Breadcrumb, Dropdown,OverlayTrigger,Tooltip, } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Tododata} from "./data"

const Todotask = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">TODO TASK</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Pages
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Todotask
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      {/* <!-- col --> */}
      <Col md={12} xl={3} lg={12}>
        <Card>
          <div className="list-group list-group-transparent mb-0 mail-inbox pb-3">
            <div className="mt-4 mb-4 mx-4 text-center">
              <Link to="#" className="btn btn-primary d-grid">
                Add New Task
              </Link>
            </div>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-codepen fs-18 me-4 p-2 border-primary brround bg-primary-transparent text-primary"></i>{" "}
              All Tasks
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-alert-octagon fs-18 me-4 p-2 border-warning brround bg-warning-transparent text-warning"></i>{" "}
              Important <span className="ms-auto badge bg-danger">6</span>
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0  "
            >
              <i className="fe fe-star fs-18 me-4 p-2 border-secondary brround bg-secondary-transparent text-secondary"></i>{" "}
              Starred
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-briefcase fs-18 me-4 p-2 border-info brround bg-info-transparent text-info"></i>{" "}
              Spam
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-0 "
            >
              <i className="fe fe-bell fs-18 me-4 p-2 border-success brround bg-success-transparent text-success"></i>{" "}
              Archive <span className="ms-auto badge bg-warning">4</span>
            </Link>
            <Link
              to="#"
              className="list-group-item  d-flex align-items-center border-bottom-0 border-0 "
            >
              <i className="fe fe-trash-2 fs-18 me-4 p-2 border-danger brround bg-danger-transparent text-danger"></i>{" "}
              Trash
            </Link>
          </div>
        </Card>
      </Col>
      <Col xl={9} md={12}>
        <Row className=" row-sm">
          {/* <!-- col --> */}
          <Col lg={12}>
            <Card className=" mg-b-20">
              <Card.Body className=" d-flex p-3">
                <div className="main-content-label mb-0 mg-t-8">
                  User Today Tasks
                </div>
                <div className="ms-auto">
                  <Link
                    className="d-block tx-20"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="Add New User"
                    to="#"
                  >
                    <i className="si si-plus text-muted"></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- /col --> */}
          {Tododata.map((playerData) => (
        <Col xl={4} md={6} key={playerData.id}>
          <Card className=" mg-b-20">
            <Card.Body className=" p-0">
              <div className="todo-widget-header d-flex pb-2 pd-20 border-bottom">
                <Dropdown >
                  <Dropdown.Toggle
                    as="a"
                    variant=""
                    className="drop-down-profile"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      alt=""
                      className="rounded-circle avatar avatar-md "
                      src={playerData.img}
                    />
                    <span className={`assigned-task bg-${playerData.color}`}>
                      {playerData.num}
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu tx-13">
                    <div className="main-header-profile">
                      <div className="tx-16 h5 mg-b-0">Teri Dactyl</div>
                      <span>Web Designer</span>
                    </div>
                    <Dropdown.Item className="dropdown-item" href="#">
                      View Total Tasks
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      Completed Tasks
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      Settings
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="ms-auto">
                  <div className="card-options-task">
                    <OverlayTrigger
                      placement="top"
                      
                      overlay={<Tooltip>Archive</Tooltip>}
                    >
                      <i
                      
                        className="p-2 border br-5 text-primary me-1 fe fe-folder-plus align-middle"
                      ></i>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      
                      overlay={<Tooltip>Move to spam</Tooltip>}
                    >
                      <i className="p-2 border br-5 text-primary me-1 fe fe-info align-middle"></i>
                    </OverlayTrigger>

                    <Dropdown as="span" className="me-1">
                      <Dropdown.Toggle
                        variant=""
                       
                        as="a"
                        className="p-2 border br-5 text-primary"
                      >
                        <i className="fe fe-more-vertical align-middle"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="tx-13 dropleft">
                        <Dropdown.Item href="#">Mark As Unread</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Mark As Important
                        </Dropdown.Item>
                        <Dropdown.Item href="#">Add to Tasks</Dropdown.Item>
                        <Dropdown.Item href="#">Add Star</Dropdown.Item>
                        <Dropdown.Item href="#">Move to</Dropdown.Item>
                        <Dropdown.Item href="#">Mute</Dropdown.Item>
                        <Dropdown.Item href="#">Move to Trash</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="tx-12 text-muted">{playerData.time}</span>
                <span
                  className={`badge bg-${playerData.bg} me-1 my-2  text-${playerData.bgcolor} ms-auto float-end`}
                >
                  {playerData.bgtext}
                </span>
                <h5 className="tx-14 mb-0 mg-t-5 text-capitalize">
                  {playerData.text}
                </h5>
              </div>
              <div className="p-4 border-top">
                <span className="tx-12 text-muted">{playerData.time}</span>
                <h5 className="tx-14 mb-0 mg-t-5 text-capitalize">
                  {playerData.text2}
                </h5>
              </div>
            </Card.Body>
            <Card.Footer>
              <Link className="btn btn-primary" to="#" title="Assign Task">
                Assign
              </Link>
              <OverlayTrigger
                placement="top"
                
                overlay={<Tooltip>View Task</Tooltip>}
              >
                <Button
                  variant=""
                  className="btn btn-outline-primary ms-auto float-end"
                >
                  {" "}
                  View All
                </Button>
              </OverlayTrigger>
            </Card.Footer>
          </Card>
        </Col>
      ))}
        </Row>
      </Col>
      {/* <!-- /col --> */}
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

Todotask.propTypes = {};

Todotask.defaultProps = {};

export default Todotask;
