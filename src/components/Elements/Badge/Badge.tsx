import React from "react";
import { Breadcrumb, Row, Col, Card, Button, Collapse, Form } from "react-bootstrap";

const Badge = () => {
  const [open, setOpen] = React.useState(false);
  const [Bordersqure, setBordersqure] = React.useState(false);
  const [Buttonrounded, setButtonrounded] = React.useState(false);
  const [Borderrounded, setBorderrounded] = React.useState(false);
  const [Linkbadges, setLinkbadges] = React.useState(false);
  const [Linkbadgesinbox, setLinkbadgesinbox] = React.useState(false);
  const [Simplebadgs, setSimplebadgs] = React.useState(false)
  const [Colorbadgs, setColorbadgs] = React.useState(false)
  const [Badges, setBadges] = React.useState(false)
  const [Badgespills, setBadgespills] = React.useState(false)
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">BADGES</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Badge
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- ROW-OPEN --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Buttons with square Badges</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setOpen(!open)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are button badges.
              </p>
              <div className="text-wrap">
                <div className="example">

                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge  bg-white ms-1">2</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-secondary  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white ms-1">1</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white ms-1">5</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white ms-1">3</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-warning mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white ms-1">6</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-danger  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white ms-1">4</span>
                  </Button>
                </div>
              </div>
              <Collapse in={open} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Button
      variant=""
      type="button"
      className="btn btn-primary mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge  bg-white ms-1">2</span>
    </Button>
    <Button
      variant=""
      type="button"
      className="btn btn-secondary  mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge bg-white ms-1">1</span>
    </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/*<!-- COL-END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">
                  Border buttons with square Badges
                </h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setBordersqure(!Bordersqure)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are Border buttons badges..
              </p>
              <div className="text-wrap">
                <div className="example">

                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-primary mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge  bg-primary ms-1">2</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-success mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-success ms-1">65</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-secondary   mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge  bg-secondary ms-1">1</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-info  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-info ms-1">5333</span>
                  </Button>
                </div>
              </div>
              <Collapse in={Bordersqure} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Button
      variant=""
      type="button"
      className="btn btn-primary mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge  bg-white ms-1">2</span>
    </Button>
    <Button
      variant=""
      type="button"
      className="btn btn-secondary  mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge bg-white ms-1">1</span>
    </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/*<!-- COL-END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Buttons with rounded Badges</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setButtonrounded(!Buttonrounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form></div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are button rounded badges...
              </p>
              <div className="text-wrap">
                <div className="example">

                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white rounded-pill ms-1">3</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge  bg-white rounded-pill ms-1">22</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-secondary  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white rounded-pill ms-1">145</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-white rounded-pill ms-1">3225</span>
                  </Button>
                </div>
              </div>
              <Collapse in={Buttonrounded} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Button
      variant=""
      type="button"
      className="btn btn-info  mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge bg-white rounded-pill ms-1">3</span>
    </Button>
    <Button
      variant=""
      type="button"
      className="btn btn-primary mt-1 mb-1 me-3"
    >
      <span>Notifications</span>
      <span className="badge  bg-white rounded-pill ms-1">22</span>
    </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROw CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">
                  Border buttons with rounded Badges
                </h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setBorderrounded(!Borderrounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Below exapmle badges are border button rounded badges...
              </p>
              <div className="text-wrap">
                <div className="example">

                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-primary mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge  bg-primary rounded-pill ms-1">2</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-success mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-success rounded-pill ms-1">65</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-secondary   mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge  bg-secondary rounded-pill ms-1">
                      43
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-info  mt-1 mb-1 me-3"
                  >
                    <span>Notifications</span>
                    <span className="badge bg-info rounded-pill ms-1">563</span>
                  </Button>
                </div>
              </div>
              <Collapse in={Borderrounded} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Button
      variant=""
      type="button"
      className="btn btn-outline-primary mt-1 mb-1 me-3"
    >
       <span>Notifications</span>
       <span className="badge  bg-primary rounded-pill ms-1">2</span>
    </Button>
    <Button
      variant=""
      type="button"
      className="btn btn-outline-success mt-1 mb-1 me-3"
    >
        <span>Notifications</span>
        <span className="badge bg-success rounded-pill ms-1">65</span>
    </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/*<!-- COL-END --> */}
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Link Badges</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setLinkbadges(!Linkbadges)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges can be used as part of links or buttons to provide a
                counter.
              </p>
              <div className="text-wrap">
                <div className="example">

                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary mt-1 mb-1 me-3"
                  >
                    Primary <span className="badge bg-light ms-1">22</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success mt-1 mb-1 me-3"
                  >
                    Success <span className="badge bg-light  ms-1">New</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info mt-1 mb-1 me-3"
                  >
                    Info <span className="badge bg-light  ms-1">5</span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-warning mt-1 mb-1 me-3"
                  >
                    Warning{" "}
                    <span className="badge bg-light badge-pill  ms-1">
                      <i className="fe fe-plus-circle tx-14"></i>
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-danger mt-1 mb-1 me-3"
                  >
                    Danger{" "}
                    <span className="badge bg-light badge-pill  ms-1">
                      Updated
                    </span>
                  </Button>
                </div>
              </div>
              <Collapse in={Linkbadges} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <Button
        variant=""
        type="button"
        className="btn btn-primary mt-1 mb-1 me-3"
     >
         Primary <span className="badge bg-light ms-1">22</span>
     </Button>
     <Button
        variant=""
        type="button"
        className="btn btn-success mt-1 mb-1 me-3"
     >
       Success <span className="badge bg-light  ms-1">New</span>
     </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- ROW OPEN --> */}

      <Row>
        <Col md={12} lg={12}>
          <Card className="mg-b-20">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Link Badges</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setLinkbadgesinbox(!Linkbadgesinbox)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges can be used as part of links or buttons to provide a
                counter.
              </p>
              <div className="text-wrap">
                <div className="example">

                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary position-relative  me-5"
                  >
                    Inbox
                    <span className="position-absolute start-100 translate-middle badge rounded-pill bg-info">
                      8<span className="visually-hidden">unread messages</span>
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success position-relative  mb-2 mt-2  me-5"
                  >
                    Inbox
                    <span className="position-absolute start-100 translate-middle badge rounded-pill bg-warning">
                      82
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-danger position-relative  mb-2 mt-2  me-5"
                  >
                    Inbox
                    <span className="position-absolute start-100 translate-middle badge rounded-pill bg-success">
                      539
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-teal position-relative  mb-2 mt-2  me-5"
                  >
                    Inbox
                    <span className="position-absolute start-100 translate-middle badge rounded-pill bg-warning">
                      9+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info position-relative  mb-2 mt-2  me-5"
                  >
                    Inbox
                    <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-warning position-relative  mb-2 mt-2  me-5"
                  >
                    Inbox
                    <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-primary">
                      999+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Button>
                </div>
              </div>
              <Collapse in={Linkbadgesinbox} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <Button
        variant=""
        type="button"
        className="btn btn-primary position-relative  me-5"
     >
         Inbox
         <span className="position-absolute start-100 translate-middle badge rounded-pill bg-info">
            8<span className="visually-hidden">unread messages</span>
         </span>
     </Button>
     <Button
        variant=""
        type="button"
        className="btn btn-success position-relative  mb-2 mt-2  me-5"
     >
        Inbox
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-warning">
          82
          <span className="visually-hidden">unread messages</span>
        </span>
     </Button>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW CLOSED --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col lg={6} md={6}>
          <Card className="mg-b-20" id="badge">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Simple Badges</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setSimplebadgs(!Simplebadgs)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units...
              </p>
              <div className="text-wrap">
                <div className="example">
                  <h1>
                    Heading 1 <span className="badge bg-light">New</span>
                  </h1>
                  <h2>
                    Heading 2 <span className="badge bg-light">New</span>
                  </h2>
                  <h3>
                    Heading 3 <span className="badge bg-light ">New</span>
                  </h3>
                  <h4>
                    Heading 4 <span className="badge bg-light ">New</span>
                  </h4>
                  <h5>
                    Heading 5 <span className="badge bg-light ">New</span>
                  </h5>
                  <h6>
                    Heading 6 <span className="badge bg-light ">New</span>
                  </h6>

                </div>
              </div>
              <Collapse in={Simplebadgs} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <h1>
        Heading 1 <span className="badge bg-light">New</span>
     </h1>
     <h2>
        Heading 2 <span className="badge bg-light">New</span>
     </h2>
     <h3>
        Heading 3 <span className="badge bg-light ">New</span>
     </h3>
     <h4>
        Heading 4 <span className="badge bg-light ">New</span>
     </h4>
     <h5>
        Heading 5 <span className="badge bg-light ">New</span>
     </h5>
     <h6>
        Heading 6 <span className="badge bg-light ">New</span>
     </h6>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card className="mg-b-20" id="badge1">
            <Card.Body>
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">Colored Badges</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setColorbadgs(!Colorbadgs)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units...
              </p>
              <div className="text-wrap">
                <div className="example">

                  <h1 className="text-primary">
                    Heading 1 <span className="badge bg-primary">New</span>
                  </h1>
                  <h2 className="text-danger">
                    Heading 2 <span className="badge bg-danger">New</span>
                  </h2>
                  <h3 className="text-warning">
                    Heading 3 <span className="badge bg-warning">New</span>
                  </h3>
                  <h4 className="text-success">
                    Heading 4 <span className="badge bg-success">New</span>
                  </h4>
                  <h5 className="text-info">
                    Heading 5 <span className="badge bg-info">New</span>
                  </h5>
                  <h6 className="text-secondary">
                    Heading 6 <span className="badge bg-secondary">New</span>
                  </h6>
                </div>
              </div>
              <Collapse in={Colorbadgs} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
      <h1 className="text-primary">
          Heading 1 <span className="badge bg-primary">New</span>
      </h1>
      <h2 className="text-danger">
          Heading 2 <span className="badge bg-danger">New</span>
      </h2>
      <h3 className="text-warning">
           Heading 3 <span className="badge bg-warning">New</span>
      </h3>
      <h4 className="text-success">
          Heading 4 <span className="badge bg-success">New</span>
      </h4>
      <h5 className="text-info">
          Heading 5 <span className="badge bg-info">New</span>
      </h5>
      <h6 className="text-secondary">
          Heading 6 <span className="badge bg-secondary">New</span>
      </h6>
  </div>
