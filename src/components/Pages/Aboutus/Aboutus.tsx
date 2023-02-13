import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';


const Aboutus = () => (
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">ABOUT US</span>
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
              About Us
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}
      {/* <!-- row ---> */}
      <div className="container">
        <Row className="about-main mb-5">
          <Col lg={8} md={8} sm={12} className="text-center">
            <h1 className="mb-3 font-weight-semibold tx-46">
              Hello! This is <span className="text-primary tx-56 text-transparent">Nowa.</span>
            </h1>
            <p className="leading-normal lead-1">
              Majority have suffered alteration in some form.
            </p>
            <p className="leading-normal  tx-16">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered by injected humour, or randomised
              words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum you are going to use a passage of
              Lorem Ipsum
            </p>
          </Col>
        </Row>
        <Row className="br-5">
          <p>
            <img
              src={require("../../../assets/img/photos/aboutmain.jpg")}
              className="br-5"
              alt=""
            />
          </p>
        </Row>
        <Row className="py-5 about-motto pt-0">
          <Col lg={8} md={8} sm={12} >
            <div className="text-justify">
              <div className="text-dark tx-26 font-weight-semibold">
                Our Motto
              </div>
              <p className="tx-14 mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam similique provident Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Natus, aliquam voluptas repellat
                eum beatae veniam, cumque eligendi earum praesentium, in
                corrupti reprehenderit cum architecto quisquam? Quibusdam
                quaerat veritatis perferendis iusto. !
              </p>
              <div>
                <div className="d-flex mb-4">
                  <div>
                    <svg
                      className="motto-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#38cab3"
                        d="M20,4H4.30273c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1H20c0.55228,0,1,0.44772,1,1S20.55228,4,20,4z M15,19v3H9v-3c0-1.65685,1.34315-3,3-3l0,0C13.65685,16,15,17.34315,15,19z M4,12L4,12c-1.10457,0-2-0.89543-2-2V7c0-0.55228,0.44772-1,1-1h3v4C6,11.10457,5.10457,12,4,12z"
                      />
                      <path
                        fill="#87dfd1"
                        d="M8,12L8,12c-1.10457,0-2-0.89543-2-2V6h4v4C10,11.10457,9.10457,12,8,12z"
                      />
                      <path
                        fill="#38cab3"
                        d="M12,12L12,12c-1.10457,0-2-0.89543-2-2V6h4v4C14,11.10457,13.10457,12,12,12z"
                      />
                      <path
                        fill="#87dfd1"
                        d="M16,12L16,12c-1.10457,0-2-0.89543-2-2V6h4v4C18,11.10457,17.10457,12,16,12z"
                      />
                      <path
                        fill="#38cab3"
                        d="M20,12L20,12c-1.10457,0-2-0.89543-2-2V6h3c0.55228,0,1,0.44772,1,1v3C22,11.10457,21.10457,12,20,12z"
                      />
                      <path
                        fill="#afe9e0"
                        d="M18,10c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2v9c0,0.55231,0.44769,1,1,1h4v-3c0-1.65686,1.34314-3,3-3s3,1.34314,3,3v3h4c0.55231,0,1-0.44769,1-1v-9C18.89545,12,18,11.10455,18,10z"
                      />
                    </svg>
                  </div>
                  <div className="ms-4">
                    <h5>High Standards in design !</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci quos sint, officia vel ab perferendis, dolores
                      placeat dolor aliquam debitis eius, illum ullam ratione
                      blanditiis fugiat omnis beatae odio vitae!
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <svg
                      className="motto-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#87dfd1"
                        d="M18,20V3c-0.00005-0.55215-0.44769-0.99971-0.99984-0.99966c-0.17446,0.00002-0.34588,0.04569-0.49723,0.13247L13.5,3.85352l-3.00293-1.72071c-0.3079-0.17643-0.68624-0.17643-0.99414,0L6.5,3.85352L3.49707,2.13281c-0.47899-0.27466-1.08994-0.10903-1.3646,0.36996C2.04569,2.65411,2.00002,2.82554,2,3v17c0,1.10457,0.89543,2,2,2h16C18.89543,22,18,21.10457,18,20z"
                      />
                      <path
                        fill="#38cab3"
                        d="M21.999,14v6c0,1.10457-0.89543,2-2,2l0,0c-1.10457,0-2-0.89543-2-2v-8h2C21.10357,12,21.999,12.89543,21.999,14z M12,10H8c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h4c0.55229,0,1,0.44771,1,1S12.55229,10,12,10z M9,14H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1S9.55229,14,9,14z M9,18H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44772,1,1S9.55229,18,9,18z M13,14c-0.54662,0.00567-0.99433-0.43286-1-0.97947c-0.00143-0.13758,0.02585-0.27396,0.08008-0.40041c0.19341-0.50537,0.75987-0.75826,1.26524-0.56486c0.13406,0.0513,0.25521,0.13144,0.35488,0.23474c0.09659,0.09256,0.17161,0.20525,0.21972,0.33008C13.97119,12.74027,13.9984,12.86934,14,13C13.99622,13.55071,13.55071,13.99622,13,14z M13,18c-0.13064-0.00161-0.25971-0.02881-0.37988-0.08008c-0.12124-0.05058-0.23289-0.12162-0.33008-0.21c-0.09109-0.09725-0.16564-0.20875-0.2207-0.33008C12.02149,17.25901,11.99793,17.12994,12,17c0.00346-0.26481,0.10708-0.51849,0.29-0.71c0.23601-0.23439,0.57326-0.33583,0.89941-0.27051c0.06633,0.00976,0.13064,0.03021,0.19043,0.06055c0.06372,0.02159,0.12418,0.05182,0.17969,0.08984c0.0525,0.03702,0.10274,0.07713,0.15047,0.12012c0.18254,0.19176,0.28609,0.44528,0.29,0.71c0.00226,0.26594-0.1022,0.52169-0.29,0.71c-0.09735,0.08817-0.20896,0.15918-0.33008,0.21C13.25973,17.97124,13.13065,17.99842,13,18z"
                      />
                    </svg>
                  </div>
                  <div className="ms-4">
                    <h5>Most anticipated techniques .</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci quos sint, officia vel ab perferendis illum ullam
                      ratione blanditiis fugiat omnis beatae odio vitae!
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <svg
                      className="motto-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#87dfd1"
                        d="M12,18a3.5,3.5,0,1,1,3.5-3.5A3.50424,3.50424,0,0,1,12,18Z"
                      />
                      <path
                        fill="#38cab3"
                        d="M14.64026,16.77179a3.452,3.452,0,0,1-5.28052,0A4.98821,4.98821,0,0,0,7,21a.99974.99974,0,0,0,1,1h8a.99974.99974,0,0,0,1-1A4.98821,4.98821,0,0,0,14.64026,16.77179Z"
                      />
                      <path
                        fill="#87dfd1"
                        d="M21,12a.99554.99554,0,0,1-.66406-.25244L12,4.33789,3.66406,11.74756a.99991.99991,0,0,1-1.32812-1.49512l9-8a.99893.99893,0,0,1,1.32812,0l9,8A1,1,0,0,1,21,12Z"
                      />
                      <path
                        fill="#afe9e0"
                        d="M12,4.33789,4,11.449V21a.99974.99974,0,0,0,1,1H8a.99974.99974,0,0,1-1-1,4.98821,4.98821,0,0,1,2.35974-4.22821l.00006.00006A3.46882,3.46882,0,0,1,8.5,14.5a3.5,3.5,0,0,1,7,0,3.46882,3.46882,0,0,1-.8598,2.27185l.00006-.00006A4.98821,4.98821,0,0,1,17,21a.99974.99974,0,0,1-1,1h3a.99974.99974,0,0,0,1-1V11.449Z"
                      />
                    </svg>
                  </div>
                  <div className="ms-4">
                    <h5>Even rated customers ?</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci quos sint, officia vel ab perferendis, dolores
                      placeat dolor aliquam debitis eius, illum ullam ratione
                      blanditiis fugiat omnis beatae odio vitae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg={6} md={6} xl={3}  >
            <Card className=" bg-primary-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="text-center mb-1">
                    <svg
                      className="about-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#38cab3"
                        d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z"
                        opacity=".99"
                      />
                      <path
                        fill="#87dfd1"
                        d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h2 className="counter mb-2">256</h2>
                    <h6 className="mb-0 text-muted">Completed Projects</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} xl={3}  >
            <Card className=" bg-secondary-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="text-center mb-1">
                    <svg
                      className="about-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="10" cy="8.5" r="5" fill="#fbb8c7" />
                      <path
                        fill="#fa95ac"
                        d="M13.30884,12.22253C12.42566,13.00806,11.27496,13.5,10,13.5s-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00018,0,0.00037,0,0.00055C2.00012,20.05267,2.44788,20.50012,3,20.5h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1C18,16.26324,16.07397,13.48206,13.30884,12.22253z"
                      />
                      <path
                        fill="#f74f75"
                        d="M18.3335,13.5c-0.26526,0.0003-0.51971-0.10515-0.707-0.293l-1.3335-1.333c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01228-0.38202,1.40125,0l0.62647,0.626l1.95953-1.96c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-2.6665,2.667C18.85321,13.39485,18.59877,13.5003,18.3335,13.5z"
                      />
                    </svg>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="counter mb-2">7,234</h2>
                    <h6 className="mb-0 text-muted">Total Customers</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} xl={3}  >
            <Card className=" bg-warning-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="text-center mb-1">
                    <svg
                      className="about-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffd79c"
                        d="M12,14.5c-3.26461,0.00094-6.4876-0.73267-9.43018-2.14648C2.22156,12.18802,1.99974,11.83676,2,11.45117V9.5c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v1.95215c0.00003,0.3859-0.22189,0.73741-0.57031,0.90332C18.48677,13.76762,15.26418,14.50051,12,14.5z M21,11.45215L21,11.45215z"
                      />
                      <path
                        fill="#ffbd5a"
                        d="M10,6.5v-1c0.00055-0.55206,0.44794-0.99945,1-1h2c0.55206,0.00055,0.99945,0.44794,1,1v1h2v-1c-0.00183-1.65613-1.34387-2.99817-3-3h-2c-1.65613,0.00183-2.99817,1.34387-3,3v1H10z"
                      />
                      <path
                        fill="#ffe4bd"
                        d="M21.42969,12.35547C18.48676,13.76764,15.26416,14.50049,12,14.5c-3.26459,0.00092-6.48761-0.73267-9.43018-2.14648C2.22156,12.18805,1.99976,11.83673,2,11.45117V18.5c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-7.04785C22.00006,11.83807,21.77814,12.18958,21.42969,12.35547z"
                      />
                      <path
                        fill="#ffbd5a"
                        d="M8,15.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948C7,14.50035,7,14.50017,7,14.5v-2c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C8.00035,15.5,8.00017,15.5,8,15.5z M16,15.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-0.55229,0.44771-1,1-1c0.55228,0,1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C16.00035,15.5,16.00017,15.5,16,15.5z"
                      />
                    </svg>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="counter mb-2">846</h2>
                    <h6 className="mb-0 text-muted">Available Employeed</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} xl={3}  >
            <Card className=" bg-info-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="text-center mb-1">
                    <svg
                      className="about-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="9.25" r="6" fill="#b8e6f9" />
                      <path
                        fill="#94daf6"
                        d="M19.57391,17.01288L17.00854,12.56l-0.00873,0.00433C15.92511,14.18231,14.08795,15.25,12,15.25c-0.1286,0-0.25439-0.01123-0.38098-0.01923l0.38953,0.66925l2.37408,4.11218c0.13806,0.23914,0.44385,0.32111,0.68304,0.18304c0.07391-0.04266,0.13562-0.10358,0.17938-0.17682l1.32349-2.21844l2.57941-0.0376c0.27612-0.00397,0.4967-0.23108,0.49268-0.5072C19.6394,17.17004,19.61646,17.08667,19.57391,17.01288z"
                      />
                      <path
                        fill="#4ec2f0"
                        d="M11.61896,15.23071c-1.92963-0.12152-3.61176-1.14911-4.62012-2.66864l-2.56421,4.45081c-0.04248,0.07379-0.06549,0.15717-0.06671,0.24231c-0.00397,0.27612,0.21661,0.50323,0.49274,0.5072L7.44,17.79999l1.32355,2.21844c0.0437,0.07324,0.10547,0.13416,0.17938,0.17682c0.23914,0.13806,0.54492,0.05609,0.68298-0.18304L12,15.90002l0.00427-0.00732l-0.38525-0.66193L11.61896,15.23071z"
                      />
                    </svg>
                  </div>
                  <div className="text-center mb-1">
                    <h2 className="counter mb-2">153</h2>
                    <h6 className="mb-0 text-muted">Awards won</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} xl={3} md={6} sm={12}>
            <Card className=" p-3">
              <Card.Body>
                <div className="mb-3 text-center about-team">
                  <img
                    className="rounded-pill"
                    src={require("../../../assets/img/faces/1.jpg"
        )}            alt=""
                  />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Rosen Berg
                </div>
                <div className="tx-14 text-center text-muted mb-3">
                  Chief Manager
                </div>
                <div className="text-center tx-14 mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam similique provident !
                </div>
                <p className="text-center mb-0">
                  <i className="fe fe-facebook text-primary me-3"></i>
                  <i className="fe fe-instagram text-secondary me-3"></i>
                  <i className="fe fe-globe text-info me-3"></i>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} xl={3} md={6} sm={12}>
            <Card className=" p-3">
              <Card.Body>
                <div className="mb-3 text-center about-team">
                  <img
                    className="rounded-pill"
                    src={require("../../../assets/img/faces/2.jpg"
        )}            alt=""
                  />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Mclaren mcannen
                </div>
                <div className="tx-14 text-center text-muted mb-3">
                  Sales Manager
                </div>
                <div className="text-center tx-14 mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam similique provident !
                </div>
                <p className="text-center mb-0">
                  <i className="fe fe-facebook text-primary me-3"></i>
                  <i className="fe fe-instagram text-secondary me-3"></i>
                  <i className="fe fe-globe text-info me-3"></i>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} xl={3} md={6} sm={12}>
            <Card className=" p-3">
              <Card.Body>
                <div className="mb-3 text-center about-team">
                  <img
                    className="rounded-pill"
                    src={require("../../../assets/img/faces/3.jpg"
        )}            alt=""
                  />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Shimpa Craig
                </div>
                <div className="tx-14 text-center text-muted mb-3">
                  Author & writer
                </div>
                <div className="text-center tx-14 mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam similique provident !
                </div>
                <p className="text-center mb-0">
                  <i className="fe fe-facebook text-primary me-3"></i>
                  <i className="fe fe-instagram text-secondary me-3"></i>
                  <i className="fe fe-globe text-info me-3"></i>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} xl={3} md={6} sm={12}>
            <Card className=" p-3">
              <Card.Body>
                <div className="mb-3 text-center about-team">
                  <img
                    className="rounded-pill"
                    src={require("../../../assets/img/faces/4.jpg"
        )}            alt=""
                  />
                </div>
                <div className="tx-16 text-center font-weight-semibold">
                  Limo Peter
                </div>
                <div className="tx-14 text-center text-muted mb-3">
                  Operations Head
                </div>
                <div className="text-center tx-14 mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam similique provident !
                </div>
                <p className="text-center mb-0">
                  <i className="fe fe-facebook text-primary me-3"></i>
                  <i className="fe fe-instagram text-secondary me-3"></i>
                  <i className="fe fe-globe text-info me-3"></i>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* <!-- /row ---> */}
    </div>
);

Aboutus.propTypes = {};

Aboutus.defaultProps = {};

export default Aboutus;
