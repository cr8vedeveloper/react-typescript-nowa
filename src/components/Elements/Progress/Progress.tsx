import React from "react";
import { Breadcrumb, ProgressBar, Card, Col, Row, Form, Collapse } from "react-bootstrap";

const Progressbar = () => {

  const [Basic, setBasic] = React.useState(false);
  const [Striped, setStriped] = React.useState(false);
  const [Label, setLabel] = React.useState(false);
  const [Style, setStyle] = React.useState(false);
  const [Sizes, setSizes] = React.useState(false);
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">PROGRESS</span>
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
              Progress
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} xl={6}>
          <Card id="progress">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">BASIC PROGRESS</h6>
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
                  A basic progress in all different colors.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">

                  <div className="progress mg-b-20">
                    <ProgressBar
                      variant=""
                      role="progressbar"
                      now={25}
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-20">
                    <ProgressBar
                      variant="success"
                      role="progressbar"
                      now={35}
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-20">
                    <ProgressBar
                      variant="warning"
                      role="progressbar"
                      now={50}
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-20">
                    <ProgressBar
                      variant="danger"
                      role="progressbar"
                      now={65}
                    ></ProgressBar>
                  </div>
                  <div className="">
                    <ProgressBar
                      variant="indigo"
                      role="progressbar"
                      now={75}

                    ></ProgressBar>
                  </div>
                </div>
              </div>
              <Collapse in={Basic} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  div className="example">
    <div className="progress mg-b-20">
      <ProgressBar
        variant=""
        role="progressbar"
        now={25}
      ></ProgressBar>
    </div>
    <div className="progress mg-b-20">
      <ProgressBar
        variant="success"
        role="progressbar"
        now={35}
      ></ProgressBar>
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
        <Col lg={12} xl={6}>
          <Card id="progress2">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">STRIPED PROGRESS</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setStriped(!Striped)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  A basic progress in all different colors.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">

                  <div className="progress mg-b-20">
                    <ProgressBar

                      role="progressbar"
                      now={25}
                      animated
                      variant=""

                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-20">
                    <ProgressBar

                      role="progressbar"
                      variant="success"
                      now={35}
                      animated

                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-20">
                    <ProgressBar

                      role="progressbar"
                      now={50}
                      animated
                      variant="warning"

                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-20">
                    <ProgressBar

                      role="progressbar"
                      now={65}
                      animated
                      variant="danger"

                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar

                      role="progressbar"
                      now={75}
                      animated
                      variant="info"

                    ></ProgressBar>
                  </div>
                </div>
              </div>
              <Collapse in={Striped} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <div className="progress mg-b-20">
      <ProgressBar
        role="progressbar"
        now={25}
        animated
        variant=""
      ></ProgressBar>
    </div>
    <div className="progress mg-b-20">
      <ProgressBar
        role="progressbar"
        variant="success"
        now={35}
        animated
      ></ProgressBar>
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
        <Col lg={12} xl={6}>
          <Card id="progress04">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">PROGRESS LABEL</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setLabel(!Label)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  A basic progress in different sizes.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">

                  <div className="progress mg-b-10">
                    <ProgressBar
                      now={50}
                      label="50%"
                      className="progress-bar-lg"
                    />
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar-lg "
                      now={60}
                      variant="info"
                      label=" 60%"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar-lg "
                      variant="warning"
                      now={70}
                      label="70%"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar-lg"
                      now={80}
                      variant="success"
                      label="80%"
                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      className="progress-bar-lg"
                      now={95}
                      label="95%"
                      variant="secondary"
                    ></ProgressBar>
                  </div>

                </div>
              </div>
              <Collapse in={Label} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <div className="progress mg-b-10">
      <ProgressBar
        now="50"
        label="50%"
        className="progress-bar-lg"
      />
    </div>
    <div className="progress mg-b-10">
      <ProgressBar
        className="progress-bar-lg"
        now="60"
        variant="info"
        label=" 60%"
      ></ProgressBar>
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
        <Col lg={12} xl={6}>
          <Card id="progress6">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">PROGRESSBAR STYLE</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setStyle(!Style)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                </div>
                <p className="text-muted card-sub-title">
                  A basic progress in all different colors.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">

                  <div className="progress progress-style ht-5 mb-4">
                    <ProgressBar
                      className="progress-bar bg-primary wd-80p"
                      role="progressbar"
                      variant="primary"
                    ></ProgressBar>
                  </div>
                  <div className="progress progress-style ht-5 mb-4">
                    <ProgressBar
                      variant="danger"
                      className="progress-bar bg-danger wd-70p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress progress-style ht-5 mb-4">
                    <ProgressBar
                      variant="success"
                      className="progress-bar bg-success wd-60p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress progress-style ht-5 mb-4">
                    <ProgressBar
                      variant="warning"
                      className="progress-bar bg-warning wd-50p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress progress-style ht-5 mb-4">
                    <ProgressBar
                      variant="info"
                      className="progress-bar bg-info wd-40p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>

                </div>
              </div>
              <Collapse in={Style} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <div className="progress progress-style ht-5 mb-4">
        <ProgressBar
          className="progress-bar bg-primary wd-80p"
           role="progressbar"
          variant="primary"
        ></ProgressBar>
    </div>
    <div className="progress progress-style ht-5 mb-4">
        <ProgressBar
          variant="danger"
          className="progress-bar bg-danger wd-70p"
          role="progressbar"
         ></ProgressBar>
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
        <Col xl={12} lg={12}>
          <Card id="progress3">
            <Card.Body>
              <div>
                <div className="d-flex">
                  <h6 className="card-title mb-1">Progress Sizes</h6>
                  <Form className="d-flex ms-auto">
                    <Form.Check
                      label="Show Code"
                       type="switch"
                      id="custom-switch"
                      onClick={() => setSizes(!Sizes)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form></div>
                <p className="text-muted card-sub-title">
                  A basic progress in different sizes.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">

                  <span className="tx-uppercase tx-11 d-block mg-b-5">
                    Size Super Extra Small
                  </span>

                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar ht-2 wd-25p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      variant="info"
                      className="progress-bar bg-info ht-2 wd-35p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      variant="secondary"
                      className="progress-bar bg-secondary ht-2 wd-50p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                    Size Extra Small
                  </span>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar progress-bar-xs wd-25p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      variant="info"
                      className="progress-bar bg-info progress-bar-xs wd-35p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      variant="secondary"
                      className="progress-bar bg-secondary progress-bar-xs wd-50p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>

                  <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                    Size Small
                  </span>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar progress-bar-sm wd-25p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      variant="info"
                      className="progress-bar bg-info progress-bar-sm wd-35p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      variant="secondary"
                      className="progress-bar bg-secondary progress-bar-sm wd-50p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>

                  <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                    Size Normal
                  </span>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar wd-25p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      variant="info"
                      className="progress-bar bg-info wd-35p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      variant="secondary"
                      className="progress-bar bg-secondary wd-50p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>

                  <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
                    Size Large
                  </span>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      className="progress-bar progress-bar-lg wd-25p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress mg-b-10">
                    <ProgressBar
                      variant="info"
                      className="progress-bar bg-info progress-bar-lg wd-35p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                  <div className="progress">
                    <ProgressBar
                      variant="secondary"
                      className="progress-bar bg-secondary progress-bar-lg wd-50p"
                      role="progressbar"
                    ></ProgressBar>
                  </div>
                </div>
              </div>
              <Collapse in={Sizes} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
   <span className="tx-uppercase tx-11 d-block mg-b-5">
       Size Super Extra Small
   </span>
   <div className="progress mg-b-10">
      <ProgressBar
        className="progress-bar ht-2 wd-25p"
        role="progressbar"
        ></ProgressBar>
   </div>
   <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
       Size Extra Small
   </span>
   <div className="progress mg-b-10">
      <ProgressBar
        className="progress-bar progress-bar-xs wd-25p"
        role="progressbar"
        ></ProgressBar>
   </div>
   <span className="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">
      Size Normal
   </span>
   <div className="progress mg-b-10">
      <ProgressBar
        className="progress-bar wd-25p"
        role="progressbar"
        ></ProgressBar>
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
      </Row>
      {/* <!-- /row --> */}
    </div>
  );
}

Progressbar.propTypes = {};

Progressbar.defaultProps = {};

export default Progressbar;
