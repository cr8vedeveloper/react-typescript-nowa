import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import * as chart from "./data";
import { Bar, Pie,  Line, Doughnut,  } from "react-chartjs-2";
const ChartJS = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          CHARTJS CHARTS
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
            Chartjs charts
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">Line Chart</div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              {/* <canvas > */}
              <Line
                options={chart.Linechart}
                data={chart.linechartdata}
                height={130}
                id="chartLine1"
              />
              {/* </canvas> */}
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">Area Chart</div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              <Line
                options={chart.Areachart}
                data={chart.areachart}
                height={130}
                className="barchart"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">Stacked Bar Chart</div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              <Bar
                options={chart.Barchart1}
                data={chart.barchart1data}
                height={130}
                className="barchart"
                id="chartArea1"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">Stacked Bar Chart</div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              <Bar
                options={chart.Horizontalbarchart}
                data={chart.Horizontalbarchartdata}
                height={130}
                className="barchart"
                id="chartStacked2"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col md={12}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <Row className="row-sm">
              <Col sm={12} md={6} xl={4} className="solid-chart">
                <div className="main-content-label tx-12 mg-b-15">
                  Solid Color
                </div>
                <div className="">
                  <Bar
                    options={chart.SolidColor}
                    data={chart.SolidColordata}
                    height={130}
                    className="barchart"
                    id="chartBar1"
                  />
                </div>
              </Col>
              {/* <!-- col-6 --> */}
              <Col sm={12} md={6} xl={4} className=" mg-t-20 mg-md-t-0 solid-chart">
                <div className="main-content-label tx-12 mg-b-15">
                  With Transparency
                </div>
                <div className="">
                  <Bar
                    options={chart.Transparency}
                    data={chart.Transparencydata}
                    height={130}
                    className="barchart"
                    id="chartBar2"
                  />
                </div>
              </Col>
              {/* <!-- col-6 --> */}
              <Col sm={12} md={6} xl={4} className=" mg-t-20 mg-xl-t-0 solid-chart">
                <div className="main-content-label tx-12 mg-b-15">
                  Using Gradient Color
                </div>
                <div className="">
                  <Bar
                    options={chart.GradientColor}
                    data={chart.GradientColordata}
                    height={130}
                    className="barchart"
                    id="chartBar3"
                  />
                </div>
              </Col>
              {/* <!-- col-6 --> */}
            </Row>
          </Card.Body>
          {/* <!-- col-12 --> */}
        </Card>
        {/* <!-- col-12 --> */}
      </Col>
      {/* <!-- col-12 --> */}
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Horizontal Bar Chart
            </div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              {/* <canvas id=""></canvas> */}
              <Bar
                options={chart.Horizontalbarchart1}
                data={chart.Horizontalbarchartdata1}
                height={130}
                className="barchart"
                id="chartBar4"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Horizontal Bar Chart
            </div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              {/*<canvas id="chartBar5"></canvas>*/}

              <Bar
                options={chart.Horizontalbarchart2}
                data={chart.Horizontalbarchartdata2}
                height={130}
                className="barchart"
                id="chartBar5"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row className="row-sm">
      <Col sm={12} md={6}>
        <Card className=" mg-b-md-20 overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">Pie Chart</div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo">
              
              <Pie data={chart.piechart} id="chartPie" className='chartjs-render-monitor w-250 h-275' />
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
      <Col sm={12} md={6}>
        <Card className=" overflow-hidden">
          <Card.Body>
            <div className="main-content-label mg-b-5">Donut Chart</div>
            <p className="mg-b-20">Basic Charts Of Nowa template.</p>
            <div className="chartjs-wrapper-demo ">
              <Doughnut data={chart.dchart} id="chartDonut" className="chartjs-render-monitor w-250 h-275"/>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!-- col-6 --> */}
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

ChartJS.propTypes = {};

ChartJS.defaultProps = {};

export default ChartJS;
