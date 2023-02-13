import React from "react";
import { Breadcrumb, Card, Col, Row,Button, Modal  } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = () => {
  const [show, setShow] = React.useState(true);
  let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true)
    }
    else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false)
    }
  }


  const [remove, Setremove] = React.useState(true);
  const values = [
    true,
  ];
  const [fullscreen, setFullscreen] = React.useState<any>(true);
  const [shows, setShows] = React.useState(false);

  function handleShow(breakpoint:any) {
    setFullscreen(breakpoint);
    setShows(true);
  }
  let [isFirstCollapseds, setisFirstCollapseds] = React.useState(true);
  let firsts = () => {
    if (isFirstCollapseds === false) {
      setisFirstCollapseds(true);
    } else if (isFirstCollapseds === true) {
      setisFirstCollapseds(false);
    }
  };
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">CARDS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb>
            <Breadcrumb.Item className="tx-15" href="#">
              Apps
            </Breadcrumb.Item>
            <Breadcrumb.Item active aria-current="page">
              Cards
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="bg-primary  text-white">
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" bg-danger text-white">
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className="bg-gray-200 bd-0">
            <Card.Body>
              <h5 className="card-title tx-dark tx-medium mg-b-10">
                The Card Title
              </h5>
              <p className="card-subtitle mg-b-15">This is the card subtitle</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link className="card-link" to="#">
                Card link
              </Link>{" "}
              <Link className="card-link" to="#">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card className=" bg-primary tx-white bd-0">
            <Card.Body>
              <h5 className="card-title tx-white tx-medium mg-b-10">
                The Card Title
              </h5>
              <p className="card-subtitle mg-b-15 tx-white-8">
                This is the card subtitle
              </p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link className="card-link tx-white-7 hover-white" to="#">
                Card link
              </Link>{" "}
              <Link className="card-link tx-white-7 hover-white" to="#">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card className=" bg-secondary tx-white bd-0">
            <Card.Body>
              <h5 className="card-title card-title2 tx-white tx-medium mg-b-10">
                The Card Title
              </h5>
              <p className="card-subtitle tx-white-8 mg-b-15">
                This is the card subtitle
              </p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link className="card-link tx-white-7 hover-white" to="#">
                Card link
              </Link>{" "}
              <Link className="card-link tx-white-7 hover-white" to="#">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <div className="row">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header className=" pb-0">
              <h5 className="card-title mb-0 pb-0">Card title</h5>
            </Card.Header>
            <Card.Body>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-primary">
            <Card.Header className=" pb-0">
              <h5 className="card-title mb-0 pb-0">Card title</h5>
            </Card.Header>
            <Card.Body className=" text-primary">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-secondary">
            <Card.Header className=" pb-0">
              <h5 className="card-title mb-0 pb-0">Card title</h5>
            </Card.Header>
            <Card.Body className=" text-secondary">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-success">
            <Card.Header className=" pb-0">
              <h5 className="card-title mb-0 pb-0">Card title</h5>
            </Card.Header>
            <Card.Body className=" text-success">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-warning">
            <Card.Header className=" pb-0">
              <h5 className="card-title mb-0 pb-0">Card title</h5>
            </Card.Header>
            <Card.Body className=" text-warning">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-info">
            <Card.Header className=" pb-0">
              <h5 className="card-title mb-0 pb-0">Card title</h5>
            </Card.Header>
            <Card.Body className=" text-info">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have
            </Card.Body>
          </Card>
        </Col>
      </div>
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <>
            {show ? (
              <Card className=" custom-card">
                <Card.Header className="  d-flex custom-card-header border-bottom-0 ">
                  <h5 className="card-title">Basic Card</h5>
                  <div className="card-options">
                    <Link
                      to="#"
                      className="card-options-collapse"
                      data-bs-toggle="card-collapse"
                      onClick={() => {
                        first();
                      }}
                    >
                      <i className="fe fe-chevron-up"></i>
                    </Link>
                    <span
                     
                      className="card-options-remove text-dark"
                      data-bs-toggle="card-remove"
                      onClick={() => setShow(false)}
                    >
                      <i className="fe fe-x"></i>
                    </span>
                  </div>
                </Card.Header>
                {isFirstCollapsed ? (
                  <>
                    <Card.Body>
                      Et harum quidem rerum facilis est et expedita distinctio. Nam
                      libero tempore, cum soluta nobis est eligendi optio cumque
                      nihil impedit quo minus id quod maxime placeat facere
                    </Card.Body>
                    <Card.Footer className="">This is Basic card footer</Card.Footer>
                  </>
                ) : null}

              </Card>
            ) : null}
          </>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <>
            {remove ? (
              <Card className="custom-card">
                <Card.Header className="d-flex custom-card-header border-bottom-0 ">
                  <h5 className="card-title">Basic Card</h5>
                  <div className="card-options">
                    <Link
                      to="#"
                      className="card-options-collapse"
                      data-bs-toggle="card-collapse"
                      onClick={() => {
                        firsts();
                      }}
                    >
                      <i className="fe fe-chevron-up"></i>
                    </Link>
                    {values.map((v, idx) => (
                      <Link
                        key={idx}
                        to="#"
                        className="card-options-fullscreen"
                        data-bs-toggle="card-fullscreen"
                        onClick={() => handleShow(v)}
                      >
                        <i className="fe fe-maximize"></i>
                        <Modal show={shows} fullscreen={fullscreen}>
                          <Modal.Header>
                            <Modal.Title>Modal</Modal.Title>
                            <Button
                              variant="secondary"
                              onClick={() => setShows(false)}
                            >
                              x
                            </Button>
                          </Modal.Header>
                          <Modal.Body>Modal body content</Modal.Body>
                        </Modal>
                      </Link>
                    ))}
                    <Link
                      to="#"
                      className="card-options-remove"
                      data-bs-toggle="card-remove"
                      onClick={() => Setremove(false)}
                    >
                      <i className="fe fe-x"></i>
                    </Link>
                  </div>
                </Card.Header>
                {isFirstCollapseds ? (
                  <>
                    <Card.Body>
                      Et harum quidem rerum facilis est et expedita distinctio. Nam
                      libero tempore, cum soluta nobis est eligendi optio cumque nihil
                      impedit quo minus id quod maxime placeat facere
                    </Card.Body>
                    <Card.Footer className="">This is Basic card footer</Card.Footer>
                  </>
                ) : null}
              </Card>
            ) : null}
            <Modal show={shows} fullscreen={fullscreen}>
              <Modal.Header>
                <Modal.Title>Modal</Modal.Title>
                <Button variant="" onClick={() => setShows(false)}>
                  x
                </Button>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>
          </>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" custom-card">
            <Card.Header className=" d-flex custom-card-header border-bottom-0 ">
              <h5 className="card-title">Basic Card</h5>
              <div className="card-options">
                <Link to="#" className="btn btn-primary btn-sm">
                  Action 1
                </Link>
                <Link to="#" className="btn btn-secondary btn-sm ms-2">
                  Action 2
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere
            </Card.Body>
            <Card.Footer className="">This is Basic card footer</Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <h5 className="">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                At vero ducimus qui blanditiis leniti atque coret quas molestias
                excepturi sint similique sunt in culpa qui officia deserunt
                mollitia.
              </p>
              <Link to="#" className="card-link text-secondary">
                Card link
              </Link>
              <Link to="#" className="card-link text-secondary">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                At vero ducimus qui blanditiis leniti atque coret quas molestias
                excepturi sint similique sunt in culpa qui officia deserunt
                mollitia.
              </p>
              <Link to="#" className="card-link text-secondary">
                Card link
              </Link>
              <Link to="#" className="card-link text-secondary">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" bg-info">
            <Card.Body>
              <h5 className="card-title card-title3 text-white">Card title</h5>
              <h6 className="card-subtitle mb-2 text-white">Card subtitle</h6>
              <p className="card-text text-white">
                At vero ducimus qui blanditiis leniti atque coret quas molestias
                excepturi sint similique sunt in culpa qui officia deserunt
                mollitia.
              </p>
              <Link to="#" className="card-link text-white">
                Card link
              </Link>
              <Link to="#" className="card-link text-white">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <img
              alt=""
              className="img-fluid card-img-top"
              src={require("../../../assets/img/photos/14.jpg")}
            />
            <Card.Body>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <img
              alt=""
              className="img-fluid card-img-top"
              src={require("../../../assets/img/photos/12.jpg")}
            />
            <Card.Body>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <img
              alt=""
              className="img-fluid card-img-top"
              src={require("../../../assets/img/photos/13.jpg")}
            />
            <Card.Body>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
            <img
              alt=""
              className="img-fluid card-img-bottom bd-ts-0 bd-te-0"
              src={require("../../../assets/img/photos/1.jpg")}
            />
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
            <img
              alt=""
              className="img-fluid   card-img-bottom bd-ts-0 bd-te-0"
              src={require("../../../assets/img/photos/2.jpg")}
            />
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
            <img
              alt=""
              className="img-fluid  card-img-bottom  bd-ts-0 bd-te-0"
              src={require("../../../assets/img/photos/1.jpg")}
            />
          </Card>
        </Col>
        {/* <!-- col-4 --> */}
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col xl={3} sm={12} md={12} lg={6}>
          <Card>
            <img
              alt=""
              className="br-5 img-fluid card-img-top"
              src={require("../../../assets/img/photos/3.jpg")}
            />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center br-5 ">
              <p className="tx-white tx-medium mg-b-15">The Cat Prisoner</p>
              <p className="tx-white tx-13">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
              <p className="tx-13 mg-b-0">
                <Link className="tx-white" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                  Read more
                </Link>
              </p>
            </div>
            {/* <!-- card-img-overlay --> */}
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3} className="mg mg-md-t-0">
          <Card>
            <img
              alt=""
              className="br-5 card-img img-fluid card-img-top"
              src={require("../../../assets/img/photos/5.jpg")}
            />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center  br-5">
              <p className="tx-white tx-medium mg-b-15">The Ghost Town</p>
              <p className="tx-white tx-13">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
              <p className="tx-13 mg-b-0">
                <Link className="tx-white" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                  Read more
                </Link>
              </p>
            </div>
            {/* <!-- card-img-overlay --> */}
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3} className="mg-md-t-0">
          <Card>
            <img
              alt=""
              className="br-5 card-img img-fluid card-img-top"
              src={require("../../../assets/img/photos/6.jpg")}
            />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center br-5">
              <p className="tx-white tx-medium mg-b-15">The Green Leaves</p>
              <p className="tx-white tx-13">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
              <p className="tx-13 mg-b-0">
                <Link className="tx-white" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                  Read more
                </Link>
              </p>
            </div>
            {/* <!-- card-img-overlay --> */}
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={3} className="mg-md-t-0">
          <Card>
            <img
              alt=""
              className="br-5 card-img img-fluid card-img-top"
              src={require("../../../assets/img/photos/6.jpg")}
            />
            <div className="card-img-overlay pd-30 bg-black-4 d-flex flex-column justify-content-center br-5">
              <p className="tx-white tx-medium mg-b-15">The Green Leaves</p>
              <p className="tx-white tx-13">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
              <p className="tx-13 mg-b-0">
                <Link className="tx-white" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                  Read more
                </Link>
              </p>
            </div>
            {/* <!-- card-img-overlay --> */}
          </Card>
        </Col>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header className=" tx-medium bd-0 tx-white bg-secondary">
              Description
            </Card.Header>
            <Card.Body>
              <p className="mg-b-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header className=" tx-medium bd-0 tx-white bg-primary">
              Description
            </Card.Header>
            <Card.Body>
              <p className="mg-b-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Header className=" tx-medium bd-0 tx-white bg-gray-800">
              Description
            </Card.Header>
            <Card.Body>
              <p className="mg-b-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <p className="mg-b-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
            </Card.Body>
            <Card.Footer className=" bd-t">January, 20, 2017 4:30am</Card.Footer>
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <p className="mg-b-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
            </Card.Body>
            <Card.Footer className=" bd-t tx-center">
              <Link to={`${process.env.PUBLIC_URL}/advancedui/blog`}>Read more</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <p className="mg-b-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Lorem ipsum dolor sit amet
                consictetur...
              </p>
            </Card.Body>
            <Card.Footer className=" bd-t tx-right">
              Share <i className="icon ion-logo-facebook mg-l-5 mg-r-5"></i>{" "}
              <i className="icon ion-logo-twitter"></i>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-body tx-white-8 bg-primary bd-0">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} className="mg-md-t-0">
          <Card className=" card-body tx-white-8 bg-secondary bd-0">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
          </Card>
        </Col>
        <Col className="mg-md-t-0" sm={12} md={12} lg={4} xl={4}>
          <Card className=" card-body tx-white-8 bg-success bd-0">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet consictetur.
          </Card>
        </Col>
      </Row>
      {/* <!-- /row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <h5 className="card-title mb-3">Special title treatment</h5>
              <p className="card-text">
                At vero ducimus qui blanditiis leniti atque coret quas molestias
                excepturi sint similique sunt in culpa qui officia deserunt
                mollitia.
              </p>
              <Link to={`${process.env.PUBLIC_URL}/advancedui/blog`} className="btn btn-primary">
                See more
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
              <h5 className="card-title mb-3">Special title treatment</h5>
              <p className="card-text">
                At vero ducimus qui blanditiis leniti atque coret quas molestias
                excepturi sint similique sunt in culpa qui officia deserunt
                mollitia..
              </p>
              <Link to={`${process.env.PUBLIC_URL}/advancedui/blog`} className="btn btn-primary">
                See more
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}

      {/* <!-- row opened --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" text-center card-img-top-1">
            <img
              className="card-img-top w-100"
              src={require("../../../assets/img/photos/7.jpg")}
              alt=""
            />
            <Card.Body>
              <h4 className="card-title mb-3">Card Title</h4>
              <p className="card-text">
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <Link className="btn btn-primary btn-block" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" text-center card-img-top-1">
            <img
              className="card-img-top w-100"
              src={require("../../../assets/img/photos/8.jpg")}
              alt=""
            />
            <Card.Body>
              <h4 className="card-title mb-3">Card Title</h4>
              <p className="card-text">
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <Link className="btn btn-primary btn-block" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card className=" text-center card-img-top-1">
            <img
              className="card-img-top w-100"
              src={require("../../../assets/img/photos/9.jpg")}
              alt=""
            />
            <Card.Body>
              <h4 className="card-title mb-3">Card Title</h4>
              <p className="card-text">
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <Link className="btn btn-primary btn-block" to={`${process.env.PUBLIC_URL}/advancedui/blog`}>
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={12} md={12} lg={6} xl={4}>
          <Card className=" card-aside custom-card">
            <Link to="#"
              className="card-aside-column  cover-image"
            ></Link>
            <Card.Body>
              <h5 className=" card-title main-content-label tx-dark tx-medium mg-b-10">
                The Card Title
              </h5>
              <div className="">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="d-flex align-items-center pt-3 mt-auto">
                <div className="main-img-user avatar-sm me-3">
                  <img
                    src={require("../../../assets/img/ecommerce/3.jpg")}
                    className="w-10 rounded-circle"
                    alt="avatar-img"
                  />
                </div>
                <div>
                  <Link to="#" className="text-default">
                    Alica Nestle
                  </Link>
                  <small className="d-block text-muted">15 mintues ago</small>
                </div>
                <div className="ms-auto remove-icons text-muted d-md-flex">
                  <Link to="#"
                    className="icon remove-heart d-none d-md-inline-block ms-3"
                  >
                    <i className="far fa-heart me-1"></i>
                  </Link>
                  <Link to="#"
                    className="icon remove-thumb d-none d-md-inline-block ms-3"
                  >
                    <i className="far fa-thumbs-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={6} xl={4}>
          <Card className=" card-aside custom-card">
            <Card.Body>
              <h5 className="card-title main-content-label tx-dark tx-medium mg-b-10">
                The Card Title
              </h5>
              <div className="">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="d-flex align-items-center pt-3 mt-auto">
                <div className="main-img-user avatar-sm me-3">
                  <img
                    src={require("../../../assets/img/ecommerce/4.jpg")}
                    className="w-10 rounded-circle"
                    alt="avatar-img"
                  />
                </div>
                <div>
                  <Link to="#" className="text-default">
                    Alica Nestle
                  </Link>
                  <small className="d-block text-muted">15 mintues ago</small>
                </div>
                <div className="ms-auto remove-icons text-muted d-md-flex">
                  <Link to="#"
                    className="icon remove-heart d-none d-md-inline-block ms-3"
                  >
                    <i className="far fa-heart me-1"></i>
                  </Link>
                  <Link to="#"
                    className="icon remove-thumb d-none d-md-inline-block ms-3"
                  >
                    <i className="far fa-thumbs-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <Link to="#"
              className="card-aside-column  cover-image"
            ></Link>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  );
}

Cards.propTypes = {};

Cards.defaultProps = {};

export default Cards;
