import React from 'react';
import {
  Breadcrumb,
  Row,
  Col,
  Card,
  Form,
  Collapse,
 
} from "react-bootstrap";

const Thumbnails = () => {
  const [Thumbnailplacement, setThumbnailplacement] = React.useState(false);
  const [Aligning, setAligning] = React.useState(false);

  return(
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">THUMBNAILS</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item" active aria-current="page">
              Thumbnails
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={12} md={12}>
          <Card className="custom-card" id="thumb">
            <Card.Body className="ht-100p">
              <div>
                <div className='d-flex'>
                <h6 className="card-title mb-1">Image Thumbnail Placement</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setThumbnailplacement(!Thumbnailplacement)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Images in Bootstrap are made responsive with .img-fluid.
                  max-width: 100%; and height: auto; are applied to the image so
                  that it scales with the parent element.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col className="col-6"md={3}>
                      <img
                        alt="Responsive"
                        className="img-thumbnail"
                        src={require("../../../assets/img/photos/9.jpg")}
                      />
                    </Col>
                    <Col className="col-6"md={3}>
                      <img
                        alt="Responsive"
                        className="img-thumbnail"
                        src={require("../../../assets/img/photos/13.jpg")}
                      />
                    </Col>
                    <Col className="col-6 mg-t-10 mg-md-t-0"md={3}>
                      <img
                        alt="Responsive"
                        className="img-thumbnail"
                        src={require("../../../assets/img/photos/14.jpg")}
                      />
                    </Col>
                    <Col className="col-6 mg-t-10 mg-md-t-0"md={3}>
                      <img
                        alt="Responsive"
                        className="img-thumbnail"
                        src={require("../../../assets/img/photos/15.jpg")}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
              <Collapse in={Thumbnailplacement} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
  <Row>
    <Col className="col-6"md={3}>
      <img
        alt="Responsive"
        className="img-thumbnail"
        src={require("../../../assets/img/photos/9.jpg")}
      />
    </Col>
    <Col className="col-6"md={3}>
      <img
        alt="Responsive"
        className="img-thumbnail"
        src={require("../../../assets/img/photos/13.jpg")}
      />
    </Col>
    <Col className="col-6 mg-t-10 mg-md-t-0"md={3}>
      <img
        alt="Responsive"
        className="img-thumbnail"
        src={require("../../../assets/img/photos/14.jpg")}
      />
    </Col>
    <Col className="col-6 mg-t-10 mg-md-t-0"md={3}>
      <img
        alt="Responsive"
        className="img-thumbnail"
        src={require("../../../assets/img/photos/15.jpg")}
      />
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

        <Col lg={12} md={12}>
          <Card className="custom-card" id="aligning">
            <Card.Body className=" ht-100p">
              <div>
                <div className='d-flex'>
                <h6 className="card-title mb-1">Aligning Thumbnails</h6>
                <Form className="d-flex ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                    onClick={() => setAligning(!Aligning)}
                    className="showcode d-flex ms-auto "
                  />
                </Form>
                </div>
                <p className="text-muted card-sub-title">
                  Align images with the helper float classNamees or text alignment
                  classNamees.
                </p>
              </div>
              <div className="text-wrap">
                <div className="example">
                  
                  <div className="clearfix">
                    <img
                      src={require("../../../assets/img/photos/10.jpg")}
                      className="float-sm-left wd-100p wd-sm-200 br-5"
                      alt="img"
                    />
                    <img
                      src={require("../../../assets/img/photos/11.jpg")}
                      className="float-sm-right wd-100p wd-sm-200 mg-t-10 mg-sm-t-0 br-5"
                      alt="img"
                    />
                  </div>
                  <Collapse in={Aligning} className="mt-2">
                    <pre>
                      <code>
                        {`
<div className="text-wrap">
  <div className="example">
    <div className="clearfix">
       <img
         src={require("../../../assets/img/photos/10.jpg")}
         className="float-sm-left wd-100p wd-sm-200 br-5"
         alt="img"
       />
       <img
         src={require("../../../assets/img/photos/11.jpg")}
         className="float-sm-right wd-100p wd-sm-200 mg-t-10 mg-sm-t-0 br-5"
         alt="img"
       />
    </div>
  </div>
</div>
                        `}
                      </code>
                    </pre>
                  </Collapse>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- Container closed --> */}
    </div>
);}

Thumbnails.propTypes = {};

Thumbnails.defaultProps = {};

export default Thumbnails;
