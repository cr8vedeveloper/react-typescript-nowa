import React from "react";
import {
  Button,
  Breadcrumb,
  Row,
  Col,
  Card,
  Dropdown,
  Form,
  Collapse,
} from "react-bootstrap";

const Buttons = () => {
  const [Dropdownbutton, setDropdownbutton] = React.useState(false);
  const [Default, setDefault] = React.useState(false);
  const [Disabled, setDisabled] = React.useState(false);
  const [Gradient, setGradient] = React.useState(false);
  const [Light, setLight] = React.useState(false);
  const [Outline, setOutline] = React.useState(false);
  const [Rounded, setRounded] = React.useState(false);
  const [Roundedoutline, setRoundedoutline] = React.useState(false);
  const [Loading, setLoading] =React.useState(false);
  const [Icon, setIcon] = React.useState(false);
  const [Icons, setIcons] = React.useState(false);
  const [Size, setSize] = React.useState(false);
  const [Width, setWidth] = React.useState(false);
  const [Sizelg, setSizelg] = React.useState(false);
  const [Check,setCheck] = React.useState(false);
  const [Radio,setRadio] = React.useState(false);
  const [Toolbar,setToolbar] = React.useState(false);
  const [Toggle,setToggle] = React.useState(false);
  const [Buttongroup,setButtongroup] =React.useState(false)
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">BUTTONS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              ELements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item " active
              aria-current="page"
            >
              Buttons
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card id="button1">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Default Buttons</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setDefault(!Default)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20">
                Below example buttons are basic default buttons..
              </p>
               
              <div className="text-wrap">
                <div className="example">
                  
                  <div className="btn-list">
                    <Button variant="" className="btn me-2 btn-primary">
                      Primary
                    </Button>
                    <Button variant="" className="btn me-2 btn-secondary">
                      Secondary
                    </Button>
                    <Button variant="" className="btn me-2 btn-success">
                      Success
                    </Button>
                    <Button variant="" className="btn me-2 btn-info">
                      Info
                    </Button>
                    <Button variant="" className="btn me-2 btn-warning">
                      Warning
                    </Button>
                    <Button variant="" className="btn me-2 btn-danger">
                      Danger
                    </Button>
                    <Button variant="" className="btn me-2 btn-light">
                      Light
                    </Button>
                    <Button variant="" className="btn me-2 btn-link ">
                      Link
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={Default} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
  <div className="btn-list">
      <Button variant="" className="btn me-2 btn-primary">
          Primary
      </Button>
      <Button variant="" className="btn me-2 btn-secondary">
          Secondary
      </Button>
      <Button variant="" className="btn me-2 btn-success">
          Success
      </Button>
      <Button variant="" className="btn me-2 btn-info">
          Info
      </Button>
      <Button variant="" className="btn me-2 btn-warning">
          Warning
      </Button>
      <Button variant="" className="btn me-2 btn-danger">
          Danger
      </Button>
      <Button variant="" className="btn me-2 btn-light">
          Light
      </Button>
      <Button variant="" className="btn me-2 btn-link">
          Link
      </Button>
                </div>
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
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Disabled Buttons</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setDisabled(!Disabled)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="mg-b-20">
                Below example buttons are Disabled Buttons..
              </p>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button
                      variant=""
                      className="btn me-2 btn-primary disabled"
                    >
                      Primary
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-secondary disabled"
                    >
                      Secondary
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-success disabled"
                    >
                      Success
                    </Button>
                    <Button variant="" className="btn me-2 btn-info disabled">
                      Info
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-warning disabled"
                    >
                      Warning
                    </Button>
                    <Button variant="" className="btn me-2 btn-danger disabled">
                      Danger
                    </Button>
                    <Button variant="" className="btn me-2 btn-light disabled">
                      Light
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={Disabled} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <div className="btn-list">
        <Button variant='' className="btn me-2 btn-primary disabled">
          Primary
        </Button>
        <Button variant='' className="btn me-2 btn-secondary disabled">
          Secondary
        </Button>
        <Button variant='' className="btn me-2 btn-success disabled">
          Success
        </Button>
        <Button variant='' className="btn me-2 btn-info disabled">
          Info
        </Button>
        <Button variant='' className="btn me-2 btn-warning disabled">
          Warning
        </Button>
        <Button variant='' className="btn me-2 btn-danger disabled">
          Danger
        </Button>
        <Button variant='' className="btn me-2 btn-light disabled">
          Light
        </Button>
     </div>
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
          <Card id="button33">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title mg-b-10">Gradient Buttons</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setGradient(!Gradient)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20">
                Below example buttons are basic Gradient buttons..
              </p>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button
                      variant=""
                      className="btn me-2 btn-primary-gradient "
                    >
                      Primary
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-secondary-gradient "
                    >
                      Secondary
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-success-gradient "
                    >
                      Success
                    </Button>
                    <Button variant="" className="btn me-2 btn-info-gradient ">
                      Info
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-warning-gradient "
                    >
                      Warning
                    </Button>
                    <Button
                      variant=""
                      className="btn me-2 btn-danger-gradient "
                    >
                      Danger
                    </Button>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Gradient} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div className="btn-list">
      <Button variant='' className="btn me-2 btn-primary-gradient ">
          Primary
      </Button>
      <Button variant='' className="btn me-2 btn-secondary-gradient ">
          Secondary
      </Button>
      <Button variant='' className="btn me-2 btn-success-gradient ">
          Success
      </Button>
      <Button variant='' className="btn me-2 btn-info-gradient ">
          Info
      </Button>
      <Button variant='' className="btn me-2 btn-warning-gradient ">
          Warning
      </Button>
      <Button variant='' className="btn me-2 btn-danger-gradient ">
          Danger
      </Button>
    </div>
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
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Light Buttons</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setLight(!Light)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="mg-b-20">
                Below example buttons are basic transparent light buttons..
              </p>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="" className="btn btn-primary-light ">
                      Primary
                    </Button>
                    <Button variant="" className="btn btn-secondary-light ">
                      Secondary
                    </Button>
                    <Button variant="" className="btn btn-success-light ">
                      Success
                    </Button>
                    <Button variant="" className="btn btn-info-light ">
                      Info
                    </Button>
                    <Button variant="" className="btn btn-warning-light ">
                      Warning
                    </Button>
                    <Button variant="" className="btn btn-danger-light ">
                      Danger
                    </Button>
                    <Button variant="" className="btn  btn-dark-light  text-dark">
                      Dark
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={Light} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div className="btn-list">
        <Button variant='' className="btn btn-primary-light ">
          Primary
        </Button>
        <Button variant='' className="btn btn-secondary-light ">
          Secondary
        </Button>
        <Button variant='' className="btn btn-success-light ">
          Success
        </Button>
        <Button variant='' className="btn btn-info-light ">
          Info
        </Button>
        <Button variant='' className="btn btn-warning-light ">
          Warning
        </Button>
        <Button variant='' className="btn btn-danger-light ">
          Danger
        </Button>
        <Button variant='' className="btn  btn-dark-light  ">
          Dark
        </Button>
    </div>
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
          <Card id="button2">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Outline Buttons</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setOutline(!Outline)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20">
                Below example buttons are basic Outline Buttons..
              </p>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button variant="" className="btn btn-outline-primary ">
                      Primary
                    </Button>
                    <Button variant="" className="btn btn-outline-secondary ">
                      Secondary
                    </Button>
                    <Button variant="" className="btn btn-outline-success ">
                      Success
                    </Button>
                    <Button variant="" className="btn btn-outline-info ">
                      Info
                    </Button>
                    <Button variant="" className="btn btn-outline-warning ">
                      Warning
                    </Button>
                    <Button variant="" className="btn btn-outline-danger ">
                      Danger
                    </Button>
                    <Button variant="" className="btn btn-outline-dark text-dark ">
                      Dark
                    </Button>
                    <Button variant="" className="btn btn-outline-light  ">
                      Light
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={Outline} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <div className="btn-list">
          <Button variant='' className="btn btn-outline-primary ">
            Primary
          </Button>
          <Button variant='' className="btn btn-outline-secondary ">
            Secondary
          </Button>
          <Button variant='' className="btn btn-outline-success ">
            Success
          </Button>
          <Button variant='' className="btn btn-outline-info ">
            Info
          </Button>
          <Button variant='' className="btn btn-outline-warning ">
            Warning
          </Button>
          <Button variant='' className="btn btn-outline-danger ">
            Danger
          </Button>
          <Button variant='' className="btn btn-outline-dark  ">
            Dark
          </Button>
          <Button variant='' className="btn btn-outline-light  ">
            Light
          </Button>
      </div>
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
          <Card id="button38">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">ROUNDED BUTTONS</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setRounded(!Rounded)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20">
                Below example buttons are basic rounded Buttons..
              </p>
              <div className="text-wrap">
                <div className="example">
                 
                  <div className="btn-list">
                    <Button variant="" className="btn btn-primary btn-rounded">
                      Primary
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-secondary  btn-rounded "
                    >
                      Secondary
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-success   btn-rounded"
                    >
                      Success
                    </Button>
                    <Button variant="" className="btn btn-info  btn-rounded">
                      Info
                    </Button>
                    <Button variant="" className="btn btn-warning  btn-rounded">
                      Warning
                    </Button>
                    <Button variant="" className="btn btn-danger  btn-rounded">
                      Danger
                    </Button>
                    <Button variant="" className="btn btn-dark   btn-rounded">
                      Dark
                    </Button>
                    <Button variant="" className="btn btn-light   btn-rounded">
                      Light
                    </Button>
                  </div>
                </div>
              </div>
                  <Collapse in={Rounded} className="mt-2">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="text-wrap">
  <div className="example">
     <div className="btn-list">
        <Button variant='' className="btn btn-primary btn-rounded">
          Primary
        </Button>
        <Button variant='' className="btn btn-secondary  btn-rounded ">
          Secondary
        </Button>
        <Button variant='' className="btn btn-success   btn-rounded">
          Success
        </Button>
        <Button variant='' className="btn btn-info  btn-rounded">
          Info
        </Button>
        <Button variant='' className="btn btn-warning  btn-rounded">
          Warning
        </Button>
        <Button variant='' className="btn btn-danger  btn-rounded">
          Danger
        </Button>
        <Button variant='' className="btn btn-dark   btn-rounded">
          Dark
        </Button>
        <Button variant='' className="btn btn-light   btn-rounded">
          Light
        </Button>
     </div>
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
          <Card id="button3">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">ROUNDED OUTLINE BUTTONS</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setRoundedoutline(!Roundedoutline)}
                    className="showcode d-flex ms-auto "
                  />
                    </Form>
              </div>
              <p className="mg-b-20">
                Below example buttons are basic rounded outline Buttons..
              </p>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button
                      variant=""
                      className="btn btn-outline-primary btn-rounded"
                    >
                      Primary
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-secondary  btn-rounded "
                    >
                      Secondary
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-success   btn-rounded"
                    >
                      Success
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-info  btn-rounded"
                    >
                      Info
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-warning  btn-rounded"
                    >
                      Warning
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-danger  btn-rounded"
                    >
                      Danger
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-dark btn-rounded "
                    >
                      Dark
                    </Button>
                    <Button
                      variant=""
                      className="btn btn-outline-light   btn-rounded"
                    >
                      Light
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={Roundedoutline} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <div className="btn-list">
         <Button variant='' className="btn btn-outline-primary btn-rounded">
           Primary
         </Button>
         <Button  variant=''className="btn btn-outline-secondary  btn-rounded ">
           Secondary
         </Button>
         <Button variant='' className="btn btn-outline-success   btn-rounded">
           Success
         </Button>
         <Button variant='' className="btn btn-outline-info  btn-rounded">
           Info
         </Button>
         <Button variant='' className="btn btn-outline-warning  btn-rounded">
           Warning
         </Button>
         <Button variant='' className="btn btn-outline-danger  btn-rounded">
           Danger
         </Button>
         <Button variant='' className="btn btn-outline-dark   btn-rounded">
           Dark
         </Button>
         <Button variant='' className="btn btn-outline-light   btn-rounded">
           Light
         </Button>
     </div>
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
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">
                Button with loading animation
              </h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setLoading(!Loading)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20">A basic button with added loaders...</p>
              <div className="text-wrap">
                <div className="example">
                  
                  <Row className="row-xs wd-xl-80p btn-list btn-animation">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-secondary btn-spiner ms-2"
                    >
                      <span className="loading">loading...</span>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-success btn-spiner ms-2"
                    >
                      <span className="loading">loading...</span>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-warning btn-spiner ms-2"
                    >
                      <span className="loading">loading...</span>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-primary btn-loaders ms-2"
                    >
                      <span className="loading">loading...</span>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-danger btn-loaders ms-2"
                    >
                      <span className="loading">loading...</span>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-info btn-loaders ms-2"
                    >
                      <span className="loading">loading...</span>
                    </Button>
                  </Row>
                 
                </div>
              </div>
              <Collapse in={Loading} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
      <Row className="row-xs wd-xl-80p btn-list btn-animation">
         <Button
           variant=""
           type="button"
           className="btn btn-secondary btn-spiner ms-2"
         >
           <span className="loading">loading...</span>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-success btn-spiner ms-2"
         >
           <span className="loading">loading...</span>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-warning btn-spiner ms-2"
         >
           <span className="loading">loading...</span>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-primary btn-loaders ms-2"
         >
           <span className="loading">loading...</span>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-danger btn-loaders ms-2"
         >
           <span className="loading">loading...</span>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-info btn-loaders ms-2"
         >
           <span className="loading">loading...</span>
         </Button>
      </Row>
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
        <Col lg={6} md={12} xl={6}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">BUTTON WITH ICONS</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setIcons(!Icons)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="mg-b-20">A basic button with added icons...</p>
              <div className="text-wrap">
                <div className="example">
                  
                  <Row className="row-xs wd-xl-80p btn-list">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-dark button-icon btn-icons"
                    >
                      <i className="fe fe-upload"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-warning button-icon btn-icons"
                    >
                      <i className="fe fe-heart me-2"></i>I like
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-success button-icon btn-icons"
                    >
                      <i className="fe fe-check"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-primary button-icon btn-icons"
                    >
                      <i className="fe fe-plus me-2"></i>More
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-secondary-light button-icon btn-icons"
                    >
                      <i className="fe fe-link"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-info-light button-icon btn-icons"
                    >
                      <i className="fe fe-message-circle me-2"></i>Comment
                    </Button>
                  </Row>
                </div>
              </div>
                  <Collapse in={Icons} className="">
                    <div id="example-collapse-text">
                      <pre>
                        <code>
                          {`
<div className="text-wrap">
  <div className="example">
      <Row className="row-xs wd-xl-80p btn-list">
         <Button
           variant=""
           type="button"
           className="btn btn-dark button-icon"
         >
           <i className="fe fe-upload"></i>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-warning mx-2 button-icon"
         >
           <i className="fe fe-heart me-2"></i>I like
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-outline-success button-icon"
         >
           <i className="fe fe-check"></i>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-outline-primary mx-2 button-icon"
         >
           <i className="fe fe-plus me-2"></i>More
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-secondary-light button-icon"
         >
           <i className="fe fe-link"></i>
         </Button>
         <Button
           variant=""
           type="button"
           className="btn btn-info-light mx-2 button-icon"
         >
           <i className="fe fe-message-circle me-2"></i>Comment
         </Button>
      </Row>
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
        <Col lg={6} md={12} xl={6}>
          <Card id="button5">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">ICON BUTTONS</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setIcon(!Icon)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication....
              </p>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-icon-list btn-list">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-icon btn-primary me-1"
                    >
                      <i className="fe fe-activity"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-icon  btn-dark me-1"
                    >
                      <i className="fe fe-github"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-icon  btn-success me-1"
                    >
                      <i className="fe fe-bell"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-icon  btn-warning me-1"
                    >
                      <i className="fe fe-star"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-icon  btn-danger me-1 d-none d-sm-flex"
                    >
                      <i className="fe fe-trash"></i>
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-icon  btn-purple me-1 d-none d-sm-flex"
                    >
                      <i className="fe fe-bar-chart"></i>
                    </Button>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Icon} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
     <div className="btn-icon-list btn-list">
          <Button
            variant=""
            type="button"
            className="btn btn-icon btn-primary me-1"
          >
            <i className="fe fe-activity"></i>
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-icon  btn-dark me-1"
          >
            <i className="fe fe-github"></i>
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-icon  btn-success me-1"
          >
            <i className="fe fe-bell"></i>
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-icon  btn-warning me-1"
          >
            <i className="fe fe-star"></i>
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-icon  btn-danger me-1 d-none d-sm-flex"
          >
            <i className="fe fe-trash"></i>
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-icon  btn-purple me-1 d-none d-sm-flex"
          >
            <i className="fe fe-bar-chart"></i>
          </Button>
     </div>
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
        <Col lg={6} md={12} xl={6}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Button size</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setSize(!Size)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="mg-b-20">A basic button with sizes</p>
              <div className="">
                <div className="example">
                 
                  <div className="btn-list">
                    <Row>
                      <div className="col-md-4 mb-2">
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-warning btn-sm mb-1"
                        >
                          Small button
                        </Button>
                      </div>
                      <div className="col-md-4 mb-2">
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-info mb-1"
                        >
                          Medium button
                        </Button>
                      </div>
                      <div className="col-md-4 mb-2">
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-success btn-lg mb-1"
                        >
                          Large button
                        </Button>
                      </div>
                    </Row>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Size} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div className="btn-list">
           <Row>
             <div className="col-md-4 mb-2">
               <Button
                 variant=""
                 type="button"
                 className="btn btn-warning btn-sm mb-1"
               >
                 Small button
               </Button>
             </div>
             <div className="col-md-4 mb-2">
               <Button
                 variant=""
                 type="button"
                 className="btn btn-info mb-1"
               >
                 Medium button
               </Button>
             </div>
             <div className="col-md-4 mb-2">
               <Button
                 variant=""
                 type="button"
                 className="btn btn-success btn-lg mb-1"
               >
                 Large button
               </Button>
             </div>
           </Row>
    </div>
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
        {/* <!-- COL END --> */}
        <Col lg={6} md={12} xl={6}>
          <Card id="button6">
            <Card.Body>
              <h3 className="card-title  mg-b-10">Button Widths</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setWidth(!Width)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              <p className="mg-b-20">A basic button with Width sizes</p>
              <div className="text-wrap">
                <div className="example">
                  
                  <div className="btn-list">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-primary btn-w-xs mb-1"
                    >
                      XS
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-teal btn-w-sm mb-1"
                    >
                      SM
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-danger btn-w-sm mb-1"
                    >
                      MD
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-success btn-w-lg mb-1"
                    >
                      LG
                    </Button>
                  </div>
                </div>
              </div>
              <Collapse in={Width} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
      <div className="btn-list">
           <Button
             variant=""
             type="button"
             className="btn btn-primary btn-w-xs mb-1"
           >
             XS
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-teal btn-w-sm mb-1"
           >
             SM
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-danger btn-w-sm mb-1"
           >
             MD
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-success btn-w-lg mb-1"
           >
             LG
           </Button>
      </div>
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
        <Col lg={12} md={12} xl={12}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Button size</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setSizelg(!Sizelg)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="mg-b-20">A basic button block sizes</p>
              <div className="">
                <div className="example">
                  
                  <div className="btn-list">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Block level button
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-secondary btn-md btn-block"
                    >
                      Block level button
                    </Button>
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-info btn-sm btn-block"
                    >
                      Block level button
                    </Button>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Sizelg} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
      <div className="btn-list">
          <Button
            variant=""
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            Block level button
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-secondary btn-md btn-block"
          >
            Block level button
          </Button>
          <Button
            variant=""
            type="button"
            className="btn btn-info btn-sm btn-block"
          >
            Block level button
          </Button>
      </div>
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
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Checkbox button groups</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setCheck(!Check)}
                  className="showcode d-flex ms-auto mb-1"
                />
              </Form>
              </div>
              <div className="">
                <div className="example">
                  
                  <div className="group-btn">
                    <Row>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic "
                      >
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck1"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="btncheck1"
                        >
                          Checkbox 1
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck2"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="btncheck2"
                        >
                          Checkbox 2
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck3"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="btncheck3"
                        >
                          Checkbox 3
                        </label>
                      </div>
                    </Row>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Check} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div className="group-btn">
       <Row>
            <div className="btn-group" role="group" aria-label="Basic ">
               <input type="checkbox" className="btn-check" id="btncheck1" />
               <label className="btn btn-outline-primary" htmlFor="btncheck1" >
                 Checkbox 1
               </label>
               <input type="checkbox" className="btn-check" id="btncheck2" />
               <label className="btn btn-outline-primary" htmlFor="btncheck2" >
                 Checkbox 2
               </label>

               <input
                 type="checkbox"
                 className="btn-check"
                 id="btncheck3"
               />
               <label
                 className="btn btn-outline-primary"
                 htmlFor="btncheck3"
               >
                 Checkbox 3
               </label>
            </div>
       </Row>
    </div>
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
        {/* <!-- COL END --> */}
        <Col md={12} xl={6}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Radio button groups</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setRadio(!Radio)}
                  className="showcode d-flex ms-auto mb-1"
                />
              </Form>
              </div>
              <div className="">
                <div className="example">
                  
                  <div className="group-btn">
                    <Row>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio21"
                          defaultChecked
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="btnradio21"
                        >
                          Radio 1
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio22"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="btnradio22"
                        >
                          Radio 2
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio33"
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor="btnradio33"
                        >
                          Radio 3
                        </label>
                      </div>
                    </Row>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Radio} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
      <div className="group-btn">
          <Row>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio21"
                defaultChecked
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btnradio21"
              >
                Radio 1
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio22"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btnradio22"
              >
                Radio 2
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio33"
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="btnradio33"
              >
                Radio 3
              </label>
            </div>
          </Row>
      </div>
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
        {/* <!-- COL END --> */}
        <Col lg={12} md={12} xl={12}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Button Toolbar</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setToolbar(!Toolbar)}
                  className="showcode d-flex ms-auto mb-1"
                />
              </Form>
              </div>
              <div className="">
                <div className="example">
                  
                  <div className="btn-list">
                    <div
                      className="btn-toolbar"
                      role="toolbar"
                      aria-label="Toolbar with button groups"
                    >
                      <div
                        className="btn-group me-2 mt-2 mb-2"
                        role="group"
                        aria-label="First group"
                      >
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          1
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          2
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          3
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          4
                        </Button>
                      </div>
                      <div
                        className="btn-group me-2 mt-2 mb-2"
                        role="group"
                        aria-label="Second group"
                      >
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          5
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          6
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          7
                        </Button>
                      </div>
                      <div
                        className="btn-group mt-2 mb-2"
                        role="group"
                        aria-label="Third group"
                      >
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          8
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Toolbar} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div className="btn-list">
       <div
         className="btn-toolbar"
         role="toolbar"
         aria-label="Toolbar with button groups"
       >
         <div
           className="btn-group me-2 mt-2 mb-2"
           role="group"
           aria-label="First group"
         >
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             1
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             2
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             3
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             4
           </Button>
         </div>
         <div
           className="btn-group me-2 mt-2 mb-2"
           role="group"
           aria-label="Second group"
         >
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             5
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             6
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             7
           </Button>
         </div>
         <div
           className="btn-group mt-2 mb-2"
           role="group"
           aria-label="Third group"
         >
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
           >
             8
           </Button>
         </div>
       </div>
    </div>
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
        {/* <!-- COL END --> */}
        <Col lg={12} md={12} xl={12}>
          <Card>
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Toggle buttons</h3>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setToggle(!Toggle)}
                    className="showcode d-flex ms-auto mb-1"
                  />
                </Form>
                </div>
              <div className="">
                <div className="example">
                 
                  <div className="">
                    <Row>
                      <div className="btn-list">
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="button"
                        >
                          Toggle button
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary active"
                          data-bs-toggle="button"
                          aria-pressed="true"
                        >
                          Active toggle button
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                          disabled
                          data-bs-toggle="button"
                        >
                          Disabled toggle button
                        </Button>
                      </div>
                    </Row>
                  </div>
                  
                </div>
              </div>
              <Collapse in={Toggle} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <div className="">
       <Row>
         <div className="btn-list">
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
             data-bs-toggle="button"
           >
             Toggle button
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary active"
             data-bs-toggle="button"
             aria-pressed="true"
           >
             Active toggle button
           </Button>
           <Button
             variant=""
             type="button"
             className="btn btn-primary"
             disabled
             data-bs-toggle="button"
           >
             Disabled toggle button
           </Button>
         </div>
       </Row>
    </div>
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
        {/* <!-- COL END --> */}
        <Col lg={12} md={12} xl={12}>
          <Card id="button61">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">DROPDOWN BUTTONS</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setDropdownbutton(!Dropdownbutton)}
                  className="showcode d-flex ms-auto "
                />
              </Form>
              </div>
              <p className="mg-b-20">A button variant for using only icons.</p>
              <div className="text-wrap">
                <div className="example">
                  <Row className="row-xs wd-xl-80p">
                    <Col sm={6} md={3}>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          className="btn btn-secondary btn-block"
                        >
                          Dropdown{" "}
                          <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ margin: "0px" }}>
                          <Dropdown.Item href="#">Profile</Dropdown.Item>
                          <Dropdown.Item href="#">Activity Logs</Dropdown.Item>
                          <Dropdown.Item href="#">
                            Account Settings
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* <!-- dropdown-menu --> */}
                    </Col>
                    <Col sm={6} md={3} className=" mg-t-10 mg-sm-t-0">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant=""
                          className="btn btn-primary btn-block"
                        >
                          Dropdown{" "}
                          <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ margin: "0px" }}>
                          <Dropdown.Item href="#">Profile</Dropdown.Item>
                          <Dropdown.Item href="#">Activity Logs</Dropdown.Item>
                          <Dropdown.Item href="#">
                            Account Settings
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* <!-- dropdown-menu --> */}
                    </Col>
                  </Row>
                </div>
              </div>
              <Collapse in={Dropdownbutton} className="">
                <div id="example-collapse-text">
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Row className="row-xs wd-xl-80p">
      <Col sm={6} md={3}>
        <Dropdown>
          <Dropdown.Toggle
              variant=""
              className="btn btn-secondary btn-block"
          >
            Dropdown{" "}
            <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ margin: "0px" }} >
              <Dropdown.Item href="#">
                  Profile
              </Dropdown.Item>
              <Dropdown.Item href="#">
                  Activity Logs
              </Dropdown.Item>
              <Dropdown.Item href="#">
                  Account Settings
              </Dropdown.Item>
              <Dropdown.Item href="#">
                  Logout
              </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
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

        <Col lg={12} md={12} xl={12}>
          <Card id="button7">
            <Card.Body>
              <h3 className="card-title  mg-b-10">Button Groups</h3>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch" 
                  onClick={() => setButtongroup(!Buttongroup)}
                  className="showcode d-flex ms-auto "
                  /></Form>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in your website
                apllication..
              </p>
              <div className="text-wrap">
                <div className="example ">
                  <Row className="row-sm">
                    <Col lg={6}>
                      <div
                        aria-label="Basic example"
                        className="btn-group"
                        role="group"
                      >
                        <Button
                          variant=""
                          className="btn btn-secondary active"
                          type="button"
                        >
                          Left
                        </Button>{" "}
                        <Button
                          variant=""
                          className="btn btn-secondary"
                          type="button"
                        >
                          Center
                        </Button>{" "}
                        <Button
                          variant=""
                          className="btn btn-secondary"
                          type="button"
                        >
                          Right
                        </Button>
                      </div>
                    </Col>
                    {/* <!-- col-4 --> */}
                    <Col className=" mg-t-20 mg-lg-t-0" lg={3}>
                      <div
                        aria-label="Basic example"
                        className="btn-group"
                        role="group"
                      >
                        <Button
                          variant=""
                          className="btn btn-primary btn-icon active"
                          type="button"
                        >
                          <i className="typcn typcn-media-play-outline"></i>
                        </Button>{" "}
                        <Button
                          variant=""
                          className="btn btn-primary btn-icon"
                          type="button"
                        >
                          <i className="typcn typcn-media-pause-outline"></i>
                        </Button>{" "}
                        <Button
                          variant=""
                          className="btn btn-primary btn-icon"
                          type="button"
                        >
                          <i className="typcn typcn-media-stop-outline"></i>
                        </Button>
                      </div>
                    </Col>
                    {/* <!-- col-2 --> */}
                    <Col className="mg-t-20 mg-lg-t-0" lg={3}>
                      <div
                        aria-label="Basic example"
                        className="btn-group"
                        role="group"
                      >
                        <Button
                          variant=""
                          className="btn btn-secondary btn-icon active"
                          type="button"
                        >
                          <i className="typcn typcn-media-play-outline"></i>
                        </Button>{" "}
                        <Button
                          variant=""
                          className="btn btn-secondary btn-icon"
                          type="button"
                        >
                          <i className="typcn typcn-media-pause-outline"></i>
                        </Button>{" "}
                        <Button
                          variant=""
                          className="btn btn-secondary btn-icon"
                          type="button"
                        >
                          <i className="typcn typcn-media-stop-outline"></i>
                        </Button>
                      </div>
                    </Col>
                    {/* <!-- col-4 --> */}
                  </Row>
                </div>
              </div>
              <Collapse in={Buttongroup} >
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example ">
    <Row className="row-sm">
      <Col lg={6}>
        <div
          aria-label="Basic example"
          className="btn-group"
          role="group"
        >
          <Button
            variant=""
            className="btn btn-secondary active"
            type="button"
          >
            Left
          </Button>{" "}
          <Button
            variant=""
            className="btn btn-secondary"
            type="button"
          >
            Center
          </Button>{" "}
          <Button
            variant=""
            className="btn btn-secondary"
            type="button"
          >
            Right
          </Button>
        </div>
      </Col>
      
      <Col className="mg-t-20 mg-lg-t-0" lg={3}>
        <div
          aria-label="Basic example"
          className="btn-group"
          role="group"
        >
          <Button
            variant=""
            className="btn btn-secondary btn-icon active"
            type="button"
          >
            <i className="typcn typcn-media-play-outline"></i>
          </Button>{" "}
          <Button
            variant=""
            className="btn btn-secondary btn-icon"
            type="button"
          >
            <i className="typcn typcn-media-pause-outline"></i>
          </Button>{" "}
          <Button
            variant=""
            className="btn btn-secondary btn-icon"
            type="button"
          >
            <i className="typcn typcn-media-stop-outline"></i>
          </Button>
        </div>
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
  );
};

Buttons.propTypes = {};

Buttons.defaultProps = {};

export default Buttons;
