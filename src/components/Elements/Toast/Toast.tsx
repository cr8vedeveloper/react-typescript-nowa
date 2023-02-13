import React from "react";
import { Breadcrumb, Button, Card, Col, Collapse, Form, Row,Toast } from "react-bootstrap";
export function Toasts() {
  const [show,setShow] = React.useState(true)
  const [Basic,setBasic] = React.useState(true)
  const [Basiccollapse, setBasiccollapse] = React.useState(false)
  const [Stacking, setStacking] = React.useState(true)
  const [Stackingcollapse, setStackingcollapse] = React.useState(false)
  const [Stacking2, setStacking2] = React.useState(true)
  const [Right, setRight] = React.useState(true)
  const [Rightcollapse, setRightcollapse] = React.useState(false)
  
  const [Listcollapse, setListcollapse] = React.useState(false);
  function handleRemove(id:any) {
    const newList = list.filter((list:any) => list.id !== id);
    setList(newList);
  }
  
  const Carouseldata = [
    {
      id: "1",
      TITLE: "bg-primary",
    },
    {
      id: "2",
      TITLE: "bg-secondary",
    },
    {
      id: "3",
      TITLE: "bg-success",
  
    },
    {
      id: "4",
      TITLE: "bg-info",
    },
  ];
  const [list, setList] = React.useState(Carouseldata);
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">TOAST</span>
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
              Toast
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col xl={12} lg={12}>
          <Card className="custom-card" id="basic">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Basic Example</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setBasiccollapse(!Basiccollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="demo-static-toast">
                    {Basic ? (
                      <Toast
                        aria-atomic="true"
                        aria-live="assertive"
                        className="toast fade show"
                        role="alert"
                        data-bs-autohide="false"
                      >
                        <Toast.Header className="toast-header">
                          <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                          <small className="text-muted me-3">11 mins ago</small>
                          <Button
                            variant=""
                            aria-label="Close"
                            className="ms-2 mb-1 close"
                            onClick={() => setBasic(false)}
                            data-bs-dismiss="toast"
                            type="button"
                          >
                            <span aria-hidden="true">&times;</span>
                          </Button>
                        </Toast.Header>
                        <Toast.Body className="toast-body">
                          Hello, world! This is a toast message.
                        </Toast.Body>
                      </Toast>
                    ) : null}
                  </div>
                  
                </div>
                <Collapse in={Basiccollapse} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="demo-static-toast">
  {Basic ? (
    <Toast
      aria-atomic="true"
      aria-live="assertive"
      className="toast fade show"
      role="alert"
      data-bs-autohide="false"
    >
      <Toast.Header className="toast-header">
        <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
        <small className="text-muted me-3">11 mins ago</small>
        <Button
          variant=""
          aria-label="Close"
          className="ms-2 mb-1 close"
          onClick={() => setBasic(false)}
          data-bs-dismiss="toast"
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </Button>
      </Toast.Header>
      <Toast.Body className="toast-body">
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>
  ) : null}
</div>
                        `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="stacking">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Stacking</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setStackingcollapse(!Stackingcollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  When you have multiple toasts, we default to vertiaclly
                  stacking them in a readable manner.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <div className="demo-static-toast">
                    <>
                      {Stacking ? (
                        <Toast
                          aria-atomic="true"
                          aria-live="assertive"
                          className="toast fade show"
                          role="alert"
                          data-bs-autohide="false"
                        >
                          <Toast.Header className="toast-header">
                            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                            <small className="text-muted me-3">Just now</small>
                            <Button
                              variant=""
                              aria-label="Close"
                              className="ms-2 mb-1 close"
                              onClick={() => setStacking(false)}
                              data-bs-dismiss="toast"
                              type="button"
                            >
                              <span aria-hidden="true">&times;</span>
                            </Button>
                          </Toast.Header>
                          <Toast.Body className="toast-body">See? Just like this.</Toast.Body>
                        </Toast>
                      ) : null}
                    </>
                    {Stacking2 ? (
                      <Toast
                        aria-atomic="true"
                        aria-live="assertive"
                        className="toast fade show"
                        role="alert"
                        data-bs-autohide="false"
                      >
                        <Toast.Header className="toast-header">
                          <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                          <small className="text-muted me-3">11 mins ago</small>{" "}
                          <Button
                            variant=""
                            aria-label="Close"
                            className="ms-2 mb-1 close tx-normal"
                            data-bs-dismiss="toast"
                            onClick={() => setStacking2(false)}
                            type="button"
                          >
                            <span aria-hidden="true">&times;</span>
                          </Button>
                        </Toast.Header>
                        <Toast.Body className="toast-body">
                          Hello, world! This is a toast message.
                        </Toast.Body>
                      </Toast>
                    ) : null}
                  </div>
                  <Collapse in={Stackingcollapse} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="demo-static-toast">
  <>
    {Stacking ? (
      <Toast
        aria-atomic="true"
        aria-live="assertive"
        className="toast fade show"
        role="alert"
        data-bs-autohide="false"
      >
        <Toast.Header className="toast-header">
          <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
          <small className="text-muted me-3">Just now</small>
          <Button
            variant=""
            aria-label="Close"
            className="ms-2 mb-1 close"
            onClick={() => setStacking(false)}
            data-bs-dismiss="toast"
            type="button"
          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </Toast.Header>
        <Toast.Body className="toast-body">See? Just like this.</Toast.Body>
      </Toast>
    ) : null}
  </>
  {Stacking2 ? (
    <Toast
      aria-atomic="true"
      aria-live="assertive"
      className="toast fade show"
      role="alert"
      data-bs-autohide="false"
    >
      <Toast.Header className="toast-header">
        <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
        <small className="text-muted me-3">11 mins ago</small>{" "}
        <Button
          variant=""
          aria-label="Close"
          className="ms-2 mb-1 close tx-normal"
          data-bs-dismiss="toast"
          onClick={() => setStacking2(false)}
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </Button>
      </Toast.Header>
      <Toast.Body className="toast-body">
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>
  ) : null}
</div>
                        `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" id="place">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Placement</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setRightcollapse(!Rightcollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Place toasts with custom CSS as you need them. The top right
                  is often used for notifications, as is the top middle.
                </p>
              </div>
              <div className="text-wrap mb-3">
                <div className="example">
                  <div className="ht-150 pos-relative mb-3">
                    <div className="demo-static-toast pos-absolute t-10 r-10">
                      {Right ? (
                        <Toast
                          aria-atomic="true"
                          aria-live="assertive"
                          className="toast fade show"
                          role="alert"
                          data-bs-autohide="false"
                        >
                          <Toast.Header className="toast-header">
                            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                            <small className="text-muted me-3">11 mins ago</small>{" "}
                            <Button
                              variant=""
                              aria-label="Close"
                              className="ms-2 mb-1 close tx-normal"
                              onClick={() => setRight(false)}
                              data-bs-dismiss="toast"
                              type="button"
                            >
                              <span aria-hidden="true">&times;</span>
                            </Button>
                          </Toast.Header>
                          <Toast.Body className="toast-body">
                            Hello, world! This is a toast message.
                          </Toast.Body>
                        </Toast>
                      ) : null}
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              <div className="text-wrap mb-3">
                <div className="example">
                  <div className="demo-static-toast d-flex justify-content-center align-items-center">
                    {show ? (
                      <Toast
                        aria-atomic="true"
                        aria-live="assertive"
                        className="toast fade show"
                        role="alert"
                        data-bs-autohide="false"
                      >
                        <Toast.Header className="toast-header">
                          <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                          <small className="text-muted me-3">11 mins ago</small>{" "}
                          <Button
                            variant=""
                            aria-label="Close"
                            className="ms-2 mb-1 close tx-normal"
                            onClick={() => setShow(false)}
                            data-bs-dismiss="toast"
                            type="button"
                          >
                            <span aria-hidden="true">&times;</span>
                          </Button>
                        </Toast.Header>
                        <Toast.Body className="toast-body">
                          Hello, world! This is a toast message.
                        </Toast.Body>
                      </Toast>
                    ) : null}
                  </div>
                </div>
                <Collapse in={Rightcollapse} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="demo-static-toast pos-absolute t-10 r-10">
  {Right ? (
    <Toast
      aria-atomic="true"
      aria-live="assertive"
      className="toast fade show"
      role="alert"
      data-bs-autohide="false"
    >
      <Toast.Header className="toast-header">
        <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
        <small className="text-muted me-3">11 mins ago</small>{" "}
        <Button
          variant=""
          aria-label="Close"
          className="ms-2 mb-1 close tx-normal"
          onClick={() => setRight(false)}
          data-bs-dismiss="toast"
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </Button>
      </Toast.Header>
      <Toast.Body className="toast-body">
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>
  ) : null}
</div>
                          `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card" id="tarns">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Color Toasts</h6>
                  <Form className="ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setListcollapse(!Listcollapse)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col xl={12}>
                      <Row>
                            {list.map((playerData, k) => (
                              <Col xl={6} lg={6} md={12} key={k}>
                                <div className="demo-static-toast mb-2 mt-2">
                                  <div
                                    aria-atomic="true"
                                    aria-live="assertive"
                                    className="toast fade show"
                                    role="alert"
                                    data-bs-autohide="false"
                                  >
                                    <div
                                      className={`toast-header text-white p-2 ${playerData.TITLE}`}
                                    >
                                      <i className="fe fe-home me-2"></i>
                                      <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
                                      <small className="me-3">11 mins ago</small>
                                      <Button
                                        variant=""
                                        aria-label="Close"
                                        className="ms-2 mb-1 close tx-normal"
                                        onClick={() => handleRemove(playerData.id)}
                                        data-bs-dismiss="toast"
                                        type="button"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </Button>
                                    </div>
                                    <div className="toast-body p-3">
                                      Hello, world! This is a toast message.
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Collapse in={Listcollapse} className="mt-2">
                  <pre><code>
                    {`
<Row>
  {list.map((playerData, k) => (
    <Col xl={6} lg={6} md={12} key={k}>
      <div className="demo-static-toast mb-2 mt-2">
        <div
          aria-atomic="true"
          aria-live="assertive"
          className="toast fade show"
          role="alert"
          data-bs-autohide="false"
        >
          <div
            className={toast-header text-white p-2 {playerData.TITLE}}
          >
            <i className="fe fe-home me-2"></i>
            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>
            <small className="me-3">11 mins ago</small>
            <Button
              variant=""
              aria-label="Close"
              className="ms-2 mb-1 close tx-normal"
              onClick={() => handleRemove(playerData.id)}
              data-bs-dismiss="toast"
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="toast-body p-3">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </Col>
  ))}
</Row>
                    `}
                    </code></pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

Toasts.propTypes = {};

Toasts.defaultProps = {};

export default Toasts;
