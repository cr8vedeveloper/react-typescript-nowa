import React,{useState} from "react";
import { Breadcrumb, Row, Col, Card, Collapse, Form } from "react-bootstrap";
const Breadcrumbs = () => {
 const [Basic,setBasic] = useState(false);
 const [Custom, setCustom] = useState(false);
 const [Icon, setIcon] = useState(false);
 const [Center, setCenter] = useState(false);
 const [Right,setRight] = useState(false); 
  return(
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">BREADCRUMBS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb >
          <Breadcrumb.Item className=" tx-15" href="#">
            ELements
          </Breadcrumb.Item>
          <Breadcrumb.Item className=" " active aria-current="page">
            Breadcrumbs
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12} lg={12}>
        <Card className="custom-card" id="basic">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Basic Styling</h6>
               <Form className="ms-auto">
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
                The example below is the basic styling of the breadcrumb from
                Bootstrap.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div aria-label="breadcrumb">
                  <Breadcrumb className="breadcrumb-style mg-b-0">
                    <Breadcrumb.Item href="#">
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>
                      Data
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </div>
              <Collapse in={Basic} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>{`
<div className="text-wrap">
  <div className="example">
    <div aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb-style mg-b-0">
        <Breadcrumb.Item href="#">
            Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
            Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
            Data
        </Breadcrumb.Item>
      </Breadcrumb>
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
        <Card className="custom-card" id="custom">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Custom Styling</h6>
              <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setCustom(!Custom)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="text-muted card-sub-title">
                The example below is the custom styling of the breadcrumb used
                by this template.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                 
                <div aria-label="breadcrumb">
                  <Breadcrumb className=" breadcrumb-style2 mb-0">
                    <Breadcrumb.Item href="#">
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                  
              </div>
            </div>
              <Collapse in={Custom} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>{`
<div className="text-wrap">
  <div className="example">
    <div aria-label="breadcrumb">
      <Breadcrumb className=" breadcrumb-style2 mb-0">
        <Breadcrumb.Item href="#">
             Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
             Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
      </Breadcrumb>
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
        <Card className="custom-card" id="divider">
          <Card.Body>
            <div >
              <div className="d-flex">
              <h6 className="card-title mb-1">Icon Divider</h6>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setIcon(!Icon)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="text-muted card-sub-title">
                The example below is the custom styling of the breadcrumb using
                different divider.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                 
                <div aria-label="breadcrumb">
                  <Breadcrumb className="  breadcrumb-style mb-2">
                    <Breadcrumb.Item href="#">
                      <svg
                        className="svg-icon mb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>{' '}
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                  <Breadcrumb className=" breadcrumb-style2 mb-0">
                    <Breadcrumb.Item href="#">
                      <svg
                        className="svg-icon mb-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>{' '}
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                  
              </div>
            </div>
              <Collapse in={Icon} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>{`
<div className="text-wrap">
  <div className="example">
    <div aria-label="breadcrumb">
       <Breadcrumb className="  breadcrumb-style mb-2">
          <Breadcrumb.Item href="#">
            <svg
              className="svg-icon mb-1"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
              Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
              Library
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
       </Breadcrumb>
       <Breadcrumb className=" breadcrumb-style2 mb-0">
          <Breadcrumb.Item href="#">
            <svg
              className="svg-icon mb-1"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
              Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
              Library
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
       </Breadcrumb>
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
        <Card className="custom-card" id="center">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Breadcrumbs-Center align</h6>
               <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setCenter(!Center)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="text-muted card-sub-title">
                The example below is the center aligment of the breadcrumb
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="breadcrumb-3">
                  <Breadcrumb className="breadcrumb-style1 mb-0">
                    <Breadcrumb.Item href="#" className="me-2">
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" className="me-2">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" className="me-2" active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                  
              </div>
            </div>
              <Collapse in={Center} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>{`
<div className="text-wrap">
  <div className="example">
    <div className="breadcrumb-3">
      <Breadcrumb className=" breadcrumb-style1 mb-0">
        <Breadcrumb.Item href="#">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
      </Breadcrumb>
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
        <Card className="custom-card" id="right">
          <Card.Body>
            <div>
              <div className="d-flex">
              <h6 className="card-title mb-1">Breadcrumbs-Right align</h6>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setRight(!Right)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
              <p className="text-muted card-sub-title">
                The example below is the Right aligment of the breadcrumb
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="breadcrumb-4">
                  <Breadcrumb className=" breadcrumb-style1 mb-0">
                    <Breadcrumb.Item href="#">
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                  
              </div>
            </div>
              <Collapse in={Right} className="mt-2">
                <div id="example-collapse-text">
                  <pre>
                    <code>{`
<div className="text-wrap">
  <div className="example">
    <div className="breadcrumb-4">
       <Breadcrumb className=" breadcrumb-style1 mb-0">
          <Breadcrumb.Item href="#">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
        </Breadcrumb>
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
    </Row>
    {/* <!-- /row --> */}
  </div>
);
}

Breadcrumbs.propTypes = {};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
