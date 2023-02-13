import React from 'react';
import { Badge, Breadcrumb, Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LightGallery } from './data';

const Blogdetails = () => {

  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">BLOG DETAILS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Advanced UI
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Blog-details
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!--Row--> */}
      <Row>
        <Col md={12} lg={12} xl={12} xxl={9}>
          <Card className="overflow-hidden">
            <div className="item7-card-img px-4 pt-4">
              <Link to="#"></Link>
              <img
                src={require("../../../assets/img/photos/blog.jpg")}
                alt="img"
                className="cover-image br-7 w-100"
              />
            </div>
            <Card.Body>
              <Link to="#" className="mt-4">
                <h5 className="font-weight-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
              </Link>
              <p className="">
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure.
              </p>
              <p className="mb-0">
                but because those who do not know how to pursue pleasure
                rationally encounter consequences that are extremely painful.
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example
              </p>
            </Card.Body>
            <Card.Footer className="pb-2 pt-2">
              <div className="item7-card-desc d-md-flex">
                <div className="d-flex align-items-center mt-0">
                  <img
                    src={require("../../../assets/img/faces/2.jpg")}
                    className="avatar brround avatar-md me-3"
                    alt="avatar-img"
                  />
                  <div>
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/profile`}
                      className="text-default font-weight-bold"
                    >
                      Lilly Potter
                    </Link>
                    <small className="d-block text-muted">1 day ago</small>
                  </div>
                </div>
                <div className="ms-auto mb-2 d-flex mt-3">
                  <Link to="#" className="me-3 mb-2 me-2 d-flex">
                    <span className="fe fe-calendar text-muted tx-17 me-1"></span>
                    <div className="mt-0 mt-0 text-dark">Jan-18-2020</div>
                  </Link>
                  <Link className="me-0 d-flex" to="#">
                    <span className="fe fe-message-square text-muted me-2 tx-17"></span>
                    <div className="mt-0 mt-0 text-dark">12 Comments</div>
                  </Link>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <div className="">
            <Card className="overflow-hidden">
              <Card>
                <Card.Header>
                  <h3 className="card-title">Comments</h3>
                </Card.Header>
                <Card.Body>
                  <div className="d-sm-flex mt-0 p-3 sub-review-section border br-bl-0 br-br-0">
                    <div className="d-flex me-3">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <img
                          className="media-object brround avatar-md"
                          alt="64x64"
                          src={require("../../../assets/img/faces/1.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <h5 className="mt-0 mb-1 font-weight-semibold">
                          Joanne Scott
                          <span
                            className="tx-14 ms-0 me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-original-title="verified"
                          >
                            <i className="fe fe-check-circle text-success tx-12 ms-1"></i>
                          </span>
                          <span className="tx-14 ms-2">
                            {" "}
                            4.5 <i className="fa fa-star text-warning"></i>
                          </span>
                        </h5>
                      </Link>
                      <p className="font-13  mb-2 mt-2">
                        Lorem ipsum dolor sit amet, quis Neque porro quisquam
                        est, nostrud exercitation ullamco laboris commodo
                        consequat.
                      </p>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" badge-primary">
                          <span className="me-1 fe fe-thumbs-up tx-11 "></span>
                          Helpful
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success ">
                          <span className="me-1 fe fe-edit-2 tx-11 ms-1"></span>Comment
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success">
                          <span className="me-1 fe fe-alert-triangle tx-11  ms-1"></span>
                          Report
                        </Badge>
                      </Link>
                      <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-right mt-1">
                        <Button variant="" className="btn btn-light me-2">
                          <span className="fe fe-thumbs-up tx-16"></span>
                        </Button>
                        <Button variant="" className="btn btn-light">
                          <span className="fe fe-thumbs-down tx-16"></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex p-3 mt-4 sub-review-section border subsection-color br-tl-0 br-tr-0">
                    <div className="d-flex me-3">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <img
                          className="media-object brround avatar-md"
                          alt="64x64"
                          src={require("../../../assets/img/faces/3.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <h5 className="mt-0 mb-1 font-weight-semibold">
                          Rose Slater
                          <span
                            className="tx-14 ms-0  me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-original-title="verified"
                          >
                            <i className="fe fe-check-circle text-success tx-12 "></i>
                          </span>
                        </h5>
                      </Link>
                      <p className="font-13  mb-2 mt-2">
                        Lorem ipsum dolor sit amet nostrud exercitation ullamco
                        laboris commodo consequat.
                      </p>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" badge-primary">
                          <span className="me-1 fe fe-thumbs-up tx-11 ms-1"></span>
                          Helpful
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success ">
                          <span className="me-1 fe fe-edit-2 tx-11 ms-1"></span>Comment
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success">
                          <span className="me-1 fe fe-alert-triangle tx-11  ms-1"></span>
                          Report
                        </Badge>
                      </Link>
                      <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-right mt-1">
                        <Button variant="" className="btn btn-light me-2">
                          <span className="fe fe-thumbs-up tx-16"></span>
                        </Button>
                        <Button variant="" className="btn btn-light">
                          <span className="fe fe-thumbs-down tx-16"></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex p-3 mt-4 border sub-review-section pb-0">
                    <div className="d-flex me-3">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <img
                          className="media-object brround avatar-md"
                          alt="64x64"
                          src={require("../../../assets/img/faces/5.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <h5 className="mt-0 mb-1 font-weight-semibold">
                          Edward
                          <span
                            className="tx-14 ms-0 me-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-original-title="verified"
                          >
                            <i className="fe fe-check-circle text-success tx-12  ms-1"></i>
                          </span>
                          <span className="tx-14 ms-2">
                            {" "}
                            4 <i className="fa fa-star text-warning"></i>
                          </span>
                        </h5>
                      </Link>
                      <p className="font-13  mb-2 mt-2">
                        Lorem ipsum dolor sit amet, quis Neque porro quisquam
                        est, nostrud exercitation ullamco laboris commodo
                        consequat.
                      </p>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" badge-primary">
                          <span className="me-1 fe fe-thumbs-up tx-11 ms-1"></span>
                          Helpful
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success ">
                          <span className="me-1 fe fe-edit-2 tx-11 ms-1"></span>Comment
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success">
                          <span className="me-1 fe fe-alert-triangle tx-11  ms-1"></span>
                          Report
                        </Badge>
                      </Link>
                      <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-right mt-1">
                        <Button variant="" className="btn btn-light me-2">
                          <span className="fe fe-thumbs-up tx-16"></span>
                        </Button>
                        <Button variant="" className="btn btn-light">
                          <span className="fe fe-thumbs-down tx-16"></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex p-3 mt-4 sub-review-section border subsection-color br-tl-0 br-tr-0">
                    <div className="d-flex me-3">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <img
                          className="media-object brround avatar-md"
                          alt="64x64"
                          src={require("../../../assets/img/faces/6.jpg")}
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                        <h5 className="mt-0 mb-1 font-weight-semibold">
                          Camila cabello
                          <span
                            className="tx-14 ms-0 me-2"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title=""
                            data-original-title="verified"
                          >
                            <i className="fe fe-check-circle text-success tx-12  ms-1"></i>
                          </span>
                        </h5>
                      </Link>
                      <p className="font-13  mb-2 mt-2">
                        Lorem ipsum dolor sit amet nostrud exercitation ullamco
                        laboris commodo consequat.
                      </p>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" badge-primary">
                          <span className="me-1 fe fe-thumbs-up tx-11 ms-1"></span>
                          Helpful
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success ">
                          <span className="me-1 fe fe-edit-2 tx-11 ms-1"></span>Comment
                        </Badge>
                      </Link>
                      <Link to="#" className="me-2 mt-1">
                        <Badge bg="" className=" bg-success">
                          <span className="me-1 fe fe-alert-triangle tx-11  ms-1"></span>
                          Report
                        </Badge>
                      </Link>
                      <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-right mt-1">
                        <Button variant="" className="btn btn-light me-2">
                          <span className="fe fe-thumbs-up tx-16"></span>
                        </Button>
                        <Button variant="" className="btn btn-light">
                          <span className="fe fe-thumbs-down tx-16"></span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Card>
          </div>
          <div className="">
            <Card className="overflow-hidden">
              <Card className="mb-lg-0">
                <Card.Header className=" border-bottom-0">
                  <h3 className="card-title">Add a Comment</h3>
                </Card.Header>
                <Card.Body>
                  <div className="mt-2">
                    <FormGroup className="form-group">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="name1"
                        placeholder="Your Name"
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <Form.Control
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <textarea
                        className="form-control"
                        name="example-textarea-input"
                        rows={6}
                        placeholder="Write Review"
                      ></textarea>
                    </FormGroup>
                    <Link to="#" className="btn btn-primary">
                      Send Reply
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Card>
          </div>
        </Col>
        <Col xxl={3} xl={12} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="border-bottom mb-1">
              <h3 className="card-title">Search</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <div className="">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Enter email..."
                      type="email"
                    />
                    <Button variant=""
                      className="btn btn-primary br-ts-0 br-bs-0"
                      type="button"
                    >
                      Sign in
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="border-bottom">
              <h3 className="card-title">About Author</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-center">
                <Link to={`${process.env.PUBLIC_URL}/advancedui/blogdetails`}>
                  <img
                    className="card-img-top w-100 w-100"
                    src={require("../../../assets/img/photos/11.jpg")}
                    alt=""
                  />
                </Link>
                <div className="br-5 py-2 text-start">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam nulla deleniti voluptas officia accusamus magnam
                    ullam inventore Lorem ipsum dolor, sit amet consectetur
                    dolorem quibusdam?.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="border-bottom">
              <h3 className="card-title mb-1">Popular posts</h3>
            </Card.Header>
            <Card.Body>
              <div className="media d-flex mb-4">
                <img
                  alt=""
                  className="main-img-user avatar-lg mg-r-20 br-5"
                  src={require("../../../assets/img/photos/blog1.jpg")}
                />
                <div className="media-body">
                  <span className="d-block">Tourism</span>
                  <p className="mb-0 font-weight-semibold">
                    Explore tourism by visitinig places.
                  </p>
                  <small className="d-block text-muted">2 day ago</small>
                </div>
              </div>
              <div className="media d-flex mb-4">
                <img
                  alt=""
                  className="main-img-user avatar-lg mg-r-20 br-5"
                  src={require("../../../assets/img/photos/blog2.jpg")}
                />
                <div className="media-body">
                  <span className="d-block">Beautician</span>
                  <p className="mb-0 font-weight-semibold">
                    Beautification courses are available.
                  </p>
                  <small className="d-block text-muted">2 hrs ago</small>
                </div>
              </div>
              <div className="media d-flex mb-4">
                <img
                  alt=""
                  className="main-img-user avatar-lg mg-r-20 br-5"
                  src={require("../../../assets/img/photos/blog5.jpg")}
                />
                <div className="media-body">
                  <span className="d-block">Music</span>
                  <p className="mb-0 font-weight-semibold">
                    Music in a peaceful way.
                  </p>
                  <small className="d-block text-muted">1 day ago</small>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="border-bottom">
              <h3 className="card-title mb-1">Categories</h3>
            </Card.Header>
            <Card.Body>
              <div>
                <div className="tags">
                  <Link to="#" className="tag">
                    Life style
                  </Link>
                  <Link to="#" className="tag">
                    Health
                  </Link>
                  <Link to="#" className="tag">
                    Tourism
                  </Link>
                  <Link to="#" className="tag">
                    Web designing
                  </Link>
                  <Link to="#" className="tag">
                    Medical
                  </Link>
                  <Link to="#" className="tag">
                    Hotels
                  </Link>
                  <Link to="#" className="tag">
                    Real estate
                  </Link>
                  <Link to="#" className="tag">
                    Business
                  </Link>
                  <Link to="#" className="tag">
                    Shopping
                  </Link>
                  <Link to="#" className="tag">
                    Marketing
                  </Link>
                  <Link to="#" className="tag">
                    Housing
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card overflow-hidden">
            <Card.Header className="border-bottom">
              <h3 className="card-title mb-1">Gallery</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-center demo-gallery">
                <div className="mt-2">
                  <Row className="masonry">
             <LightGallery/>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}
    </div>
  );
}

Blogdetails.propTypes = {};

Blogdetails.defaultProps = {};

export default Blogdetails;
