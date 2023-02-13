import React from 'react';
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';


const Background = () => (
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            BACKGROUNDS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Utilities
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
              Background
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12} xl={12}xs={12}sm={12}>
          {/* <!--div--> */}
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Gray Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="example">
                <div className="gray-set d-flex flex-wrap">
                  <div className="mb-2 bg-gray-100 ht-50 lh-2 text-center me-2 p-3 br-5">
                    .bg-gray-100
                  </div>
                  <div className="mb-2 bg-gray-200 ht-50 lh-2 text-center me-2 p-3 br-5">
                    .bg-gray-200
                  </div>
                  <div className="mb-2 bg-gray-300 ht-50 lh-2 text-center me-2 p-3 br-5">
                    .bg-gray-300
                  </div>
                  <div className="mb-2 bg-gray-400 ht-50 lh-2 text-center me-2 p-3 br-5">
                    .bg-gray-400
                  </div>
                  <div className="mb-2 bg-gray-500 ht-50 lh-2 text-center me-2 p-3 br-5">
                    .bg-gray-500
                  </div>
                  <div className="mb-2 bg-gray-600 ht-50 lh-2 text-center me-2 p-3 br-5">
                    .bg-gray-600
                  </div>
                  <div className="mb-2 bg-gray-700 ht-50 lh-2 text-center me-2 p-3 br-5 tx-white-7">
                    .bg-gray-700
                  </div>
                  <div className="mb-2 bg-gray-800 ht-50 lh-2 text-center me-2 p-3 br-5 tx-white-7">
                    .bg-gray-800
                  </div>
                  <div className="mb-2 bg-gray-900 ht-50 lh-2 text-center me-2 p-3 br-5 tx-white-7  br5">
                    .bg-gray-900
                  </div>
                </div>
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNamees</b>
                      </td>
                      <td>
                        <code>className="bg-gray-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!--/div--> */}
        {/* <!--div--> */}
        <Col md={12} xl={12}xs={12}sm={12}>
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Solid Background Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                <div className="mb-2 bg-primary lh-2 text-center ht-50 me-2 p-3 tx-white  br-5">
                  .bg-primary
                </div>
                <div className="mb-2 bg-secondary lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-secondary
                </div>
                <div className="mb-2 bg-success lh-2 text-center  ht-50 me-2 p-3 tx-white br-5">
                  .bg-success
                </div>
                <div className="mb-2 bg-warning lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-warning
                </div>
                <div className="mb-2 bg-danger lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-danger
                </div>
                <div className="mb-2 bg-info lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-info
                </div>
                <div className="mb-2 bg-indigo lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-indigo
                </div>
                <div className="mb-2 bg-purple lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-purple
                </div>
                <div className="mb-2 bg-pink lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-pink
                </div>
                <div className="mb-2 bg-teal lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-teal
                </div>
                <div className="mb-2 bg-orange lh-2 text-center ht-50 me-2 p-3 tx-white br-5">
                  .bg-orange
                </div>
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNamees</b>
                      </td>
                      <td>
                        <code>className="bg-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        primary | secondary | success | warning | danger | info
                        | indigo | purple | pink | teal | orange
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!--/div--> */}
        {/* <!--div--> */}
        <Col md={12} xl={12}xs={12}sm={12}>
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">
                Solid Gradient Background Set
              </h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                <div className="mb-2 bg-primary-gradient   ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-primary-gradient
                </div>
                <div className="mb-2 bg-secondary-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-secondary-gradient
                </div>
                <div className="mb-2 bg-success-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-success-gradient
                </div>
                <div className="mb-2 bg-warning-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-warning-gradient
                </div>
                <div className="mb-2 bg-danger-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-danger-gradient
                </div>
                <div className="mb-2 bg-info-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-info-gradient
                </div>
                <div className="mb-2 bg-purple-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-purple-gradient
                </div>
                <div className="mb-2 bg-pink-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-pink-gradient
                </div>
                <div className="mb-2 bg-teal-gradient  ht-50 lh-2 p-3 tx-white br-5 me-2">
                  .bg-teal-gradient
                </div>
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNamees</b>
                      </td>
                      <td>
                        <code>className="bg-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        primary-gradient | secondary-gradient | success-gradient
                        | warning-gradient | dange-gradientr | info-gradient |
                        purple-gradient | pink-gradient | teal-gradient
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!--/div--> */}
        <Col md={12} xl={12}xs={12}sm={12}>
          {/* <!--div--> */}
          <Card className=" mg-b-20">
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Transparent White Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover  br-ts-5 br-bs-5"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-1"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-2"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-3"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-4"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-5"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-6"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-7"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-8"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover  br-te-5 br-be-5"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-white-9"></div>
                </div>
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNamees</b>
                      </td>
                      <td>
                        <code>className="bg-white-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!--/div--> */}
        <Col md={12} xl={12}xs={12}sm={12}>
          {/* <!--div--> */}
          <Card>
            <Card.Body className="h-100">
              <h3 className="card-title  mg-b-10">Transparent Black Set</h3>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="d-flex flex-wrap">
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover  br-ts-5 br-bs-5"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-1"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-2"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-3"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-4"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-5"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-6"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-7"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-8"></div>
                </div>
                <div className="flex-1 pos-relative">
                  <img
                    alt=""
                    className="wd-100p ht-100p object-fit-cover br-te-5 br-be-5"
                    src={require("../../../assets/img/photos/5.jpg")}
                  />
                  <div className="pos-absolute a-0 bg-black-9"></div>
                </div>
              </div>
              <div className="table-responsive mg-t-20 mb-0">
                <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>ClassNamees</b>
                      </td>
                      <td>
                        <code>className="bg-black-[value]"</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>

);

Background.propTypes = {};

Background.defaultProps = {};

export default Background;
