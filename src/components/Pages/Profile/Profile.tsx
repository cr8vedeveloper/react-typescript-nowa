import React from "react";

import { Card, Col, Dropdown,Breadcrumb, Nav, Row, Tab, FormGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import {LightGallery} from "../Gallery/data";
const Profile = () =>{
  // const PhotobookImage = ({ url }) => (
  //   <React.Fragment>
  //     <img src={url} alt="" />
  //   </React.Fragment>
  // );

  // const PhotoItem = ({ image, group }) => (
  //   <LightgalleryItem group={group} src={image}>
  //     <PhotobookImage url={image} />
  //   </LightgalleryItem>
  // );
  return(
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">PROFILE</span>
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
            Profile
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    <Row>
      <Col lg={12} md={12}>
        <Card className="custom-card customs-cards">
          <Card.Body className=" d-md-flex bg-white">
            <div className="">
              <span className="profile-image pos-relative">
                <img
                  className="br-5"
                  alt=""
                  src={require("../../../assets/img/faces/profile.jpg")}
                />
                <span className="bg-success text-white wd-1 ht-1 rounded-pill profile-online"></span>
              </span>
            </div>
            <div className="my-md-auto mt-4 prof-details">
              <h4 className="font-weight-semibold ms-md-4 ms-0 mb-1 pb-0">
                Sonya Taylor
              </h4>
              <p className="tx-13 text-muted ms-md-4 ms-0 mb-2 pb-2 ">
                <span className="me-3">
                  <i className="far fa-address-card me-2"></i>Ui/Ux Developer
                </span>
                <span className="me-3">
                  <i className="fa fa-taxi me-2"></i>West fransisco,Alabama
                </span>
                <span>
                  <i className="far fa-flag me-2"></i>New Jersey
                </span>
              </p>
              <p className="text-muted ms-md-4 ms-0 mb-2">
                <span>
                  <i className="fa fa-phone me-2"></i>
                </span>
                <span className="font-weight-semibold me-2">Phone:</span>
                <span>+94 12345 6789</span>
              </p>
              <p className="text-muted ms-md-4 ms-0 mb-2">
                <span>
                  <i className="fa fa-envelope me-2"></i>
                </span>
                <span className="font-weight-semibold me-2">Email:</span>
                <span>spruko.space@gmail.com</span>
              </p>
              <p className="text-muted ms-md-4 ms-0 mb-2">
                <span>
                  <i className="fa fa-globe me-2"></i>
                </span>
                <span className="font-weight-semibold me-2">Website</span>
                <span>sprukotechnologies</span>
              </p>
            </div>
          </Card.Body>
        </Card>
        <span className=" py-0 ">
          <div className="profile-tab tab-menu-heading border-bottom-0 ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="About">
              <Nav
                variant="pills"
                className="nav profile-tabs main-nav-line tabs-menu profile-nav-line bg-white mb-4 border-0 br-5 mb-0	"
              >
                <Nav.Item className="me-1">
                  <Nav.Link className=" mb-2 mt-2" eventKey="About">
                    About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="EditProfile">
                    Edit Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="Timeline">
                    Timeline
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="Gallery">
                    Gallery
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="Friends">
                    Friends
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="me-1">
                  <Nav.Link className="mb-2 mt-2" eventKey="AccountSettings">
                    Account Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Row className=" row-sm ">
                <Col lg={12} md={12}>
                  <div className="custom-card main-content-body-profile">
                    <Tab.Content>
                      <Tab.Pane eventKey="About">
                        <div
                          className="main-content-body tab-pane  active"
                          id="about"
                        >
                          <Card>
                            <Card.Body className=" p-0 border-0 p-0 rounded-10">
                              <div className="p-4">
                                <h4 className="tx-15 text-uppercase mb-3">
                                  BIOdata
                                </h4>
                                <p className="m-b-5">
                                  Hi I'm Teri Dactyl,has been the industry's
                                  standard dummy text ever since the 1500s, when
                                  an unknown printer took a galley of type.
                                  Donec pede justo, fringilla vel, aliquet nec,
                                  vulputate eget, arcu. In enim justo, rhoncus
                                  ut, imperdiet a, venenatis vitae, justo.
                                  Nullam dictum felis eu pede mollis pretium.
                                  Integer tincidunt.Cras dapibus. Vivamus
                                  elementum semper nisi. Aenean vulputate
                                  eleifend tellus. Aenean leo ligula, porttitor
                                  eu, consequat vitae, eleifend ac, enim.
                                </p>
                                <div className="m-t-30">
                                  <div className=" p-t-10">
                                    <h5 className="text-primary m-b-5 tx-14">
                                      Lead designer / Developer
                                    </h5>
                                    <p className="">websitename.com</p>
                                    <p>
                                      <b>2010-2015</b>
                                    </p>
                                    <p className="text-muted tx-13 m-b-0">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                    </p>
                                  </div>

                                  <div className="">
                                    <h5 className="text-primary m-b-5 tx-14">
                                      Senior Graphic Designer
                                    </h5>
                                    <p className="">coderthemes.com</p>
                                    <p>
                                      <b>2007-2009</b>
                                    </p>
                                    <p className="text-muted tx-13 mb-0">
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scrambled it to make a type specimen book.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="border-top"></div>
                              <div className="p-4">
                                <label className="main-content-label tx-13 mg-b-20">
                                  Statistics
                                </label>
                                <div className="profile-cover__info ms-4 ms-auto p-0">
                                  <ul className="nav p-0 border-bottom-0 mb-0">
                                    <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                      <span className="border-0 mb-0 pb-0">
                                        113
                                      </span>
                                      Projects
                                    </li>
                                    <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                      <span className="border-0 mb-0 pb-0">
                                        245
                                      </span>
                                      Followers
                                    </li>
                                    <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                      <span className="border-0 mb-0 pb-0">
                                        128
                                      </span>
                                      Following
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="border-top"></div>
                              <div className="p-4">
                                <label className="main-content-label tx-13 mg-b-20">
                                  Contact
                                </label>
                                <div className="d-sm-flex">
                                  <div className="mg-sm-r-20 mg-b-10">
                                    <div className="main-profile-contact-list">
                                      <div className="media">
                                        <div className="media-icon bg-primary-transparent text-primary">
                                          <i className="icon ion-md-phone-portrait"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Mobile</span>
                                          <div> +245 354 654 </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-sm-r-20 mg-b-10">
                                    <div className="main-profile-contact-list">
                                      <div className="media">
                                        <div className="media-icon bg-success-transparent text-success">
                                          <i className="icon ion-logo-slack"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Slack</span>
                                          <div> @spruko.w </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="">
                                    <div className="main-profile-contact-list">
                                      <div className="media">
                                        <div className="media-icon bg-info-transparent text-info">
                                          <i className="icon ion-md-locate"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Current Address</span>
                                          <div> San Francisco, CA </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-top"></div>
                              <div className="p-4">
                                <label className="main-content-label tx-13 mg-b-20">
                                  Social
                                </label>
                                <div className="d-lg-flex">
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-primary-transparent text-primary">
                                          <i className="icon ion-logo-github"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Github</span>{" "}
                                          <Link to="#">github.com/spruko</Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-success-transparent text-success">
                                          <i className="icon ion-logo-twitter"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Twitter</span>{" "}
                                          <Link to="#">
                                            twitter.com/spruko.me
                                          </Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-info-transparent text-info">
                                          <i className="icon ion-logo-linkedin"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>Linkedin</span>{" "}
                                          <Link to="#">
                                            linkedin.com/in/spruko
                                          </Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mg-md-r-20 mg-b-10">
                                    <div className="main-profile-social-list">
                                      <div className="media">
                                        <div className="media-icon bg-danger-transparent text-danger">
                                          <i className="icon ion-md-link"></i>
                                        </div>
                                        <div className="media-body">
                                          {" "}
                                          <span>My Portfolio</span>{" "}
                                          <Link to="#">spruko.com/</Link>{" "}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="EditProfile">
                        <div
                          className="main-content-body tab-pane border-top-0"
                          id="edit"
                        >
                          <Card>
                            <Card.Body className=" border-0">
                              <div className="mb-4 main-content-label">
                                Personal Information
                              </div>
                              <Form className="form-horizontal">
                                <div className="mb-4 main-content-label">
                                  Name
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        User Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        defaultValue="Mack Adamia"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        First Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                        defaultValue="Mack Adamia"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        last Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                        defaultValue="Mack Adamia"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Nick Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Nick Name"
                                        defaultValue="Spruha"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Designation
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Designation"
                                        defaultValue="Web Designer"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Contact Info
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Email<i>(required)</i>
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        defaultValue="info@Spruha.in"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Website
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Website"
                                        defaultValue="@spruko.w"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Phone
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="phone number"
                                        defaultValue="+245 354 654"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Address
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <textarea
                                        className="form-control"
                                        name="example-textarea-input"
                                        rows={2}
                                        placeholder="Address"
                                        defaultValue="San Francisco, CA"
                                      ></textarea>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Social Info
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Twitter
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="twitter"
                                        defaultValue="twitter.com/spruko.me"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Facebook
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="facebook"
                                        defaultValue="https://www.facebook.com/Spruha"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Google+
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="google"
                                        defaultValue="spruko.com"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Linked in
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="linkedin"
                                        defaultValue="linkedin.com/in/spruko"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Github
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="github"
                                        defaultValue="github.com/sprukos"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  About Yourself
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Biographical Info
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <textarea
                                        className="form-control"
                                        name="example-textarea-input"
                                        rows={4}
                                        defaultValue="pleasure rationally encounter but because pursue
                            consequences that are extremely painful.occur in
                            which toil and pain can procure him some great
                            pleasure.."
                                      ></textarea>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div className="mb-4 main-content-label">
                                  Email Preferences
                                </div>
                                <FormGroup className="form-group mb-0">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Verified User
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <div className="custom-controls-stacked">
                                        <label className="ckbox mg-b-10">
                                          <input
                                            defaultChecked
                                            type="checkbox"
                                          />
                                          <span>
                                            {" "}
                                            Accept to receive post or page
                                            notification emails
                                          </span>
                                        </label>
                                        <label className="ckbox">
                                          <input
                                            defaultChecked
                                            type="checkbox"
                                          />
                                          <span>
                                            {" "}
                                            Accept to receive email sent to
                                            multiple recipients
                                          </span>
                                        </label>
                                      </div>
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Form>
                            </Card.Body>
                          </Card>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Timeline">
                        <div
                          className="main-content-body  tab-pane border-top-0"
                          id="timeline"
                        >
                          <div className="border-0">
                            <div className="main-content-body main-content-body-profile">
                              <div className="main-profile-body p-0">
                                <Row className=" row-sm">
                                  <div className="col-12">
                                    <Card className=" mg-b-20 border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={require("../../../assets/img/faces/6.jpg")}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-2 ms-2">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-primary ms-2">
                                              just now
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                               
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <div className="card-body">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <Row className=" row-sm">
                                          <div className="col">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2 me-4"
                                                src={require("../../../assets/img/media/1.jpg")}
                                              />
                                            </Link>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5"
                                                src={require("../../../assets/img/media/2.jpg")}
                                              />
                                            </Link>
                                          </div>
                                        </Row>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/12.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/12.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/5.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/6.jpg")}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              {/* <!-- demo-avatar-group --> */}
                                            </div>
                                            {/* <!-- demo-avatar-group --> */}
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                    </Card>
                                    <Card className=" mg-b-20 border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={require("../../../assets/img/faces/6.jpg")}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 ms-2 mg-t-3">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-muted ms-2">
                                              Sep 26 2019, 10:14am
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                                
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <Card.Body className=" h-100">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <Row className=" row-sm">
                                          <div className="col">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2 me-4"
                                                src={require("../../../assets/img/media/4.jpg")}
                                              />
                                            </Link>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2"
                                                src={require("../../../assets/img/media/1.jpg")}
                                              />
                                            </Link>
                                          </div>
                                        </Row>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/12.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/7.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/5.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/6.jpg")}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              {/* <!-- demo-avatar-group --> */}
                                            </div>
                                            {/* <!-- demo-avatar-group --> */}
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                    <Card className=" mg-b-20 border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={require("../../../assets/img/faces/6.jpg")}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 ms-2 mg-t-3">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-muted ms-2">
                                              Sep 26 2019, 10:14am
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                                
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <Card.Body className=" h-100">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/12.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/3.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/4.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/10.jpg")}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              {/* <!-- demo-avatar-group --> */}
                                            </div>
                                            {/* <!-- demo-avatar-group --> */}
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                    <Card className=" border">
                                      <Card.Header className=" p-4">
                                        <div className="media">
                                          <div className="media-user me-2">
                                            <div className="main-img-user avatar-md">
                                              <img
                                                alt=""
                                                className="rounded-circle"
                                                src={require("../../../assets/img/faces/2.jpg")}
                                              />
                                            </div>
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 ms-2 mg-t-3">
                                              Mintrona Pechon Pechon
                                            </h6>
                                            <span className="text-muted ms-2">
                                              Sep 26 2019, 10:14am
                                            </span>
                                          </div>
                                          <div className="ms-auto">
                                            <Dropdown className=" show main-contact-star">
                                              <Dropdown.Toggle
                                                variant=""
                                                className="new option-dots2"
                                                data-bs-toggle="dropdown"
                                                
                                              >
                                                <i className="fe fe-more-vertical  tx-18"></i>
                                              </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu shadow">
                                                {" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Edit Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Delete Post
                                                </Dropdown.Item>{" "}
                                                <Dropdown.Item
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  Personal Settings
                                                </Dropdown.Item>{" "}
                                              </Dropdown.Menu>
                                            </Dropdown>
                                          </div>
                                        </div>
                                      </Card.Header>
                                      <Card.Body className=" h-100">
                                        <p className="mg-t-0">
                                          There are many variations of passages
                                          of Lorem Ipsum available, but the
                                          majority have suffered alteration in
                                          some form, by injected humour, or
                                          randomised words which don't look even
                                          slightly believable.
                                        </p>
                                        <Row className=" row-sm">
                                          <div className="col">
                                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2 me-3"
                                                src={require("../../../assets/img/media/4.jpg")}
                                              />
                                            </Link>
                                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                                              <img
                                                alt="img"
                                                className="wd-200 br-5 mb-2 mt-2"
                                                src={require("../../../assets/img/media/3.jpg")}
                                              />
                                            </Link>
                                          </div>
                                        </Row>
                                        <div className="media mg-t-15 profile-footer">
                                          <div className="media-user me-2">
                                            <div className="demo-avatar-group">
                                              <div className="demo-avatar-group main-avatar-list-stacked">
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/11.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/12.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/3.jpg")}
                                                  />
                                                </div>
                                                <div className="main-img-user online">
                                                  <img
                                                    alt=""
                                                    className="rounded-circle"
                                                    src={require("../../../assets/img/faces/5.jpg")}
                                                  />
                                                </div>
                                                <div className="main-avatar">
                                                  {" "}
                                                  +23{" "}
                                                </div>
                                              </div>
                                              {/* <!-- demo-avatar-group --> */}
                                            </div>
                                            {/* <!-- demo-avatar-group --> */}
                                          </div>
                                          <div className="media-body">
                                            <h6 className="mb-0 mg-t-10">
                                              28 people like your photo
                                            </h6>
                                          </div>
                                        </div>
                                      </Card.Body>
                                    </Card>
                                  </div>
                                </Row>
                              </div>
                              {/* <!-- main-profile-body --> */}
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Gallery">
                        <div
                          className="main-content-body  border tab-pane border-top-0"
                          id="gallery"
                        >
                          <Card.Body className=" border">
                            <Row className="masonry">
                            <LightGallery/>
                            </Row>
                          </Card.Body>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Friends">
                        <div
                          className="main-content-body tab-pane border-top-0"
                          id="friends"
                        >
                          <Card.Body className=" border pd-b-10">
                            {/* <!-- row --> */}
                            <Row className=" row-sm">
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className="custom-card border">
                                  <Card.Body className="user-lock text-center">
                                    <Dropdown className="text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                       
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/1.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        James Thomas
                                      </h4>
                                      <span className="text-muted">
                                        Web designer
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className=" custom-card border">
                                  <Card.Body className="  user-lock text-center">
                                    <Dropdown className=" text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                        
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/3.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Reynante Labares
                                      </h4>
                                      <span className="text-muted">
                                        Web designer
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className=" custom-card border">
                                  <Card.Body className="  user-lock text-center">
                                    <Dropdown className=" text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                      
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/4.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Owen Bongcaras
                                      </h4>
                                      <span className="text-muted">
                                        Web designer
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className="custom-card border">
                                  <Card.Body className="user-lock text-center">
                                    <Dropdown className="text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                       
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/8.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Stephen Metcalfe
                                      </h4>
                                      <span className="text-muted">
                                        Administrator
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className=" custom-card border">
                                  <Card.Body className="  user-lock text-center">
                                    <Dropdown className=" text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                      
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/2.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Socrates Itumay
                                      </h4>
                                      <span className="text-muted">
                                        Project Manager
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className=" custom-card border">
                                  <Card.Body className="  user-lock text-center">
                                    <Dropdown className=" text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                       
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/3.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Reynante Labares
                                      </h4>
                                      <span className="text-muted">
                                        Web Designer
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className=" custom-card border">
                                  <Card.Body className="  user-lock text-center">
                                    <Dropdown className=" text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                       
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/4.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Owen Bongcaras
                                      </h4>
                                      <span className="text-muted">
                                        App Developer
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col sm={12} md={6} lg={6} xl={3}>
                                <Card className=" custom-card border">
                                  <Card.Body className="  user-lock text-center">
                                    <Dropdown className=" text-end">
                                      <Dropdown.Toggle
                                        variant=""
                                       
                                        className="option-dots"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                      >
                                        {" "}
                                        <i className="fe fe-more-vertical"></i>{" "}
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-message-square me-2"></i>
                                          Message
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-edit-2 me-2"></i>{" "}
                                          Edit
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-eye me-2"></i>{" "}
                                          View
                                        </Dropdown.Item>{" "}
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                        >
                                          <i className="fe fe-trash-2 me-2"></i>{" "}
                                          Delete
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                                      <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={require("../../../assets/img/faces/8.jpg")}
                                      />
                                      <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                        Stephen Metcalfe
                                      </h4>
                                      <span className="text-muted">
                                        Administrator
                                      </span>
                                      <div className="mt-3 d-flex text-center justify-content-center">
                                        <span className="btn btn-icon me-3 btn-facebook">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-facebook tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-twitter tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                        <span className="btn btn-icon me-3">
                                          <span className="btn-inner--icon">
                                            {" "}
                                            <i className="bx bxl-linkedin tx-18 tx-prime"></i>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </Card.Body>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="AccountSettings">
                        <div
                          className="main-content-body tab-pane  border-0"
                          id="settings"
                        >
                          <Card>
                            <Card.Body
                              className=" border-0"
                              data-select2-id="12"
                            >
                              <Form
                                className="form-horizontal"
                                data-select2-id="11"
                              >
                                <div className="mb-4 main-content-label">
                                  Account
                                </div>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        User Name
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="User Name"
                                        defaultValue="Sonia Taylor"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Email
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Control
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        defaultValue="info@SoniaTaylor.in"
                                      />
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup
                                  className="form-group "
                                  data-select2-id="108"
                                >
                                  <Row className="" data-select2-id="107">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Language
                                      </Form.Label>
                                    </Col>
                                    <Col
                                      md={9}
                                      data-select2-id="106"
                                    >
                                      <select
                                        className="form-control select2"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                      >
                                        <option>Us English</option>
                                        <option>Arabic</option>
                                        <option>Korean</option>
                                      </select>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup
                                  className="form-group "
                                  data-select2-id="10"
                                >
                                  <Row className="" data-select2-id="9">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Timezone
                                      </Form.Label>
                                    </Col>
                                    <Col
                                      md={9}
                                      data-select2-id="8"
                                    >
                                      <select
                                        className="form-control select2"
                                        data-select2-id="4"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                      >
                                        <option
                                          defaultValue="Pacific/Midway"
                                          data-select2-id="6"
                                        >
                                          (GMT-11:00) Midway Island, Samoa
                                        </option>
                                        <option
                                          defaultValue="America/Adak"
                                          data-select2-id="16"
                                        >
                                          (GMT-10:00) Hawaii-Aleutian
                                        </option>
                                        <option
                                          defaultValue="Etc/GMT+10"
                                          data-select2-id="17"
                                        >
                                          (GMT-10:00) Hawaii
                                        </option>
                                        <option
                                          defaultValue="Pacific/Marquesas"
                                          data-select2-id="18"
                                        >
                                          (GMT-09:30) Marquesas Islands
                                        </option>
                                        <option
                                          defaultValue="Pacific/Gambier"
                                          data-select2-id="19"
                                        >
                                          (GMT-09:00) Gambier Islands
                                        </option>
                                        <option
                                          defaultValue="America/Anchorage"
                                          data-select2-id="20"
                                        >
                                          (GMT-09:00) Alaska
                                        </option>
                                        <option
                                          defaultValue="America/Ensenada"
                                          data-select2-id="21"
                                        >
                                          (GMT-08:00) Tijuana, Baja California
                                        </option>
                                        <option
                                          defaultValue="Etc/GMT+8"
                                          data-select2-id="22"
                                        >
                                          (GMT-08:00) Pitcairn Islands
                                        </option>
                                        <option
                                          defaultValue="America/Los_Angeles"
                                          data-select2-id="23"
                                        >
                                          (GMT-08:00) Pacific Time (US &amp;
                                          Canada)
                                        </option>
                                        <option
                                          defaultValue="America/Denver"
                                          data-select2-id="24"
                                        >
                                          (GMT-07:00) Mountain Time (US &amp;
                                          Canada)
                                        </option>
                                        <option
                                          defaultValue="America/Chihuahua"
                                          data-select2-id="25"
                                        >
                                          (GMT-07:00) Chihuahua, La Paz,
                                          Mazatlan
                                        </option>
                                        <option
                                          defaultValue="America/Dawson_Creek"
                                          data-select2-id="26"
                                        >
                                          (GMT-07:00) Arizona
                                        </option>
                                        <option
                                          defaultValue="America/Belize"
                                          data-select2-id="27"
                                        >
                                          (GMT-06:00) Saskatchewan, Central
                                          America
                                        </option>
                                        <option
                                          defaultValue="America/Cancun"
                                          data-select2-id="28"
                                        >
                                          (GMT-06:00) Guadalajara, Mexico City,
                                          Monterrey
                                        </option>
                                        <option
                                          defaultValue="Chile/EasterIsland"
                                          data-select2-id="29"
                                        >
                                          (GMT-06:00) Easter Island
                                        </option>
                                        <option
                                          defaultValue="America/Chicago"
                                          data-select2-id="30"
                                        >
                                          (GMT-06:00) Central Time (US &amp;
                                          Canada)
                                        </option>
                                        <option
                                          defaultValue="America/New_York"
                                          data-select2-id="31"
                                        >
                                          (GMT-05:00) Eastern Time (US &amp;
                                          Canada)
                                        </option>
                                        <option
                                          defaultValue="America/Havana"
                                          data-select2-id="32"
                                        >
                                          (GMT-05:00) Cuba
                                        </option>
                                        <option
                                          defaultValue="America/Bogota"
                                          data-select2-id="33"
                                        >
                                          (GMT-05:00) Bogota, Lima, Quito, Rio
                                          Branco
                                        </option>
                                        <option
                                          defaultValue="America/Caracas"
                                          data-select2-id="34"
                                        >
                                          (GMT-04:30) Caracas
                                        </option>
                                        <option
                                          defaultValue="America/Santiago"
                                          data-select2-id="35"
                                        >
                                          (GMT-04:00) Santiago
                                        </option>
                                        <option
                                          defaultValue="America/La_Paz"
                                          data-select2-id="36"
                                        >
                                          (GMT-04:00) La Paz
                                        </option>
                                        <option
                                          defaultValue="Atlantic/Stanley"
                                          data-select2-id="37"
                                        >
                                          (GMT-04:00) Faukland Islands
                                        </option>
                                        <option
                                          defaultValue="America/Campo_Grande"
                                          data-select2-id="38"
                                        >
                                          (GMT-04:00) Brazil
                                        </option>
                                        <option
                                          defaultValue="America/Goose_Bay"
                                          data-select2-id="39"
                                        >
                                          (GMT-04:00) Atlantic Time (Goose Bay)
                                        </option>
                                        <option
                                          defaultValue="America/Glace_Bay"
                                          data-select2-id="40"
                                        >
                                          (GMT-04:00) Atlantic Time (Canada)
                                        </option>
                                        <option
                                          defaultValue="America/St_Johns"
                                          data-select2-id="41"
                                        >
                                          (GMT-03:30) Newfoundland
                                        </option>
                                        <option
                                          defaultValue="America/Araguaina"
                                          data-select2-id="42"
                                        >
                                          (GMT-03:00) UTC-3
                                        </option>
                                        <option
                                          defaultValue="America/Montevideo"
                                          data-select2-id="43"
                                        >
                                          (GMT-03:00) Montevideo
                                        </option>
                                        <option
                                          defaultValue="America/Miquelon"
                                          data-select2-id="44"
                                        >
                                          (GMT-03:00) Miquelon, St. Pierre
                                        </option>
                                        <option
                                          defaultValue="America/Godthab"
                                          data-select2-id="45"
                                        >
                                          (GMT-03:00) Greenland
                                        </option>
                                        <option
                                          defaultValue="America/Argentina/Buenos_Aires"
                                          data-select2-id="46"
                                        >
                                          (GMT-03:00) Buenos Aires
                                        </option>
                                        <option
                                          defaultValue="America/Sao_Paulo"
                                          data-select2-id="47"
                                        >
                                          (GMT-03:00) Brasilia
                                        </option>
                                        <option
                                          defaultValue="America/Noronha"
                                          data-select2-id="48"
                                        >
                                          (GMT-02:00) Mid-Atlantic
                                        </option>
                                        <option
                                          defaultValue="Atlantic/Cape_Verde"
                                          data-select2-id="49"
                                        >
                                          (GMT-01:00) Cape Verde Is.
                                        </option>
                                        <option
                                          defaultValue="Atlantic/Azores"
                                          data-select2-id="50"
                                        >
                                          (GMT-01:00) Azores
                                        </option>
                                        <option
                                          defaultValue="Europe/Belfast"
                                          data-select2-id="51"
                                        >
                                          (GMT) Greenwich Mean Time : Belfast
                                        </option>
                                        <option
                                          defaultValue="Europe/Dublin"
                                          data-select2-id="52"
                                        >
                                          (GMT) Greenwich Mean Time : Dublin
                                        </option>
                                        <option
                                          defaultValue="Europe/Lisbon"
                                          data-select2-id="53"
                                        >
                                          (GMT) Greenwich Mean Time : Lisbon
                                        </option>
                                        <option
                                          defaultValue="Europe/London"
                                          data-select2-id="54"
                                        >
                                          (GMT) Greenwich Mean Time : London
                                        </option>
                                        <option
                                          defaultValue="Africa/Abidjan"
                                          data-select2-id="55"
                                        >
                                          (GMT) Monrovia, Reykjavik
                                        </option>
                                        <option
                                          defaultValue="Europe/Amsterdam"
                                          data-select2-id="56"
                                        >
                                          (GMT+01:00) Amsterdam, Berlin, Bern,
                                          Rome, Stockholm, Vienna
                                        </option>
                                        <option
                                          defaultValue="Europe/Belgrade"
                                          data-select2-id="57"
                                        >
                                          (GMT+01:00) Belgrade, Bratislava,
                                          Budapest, Ljubljana, Prague
                                        </option>
                                        <option
                                          defaultValue="Europe/Brussels"
                                          data-select2-id="58"
                                        >
                                          (GMT+01:00) Brussels, Copenhagen,
                                          Madrid, Paris
                                        </option>
                                        <option
                                          defaultValue="Africa/Algiers"
                                          data-select2-id="59"
                                        >
                                          (GMT+01:00) West Central Africa
                                        </option>
                                        <option
                                          defaultValue="Africa/Windhoek"
                                          data-select2-id="60"
                                        >
                                          (GMT+01:00) Windhoek
                                        </option>
                                        <option
                                          defaultValue="Asia/Beirut"
                                          data-select2-id="61"
                                        >
                                          (GMT+02:00) Beirut
                                        </option>
                                        <option
                                          defaultValue="Africa/Cairo"
                                          data-select2-id="62"
                                        >
                                          (GMT+02:00) Cairo
                                        </option>
                                        <option
                                          defaultValue="Asia/Gaza"
                                          data-select2-id="63"
                                        >
                                          (GMT+02:00) Gaza
                                        </option>
                                        <option
                                          defaultValue="Africa/Blantyre"
                                          data-select2-id="64"
                                        >
                                          (GMT+02:00) Harare, Pretoria
                                        </option>
                                        <option
                                          defaultValue="Asia/Jerusalem"
                                          data-select2-id="65"
                                        >
                                          (GMT+02:00) Jerusalem
                                        </option>
                                        <option
                                          defaultValue="Europe/Minsk"
                                          data-select2-id="66"
                                        >
                                          (GMT+02:00) Minsk
                                        </option>
                                        <option
                                          defaultValue="Asia/Damascus"
                                          data-select2-id="67"
                                        >
                                          (GMT+02:00) Syria
                                        </option>
                                        <option
                                          defaultValue="Europe/Moscow"
                                          data-select2-id="68"
                                        >
                                          (GMT+03:00) Moscow, St. Petersburg,
                                          Volgograd
                                        </option>
                                        <option
                                          defaultValue="Africa/Addis_Ababa"
                                          data-select2-id="69"
                                        >
                                          (GMT+03:00) Nairobi
                                        </option>
                                        <option
                                          defaultValue="Asia/Tehran"
                                          data-select2-id="70"
                                        >
                                          (GMT+03:30) Tehran
                                        </option>
                                        <option
                                          defaultValue="Asia/Dubai"
                                          data-select2-id="71"
                                        >
                                          (GMT+04:00) Abu Dhabi, Muscat
                                        </option>
                                        <option
                                          defaultValue="Asia/Yerevan"
                                          data-select2-id="72"
                                        >
                                          (GMT+04:00) Yerevan
                                        </option>
                                        <option
                                          defaultValue="Asia/Kabul"
                                          data-select2-id="73"
                                        >
                                          (GMT+04:30) Kabul
                                        </option>
                                        <option
                                          defaultValue="Asia/Yekaterinburg"
                                          data-select2-id="74"
                                        >
                                          (GMT+05:00) Ekaterinburg
                                        </option>
                                        <option
                                          defaultValue="Asia/Tashkent"
                                          data-select2-id="75"
                                        >
                                          (GMT+05:00) Tashkent
                                        </option>
                                        <option
                                          defaultValue="Asia/Kolkata"
                                          data-select2-id="76"
                                        >
                                          (GMT+05:30) Chennai, Kolkata, Mumbai,
                                          New Delhi
                                        </option>
                                        <option
                                          defaultValue="Asia/Katmandu"
                                          data-select2-id="77"
                                        >
                                          (GMT+05:45) Kathmandu
                                        </option>
                                        <option
                                          defaultValue="Asia/Dhaka"
                                          data-select2-id="78"
                                        >
                                          (GMT+06:00) Astana, Dhaka
                                        </option>
                                        <option
                                          defaultValue="Asia/Novosibirsk"
                                          data-select2-id="79"
                                        >
                                          (GMT+06:00) Novosibirsk
                                        </option>
                                        <option
                                          defaultValue="Asia/Rangoon"
                                          data-select2-id="80"
                                        >
                                          (GMT+06:30) Yangon (Rangoon)
                                        </option>
                                        <option
                                          defaultValue="Asia/Bangkok"
                                          data-select2-id="81"
                                        >
                                          (GMT+07:00) Bangkok, Hanoi, Jakarta
                                        </option>
                                        <option
                                          defaultValue="Asia/Krasnoyarsk"
                                          data-select2-id="82"
                                        >
                                          (GMT+07:00) Krasnoyarsk
                                        </option>
                                        <option
                                          defaultValue="Asia/Hong_Kong"
                                          data-select2-id="83"
                                        >
                                          (GMT+08:00) Beijing, Chongqing, Hong
                                          Kong, Urumqi
                                        </option>
                                        <option
                                          defaultValue="Asia/Irkutsk"
                                          data-select2-id="84"
                                        >
                                          (GMT+08:00) Irkutsk, Ulaan Bataar
                                        </option>
                                        <option
                                          defaultValue="Australia/Perth"
                                          data-select2-id="85"
                                        >
                                          (GMT+08:00) Perth
                                        </option>
                                        <option
                                          defaultValue="Australia/Eucla"
                                          data-select2-id="86"
                                        >
                                          (GMT+08:45) Eucla
                                        </option>
                                        <option
                                          defaultValue="Asia/Tokyo"
                                          data-select2-id="87"
                                        >
                                          (GMT+09:00) Osaka, Sapporo, Tokyo
                                        </option>
                                        <option
                                          defaultValue="Asia/Seoul"
                                          data-select2-id="88"
                                        >
                                          (GMT+09:00) Seoul
                                        </option>
                                        <option
                                          defaultValue="Asia/Yakutsk"
                                          data-select2-id="89"
                                        >
                                          (GMT+09:00) Yakutsk
                                        </option>
                                        <option
                                          defaultValue="Australia/Adelaide"
                                          data-select2-id="90"
                                        >
                                          (GMT+09:30) Adelaide
                                        </option>
                                        <option
                                          defaultValue="Australia/Darwin"
                                          data-select2-id="91"
                                        >
                                          (GMT+09:30) Darwin
                                        </option>
                                        <option
                                          defaultValue="Australia/Brisbane"
                                          data-select2-id="92"
                                        >
                                          (GMT+10:00) Brisbane
                                        </option>
                                        <option
                                          defaultValue="Australia/Hobart"
                                          data-select2-id="93"
                                        >
                                          (GMT+10:00) Hobart
                                        </option>
                                        <option
                                          defaultValue="Asia/Vladivostok"
                                          data-select2-id="94"
                                        >
                                          (GMT+10:00) Vladivostok
                                        </option>
                                        <option
                                          defaultValue="Australia/Lord_Howe"
                                          data-select2-id="95"
                                        >
                                          (GMT+10:30) Lord Howe Island
                                        </option>
                                        <option
                                          defaultValue="Etc/GMT-11"
                                          data-select2-id="96"
                                        >
                                          (GMT+11:00) Solomon Is., New Caledonia
                                        </option>
                                        <option
                                          defaultValue="Asia/Magadan"
                                          data-select2-id="97"
                                        >
                                          (GMT+11:00) Magadan
                                        </option>
                                        <option
                                          defaultValue="Pacific/Norfolk"
                                          data-select2-id="98"
                                        >
                                          (GMT+11:30) Norfolk Island
                                        </option>
                                        <option
                                          defaultValue="Asia/Anadyr"
                                          data-select2-id="99"
                                        >
                                          (GMT+12:00) Anadyr, Kamchatka
                                        </option>
                                        <option
                                          defaultValue="Pacific/Auckland"
                                          data-select2-id="100"
                                        >
                                          (GMT+12:00) Auckland, Wellington
                                        </option>
                                        <option
                                          defaultValue="Etc/GMT-12"
                                          data-select2-id="101"
                                        >
                                          (GMT+12:00) Fiji, Kamchatka, Marshall
                                          Is.
                                        </option>
                                        <option
                                          defaultValue="Pacific/Chatham"
                                          data-select2-id="102"
                                        >
                                          (GMT+12:45) Chatham Islands
                                        </option>
                                        <option
                                          defaultValue="Pacific/Tongatapu"
                                          data-select2-id="103"
                                        >
                                          (GMT+13:00) Nuku'alofa
                                        </option>
                                        <option
                                          defaultValue="Pacific/Kiritimati"
                                          data-select2-id="104"
                                        >
                                          (GMT+14:00) Kiritimati
                                        </option>
                                      </select>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3} className="col">
                                      <Form.Label className="form-label">
                                        Verification
                                      </Form.Label>
                                    </Col>
                                    <Col md={9} className="col">
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input type="checkbox" />
                                        <span>Email</span>
                                      </Form.Label>
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input defaultChecked type="checkbox" />
                                        <span>SMS</span>
                                      </Form.Label>
                                      <Form.Label className="ckbox  mg-b-10">
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
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Login Verification
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      {" "}
                                      <Link className="" to="#">
                                        Settup Verification
                                      </Link>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <FormGroup className="form-group ">
                                  <Row className=" row-sm">
                                    <Col md={3}>
                                      <Form.Label className="form-label">
                                        Password Verification
                                      </Form.Label>
                                    </Col>
                                    <Col md={9}>
                                      <Form.Label className="ckbox  mg-b-10">
                                        <input type="checkbox" />
                                        <span>Require Personal Details</span>
                                      </Form.Label>
                                    </Col>
                                  </Row>
                                </FormGroup>
                                <div>
                                  <div className="mb-4 main-content-label">
                                    Notifications
                                  </div>
                                  <FormGroup className="form-group mb-0">
                                    <Row className=" row-sm">
                                      <Col md={3}>
                                        <Form.Label className="form-label">
                                          Configure Notifications
                                        </Form.Label>
                                      </Col>
                                      <Col md={9}>
                                        <Form.Label className="d-block mg-b-15-f">
                                          <input
                                            type="checkbox"
                                            name="custom-switch-checkbox"
                                            className="custom-switch-input"
                                            defaultChecked
                                          />
                                          <span className="custom-switch-indicator"></span>
                                          <span className="text-muted ms-2">
                                            Allow all Notifications
                                          </span>
                                        </Form.Label>
                                        <Form.Label className="d-block mg-b-15-f">
                                          <input
                                            type="checkbox"
                                            name="custom-switch-checkbox"
                                            className="custom-switch-input"
                                          />
                                          <span className="custom-switch-indicator"></span>
                                          <span className="text-muted ms-2">
                                            Disable all Notifications
                                          </span>
                                        </Form.Label>
                                        <Form.Label className="d-block mg-b-15-f">
                                          <input
                                            type="checkbox"
                                            name="custom-switch-checkbox"
                                            className="custom-switch-input"
                                            defaultChecked
                                          />{" "}
                                          <span className="custom-switch-indicator"></span>
                                          <span className="text-muted ms-2">
                                            Notification Sounds
                                          </span>
                                        </Form.Label>
                                      </Col>
                                    </Row>
                                  </FormGroup>
                                </div>
                                <FormGroup className="form-group float-end">
                                  <Row className=" row-sm">
                                    <Col md={12}>
                                      {" "}
                                      <Link
                                        className="btn btn-primary mb-1"
                                        to="#"
                                      >
                                        Deactivate Account
                                      </Link>{" "}
                                      <Link
                                        className="btn btn-secondary"
                                        to="#"
                                      >
                                        Change Password
                                      </Link>{" "}
                                    </Col>
                                  </Row>
                                </FormGroup>
                              </Form>
                            </Card.Body>
                          </Card>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </span>
      </Col>
    </Row>

    {/* <!-- Row --> */}
    <Row className=" row-sm">
      <Col lg={12} md={12}>
        <div className="tab-content"></div>
        {/* </div> */}
      </Col>
    </Row>
    {/* <!-- row closed --> */}
  </div>
);
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
