import React from 'react';
import Slider from "react-slick";
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import { Link } from 'react-router-dom';
import {  LightGallery, settings } from './data';


 const Filedetails = () => {

  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            FILE DETAILS
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
              File details
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb -->

					<!-- Row --> */}

      <Row className=" row-sm">
        <Col xxl={8} xl={12} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className=" px-4 pt-4">
              <Link to={`${process.env.PUBLIC_URL}/advancedui/blogdetails`}>
                <img
                  src={require("../../../assets/img/photos/blog.jpg")}
                  alt=""
                  className="cover-image br-7 w-100"
                />
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={12} lg={12} xxl={4}>
          <Card className="custom-card">
            <Card.Body>
              <h5 className="mb-3">File details :</h5>
              <div className="">
                <Row className="">
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="table mb-0 border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">File-name</th>
                            <td>image.jpg</td>
                          </tr>
                          <tr>
                            <th scope="row">File-size</th>
                            <td>12.45mb</td>
                          </tr>
                          <tr>
                            <th scope="row">uploaded-date</th>
                            <td>01-12-2020</td>
                          </tr>
                          <tr>
                            <th scope="row">uploaded-by</th>
                            <td>prityy abodh</td>
                          </tr>
                          <tr>
                            <th scope="row">image-width</th>
                            <td>1000</td>
                          </tr>
                          <tr>
                            <th scope="row">image-height</th>
                            <td>600</td>
                          </tr>
                          <tr>
                            <th scope="row">File-formate</th>
                            <td>jpg</td>
                          </tr>
                          <tr>
                            <th scope="row">File-location</th>
                            <td>storage/photos/image.jpg</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={8} xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body className=" h-100">
              <div>
                <Slider {...settings}>
                  {/* <div id="owl-demo2" className="owl-carousel owl-carousel-icons2"> */}
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage4.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage1.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage2.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage3.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage4.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage5.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage1.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                          <img className=""
                            alt=""
                            src={require("../../../assets/img/photos/fileimage3.jpg")}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Slider>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={12} lg={12} xxl={4}>
          <Card className="custom-card">
            <Card.Body className="">
              <h5 className="mb-3">Recent Files</h5>
              <Row className=" row-sm file-detailimg">
                {/* <!-- light gallery --> */}
                <ul id="lightgallery" className="list-unstyled row mb-0 px-2">
                  
                  <LightGallery/>
                </ul>
                {/* <!-- light gallery --> */}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
    </div>
  );
}

Filedetails.propTypes = {};

Filedetails.defaultProps = {};

export default Filedetails;
