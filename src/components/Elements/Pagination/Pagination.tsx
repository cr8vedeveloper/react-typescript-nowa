import React from 'react';
import { Breadcrumb, Card, Col, Row, Pagination, Nav, Form, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Paginations = () => {
  const [Basic, setBasic] = React.useState(false);
  const [Circle, setCircle] = React.useState(false);
  const [Outline, setOutline] = React.useState(false);
  const [Dark, setDark] = React.useState(false);
  const [Color, setColor] = React.useState(false);
  const [Sizes, setSizes] = React.useState(false);
  return (
    <div>
      <div className="main-container container-fluid">
        {/* <!-- breadcrumb --> */}
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <span className="main-content-title mg-b-0 mg-b-lg-1">
              PAGINATION
            </span>
          </div>
          <div className="justify-content-center mt-2">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
                Elements
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className="breadcrumb-item "
                active
                aria-current="page"
              >
                Pagination
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row>
          <Col xl={12} lg={12}>
            <Card>
              <Card.Body>
                <div>
                  <div className='d-flex'>
                    <h6 className="card-title mb-1">BASIC PAGINATION</h6>
                    <Form className="d-flex ms-auto">
                      <Form.Check
                        label="Show Code"
                         type="switch"
                        id="custom-switch"
                        onClick={() => setBasic(!Basic)}
                        className="showcode d-flex ms-auto "
                      />
                    </Form>
                  </div>
                  <p className="text-muted card-sub-title">
                    Below are basic pagination navigation.
                  </p>
                </div>
                <div className="text-wrap">
                  <div className="example">
                    <Pagination className=" mb-0">
                      <Pagination.Item className="page-item">
                        <i className="icon ion-ios-arrow-back"></i>
                      </Pagination.Item>
                      <Pagination.Item className="page-item active">
                        1
                      </Pagination.Item>
                      <Pagination.Item className="page-item">
                        2
                      </Pagination.Item>
                      <Pagination.Item className="page-item">
                        3
                      </Pagination.Item>
                      <Pagination.Item className="page-item">
                        <i className="icon ion-ios-arrow-forward"></i>
                      </Pagination.Item>
                    </Pagination>
                  </div>
                </div>
                <Collapse in={Basic} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Pagination className=" mb-0">
      <Pagination.Item className="page-item">
        <i className="icon ion-ios-arrow-back"></i>
      </Pagination.Item>
      <Pagination.Item className="page-item active">
        1
      </Pagination.Item>
      <Pagination.Item className="page-item">
        2
      </Pagination.Item>
      <Pagination.Item className="page-item">
        3
      </Pagination.Item>
      <Pagination.Item className="page-item">
        <i className="icon ion-ios-arrow-forward"></i>
      </Pagination.Item>
    </Pagination>
  </div>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
            <Card className="card custom-card">
              <Card.Body>
                <div>
                  <div className='d-flex'>
                    <h6 className="card-title mb-1">CIRCLED PAGINATION</h6>
                    <Form className="d-flex ms-auto">
                      <Form.Check
                        label="Show Code"
                         type="switch"
                        id="custom-switch"
                        onClick={() => setCircle(!Circle)}
                        className="showcode d-flex ms-auto "
                      />
                    </Form>
                  </div>
                  <p className="text-muted card-sub-title">
                    Below are basic pagination navigation in circle.
                  </p>
                </div>
                <div className="text-wrap">
                  <div className="example">

                    <Pagination className=" pagination-circled mb-0">
                      <Pagination.Item className="page-item">
                        <i className="icon ion-ios-arrow-back"></i>
                      </Pagination.Item>
                      <Pagination.Item className="page-item active">
                        1
                      </Pagination.Item>
                      <Pagination.Item className="page-item">
                        2
                      </Pagination.Item>
                      <Pagination.Item className="page-item">
                        3
                      </Pagination.Item>
                      <Pagination.Item className="page-item">
                        <i className="icon ion-ios-arrow-forward"></i>
                      </Pagination.Item>
                    </Pagination>
                  </div>
                </div>
                <Collapse in={Circle} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Pagination className=" pagination-circled mb-0">
      <Pagination.Item className="page-item">
        <i className="icon ion-ios-arrow-back"></i>
      </Pagination.Item>
      <Pagination.Item className="page-item active">
        1
      </Pagination.Item>
      <Pagination.Item className="page-item">
        2
      </Pagination.Item>
      <Pagination.Item className="page-item">
        3
      </Pagination.Item>
      <Pagination.Item className="page-item">
        <i className="icon ion-ios-arrow-forward"></i>
      </Pagination.Item>
    </Pagination>
  </div>
</div>
                `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <div>
                  <div className='d-flex'>
                    <h6 className="card-title mb-1">OUT-LINE PAGINATION</h6>
                    <Form className="d-flex ms-auto">
                      <Form.Check
                        label="Show Code"
                         type="switch"
                        id="custom-switch"
                        onClick={() => setOutline(!Outline)}
                        className="showcode d-flex ms-auto "
                      />
                    </Form>
                  </div>
                  <p className="text-muted card-sub-title">
                    Below are basic pagination navigation.
                  </p>
                </div>
                <div className="text-wrap">
                  <div className="example">

                    <div>
                      <ul className="pagination mb-0">
                        <li className=" page-item">
                          <Link
                            className="page-link-outline"
                            to="#"
                          >
                            <i className="icon ion-ios-arrow-back"></i>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link
                            className="page-link-outline"
                            to="#"
                          >
                            1
                          </Link>
                        </li>
                        <li className=" page-item">
                          <Link
                            className="page-link-outline"
                            to="#"
                          >
                            2
                          </Link>
                        </li>
                        <li className=" page-item">
                          <Link
                            className="page-link-outline"
                            to="#"
                          >
                            3
                          </Link>
                        </li>
                        <li className=" page-item">
                          <Link
                            className="page-link-outline"
                            to="#"
                          >
                            <i className="icon ion-ios-arrow-forward"></i>
                          </Link>
                        </li>
                      </ul>
                      <ul className="pagination mt-3">
                        <li className=" page-item">
                          <Link
                            className="page-link-outline radius-50"
                            to="#"
                          >
                            <i className="icon ion-ios-arrow-back"></i>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link
                            className="page-link-outline radius-50"
                            to="#"
                          >
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link-outline radius-50"
                            to="#"
                          >
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link-outline radius-50"
                            to="#"
                          >
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link-outline radius-50"
                            to="#"
                          >
                            <i className="icon ion-ios-arrow-forward"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <Collapse in={Outline} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div>
      <ul className="pagination mb-0">
        <li className=" page-item">
          <Link
            className="page-link-outline"
            to="#"
          >
            <i className="icon ion-ios-arrow-back"></i>
          </Link>
        </li>
        <li className="page-item active">
          <Link
            className="page-link-outline"
            to="#"
          >
            1
          </Link>
        </li>
        <li className=" page-item">
          <Link
            className="page-link-outline"
            to="#"
          >
            2
          </Link>
        </li>
        <li className=" page-item">
          <Link
            className="page-link-outline"
            to="#"
          >
            3
          </Link>
        </li>
        <li className=" page-item">
          <Link
            className="page-link-outline"
            to="#"
          >
            <i className="icon ion-ios-arrow-forward"></i>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
            <Card className="card custom-card">
              <Card.Body>
                <div>
                  <div className='d-flex'>
                    <h6 className="card-title mb-1">
                      PAGINATION FOR DARK BACKGROUND
                    </h6>
                    <Form className="d-flex ms-auto">
                      <Form.Check
                        label="Show Code"
                         type="switch"
                        id="custom-switch"
                        onClick={() => setDark(!Dark)}
                        className="showcode d-flex ms-auto "
                      />
                    </Form>
                  </div>
                  <p className="text-muted card-sub-title">
                    Below are basic pagination navigation for dark background.
                  </p>
                </div>
                <div className="text-wrap">
                  <div className="example  bg-dark">

                    <div className="pd-5 bg-gray-800">
                      <Pagination className=" pagination-dark mb-0 mg-b-0">
                        <Pagination.Item className="page-item">
                          <i className="icon ion-ios-arrow-back"></i>
                        </Pagination.Item>
                        <Pagination.Item className="page-item active">
                          1
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          2
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          3
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                          <i className="icon ion-ios-arrow-forward"></i>
                        </Pagination.Item>
                      </Pagination>
                    </div>

                  </div>
                </div>
                <Collapse in={Dark} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example  bg-dark">
    <div className="pd-20 bg-gray-800">
      <Pagination className=" pagination-dark mb-0 mg-b-0">
        <Pagination.Item className="page-item">
          <i className="icon ion-ios-arrow-back"></i>
        </Pagination.Item>
        <Pagination.Item className="page-item active">
          1
        </Pagination.Item>
        <Pagination.Item className="page-item">
          2
        </Pagination.Item>
        <Pagination.Item className="page-item">
          3
        </Pagination.Item>
        <Pagination.Item className="page-item">
          <i className="icon ion-ios-arrow-forward"></i>
        </Pagination.Item>
      </Pagination>
    </div>
  </div>
</div>
                          `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>

            <Card className="card custom-card">
              <Card.Body>
                <div>
                  <div className='d-flex'>
                    <h6 className="card-title mb-1">COLOR VARIANT PAGINATION</h6>
                    <Form className="d-flex ms-auto">
                      <Form.Check
                        label="Show Code"
                         type="switch"
                        id="custom-switch"
                        onClick={() => setColor(!Color)}
                        className="showcode d-flex ms-auto "
                      />
                    </Form>
                  </div>
                  <p className="text-muted card-sub-title">
                    Below are the available colored pagination variants..
                  </p>
                </div>
                <div className="text-wrap">
                  <div className="example">
                    <Row className="row-sm">
                      <Col sm={6} lg={4} className="">
                        <Pagination className=" pagination-primary mg-sm-b-0">
                          <Pagination.Item className="page-item">
                            <i className="icon ion-ios-arrow-back"></i>
                          </Pagination.Item>
                          <Pagination.Item className="page-item active">
                            1
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            2
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            3
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            <i className="icon ion-ios-arrow-forward"></i>
                          </Pagination.Item>
                        </Pagination>
                      </Col>
                      {/* <!-- col-4 --> */}
                      <Col sm={6} lg={4} className=" mg-sm-t-0">
                        <Pagination className=" pagination-success mb-0">
                          <Pagination.Item className="page-item">
                            <i className="icon ion-ios-arrow-back"></i>
                          </Pagination.Item>
                          <Pagination.Item className="page-item active">
                            1
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            2
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            3
                          </Pagination.Item>
                          <Pagination.Item className="page-item">
                            <i className="icon ion-ios-arrow-forward"></i>
                          </Pagination.Item>
                        </Pagination>
                      </Col>
                      {/* <!-- col-4 --> */}
                    </Row>
                  </div>
                </div>
                <Collapse in={Color} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Row className="row-sm">
        <Col sm={6}lg={4} className="">
          <Pagination className=" pagination-primary mg-sm-b-0">
            <Pagination.Item className="page-item">
              <i className="icon ion-ios-arrow-back"></i>
            </Pagination.Item>
            <Pagination.Item className="page-item active">
              1
           </Pagination.Item>
            <Pagination.Item className="page-item">
              2
           </Pagination.Item>
            <Pagination.Item className="page-item">
              3
           </Pagination.Item>
            <Pagination.Item className="page-item">
              <i className="icon ion-ios-arrow-forward"></i>
            </Pagination.Item>
          </Pagination>
        </Col>
        {/* <!-- col-4 --> */}
        <Col sm={6}lg={4} className=" mg-sm-t-0">
          <Pagination className=" pagination-success mb-0">
            <Pagination.Item className="page-item">
              <i className="icon ion-ios-arrow-back"></i>
            </Pagination.Item>
            <Pagination.Item className="page-item active">
              1
           </Pagination.Item>
            <Pagination.Item className="page-item">
              2
           </Pagination.Item>
            <Pagination.Item className="page-item">
              3
           </Pagination.Item>
            <Pagination.Item className="page-item">
              <i className="icon ion-ios-arrow-forward"></i>
            </Pagination.Item>
          </Pagination>
        </Col>
    </Row>
  </div>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>

            <Card className="card custom-card">
              <Card.Body>
                <div>
                  <div className='d-flex'>
                    <h6 className="card-title mb-1">Pagination Sizes</h6>
                    <Form className="d-flex ms-auto">
                      <Form.Check
                        label="Show Code"
                         type="switch"
                        id="custom-switch"
                        onClick={() => setSizes(!Sizes)}
                        className="showcode d-flex ms-auto "
                      />
                    </Form>
                  </div>
                  <p className="text-muted card-sub-title">
                    Fancy larger, default and smaller pagination Add{" "}
                  </p>
                </div>
                <div className="text-wrap">
                  <div className="example">
                    <Row className="row-sm">
                      <Col sm={6} md={4}>
                        <Nav>
                          <Pagination
                            size="lg"
                            className=" pagination-lg mb-2 mt-2"
                          >
                            <Pagination.Item className="page-item active">
                              1
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                              2
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                              3
                            </Pagination.Item>
                          </Pagination>
                        </Nav>
                      </Col>
                      <Col sm={6} md={4}>
                        <Nav>
                          <Pagination
                          //  size={md}
                           className="  mb-2 mt-2">
                            <Pagination.Item className="page-item active">
                              1
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                              2
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                              3
                            </Pagination.Item>
                          </Pagination>
                        </Nav>
                      </Col>
                      <Col sm={6} md={4} className="mg-t-10 mg-sm-t-0">
                        <Nav>
                          <Pagination
                            size="sm"
                            className=" pagination-sm mb-2 mt-2"
                          >
                            <Pagination.Item className="page-item active">
                              1
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                              2
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                              3
                            </Pagination.Item>
                          </Pagination>
                        </Nav>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Collapse in={Sizes} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Row className="row-sm">
      <Col sm={6}md={4}>
        <Nav>
          <Pagination
            size="lg"
            className=" pagination-lg mb-2 mt-2"
          >
            <Pagination.Item className="page-item active">
              1
           </Pagination.Item>
            <Pagination.Item className="page-item">
              2
           </Pagination.Item>
            <Pagination.Item className="page-item">
              3
           </Pagination.Item>
          </Pagination>
        </Nav>
      </Col>
    </Row>
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
    </div>
  );
}

Paginations.propTypes = {};

Paginations.defaultProps = {};

export default Paginations;
