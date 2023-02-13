import React from 'react';
import { Breadcrumb, Button, Card, Col, Dropdown, Form, Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Readmail = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">READ MAIL</span>
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
            Read-mail
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row opened --> */}
    <Row className=" row-sm">
      {/* <!-- Col --> */}
      <Col lg={4} xl={3} md={12} sm={12}>
        <Card className=" mg-b-20">
          <Card.Body className="main-content-left main-content-left-mail card-body">
            <Button className="btn btn-primary btn-compose" id="btnCompose">
              Compose
            </Button>
            <div className="main-mail-menu">
              <Nav
                className="nav main-nav-column mg-b-20"
                defaultActiveKey="Inbox"
              >
                <Nav.Item>
                  <Nav.Link className="nav-link thumb " eventKey="Inbox">
                    <i className="far fa-envelope"></i> Inbox <span>18</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link thumb" eventKey="Starred">
                    <i className="far fa-star"></i> Starred <span>8</span>
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
                  <Nav.Link className="nav-link " eventKey="Email">
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
      <Col xl={9} lg={8} md={12} sm={12}>
        <Card>
          <Card.Header className="border-bottom">
            <h4 className="card-title">Velit a labore</h4>
          </Card.Header>
          <Card.Body>
            <div className="email-media">
              <div className="mt-0 d-sm-flex">
                <img
                  className="me-2 rounded-circle avatar-xl"
                  src={require("../../../../assets/img/faces/6.jpg")}
                  alt="avatar"
                />
                <div className="media-body">
                  <div className="float-end d-none d-md-flex tx-8">
                    <small className="me-2  border br-5 p-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip-2">Rated</Tooltip>}
                      >
                        <i className="bx bx-star tx-18"></i>
                      </OverlayTrigger>
                    </small>
                    <small className="me-2  border br-5 p-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id="button-tooltip-2">Attach</Tooltip>
                        }
                      >
                        <i className="bx bx-paperclip tx-18"></i>
                      </OverlayTrigger>
                    </small>
                    <small className="me-2  border br-5 p-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="button-tooltip-2">Reply</Tooltip>}
                      >
                        <i className="bx bx-reply tx-18"></i>
                      </OverlayTrigger>
                    </small>
                    <div>
                      <Dropdown className="me-2  border br-5 p-2">
                        <Dropdown.Toggle
                          variant=""
                          href="#"
                          data-bs-toggle="dropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip id="button-tooltip-2">View more</Tooltip>
                            }
                          >
                            <i className="fe fe-more-vertical  tx-gray-500  tx-18"></i>
                          </OverlayTrigger>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu">
                          <Dropdown.Item className="dropdown-item" href="#">
                            Reply
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Report Spam
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Delete
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Show Original
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Print
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
                            Filter
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="media-title  font-weight-bold mt-3">
                    Alica Nestle{" "}
                    <span className="tx-13 font-weight-semibold">
                      ( alicnestle@gmail.com )
                    </span>
                  </div>
                  <p className="mb-0">
                    to Adam Cotter ( adamcotter@gmail.com ){" "}
                  </p>
                  <small className="me-2 d-md-none">
                    Dec 13 , 2018 12:45 pm
                  </small>
                  <small className="me-2 d-md-none">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="button-tooltip-2">Rated</Tooltip>}
                    >
                      <i className="fe fe-star text-muted"></i>
                    </OverlayTrigger>
                  </small>
                  <small className="me-2 d-md-none">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="button-tooltip-2">Reply</Tooltip>}
                    >
                      <i
                        className="fa fa-reply text-muted"
                      ></i>
                    </OverlayTrigger>
                  </small>
                </div>
              </div>
            </div>
            <div className="eamil-body mt-5">
              <h6>Hi Sir/Madam</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.{" "}
              </p>
              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>
              <p>
                {" "}
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it?
              </p>
              <p className="mb-0">Thanking you Sir/Madam</p>
              <hr />
              <div className="email-attch">
                <div className="float-end">
                  <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="button-tooltip-2">Download</Tooltip>}
                    >
                    <i
                      className="bx bxs-download  border br-5 p-2  tx-18"
                     
                    ></i>
                  </OverlayTrigger>
                </div>
                <p>
                  3 Attachments<Link to="#"> View All Images</Link>
                </p>
                <div className="emai-img">
                  <div className="d-sm-flex">
                    <div className=" m-2">
                      <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                        <img
                          className="wd-150 br-5 mb-2"
                          src={require("../../../../assets/img/photos/1.jpg")}
                          alt="placeholder"
                        />
                      </Link>
                      <h6 className="mb-3 mb-lg-0">
                        1.jpg <small className="text-muted">12kb</small>
                      </h6>
                    </div>
                    <div className="m-2">
                      <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                        <img
                          className="wd-150 br-5 mb-2"
                          src={require("../../../../assets/img/photos/2.jpg")}
                          alt="placeholder"
                        />
                      </Link>
                      <h6 className="mb-3 mb-lg-0">
                        2.jpg <small className="text-muted">18kb</small>
                      </h6>
                    </div>
                    <div className="m-2">
                      <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                        <img
                          className="wd-150 br-5 mb-2"
                          src={require("../../../../assets/img/photos/3.jpg")}
                          alt="placeholder"
                        />
                      </Link>
                      <h6>
                        3.jpg <small className="text-muted">21kb</small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="">
            <Button
              variant=""
              className="btn btn-primary mt-1 mb-1 me-1"
            >
              <i className="fa fa-reply"></i> Reply
            </Button>
            <Button variant="" className="btn btn-info mt-1 mb-1 me-1" >
              <i className="fa fa-share"></i> Forward
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

Readmail.propTypes = {};

Readmail.defaultProps = {};

export default Readmail;