</div>
                    `}
                    </code>
                  </pre>
                </div>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={12}>
          <Card className="mg-b-20" id="badge2">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">BADGES</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setBadges(!Badges)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="mg-b-20 text-muted card-sub-title">
                Badges scale to match the size of the immediate parent element by
                using relative font sizing and em units...
              </p>
              <div className="text-wrap">
                <div className="example">
                  
                  <span className="badge bg-primary me-1 my-2">Primary</span>
                  <span className="badge bg-secondary me-1">Secondary</span>
                  <span className="badge bg-success me-1">Success</span>
                  <span className="badge bg-danger me-1">Danger</span>
                  <span className="badge bg-warning me-1">Warning</span>
                  <span className="badge bg-info me-1">Info</span>
                  <span className="badge bg-light me-1">Light</span>
                  <span className="badge bg-dark me-1">Dark</span>
                </div>
              </div>
                  <Collapse in={Badges} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="text-wrap">
  <div className="example">
      <span className="badge bg-primary me-1 my-2">Primary</span>
      <span className="badge bg-secondary me-1">Secondary</span>
      <span className="badge bg-success me-1">Success</span>
      <span className="badge bg-danger me-1">Danger</span>
      <span className="badge bg-warning me-1">Warning</span>
      <span className="badge bg-info me-1">Info</span>
      <span className="badge bg-light me-1">Light</span>
      <span className="badge bg-dark me-1">Dark</span>
  </div>
</div>
                    `}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} lg={12}>
          <Card className="mg-b-20" id="badge3">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Pill Badges</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setBadgespills(!Badgespills)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="text-muted card-sub-title">
                Use the <code>.badge-pill</code> modifier className to make badges
                more rounded.
              </p>
              <div className="text-wrap">
                <div className="example">
                  
                  <span className="badge badge-pill bg-primary me-1 my-2">
                    Primary
                  </span>
                  <span className="badge badge-pill bg-secondary me-1">
                    Secondary
                  </span>
                  <span className="badge badge-pill bg-success me-1">
                    Success
                  </span>
                  <span className="badge badge-pill bg-danger me-1">Danger</span>
                  <span className="badge badge-pill bg-warning me-1">
                    Warning
                  </span>
                  <span className="badge badge-pill bg-info me-1">Info</span>
                  <span className="badge badge-pill bg-light me-1">Light</span>
                  <span className="badge badge-pill bg-dark me-1">Dark</span>
                </div>
              </div>
                  <Collapse in={Badgespills} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="text-wrap">
  <div className="example">
      <span className="badge badge-pill bg-primary me-1 my-2">Primary</span>
      <span className="badge badge-pill bg-secondary me-1">Secondary</span>
      <span className="badge badge-pill bg-success me-1">Success</span>
      <span className="badge badge-pill bg-danger me-1">Danger</span>
      <span className="badge badge-pill bg-warning me-1">Warning</span>
      <span className="badge badge-pill bg-info me-1">Info</span>
      <span className="badge badge-pill bg-light me-1">Light</span>
      <span className="badge badge-pill bg-dark me-1">Dark</span>
  </div>
</div>
                    `}
                        </code>
                      </pre>
                    </div>
                  </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>
  )
}

Badge.propTypes = {};

Badge.defaultProps = {};

export default Badge;
