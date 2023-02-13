import React from "react";
import { Button, Card, Col, Dropdown, Nav, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";

const Contacts = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">CONTACTS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Button variant="" type="button" className="btn btn-primary">
          <i className="fe fe-plus me-1"></i> Add New Contact
        </Button>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col sm={12}lg={5}xl={4}xxl={3}>
        <Card className="custom-card">
          <div className="">
            <div className="main-content-contacts pt-0">
              <div className="main-content-left main-content-left-contacts slid1">
                <Nav
                  defaultActiveKey="link-1"
                  className="nav main-nav-line  border-bottom-0 main-nav-line-chat  p-3"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-1"
                      className="nav-link"
                      data-bs-toggle="tab"
                    >
                      All Contacts
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-2"
                      className="nav-link"
                      data-bs-toggle="tab"
                    >
                      Favorites
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Scrollbars style={{ height: 750 }}>
                  <div className="main-contacts-list" id="mainContactList">
                    <div className="main-contact-label">A</div>
                    <div className="main-contact-item selected">
                      <div className="main-img-user online">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/2.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Abigail Johnson</h6>
                        <span className="phone">+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="">
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-img-user">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/3.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Archie Cantones</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="">
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-avatar online">A</div>
                      <div className="main-contact-body">
                        <h6>Allan Rey Palban</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-avatar bg-secondary">A</div>
                      <div className="main-contact-body">
                        <h6>Aileen Mante</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-label">B</div>
                    <div className="main-contact-item">
                      <div className="main-img-user">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/4.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Brandon Dilao</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-img-user online">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/5.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Britney Labares</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-avatar bg-danger">B</div>
                      <div className="main-contact-body">
                        <h6>Brateyley Cruz</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-label">C</div>
                    <div className="main-contact-item">
                      <div className="main-img-user">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/6.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Camille Audrey</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-img-user online">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/7.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Christian Lerio</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-img-user online">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/8.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Chris topher</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-label">D</div>
                    <div className="main-contact-item">
                      <div className="main-img-user online">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/9.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Darius Clayton</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-img-user">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/10.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Dyanne Aceron</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="main-contact-item">
                      <div className="main-img-user online">
                        <img
                          alt="avatar"
                          src={require("../../../assets/img/faces/11.jpg")}
                        />
                      </div>
                      <div className="main-contact-body">
                        <h6>Divina Gracia</h6>
                        <span>+1-234-567-890</span>
                      </div>
                      <Dropdown className="main-contact-star">
                        <Dropdown.Toggle variant="" >
                          <i className="fe fe-more-vertical  tx-18"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=" dropdown-menu-end">
                          <Dropdown.Item href="#">
                            <i className="fe fe-star me-2 "></i>Add to Favorite
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-edit me-2"></i>Edit
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            <i className="fe fe-trash-2 me-2"></i>Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={12} lg={7} xl={8}xxl={9}>
        <div className="">
          <Link className="main-header-arrow" to="#" id="ChatBodyHide">
            <i className="icon ion-md-arrow-back"></i>
          </Link>
          <div className="main-content-body main-content-body-contacts card custom-card">
            <div className="main-contact-info-header pt-3">
              <div className="media">
                <div className="main-img-user">
                  <img
                    alt="avatar"
                    src={require("../../../assets/img/faces/6.jpg")}
                  />{" "}
                  <Link to="#">
                    <i className="fe fe-camera"></i>
                  </Link>
                </div>
                <div className="media-body">
                  <h5>Teri Dactyl</h5>
                  <p>Web Designer</p>
                  <Nav className="contact-info">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Call</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="contact-icon border tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Call"
                      >
                        <i className="fe fe-phone"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Video</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="contact-icon border tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Video"
                      >
                        <i className="fe fe-video"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Message</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="contact-icon border tx-inverse"
                        data-bs-toggle="tooltip"
                        title="message"
                      >
                        <i className="fe fe-message-square"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to Group</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="contact-icon border tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Add to Group"
                      >
                        <i className="fe fe-user-plus"></i>
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Block</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="contact-icon border tx-inverse"
                        data-bs-toggle="tooltip"
                        title="Block"
                      >
                        <i className="fe fe-slash"></i>
                      </Link>
                    </OverlayTrigger>
                  </Nav>
                </div>
              </div>
              <div className="main-contact-action btn-list pt-3 pe-0 me-3">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Edit Profile</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn ripple btn-primary text-white btn-icon"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="Edit Profile"
                  >
                    <i className="fe fe-edit"></i>
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Delete Profile</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn ripple btn-secondary text-white btn-icon"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="Delete Profile"
                  >
                    <i className="fe fe-trash-2"></i>
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Add Favorite</Tooltip>}
                >
                  <Link
                    to="#"
                    className="btn ripple btn-warning text-white btn-icon"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="Add Favorite"
                  >
                    <i className="fe fe-star"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
            <div className="main-contact-info-body p-4">
              <div>
                <h6>Biography :</h6>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </p>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla
                  pariaturexplicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
              <div className="media-list pb-0">
                <div className="media">
                  <div className="media-body">
                    <div>
                      <label>Work :</label>{" "}
                      <span className="tx-medium">+1 (234) 567 8901</span>
                    </div>
                    <div>
                      <label>Personal :</label>{" "}
                      <span className="tx-medium">+1 (498) 021 0090</span>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div>
                      <label>Gmail Account :</label>{" "}
                      <span className="tx-medium">Dactyl.taylor@gmail.com</span>
                    </div>
                    <div>
                      <label>Other Account :</label>{" "}
                      <span className="tx-medium">me@bootstrapdash.me</span>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="media-body">
                    <div>
                      <label>Current Address :</label>{" "}
                      <span className="tx-medium">
                        012 Dashboard Apartments, Dayl Francisco, California
                        13245
                      </span>
                    </div>
                  </div>
                </div>
                <div className="media mb-0">
                  <div className="media-body">
                    <div>
                      <label>Call History :</label>{" "}
                      <span className="tx-medium">
                        Duration of last call: 5m 25sec
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card className="custom-card">
            <Card.Header className="card-header">Recent Contacts</Card.Header>
            <Card.Body className="card-body">
              <Row>
                <Col xxl={4} md={12} lg={12} xl={6}>
                  <div className="border d-flex p-2 br-5 mb-2">
                    <div className="recent-contacts me-3">
                      <div className="main-img-user avatar-md">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={require("../../../assets/img/faces/5.jpg")}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mt-1 mb-1">Abigali kelly</h6>
                      <p className="mb-0 text-muted">Front end</p>
                    </div>
                    <div className="my-auto ms-auto">
                      <nav className="contact-info d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Call</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Call"
                          >
                            <i className="fe fe-phone tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Video</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Video"
                          >
                            <i className="fe fe-video tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                      </nav>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} md={12} lg={12} xl={6}>
                  <div className="border d-flex p-2 br-5 mb-2">
                    <div className="recent-contacts me-3">
                      <div className="main-img-user avatar-md">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={require("../../../assets/img/faces/2.jpg")}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mt-1 mb-1">Brenda Crux</h6>
                      <p className="mb-0 text-muted">Angular</p>
                    </div>
                    <div className="my-auto ms-auto">
                      <nav className="contact-info d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Call</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Call"
                          >
                            <i className="fe fe-phone tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Video</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Video"
                          >
                            <i className="fe fe-video tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                      </nav>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} md={12} lg={12} xl={6}>
                  <div className="border d-flex p-2 br-5 mb-2">
                    <div className="recent-contacts me-3">
                      <div className="main-img-user avatar-md">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={require("../../../assets/img/faces/8.jpg")}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mt-1 mb-1">Rach Michelle</h6>
                      <p className="mb-0 text-muted">Php</p>
                    </div>
                    <div className="my-auto ms-auto">
                      <nav className="contact-info d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Call</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Call"
                          >
                            <i className="fe fe-phone tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Video</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Video"
                          >
                            <i className="fe fe-video tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                      </nav>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} md={12} lg={12} xl={6}>
                  <div className="border d-flex p-2 br-5 mb-2">
                    <div className="recent-contacts me-3">
                      <div className="main-img-user avatar-md">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={require("../../../assets/img/faces/9.jpg")}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mt-1 mb-1">Matt Harder</h6>
                      <p className="mb-0 text-muted">Codeignitor</p>
                    </div>
                    <div className="my-auto ms-auto">
                      <nav className="contact-info d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Call</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Call"
                          >
                            <i className="fe fe-phone tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Video</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Video"
                          >
                            <i className="fe fe-video tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                      </nav>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} md={12} lg={12} xl={6}>
                  <div className="border d-flex p-2 br-5 mb-2">
                    <div className="recent-contacts me-3">
                      <div className="main-img-user avatar-md">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={require("../../../assets/img/faces/1.jpg")}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mt-1 mb-1">Micheal Phelps</h6>
                      <p className="mb-0 text-muted">Web Testing</p>
                    </div>
                    <div className="my-auto ms-auto">
                      <nav className="contact-info d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Call</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Call"
                          >
                            <i className="fe fe-phone tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Video</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Video"
                          >
                            <i className="fe fe-video tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                      </nav>
                    </div>
                  </div>
                </Col>
                <Col xxl={4} md={12} lg={12} xl={6}>
                  <div className="border d-flex p-2 br-5 mb-2">
                    <div className="recent-contacts me-3">
                      <div className="main-img-user avatar-md">
                        <img
                          alt="avatar"
                          className="rounded-circle"
                          src={require("../../../assets/img/faces/7.jpg")}
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mt-1 mb-1">Azenda Hills</h6>
                      <p className="mb-0 text-muted">Django</p>
                    </div>
                    <div className="my-auto ms-auto d-md-flex">
                      <nav className="contact-info d-flex">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Call</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Call"
                          >
                            <i className="fe fe-phone tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Video</Tooltip>}
                        >
                          <Link
                            to="#"
                            className="contact-icon border tx-inverse rounded-pill"
                            data-bs-toggle="tooltip"
                            title="Video"
                          >
                            <i className="fe fe-video tx-12"></i>
                          </Link>
                        </OverlayTrigger>
                      </nav>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

Contacts.propTypes = {};

Contacts.defaultProps = {};

export default Contacts;
