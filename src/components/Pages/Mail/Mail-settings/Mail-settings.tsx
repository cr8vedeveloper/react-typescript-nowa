import React from "react";
import Select from 'react-select';
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  Nav,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { OptionLanguage, OptionTimezone } from "./data"
const Mailsettings = () => {

  const [Timezone, setTimezone] = React.useState<any>("");
  const [Language, setLanguage] = React.useState<any>("");

  const handleOnchangeTimezone = () => {
    setTimezone(Timezone);
  };


  const handleOnchangeLanguage = () => {
    setLanguage(Language);
  };
  return (
    <div>
      <div className="main-container container-fluid">
        {/* <!-- breadcrumb --> */}
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <span className="main-content-title mg-b-0 mg-b-lg-1">
              MAIL SETTINGS
            </span>
          </div>
          <div className="justify-content-center mt-2">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
                Mail
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className="breadcrumb-item "
                active
                aria-current="page"
              >
                Mail-settings
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* <!-- /breadcrumb --> */}
        {/* <!-- row --> */}
        <Row className="row-sm">
          {/* <!-- Col --> */}
          <Col lg={4} xl={3} md={12} sm={12}>
            <Card className=" mg-b-20">
              <Card.Body className="main-content-left main-content-left-mail ">
                <Button className="btn btn-primary btn-compose" id="btnCompose">
                  Email Settings
                </Button>
                <div className="main-mail-menu">
                  <Nav
                    className="nav main-nav-column mg-b-20"
                    defaultActiveKey="Inbox"
                  >
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Inbox">
                        <i className="far fa-envelope"></i> Inbox <span>18</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Starred">
                        <i className="far fa-star"></i> Starred<span>8</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Snoozed">
                        <i className="far fa-clock"></i> Snoozed <span>6</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Important">
                        <i className="far fa-bookmark"></i> Important{" "}
                        <span>15</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Sent">
                        <i className="far fa-paper-plane"></i> Sent Mail{" "}
                        <span>24</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Drafts">
                        <i className="far fa-hourglass"></i> Drafts <span>2</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Spam">
                        <i className="far fa-dot-circle"></i> Spam <span>32</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Chats">
                        <i className="far fa-comments"></i> Chats <span>14</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Contacts">
                        <i className="far fa-user-circle"></i> Contacts{" "}
                        <span>547</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="nav-link thumb" eventKey="Trash">
                        <i className="fe fe-trash"></i> Trash <span>365</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Form.Label className="main-content-label main-content-label-sm">
                    Settings
                  </Form.Label>
                  <Nav className="nav main-nav-column" defaultActiveKey="Email">
                    <Nav.Item>
                      <Nav.Link className="nav-link" eventKey="Email">
                        Email Settings
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                {/* <!-- main-mail-menu --> */}
              </Card.Body>
            </Card>
          </Col>
          {/* <!-- /Col --> */}

          {/* <!-- Col --> */}
          <Col lg={8} xl={9}>
            <Card>
              <Card.Body>
                <Form className="form-horizontal">
                  <div className="mb-4 main-content-label">Account</div>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className="">
                        <Form.Label className="form-label">User Name</Form.Label>
                      </Col>
                      <Col md={9}>
                        <Form.Control
                          type="text"
                          placeholder="User Name"
                          defaultValue="Petey"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className="">
                        <Form.Label className="form-label">Email</Form.Label>
                      </Col>
                      <Col md={9}>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          defaultValue="info@Nowa.in"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className="">
                        <Form.Label className="form-label">Language</Form.Label>
                      </Col>
                      <Col md={9}>
                        <Select
                          onChange={handleOnchangeLanguage}
                          options={OptionLanguage}
                          placeholder="Us English"
                          classNamePrefix="selectproduct"
                          isSearchable

                        />

                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className="">
                        <Form.Label className="form-label">Timezone</Form.Label>
                      </Col>
                      <Col md={9}>
                        <Select
                          onChange={handleOnchangeTimezone}
                          options={OptionTimezone}
                          classNamePrefix="selectproduct"
                          isSearchable
                          placeholder="(GMT-11:00) Midway Island, Samoa"
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className=" col">
                        <Form.Label className="form-label">Verification</Form.Label>
                      </Col>
                      <Col md={9} className="col">
                        <Form.Label className="ckbox mg-b-10">
                          <input type="checkbox" />
                          <span>Email</span>
                        </Form.Label>
                        <Form.Label className="ckbox mg-b-10">
                          <input defaultChecked type="checkbox" />
                          <span>SMS</span>
                        </Form.Label>
                        <Form.Label className="ckbox mg-b-10">
                          <input type="checkbox" />
                          <span>Phone</span>
                        </Form.Label>
                      </Col>
                    </Row>
                  </FormGroup>
                  <div className="mb-4 main-content-label">
                    Secuirity Settings
                  </div>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className="">
                        <Form.Label className="form-label">Login Verification</Form.Label>
                      </Col>
                      <Col md={9}>
                        <Link className="" to="#">
                          Settup Verification
                        </Link>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className="">
                        <Form.Label className="form-label">
                          Password Verification
                        </Form.Label>
                      </Col>
                      <Col md={9}>
                        <Form.Label className="ckbox mg-b-10">
                          <input type="checkbox" />
                          <span>Require Personal Details</span>
                        </Form.Label>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="form-group ">
                    <Row>
                      <Col md={3} className=""></Col>
                      <Col md={9}>
                        <Link className="mg-r-20" to="#">
                          Deactivate Account
                        </Link>
                        <Link className="me-2" to="#">
                          Change Password
                        </Link>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Card.Body>
              <Card.Footer>
                <div className="float-end">
                  <Link to="#" className="btn btn-success">
                    Save Changes
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          {/* <!-- /Col --> */}

          {/* <!-- div --> */}
          <div className="main-mail-compose">
            <div>
              <div className="container-fluid">
                <div className="main-mail-compose-box">
                  <div className="main-mail-compose-header">
                    <span>New Message</span>
                    <Nav className="nav">
                      <Nav.Item>
                        <Nav.Link className="nav-link" >
                          <i className="fas fa-minus"></i>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="nav-link" >
                          <i className="fas fa-compress"></i>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="nav-link" >
                          <i className="fas fa-times"></i>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="main-mail-compose-body p-0">
                    <FormGroup className="form-group pd-10 mb-0">
                      <Form.Label className="form-label">To</Form.Label>
                      <div>
                        <Form.Control
                          className="form-control"
                          placeholder="Enter recipient's email address"
                          type="text"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-group pd-10 mb-0">
                      <Form.Label className="form-label">Subject</Form.Label>
                      <div>
                        <Form.Control className="form-control" type="text" />
                      </div>
                    </FormGroup>
                    <FormGroup className="form-group pd-10 mb-0">
                      <textarea
                        className="form-control"
                        placeholder="Write your message here..."
                        rows={8}
                      ></textarea>
                    </FormGroup>
                    <FormGroup className="form-group pd-10 mb-0">
                      <Nav className="nav">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip-2">
                              Add attachment
                            </Tooltip>
                          }
                        >
                          <i className="fas fa-paperclip nav-link"></i>
                        </OverlayTrigger>{" "}
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip-2">Add photo</Tooltip>
                          }
                        >
                          <i className="far fa-image"></i>
                        </OverlayTrigger>{" "}
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip-2">Add link</Tooltip>
                          }
                        >
                          <i className="fas fa-link"></i>
                        </OverlayTrigger>{" "}
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip-2">Emoticons</Tooltip>
                          }
                        >
                          <i className="far fa-smile"></i>
                        </OverlayTrigger>{" "}
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="button-tooltip-2">Discard</Tooltip>
                          }
                        >
                          <i className="far fa-trash-alt"></i>
                        </OverlayTrigger>
                      </Nav>
                      <Button className="btn btn-primary">Send</Button>
                    </FormGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /div --> */}
        </Row>
        {/* <!-- /row --> */}
      </div>
    </div>
  );
}

Mailsettings.propTypes = {};

Mailsettings.defaultProps = {};

export default Mailsettings;
