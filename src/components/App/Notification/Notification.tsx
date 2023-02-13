import React from "react";
import { Breadcrumb, Button, Card, Row, Col, Form, Toast } from "react-bootstrap";

import { toast, Slide, Flip } from "react-toastify";
import { ToastContainer } from "react-toastify";

const Notification = () => {
  const Default = () =>
    toast.success(
      <p className="text-white tx-16 mb-0">
        Well done Details Submitted Successfully
      </p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 5000,
        theme: "colored",
      }
    );
  const Center = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">Default Center Notification</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 5000,
        theme: "colored",
      }
    );
  const Left = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Default Left Notification</p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        autoClose: 5000,
        theme: "colored",
      }
    );
  const Toastslidesucc = () =>
    toast.success(
      <p className="text-white tx-16 mb-0 ">Slide Notification</p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme: "colored",
      }
    );
  const Toastslidewarn = () =>
    toast.warn(<p className="text-white tx-16 mb-0">Slide Notification</p>, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      transition: Slide,
      autoClose: 1000,
      theme: "colored",
    });
  const Toastslideerror = () =>
    toast.error(
      <p className="text-white tx-16 mb-0 ">Slide Notification</p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        transition: Slide,
        autoClose: 1000,
        theme: "colored",
      }
    );

  const Danger1 = () =>
    toast.error(
      <p className="text-white tx-16 mb-0 ">Oops! An Error Occurred</p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        transition: Flip,
        theme: "colored",
      }
    );
  const Danger2 = () =>
    toast.info(<p className="text-white tx-16 mb-0 ">Some info here</p>, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: false,
      transition: Flip,
      theme: "colored",
    });
  const Danger3 = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Warning : Something Went Wrong</p>,
      {
        autoClose: false,
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: false,
        transition: Flip,
        theme: "colored",
      }
    );
  const Danger4 = () =>
    toast.success(
      <p className="text-white tx-16 mb-0 ">Slide Notification</p>,

      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        transition: Slide,
        autoClose: 1000,
        theme: "colored",
      }
    );
  const [toast11, setToast11] = React.useState(true);
  const [position, setPosition] = React.useState();
  const [show, setShow] = React.useState(true)
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            NOTIFICATIONS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Apps
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Notifications
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12}>
          {/* <!-- div --> */}
          <Card className="mg-b-20">
            <Card.Body>
              <h3 className="card-title  mg-b-10">Position Notification</h3>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button
                    onClick={() => Default()}
                    variant=""
                    className="btn btn-primary mg-t-5"
                  >
                    Top
                  </Button>
                  <Button
                    onClick={() => Center()}
                    variant=""
                    className="btn btn-primary mg-t-5"
                  >
                    Center
                  </Button>
                  <Button
                    onClick={() => Left()}
                    variant=""
                    className="btn btn-primary mg-t-5"
                  >
                    Left
                  </Button>

                  <ToastContainer />
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card className="mg-b-20">
            <Card.Body>
              <h3 className="card-title  mg-b-10">Notification Types</h3>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button
                    onClick={() => Toastslidesucc()}
                    variant=""
                    className="btn btn-primary mg-t-5"
                  >
                    Success
                  </Button>
                  <Button
                    onClick={() => Toastslidewarn()}
                    variant=""
                    className="btn btn-warning mg-t-5"
                  >
                    Warning
                  </Button>
                  <Button
                    onClick={() => Toastslideerror()}
                    variant=""
                    className="btn btn-danger mg-t-5"
                  >
                    Error
                  </Button>

                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card className="mg-b-20">
            <Card.Body>
              <h3 className="card-title  mg-b-10">Notification Styles</h3>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button
                    onClick={() => Danger3()}
                    variant=""
                    className="btn btn-warning mg-t-5"
                  >
                    Warning
                  </Button>
                  <Button
                    onClick={() => Danger2()}
                    variant=""
                    className="btn btn-info mg-t-5"
                  >
                    Info
                  </Button>
                  <Button
                    onClick={() => Danger1()}
                    variant=""
                    className="btn btn-danger mg-t-5"
                  >
                    Fixed Error
                  </Button>
                  <Button
                    onClick={() => Danger4()}
                    variant=""
                    className="btn btn-success mg-t-5"
                  >
                    Success
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card>
            <Card.Body>
              <h3 className="card-title  mg-b-10">Select Notification Placement</h3>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <Card.Body>
                          <p className="text-muted">Various example of <code>toast placement</code>.</p>

                          <Form className="formnotification">
                            <div className="mb-3">
                              <select className="form-select mt-2"  onChange={(e:any) => setPosition(e.currentTarget.value)}>
                                <option label="top-end" value="top-0 end-0"  >Top right</option>
                                <option label="top-start" value="top-0 start-0" >Top left</option>
                                <option label="top-center" value="top-0 start-50 translate-middle-x">Top center</option>
                                <option label="middle-start" value="top-50 start-0 translate-middle-y">Middle left</option>
                                <option label="middle-center" value="top-50 start-50 translate-middle">Middle center</option>
                                <option label="middle-end" value="top-50 end-0 translate-middle-y">Middle right</option>
                                <option label="bottom-start" value="bottom-0 start-0">Bottom left</option>
                                <option label="bottom-center" value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                <option label="bottom-end" value="bottom-0 end-0">Bottom right</option>
                              </select>
                            </div>
                          </Form>
                          <div className="">
                            <div className="bg-light position-relative ht-300" >
                              <div className={"position-relative p-3 " + position} >
                                {show ? <Toast >
                                  <Toast.Header onClick={() => setToast11(!toast11)}>
                                    Select Notification
                                    <Button variant="" className="d-flex ms-auto" onClick={() => setShow(false)}><i className="fe text-dark fe-x"></i></Button>
                                  </Toast.Header>
                                  <Toast.Body>
                                    Hello, world! This is a toast message.

                                  </Toast.Body>
                                </Toast> : null}
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}
        </Col>
      </Row>
    </div>
  );
}

Notification.propTypes = {};

Notification.defaultProps = {};

export default Notification;
