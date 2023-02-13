import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Form,
  Collapse
} from "react-bootstrap";
import { Link } from "react-router-dom";

const ListGroups = () => {
  const [Basic, setBasic] = React.useState(false);
  const [Listgroupbutton, setListgroupbutton] = React.useState(false);
  const [Basicdisabled, setBasicdisabled] = React.useState(false);
  const [Basicgroup, setBasicgroup] = React.useState(false);
  const [Listgroup, setListgroup] = React.useState(false);
  const [Numbered, setNumbered] = React.useState(false);
  const [paragraph, setparagraph] = React.useState(false);
  const [Listgroupflush, setListgroupflush] = React.useState(false);
  const [Numberedlistgroup, setNumberedlistgroup] = React.useState(false);
  const [Contextual, setContextual] = React.useState(false);
  const [Unorder, setUnorder] = React.useState(false);
  const [Checkboxes,setCheckboxes] = React.useState(false);
  const [Horizontal,setHorizontal] = React.useState(false);
  const [Unorder4, setUnorder4] = React.useState(false);
  const [Unorder3, setUnorder3] = React.useState(false);
  const [Unorder2, setUnorder2] = React.useState(false); 
  const [Unorder5, setUnorder5] = React.useState(false);
  const [Unorder6, setUnorder6] = React.useState(false);
  const [Orderunorder, setOrderunorder] =React.useState(false);
  const [Order, setOrder] = React.useState(false);
  const [Activeitem, setActiveitem] = React.useState(false);
  const [Customcontent, setCustomcontent] = React.useState(false);
  const [Customimage, setCustomimage] = React.useState(false);
  const [Userlist,setUserlist] = React.useState(false);
  const [Userimg,setUserimg] = React.useState(false);
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">LIST GROUP</span>
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
              List Group
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- Page-Header--> */}
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">Basic List group</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setBasic(!Basic)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroupItem className="list-group-item">An item</ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A second item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A third item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A fourth item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  And a fifth one
                </ListGroupItem>
              </ListGroup>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
  <ListGroupItem className="list-group-item">An item</ListGroupItem>
  <ListGroupItem className="list-group-item">
    A second item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A third item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A fourth item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    And a fifth one
  </ListGroupItem>
</ListGroup>                    
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">Basic List group with Active item</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setBasicgroup(!Basicgroup)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroupItem
                  className="list-group-item "
                  active
                  aria-current="true"
                >
                  An active item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A second item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A third item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A fourth item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  And a fifth one
                </ListGroupItem>
              </ListGroup>
              <Collapse in={Basicgroup} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
  <ListGroupItem
    className="list-group-item "
    active
    aria-current="true"
  >
    An active item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A second item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A third item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A fourth item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    And a fifth one
  </ListGroupItem>
</ListGroup>
                  `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">Basic List group with Disabled item</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setBasicdisabled(!Basicdisabled)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroupItem
                  className="list-group-item "
                  disabled
                  aria-disabled="true"
                >
                  A disabled item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A second item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A third item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  A fourth item
                </ListGroupItem>
                <ListGroupItem className="list-group-item">
                  And a fifth one
                </ListGroupItem>
              </ListGroup>
              <Collapse in={Basicdisabled} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
  <ListGroupItem
    className="list-group-item "
    disabled
    aria-disabled="true"
  >
    A disabled item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A second item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A third item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    A fourth item
  </ListGroupItem>
  <ListGroupItem className="list-group-item">
    And a fifth one
  </ListGroupItem>
</ListGroup>                  
                  
                  `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">List group with Link</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setListgroup(!Listgroup)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <ListGroupItem
                  href="#"
                  className="list-group-item list-group-item-action "
                  active
                  aria-current="true"
                >
                  The current link item
                </ListGroupItem>
                <ListGroupItem
                  href="#"
                  className="list-group-item list-group-item-action"
                >
                  A second link item
                </ListGroupItem>
                <ListGroupItem
                  href="#"
                  className="list-group-item list-group-item-action"
                >
                  A third link item
                </ListGroupItem>
                <ListGroupItem
                  href="#"
                  className="list-group-item list-group-item-action"
                >
                  A fourth link item
                </ListGroupItem>
                <ListGroupItem
                  href="#"
                  className="list-group-item list-group-item-action "
                  disabled
                  // tabIndex={-1}
                  aria-disabled="true"
                >
                  A disabled link item
                </ListGroupItem>
              </ListGroup>
              <Collapse in={Listgroup} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
  <ListGroupItem
    href="#"
    className="list-group-item list-group-item-action "
    active
    aria-current="true"
  >
    The current link item
  </ListGroupItem>
  <ListGroupItem
    href="#"
    className="list-group-item list-group-item-action"
  >
    A second link item
  </ListGroupItem>
  <ListGroupItem
    href="#"
    className="list-group-item list-group-item-action"
  >
    A third link item
  </ListGroupItem>
  <ListGroupItem
    href="#"
    className="list-group-item list-group-item-action"
  >
    A fourth link item
  </ListGroupItem>
  <ListGroupItem
    href="#"
    className="list-group-item list-group-item-action "
    disabled
    tabIndex={-1}
    aria-disabled="true"
  >
    A disabled link item
  </ListGroupItem>
