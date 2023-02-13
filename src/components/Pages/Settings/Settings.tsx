import React from 'react';
import { Breadcrumb, Card, Col, Form, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Settings = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">SETTINGS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Settings
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={4}xl={3}>
        <Card className="card custom-card">
          <Card.Header className="card-header">
            <Card.Title>Settings</Card.Title>
          </Card.Header>
          <Card.Body className="main-content-left main-content-left-mail card-body">
            <div className="main-settings-menu">
              <Nav className="nav main-nav-column" defaultActiveKey="Main">
                <Nav.Item as="li">
                  <Nav.Link className="nav-link thumb  mb-2" eventKey="Main">
                    <i className="fe fe-home"></i> Main{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="nav-link thumb mb-2" eventKey="WebApps">
                    <i className="fe fe-grid"></i> Web Apps
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="nav-link thumb mb-2" eventKey="General">
                    <i className="fe fe-server"></i> General
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    className="nav-link thumb mb-2"
                    eventKey="Components"
                  >
                    <i className="fe fe-globe"></i> Components
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="nav-link thumb mb-2" eventKey="Pages">
                    <i className="fe fe-layers"></i> Pages
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className="nav-link thumb mb-2" eventKey="Language">
                    <i className="fe fe-flag"></i> Language & Region
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    className="nav-link thumb mb-2"
                    eventKey="Notifications"
                  >
                    <i className="fe fe-bell"></i> Notifications
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={8}xl={9}>
        <Card className="card custom-card">
          <Card.Header className="card-header">
            <Card.Title>Overview</Card.Title>
            <p>Used to customize and manage all settngs about this Dashboard</p>
          </Card.Header>
        </Card>
        <Row>
          <Col lg={12} xl={6} md={12} sm={12} className=" p-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-home"></i>
                      </div>
                      <div>
                        <p className="tx-20 font-weight-semibold d-flex mb-0">
                          Dashboard
                        </p>
                        <p className="tx-13 text-muted mb-0">
                          Dashboard Settings such as sidemenu,header and main
                          page can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Form.Label className="custom-switch float-end mb-0">
                  <Link to="#" className="tx-14 mb-0 me-2">
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox3"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator custom-radius"></span>
                </Form.Label>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={12} xl={6} md={12} sm={12} className=" p-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-grid"></i>
                      </div>
                      <div>
                        <p className="tx-20 font-weight-semibold d-flex mb-0">
                          Webapps
                        </p>
                        <p className="tx-13 text-muted mb-0">
                          Web apps settings such as Apps,Elements,Advanced Ui &
                          Mail can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Form.Label className="custom-switch float-end mb-0">
                  <Link to="#" className="tx-14 mb-0 me-2">
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox3"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator custom-radius"></span>
                </Form.Label>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={12} xl={6} md={12} sm={12} className=" p-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-server"></i>
                      </div>
                      <div>
                        <p className="tx-20 font-weight-semibold d-flex mb-0">
                          General
                        </p>
                        <p className="tx-13 text-muted mb-0">
                          General settings such as Icons,Charts,Ecommerce can be
                          Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Form.Label className="custom-switch float-end mb-0">
                  <Link to="#" className="tx-14 mb-0 me-2">
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox3"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator custom-radius"></span>
                </Form.Label>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={12} xl={6} md={12} sm={12} className=" p-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-flag"></i>
                      </div>
                      <div>
                        <p className="tx-20 font-weight-semibold d-flex mb-0">
                          Region & language
                        </p>
                        <p className="tx-13 text-muted mb-0">
                          In this settings we can change the region and language
                          manually.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Form.Label className="custom-switch float-end mb-0">
                  <Link to="#" className="tx-14 mb-0 me-2">
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox3"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator custom-radius"></span>
                </Form.Label>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={12} xl={6} md={12} sm={12} className=" p-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-bell"></i>
                      </div>
                      <div>
                        <p className="tx-20 font-weight-semibold d-flex mb-0">
                          Notifiation
                        </p>
                        <p className="tx-13 text-muted mb-0">
                          Notification settings we can control the notification
                          privacy and security.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Form.Label className="custom-switch float-end mb-0">
                  <Link to="#" className="tx-14 mb-0 me-2">
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox3"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator custom-radius"></span>
                </Form.Label>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={12} xl={6} md={12} sm={12} className=" p-2">
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-settings"></i>
                      </div>
                      <div>
                        <p className="tx-20 font-weight-semibold d-flex mb-0">
                          Blog
                        </p>
                        <p className="tx-13 text-muted mb-0">
                          In this settings we can modify all Blog related
                          settings in this template.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Form.Label className="custom-switch float-end mb-0">
                  <Link to="#" className="tx-14 mb-0 me-2">
                    Restore default
                  </Link>
                  <input
                    type="checkbox"
                    name="custom-switch-checkbox3"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator custom-radius"></span>
                </Form.Label>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    {/* <!--/ row --> */}
  </div>
);

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
