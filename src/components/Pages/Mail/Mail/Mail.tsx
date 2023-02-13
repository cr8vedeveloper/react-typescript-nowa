import React from "react";
import { Breadcrumb, Nav, Button, Row, Col, Dropdown, Pagination,Card, FormGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mail = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">MAIL</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Mail
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item"
            active
            aria-current="page"
          >
            Mail
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className=" row-sm main-content-mail">
      <Col lg={4} xl={3} md={12}>
        <Card className=" mg-b-20">
          <Card.Body className="main-content-left main-content-left-mail card-body">
            <Button
              variant=""
              className="btn btn-primary btn-compose"
              id="btnCompose"
            >
              Compose
            </Button>
            <div className="main-mail-menu">
              <Nav
                className="nav main-nav-column mg-b-20"
                defaultActiveKey="Inbox"
              >
                <Nav.Item>
                  <Nav.Link className="nav-link thumb " eventKey="Inbox">
                    <i className="far fa-envelope"></i> Inbox <span>20</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Important">
                    <i className="far fa-bookmark"></i> Important{" "}
                    <span>10</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Sent">
                    <i className="far fa-paper-plane"></i> Sent Mail{" "}
                    <span>8</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Drafts">
                    <i className="far fa-hourglass"></i> Drafts <span>15</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Trash">
                    <i className="fe fe-trash"></i> Trash <span>6</span>
                  </Nav.Link>
                </Nav.Item>

                <label className="main-content-label main-content-label-sm mailnav ms-3">
                  Label
                </label>

                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Social">
                    <i className="fab fa-instagram"></i> Social <span>10</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Promotions">
                    <i className="far fa-plus-square"></i> Promotions{" "}
                    <span>22</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Updates">
                    <i className="far fa-arrow-alt-circle-up"></i> Updates{" "}
                    <span>17</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            {/* <!-- main-mail-menu --> */}
          </Card.Body>
        </Card>
        <Card className=" mt-3">
          <Card.Body className="card-body">
            <label className="main-content-label">contacts</label>
            <nav className="nav main-nav-column">
              <div className="main-contact-item ps-0">
                <div className="main-img-user online">
                  <img
                    alt="avatar"
                    src={require("../../../../assets/img/faces/2.jpg")}
                  />
                </div>
                <div className="main-contact-body">
                  <h6>Abigail Johnson</h6>
                  <span className="phone">+1-234-567-890</span>
                </div>
              </div>
              <div className="main-contact-item ps-0">
                <div className="main-img-user online">
                  <img
                    alt="avatar"
                    src={require("../../../../assets/img/faces/1.jpg")}
                  />
                </div>
                <div className="main-contact-body">
                  <h6>Cherry Blossom</h6>
                  <span className="phone">+1-644-767-890</span>
                </div>
              </div>
              <div className="main-contact-item ps-0">
                <div className="main-img-user online">
                  <img
                    alt="avatar"
                    src={require("../../../../assets/img/faces/12.jpg")}
                  />
                </div>
                <div className="main-contact-body">
                  <h6>Liz Erd</h6>
                  <span className="phone">+1-634-577-890</span>
                </div>
              </div>
              <div className="main-contact-item ps-0">
                <div className="main-img-user online">
                  <img
                    alt="avatar"
                    src={require("../../../../assets/img/faces/11.jpg")}
                  />
                </div>
                <div className="main-contact-body">
                  <h6>Colin Sik</h6>
                  <span className="phone">+1-834-367-890</span>
                </div>
              </div>
              <div className="main-contact-item ps-0">
                <div className="main-img-user online">
                  <img
                    alt="avatar"
                    src={require("../../../../assets/img/faces/4.jpg")}
                  />
                </div>
                <div className="main-contact-body">
                  <h6>Rita Book</h6>
                  <span className="phone">+1-233-867-830</span>
                </div>
              </div>
              <div className="main-contact-item ps-0">
                <div className="main-img-user online">
                  <img
                    alt="avatar"
                    src={require("../../../../assets/img/faces/5.jpg")}
                  />
                </div>
                <div className="main-contact-body">
                  <h6>Col Fays</h6>
                  <span className="phone">+1-144-577-690</span>
                </div>
              </div>
            </nav>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={8} xl={9} md={12}>
        <Card>
          <Card.Body className="main-content-body main-content-body-mail card-body">
            <div className="mail-option">
              <div className="chk-all border-0">
                <div className="btn-group">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      href="#"
                      className="btn mini all border"
                      aria-expanded="false"
                    >
                      All
                      <i className="fe fe-chevron-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu"
                      style={{ margin: "0px" }}
                    >
                      <Dropdown.Item>None</Dropdown.Item>
                      <Dropdown.Item>Read</Dropdown.Item>
                      <Dropdown.Item>Unread</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="btn-group me-2">
                <Link to="#" className="btn mini tooltips">
                  <i className="fe fe-repeat"></i>
                </Link>
              </div>
              <div className="btn-group hidden-phone">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    data-bs-toggle="dropdown"
                    href="#"
                    className="btn mini blue border"
                    aria-expanded="false"
                  >
                    More
                    <i className="fe fe-chevron-down"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{ margin: "0px" }}
                    className="dropdown-menu"
                  >
                    <Dropdown.Item>
                      <i className="fe fe-edit me-2"></i> Mark as Read
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fe fe fe-slash me-2"></i> Spam
                    </Dropdown.Item>
                    <li className="divider"></li>
                    <Dropdown.Item>
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <ul className="unstyled inbox-pagination">
                <li>
                  <span>1-50 of 234</span>
                </li>

                <li className="mt-1">
                  <Link className="btn np-btn" to="#">
                    <i className="fe fe-chevron-right pagination-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- main-mail-list-header --> */}
          </Card.Body>
          {/* <!-- main-mail-options --> */}
          <div className="main-mail-list bd-t-0">
            <div className="main-mail-item unread">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/5.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Adrian Monino</div>
                <div className="main-mail-subject">
                  <strong>Someone who believes in you</strong>{" "}
                  <span>
                    enean commodo li gula eget dolor cum socia eget dolor enean
                    commodo li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-attachment"></div>
              <div className="main-mail-date">11:30am</div>
            </div>
            <div className="main-mail-item unread">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star active">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/2.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Albert Ansing</div>
                <div className="main-mail-subject">
                  <strong>Here's What You Missed This Week</strong>{" "}
                  <span>
                    enean commodo li gula eget dolor cum socia eget dolor enean
                    commodo li gula eget dolor cum socia eget dolor...
                  </span>
                </div>
              </div>
              <div className="main-mail-date">06:50am</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/9.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Carla Guden</div>
                <div className="main-mail-subject">
                  <strong>4 Ways to Optimize Your Search</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-attachment"></div>
              <div className="main-mail-date">Yesterday</div>
            </div>
            <div className="main-mail-item unread">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/10.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Reven Galeon</div>
                <div className="main-mail-subject">
                  <strong>We're Giving a Macbook for Free</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Yesterday</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/12.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Elisse Tan</div>
                <div className="main-mail-subject">
                  <strong>Keep Your Personal Data Safe</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 13</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/14.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Marianne Audrey</div>
                <div className="main-mail-subject">
                  <strong>We've Made Some Changes</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 13</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-avatar bg-gray-800">J</div>
              <div className="main-mail-body">
                <div className="main-mail-from">Jane Phoebe</div>
                <div className="main-mail-subject">
                  <strong>Grab Our Holiday Deals</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 12</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/15.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Raffy Godinez</div>
                <div className="main-mail-subject">
                  <strong>Just a Few Steps Away</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 05</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star active">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/7.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Allan Cadungog</div>
                <div className="main-mail-subject">
                  <strong>Credit Card Promos</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 04</div>
            </div>
            <div className="main-mail-item">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/10.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Alfie Salinas</div>
                <div className="main-mail-subject">
                  <strong>4 Ways to Optimize Your Search</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 02</div>
            </div>
            <div className="main-mail-item border-bottom-0">
              <div className="main-mail-checkbox">
                <label className="ckbox">
                  <input type="checkbox" /> <span></span>
                </label>
              </div>
              <div className="main-mail-star">
                <i className="typcn typcn-star"></i>
              </div>
              <div className="main-img-user">
                <img
                  alt=""
                  src={require("../../../../assets/img/faces/1.jpg")}
                />
              </div>
              <div className="main-mail-body">
                <div className="main-mail-from">Jove Guden</div>
                <div className="main-mail-subject">
                  <strong>Keep Your Personal Data Safe</strong>{" "}
                  <span>
                    viva mus elemen tum semper nisi enean vulputat enean commodo
                    li gula eget dolor cum socia eget dolor
                  </span>
                </div>
              </div>
              <div className="main-mail-date">Oct 02</div>
            </div>
          </div>
          <div className="mg-lg-b-30"></div>
        </Card>
      </Col>
    </Row>
    <div className="main-mail-compose">
      <div>
        <div className="container">
          <div className="main-mail-compose-box">
            <div className="main-mail-compose-header">
              <span>New Message</span>
              <Nav className="nav">
                <Nav.Item>
                  <Link className="nav-link" to="#">
                    <i className="fas fa-minus"></i>
                  </Link>
                </Nav.Item>{" "}
                <Nav.Item>
                  <Link className="nav-link" to="#">
                    <i className="fas fa-compress"></i>
                  </Link>{" "}
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="#">
                    <i className="fas fa-times"></i>
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="main-mail-compose-body">
              <FormGroup className="form-group">
                <Form.Label className="form-label">To</Form.Label>
                <div>
                  <Form.Control
                    className="form-control"
                    placeholder="Enter recipient's email address"
                    type="text"
                  />
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label className="form-label">Subject</Form.Label>
                <div>
                  <Form.Control className="form-control" type="text" />
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Write your message here..."
                  rows={8}
                ></textarea>
              </FormGroup>
              <div className="form-group mg-b-0">
                <Nav className="nav">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      href=""
                      title="Add attachment"
                    >
                      <i className="fas fa-paperclip"></i>
                    </Nav.Link>{" "}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      href=""
                      title="Add photo"
                    >
                      <i className="far fa-image"></i>
                    </Nav.Link>{" "}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      href=""
                      title="Add link"
                    >
                      <i className="fas fa-link"></i>
                    </Nav.Link>{" "}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      href=""
                      title="Emoticons"
                    >
                      <i className="far fa-smile"></i>
                    </Nav.Link>{" "}
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link"
                      data-bs-toggle="tooltip"
                      href=""
                      title="Discard"
                    >
                      <i className="far fa-trash-alt"></i>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Button variant="" className="btn btn-primary">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Row className="">
      <Pagination className="pagination product-pagination ms-auto float-end">
        <Pagination.Item className="page-item page-prev disabled">
          Prev
        </Pagination.Item>
        <Pagination.Item className="page-item active">1</Pagination.Item>
        <Pagination.Item className="page-item">2</Pagination.Item>
        <Pagination.Item className="page-item">3</Pagination.Item>
        <Pagination.Item className="page-item">4</Pagination.Item>
        <Pagination.Item className="page-item page-next">Next</Pagination.Item>
      </Pagination>
      {/* <!-- COL-END --> */}
    </Row>
  </div>
);

Mail.propTypes = {};

Mail.defaultProps = {};

export default Mail;
