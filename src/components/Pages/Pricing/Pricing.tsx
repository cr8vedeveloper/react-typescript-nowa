import React from 'react';
import {Basicdata,Business,Monthdata} from "./data"
import { Breadcrumb, Row,Col,Card,Button,Nav,Tab } from 'react-bootstrap';


const Pricing = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">PRICING</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Pages
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Pricing
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!--row--> */}
    <Row className="d-flex align-items-center justify-content-center">
    {Basicdata.map((playerData:any, k:any) => (
          <Col sm={12} xxl={3} md={6} lg={6} key={k}>
            <Card className="p-3 pricing-card">
              <Card.Header className="text-justified pt-2">
                <p className="tx-18 font-weight-semibold mb-1">
                  {playerData.type}
                  <span className=" tx-11 float-end badge bg-primary text-white px-2 py-1 rounded-pill mt-2">
                  {playerData.most}
                </span>
                </p>
               
                <p className="text-justify font-weight-semibold mb-1">
                  {" "}
                  <span className="tx-30 me-2">$</span>
                  <span className="tx-30 me-1">{playerData.price}</span>
                  <span className="tx-24">
                    <span className="op-5 text-muted tx-20">/</span> month
                  </span>
                </p>
                <p className="tx-13 mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  quos debitis aliquam .
                </p>
                <p className="tx-13 mb-1 text-primary font-weight-">
                  Billed monthly on regular basis!
                </p>
              </Card.Header>
              <Card.Body className="pt-2">
                <ul className="text-justify pricing-body text-muted ps-0">
                  <li className="mb-4">
                    <span className="text-primary me-2 p-1 bg-primary-transparent rounded-pill tx-8">
                      <i className="fa fa-check"></i>
                    </span>{" "}
                    <strong>{playerData.free}</strong> Domain Name
                  </li>
                  <li className="mb-4">
                    <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                      <i className="fa fa-check"></i>
                    </span>{" "}
                    <strong>{playerData.click}</strong> One-Click Apps
                  </li>
                  <li className="mb-4">
                    <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                      <i className="fa fa-check"></i>
                    </span>{" "}
                    <strong>{playerData.data} </strong> Databases
                  </li>
                  <li className="mb-4">
                    <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                      <i className="fa fa-check"></i>
                    </span>{" "}
                    <strong> Money </strong> BackGuarantee
                  </li>
                  <li className="mb-6">
                    <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                      <i className="fa fa-check"></i>
                    </span>{" "}
                    <strong> 24/7</strong> support
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer className=" text-center border-top-0 pt-1">
                <Button className="btn btn-lg btn-primary text-white btn-block">
                  <span className="ms-4 me-4">Select</span>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
    </Row>
    {/* <!--/row--> */}

    {/* <!--row--> */}
    <Row className="d-flex align-items-center justify-content-center">
    {Business.map((playerData:any, k:any) => (
        <Col sm={12} xxl={3} md={6} lg={6} key={k}>
          <Card
            className={`p-3 pricing-card border border-${playerData.color}`}
          >
            <Card.Header className="text-justified pt-2">
              <p className="tx-18 font-weight-semibold mb-1">
                {playerData.type}
                <span className=" tx-11 float-end badge bg-secondary text-white  mt-2">
                  {playerData.most}
                </span>
              </p>
              <p className="tx-13 mb-1 text-muted">{playerData.text}</p>
              <p className="tx-13 mb-1 font-weight-semibold">
                {playerData.textprice}
              </p>
            </Card.Header>
            <Card.Body className="pt-2 pb-0">
              <ul className="text-justify pricing-body text-muted ps-0 mb-4">
                <li className="mb-1">
                  <label className={playerData.className}>
                    <span className="check-box mb-0">
                      <span className="ckbox">
                        <input
                          defaultChecked
                          type="checkbox"
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className={playerData.textcolor}>
                      Storage Capacity
                      <span className="tx-10 rounded-pill lh-1 badge badge-light-transparent text-dark font-weight-semibold ms-2">
                        {playerData.tb}
                      </span>
                    </span>
                    <strong className={playerData.pricecolor}>
                      {playerData.storage}
                    </strong>
                  </label>
                </li>
                <li className="mb-1">
                  <label className="d-flex align-items-center p-2 br-5 border">
                    <span className="check-box mb-0">
                      <span className="ckbox">
                        <input
                          defaultChecked
                          type="checkbox"
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className="ms-3 tx-14 my-auto">
                      Daily Updates
                      <span className="tx-10 rounded-pill lh-1 badge badge-light-transparent text-dark font-weight-semibold ms-2">
                        Unlimited
                      </span>
                    </span>
                    <strong className="ms-auto text-dark">$100</strong>
                  </label>
                </li>
                <li className="mb-1">
                  <label className="d-flex align-items-center p-2 br-5 border">
                    <span className="check-box mb-0">
                      <span className="ckbox">
                        <input
                          defaultChecked
                          type="checkbox"
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className="ms-3 tx-14 my-auto">
                      Visitors Monitoring
                    </span>
                    <strong className="ms-auto text-dark">Free</strong>
                  </label>
                </li>
                <li className="mb-1">
                  <label className={playerData.className}>
                    <span className="check-box mb-0">
                      <span className="ckbox">
                        <input
                          defaultChecked
                          type="checkbox"
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className={playerData.textcolor}>
                      Online Support
                      <span className="tx-10 rounded-pill lh-1 badge badge-light-transparent text-dark font-weight-semibold ms-2">
                        24/7
                      </span>
                    </span>
                    <strong className={playerData.pricecolor}>$245</strong>
                  </label>
                </li>
                <li className="mb-1">
                  <label className="d-flex align-items-center p-2 br-5 border">
                    <span className="check-box mb-0">
                      <span className="ckbox">
                        <input
                          defaultChecked
                          type="checkbox"
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className="ms-3 tx-14 my-auto">
                      Email Account
                      <span className="tx-10 rounded-pill lh-1 badge badge-light-transparent text-dark font-weight-semibold ms-2">
                        365 d
                      </span>
                    </span>
                    <strong className="ms-auto text-dark">$154</strong>
                  </label>
                </li>
                <li className="mb-1">
                  <label className="d-flex align-items-center p-2 br-5 border">
                    <span className="check-box mb-0">
                      <span className="ckbox">
                        <input
                          defaultChecked
                          type="checkbox"
                        />
                        <span></span>
                      </span>
                    </span>
                    <span className="ms-3 tx-14 my-auto">
                      Ios & Android ready
                    </span>
                    <strong className="ms-auto text-dark">Free</strong>
                  </label>
                </li>
              </ul>
            </Card.Body>
            <div className="card-footer text-center pt-1">
              <p className="text-dark text-justify mb-2 pt-2">
                <span className="tx-13 font-weight-semibold">Vat Tax</span>
                <strong className="tx-16 float-end">$10</strong>
              </p>
              <p className="text-dark text-justify mb-4">
                <span className="tx-13 font-weight-semibold">Total</span>
                <strong className="tx-22 text-primary float-end">$599</strong>
              </p>
              <Button className="btn btn-lg btn-primary text-white btn-block">
                <span className="ms-4 me-4">Select</span>
              </Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
    {/* <!--/row--> */}

    {/* <!--row--> */}
    <div className="pricing-tabs">
      <div className="">
        <div className="pri-tabs-heading text-center">
        <Tab.Container id="left-tabs-example" defaultActiveKey="Year">
      <Nav variant="pills" className="nav nav-price">
        <Nav.Item>
          <Nav.Link eventKey="Month">Month</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Year">Year</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="Month">
          <React.Fragment>
            <div className="tab-pane pb-0">
              <Row className="d-flex align-items-center justify-content-center">
                {Monthdata.map((playerData:any, k:any) => (
                  <Col sm={12} xl={3} md={6} lg={6} key={k}>
                    <Card className="p-3 border-primary pricing-card">
                      <Card.Header className="pt-2 text-justified">
                        <p className="tx-18 font-weight-semibold mb-1 pe-0">
                          {playerData.type}
                          <span className="tx-11 float-end badge bg-primary text-white px-2 py-1 rounded-pill mt-2">
                            {playerData.most}
                          </span>
                        </p>
                        <p className="text-justify font-weight-semibold mb-1">
                          
                          <span className="tx-30 me-2">$</span>
                          <span className="tx-30 me-1">
                            {playerData.Monthprice}
                          </span>
                          <span className="tx-24">
                            <span className="op-5 text-muted tx-20">/</span>
                            month
                          </span>
                        </p>
                        <p className="tx-13 mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iure quos debitis aliquam .
                        </p>
                        <p className="tx-13 mb-1 text-primary font-weight-">
                          Billed monthly on regular basis!
                        </p>
                      </Card.Header>
                      <Card.Body className="pt-2">
                        <ul className="text-justify pricing-body text-muted ps-0">
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong>{playerData.free}</strong> Domain Name
                          </li>
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong>{playerData.click}</strong> One-Click Apps
                          </li>
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong> {playerData.database}</strong> Databases
                          </li>
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong> Money </strong> BackGuarantee
                          </li>
                          <li className="mb-6">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong> 24/7</strong> support
                          </li>
                        </ul>
                      </Card.Body>
                      <div className="card-footer text-center border-top-0 pt-1">
                        <Button className="btn btn-lg btn-primary text-white btn-block">
                          <span className="ms-4 me-4">Select</span>
                        </Button>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </React.Fragment>
        </Tab.Pane>
        <Tab.Pane eventKey="Year">
          <React.Fragment>
            <div className="tab-pane">
              <Row className="d-flex align-items-center justify-content-center">
                {Monthdata.map((playerData:any, k:any) => (
                  <Col key={k} sm={12} xl={3} md={6} lg={6}>
                    <Card className="p-3 border-primary pricing-card">
                      <Card.Header className="text-justified pt-2">
                        <p className="tx-18 font-weight-semibold mb-1 pe-0">
                          {playerData.type}
                          <span className=" tx-11 float-end badge bg-primary text-white px-2 py-1 rounded-pill mt-2">
                            {playerData.most}
                          </span>
                        </p>
                        <p className="text-justify font-weight-semibold mb-1">
                          {" "}
                          <span className="tx-30 me-2">$</span>
                          <span className="tx-30 me-1">
                            {playerData.yearprice}
                          </span>
                          <span className="tx-24">
                            <span className="op-5 text-muted tx-20">/</span>{" "}
                            month
                          </span>
                        </p>
                        <p className="tx-13 mb-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iure quos debitis aliquam .
                        </p>
                        <p className="tx-13 mb-1 text-primary font-weight-">
                          Billed yearly on regular basis!
                        </p>
                      </Card.Header>
                      <Card.Body className="pt-2">
                        <ul className="text-justify pricing-body text-muted ps-0">
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong>{playerData.free}</strong> Domain Name
                          </li>
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong>{playerData.click}</strong> One-Click Apps
                          </li>
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong> {playerData.database}</strong> Databases
                          </li>
                          <li className="mb-4">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong> Money </strong> BackGuarantee
                          </li>
                          <li className="mb-6">
                            <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                              <i className="fa fa-check"></i>
                            </span>{" "}
                            <strong> 24/7</strong> support
                          </li>
                        </ul>
                      </Card.Body>
                      <div className="card-footer text-center border-top-0 pt-1">
                        <Button className="btn btn-lg btn-primary text-white btn-block">
                          <span className="ms-4 me-4">Select</span>
                        </Button>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </React.Fragment>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
        </div>
       
      </div>
    </div>
    {/* <!--/row--> */}
  </div>
);

Pricing.propTypes = {};

Pricing.defaultProps = {};

export default Pricing;
