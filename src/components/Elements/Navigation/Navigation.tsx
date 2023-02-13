
import React from "react";
import { Breadcrumb, Form, Card, Col, Nav, Row, Collapse, Tab } from "react-bootstrap";
const Navigation = () => {
  const [Basic, setBasic] = React.useState(false)
  const [Vertical, setVertical] = React.useState(false)
  const [ICON, setICON] = React.useState(false)
  const [Verticalpills, setVerticalpills] = React.useState(false);
  const [Horizontal, setHorizontal] = React.useState(false);
  const [Iconnav, setIconnav] = React.useState(false);
  const [Colored, setColored] = React.useState(false);
  const [Simple, setSimple] = React.useState(false);
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">NAVIGATION</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item"
              active
              aria-current="page"
            >
              Navigation
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      <Row>
        <Col lg={12} xl={12}>
          <Card className=" custom-card" id="basic">
            <Card.Body className="card-body">
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Basic Navigation</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setBasic(!Basic)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  Below is an example of a basic navigation
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5 border">
                    <Nav
                      defaultActiveKey="homes"
                      className="nav main-nav flex-column flex-md-row"
                    >
                      <Nav.Link eventKey="homes" className="nav-link " href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="link-1" className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="link-2" className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="link-3" className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5 border">
  <Nav
    defaultActiveKey="homes"
    className="nav main-nav flex-column flex-md-row"
  >
    <Nav.Link eventKey="homes" className="nav-link " href="#">
      Home
    </Nav.Link>
    <Nav.Link eventKey="link-1" className="nav-link" href="#">
      About
    </Nav.Link>
    <Nav.Link eventKey="link-2" className="nav-link" href="#">
      Pages
    </Nav.Link>
    <Nav.Link eventKey="link-3" className="nav-link" href="#">
      Custom
    </Nav.Link>
  </Nav>
</div>                 
                  
                  `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="vertical">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Vertical Navigation</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setVertical(!Vertical)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  Below is an example of a basic navigation in a vertical mode
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5  border">
                    <Nav defaultActiveKey="home" className="nav main-nav-column">
                      <Nav.Link eventKey="home" className="nav-link " href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="link-4" className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="link-5" className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="link-6" className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Vertical} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5  border">
  <Nav defaultActiveKey="home" className="nav main-nav-column">
    <Nav.Link eventKey="home" className="nav-link " href="#">
      Home
    </Nav.Link>
    <Nav.Link eventKey="link-4" className="nav-link" href="#">
      About
    </Nav.Link>
    <Nav.Link eventKey="link-5" className="nav-link" href="#">
      Pages
    </Nav.Link>
    <Nav.Link eventKey="link-6" className="nav-link" href="#">
      Custom
    </Nav.Link>
  </Nav>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="pill">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">ICON Navigation</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setICON(!ICON)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  Below is an example of a pill navigation
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-2 br-5 ">
                    <Nav
                      className="nav nav-pills nav-pills-circle"
                      defaultActiveKey="link-9"
                      id="tabs_2"
                      role="tablist"
                    >
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-7"
                          className="nav-link border py-2 px-3 m-2"
                          id="tab1"
                          data-bs-toggle="tab"
                          href="#tabs_2_1"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-home"></i> Home
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-8"
                          className="nav-link border py-2 px-3  m-2"
                          id="tab2"
                          data-bs-toggle="tab"
                          href="#tabs_2_2"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-unlock"></i> Lock{" "}
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-9"
                          className="nav-link py-2 px-3  border show m-2"
                          id="tab3"
                          data-bs-toggle="tab"
                          href="#tabs_2_3"
                          role="tab"
                          aria-selected="true"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-play"></i> Videos
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-10"
                          className="nav-link border py-2 px-3  m-2"
                          id="tab4"
                          data-bs-toggle="tab"
                          href="#tabs_2_3"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-layers"></i> Severs
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          eventKey="link-11"
                          className="nav-link border py-2 px-3  m-2"
                          id="tab5"
                          data-bs-toggle="tab"
                          href="#tabs_2_4"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="nav-link-icon d-block">
                            <i className="fe fe-image"></i> Gallery{" "}
                          </span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={ICON} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-2 br-5 ">
  <Nav
    className="nav nav-pills nav-pills-circle"
    defaultActiveKey="link-9"
    id="tabs_2"
    role="tablist"
  >
    <Nav.Item className="nav-item">
      <Nav.Link
        eventKey="link-7"
        className="nav-link border py-2 px-3 m-2"
        id="tab1"
        data-bs-toggle="tab"
        href="#tabs_2_1"
        role="tab"
        aria-selected="false"
      >
        <span className="nav-link-icon d-block">
          <i className="fe fe-home"></i> Home
        </span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item className="nav-item">
      <Nav.Link
        eventKey="link-8"
        className="nav-link border py-2 px-3  m-2"
        id="tab2"
        data-bs-toggle="tab"
        href="#tabs_2_2"
        role="tab"
        aria-selected="false"
      >
        <span className="nav-link-icon d-block">
          <i className="fe fe-unlock"></i> Lock{" "}
        </span>
      </Nav.Link>
    </Nav.Item>
  </Nav>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="verticallpill">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Vertical Pills Navigation</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setVerticalpills(!Verticalpills)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  Below is an example of a pill navigation in vertical mode
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5  border">
                    <Nav
                      defaultActiveKey="link-12"
                      className="nav nav-pills flex-column"
                    >
                      <Nav.Link eventKey="link-12" className="nav-link " href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="link-13" className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="link-14" className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="link-15" className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Verticalpills} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5  border">
  <Nav
    defaultActiveKey="link-12"
    className="nav nav-pills flex-column"
  >
    <Nav.Link eventKey="link-12" className="nav-link " href="#">
      Home
    </Nav.Link>
    <Nav.Link eventKey="link-13" className="nav-link" href="#">
      About
    </Nav.Link>
    <Nav.Link eventKey="link-14" className="nav-link" href="#">
      Pages
    </Nav.Link>
    <Nav.Link eventKey="link-15" className="nav-link" href="#">
      Custom
    </Nav.Link>
  </Nav>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="hori">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Horizontal Alignment</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setHorizontal(!Horizontal)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  A navigation with center and right in which left is the default.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 br-5 border mb-3">
                    <Nav
                      defaultActiveKey="link-16"
                      className="nav main-nav flex-column flex-md-row justify-content-center"
                    >
                      <Nav.Link eventKey="link-16" className="nav-link " href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="link-17" className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="link-18" className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="link-19" className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5  border">
                    <Nav
                      defaultActiveKey="link-20"
                      className="nav main-nav flex-column flex-md-row justify-content-end"
                    >
                      <Nav.Link
                        eventKey="20"
                        className="nav-link "
                        href="#"
                      >
                        Home
                      </Nav.Link>
                      <Nav.Link eventKey="21" className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link eventKey="22" className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link eventKey="23" className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Horizontal} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="p-3 br-5 border mb-3">
  <Nav
    defaultActiveKey="link-16"
    className="nav main-nav flex-column flex-md-row justify-content-center"
  >
    <Nav.Link eventKey="link-16" className="nav-link " href="#">
      Home
    </Nav.Link>
    <Nav.Link eventKey="link-17" className="nav-link" href="#">
      About
    </Nav.Link>
    <Nav.Link eventKey="link-18" className="nav-link" href="#">
      Pages
    </Nav.Link>
    <Nav.Link eventKey="link-19" className="nav-link" href="#">
      Custom
    </Nav.Link>
  </Nav>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">ICON NAVBAR</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setIconnav(!Iconnav)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  A navigation with ICON NAVBAR.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example icon-navbar">
                  <Nav
                    defaultActiveKey="link-26"
                    className="nav nav-pills nav-pills-circle"
                    id="tabs_3"
                    role="tablist"
                  >
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-24"
                        className="nav-link border text-center  m-2"
                        id="tab21"
                        data-bs-toggle="tab"
                        href="#tabs_2_1"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-home fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-25"
                        className="nav-link border  m-2"
                        id="tab22"
                        data-bs-toggle="tab"
                        href="#tabs_2_2"
                        role="tab"
                        aria-controls="tab2"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-unlock fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-26"
                        className="nav-link border show  m-2"
                        id="tab23"
                        data-bs-toggle="tab"
                        href="#tabs_2_3"
                        role="tab"
                        aria-controls="tab3"
                        aria-selected="true"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-play fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-27"
                        className="nav-link border  m-2"
                        id="tab24"
                        data-bs-toggle="tab"
                        href="#tabs_2_3"
                        role="tab"
                        aria-controls="tab4"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-layers fs-20"></i>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item">
                      <Nav.Link
                        eventKey="link-28"
                        className="nav-link border m-2"
                        id="tab25"
                        data-bs-toggle="tab"
                        href="#tabs_2_4"
                        role="tab"
                        aria-controls="tab5"
                        aria-selected="false"
                      >
                        <span className="nav-link-icon d-block text-center mx-auto">
                          <i className="fe fe-image fs-20"></i>{" "}
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <Collapse in={Iconnav} className="mt-2">
                <pre>
                  <code>
                    {`
                    <div className="example icon-navbar">
                <Nav
                  defaultActiveKey="link-26"
                  className="nav nav-pills nav-pills-circle"
                  id="tabs_3"
                  role="tablist"
                >
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      eventKey="link-24"
                      className="nav-link border text-center  m-2"
                      id="tab21"
                      data-bs-toggle="tab"
                      href="#tabs_2_1"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="false"
                    >
                      <span className="nav-link-icon d-block text-center mx-auto">
                        <i className="fe fe-home fs-20"></i>
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      eventKey="link-25"
                      className="nav-link border  m-2"
                      id="tab22"
                      data-bs-toggle="tab"
                      href="#tabs_2_2"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <span className="nav-link-icon d-block text-center mx-auto">
                        <i className="fe fe-unlock fs-20"></i>
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  
                  <Nav.Item className="nav-item">
                    <Nav.Link
                      eventKey="link-27"
                      className="nav-link border  m-2"
                      id="tab24"
                      data-bs-toggle="tab"
                      href="#tabs_2_3"
                      role="tab"
                      aria-controls="tab4"
                      aria-selected="false"
                    >
                      <span className="nav-link-icon d-block text-center mx-auto">
                        <i className="fe fe-layers fs-20"></i>
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                  
                </Nav>
              </div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="colored">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Colored Nav Variations</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setColored(!Colored)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  A navigation with colored nav that wrapped the navigation.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="p-3 bg-primary br-5 mb-3">
                    <Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
                      <Nav.Link className="nav-link " active href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-secondary mb-3">
                    <Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
                      <Nav.Link className="nav-link " active href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                  <div className="p-3 br-5 bg-info">
                    <Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
                      <Nav.Link className="nav-link " active href="#">
                        Home
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        About
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        Pages
                      </Nav.Link>
                      <Nav.Link className="nav-link" href="#">
                        Custom
                      </Nav.Link>
                    </Nav>
                  </div>
                </div>
              </div>
              <Collapse in={Colored} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
  <div className="p-3 bg-primary br-5 mb-3">
    <Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
      <Nav.Link className="nav-link " active href="#">
        Home
      </Nav.Link>
      <Nav.Link className="nav-link" href="#">
        About
      </Nav.Link>
      <Nav.Link className="nav-link" href="#">
        Pages
      </Nav.Link>
      <Nav.Link className="nav-link" href="#">
        Custom
      </Nav.Link>
    </Nav>
  </div>
  <div className="p-3 br-5 bg-secondary mb-3">
    <Nav className="nav main-nav main-nav-colored-bg main-nav-dark flex-column flex-md-row">
      <Nav.Link className="nav-link " active href="#">
        Home
      </Nav.Link>
      <Nav.Link className="nav-link" href="#">
        About
      </Nav.Link>
      <Nav.Link className="nav-link" href="#">
        Pages
      </Nav.Link>
      <Nav.Link className="nav-link" href="#">
        Custom
      </Nav.Link>
    </Nav>
  </div>
</div>
    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          <Card className=" custom-card" id="tab">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Simple Tab Navigation</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setSimple(!Simple)}
                      className="showcode d-flex ms-auto" /></Form>
                </div>
                <p className="text-muted card-sub-title">
                  Below is a tab navigation that have only few links.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="border">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="link-29">
                      <div className="bg-gray-100 nav-bg">

                        <Nav className="nav nav-tabs">
                          <Nav.Item>
                            <Nav.Link eventKey="link-29" >
                              Home
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-30" >
                              About
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="link-31" >
                              Contact
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>

                      </div>
                      <Tab.Content className="card-body ">
                        <Tab.Pane eventKey="link-29">
                          Nam libero tempore, cum soluta nobis est eligendi optio
                          cumque nihil impedit quo minus id quod maxime placeat
                          facere possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-30">
                          At vero eos et accusamus et iusto odio dignissimos ducimus
                          qui blanditiis praesentium voluptatum deleniti atque
                          corrupti quos dolores et quas molestias excepturi sint
                          occaecati cupiditate non provident, similique sunt in
                          culpa qui officia deserunt mollitia animi, id est laborum
                          et dolorum fuga.
                        </Tab.Pane>
                        <Tab.Pane eventKey="link-31">
                          At vero eos et accusamus et iusto odio dignissimos ducimus
                          qui blanditiis praesentium voluptatum deleniti atque
                          corrupti quos dolores et quas molestias excepturi sint
                          occaecati cupiditate non provident, similique sunt in
                          culpa qui officia deserunt mollitia animi, id est laborum
                          et dolorum fuga.
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              <Collapse in={Simple} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
  <div className="border">
    <Tab.Container id="left-tabs-example" defaultActiveKey="link-29">
        <div className="bg-gray-100 nav-bg">
          <Nav className="nav nav-tabs">
            <Nav.Item>
              <Nav.Link eventKey="link-29" >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-30" >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-31" >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content className="card-body ">
          <Tab.Pane eventKey="link-29">
            Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
          </Tab.Pane>
          <Tab.Pane eventKey="link-30">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum
            et dolorum fuga.
          </Tab.Pane>
          <Tab.Pane eventKey="link-31">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum
            et dolorum fuga.
          </Tab.Pane>
        </Tab.Content>
    </Tab.Container>
  </div>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>
  );
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
