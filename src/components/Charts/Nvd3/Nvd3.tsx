import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
// import Nvd3Charts from "react-nvd3";
import "../../../../node_modules/nvd3/build/nv.d3.css";
import * as Nvd3chart from "./data";
const Nvd3 = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          ECHART CHARTS
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Charts
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Nvd3 Charts
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Bar Chart With Multiple colors</h3>
          </Card.Header>
          <Card.Body>
            <div className="h-400">
               {/* <Nvd3Charts
                id="nvd3-chart1"
                type="discreteBarChart"
                datum={Nvd3chart.BarChart}
                x="label"
                y="value"
              />  */}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Bar Chart</h3>
          </Card.Header>
          <Card.Body>
            <div className="h-400">
              {/* <Nvd3Charts
                id="nvd3-chart2"
                type="discreteBarChart"
                datum={Nvd3chart.BarChart2}
                x="label"
                y="value"
              /> */}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Line Chart With Zooming Options</h3>
          </Card.Header>
          <Card.Body>
            
            <div className="with-transitions h-400  ">
               {/* <Nvd3Charts
                id="nvd3-chart3"
                type="lineChart"
                datum={Nvd3chart.LineChart}
              />  */}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

Nvd3.propTypes = {};

Nvd3.defaultProps = {};

export default Nvd3;
