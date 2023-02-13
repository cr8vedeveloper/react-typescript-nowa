import React from 'react';
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Timeline = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">TIMELINE</span>
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
            Timeline
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Header className=" custom-card-header">
            <h6 className="card-title mb-0">Vertical Timeline</h6>
          </Card.Header>
          <Card.Body className="">
            <div className="vtimeline">
              <div className="timeline-wrapper timeline-wrapper-primary">
                <div className="timeline-badge success">
                  <img
                    className="timeline-image"
                    alt=""
                    src={require("../../../assets/img/faces/3.jpg")}
                  />{" "}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">
                      Art Ramadani posted a status update
                    </h6>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Tolerably earnestly middleton extremely distrusts she boy
                      now not. Add and offered prepare how cordial two promise.
                      Greatly who affixed suppose but enquire compact prepare
                      all put. Added forth chief trees but rooms think may.
                    </p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>19</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}19 Oct
                      2020
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-primary">
                <div className="timeline-badge">
                  <i className="las la-business-time"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Job Meeting</h6>
                  </div>
                  <div className="timeline-body">
                    <p>You have a meeting at Laborator Office Today.</p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>25</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}10th Oct
                      2020
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-primary">
                <div className="timeline-badge">
                  <i className="las la-user-circle"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">
                      Arlind Nushi checked in at New York
                    </h6>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Alpha 5 has arrived just over a month after Alpha 4 with
                      some major feature improvements and a boat load of bug
                      fixes.
                    </p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>19</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}8th june
                      2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-primary">
                <div className="timeline-badge success">
                  <img
                    className="timeline-image"
                    alt=""
                    src={require("../../../assets/img/faces/12.jpg")}
                  />{" "}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">
                      Eroll Maxhuni uploaded 4 new photos to album Summer Trip
                    </h6>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Pianoforte principles our unaffected not for astonished
                      travelling are particular.
                    </p>
                    <img
                      src={require("../../../assets/img/media/4.jpg")}
                      className="mb-3 br-5"
                      alt=""
                    />
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>19</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}27th Sep
                      2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-primary">
                <div className="timeline-badge">
                  <i className="las la-envelope-open-text"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">
                      Support Team sent you an email
                    </h6>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Etsy doostang zoodles disqus groupon greplin oooj voxy
                      zoodles, weebly ning heekya handango imeem plugg dopplr
                      jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                      Babblely odeo kaboodle quora plaxo ideeli hulu weebly
                      balihoo....
                    </p>
                    <Link
                      to="#"
                      className="btn ripple btn-primary text-white mb-3"
                    >
                      Read more
                    </Link>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>25</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}25th oct
                      2021
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-inverted timeline-wrapper-primary">
                <div className="timeline-badge success">
                  <img
                    className="timeline-image"
                    alt=""
                    src={require("../../../assets/img/faces/15.jpg")}
                  />{" "}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">Mr. Doe shared a video</h6>
                  </div>
                  <div className="timeline-body">
                    <div className="embed-responsive embed-responsive-16by9 mb-3 br-5">
                      <iframe
                        title="Mr. Doe shared a video"
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart  text-muted me-1"></i>
                    <span>32</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}19th oct
                      2020
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-wrapper timeline-wrapper-primary">
                <div className="timeline-badge">
                  <i className="las la-check-circle"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h6 className="timeline-title">
                      Sarah Young accepted your friend request
                    </h6>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet cupiditate, delectus deserunt doloribus earum eveniet
                      explicabo fuga iste magni maxime
                    </p>
                  </div>
                  <div className="timeline-footer d-flex align-items-center flex-wrap">
                    <i className="fe fe-heart text-muted me-1"></i>
                    <span>26</span>
                    <span className="ms-auto">
                      <i className="fe fe-calendar text-muted me-1"></i>{' '}12th dec
                      2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

Timeline.propTypes = {};

Timeline.defaultProps = {};

export default Timeline;
