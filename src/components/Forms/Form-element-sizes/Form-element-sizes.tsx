import React from 'react';
import { Breadcrumb, Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';


const Formelementsizes = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          FORM ELEMENT SIZES
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Forms
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Form Element Sizes
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <h3 className="mb-0 card-title">Form Element Sizes</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={12}>
                <p>
                  Form control small Size add className{" "}
                  <code className="highlighter-rouge">.form-control-sm</code> to{" "}
                  <code className="highlighter-rouge">.form-control</code>
                </p>
                <FormGroup className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control form-control-sm"
                    name="input"
                  />
                </FormGroup>
              </Col>
              <Col xl={12}>
                <FormGroup className="form-group">
                  <label>
                    Form Control Medium Size{" "}
                    <code className="highlighter-rouge">.form-control</code>
                  </label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="input"
                  />
                </FormGroup>
              </Col>
              <Col xl={12}>
                <FormGroup className="form-group">
                  <p>
                    Form control small Size add className{" "}
                    <code className="highlighter-rouge">.form-control-lg</code>{" "}
                    to <code className="highlighter-rouge">.form-control</code>
                  </p>
                  <Form.Control
                    type="text"
                    className="form-control form-control-lg"
                    name="input"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3 className="mb-0 card-title">Checkbox Sizes</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={4}>
                <FormGroup className="form-group m-0">
                  <Form.Label className="form-label mb-4">
                    Checkboxes
                  </Form.Label>
                  <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-checkbox">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">Option 1</span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label">Option 2</span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label">
                        Option Disabled
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked
                        disabled
                      />
                      <span className="custom-control-label">
                        Option Disabled defaultChecked
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group m-0">
                  <Form.Label className="form-label mb-4">
                    Checkboxes Medium Sizes
                  </Form.Label>
                  <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-checkbox custom-control-md">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option 1
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox custom-control-md">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option 2
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox custom-control-md">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option Disabled
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox custom-control-md">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option Disabled defaultChecked
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group m-0">
                  <Form.Label className="form-label mb-4">
                    Checkboxes Large Size
                  </Form.Label>
                  <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-checkbox custom-control-lg">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option 1
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox custom-control-lg">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option 2
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox custom-control-lg">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-checkbox custom-control-lg">
                      <Form.Control
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled defaultChecked
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3 className="mb-0 card-title">Radio Sizes</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={4}>
                <FormGroup className="form-group ">
                  <Form.Label className="form-label">Radios</Form.Label>
                  <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-radio">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">Option 1</span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option2"
                      />
                      <span className="custom-control-label">Option 2</span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label">
                        Option Disabled
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios02"
                        value="option4"
                        disabled
                        defaultChecked
                      />
                      <span className="custom-control-label">
                        Option Disabled defaultChecked
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group ">
                  <Form.Label className="form-label">Medium Radios</Form.Label>
                  <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-radio custom-control-md">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option 1
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio custom-control-md">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option 2
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio custom-control-md">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option Disabled
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio custom-control-md">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios12"
                        value="option4"
                        disabled
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md  tx-17">
                        Option Disabled defaultChecked
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group ">
                  <Form.Label className="form-label">Large Radios</Form.Label>
                  <div className="custom-controls-stacked">
                    <Form.Label className="custom-control custom-radio custom-control-lg">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option 1
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio custom-control-lg">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-lg tx-20">
                        Option 2
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio custom-control-lg">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled
                      </span>
                    </Form.Label>
                    <Form.Label className="custom-control custom-radio custom-control-lg">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios22"
                        value="option4"
                        disabled
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg  tx-20">
                        Option Disabled defaultChecked
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3 className="mb-0 card-title">Check Box Sizes Switches</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={4}>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-17 me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox1"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description  tx-20 me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl"></span>
                  </Form.Label>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-square"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description  tx-17 me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-20 me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox2"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl custom-square"></span>
                  </Form.Label>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox3"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-radius"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description  tx-17 me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox3"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-20 me-2">
                      Check Box
                    </span>
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-checkbox3"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl custom-radius"></span>
                  </Form.Label>
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <h3 className="mb-0 card-title">Radio Button Sizes Switches</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xl={4}>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description  tx-17 me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description  tx-20 me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl"></span>
                  </Form.Label>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-square"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-17 me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio1"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-20 me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio1"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl custom-square"></span>
                  </Form.Label>
                </FormGroup>
              </Col>
              <Col xl={4} className=" mt-4 mt-xl-0">
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio2"
                      className="custom-switch-input"
                      defaultChecked
                    />
                    <span className="custom-switch-indicator custom-radius"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-17 me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
                  </Form.Label>
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch ps-0">
                    <span className="custom-switch-description tx-20 me-2">
                      Radio Buttons
                    </span>
                    <Form.Control
                      type="radio"
                      name="custom-switch-radio2"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl custom-radius"></span>
                  </Form.Label>
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}
    {/* <!--Row--> */}
    <Row>
      <Col xl={12} md={12}>
        <Card>
          <Card.Header>
            <h4 className="card-title">Form Elements With Sizes</h4>
          </Card.Header>
          <Card.Body>
            <Row className=" p-0 m-0">
              <Col xl={12} className=" p-0">
                <Form.Label className="form-label mb-2 p-0">
                  Form-control small sizes
                </Form.Label>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <Button
                    variant=""
                    className="btn btn-sm btn-primary btn-block"
                  >
                    Small
                  </Button>
                </FormGroup>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <Form.Control
                    className="form-control form-control-sm"
                    placeholder="from-control-sm"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group select2-sm">
                  <select
                    className="form-select form-select-sm select2 select2-sm select2-no-search"
                    id="inputGroupSelect01"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </FormGroup>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <div className="custom-control custom-radio mb-0 mt-1 p-0">
                  <Form.Label className="custom-control custom-radio custom-control">
                    <Form.Control
                      type="radio"
                      className="custom-control-input"
                      name="example-radios1"
                      value="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label custom-control-label">
                      Radio example
                    </span>
                  </Form.Label>
                </div>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <Form.Label className="custom-control custom-checkbox">
                  <Form.Control
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox1"
                    value="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">checkbox example</span>
                </Form.Label>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <Form.Label className="custom-switch form-switch mb-0  p-0">
                  <Form.Control
                    type="checkbox"
                    name="custom-switch-radio"
                    className="custom-switch-input"
                  />
                  <span className="custom-switch-indicator"></span>{" "}
                  <span className="custom-switch-description">
                    Toggle example
                  </span>
                </Form.Label>
              </Col>
            </Row>
            <Row className=" p-0 m-0">
              <Col xl={12} className="  p-0">
                <Form.Label className="form-label mb-2 p-0">
                  Form-control Medium sizes
                </Form.Label>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <Button variant="" className="btn btn-primary btn-block">
                    Medium
                  </Button>
                </FormGroup>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <Form.Control
                    className="form-control"
                    placeholder="from-control"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <select
                    className="form-select form-select select2 select2-no-search"
                    id="inputGroupSelect02"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </FormGroup>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <FormGroup className="form-group">
                  <div className="custom-control custom-radio-md mb-0 mt-1  p-0">
                    <Form.Label className="custom-control custom-radio custom-control-md">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Radio example
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <FormGroup className="form-group">
                  <Form.Label className="custom-control custom-checkbox custom-control-md">
                    <Form.Control
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox1"
                      value="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label custom-control-label-md">
                      checkbox example
                    </span>
                  </Form.Label>
                </FormGroup>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch form-switch mb-0  p-0">
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-lg"></span>{" "}
                    <span className="custom-switch-description">
                      Toggle example
                    </span>
                  </Form.Label>
                </FormGroup>
              </Col>
            </Row>
            <Row className=" p-0 m-0">
              <Col xl={12} className="  p-0">
                <Form.Label className="form-label mb-2 p-0">
                  Form-control Large sizes
                </Form.Label>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <Button
                    variant=""
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Large
                  </Button>
                </FormGroup>
              </Col>
              <Col xl={2}>
                <FormGroup className="form-group">
                  <Form.Control
                    className="form-control form-control-lg"
                    placeholder="from-control-lg"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col xl={2}>
                <div className="form-group select2-lg">
                  <select
                    className="form-select form-select-lg select2 select2-no-search"
                    id="inputGroupSelect03"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <FormGroup className="form-group">
                  <div className="custom-control custom-radio-lg mb-0 mt-1  p-0">
                    <Form.Label className="custom-control custom-radio custom-control-lg">
                      <Form.Control
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Radio example
                      </span>
                    </Form.Label>
                  </div>
                </FormGroup>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <FormGroup className="form-group">
                  <Form.Label className="custom-control custom-checkbox custom-control-lg">
                    <Form.Control
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox1"
                      value="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label custom-control-label-lg">
                      checkbox example
                    </span>
                  </Form.Label>
                </FormGroup>
              </Col>
              <Col xl={2} className="ps-1 pe-1">
                <FormGroup className="form-group">
                  <Form.Label className="custom-switch form-switch mb-0  p-0">
                    <Form.Control
                      type="checkbox"
                      name="custom-switch-radio"
                      className="custom-switch-input"
                    />
                    <span className="custom-switch-indicator custom-switch-indicator-xl"></span>{" "}
                    <span className="custom-switch-description">
                      Toggle example
                    </span>
                  </Form.Label>
                </FormGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

Formelementsizes.propTypes = {};

Formelementsizes.defaultProps = {};

export default Formelementsizes;