</ListGroup>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">List group with Buttons</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setListgroupbutton(!Listgroupbutton)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup className="list-group">
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  The current button
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  A second item
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  A third button item
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                  A fourth button item
                </Button>
                <Button
                  variant=""
                  type="button"
                  className="list-group-item list-group-item-action"
                  disabled
                >
                  A disabled button item
                </Button>
              </ListGroup>
              <Collapse in={Listgroupbutton} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup className="list-group">
  <Button
    variant=""
    type="button"
    className="list-group-item list-group-item-action active"
    aria-current="true"
  >
    The current button
  </Button>
  <Button
    variant=""
    type="button"
    className="list-group-item list-group-item-action"
  >
    A second item
  </Button>
  <Button
    variant=""
    type="button"
    className="list-group-item list-group-item-action"
  >
    A third button item
  </Button>
  <Button
    variant=""
    type="button"
    className="list-group-item list-group-item-action"
  >
    A fourth button item
  </Button>
  <Button
    variant=""
    type="button"
    className="list-group-item list-group-item-action"
    disabled
  >
    A disabled button item
  </Button>
</ListGroup>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">Numbered list group</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setNumbered(!Numbered)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup
                as="ol"
                numbered
                className="list-group list-group-numbered"
              >
                <ListGroupItem as="li" className="list-group-item">
                  Cras justo odio
                </ListGroupItem>
                <ListGroupItem as="li" className="list-group-item">
                  Cras justo odio
                </ListGroupItem>
                <ListGroupItem as="li" className="list-group-item">
                  Cras justo odio
                </ListGroupItem>
                <ListGroupItem as="li" className="list-group-item">
                  Cras justo odio
                </ListGroupItem>
                <ListGroupItem as="li" className="list-group-item">
                  Cras justo odio
                </ListGroupItem>
              </ListGroup>
              <Collapse in={Numbered} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup as="ol" numbered className="list-group list-group-numbered" >
  <ListGroupItem as="li" className="list-group-item">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem as="li" className="list-group-item">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem as="li" className="list-group-item">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem as="li" className="list-group-item">
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem as="li" className="list-group-item">
    Cras justo odio
  </ListGroupItem>
