import React from "react";
import { Breadcrumb, Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Carousels = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return(
  <div>
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">CAROUSEL</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Advanced UI
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Carousel
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row className="row-sm">
        <Col lg={4} md={12} sm={12}>
          <Card className="custom-card">
            <Card.Body className=" ht-100p">
              <div>
                <h6 className="card-title mb-1">Static Carousel</h6>
                <p className="text-muted card-sub-title">
                  Here’s a carousel with slides only.
                </p>
              </div>
              <div className="Staticcarousel">
                <Carousel>
                  <Carousel.Item>
                    <img
                       className="d-block w-100"
                      src={require("../../../assets/img/photos/8.jpg")}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                       className="d-block w-100"
                      src={require("../../../assets/img/photos/18.jpg")}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                       className="d-block w-100"
                      src={require("../../../assets/img/photos/12.jpg")}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <Card className="custom-card">
            <Card.Body className=" ht-100p">
              <div>
                <h6 className="card-title mb-1">With Controls</h6>
                <p className="text-muted card-sub-title">
                  Adding in the previous and next controls.
                </p>
              </div>
              <div className="Withcontrols">
                <Carousel>
                  {/* <div className="carousel-inner"> */}
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/18.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/12.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/13.jpg")}
                    />
                  </Carousel.Item>
                  
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <Card className="custom-card">
            <Card.Body className=" ht-100p">
              <div>
                <h6 className="card-title mb-1">With Indicator</h6>
                <p className="text-muted card-sub-title">
                  You can also add the indicators to the carousel
                </p>
              </div>
              <div>
                <Carousel className=" slide" id="carouselExample3">
                  
                  <Carousel.Item className=" active">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/14.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/15.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/16.jpg")}
                    />
                  </Carousel.Item>
                  {/* </div> */}
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
          <Col lg={6} md={12}sm={12}xl={6}>
          <Card className="custom-card">
            <Card.Body className=" ht-100p">
              <div>
                <h6 className="card-title mb-1">With Caption</h6>
                <p className="text-muted card-sub-title">
                  Add captions to your slides easily with the{" "}
                  <code>.carousel-caption</code> element within any{" "}
                  <code>.carousel-item.</code>
                </p>
              </div>
              <div>
                <Carousel className=" bg-dark  slide" id="carouselExample4">
                  
                  <Carousel.Item>
                    <img
                      alt="img"
                      className="d-block w-100 op-3"
                      src={require("../../../assets/img/photos/17.jpg")}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First Slide</h5>
                      <p className="tx-14">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100 op-3"
                      src={require("../../../assets/img/photos/18.jpg")}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second Slide</h5>
                      <p className="tx-14">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100 op-3"
                      src={require("../../../assets/img/photos/19.jpg")}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third Slide</h5>
                      <p className="tx-14">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </div>
                  </Carousel.Item>
                  {/* </div> */}
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
          <Col lg={6} md={12}sm={12}xl={6}>
          <Card className="custom-card">
            <Card.Body className=" ht-100p">
              <div>
                <h6 className="card-title mb-1">Fade Animate Carousel</h6>
                <p className="text-muted card-sub-title">
                  Add fade transition to your carousel to animate slides with a
                  fade transition instead of a slide.
                </p>
              </div>
              <div>
                <Carousel
                  className=" slide carousel-fade"
                  id="carouselExample5"
                >
                  
                  <Carousel.Item className=" active">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/4.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/1.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className=" ">
                    <img
                      alt="img"
                      className="d-block w-100"
                      src={require("../../../assets/img/photos/2.jpg")}
                    />
                  </Carousel.Item>
                  {/* </div> */}
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}md={12}>
          <Card className="custom-card">
            <Card.Body className=" ht-100p">
              <div>
                <h6 className="card-title mb-1">Multi Slider</h6>
                <p className="text-muted card-sub-title">
                  Multislider is a jQuery powered slideshow that specializes in
                  showing more than one slide at a time. There's no need to find
                  messy CSS and JS work arounds for other single-slide
                  solutions. Multislider allows the developer to focus fully on
                  each individual slide as it's own component, and then displays
                  as many slides as you decide in a manner that is fluid,
                  consistent, and dymanic.
                </p>
              </div>
              <div id="basicSlider">
                <div className="MS-content">
                <Slider {...settings}>
          {/* <div id="owl-demo2" className="owl-carousel owl-carousel-icons2"> */}
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/1.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/2.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/3.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/4.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/5.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/6.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/7.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/8.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/9.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/10.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
          <div className="item">
            <Link to="#">
              <img
                src={require("../../../assets/img/photos/5.jpg")}
                alt=""
                className="br-5"
              />
            </Link>
          </div>
        </Slider>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  </div>
);}

Carousels.propTypes = {};

Carousels.defaultProps = {};

export default Carousels;
