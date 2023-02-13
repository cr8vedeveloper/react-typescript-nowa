import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Switcherdatacustam from "../../../../data/Switcherdata/Switcherdatacustam";
const ForgotPassword = () => (
  <div >
    <div className="cover-image">
      <div className="page">
        <Row>
          <div className="d-flex">
            <Link
              className="demo-icon new nav-link"
              to="#"
              onClick={() => Switcherdatacustam.Swichermainright()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="header-icon-svgs fa-spin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
              </svg>
            </Link>
          </div>
        </Row>
        <div
          className="page-single"
          onClick={() => Switcherdatacustam.Swichermainrightremove()}
        >
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className=" card-sigin-main py-4 justify-content-center mx-auto"
              >
                <div className="card-sigin">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="mb-3 d-flex">
                        {" "}
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`}>
                          <img
                            src={require("../../../../assets/img/brand/favicon.png")}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="main-card-signin d-md-flex bg-white">
                        <div className="wd-100p">
                          <div className="main-signin-header">
                            <h2>Forgot Password!</h2>
                            <h4>Please Enter Your Email</h4>
                            <Form action="#">
                              <div className="form-group">
                                <Form.Label>Email</Form.Label>{" "}
                                <Form.Control
                                  className="form-control"
                                  placeholder="Enter your email"
                                  type="text"
                                />
                              </div>
                              <Button
                                variant=""
                                className="btn btn-primary btn-block"
                              >
                                Send
                              </Button>
                            </Form>
                          </div>
                          <div className="main-signup-footer mg-t-20 text-center">
                            <p>
                              Forget it, <Link to="#"> Send me back</Link> to the
                              sign in screen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ForgotPassword.propTypes = {};

ForgotPassword.defaultProps = {};

export default ForgotPassword;
