import React from "react";
import { Breadcrumb, Button, Card, Col, Row, Spinner, Form, Collapse } from "react-bootstrap";

const Spinners = () =>{
  const [Basic,setBasic] = React.useState(false);
  const [Buttons,setButtons] = React.useState(false);
  const [Size,setSize] = React.useState(false);
  const [Alignment, setAlignment] = React.useState(false);
  const [Border,setBorder] = React.useState(false);
  const [Growing,setGrowing] = React.useState(false);
  const [Growingcolor, setGrowingcolor] = React.useState(false);
  return(
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">SPINNERS</span>
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
              Spinners
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      <Row>
        <Col lg={12} xl={12}>
          <Card id="spinner">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Basic Example</h6>
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
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
               
                  <Spinner
                    animation="border"
                    className="spinner-border"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  
                </div>
              </div>
              <Collapse className="mt-2" in={Basic}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <Spinner
      animation="border"
      className="spinner-border"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
</div>
                        `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="spinner2">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">BORDER SPINNERS</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setBorder(!Border)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Use the border spinners for a lightweight loading indicator..
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  
                  <div>
                    <Spinner
                      animation="border"
                      variant="primary"
                      className="spinner-border me-2 text-primary"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border"
                      className="spinner-border me-2 text-secondary"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border" className="spinner-border me-2 text-success" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border" className="spinner-border me-2 text-danger" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border" className="spinner-border me-2 text-warning" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border" className="spinner-border me-2 text-info" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border" className="spinner-border me-2 text-light" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                    <Spinner
                    animation="border" className="spinner-border me-2 text-dark" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                </div>
                <Collapse className="mt-2" in={Border}>
                  <pre>
                    <code>
                      {`
<div className="text-wrap">
  <div className="example">
    <Spinner
      animation="border"
      variant="primary"
      className="spinner-border me-2 text-primary"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>

          <Card id="spinner3">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">GROWING SPINNER</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setGrowing(!Growing)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  If you don’t fancy a border spinner, switch to the grow
                  spinner. While it doesn’t technically spin, it does repeatedly
                  grow!
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  
                  <Spinner animation="grow"className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </div>
              <Collapse in={Growing} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <Spinner animation="grow"className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
</div>
                      `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="spinner4">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">GROWING Color</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setGrowingcolor(!Growingcolor)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  If you don’t fancy a border spinner, switch to the grow
                  spinner. While it doesn’t technically spin, it does repeatedly
                  grow!
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  
                  <Spinner animation="grow" className="me-1 spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="me-1 spinner-grow text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </div>
              <Collapse className="mt-2" in={Growingcolor}>
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <Spinner animation="grow" className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
</div>
                        `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="spinner5">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">ALIGNMENT</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setAlignment(!Alignment)}
                    className="showcode d-flex ms-auto"
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Use flexbox utilities or text alignment utilities to place
                  spinners exactly where you need them in any situation.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                 
                  <div className="text-center mg-b-20">
                    <Spinner animation="border"className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                  <div className="text-end">
                    <Spinner animation="border" className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                </div>
              </div>
              <Collapse in={Alignment} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <div className="text-center mg-b-20">
      <Spinner animation="border"className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
    <div className="text-end">
      <Spinner animation="border" className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  </div>
</div>
                      `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="spinner6">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Size</h6>
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
                <p className="mg-b-20">
                  Add <code>.spinner-border-sm</code> and{" "}
                  <code>.spinner-grow-sm</code> to make a smaller spinner that
                  can quickly be used within other components.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  
                  <Spinner animation="border"
                    className="spinner-border spinner-border-sm me-1"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  <Spinner animation="grow" className="spinner-grow spinner-grow-sm me-1" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
               
              </div>
              <Collapse in={Size} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <Spinner animation="border"
      className="spinner-border spinner-border-sm"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
    <Spinner animation="grow" className="spinner-grow spinner-grow-sm" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
</div> 
                      `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>

          <Card id="spinner7">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Button</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setButtons(!Buttons)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Use spinners within buttons to indicate an action is currently
                  processing or taking place. You may also swap the text out of
                  the spinner element and utilize button text as needed..
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  
                  <Button className="btn btn-primary me-2" type="button">
                    <Spinner animation="border"
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></Spinner>
                    <span className="sr-only">Loading...</span>
                  </Button>
                  <Button className="btn btn-primary" type="button">
                    <Spinner animation="border"
                      className="spinner-border spinner-border-sm me-1"
                      role="status"
                      aria-hidden="true"
                    ></Spinner>
                    Loading...
                  </Button>
                </div>
              </div>
              <Collapse in={Buttons} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <Button className="btn btn-primary me-2" type="button">
       <Spinner animation="border"
         className="spinner-border spinner-border-sm"
         role="status"
         aria-hidden="true"
       ></Spinner>
       <span className="sr-only">Loading...</span>
     </Button>
     <Button className="btn btn-primary" type="button">
       <Spinner animation="border"
         className="spinner-border spinner-border-sm"
         role="status"
         aria-hidden="true"
       ></Spinner>
       Loading...
     </Button>     
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
      <Row className="row-sm">
        <Col sm={4} lg={4}>
          <Card className="custom-card" id="loaders">
            <Card.Body>
              <div>
                <h3 className="card-title  mg-b-10">Circle Loader</h3>
                <p className="text-muted card-sub-title">
                  css loading animations
                </p>
              </div>
              <div className="text-center">
                <div className="lds-circle">
                  <div></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={4}>
          <Card className="custom-card" id="loaders1">
            <Card.Body>
              <div>
                <h3 className="card-title  mg-b-10">Ring Loader</h3>
                <p className="text-muted card-sub-title">
                  css loading animations
                </p>
              </div>
              <div className="text-center">
                <div className="lds-dual-ring"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={4}>
          <Card className="custom-card" id="loaders2">
            <Card.Body>
              <div>
                <h3 className="card-title  mg-b-10">Lines Loader</h3>
                <p className="text-muted card-sub-title">
                  css loading animations
                </p>
              </div>
              <div className="text-center">
                <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={4}>
          <Card className="custom-card" id="loaders3">
            <Card.Body>
              <div>
                <h3 className="card-title  mg-b-10">Heart Loader</h3>
                <p className="text-muted card-sub-title">
                  css loading animations
                </p>
              </div>
              <div className="text-center">
                <div className="lds-heart">
                  <div></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={4}>
          <Card className="custom-card" id="loaders4">
            <Card.Body>
              <div>
                <h3 className="card-title  mg-b-10">Ripple Loader</h3>
                <p className="text-muted card-sub-title">
                  css loading animations
                </p>
              </div>
              <div className="text-center">
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} lg={4}>
          <Card className="custom-card" id="loaders5">
            <Card.Body>
              <div>
                <h3 className="card-title  mg-b-10">Spinner Loader</h3>
                <p className="text-muted card-sub-title">
                  css loading animations
                </p>
              </div>
              <div className="text-center">
                <div className="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>
);
}

Spinners.propTypes = {};

Spinners.defaultProps = {};

export default Spinners;