</ListGroup>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-flex">
                <h3 className="card-title  mg-b-10">List group with flush</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setListgroupflush(!Listgroupflush)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
              <p className="mg-b-20">
                Add .list-group-flush to remove some borders and rounded corners
                to render list group items edge-to-edge in a parent
                container(e.g., cards).
              </p>
              <div>
                <ListGroup className="list-group list-group-flush">
                  <ListGroupItem className="list-group-item">An item</ListGroupItem>
                  <ListGroupItem className="list-group-item">A second item</ListGroupItem>
                  <ListGroupItem className="list-group-item">A third item</ListGroupItem>
                  <ListGroupItem className="list-group-item">A fourth item</ListGroupItem>
                </ListGroup>
              </div>
              <Collapse in={Listgroupflush} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
  <ListGroup className="list-group list-group-flush">
  <ListGroupItem className="list-group-item">An item</ListGroupItem>
  <ListGroupItem className="list-group-item">A second item</ListGroupItem>
  <ListGroupItem className="list-group-item">A third item</ListGroupItem>
  <ListGroupItem className="list-group-item">A fourth item</ListGroupItem>
  </ListGroup>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
                <h3 className="card-title">
                  Numbered list group with custom content
                </h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                    onClick={() => setNumberedlistgroup(!Numberedlistgroup)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ListGroup
                as="ol"
                numbered
                className="list-group list-group-numbered"
              >
                <ListGroupItem
                  as="li"
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </ListGroupItem>
                <ListGroupItem
                  as="li"
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </ListGroupItem>
                <ListGroupItem
                  as="li"
                  className="list-group-item d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </ListGroupItem>
              </ListGroup>
              <Collapse in={Numberedlistgroup} className="mt-2">
                <pre>
                  <code>
                    {`
<ListGroup
  as="ol"
  numbered
  className="list-group list-group-numbered"
            >
  <ListGroupItem
    as="li"
    className="list-group-item d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ListGroupItem>
  <ListGroupItem
    as="li"
    className="list-group-item d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ListGroupItem>
  <ListGroupItem
    as="li"
    className="list-group-item d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span className="badge bg-primary rounded-pill">14</span>
  </ListGroupItem>
</ListGroup>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Horizontal List group</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setHorizontal(!Horizontal)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20">
                Add .list-group-horizontal to change the layout of list group
                items from vertical to horizontal across all breakpoints.
                Alternatively, choose a responsive variant .list-group-horizontal-
                {"sm|md|lg|xl|xxl"} to make a list group horizontal starting at
                that breakpoint’s min-width.
              </p>
              <div>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-sm mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-md mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-lg mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
              </div>
              <Collapse in={Horizontal}className="mt-2">
                <pre>
                  <code>
                    {`
                    <div>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-sm mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-md mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
                <ListGroup
                  horizontal
                  className="list-group list-group-horizontal-lg mb-3"
                >
                  <ListGroupItem className="list-group-item">
                    An item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A second item
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    A third item
                  </ListGroupItem>
                </ListGroup>
              </div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">List group with Checkboxes</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setCheckboxes(!Checkboxes)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20">
                Place Bootstrap’s checkboxes and radios within list group items
                and customize as needed. You can use them without labels, but
                please remember to include an aria-label attribute and value for
                accessibility.
              </p>
              <div>
                <ListGroup className="list-group">
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">First checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Second checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Third checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Fourth checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Fifth checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Sixth checkbox</span>
                    </label>
                  </ListGroupItem>
                </ListGroup>
              </div>
              <Collapse in={Checkboxes} className="mt-2">
                <pre>
                  <code>
                    {`
                    <div>
                <ListGroup className="list-group">
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">First checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Third checkbox</span>
                    </label>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item">
                    <label className="d-flex align-items-center mb-0">
                      <span className="check-box mb-0 ms-2">
                        <span className="ckbox">
                          <input type="checkbox" />
                          <span></span>
                        </span>
                      </span>
                      <span className="ms-3 my-auto">Fourth checkbox</span>
                    </label>
                  </ListGroupItem>
                </ListGroup>
              </div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body className="">
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">
                List group with Contextual classes
              </h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setContextual(!Contextual)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20">
                Use contextual classNamees to style list items with a stateful
                background and color..
              </p>
              <div>
                <ListGroup className="list-group">
                  <ListGroupItem variant="" className="list-group-item">
                    A simple default list group item
                  </ListGroupItem>

                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-primary"
                  >
                    A simple primary list group item
                  </ListGroupItem>
                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-secondary"
                  >
                    A simple secondary list group item
                  </ListGroupItem>
                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-success"
                  >
                    A simple success list group item
                  </ListGroupItem>
                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-warning"
                  >
                    A simple warning list group item
                  </ListGroupItem>
                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-info"
                  >
                    A simple info list group item
                  </ListGroupItem>
                </ListGroup>
              </div>
              <Collapse in={Contextual} className="mt-2">
                <pre>
                  <code>
                    {`
                     <div>
                <ListGroup className="list-group">
                  <ListGroupItem variant="" className="list-group-item">
                    A simple default list group item
                  </ListGroupItem>
                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-primary"
                  >
                    A simple primary list group item
                  </ListGroupItem>
                  <ListGroupItem
                    variant=""
                    className="list-group-item list-group-item-success"
                  >
                    A simple success list group item
                  </ListGroupItem>
                </ListGroup>
              </div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">List style with paragraph</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setparagraph(!paragraph)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
                  fuga veniam alias ab nemo nesciunt aperiam vero rem enim ,Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  obcaecati velit earum suscipit possimus quaerat similique eos
                  quod distinctio commodi dicta fuga veniam alias ab nemo nesciunt
                  aperiam vero rem enim ,Lorem ipsum dolor sit amet consectetur, ?
                </p>
                <ul className="paragraph-list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                </ul>
              </div>
              <Collapse in={paragraph} className="mt-2">
                <pre>
                  <code>
                    {`
<div>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
    fuga veniam alias ab nemo nesciunt aperiam vero rem enim ,Lorem
    ipsum dolor sit amet consectetur, adipisicing elit. Quos
    obcaecati velit earum suscipit possimus quaerat similique eos
    quod distinctio commodi dicta fuga veniam alias ab nemo nesciunt
    aperiam vero rem enim ,Lorem ipsum dolor sit amet consectetur, ?
  </p>
  <ul className="paragraph-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
  </ul>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Unorder List Style</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setUnorder(!Unorder)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ul className="list-style-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <Collapse in={Unorder}className="mt-2">
                <pre>
                  <code>
                    {`
<ul className="list-style-1">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Unorder List Style2</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setUnorder2(!Unorder2)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ul className="list-style2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <Collapse in={Unorder2} className="mt-2">
                <pre>
                  <code>
                    {`
<ul className="list-style2">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Unorder List Style3</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setUnorder3(!Unorder3)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ul className="list-style3">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <Collapse in={Unorder3} className="mt-2">
                <pre>
                  <code>
                    {`
<ul className="list-style3">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Unorder List Style4</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setUnorder4(!Unorder4)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ul className="list-style4">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <Collapse in={Unorder4} className="mt-2">
                <pre>
                  <code>
                    {`
<ul className="list-style4">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Unorder List Style5</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setUnorder5(!Unorder5)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ul className="list-style5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <Collapse in={Unorder5} className="mt-2">
                <pre>
                  <code>
                    {`
<ul className="list-style5">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Unorder List Style6</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setUnorder6(!Unorder6)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ul className="list-style6">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
              <Collapse in={Unorder6} className="mt-2">
                <pre>
                  <code>
                    {`
<ul className="list-style6">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Order list</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setOrder(!Order)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ol className="order-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol className="order-list">
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
              <Collapse in={Order} className="mt-2">
                <pre>
                  <code>
                    {`
<ol className="order-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ol className="order-list">
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ol>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Order With unorder</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setOrderunorder(!Orderunorder)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
            </Card.Header>
            <Card.Body className=" px-sm-5">
              <ol className="order-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul className="list-style4 ps-5">
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
              <Collapse in={Orderunorder} className="mt-2">
                <pre>
                  <code>
                    {`
<ol className="order-list">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>
    Nulla volutpat aliquam velit
    <ul className="list-style4 ps-5">
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ol>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <!-- row --> */}
      <Row className=" row-sm">
        <Col lg={6}md={12}>
          <Card className="mg-b-20" id="list">
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Basic Example</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setBasic(!Basic)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="text-muted card-sub-title">
                It is Very Easy to Customize and it uses in your website
                apllication
              </p>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="example">
                  <div className="listgroup-example ">
                    <ul className="list-group">
                      <li>Dapibus ac facilisis in</li>
                      <li>Morbi leo risus</li>
                      <li>
                        Cras justo odio
                        <ul className="list-style-disc">
                          <li>Lorem </li>
                          <li>established</li>
                          <li>Contrary</li>
                        </ul>
                      </li>
                      <li>Porta ac consectetur ac</li>
                      <li>Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
  <div className="listgroup-example ">
    <ul className="list-group">
      <li>Dapibus ac facilisis in</li>
      <li>Morbi leo risus</li>
      <li>
        Cras justo odio
        <ul className="list-style-disc">
          <li>Lorem </li>
          <li>established</li>
          <li>Contrary</li>
        </ul>
      </li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </ul>
  </div>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}md={12}>
          <Card className="mg-b-20" id="list1">
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Active Item</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setActiveitem(!Activeitem)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20 text-muted card-sub-title">
                It is Very Easy to Customize and it uses in your website
                apllication
              </p>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="example">
                  <div className="listgroup-example2">
                    <ul className="list-group">
                      <li>Dapibus ac facilisis in</li>
                      <li>Morbi leo risus</li>
                      <li>
                        Cras justo odio
                        <ul className="list-style-disc">
                          <li>Lorem </li>
                          <li>established</li>
                          <li>Contrary</li>
                        </ul>
                      </li>
                      <li>Porta ac consectetur ac</li>
                      <li>Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Collapse in={Activeitem} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="listgroup-example2">
  <ul className="list-group">
    <li>Dapibus ac facilisis in</li>
    <li>Morbi leo risus</li>
    <li>
      Cras justo odio
      <ul className="list-style-disc">
        <li>Lorem </li>
        <li>established</li>
        <li>Contrary</li>
      </ul>
    </li>
    <li>Porta ac consectetur ac</li>
    <li>Vestibulum at eros</li>
  </ul>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12} xl={6} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Custom content</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setCustomcontent(!Customcontent)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20 text-muted card-sub-title">
                It is Very Easy to Customize and it uses in your website
                apllication
              </p>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="example">
                  <div className="list-group">
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start active"
                      to="#"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2 tx-14">List group item heading</h5>
                        <small>3 days ago</small>
                      </div>
                      <p className="mb-1 tx-13">
                        Donec id elit non mi porta gravida at eget metus. Maecenas
                        sed diam eget risus varius blandit.
                      </p>
                      <small>Donec id elit non mi porta.</small>
                    </Link>{" "}
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start"
                      to="#"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2 tx-14">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1 tx-13">
                        Donec id elit non mi porta gravida at eget metus. Maecenas
                        sed diam eget risus varius blandit.
                      </p>
                      <small className="text-muted">
                        Donec id elit non mi porta.
                      </small>
                    </Link>{" "}
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start"
                      to="#"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-2 tx-14">List group item heading</h5>
                        <small className="text-muted">3 days ago</small>
                      </div>
                      <p className="mb-1 tx-13">
                        Donec id elit non mi porta gravida at eget metus. Maecenas
                        sed diam eget risus varius blandit.
                      </p>
                      <small className="text-muted">
                        Donec id elit non mi porta.
                      </small>
                    </Link>
                  </div>
                </div>
              </div>
              <Collapse in={Customcontent} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="example">
  <div className="list-group">
    <Link
      className="list-group-item list-group-item-action flex-column align-items-start active"
      to="#"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-2 tx-14">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1 tx-13">
        Donec id elit non mi porta gravida at eget metus. Maecenas
        sed diam eget risus varius blandit.
      </p>
      <small>Donec id elit non mi porta.</small>
    </Link>{" "}
    <Link
      className="list-group-item list-group-item-action flex-column align-items-start"
      to="#"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-2 tx-14">List group item heading</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1 tx-13">
        Donec id elit non mi porta gravida at eget metus. Maecenas
        sed diam eget risus varius blandit.
      </p>
      <small className="text-muted">
        Donec id elit non mi porta.
      </small>
    </Link>{" "}
    <Link
      className="list-group-item list-group-item-action flex-column align-items-start"
      to="#"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-2 tx-14">List group item heading</h5>
        <small className="text-muted">3 days ago</small>
      </div>
      <p className="mb-1 tx-13">
        Donec id elit non mi porta gravida at eget metus. Maecenas
        sed diam eget risus varius blandit.
      </p>
      <small className="text-muted">
        Donec id elit non mi porta.
      </small>
    </Link>
  </div>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12} xl={6} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">Custom content with image</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                  onClick={() => setCustomimage(!Customimage)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20 text-muted card-sub-title">
                It is Very Easy to Customize and it uses in your website
                apllication
              </p>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="example">
                  <div className="list-group">
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start active"
                      to="#"
                    >
                      <div className="d-flex">
                        <img
                          alt=""
                          className="me-3 rounded-circle avatar-md"
                          src={require("../../../assets/img/faces/3.jpg")}
                        />
                        <div className="">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 tx-14">
                              List group item heading
                            </h5>
                            <small>3 days ago</small>
                          </div>
                          <p className="mb-1 tx-13">
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas sed diam eget risus varius blandit.
                          </p>
                          <small>Donec id elit non mi porta.</small>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start"
                      to="#"
                    >
                      <div className="d-flex">
                        <img
                          alt=""
                          className="me-3 rounded-circle avatar-md"
                          src={require("../../../assets/img/faces/8.jpg")}
                        />
                        <div className="">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 tx-14">
                              List group item heading
                            </h5>
                            <small>3 days ago</small>
                          </div>
                          <p className="mb-1 tx-13">
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas sed diam eget risus varius blandit.
                          </p>
                          <small>Donec id elit non mi porta.</small>
                        </div>
                      </div>
                    </Link>
                    <Link
                      className="list-group-item list-group-item-action flex-column align-items-start"
                      to="#"
                    >
                      <div className="d-flex">
                        <img
                          alt=""
                          className="me-3 rounded-circle avatar-md"
                          src={require("../../../assets/img/faces/11.jpg")}
                        />
                        <div className="">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-2 tx-14">
                              List group item heading
                            </h5>
                            <small>3 days ago</small>
                          </div>
                          <p className="mb-1 tx-13">
                            Donec id elit non mi porta gravida at eget metus.
                            Maecenas sed diam eget risus varius blandit.
                          </p>
                          <small>Donec id elit non mi porta.</small>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Collapse in={Customimage} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="list-group">
  <Link
    className="list-group-item list-group-item-action flex-column align-items-start active"
    to="#"
  >
    <div className="d-flex">
      <img
        alt=""
        className="me-3 rounded-circle avatar-md"
        src={require("../../../assets/img/faces/3.jpg")}
      />
      <div className="">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-2 tx-14">
            List group item heading
          </h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1 tx-13">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </div>
    </div>
  </Link>
  <Link
    className="list-group-item list-group-item-action flex-column align-items-start"
    to="#"
  >
    <div className="d-flex">
      <img
        alt=""
        className="me-3 rounded-circle avatar-md"
        src={require("../../../assets/img/faces/8.jpg")}
      />
      <div className="">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-2 tx-14">
            List group item heading
          </h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1 tx-13">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </div>
    </div>
  </Link>
  <Link
    className="list-group-item list-group-item-action flex-column align-items-start"
    to="#"
  >
    <div className="d-flex">
      <img
        alt=""
        className="me-3 rounded-circle avatar-md"
        src={require("../../../assets/img/faces/11.jpg")}
      />
      <div className="">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-2 tx-14">
            List group item heading
          </h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1 tx-13">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </div>
    </div>
  </Link>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12} xl={6} md={12}>
          <Card className="mg-b-20">
            <Card.Header>
              <div className="d-flex">
              <h3 className="card-title">USER LIST</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  
                    onClick={() => setUserlist(!Userlist)}
                  className="showcode d-flex ms-auto" /></Form>
            </div>
              <p className="mg-b-20 text-muted card-sub-title">
                It is Very Easy to Customize and it uses in your website
                apllication
              </p>
            </Card.Header>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="">
                  <div className="list-group">
                    <div className="list-group-item pd-y-20">
                      <div className="media">
                        <div className="d-flex mg-r-10 wd-50">
                          <img
                            className="me-4 rounded-circle avatar-md"
                            src={require("../../../assets/img/faces/17.jpg")}
                            alt="avatar"
                          />
                        </div>
                        <div className="media-body">
                          <div className="media-body d-flex">
                            <h6 className="tx-15 mb-2">Blake Vanessa</h6>
                            <span className="tx-12 float-end ms-auto text-muted">
                              4 hours ago
                            </span>
                          </div>
                          <p className="tx-13 mg-b-10 text-muted mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item pd-y-20">
                      <div className="media">
                        <div className="d-flex mg-r-10 wd-50">
                          <img
                            className="me-4 rounded-circle avatar-md"
                            src={require("../../../assets/img/faces/5.jpg")}
                            alt="avatar"
                          />
                        </div>
                        <div className="media-body">
                          <div className="media-body d-flex">
                            <h6 className="tx-15 mb-2">Elizabeth Parsons</h6>
                            <span className="tx-12 float-end ms-auto text-muted">
                              8 hours ago
                            </span>
                          </div>
                          <p className="tx-13 mg-b-10 text-muted mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item pd-y-20">
                      <div className="media">
                        <div className="d-flex mg-r-10 wd-50">
                          <img
                            className="me-4 rounded-circle avatar-md"
                            src={require("../../../assets/img/faces/12.jpg")}
                            alt="avatar"
                          />
                        </div>
                        <div className="media-body">
                          <div className="media-body d-flex">
                            <h6 className="tx-15 mb-2">Nicola Lambert</h6>
                            <span className="tx-12 float-end text-muted ms-auto">
                              12 hours ago
                            </span>
                          </div>
                          <p className="tx-13 mg-b-10 text-muted mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Collapse in={Userlist}>
                <pre>
                  <code>
                    {`
<div className="list-group">
  <div className="list-group-item pd-y-20">
    <div className="media">
      <div className="d-flex mg-r-10 wd-50">
        <img
          className="me-4 rounded-circle avatar-md"
          src={require("../../../assets/img/faces/17.jpg")}
          alt="avatar"
        />
      </div>
      <div className="media-body">
        <div className="media-body d-flex">
          <h6 className="tx-15 mb-2">Blake Vanessa</h6>
          <span className="tx-12 float-end ms-auto text-muted">
            4 hours ago
          </span>
        </div>
        <p className="tx-13 mg-b-10 text-muted mb-0">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's .
        </p>
      </div>
    </div>
  </div>
  <div className="list-group-item pd-y-20">
    <div className="media">
      <div className="d-flex mg-r-10 wd-50">
        <img
          className="me-4 rounded-circle avatar-md"
          src={require("../../../assets/img/faces/5.jpg")}
          alt="avatar"
        />
      </div>
      <div className="media-body">
        <div className="media-body d-flex">
          <h6 className="tx-15 mb-2">Elizabeth Parsons</h6>
          <span className="tx-12 float-end ms-auto text-muted">
            8 hours ago
          </span>
        </div>
        <p className="tx-13 mg-b-10 text-muted mb-0">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's .
        </p>
      </div>
    </div>
  </div>
  <div className="list-group-item pd-y-20">
    <div className="media">
      <div className="d-flex mg-r-10 wd-50">
        <img
          className="me-4 rounded-circle avatar-md"
          src={require("../../../assets/img/faces/12.jpg")}
          alt="avatar"
        />
      </div>
      <div className="media-body">
        <div className="media-body d-flex">
          <h6 className="tx-15 mb-2">Nicola Lambert</h6>
          <span className="tx-12 float-end text-muted ms-auto">
            12 hours ago
          </span>
        </div>
        <p className="tx-13 mg-b-10 text-muted mb-0">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's .
        </p>
      </div>
    </div>
  </div>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12} xl={6} md={12}>
          <Card className="mg-b-20" id="list8">
            <div className="card-header border-bottom-0">
              <div>
                <div className="d-flex">
                <h3 className="card-title ">Using Image</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    
                      onClick={() => setUserimg(!Userimg)}
                    className="showcode d-flex ms-auto" /></Form>
              </div>
                <p className="mg-b-20 text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
            </div>
            <Card.Body className="">
              <div className="text-wrap">
                <div className="">
                  <ul className="list-group wd-md-100p users-list-group">
                    <li className="list-group-item d-flex align-items-center">
                      <img
                        alt=""
                        className="me-3 rounded-circle avatar-md"
                        src={require("../../../assets/img/faces/5.jpg")}
                      />
                      <div>
                        <h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">
                          Adrian Monino
                        </h6>
                        <span className="d-block tx-13 text-muted">
                          Premium Member
                        </span>
                      </div>
                      <div className="d-flex float-start ms-auto">
                        <Link to="#" className="btn btn-light btn-icon me-2">
                          <div className="">
                            <i className="bx bx-plus"></i>
                          </div>
                        </Link>
                        <Link to="#" className="btn btn-light btn-icon">
                          <div className="">
                            <i className="bx bx-minus"></i>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <img
                        alt=""
                        className="me-3 rounded-circle avatar-md"
                        src={require("../../../assets/img/faces/6.jpg")}
                      />
                      <div>
                        <h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">
                          Joel Mendez
                        </h6>
                        <span className="d-block tx-13 text-muted">
                          Premium Member
                        </span>
                      </div>
                      <div className="d-flex float-start ms-auto">
                        <Link to="#" className="btn btn-light btn-icon me-2">
                          <div className="">
                            <i className="bx bx-plus"></i>
                          </div>
                        </Link>
                        <Link to="#" className="btn btn-light btn-icon">
                          <div className="">
                            <i className="bx bx-minus"></i>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <img
                        alt=""
                        className="me-3 rounded-circle avatar-md"
                        src={require("../../../assets/img/faces/15.jpg")}
                      />
                      <div>
                        <h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">
                          Joel Mendez
                        </h6>
                        <span className="d-block tx-13 text-muted">
                          Premium Member
                        </span>
                      </div>
                      <div className="d-flex float-start ms-auto">
                        <Link to="#" className="btn btn-light btn-icon me-2">
                          <div className="">
                            <i className="bx bx-plus"></i>
                          </div>
                        </Link>
                        <Link to="#" className="btn btn-light btn-icon">
                          <div className="">
                            <i className="bx bx-minus"></i>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <img
                        alt=""
                        className="me-3 rounded-circle avatar-md"
                        src={require("../../../assets/img/faces/12.jpg")}
                      />
                      <div>
                        <h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">
                          Marianne Audrey
                        </h6>
                        <span className="d-block tx-13 text-muted">
                          Premium Member
                        </span>
                      </div>
                      <div className="d-flex float-start ms-auto">
                        <Link to="#" className="btn btn-light btn-icon me-2">
                          <div className="">
                            <i className="bx bx-plus"></i>
                          </div>
                        </Link>
                        <Link to="#" className="btn btn-light btn-icon">
                          <div className="">
                            <i className="bx bx-minus"></i>
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <Collapse in={Userimg} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="">
    <ul className="list-group wd-md-100p users-list-group">
      <li className="list-group-item d-flex align-items-center">
        <img
          alt=""
          className="me-3 rounded-circle avatar-md"
          src={require("../../../assets/img/faces/5.jpg")}
        />
        <div>
          <h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">
            Adrian Monino
          </h6>
          <span className="d-block tx-13 text-muted">
            Premium Member
          </span>
        </div>
        <div className="d-flex float-start ms-auto">
          <Link to="#" className="btn btn-light btn-icon me-2">
            <div className="">
              <i className="bx bx-plus"></i>
            </div>
          </Link>
          <Link to="#" className="btn btn-light btn-icon">
            <div className="">
              <i className="bx bx-minus"></i>
            </div>
          </Link>
        </div>
      </li>
      <li className="list-group-item d-flex align-items-center">
        <img
          alt=""
          className="me-3 rounded-circle avatar-md"
          src={require("../../../assets/img/faces/6.jpg")}
        />
        <div>
          <h6 className="tx-15 mb-1 tx-inverse tx-semibold mg-b-0">
            Joel Mendez
          </h6>
          <span className="d-block tx-13 text-muted">
            Premium Member
          </span>
        </div>
        <div className="d-flex float-start ms-auto">
          <Link to="#" className="btn btn-light btn-icon me-2">
            <div className="">
              <i className="bx bx-plus"></i>
            </div>
          </Link>
          <Link to="#" className="btn btn-light btn-icon">
            <div className="">
              <i className="bx bx-minus"></i>
            </div>
          </Link>
        </div>
      </li>
    </ul>
  </div>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- /row --> */}
      </Row>
    </div>
  );
}
ListGroups.propTypes = {};

ListGroups.defaultProps = {};

export default ListGroups;
