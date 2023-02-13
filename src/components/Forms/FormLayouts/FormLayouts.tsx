import React from 'react';
import { Breadcrumb, Button, Card, Col, Dropdown, Form, FormGroup, Row, Modal } from 'react-bootstrap';
import { Optioncategory1, OptionYear } from "./data"
import { Link } from "react-router-dom";
import Select from 'react-select';

const FormLayouts = () => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  //year
  const [Year, setYear] = React.useState("");

  const handleOnchangeYear = () => {
    setYear(Year);
  };
  //year
  //Month
  const [value, setvalue] = React.useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  //Month
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            FORM LAYOUTS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Form Layouts
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Horizontal Alignment
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="pd-30 pd-sm-20">
                <Row className="row-xs">
                  <Col md={5}>
                    <Form.Control

                      placeholder="Enter your username"
                      type="text"
                    />
                  </Col>
                  <Col md={5} className=" mg-t-10 mg-md-t-0">
                    <Form.Control

                      placeholder="Enter your password"
                      type="password"
                    />
                  </Col>
                  <div className="col-md mg-t-10 mg-md-t-0">
                    <Button variant="" className="btn btn-primary btn-block">
                      Sign In
                    </Button>
                  </div>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Vertical Alignment</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <Row>
                <Col lg={12}>
                  <div className=" p-2">
                    <FormGroup className="form-group">
                      <Form.Control

                        placeholder="Enter your username"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <Form.Control

                        placeholder="Enter your password"
                        type="password"
                      />
                    </FormGroup>
                    <Button variant="" className="btn btn-primary pd-x-20">
                      Sign In
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={6} md={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div className="main-content-label mg-b-5">Basic Example</div>
              <p className="mg-b-20">A form control layout using basic layout.</p>
              <div className="d-flex flex-column pd-30 pd-sm-20">
                <FormGroup className="form-group">
                  <Form.Control

                    placeholder="Enter your username"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Control

                    placeholder="Enter Your Email"
                    type="email"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Control

                    placeholder="Enter Your Password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="ckbox">
                    <Form.Control type="checkbox" />
                    <span className="tx-13">I agree terms and conditions</span>
                  </Form.Label>
                </FormGroup>
                <Button variant="" className="btn ripple btn-primary">
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Left Label Alignment
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="pd-30 pd-sm-20">
                <Row className="row-xs align-items-center mg-b-20">
                  <Col md={4}>
                    <Form.Label className="form-label mg-b-0">
                      Firstname
                    </Form.Label>
                  </Col>
                  <Col md={8} className=" mg-t-5 mg-md-t-0">
                    <Form.Control

                      placeholder="Enter your firstname"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="row-xs align-items-center mg-b-20">
                  <Col md={4}>
                    <Form.Label className="form-label mg-b-0">
                      Lastnane
                    </Form.Label>
                  </Col>
                  <Col md={8} className=" mg-t-5 mg-md-t-0">
                    <Form.Control

                      placeholder="Enter your lastname"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row className="row-xs align-items-center mg-b-20">
                  <Col md={4}>
                    <Form.Label className="form-label mg-b-0">Email</Form.Label>
                  </Col>
                  <Col md={8} className=" mg-t-5 mg-md-t-0">
                    <Form.Control

                      placeholder="Enter your email"
                      type="email"
                    />
                  </Col>
                </Row>
                <Button
                  variant=""
                  className="btn btn-primary pd-x-30 mg-r-5 mg-t-5"
                >
                  Register
                </Button>
                <Button variant="" className="btn btn-secondary  mg-r-5 pd-x-30 mg-t-5">
                  Cancel
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Form Group Wrapper</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="">
                <Row className="row-xs formgroup-wrapper">
                  <Col md={6}>
                    <FormGroup className="main-form-group">
                      <Form.Label className="form-label">Email</Form.Label>{" "}
                      <Form.Control

                        placeholder="Enter your email"
                        type="email"
                        defaultValue="me@sprukotechnologies.com"
                      />
                    </FormGroup>
                    {/* <!-- main-form-group --> */}
                  </Col>
                  <Col md={6} className=" mg-t-20 mg-md-t-0">
                    <FormGroup className="main-form-group">
                      <Form.Label className="form-label">Password</Form.Label>{" "}
                      <Form.Control

                        placeholder="Enter your password"
                        type="password"
                        defaultValue="thisismypassword"
                      />
                    </FormGroup>
                    {/* <!-- main-form-group --> */}
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Form in Modal</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="">
                <>
                  <Button variant="primary" onClick={handleShow}>
                    View Live Demo
                  </Button>
                  <Modal show={show}>
                    <Modal.Body className="modal-body pd-sm-40">
                      <Button
                        onClick={() => setShow(false)}
                        className="close pos-absolute t-15 r-20 tx-26"
                        variant=""
                      >
                        x
                      </Button>
                      <h5 className="modal-title mg-b-5">Create New Account</h5>
                      <p className="mg-b-20">
                        Let's get you all setup so you can begin using our app.
                      </p>
                      <FormGroup className="form-group">
                        <Form.Control placeholder="Firstname" type="text" />
                      </FormGroup>
                      <FormGroup className="form-group">
                        <Form.Control placeholder="Lastname" type="text" />
                      </FormGroup>
                      <FormGroup className="form-group">
                        <Form.Control placeholder="Phone" type="text" />
                      </FormGroup>
                      <FormGroup className="form-group">
                        <Form.Control placeholder="Email" type="text" />
                      </FormGroup>
                      <FormGroup className="form-group mg-b-25">
                        <Form.Label className="ckbox mg-b-5">
                          <input type="checkbox" />
                          <span className="tx-13">
                            I agree to <Link to="#">Terms</Link> and{" "}
                            <Link to="#">Privacy Policy</Link>
                          </span>
                        </Form.Label>{" "}
                        <Form.Label className="ckbox">
                          <input defaultChecked type="checkbox" />
                          <span className="tx-13">
                            Yes, I want to receive email from your newsletter.
                          </span>
                        </Form.Label>
                      </FormGroup>
                      <Button
                        variant=""
                        className="btn btn-primary btn-block"
                        onClick={() => setShow(false)}
                      >
                        Continue
                      </Button>
                    </Modal.Body>
                  </Modal>
                </>

              </div>
              {/* <!-- pd-y-30 --> */}

            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Form in Dropdown</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>

              <Dropdown className="main-dropdown-form-demo">
                <div className="mg-t-20">
                  <Dropdown.Toggle
                    variant=""
                    className="btn btn-primary pd-x-20"
                    data-bs-toggle="dropdown"
                  >
                    Live Example{" "}
                    <i className="icon ion-ios-arrow-down mg-l-5 tx-12"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu">
                    <h6 className="dropdown-title">Subscribe</h6>
                    <p className="mg-b-20">Don't miss any update from us.</p>
                    <FormGroup className="form-group">
                      <Form.Control

                        placeholder="Enter your fullname"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <Form.Control

                        placeholder="Enter your email"
                        type="email"
                      />
                    </FormGroup>
                    <Button variant="" className="btn btn-primary btn-block">
                      Subscribe
                    </Button>
                  </Dropdown.Menu>
                </div>
              </Dropdown>
              {/* <!-- main-dropdown-demo --> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Payment Details</div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <Row>
                <Col md={10} lg={8} xl={6} className="mx-auto d-block">
                  <Card.Body className="card pd-20 pd-md-40 border shadow-none">
                    <h5 className="card-title mg-b-20">Your Payment Details</h5>
                    <FormGroup className="form-group">
                      <Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">
                        Name on Card
                      </Form.Label>{" "}
                      <Form.Control

                        required
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">
                        Card Number
                      </Form.Label>
                      <div className="pos-relative">
                        <Form.Control
                          className="form-control pd-r-80"
                          required
                          type="text"
                        />
                        <div className="d-flex pos-absolute t-5 r-10">
                          <img
                            alt=""
                            className="wd-30 mg-r-5"
                            src={require("../../../assets/img/visa.png")}
                          />{" "}
                          <img
                            alt=""
                            className="wd-30"
                            src={require("../../../assets/img/mastercard.png")}
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup className="form-group">
                      <Row className="row-sm">
                        <Col sm={9}>
                          <Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">
                            Expiration Date
                          </Form.Label>
                          <Row className="row-sm">
                            <Col sm={7}>

                              <Select
                                onChange={handleOnchange}
                                options={Optioncategory1}
                                classNamePrefix="selectproduct"
                                isSearchable
                                placeholder="--Select--"
                              />
                            </Col>
                            <Col sm={5} className="mg-t-10 mg-sm-t-0">

                              <Select
                                onChange={handleOnchangeYear}
                                options={OptionYear}
                                classNamePrefix="selectproduct"
                                isSearchable
                                placeholder="--Select--"
                              />

                            </Col>
                          </Row>
                        </Col>
                        <Col sm={3} className="mg-t-20 mg-sm-t-0">
                          <Form.Label className="main-content-label tx-11 tx-medium tx-gray-600">
                            CVC
                          </Form.Label>{" "}
                          <Form.Control

                            required
                            type="text"
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup className="form-group mg-b-20">
                      <label className="ckbox">
                        <input defaultChecked type="checkbox" />
                        <span className="tx-13">
                          Save my card for future purchases
                        </span>
                      </label>
                    </FormGroup>
                    <Button variant="" className="btn btn-primary btn-block">
                      Complete Payment
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>
  );
}
FormLayouts.propTypes = {};

FormLayouts.defaultProps = {};

export default FormLayouts;
