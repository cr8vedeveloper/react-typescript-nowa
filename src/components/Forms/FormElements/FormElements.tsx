import React from 'react';
import { Breadcrumb, Button, Card, Col, Form, FormGroup, InputGroup, Row } from 'react-bootstrap';
import { Brand, Classicmethod, Customize, DateAndTimePickers, Datepicker, Disabled, Monolithmethod, Monthrange, Nanomethod, Yearrange } from './data';

const FormElements = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          FORM ELEMENTS
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
            Form Elements
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className=" row-sm">
      <Col lg={6} xl={6} md={12} sm={12}>
        <Card className="box-shadow-0">
          <Card.Header>
            <h4 className="card-title mb-1">Default Form</h4>
            <p className="mb-2">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
          </Card.Header>
          <Card.Body className=" pt-0">
            <Form className="form-horizontal">
              <FormGroup className="form-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Control
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Control
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup className="form-group mb-0 justify-content-end">
                <div className="checkbox">
                  <div className="custom-checkbox custom-control">
                    <Form.Control
                      type="checkbox"
                      data-checkboxes="mygroup"
                      className="custom-control-input"
                      id="checkbox-2"
                    />
                    <Form.Label
                      htmlFor="checkbox-2"
                      className="custom-control-label mt-1"
                    >
                      Check me Out
                    </Form.Label>
                  </div>
                </div>
              </FormGroup>
              <FormGroup className="form-group mb-0 mt-3 justify-content-end">
                <div>
                  <Button variant="" type="submit" className="btn btn-primary">
                    Sign in
                  </Button>
                  <Button
                    variant=""
                    type="submit"
                    className="btn btn-secondary ms-4"
                  >
                    Cancel
                  </Button>
                </div>
              </FormGroup>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={6} md={12} sm={12}>
        <Card className="box-shadow-0 ">
          <Card.Header>
            <h4 className="card-title mb-1">Vertical Form</h4>
            <p className="mb-2">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
          </Card.Header>
          <Card.Body className=" pt-0">
            <Form>
              <div className="">
                <FormGroup className="form-group">
                  <Form.Label htmlFor="exampleInputEmail1">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label htmlFor="exampleInputPassword1">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </FormGroup>
                <div className="checkbox">
                  <div className="custom-checkbox custom-control">
                    <Form.Control
                      type="checkbox"
                      data-checkboxes="mygroup"
                      className="custom-control-input"
                      id="checkbox-1"
                    />
                    <Form.Label
                      htmlFor="checkbox-1"
                      className="custom-control-label mt-1"
                    >
                      Check me Out
                    </Form.Label>
                  </div>
                </div>
              </div>
              <Button
                variant=""
                type="submit"
                className="btn btn-primary mt-3 mb-0"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12} xl={12} xs={12} sm={12}>
        {/* <!--div--> */}
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Form Input and Textarea
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <div className="col-lg">
                <Form.Control
                  className="form-control"
                  placeholder="Input box"
                  type="text"
                />
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control
                  className="form-control"
                  placeholder="Input box (readonly)"
                  readOnly
                  type="text"
                />
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <Form.Control
                  className="form-control"
                  disabled
                  placeholder="Input box (disabled)"
                  type="text"
                />
              </div>
            </Row>
            <Row className="row-sm mg-t-20">
              <div className="col-lg">
                <textarea
                  className="form-control"
                  placeholder="Textarea"
                  rows={3}
                ></textarea>
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <textarea
                  className="form-control"
                  placeholder="Textarea (readonly)"
                  readOnly
                  rows={3}
                ></textarea>
              </div>
              <div className="col-lg mg-t-10 mg-lg-t-0">
                <textarea
                  className="form-control"
                  disabled
                  placeholder="Texarea (disabled)"
                  rows={3}
                ></textarea>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Form Input Sizes</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <div className="col-lg">
                <Form.Control
                  className="form-control form-control-sm mg-b-20"
                  placeholder="Input sm box"
                  type="text"
                />
                <Form.Control
                  className="form-control mg-b-20"
                  placeholder="Input box"
                  type="text"
                />
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="Input lg box"
                  type="text"
                />
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Valid State Input</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Form className="needs-validation was-validated">
              <Row className=" row-sm">
                <Col lg={6}>
                  <FormGroup className="form-group has-success mg-b-0">
                    <Form.Control
                      className="form-control"
                      placeholder="Input box (success state)"
                      required
                      type="text"
                      defaultValue="This is input"
                    />
                    <textarea
                      className="form-control mg-t-20"
                      placeholder="Textarea (success state)"
                      required
                      rows={3}
                      defaultValue="This is textarea"
                    ></textarea>
                  </FormGroup>
                </Col>
                <Col lg={6} className=" mg-t-20 mg-lg-t-0">
                  <FormGroup className="form-group has-danger mg-b-0">
                    <Form.Control
                      className="form-control"
                      placeholder="Input box (invalid state)"
                      required
                      type="text"
                    />
                    <textarea
                      className="form-control mg-t-20"
                      placeholder="Textarea (invalid state)"
                      required
                      rows={3}
                    ></textarea>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">File Browser</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <Col sm={12} md={12} lg={12}>
                <div className="mb-3">
                  <Form.Label htmlFor="formFile" className="form-label">
                    Default file input example
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="formFileMultiple" className="form-label">
                    Multiple files input example
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
                <div className="mb-3">
                  <Form.Label htmlFor="formFileDisabled" className="form-label">
                    Disabled file input example
                  </Form.Label>
                  <Form.Control
                    className="form-control"
                    type="file"
                    id="formFileDisabled"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">
                    Small file input example
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                  />
                </div>
                <div>
                  <Form.Label htmlFor="formFileLg" className="form-label">
                    Large file input example
                  </Form.Label>
                  <Form.Control
                    className="form-control form-control-lg"
                    id="formFileLg"
                    type="file"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={6} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-10">
              Custom Checkboxes &amp; Radios
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row>
              <Col lg={3}>
                <label className="ckbox">
                  <input
                   type="checkbox" />
                  <span>Checkbox Unchecked</span>
                </label>
              </Col>
              <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                <label className="ckbox">
                  <input defaultChecked type="checkbox" />
                  <span>Checkbox Checked</span>
                </label>
              </Col>
              <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                <label className="ckbox">
                  <input disabled type="checkbox" />
                  <span>Checkbox Disabled</span>
                </label>
              </Col>
            </Row>
            <Row className="mg-t-15">
              <Col lg={3}>
                <label className="rdiobox">
                  <input name="rdio" type="radio" />{" "}
                  <span>Radio Unchecked</span>
                </label>
              </Col>
              <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                <label className="rdiobox">
                  <input defaultChecked name="rdio" type="radio" />{" "}
                  <span>Radio Checked</span>
                </label>
              </Col>
              <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                <label className="rdiobox">
                  <input disabled name="rdio" type="radio" />{" "}
                  <span>Radio Disabled</span>
                </label>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={6} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Toggle Switches</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <div className="main-toggle-group-demo">
              <div className="main-toggle">
                <span></span>
              </div>
              <div className="main-toggle main-toggle-secondary">
                <span></span>
              </div>
              <div className="main-toggle main-toggle-success">
                <span></span>
              </div>
              <div className="main-toggle main-toggle-dark">
                <span></span>
              </div>
            </div>
            <div className="main-toggle-group-demo mg-t-10">
              <div className="main-toggle on">
                <span></span>
              </div>
              <div className="main-toggle main-toggle-secondary on">
                <span></span>
              </div>
              <div className="main-toggle main-toggle-success on">
                <span></span>
              </div>
              <div className="main-toggle main-toggle-dark on">
                <span></span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Input Groups</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <Col lg={4}>
                <InputGroup className="input-group mb-3">
                  <InputGroup.Text
                    className="input-group-text"
                    id="basic-addon1"
                  >
                    @
                  </InputGroup.Text>
                  <Form.Control
                    aria-describedby="basic-addon1"
                    aria-label="Username"
                    className="form-control"
                    placeholder="Username"
                    type="text"
                  />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              <Col lg={4}>
                <InputGroup className="input-group mb-3">
                  <Form.Control
                    aria-describedby="basic-addon2"
                    aria-label="Recipient's username"
                    className="form-control"
                    placeholder="Recipient's username"
                    type="text"
                  />
                  <InputGroup.Text
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    @example.com
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col lg={4}>
                <InputGroup className="input-group mb-3">
                  <InputGroup.Text className="input-group-text">
                    $
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    className="form-control"
                    type="text"
                  />
                  <InputGroup.Text className="input-group-text">
                    .00
                  </InputGroup.Text>
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
            </Row>
            <Row className=" row-sm">
              <Col lg={4}>
                <InputGroup className="input-group">
                  <div className="input-group-text">
                    <label className="ckbox wd-16 mg-b-0">
                      <input className="mg-0" type="checkbox" />
                      <span></span>
                    </label>
                  </div>
                  <Form.Control
                    className="form-control"
                    placeholder="Text input with checkbox"
                    type="text"
                  />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              {/* <!-- col-4 --> */}
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group">
                  <div className="input-group-text">
                    <label className="rdiobox wd-16 mg-b-0">
                      <input type="radio" />
                      <span></span>
                    </label>
                  </div>
                  <Form.Control
                    className="form-control"
                    placeholder="Text input with radiobox"
                    type="text"
                  />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              {/* <!-- col-4 --> */}
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group">
                  <Form.Control
                    className="form-control"
                    placeholder="Search for..."
                    type="text"
                  />
                  <Button
                    variant=""
                    className="btn btn-primary br-ts-0 br-bs-0"
                    type="button"
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              {/* <!-- col-4 --> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">Input Mask</div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <Col lg={3}>
                <InputGroup className="input-group">
                  <InputGroup.Text className="input-group-text">
                    Date:
                  </InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    id="dateMask"
                    placeholder="MM/DD/YYYY"
                    type="text"
                  />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              {/* <!-- col-4 --> */}
              <Col lg={3} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group">
                  <InputGroup.Text className="input-group-text">
                    Phone:
                  </InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    id="phoneMask"
                    placeholder="(000) 000-0000"
                    type="text"
                  />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group">
                  <InputGroup.Text className="input-group-text">
                    Phone + Ext.:
                  </InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    id="phoneExtMask"
                    placeholder="(000) 000-0000 ext 0000"
                    type="text"
                  />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              <Col lg={2} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group">
                  <InputGroup.Text className="input-group-text">
                    SSN:
                  </InputGroup.Text>
                  {/* <!-- input-group-text --> */}
                  <Form.Control
                    className="form-control"
                    id="ssnMask"
                    placeholder="000-00-0000"
                    type="text"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}

      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Header>
            <h4 className="card-title mb-1">Color Picker</h4>
            <p className="mb-2">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
          </Card.Header>

          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <div className="theme-container">
                  <Button variant="">classic</Button>
                </div>
                <div className="pickr-container">
                  <Classicmethod />
                </div>
              </div>
              <div>
                <div className="theme-container1">
                  <Button variant="">monolith</Button>
                </div>
                <div className="pickr-container1">
                  <Monolithmethod />
                </div>
              </div>
              <div>
                <div className="theme-container2">
                  <Button variant="">nano</Button>
                </div>
                <div className="pickr-container2">
                  <Nanomethod />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              DATE, MONTH, YEAR RANGE PICKER
            </div>
            <Row className=" row-sm">
              <Col lg={4} className="">
                <InputGroup className="input-group reactdate-pic">
                  <InputGroup.Text className="input-group-text">
                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                  </InputGroup.Text>
                  <Datepicker />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              {/* <!-- col-4 --> */}
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group reactdate-pic">
                  <InputGroup.Text className="input-group-text">
                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                  </InputGroup.Text>
                  <Monthrange />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
              <Col lg={4} className=" mg-t-20 mg-lg-t-0">
                <InputGroup className="input-group reactdate-pic">
                  <InputGroup.Text className="input-group-text">
                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                  </InputGroup.Text>
                  <Yearrange />
                </InputGroup>
                {/* <!-- input-group --> */}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={6} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Datetimepicker Style 2
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <InputGroup className="input-group col-xl-9 datetimepicker-2">
                <InputGroup.Text className="input-group-text ">
                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                </InputGroup.Text>
                <DateAndTimePickers />
              </InputGroup>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={6} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Datetimepicker Style 3
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <Row className=" row-sm">
              <InputGroup className="input-group col-md-6">
                <InputGroup.Text className="input-group-text">
                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  defaultValue="January 20, 2019 09:00"
                  id="datetimepicker3"
                  className="form-control"
                />
              </InputGroup>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Select</h3>
          </Card.Header>
          <Card.Body>
            <p>
              Customize the native{" "}
              <code className="highlighter-rouge">&lt;select&gt;</code>s with
              custom CSS that changes the element’s initial appearance.
            </p>
            <FormGroup className="form-group">
              <Form.Label className="form-label">Default Select</Form.Label>
              <Brand />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="form-label">Customize Select</Form.Label>
              <Customize />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="form-label">Disabled Select</Form.Label>
              <Disabled />
            </FormGroup>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

FormElements.propTypes = {};

FormElements.defaultProps = {};

export default FormElements;
