import React, { Fragment, useState } from "react";
import {
  Card,
  Row,
  Col,
  Breadcrumb,
  Button,
} from "react-bootstrap";


const Collapse = () => {
  let [isFirstCollapseds, setisFirstCollapseds] = useState(false);
  let [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  let [isSecondCollapsed, setisSecondCollapsed] = useState(false);
  let firsts = () => {
    if (isFirstCollapseds === false) {
      setisFirstCollapseds(true);
    } else if (isFirstCollapseds === true) {
      setisFirstCollapseds(false);
    }
  };
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  let second = () => {
    console.log(isSecondCollapsed === !isSecondCollapsed);
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    } else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };
  let both = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    } else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    } else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
  };
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">COLLAPSE</span>
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
              Collapse
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  Click the buttons below to show and hide another element via
                  className changes
                </p>
              </div>
              <div>
                <Button variant=""
                  className="btn ripple btn-primary"

                  role="button"
                  onClick={() => firsts()}
                >
                  Toggle Content
                </Button>
                <>
                  {isFirstCollapseds ? (
                    <div className="" id="collapseExample">
                      <div className="mt-4">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                        accusamus terry richardson ad squid. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt
                        sapiente ea proident.
                      </div>
                    </div>) : null}
                </>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Multiple Targets</h6>
                <p className="text-muted card-sub-title">
                  A button or link can show and hide multiple elements by
                  referencing them with a jquery selector in its href or
                  data-bs-target attribute.
                </p>
              </div>
              <div>
                <div className="btn-list">
                  <Button
                    variant=""

                    className="btn ripple btn-primary mb-3 mb-xl-0"

                    role="button"
                    onClick={() => first()}
                  >
                    Toggle First Content
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-secondary mb-3 mb-xl-0"
                    role="button"
                    onClick={() => second()}
                  >
                    Toggle Second Content
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-success mb-3 mb-xl-0"
                    role="button"
                    onClick={() => both()}
                  >
                    Toggle Both Contents
                  </Button>
                </div>
                <Row className="row-sm">
                  {isFirstCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="mt-4">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {isSecondCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="mt-4">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  ) : null}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
};

Collapse.propTypes = {};

Collapse.defaultProps = {};

export default Collapse;
