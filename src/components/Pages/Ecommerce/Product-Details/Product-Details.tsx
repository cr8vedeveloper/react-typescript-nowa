import React, { useState, useEffect } from "react";
import { Breadcrumb, ProgressBar, Row, Col, Tab, Card, Tabs, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useSelector } from 'react-redux'
import ProductService from '../../../../services/ProductService';
import Select from 'react-select';

const ProductDetails = () => {
  const [value, setvalue] = useState<any>("");
  const getdata:any = useSelector((state:any) => state.cartreducer.carts);

  
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  const [Data, setData] = useState<any>([]);


  const id = ProductService.returnId()
 const compare = () => {
    let comparedata = getdata.filter((e:any) => {
      console.log(e, id)
      return e.id === id
    });
    setData(comparedata);
    // console.log(comparedata, Data);

  }
 
  useEffect(() => {
    compare();
  },[id])


  const Optioncategory1 = [
    {
      value: "category-2",
      label: "1",
    },
    {
      value: "category-3",
      label: "2",
    },
    {
      value: "category-4",
      label: "3",
    },
    {
      value: "category-5",
      label: "4",
    },
  ];
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            PRODUCT DETAILS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Ecommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Product details
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      {
        getdata.length ?
          <Row className="row row-sm">
            <Col xxl={12}>
              <Card>
                <Card.Body>
                  <Row className="row row-sm ">
                    <Col xxl={6} lg={12} md={12}>
                      <Row >
                        <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                          <div className="clearfix carousel-slider">
                            <div id="thumbcarousel" className="carousel slide">
                              <div className="carousel-inner">
                                <Swiper
                                  onSwiper={setThumbsSwiper}
                                  dir="rtl"
                                  slidesPerView={4}
                                  freeMode={true}
                                  watchSlidesProgress={true}
                                  modules={[FreeMode, Navigation, Thumbs]}
                                  className="carousel-item active"
                                >
                                  <SwiperSlide className="thumb  my-2 me-1">
                                    {
                                      Data.map((item:any) => {
                                        return (
                                          <img src={item.src} key={item.id} alt="" />
                                        )
                                      })
                                    }
                                  </SwiperSlide>
                                  <SwiperSlide className="thumb  my-2 me-1">
                                    {
                                      Data.map((item:any) => {
                                        return (
                                          <img src={item.src} key={item.id} alt="" />
                                        )
                                      })
                                    }
                                  </SwiperSlide>
                                  <SwiperSlide className="thumb   my-2 me-1">
                                    {
                                      Data.map((item:any) => {
                                        return (
                                          <img src={item.src} key={item.id} alt="" />
                                        )
                                      })
                                    }
                                  </SwiperSlide>
                                  <SwiperSlide className="thumb   my-2 me-1">
                                    {
                                      Data.map((item:any) => {
                                        return (
                                          <img src={item.src} key={item.id} alt="" />
                                        )
                                      })
                                    }
                                  </SwiperSlide>
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
                          <div className="product-carousel  border br-5">
                            <div id="Slider" className="carousel slide">
                              <Swiper
                                className="carousel-inner p-5 "
                            
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                              >
                                <SwiperSlide className="">
                                  {
                                    Data.map((item: any) => {
                                      return (
                                        <img src={item.src} key={item.id} alt=""
                                          className="img-fluid mx-auto d-block" />
                                      )
                                    })
                                  }
                                  <div className="text-center mt-5 mb-5 btn-list"> </div>
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xxl={6} lg={12} md={12} className="details mt-4 mt-xl-0 mt-2">
                      <h4 className="product-title mb-1">
                        Jyothi Fashion Women's Fit & Flare Knee Length Western Frock
                      </h4>
                      <p className="text-muted tx-13 mb-1">
                        women red & Grey Checked Casual frock
                      </p>
                      <div className="rating mb-1">
                        <div className="stars">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star text-muted"></span>
                          <span className="fa fa-star text-muted"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                      </div>
                      <h6 className="price">
                        current price: <span className="h3 ms-2">$253</span>
                      </h6>
                      <p className="vote">
                        <strong>91%</strong> of buyers enjoyed this product!{" "}
                        <strong>(87 votes)</strong>
                      </p>
                      <div className="mb-3">
                        <div className="">
                          <p className="font-weight-normal">
                            <span className="h4">Hurry Up!</span> Sold:{' '}
                            <span className="text-primary h5 ">110/150</span> products
                            in stock.
                          </p>
                        </div>
                        <div className="progress ht-10  mt-0">
                          <ProgressBar now={60} animated variant="primary" />
                        </div>
                      </div>

                      <div className="sizes d-flex">
                        sizes:
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input defaultChecked name="rdio" type="radio" />{" "}
                            <span>s</span>
                          </Form.Label>
                        </span>
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>m</span>
                          </Form.Label>
                        </span>
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>l</span>
                          </Form.Label>
                        </span>
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>xl</span>
                          </Form.Label>
                        </span>
                      </div>
                      <div className="d-flex  mt-2">
                        <div className="mt-2 product-title">Quantity:</div>
                        <div className="d-flex ms-2">
                          <ul className=" mb-0 qunatity-list">
                            <li>
                              <div className="form-group">
                              <Select
                    defaultValue={value}
                    onChange={setvalue}
                    options={Optioncategory1}
                    placeholder="select"
                    classNamePrefix="selectproduct"
                    isSearchable
                  />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="colors d-flex me-3 mt-2">
                        <span className="mt-2">colors:</span>
                        <div className="d-sm-flex d-flex ms-4">
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="azure"
                                className="colorinput-input"
                                defaultChecked
                              />
                              <span className="colorinput-color bg-primary"></span>
                            </Form.Label>
                          </div>
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="indigo"
                                className="colorinput-input"
                              />
                              <span className="colorinput-color bg-secondary"></span>
                            </Form.Label>
                          </div>
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="purple"
                                className="colorinput-input"
                              />
                              <span className="colorinput-color bg-danger"></span>
                            </Form.Label>
                          </div>
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="pink"
                                className="colorinput-input"
                              />
                              <span className="colorinput-color bg-pink"></span>
                            </Form.Label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          :
          <Row className=" row-sm">
            <Col xxl={12}>
              <Card>
                <Card.Body>
                  <Row className=" row-sm ">
                    <Col xxl={6} lg={12} md={12}>
                      <Row >
                        <Col xxl={2} xl={2} lg={2} md={2} sm={2}>
                          <div className="clearfix carousel-slider">
                            <div id="thumbcarousel" className="carousel slide">
                              <div className="carousel-inner">
                                <Swiper
                                  onSwiper={setThumbsSwiper}
                                  dir="rtl"
                                  slidesPerView={4}
                                  freeMode={true}
                                  watchSlidesProgress={true}
                                  modules={[FreeMode, Navigation, Thumbs]}
                                  className="carousel-item active"
                                >
                                  <SwiperSlide className="thumb my-2 me-1">
                                    <img alt=""
                                      src={require("../../../../assets/img/ecommerce/shirt-1.png")}
                                    />
                                  </SwiperSlide>
                                  <SwiperSlide className="thumb my-2 me-1">
                                    <img alt=""
                                      src={require("../../../../assets/img/ecommerce/shirt-2.png")}
                                    />
                                  </SwiperSlide>
                                  <SwiperSlide className="thumb my-2 me-1">
                                    <img alt=""
                                      src={require("../../../../assets/img/ecommerce/shirt-3.png")}
                                    />
                                  </SwiperSlide>
                                  <SwiperSlide className="thumb my-2 me-1">
                                    <img alt=""
                                      src={require("../../../../assets/img/ecommerce/shirt-4.png")}
                                    />
                                  </SwiperSlide>
                                </Swiper>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xxl={10} xl={10} lg={10} md={10} sm={10}>
                          <div className="product-carousel  border br-5">
                            <div id="Slider" className="carousel slide">
                              <Swiper
                                className="carousel-inner "
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                              >
                                <SwiperSlide >
                                  <img alt=""
                                    className="img-fluid mx-auto d-block"
                                    src={require("../../../../assets/img/ecommerce/shirt-1.png")}
                                  />
                                  <div className="text-center mt-5 mb-5 btn-list"> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img alt=""
                                    className="img-fluid mx-auto d-block"
                                    src={require("../../../../assets/img/ecommerce/shirt-2.png")}
                                  />
                                  <div className="text-center mt-5 mb-5 btn-list"> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img alt=""
                                    className="img-fluid mx-auto d-block"
                                    src={require("../../../../assets/img/ecommerce/shirt-3.png")}
                                  />
                                  <div className="text-center mt-5 mb-5 btn-list"> </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img alt=""
                                    className="img-fluid mx-auto d-block"
                                    src={require("../../../../assets/img/ecommerce/shirt-4.png")}
                                  />
                                  <div className="text-center mt-5 mb-5 btn-list"> </div>
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col xxl={6} lg={12} md={12} className="details mt-4 mt-xl-0 mt-2">
                      <h4 className="product-title mb-1">
                        Jyothi Fashion Women's Fit & Flare Knee Length Western Frock
                      </h4>
                      <p className="text-muted tx-13 mb-1">
                        women red & Grey Checked Casual frock
                      </p>
                      <div className="rating mb-1">
                        <div className="stars">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star text-muted"></span>
                          <span className="fa fa-star text-muted"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                      </div>
                      <h6 className="price">
                        current price: <span className="h3 ms-2">$253</span>
                      </h6>
                      <p className="vote">
                        <strong>91%</strong> of buyers enjoyed this product!{" "}
                        <strong>(87 votes)</strong>
                      </p>
                      <div className="mb-3">
                        <div className="">
                          <p className="font-weight-normal">
                            <span className="h4">Hurry Up!</span> Sold:{' '}
                            <span className="text-primary h5 ">110/150</span> products
                            in stock.
                          </p>
                        </div>
                        <div className="progress ht-10  mt-0">
                          <ProgressBar now={60} animated variant="primary" />
                        </div>
                      </div>

                      <div className="sizes d-flex">
                        sizes:
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input defaultChecked name="rdio" type="radio" />{" "}
                            <span>s</span>
                          </Form.Label>
                        </span>
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>m</span>
                          </Form.Label>
                        </span>
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>l</span>
                          </Form.Label>
                        </span>
                        <span className="size d-flex">
                          <Form.Label className="rdiobox mb-0">
                            <input name="rdio" type="radio" /> <span>xl</span>
                          </Form.Label>
                        </span>
                      </div>
                      <div className="d-flex  mt-2">
                        <div className="mt-2 product-title">Quantity:</div>
                        <div className="d-flex ms-2">
                          <ul className=" mb-0 qunatity-list">
                            <li>
                              <div className="">
                              <Select
                    defaultValue={value}
                    onChange={setvalue}
                    options={Optioncategory1}
                    placeholder="select"
                    classNamePrefix="selectproduct"
                    isSearchable
                  />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="colors d-flex me-3 mt-2">
                        <span className="mt-2">colors:</span>
                        <div className="d-sm-flex d-flex ms-4">
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="azure"
                                className="colorinput-input"
                                defaultChecked
                              />
                              <span className="colorinput-color bg-primary"></span>
                            </Form.Label>
                          </div>
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="indigo"
                                className="colorinput-input"
                              />
                              <span className="colorinput-color bg-secondary"></span>
                            </Form.Label>
                          </div>
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="purple"
                                className="colorinput-input"
                              />
                              <span className="colorinput-color bg-danger"></span>
                            </Form.Label>
                          </div>
                          <div className="me-2">
                            <Form.Label className="colorinput">
                              <input
                                name="color"
                                type="radio"
                                defaultValue="pink"
                                className="colorinput-input"
                              />
                              <span className="colorinput-color bg-pink"></span>
                            </Form.Label>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      }
      <Row className="row row-sm">
        <Col lg={12} md={12}>
          <Card className="card productdesc">
            <Card.Body>
              <div className="panel panel-primary">
                <div className=" tab-menu-heading">
                  <div className="tabs-menu1">
                    {/* <!-- Tabs --> */}
                    <Tabs
                      defaultActiveKey="Specifications"
                      transition={false}
                      id="noanim-tab-example"
                      className="mb-3"
                    >
                      <Tab eventKey="Specifications" title="Specifications">
                        <div className="tab-pane " id="tab5">
                          <h5 className="mb-2 mt-1 fw-semibold">Description :</h5>
                          <p className="mb-3 tx-13">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum deleniti
                            atque corrupti quos dolores et quas molestias
                            excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia
                            animi, id est laborum et dolorum fuga.
                          </p>
                          <p className="mb-3 tx-13">
                            odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et
                            quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia.
                          </p>
                          <h5 className="mb-2 mt-3 fw-semibold">
                            Specifications :
                          </h5>
                          <div className="table-responsive">
                            <Table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <td className="fw-semibold">
                                    Package Dimensions
                                  </td>
                                  <td> 33 x 22 x 3 cm; 450 Grams</td>
                                </tr>
                                <tr>
                                  <td className="fw-semibold">Manufacturer</td>
                                  <td>gownu Production</td>
                                </tr>
                                <tr>
                                  <td className="fw-semibold">
                                    Item part number{" "}
                                  </td>
                                  <td>BNVRDMRHENFULL-Z14</td>
                                </tr>
                                <tr>
                                  <td className="fw-semibold">
                                    Best Sellers Rank
                                  </td>
                                  <td>
                                    {" "}
                                    #141 in Clothing & Accessories (See Top 100 in
                                    Clothing & Accessories)
                                  </td>
                                </tr>
                                <tr>
                                  <td className="fw-semibold">
                                    Customer Reviews
                                  </td>
                                  <td>
                                    <p className="text-muted float-start me-3">
                                      <span className="fa fa-star text-warning"></span>
                                      <span className="fa fa-star text-warning"></span>
                                      <span className="fa fa-star text-warning"></span>
                                      <span className="fa fa-star-half-o text-warning"></span>
                                      <span className="fa fa-star-o text-warning"></span>
                                      <span className="text-success fw-semibold">
                                        (2,076 ratings)
                                      </span>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Dimensions" title="Dimensions">
                        <div className="tab-pane" id="tab6">
                          <div className="table-responsive">
                            <Table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <td> Care Instructions</td>
                                  <td>Hand Wash Only</td>
                                </tr>
                                <tr>
                                  <td> Fit Type</td>
                                  <td>Regular</td>
                                </tr>
                                <tr>
                                  <td> Fabric</td>
                                  <td>Soft Crepe || full stitched</td>
                                </tr>
                                <tr>
                                  <td> Size</td>
                                  <td>
                                    S(34''), M(36"), L(38"), XL(40"), XXL(42")
                                  </td>
                                </tr>
                                <tr>
                                  <td> Length</td>
                                  <td>Up to 44 inch</td>
                                </tr>
                                <tr>
                                  <td> Manufacturer</td>
                                  <td>Jyothi fashions</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Features" title="Features">
                        <div className="tab-pane" id="tab7">
                          <div className="table-responsive">
                            <Table className="table table-bordered">
                              <tbody>
                                <tr>
                                  <td>
                                    <i className="fa fa-check me-3 text-success"></i>
                                    Care Instructions: Hand Wash Only
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <i className="fa fa-check me-3 text-success"></i>
                                    Kurta Material:Poly Crepe
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <i className="fa fa-check me-3 text-success"></i>
                                    Style: A-line 48" length Kurta with 3/4 Bell
                                    Sleeve
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <i className="fa fa-check me-3 text-success"></i>
                                    Ocassion:Casual, Formal
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <i className="fa fa-check me-3 text-success"></i>
                                    Packet contains: 1 readymade Kurta.
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <i className="fa fa-check me-3 text-success"></i>
                                    Size Declaration: Please choose garment size
                                    that is two inches more than your body
                                    measurement.e.g:-For Bust size -36(S),Select
                                    garment size-38''(M).
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>

              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12}>
          <Card>
            <Card.Body className="card-body p-0">
              <div className="d-flex p-3">
                <h5 className="float-start main-content-label mb-0 mt-2">
                  All Ratings and Reviews
                </h5>
                <Link
                  to="#"
                  className="btn btn-outline-primary btn-sm float-end ms-auto"
                >
                  Top Rated
                </Link>
              </div>
              <div className="media mt-0 p-3 border-bottom border-top">
                <div className="d-flex me-3">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                    <img
                      className="media-image avatar avatar-md rounded-circle"
                      alt="64x64"
                      src={require("../../../../assets/img/faces/6.jpg")}
                    />{" "}
                  </Link>
                </div>
                <div className="media-body">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                    <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                      Bruce Tran
                      <span
                        className="fs-14 ms-0"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="verified"
                      >
                        <i className="fa fa-check-circle-o text-success"></i>
                      </span>
                    </h5>
                  </Link>
                  <span className="text-muted tx-13">Tue, 20 Mar 2020</span>
                  <div className="text-warning mt-1">
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="font-13  mb-2 mt-2">
                    Lorem Ipsum available, quis Neque porro quisquam est, qui
                    dolorem ipsum quia .
                  </p>
                  <p className="mb-1">
                    {" "}
                    <Link to="#" className="me-2">
                      <span className="badge badge-primary">Helpful</span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span className="">Comment</span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span className="">Report</span>
                    </Link>
                    <span className="float-end">
                      {" "}
                      <Link to="#" className="new ms-3">
                        <i className="text-success br-7 text-success fe fe-thumbs-up fs-16 text-icon "></i>
                      </Link>
                      <Link to="#" className="new ms-3 mt-6">
                        <i className="text-danger br-7 text-danger fe fe-thumbs-down  fs-16 text-icon"></i>
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="media mt-0  p-3 border-bottom">
                <div className="d-flex me-3">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                    <img
                      className="media-image avatar avatar-md rounded-circle"
                      alt="64x64"
                      src={require("../../../../assets/img/faces/6.jpg")}
                    />{" "}
                  </Link>
                </div>
                <div className="media-body">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                    <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                      Mina Harpe
                      <span
                        className="fs-14 ms-0"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="verified"
                      >
                        <i className="fa fa-check-circle-o text-success"></i>
                      </span>
                    </h5>
                  </Link>
                  <span className="text-muted tx-13">Tue, 20 Mar 2020</span>
                  <div className="text-warning mt-1">
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star"></i>
                  </div>
                  <p className="font-13  mb-2 mt-2">
                    Lorem Ipsum available, quis Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, et nostrud exercitation
                    ullamco laboris commodo consequat.
                  </p>
                  <p className="mb-1">
                    <Link to="#" className="me-2">
                      <span className="badge badge-primary">Helpful</span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span className="">Comment</span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span className="">Report</span>
                    </Link>
                    <span className="float-end">
                      {" "}
                      <Link to="#" className="new ms-3">
                        <i className="text-success br-7 text-success fe fe-thumbs-up fs-16 text-icon "></i>
                      </Link>
                      <Link to="#" className="new ms-3 mt-6">
                        <i className="text-danger br-7 text-danger fe fe-thumbs-down  fs-16 text-icon"></i>
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="media mt-0 p-3">
                <div className="d-flex me-3">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                    <img
                      className="media-image avatar avatar-md rounded-circle"
                      alt="64x64"
                      src={require("../../../../assets/img/faces/6.jpg")}
                    />{" "}
                  </Link>
                </div>
                <div className="media-body">
                  <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                    <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                      Maria Quinn
                      <span
                        className="fs-14 ms-0"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="verified"
                      >
                        <i className="fa fa-check-circle-o text-success"></i>
                      </span>
                    </h5>
                  </Link>
                  <span className="text-muted tx-13">Tue, 20 Mar 2020</span>
                  <div className="text-warning mt-1">
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star active"></i>
                    <i className="bx bxs-star text-light"></i>
                  </div>
                  <p className="font-13  mb-2 mt-2">
                    Lorem Ipsum available, quis Neque porro quisquam est
                    exercitation ullamco laboris commodo consequat.
                  </p>
                  <p className="mb-1">
                    <Link to="#" className="me-2">
                      <span className="badge badge-primary">Helpful</span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span className="">Comment</span>
                    </Link>
                    <Link to="#" className="me-2">
                      <span className="">Report</span>
                    </Link>
                    <span className="float-end">
                      {" "}
                      <Link to="#" className="new ms-3">
                        <i className="text-success br-7 text-success fe fe-thumbs-up fs-16 text-icon "></i>
                      </Link>
                      <Link to="#" className="new ms-3 mt-6">
                        <i className="text-danger br-7 text-danger fe fe-thumbs-down  fs-16 text-icon"></i>
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <Card.Footer>
                <Button variant="" className="btn btn-light">More Reviews</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12}>
          <Card>
            <div className="ps-4 pe-4 pb-2 pt-4">
              <h5 className="mb-4">Write Review</h5>
              <div className="mb-1">
                <Row>
                  <Col className="form-group" md={6}>
                    <div className="mb-3 font-weight-semibold">Your Name</div>{" "}
                    <Form.Control
                      className="form-control"
                      placeholder="Your Name"
                      type="text"
                    />
                  </Col>
                  <Col className="form-group" md={6}>
                    <div className="mb-3 font-weight-semibold">Email Address</div>{" "}
                    <Form.Control
                      className="form-control"
                      placeholder="Email Address"
                      type="text"
                    />
                  </Col>
                </Row>
              </div>
              <span className="star-rating">
                <Link to="#">
                  <i className="icofont-ui-rating icofont-2x"></i>
                </Link>
                <Link to="#">
                  <i className="icofont-ui-rating icofont-2x"></i>
                </Link>
                <Link to="#">
                  <i className="icofont-ui-rating icofont-2x"></i>
                </Link>
                <Link to="#">
                  <i className="icofont-ui-rating icofont-2x"></i>
                </Link>
                <Link to="#">
                  <i className="icofont-ui-rating icofont-2x"></i>
                </Link>
              </span>
              <Form>
                <Form.Group className="form-group">
                  <div className="mb-3 font-weight-semibold">Your Comment</div>
                  <textarea className="form-control"></textarea>
                </Form.Group>
                <Form.Group className="form-group">
                  <Button variant="" className="btn btn-primary mt-3 mb-0" type="button">
                    Post your review
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>

      {/* <!-- /row --> */}
    </div>
  );
}
ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

export default ProductDetails;
