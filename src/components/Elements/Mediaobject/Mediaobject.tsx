import React from "react";
import { Breadcrumb, Card, Col, Collapse, Form, Row } from "react-bootstrap";

const Mediaobject = () => {
  const [Basic, setBasic] = React.useState(false);
  const [Nesting, setNesting] = React.useState(false);
  const [Alignment, setAlignment] = React.useState(false);
  const [Order, setOrder] = React.useState(false);
  const [Medialist, setMedialist] = React.useState(false);
return(
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">MEDIA OBJECT</span>
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
              Media object
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      <Row>
        <Col xl={12} lg={12}>
          <Card id="media-object">
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
              </Form></div>
                <p className="text-muted card-sub-title">
                  It is Very Easy to Customize and it uses in your website
                  apllication.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                 
                  <div className="media d-block d-sm-flex">
                    <img
                      alt=""
                      className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
                      src={require("../../../assets/img/faces/4.jpg")}
                    />
                    <div className="media-body">
                      <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                      Lorem Ipsum generators on the Internet as necessary aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit
                    </div>
                  </div>
                  
                </div>
              </div>
            <Collapse in={Basic} className="mt-2">
              <pre>
                <code>
                  {`
<div className="text-wrap">
  <div className="example">
    <div className="media d-block d-sm-flex">
      <img
        alt=""
        className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
        src={require("../../../assets/img/faces/4.jpg")}
      />
      <div className="media-body">
        <h5 className="mg-b-5 tx-inverse">Media heading</h5>
        Lorem Ipsum generators on the Internet as necessary aut
        odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit
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

          <Card id="media-object2">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Nesting</h6>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setNesting(!Nesting)}
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
                  
                  <div className="media d-block d-sm-flex">
                    <img
                      alt=""
                      className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
                      src={require("../../../assets/img/faces/9.jpg")}
                    />
                    <div className="media-body">
                      <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                      <p>
                        Lorem Ipsum generators on the Internet as necessary aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit
                      </p>
                      <div className="media d-block d-sm-flex mg-t-25">
                        <img
                          alt=""
                          className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
                          src={require("../../../assets/img/faces/8.jpg")}
                        />
                        <div className="media-body">
                          <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                          Lorem Ipsum generators on the Internet as necessary
                          aut odit aut fugit, sed quia consequuntur magni
                          dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            <Collapse in={Nesting} className="mt-2">
              <pre>
                <code>
                  {`
<div className="text-wrap">
  <div className="example">
    <div className="media d-block d-sm-flex">
      <img
        alt=""
        className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
        src={require("../../../assets/img/faces/9.jpg")}
      />
      <div className="media-body">
        <h5 className="mg-b-5 tx-inverse">Media heading</h5>
        <p>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </p>
        <div className="media d-block d-sm-flex mg-t-25">
          <img
            alt=""
            className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
            src={require("../../../assets/img/faces/8.jpg")}
          />
          <div className="media-body">
            <h5 className="mg-b-5 tx-inverse">Media heading</h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </div>
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

          <Card id="media-object3">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Alignment</h6>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setAlignment(!Alignment)}
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
                  
                  <div className="media d-block d-sm-flex">
                    <img
                      alt=""
                      className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center"
                      src={require("../../../assets/img/faces/14.jpg")}
                    />
                    <div className="media-body">
                      <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                      Lorem Ipsum generators on the Internet as necessary aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit Lorem Ipsum generators on the
                      Internet as necessary aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit
                    </div>
                  </div>
                  
                </div>
              </div>
            <Collapse in={Alignment} className="mt-2">
              <pre>
                <code>
                  {`
<div className="text-wrap">
  <div className="example">
    <div className="media d-block d-sm-flex">
      <img
        alt=""
        className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center"
        src={require("../../../assets/img/faces/14.jpg")}
      />
      <div className="media-body">
        <h5 className="mg-b-5 tx-inverse">Media heading</h5>
        Lorem Ipsum generators on the Internet as necessary aut
        odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit Lorem Ipsum generators on the
        Internet as necessary aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci velit
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

          <Card id="media-object4">
            <Card.Body>
              <div>
                <div className="d-flex">
                <h6 className="card-title mb-1">Order</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setOrder(!Order)}
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
                  <div className="media d-block d-sm-flex">
                    <div className="media-body">
                      <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                      Lorem Ipsum generators on the Internet as necessary aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit
                    </div>
                    <img
                      alt=""
                      className="main-img-user avatar-lg mg-sm-l-20 mg-t-20 mg-sm-t-0"
                      src={require("../../../assets/img/faces/5.jpg")}
                    />
                  </div>
                  
                </div>
              </div>
            <Collapse in={Order} className="mt-2">
              <pre>
                <code>
                  {`
<div className="text-wrap">
  <div className="example">
    <div className="media d-block d-sm-flex">
      <div className="media-body">
        <h5 className="mg-b-5 tx-inverse">Media heading</h5>
        Lorem Ipsum generators on the Internet as necessary aut
        odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit
      </div>
      <img
        alt=""
        className="main-img-user avatar-lg mg-sm-l-20 mg-t-20 mg-sm-t-0"
        src={require("../../../assets/img/faces/5.jpg")}
      />
    </div>
  </div>
</div>
                        `}
                </code>
              </pre>
            </Collapse>
            </Card.Body>
          </Card>

          <Card id="media-object5">
            <Card.Body>
              <div>
              <div className="d-flex">
                <h6 className="card-title mb-1">Media List</h6>
              <Form className="d-flex ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                  onClick={() => setMedialist(!Medialist)}
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
                  
                  <div className="media media-list d-block d-sm-flex">
                    <ul className="list-unstyled mb-0">
                      <li className="media d-block d-sm-flex">
                        <img
                          alt=""
                          className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
                          src={require("../../../assets/img/faces/2.jpg")}
                        />
                        <div className="media-body">
                          <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                          Lorem Ipsum generators on the Internet as necessary
                          aut odit aut fugit, sed quia consequuntur magni
                          dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit
                        </div>
                      </li>
                      <li className="media d-block d-sm-flex mg-t-25">
                        <img
                          alt=""
                          className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
                          src={require("../../../assets/img/faces/12.jpg")}
                        />
                        <div className="media-body">
                          <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                          Lorem Ipsum generators on the Internet as necessary
                          aut odit aut fugit, sed quia consequuntur magni
                          dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit
                        </div>
                      </li>
                      <li className="media d-block d-sm-flex mg-t-25">
                        <img
                          alt=""
                          className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
                          src={require("../../../assets/img/faces/7.jpg")}
                        />
                        <div className="media-body">
                          <h5 className="mg-b-5 tx-inverse">Media heading</h5>
                          Lorem Ipsum generators on the Internet as necessary
                          aut odit aut fugit, sed quia consequuntur magni
                          dolores eos qui ratione voluptatem sequi nesciunt.
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            <Collapse in={Medialist} className="mt-2">
              <pre>
                <code>
                  {`
<div className="text-wrap">
  <div className="example">
    <div className="media media-list d-block d-sm-flex">
      <ul className="list-unstyled mb-0">
        <li className="media d-block d-sm-flex">
          <img
            alt=""
            className="main-img-user avatar-lg mg-sm-r-20 mg-b-20 mg-sm-b-0"
            src={require("../../../assets/img/faces/2.jpg")}
          />
          <div className="media-body">
            <h5 className="mg-b-5 tx-inverse">Media heading</h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
      </ul>
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

Mediaobject.propTypes = {};

Mediaobject.defaultProps = {};

export default Mediaobject;
