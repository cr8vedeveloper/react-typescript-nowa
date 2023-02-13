import React from "react";
import { Button, Breadcrumb, Row, Col, Card, Dropdown, DropdownButton, ButtonGroup, Form, Collapse } from "react-bootstrap";

const Dropdowns = () => {
  const [Default,setDefault] = React.useState(false);
  const [Rounded,setRounded] = React.useState(false);
  const [Outline,setOutline] = React.useState(false);
  const [Roundedoutline, setRoundedoutline] = React.useState(false);
  const [Roundedsplit, setRoundedsplit] = React.useState(false);
  const [Outlinesplit, setOutlinesplit] = React.useState(false);
  const [Roundedoutlinesplit, setRoundedoutlinesplit] = React.useState(false);
  const [Dropdownsoutline, setDropdownsoutline] = React.useState(false);
  const [Activemenu,setActivemenu] = React.useState(false);
  const [Disabledmenu, setDisabledmenu] = React.useState(false);
  const [Dropdownheader,setDropdownheader] = React.useState(false);
  const [Dropdowndivider, setDropdowndivider] = React.useState(false);
  const [Icons,setIcons] = React.useState(false);
  const [Dropright, setDropright] = React.useState(false);
  return(
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">DROPDOWNS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb>
          <Breadcrumb.Item className="tx-15" href="#">
            Elements
          </Breadcrumb.Item>
          <Breadcrumb.Item active aria-current="page">
            Dropdowns
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Basic Example</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setDefault(!Default)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
              <p className="text-muted card-sub-title">Basic dropdown.</p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-primary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu tx-13"
                      style={{ margin: "0px" }}
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-secondary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton1"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-teal"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton2"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-light"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton3"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
              <Collapse in={Default}>
                <pre><code>{`
<div className="example">
  <ButtonGroup className="ms-2 mt-2 mb-2">
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        aria-expanded="false"
        aria-haspopup="true"
        className="btn ripple btn-primary"
        data-bs-toggle="dropdown"
        id="dropdownMenuButton"
        type="button"
      >
        Dropdown Menu
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="dropdown-menu tx-13"
        style={{ margin: "0px" }}
      >
        <Dropdown.Item className="dropdown-item" href="#">
          Action
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">
          Another action
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">
          Something else here
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </ButtonGroup>
  <ButtonGroup className="ms-2 mt-2 mb-2">
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        aria-expanded="false"
        aria-haspopup="true"
        className="btn ripple btn-secondary"
        data-bs-toggle="dropdown"
        id="dropdownMenuButton1"
        type="button"
      >
        Dropdown Menu
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{ margin: "0px" }}
        className="dropdown-menu tx-13"
      >
        <Dropdown.Item className="dropdown-item" href="#">
          Action
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">
          Another action
        </Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">
          Something else here
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </ButtonGroup>
</div>
`}</code></pre>
              </Collapse>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic2">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Rounded button dropdowns</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setRounded(!Rounded)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
              <p className="text-muted card-sub-title">
                Basic dropdown Rounded Outline button
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                 
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-rounded btn-primary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton4"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-rounded btn-secondary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton5"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple  btn-rounded btn-teal"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton6"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple  btn-rounded btn-light"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton7"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
              
            </div>
              <Collapse in={Rounded}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown>
         <Dropdown.Toggle
           variant=""
           aria-expanded="false"
           aria-haspopup="true"
           className="btn ripple btn-rounded btn-primary"
           data-bs-toggle="dropdown"
           id="dropdownMenuButton4"
           type="button"
         >
           Dropdown Menu 
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown>
         <Dropdown.Toggle
           variant=""
           aria-expanded="false"
           aria-haspopup="true"
           className="btn ripple btn-rounded btn-secondary"
           data-bs-toggle="dropdown"
           id="dropdownMenuButton5"
           type="button"
         >
           Dropdown Menu 
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    </ButtonGroup>
  </div>
</div>
                      `}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic3">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1"> Outline button dropdowns</h6>
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
                {" "}
                Dropdown square Outline button{" "}
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-outline-primary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton8"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-outline-secondary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton9"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-outline-success"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton10"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-outline-light"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton11"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                  
              </div>
            </div>
              <Collapse in={Outline}>
                <pre>
                  <code>
                    {`
 <div className="text-wrap">
   <div className="example">
     <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown>
         <Dropdown.Toggle
           variant=""
           aria-expanded="false"
           aria-haspopup="true"
           className="btn ripple btn-outline-primary"
           data-bs-toggle="dropdown"
           id="dropdownMenuButton8"
           type="button"
         >
           Dropdown Menu 
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
     </ButtonGroup>
     <ButtonGroup className="ms-2 mt-2 mb-2">
        <Dropdown>
          <Dropdown.Toggle
            variant=""
            aria-expanded="false"
            aria-haspopup="true"
            className="btn ripple btn-outline-secondary"
            data-bs-toggle="dropdown"
            id="dropdownMenuButton9"
            type="button"
          >
            Dropdown Menu 
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{ margin: "0px" }}
            className="dropdown-menu tx-13"
          >
            <Dropdown.Item className="dropdown-item" href="#">
              Action
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="#">
              Another action
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="#">
              Something else here
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
     </ButtonGroup>
   </div>
 </div>
                        `}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic4">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">
                Rounded Outline button dropdowns
              </h6>
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
              <p className="text-muted card-sub-title">
                {" "}
                Dropdowns with Rounded Outline button{" "}
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-rounded btn-outline-primary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton12"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-rounded btn-outline-secondary"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton13"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple  btn-rounded btn-outline-success"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton14"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple  btn-rounded btn-outline-light"
                      data-bs-toggle="dropdown"
                      id="dropdownMenuButton15"
                      type="button"
                    >
                      Dropdown Menu 
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                
              </div>
            </div>
              <Collapse in={Roundedoutline}>
                <pre><code>
                  {`
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-rounded btn-outline-primary"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton12"
          type="button"
        >
          Dropdown Menu 
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-rounded btn-outline-secondary"
          data-bs-toggle="dropdown"
          id="dropdownMenuButton13"
          type="button"
        >
          Dropdown Menu 
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>
                      `}</code></pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic5">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">
                Rounded split button dropdowns
              </h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check

                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setRoundedsplit(!Roundedsplit)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form></div>
              <p className="text-muted card-sub-title">
                {" "}
                Dropdowns with Rounded button{" "}
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                 
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-primary btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      type="button"
                      data-bs-toggle="dropdown"
                      className="btn btn-primary btn-rounded"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      type="button"
                      variant=""
                      className="btn btn-danger  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      type="button"
                      variant=""
                      className="btn btn-danger  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-info  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      type="button"
                      variant=""
                      className="btn btn-info  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-warning  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      type="button"
                      variant=""
                      className="btn btn-warning  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-light  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      type="button"
                      variant=""
                      className="btn btn-light  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                  
              </div>
            </div>
              <Collapse in={Roundedsplit}>
                <pre><code>
                  {`
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown className="btn-group">
         <Button
           variant=""
           type="button"
           className="btn btn-primary btn-rounded"
         >
           Action
         </Button>
         <Dropdown.Toggle
           type="button"
           data-bs-toggle="dropdown"
           className="btn btn-primary btn-rounded"
         >
           <span className="caret"></span>
           <span className="sr-only">Toggle Dropdown</span>
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown className="btn-group">
         <Button
           type="button"
           variant=""
           className="btn btn-danger  btn-rounded"
         >
           Action
         </Button>
         <Dropdown.Toggle
           type="button"
           variant=""
           className="btn btn-danger  btn-rounded dropdown-toggle split-dropdown"
           data-bs-toggle="dropdown"
         >
           <span className="caret"></span>
           <span className="sr-only">Toggle Dropdown</span>
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    </ButtonGroup>
  </div>
</div>
                      `}</code></pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic6">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">
                {" "}
                Outline split button dropdowns
              </h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setOutlinesplit(!Outlinesplit)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
              <p className="text-muted card-sub-title">
                {" "}
                Dropdowns with Rounded Outline button{" "}
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-primary"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-primary dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button variant="" type="button" className="btn btn-danger">
                      Action
                    </Button>
                    <Dropdown.Toggle
                      type="button"
                      variant=""
                      className="btn btn-danger dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button variant="" type="button" className="btn btn-info">
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-info dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-warning"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-warning dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button variant="" type="button" className="btn btn-light">
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-light dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                  
              </div>
            </div>
              <Collapse in={Outlinesplit}>
                <pre><code>{`
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown className="btn-group">
         <Button
           variant=""
           type="button"
           className="btn btn-primary"
         >
           Action
         </Button>
         <Dropdown.Toggle
           variant=""
           type="button"
           className="btn btn-primary dropdown-toggle split-dropdown"
           data-bs-toggle="dropdown"
         >
           <span className="caret"></span>
           <span className="sr-only">Toggle Dropdown</span>
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
       <Dropdown className="btn-group">
         <Button variant="" type="button" className="btn btn-danger">
           Action
         </Button>
         <Dropdown.Toggle
           type="button"
           variant=""
           className="btn btn-danger dropdown-toggle split-dropdown"
           data-bs-toggle="dropdown"
         >
           <span className="caret"></span>
           <span className="sr-only">Toggle Dropdown</span>
         </Dropdown.Toggle>
         <Dropdown.Menu
           style={{ margin: "0px" }}
           className="dropdown-menu tx-13"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    </ButtonGroup>
  </div>
</div>  
                    `}</code></pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic7">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">
                Rounded Outline split button dropdowns
              </h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setRoundedoutlinesplit(!Roundedoutlinesplit)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
              <p className="text-muted card-sub-title">
                {" "}
                Dropdowns with Rounded Outline button{" "}
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-primary btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-primary  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-danger  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-danger  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-info  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-info  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-warning  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-warning  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-light  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-light  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                  
              </div>
            </div>
              <Collapse in={Roundedoutlinesplit}>
                <pre><code>
                  {`
                      <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-primary btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-primary  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-danger  btn-rounded"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-danger  btn-rounded dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                      `}
                </code></pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic8">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">
                {" "}
                Outline split button dropdowns
              </h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setDropdownsoutline(!Dropdownsoutline)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
              </div>
              <p className="text-muted card-sub-title">
                {" "}
                Dropdowns with Rounded Outline button{" "}
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-primary dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-danger"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-danger dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-info"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-info dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-warning"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-warning dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown className="btn-group">
                    <Button
                      variant=""
                      type="button"
                      className="btn btn-outline-light"
                    >
                      Action
                    </Button>
                    <Dropdown.Toggle
                      variant=""
                      type="button"
                      className="btn btn-outline-light dropdown-toggle split-dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <span className="caret"></span>
                      <span className="sr-only">Toggle Dropdown</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
           
            </div>
              <Collapse in={Dropdownsoutline}>
                <pre>
                  <code>{`          
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown className="btn-group">
        <Button
          variant=""
          type="button"
          className="btn btn-outline-primary"
        >
          Action
        </Button>
        <Dropdown.Toggle
          variant=""
          type="button"
          className="btn btn-outline-primary dropdown-toggle split-dropdown"
          data-bs-toggle="dropdown"
        >
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown className="btn-group">
        <Button
          variant=""
          type="button"
          className="btn btn-outline-danger"
        >
          Action
        </Button>
        <Dropdown.Toggle
          variant=""
          type="button"
          className="btn btn-outline-danger dropdown-toggle split-dropdown"
          data-bs-toggle="dropdown"
        >
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>
    `}</code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="active">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Active Menu Item</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setActivemenu(!Activemenu)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form></div>
              <p className="text-muted card-sub-title">
                Add active className to items in the dropdown to style them as
                active.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-warning"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item " active href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-teal"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item " active href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-secondary"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item
                        className="dropdown-item v  actie"
                        href="#"
                      >
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-danger"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item " active href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                  
              </div>
            </div>
              <Collapse in={Activemenu}>
                <pre><code>{`
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-warning"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item " active href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-teal"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item " active href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>                    
                    `}</code></pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="disabled">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Disabled Menu Item</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setDisabledmenu(!Disabledmenu)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
              </div>
              <p className="text-muted card-sub-title">
                Add disabled className to items in the dropdown to style them as
                disabled.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                 
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-primary"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item "
                        disabled
                        href="#"
                      >
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2 mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-teal"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item "
                        disabled
                        href="#"
                      >
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-danger"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item "
                        disabled
                        href="#"
                      >
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-info"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item "
                        disabled
                        href="#"
                      >
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
               
            </div>
              <Collapse in={Disabledmenu}>
                <pre><code>
                  {` 
<div className="text-wrap">
  <div className="example">
   <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-primary"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdown-item "
            disabled
            href="#"
          >
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2 mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-teal"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item
            className="dropdown-item "
            disabled
            href="#"
          >
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>
              `}</code></pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="header">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Dropdown Header</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check

                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setDropdownheader(!Dropdownheader)}
                    className="showcode d-flex ms-auto "
                  />
                </Form></div>
              <p className="text-muted card-sub-title">
                Add a header to label sections of actions in any dropdown menu.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-secondary"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-primary"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className=" ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-info"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className=" ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-warning"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
                
            </div>
              <Collapse in={Dropdownheader}>
                <pre>
                  <code>
                    {`  
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2  mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-secondary"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
            Dropdown header
          </h6>
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2  mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-primary"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
            Dropdown header
          </h6>
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>
              `}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="divider">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Dropdown Divider</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check

                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setDropdowndivider(!Dropdowndivider)}
                    className="showcode d-flex ms-auto "
                  />
                </Form></div>
              <p className="text-muted card-sub-title">
                Separate groups of related menu items with a divider.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                 
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-info"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>{" "}
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-primary"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>{" "}
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-danger"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>{" "}
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
                <ButtonGroup className="ms-2  mt-2 mb-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="btn ripple btn-warning"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      Dropdown Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ margin: "0px" }}
                      className="dropdown-menu tx-13"
                    >
                      <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
                        Dropdown header
                      </h6>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>{" "}
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ButtonGroup>
              </div>
                
            </div>
              <Collapse in={Dropdowndivider}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <ButtonGroup className="ms-2  mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-info"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
            Dropdown header
          </h6>
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>{" "}
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
          <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
          <Dropdown.Item className="dropdown-item" href="#">
            Separated link
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
    <ButtonGroup className="ms-2  mt-2 mb-2">
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          aria-expanded="false"
          aria-haspopup="true"
          className="btn ripple btn-primary"
          data-bs-toggle="dropdown"
          type="button"
        >
          Dropdown Menu
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ margin: "0px" }}
          className="dropdown-menu tx-13"
        >
          <h6 className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">
            Dropdown header
          </h6>
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>{" "}
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
          <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
          <Dropdown.Item className="dropdown-item" href="#">
            Separated link
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>
                      `}
                  </code>
                </pre>
              </Collapse>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="basic9">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Dropdown with icons</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check

                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setIcons(!Icons)}
                    className="showcode d-flex ms-auto "
                  />
                </Form></div>
              <p className="text-muted card-sub-title">
                Basic dropdown with icons.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                
                <Row className="row-xs wd-xl-80p">
                  <ButtonGroup className="mb-2 mt-2">
                    <DropdownButton
                      variant=""
                      title=""
                      drop="up"
                      className="dropups  btn btn-danger fe fe-mail"
                    >
                      <Dropdown.Item className="dropdown-item" href="#">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" href="#">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                  <ButtonGroup className="mb-2 mt-2">
                    <DropdownButton
                      title=""
                      drop="up"
                      className="dropups  btn btn-info fe fe-more-horizontal"
                      variant=""
                    >
                        <Dropdown.Item className="dropdown-item" href="#">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Separated link
                        </Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                  <ButtonGroup className="mb-2 mt-2">
                    <DropdownButton
                      drop="up"
                      className="dropups btn btn-secondary fe fe-more-vertical"
                      variant=""
                      title=""
                    >
                        <Dropdown.Item className="dropdown-item" href="#">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Separated link
                        </Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                  <ButtonGroup className="mb-2 mt-2">
                    <DropdownButton
                      className=" dropupa fe fe-settings btn btn-outline-primary "
                      variant=""
                      title=""
                      drop="up"
                      aria-expanded="false"
                    >
                        <Dropdown.Item className="dropdown-item" href="#">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Separated link
                        </Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
                </Row>
                  
              </div>
            </div>
              <Collapse in={Icons}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <Row className="row-xs wd-xl-80p">
      <ButtonGroup className="mb-2 mt-2">
        <DropdownButton
          variant=""
          title=""
          drop="up"
          className="dropups  btn btn-danger fe fe-mail"
        >
          <Dropdown.Item className="dropdown-item" href="#">
            Action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Another action
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Something else here
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" href="#">
            Separated link
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      <ButtonGroup className="mb-2 mt-2">
        <DropdownButton
          title=""
          drop="up"
          className="dropups  btn btn-info fe fe-more-horizontal"
          variant=""
        >
            <Dropdown.Item className="dropdown-item" href="#">
              Action
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="#">
              Another action
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="#">
              Something else here
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" href="#">
              Separated link
            </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
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
      <Col lg={6} md={12} xl={6}>
        <Card className="custom-card" id="right">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Dropright & Dropleft</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setDropright(!Dropright)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="text-muted card-sub-title">
                Trigger dropdown menus above elements by adding dropright &
                dropleft className to the parent element.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                  
                <Row className="row-xs">
                  <Col sm={6} md={3} lg={6} xl={4} className="ms-2">
                    
                      <DropdownButton
                        variant=""
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="ripple btn-info br-5"
                        data-bs-toggle="dropdown"
                        id="droprightMenuButton"
                        title=" Dropright"
                        drop="end"
                      >
                        <Dropdown.Item className="dropdown-item" href="#">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    
                  </Col>
                  <Col sm={6} md={3} lg={6} xl={4} className="ms-2 mg-t-10 mg-sm-t-0">
                    
                      <DropdownButton
                        variant=""
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="ripple btn-danger br-5"
                        id="dropleftMenuButton"
                        title="Dropleft"
                        drop="start"
                      >
                        <Dropdown.Item className="dropdown-item" href="#">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#">
                          Something else here
                        </Dropdown.Item>
                      </DropdownButton>
                    
                  </Col>
                </Row>
                  
              </div>
            </div>
              <Collapse in={Dropright}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
   <Row className="row-xs">
      <Col sm={6} md={3} lg={6} xl={4} >
         <DropdownButton
           variant=""
           aria-expanded="false"
           aria-haspopup="true"
           className="btn ripple btn-info"
           data-bs-toggle="dropdown"
           id="droprightMenuButton"
           title=" Dropright"
           drop="end"
         >
           <Dropdown.Item className="dropdown-item" href="#">
             Action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Another action
           </Dropdown.Item>
           <Dropdown.Item className="dropdown-item" href="#">
             Something else here
           </Dropdown.Item>
         </DropdownButton>
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
);}

Dropdowns.propTypes = {};

Dropdowns.defaultProps = {};

export default Dropdowns;
