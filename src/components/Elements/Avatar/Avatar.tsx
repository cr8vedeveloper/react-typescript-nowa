import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';


const Avatar = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">AVATARS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Elements
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Avatars
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12} xl={6}>
        <Card className="custom-card" id="sizes">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatar Sizes</h6>
              <p className="text-muted card-sub-title">
                An avatar have different sizes.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group d-block d-sm-flex">
                  <div className="main-img-user avatar-xs">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/2.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-sm">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/3.jpg")}
                    />
                  </div>
                  <div className="main-img-user">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/4.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/5.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-lg">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/6.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-xl">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/7.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} xl={6}>
        <Card className="custom-card" id="initials">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Initials Avatars</h6>
              <p className="text-muted card-sub-title">
                An avatar have a temporary names of user's their photos are not
                yet available.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group avatar-list">
                  <div className="avatar avatar-xs bg-primary rounded-circle">
                    A
                  </div>
                  <div className="avatar avatar-sm bg-secondary rounded-circle">
                    U
                  </div>
                  <div className="avatar bg-info rounded-circle">C</div>
                  <div className="avatar avatar-md bg-success rounded-circle">
                    X
                  </div>
                  <div className="avatar avatar-lg d-none d-sm-flex bg-warning rounded-circle">
                    E
                  </div>
                  <div className="avatar avatar-xl d-none d-sm-flex bg-danger rounded-circle">
                    M
                  </div>
                  <div className="avatar avatar-xxl d-none d-sm-flex bg-pink rounded-circle">
                    NB
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <div className="col-lg-6 col-md-6">
        <Card className="custom-card" id="shapes">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatar Shapes</h6>
              <p className="text-muted card-sub-title">
                An avatar have different shapes.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-md me-4">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/4.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-md me-4">
                    <img
                      alt="avatar"
                      className="square"
                      src={require("../../../assets/img/faces/5.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="radius"
                      src={require("../../../assets/img/faces/6.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-6">
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Status Indicator</h6>
              <p className="text-muted card-sub-title">
                An avatar have a status indicator to indicate users
                availability.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-lg main-avatar online me-4">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/8.jpg")}
                    />
                  </div>
                  <div className="main-img-user avatar-lg main-avatar offline">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={require("../../../assets/img/faces/8.jpg")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-6">
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatars with numbers</h6>
              <p className="text-muted card-sub-title">
                Avatars that show number badges.
              </p>
            </div>
            <div className="text-wrap">
              <div className="additional-avatars">
                <div className="demo-avatar-group">
                  <div className="demo-avatar-group">
                    <div className="main-img-user1 avatar-sm me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../assets/img/faces/2.jpg")}
                      />
                      <span className="badge rounded-pill badge-primary number-badge">
                        2
                      </span>
                    </div>
                    <div className="main-img-user1 avatar-md me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../assets/img/faces/1.jpg")}
                      />
                      <span className="badge rounded-pill bg-secondary number-badge">
                        11
                      </span>
                    </div>
                    <div className="main-img-user1 avatar-lg">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../assets/img/faces/11.jpg")}
                      />
                      <span className="badge rounded-pill bg-success number-badge">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-6">
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Avatars with icons</h6>
              <p className="text-muted card-sub-title">
                Avatars that show icon badges.
              </p>
            </div>
            <div className="text-wrap">
              <div className="additional-avatars">
                <div className="demo-avatar-group">
                  <div className="demo-avatar-group">
                    <div className="main-img-user3 avatar-sm me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../assets/img/faces/2.jpg")}
                      />
                      <span className="badge rounded-pill badge-primary icon-badgeavatar">
                        <i className="fe fe-plus"></i>
                      </span>
                    </div>
                    <div className="main-img-user3 avatar-md me-4">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../assets/img/faces/1.jpg")}
                      />
                      <span className="badge rounded-pill bg-secondary icon-badgeavatar">
                        <i className="fe fe-edit"></i>
                      </span>
                    </div>
                    <div className="main-img-user3 avatar-lg">
                      <img
                        alt="avatar"
                        className="rounded-circle"
                        src={require("../../../assets/img/faces/11.jpg")}
                      />
                      <span className="badge rounded-pill bg-success icon-badgeavatar">
                        <i className="fe fe-delete"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-6">
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Stacked Avatars in Numbers</h6>
              <p className="text-muted card-sub-title">
                Group of avatars stacked together with number representation.
              </p>
            </div>
            <div className="text-wrap">
              <div className="avatar-list avatar-list-stacked">
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/2.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/6.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/8.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/10.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/12.jpg")}
                  />
                </span>
                <span className="avatar1 brround">+8</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-6">
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Stacked Avatars in Numbers</h6>
              <p className="text-muted card-sub-title">
                Avatars that show icon badges.
              </p>
            </div>
            <div className="text-wrap">
              <div className="avatar-list avatar-list-stacked">
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/2.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/6.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/8.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/10.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <img
                    alt=""
                    className="rounded-circle"
                    src={require("../../../assets/img/faces/12.jpg")}
                  />
                </span>
                <span className="avatar1 brround">
                  <i className="fe fe-plus"></i>
                </span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Row>
    {/* <!-- /row --> */}
  </div>
);

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
