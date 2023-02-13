import React from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import * as rangeslider from "./Rangesliderdata";
const Rangeslider = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          RANGE SLIDER
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
            Range slider
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col sm={12} md={12} lg={12}>
        {/* <!--div--> */}
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Range Slider (Modern Skin)
            </div>
            <p className="mg-b-20">
              It is the modern skin range slider of Redash.
            </p>
            <div className="p-3">
            <Row className="row-sm">
              <Col lg={12}>
                <rangeslider.DiscreteSliderMarks
                  
                />
              </Col>
              <Col lg={12} className=" mg-t-20">
                <rangeslider.Rangeslider2
                 
                />
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={12} className=" mg-t-20">
                <rangeslider.RangeSlider3 
                 
                />
              </Col>
              <Col lg={12} className=" mg-t-20">
                <rangeslider.RangeSlider4
                 
                  
                />
              </Col>
            </Row>
            </div>
          </Card.Body>
        </Card>
        {/* <!--/div--> */}

        {/* <!--div--> */}
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Range Slider (Outline Skin)
            </div>
            <p className="mg-b-20">
              It is the outline skin range slider of Redash.
            </p>
            <Row className="row-sm">
              <Col lg={12}>
                {/* <rangeslider.CustomizedSlider
                  className="rangeslider1 irs-modern"
                  data="true"
                  extra="true"
                  name="example_name"
                  type="text"
                /> */}
              </Col>
              <Col lg={12} className=" mg-t-20">
                <rangeslider.CustomizedSlider1 />
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={12} className=" mg-t-20">
                <rangeslider.CustomizedSlider2 />
              </Col>
              <Col lg={12} className=" mg-t-20">
                <rangeslider.CustomizedSlider4 />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* <!--/div--> */}

        {/* <!--div--> */}
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">Range Slider</div>
            <p className="mg-b-20">Default range slider Of Nowa.</p>
            <div className="p-3">
            <Row className="row-sm">
              <Col lg={12}>
                <rangeslider.TrackFalseSlider />
              </Col>
              <Col lg={12} className=" mg-t-20">
                <rangeslider.TrackFalseSlider1 />
              </Col>
            </Row>
            <Row className="row-sm">
              <Col lg={12} className="TrackInvertedSlider mg-t-20">
                <rangeslider.TrackInvertedSlider />
              </Col>
              <Col lg={12} className="TrackInvertedSlider mg-t-20">
                <rangeslider.TrackInvertedSlider1 />
              </Col>
            </Row>
            </div>
          </Card.Body>
        </Card>
        {/* <!--/div--> */}
      </Col>
    </Row>
  </div>
);

Rangeslider.propTypes = {};

Rangeslider.defaultProps = {};

export default Rangeslider;
