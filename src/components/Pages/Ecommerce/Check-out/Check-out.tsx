import React, { useState } from "react";
import { Breadcrumb, Card, Col,  Row,Button,Form,FormGroup,Tab, Tabs } from 'react-bootstrap';
import classnames from "classnames";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Progress,
} from "reactstrap";
import { Link } from "react-router-dom";
const Checkout = () =>{ 
  const [activeTab, setactiveTab] = useState(1);
  const [progressbarvalue, setprogressbarvalue] = useState(0);
  const [passedSteps, setPassedSteps] = useState([1]);

  function toggleTab(tab:any, value:any) {
    if (activeTab !== tab) {
      var modifiedSteps:any = [...passedSteps, tab];

      if (tab >= 1 && tab <= 6) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }
  return (
  <div>
    <div className="main-container container-fluid">
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">CHECKOUT</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              ECommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Checkout
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col xl={12} className="px-0">
          <Card className="custom-card">
            <Card.Header className="bg-transparent border-bottom-0">
              <div>
                <label className="main-content-label mb-2">Checkout</label>{" "}
                <span className="d-block tx-12 mb-0 text-muted">
                  The Project Budget is a tool used by project managers to
                  estimate the total cost of a project
                </span>
              </div>
            </Card.Header>
            <Card.Body className="mx-auto">
              
              <div className="checkout-steps wrapper">
                <div id="checkoutsteps">
                <Card>
        <Card.Header>
          <h4 className="card-title mb-0">Progress Nav Steps</h4>
        </Card.Header>
        <Card.Body className="form-steps checkout">
          <span >
            <div className="progress-nav mb-4">
              <Progress
                as=""
                value={progressbarvalue}
                style={{ height: "4px" }}
              />
              <Nav
                className="nav-pills progress-bar-tab custom-nav"
                role="tablist"
              >
                <NavItem className="wd25p">
                  <NavLink
                    to="#"
                    className={classnames({
                      active: activeTab === 1,
                      done: activeTab <= 6 && activeTab >= 0,
                    })}
                    onClick={() => {
                      toggleTab(1, 0);
                    }}
                  >
                    <i>
                      <span className="number">1</span>
                    </i>
                  </NavLink>
                </NavItem>
                <NavItem className="wd25p">
                  <NavLink
                    to="#"
                    className={classnames({
                      active: activeTab === 2,
                      done: activeTab <= 6 && activeTab > 1,
                    })}
                    onClick={() => {
                      toggleTab(2, 25);
                    }}
                  >
                    <i>
                      <span className="number">2</span>
                    </i>
                  </NavLink>
                </NavItem>
                <NavItem className="wd25p">
                  <NavLink
                    to="#"
                    className={classnames({
                      active: activeTab === 3,
                      done: activeTab <= 6 && activeTab > 2,
                    })}
                    onClick={() => {
                      toggleTab(3, 50);
                    }}
                  >
                    <i>
                      <span className="number">3</span>
                    </i>
                  </NavLink>
                </NavItem>
                <NavItem className="wd25p">
                  <NavLink
                    to="#"
                    className={classnames({
                      active: activeTab === 4,
                      done: activeTab <= 6 && activeTab > 3,
                    })}
                    onClick={() => {
                      toggleTab(4, 75);
                    }}
                  >
                    <i>
                      <span className="number">4</span>
                    </i>
                  </NavLink>
                </NavItem>
                <NavItem className="wd25">
                  <NavLink
                    to="#"
                    className={classnames({
                      active: activeTab === 5,
                      done: activeTab <= 6 && activeTab > 4,
                    })}
                    onClick={() => {
                      toggleTab(5, 100);
                    }}
                  >
                    <i>
                      <span className="number">5</span>
                    </i>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}>
                <h4>Signin</h4>
                <section>
                  <Form>
                    <h5 className="text-start mb-2">Signin to Your Account</h5>
                    <p className="mb-4 text-muted tx-13 ms-0 text-start">
                      Signin to create, discover and connect with the global
                      community
                    </p>
                    <FormGroup className="form-group text-start">
                      <label>Email</label>
                      <input
                        className="form-control"
                        placeholder="Enter your email"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup className="form-group text-start">
                      <label>Password</label>
                      <input
                        className="form-control"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </FormGroup>
                    <Button
                      variant=""
                      className="btn ripple btn-primary btn-block"
                    >
                      Sign In
                    </Button>
                  </Form>
                </section>
                <div className="d-flex align-items-start gap-3 mt-4">
                  <Button
                    variant=""
                    type="button"
                    disabled
                    style={{ background: "#949eb7", color: "#fff" }}
                    onClick={() => {
                      toggleTab(activeTab - 1, 0);
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary ms-auto"
                    onClick={() => {
                      toggleTab(activeTab + 1, 25);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </TabPane>

              <TabPane tabId={2}>
                <h4>Billing</h4>
                <section>
                  <Form className="needs-validation" noValidate>
                    <h5 className="text-start mb-2">Billing Information</h5>
                    <p className="mb-4 text-muted tx-13 ms-0 text-start">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since
                    </p>
                    <Row>
                      <Col md={6} className=" mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          defaultValue=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </Col>
                      <Col md={6} className=" mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          defaultValue=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </Col>
                    </Row>
                    <div className="mb-3">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address2">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mobile">Mobile Number</label>
                      <input type="text" className="form-control" id="mobile" />
                    </div>
                    <Row>
                      <Col md={5} className="mb-3">
                        <label htmlFor="country">Country</label>
                        <select
                          className="custom-select d-block w-100"
                          id="country"
                          required
                        >
                          <option defaultValue="">Choose...</option>
                          <option>United States</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </Col>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select
                          className="custom-select d-block w-100"
                          id="state"
                          required
                        >
                          <option defaultValue="">Choose...</option>
                          <option>California</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </Row>
                    <hr className="mb-4" />
                    <Button
                      variant=""
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Continue to checkout
                    </Button>
                  </Form>
                </section>
                <div className="d-flex align-items-start gap-3 mt-4">
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      toggleTab(activeTab - 1, 0);
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success ms-auto"
                    onClick={() => {
                      toggleTab(activeTab + 1, 50);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </TabPane>

              <TabPane tabId={3}>
                <h4>Order</h4>
                <section>
                  <h5 className="text-start mb-2">Your Order</h5>
                  <p className="mb-4 text-muted tx-13 ms-0 text-start">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since
                  </p>
                  <div className="product checkoutstepss">
                    <div className="item flex-wrap">
                      <div className="left">
                        {" "}
                        <Link to="#" className="thumb radius">
                          {" "}
                          <img
                            src={require("../../../../assets/img/ecommerce/09.jpg")}
                            alt=""
                            className="radius"
                          />{" "}
                        </Link>
                        <div className="purchase">
                          <h6>
                            {" "}
                            <Link to="#">Flowerpot</Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap  mt-2">
                            <div className="mt-2 product-title tx-12 me-2">
                              Quantity:
                            </div>
                            <div className="handle-counter" id="handleCounter1">
                              <Button
                                variant=""
                                className="counter-minus btn btn-outline-light border"
                              >
                                <i className="fe fe-minus"></i>
                              </Button>
                              <input
                                type="text"
                                defaultValue="2"
                                className="qty"
                              />
                              <Button
                                variant=""
                                className="counter-plus btn btn-outline-light border"
                              >
                                <i className="fe fe-plus"></i>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <span className="price tx-20">$290</span>
                    </div>
                    <div className="item flex-wrap">
                      <div className="left">
                        {" "}
                        <Link to="#" className="thumb radius">
                          {" "}
                          <img
                            src={require("../../../../assets/img/ecommerce/03.jpg")}
                            alt=""
                            className="radius"
                          />{" "}
                        </Link>
                        <div className="purchase">
                          <h6>
                            {" "}
                            <Link to="#">white chair</Link>{" "}
                          </h6>
                          <div className="d-flex flex-wrap mt-2">
                            <div className="mt-2 product-title tx-12 me-2">
                              Quantity:
                            </div>
                            <div className="handle-counter" id="handleCounter2">
                              <Button
                                variant=""
                                className="counter-minus btn btn-outline-light border"
                              >
                                <i className="fe fe-minus"></i>
                              </Button>
                              <input
                                type="text"
                                defaultValue="2"
                                className="qty"
                              />
                              <Button
                                variant=""
                                className="counter-plus btn btn-outline-light border"
                              >
                                <i className="fe fe-plus"></i>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <span className="price tx-20">$124</span>
                    </div>
                  </div>
                  <div className="checkout">
                    <div className="subtotal">
                      {" "}
                      <span className="heading">Subtotal</span>{" "}
                      <span className="total tx-20 font-weight-bold">$364</span>{" "}
                    </div>
                  </div>
                </section>
                <div className="d-flex align-items-start mt-4">
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      toggleTab(activeTab - 1, 25);
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success ms-auto"
                    onClick={() => {
                      toggleTab(activeTab + 1, 75);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </TabPane>
              <TabPane tabId={4}>
                <h4>Payments</h4>
                <section>
                  <div className="">
                    <h5 className="text-start mb-2">Payments</h5>
                    <p className="mb-4 text-muted tx-13 ms-0 text-start">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since
                    </p>
                  </div>
                  <div className="card-pay">
                    <Tabs
                      defaultActiveKey="CreditCard"
                      id="uncontrolled-tab-example"
                      className="tabs-menu"
                    >
                      <Tab eventKey="CreditCard" title="Credit Card">
                        
                        <div className="tab-pane show" id="tab20">
                          <div
                            className="bg-danger-transparent-2 text-danger py-3 br-3 mb-4"
                            role="alert"
                          >
                            Please Enter Valid Details
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              CardHolder Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">Card number</label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search for..."
                              />
                              <span className="input-group-append">
                                <Button
                                  variant=""
                                  className="btn btn-primary box-shadow-0"
                                  type="button"
                                >
                                  <i className="fab fa-cc-visa"></i> &nbsp;{" "}
                                  <i className="fab fa-cc-amex"></i> &nbsp;
                                  <i className="fab fa-cc-mastercard"></i>
                                </Button>
                              </span>
                            </div>
                          </div>
                          <Row>
                            <div className="col-sm-8">
                              <div className="form-group">
                                <label className="form-label">Expiration</label>
                                <div className="input-group">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="MM"
                                    name="Month"
                                  />
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="YY"
                                    name="Year"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="form-group">
                                <label className="form-label">
                                  CVV <i className="fa fa-question-circle"></i>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                          </Row>
                        </div>
                      </Tab>
                      <Tab eventKey="Paypal" title="Paypal">
                      <div className="tab-pane" id="tab21">
                          <p className="mt-4">
                            Paypal is easiest way to pay online
                          </p>
                          <p>
                            <Link to="#" className="btn btn-primary">
                              <i className="fab fa-paypal"></i> Log in my Paypal
                            </Link>
                          </p>
                          <p className="mb-0 wd-sm-500">
                            <strong>Note:</strong> Nemo enim ipsam voluptatem
                            quia voluptas sit aspernatur aut odit aut fugit, sed
                            quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.{" "}
                          </p>
                        </div>
                      </Tab>
                      <Tab eventKey="BankTransfer" title="Bank Transfer">
                        <div className="tab-pane" id="tab22">
                          <p className="mt-4">Bank account details</p>
                          <dl className="card-text">
                            <dt>BANK: </dt>
                            <dd> THE UNION BANK 0456</dd>
                          </dl>
                          <dl className="card-text">
                            <dt>Account number: </dt>
                            <dd> 67542897653214</dd>
                          </dl>
                          <dl className="card-text">
                            <dt>IBAN: </dt>
                            <dd>543218769</dd>
                          </dl>
                          <p className="mb-0 wd-sm-500">
                            <strong>Note:</strong> Nemo enim ipsam voluptatem
                            quia voluptas sit aspernatur aut odit aut fugit, sed
                            quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.{" "}
                          </p>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </section>
                <div className="d-flex align-items-start gap-3 mt-4">
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      toggleTab(activeTab - 1, 50);
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success ms-auto"
                    onClick={() => {
                      toggleTab(activeTab + 1, 100);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </TabPane>
              <TabPane tabId={5}>
                <h4>Finished</h4>
                <section className="text-center">
                  <div className="">
                    <h5 className="text-center mb-4">Your order Confirmed!</h5>
                  </div>
                  <svg
                    className="wd-100 ht-100 mx-auto justify-content-center mb-3 text-center"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 130.2 130.2"
                  >
                    <circle
                      className="path circle"
                      fill="none"
                      stroke="#22c03c"
                      strokeWidth="6"
                      strokeMiterlimit="10"
                      cx="65.1"
                      cy="65.1"
                      r="62.1"
                    />
                    <polyline
                      className="path check"
                      fill="none"
                      stroke="#22c03c"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="100.2,40.2 51.5,88.8 29.8,67.5 "
                    />
                  </svg>
                  <p className="success pl-5 pr-5 wd-sm-500">
                    Order placed successfully. Your order will be dispacted
                    soon. meanwhile you can track your order in my order
                    section.
                  </p>
                </section>
                <div className="d-flex align-items-start gap-3 mt-4">
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      toggleTab(activeTab - 1, 75);
                    }}
                  >
                    Previous
                  </Button>
                </div>
              </TabPane>
            </TabContent>
          </span>
        </Card.Body>
      </Card>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  </div>
)
  }

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
