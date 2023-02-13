import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import * as piecharts from "./data"


const Apexcharts = () => (
  <div>
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">PIE CHARTS</span>
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
            pie Charts
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Pie Chart</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <piecharts.Apexcharts />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Pie Chart with Multiple colors</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <piecharts.Apexcharts2 />
          
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Pie Chart3</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <piecharts.Apexcharts3 />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <Card.Header>
            <h3 className="card-title">Pie Chart4</h3>
          </Card.Header>
          <Card.Body className="apexchart apexchart1">
            <piecharts.Apexcharts4 />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

Apexcharts.propTypes = {};

Apexcharts.defaultProps = {};

export default Apexcharts;
