import React from 'react';
import { Breadcrumb, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Widgetnotification = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          WIDGET NOTIFICATION
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Widget notification
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-danger bg-danger-transparent br-5 bd bd-danger">
            <div className="main-error-wrapper">
              <i className="si si-close mg-b-20 tx-50"></i>
              <h4 className="mg-b-20">Data Not Found.</h4>
              <Link className="btn btn-outline-danger btn-sm" to="#">
                Click to view details
              </Link>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-success bg-success-transparent br-5  bd bd-success">
            <div className="main-error-wrapper">
              <i className="si si-check mg-b-20 tx-50"></i>
              <h4 className="mg-b-20">Success Data</h4>
              <Link className="btn btn-outline-success btn-sm" to="#">
                Click to view details
              </Link>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-warning bg-warning-transparent br-5  bd bd-warning">
            <div className="main-error-wrapper">
              <i className="si si-exclamation mg-b-20 tx-50"></i>
              <h4 className="mg-b-20">Warning Alert</h4>
              <Link className="btn btn-outline-warning btn-sm" to="#">
                Click to view details
              </Link>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-info bg-info-transparent br-5 bd bd-info">
            <div className="main-error-wrapper">
              <i className="si si-info mg-b-20 tx-50"></i>
              <h4 className="mg-b-20">Info Alert</h4>
              <Link className="btn btn-outline-info btn-sm" to="#">
                Click to view details
              </Link>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
    {/* <!-- /row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-danger-transparent alert p-0">
          <Card.Header className="text-danger font-weight-bold pt-0 d-flex align-items-center">
            <i className="si si-close tx-13 me-1"></i> Error Data
            <Button
              variant=""
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
              type="button"
            ></Button>
          </Card.Header>
          <Card.Body className="text-danger">
            <strong>Oh snap!</strong> Change a few things up and try submitting
            again.
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-success-transparent alert p-0">
          <Card.Header className="text-success font-weight-bold pt-0 d-flex align-items-center">
            <i className="si si-check tx-13 me-1"></i> Success Data
            <Button
              variant=""
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
              type="button"
            ></Button>
          </Card.Header>
          <Card.Body className="text-success">
            <strong>Well done!</strong> You successfully read this important
            alert message.
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-warning-transparent alert p-0">
          <Card.Header className="text-warning font-weight-bold pt-0 d-flex align-items-center">
            <i className="si si-exclamation tx-13 me-1"></i> warning Data
            <Button
              variant=""
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
              type="button"
            ></Button>
          </Card.Header>
          <Card.Body className="text-warning">
            <strong>Well done!</strong> You successfully read this important
            alert message.
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-info-transparent alert p-0">
          <Card.Header className="text-info font-weight-bold pt-0 d-flex align-items-center">
            <i className="si si-info tx-13 me-1"></i> Info Data
            <Button
              variant=""
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="alert"
              type="button"
            ></Button>
          </Card.Header>
          <Card.Body className="text-info">
            <strong>Heads up!</strong> This alert needs your attention, but it's
            not super important.
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-success text-center rounded">
            <div className="success-widget">
              <i className="si si-check mg-b-20 tx-50 text-success"></i>
              <h3 className="mt-3 text-success">Success!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-info text-center rounded">
            <div className="info-widget">
              <i className="si si-info mg-b-20 tx-50 text-info"></i>
              <h3 className="mt-3 text-info">info!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-danger text-center rounded">
            <i className="si si-close mg-b-20 tx-50 text-danger"></i>
            <div className="danger-widget">
              <h3 className="mt-3 text-danger">Danger!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-warning text-center rounded">
            <i className="si si-exclamation mg-b-20 tx-50 text-warning"></i>
            <div className="warning-widget">
              <h3 className="mt-3 text-warning">Warning!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
    {/* <!-- /row --> */}
    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-success text-center rounded">
            <div className="success-widget">
              <h3 className="text-success">Success!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-info text-center rounded">
            <div className="info-widget">
              <h3 className="text-info">info!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-danger text-center rounded">
            <div className="danger-widget">
              <h3 className="text-danger">Danger!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="bd bd-warning text-center rounded">
            <div className="warning-widget">
              <h3 className="text-warning">Warning!</h3>
              <p className="mt-3 mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-danger">
          <Card.Body className="text-white">
            <div className="main-error-wrapper">
              <i className="si si-close mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Data Not Found.</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-success">
          <Card.Body className="text-white">
            <div className="main-error-wrapper">
              <i className="si si-check mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Submitted Successfully</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-info">
          <Card.Body className="text-white">
            <div className="main-error-wrapper">
              <i className="si si-info mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Info Alert</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20 bg-warning">
          <Card.Body className="text-white">
            <div className="main-error-wrapper">
              <i className="si si-exclamation mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Warning Alert</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-danger">
            <div className="main-error-wrapper">
              <i className="si si-close mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Data Not Found.</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-success">
            <div className="main-error-wrapper">
              <i className="si si-check mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Submitted Successfully</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-info">
            <div className="main-error-wrapper">
              <i className="si si-info mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Info Alert</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
      <Col lg={6} md={12} xl={3}>
        {/* <!--Page Widget Error--> */}
        <Card className="bd-0 mg-b-20">
          <Card.Body className="text-warning">
            <div className="main-error-wrapper">
              <i className="si si-exclamation mg-b-20 tx-50"></i>
              <h4 className="mg-b-0">Warning Alert</h4>
            </div>
          </Card.Body>
        </Card>
        {/* <!--Page Widget Error--> */}
      </Col>
    </Row>
    {/* <!-- /row --> */}
    <Row className="row-sm">
      <Col xl={4} md={6} lg={6}>
        <Card className="mg-b-20 text-center">
          <Card.Body className="h-100">
            <img
              src={require("../../../assets/img/svgicons/no-data.svg").default}
              alt=""
              className="wd-35p"
            />
            <h5 className="mg-b-10 mg-t-15 tx-18">Items Not Found</h5>
            <Link to="#" className="text-muted">
              Check The Settings
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} md={6} lg={6}>
        <Card className="mg-b-20 text-center">
          <Card.Body className="h-100">
            <img
              src={require("../../../assets/img/svgicons/note_taking.svg").default}
              alt=""
              className="wd-35p"
            />
            <h5 className="mg-b-10 mg-t-15 tx-18">Its Empty In Here</h5>
            <Link to="#" className="text-muted">
              Check The Settings
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} md={6} lg={6}>
        <Card className="mg-b-20 text-center">
          <Card.Body className="h-100">
            <img
              src={require("../../../assets/img/svgicons/imac.svg").default}
              alt=""
              className="wd-40p"
            />
            <h5 className="mg-b-10 mg-t-15 tx-18">No Site Selected</h5>
            <Link to="#" className="text-muted">
              Check The Settings
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
  </div>
);

Widgetnotification.propTypes = {};

Widgetnotification.defaultProps = {};

export default Widgetnotification;
