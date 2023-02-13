import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Collapse,
  Form,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";

const Tooltips = () =>{ 
  const [Basic,setBasic] = React.useState(false);
  const[Color,setColor] = React.useState(false);
  
  return(
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">TOOLTIPS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              ELements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Tooltips
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}
      <Row>
        <Col xl={12} lg={12}>
          {/* <!-- div --> */}
          <Card className="mg-b-20" id="Tooltip">
            <Card.Body>
              <div className="d-flex">
              <div className="main-content-label mg-b-5">Default Tooltip</div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch" onClick={() => setBasic(!Basic)}
                    className="showcode d-flex ms-auto "/></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="main-content-label main-content-label-sm mg-b-10">
                Static Example
              </div>
              <div className="tooltip-static-demo mg-b-20">
                <Row className="row-sm">
                  <Col sm={6} lg={3}>
                    <div className="tooltip bs-tooltip-top" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the top</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <div className="tooltip bs-tooltip-bottom" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the bottom</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div className="tooltip bs-tooltip-start" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the left</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div className="tooltip bs-tooltip-end" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the right</div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* <!-- tooltip-static-demo --> */}
              <div className="main-content-label main-content-label-sm mg-b-10">
                Example
              </div>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm tx-center">
                    <Col sm={6} lg={3}>
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Tooltip on top</Tooltip>}
                      >
                        <Button
                          variant=""
                          className="btn btn-primary"
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          title="Tooltip on top"
                          type="button"
                        >
                          Hover me
                        </Button>
                      </OverlayTrigger>
                    </Col>
                    <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                      <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip>Tooltip on bottom</Tooltip>}
                      >
                        <Button
                          variant=""
                          className="btn btn-primary"
                          data-bs-placement="bottom"
                          data-bs-toggle="tooltip"
                          title="Tooltip on bottom"
                          type="button"
                        >
                          Hover me
                        </Button>
                      </OverlayTrigger>
                    </Col>
                    <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                      <OverlayTrigger
                        placement="left"
                        overlay={<Tooltip>Tooltip on left</Tooltip>}
                      >
                        <Button
                          variant=""
                          className="btn btn-primary"
                          data-bs-placement="left"
                          data-bs-toggle="tooltip"
                          title="Tooltip on left"
                          type="button"
                        >
                          Hover me
                        </Button>
                      </OverlayTrigger>
                    </Col>
                    <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                      <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>Tooltip on right</Tooltip>}
                      >
                        <Button
                          variant=""
                          className="btn btn-primary"
                          data-bs-placement="right"
                          data-bs-toggle="tooltip"
                          title="Tooltip on right"
                          type="button"
                        >
                          Hover me
                        </Button>
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Collapse in={Basic} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="example">
    <Row className="row-sm tx-center">
      <Col sm={6} lg={3}>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Tooltip on top</Tooltip>}
        >
          <Button
            variant=""
            className="btn btn-primary"
            data-bs-placement="top"
            data-bs-toggle="tooltip"
            title="Tooltip on top"
            type="button"
          >
            Hover me
          </Button>
        </OverlayTrigger>
      </Col>
    </Row>
</div>
                      `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
               
              </div>
            </Card.Body>
          </Card>
          {/* <!-- /div --> */}

          {/* <!--div--> */}
          <Card className="mg-b-20" id="Tooltip2">
            <Card.Body>
              <div className="d-flex">
              <div className="main-content-label mg-b-5">Colored Tooltip</div>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"onClick={() => setColor(!Color)}
                    className="showcode d-flex ms-auto "/></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication.
              </p>
              <div className="main-content-label main-content-label-sm mg-b-10">
                Static Example
              </div>
              <div className="tooltip-static-demo mg-b-20">
                <Row className="row-sm">
                  <Col sm={6} lg={3}>
                    <div
                      className="tooltip tooltip-primary bs-tooltip-top"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the top</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <div
                      className="tooltip tooltip-secondary bs-tooltip-bottom"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the bottom</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div
                      className="tooltip tooltip-primary1 bs-tooltip-start"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the left</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div
                      className="tooltip tooltip-secondary1 bs-tooltip-end"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the right</div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/*<!-- tooltip-static-demo --> */}
              <div className="main-content-label main-content-label-sm mg-b-10">
                Example
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="bg-gray-200 pd-20">
                    <Row className="row-sm tx-center">
                      <Col sm={6} lg={3}>
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Tooltip on top
                            </Tooltip>
                          }
                        >
                          <Button
                            variant=""
                            className="btn btn-primary"
                            data-bs-placement="top"
                            data-bs-toggle="tooltip-primary"
                            title="Tooltip on top"
                            type="button"
                          >
                            Hover me
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Tooltip on bottom
                            </Tooltip>
                          }
                        >
                          <Button
                            variant=""
                            className="btn btn-primary"
                            data-bs-placement="bottom"
                            data-bs-toggle="tooltip-secondary"
                            title="Tooltip on bottom"
                            type="button"
                          >
                            Hover me
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                        <OverlayTrigger
                          placement="left"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Tooltip on left
                            </Tooltip>
                          }
                        >
                          <Button
                            variant=""
                            className="btn btn-primary"
                            data-bs-placement="left"
                            data-bs-toggle="tooltip-primary1"
                            title="Tooltip on left"
                            type="button"
                          >
                            Hover me
                          </Button>
                        </OverlayTrigger>
                      </Col>
                      <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip className="tooltip tooltip-primary1">
                              Tooltip on right
                            </Tooltip>
                          }
                        >
                          <Button
                            variant=""
                            className="btn btn-primary"
                            data-bs-placement="right"
                            data-bs-toggle="tooltip-secondary1"
                            title="Tooltip on right"
                            type="button"
                          >
                            Hover me
                          </Button>
                        </OverlayTrigger>
                      </Col>
                    </Row>
                  </div>
                  <Collapse in={Color} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="example">
  <div className="bg-gray-200 pd-20">
    <Row className="row-sm tx-center">
      <Col sm={6} lg={3}>
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip className="tooltip tooltip-primary1">
              Tooltip on top
            </Tooltip>
          }
        >
          <Button
            variant=""
            className="btn btn-primary"
            data-bs-placement="top"
            data-bs-toggle="tooltip-primary"
            title="Tooltip on top"
            type="button"
          >
            Hover me
          </Button>
        </OverlayTrigger>
      </Col>
    </Row>
  </div>
</div>
                      `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
                
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!--/div--> */}
      </Row>
      {/* <!-- /row --> */}
    </div>
);
  }

Tooltips.propTypes = {};

Tooltips.defaultProps = {};

export default Tooltips;
