import React from 'react';
import { Breadcrumb, Button, Card, Col, Dropdown, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Filemanager = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          FILE MANAGER
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
            File manager
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={4} xl={3}>
        <Card>
          <Card.Body className="main-content-left main-content-left-mail card-body">
            <Link
              className="btn btn-primary btn-compose"
              id="btnCompose"
              data-bs-target="#Vertically"
              data-bs-toggle="modal"
              to="#"
            >
              <i className="fa fa-plus me-2"></i> Create Folder
            </Link>
            <div className="main-mail-menu">
              <Nav className="main-nav-column" defaultActiveKey="Images">
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Images">
                  <i className="fe fe-image"></i> Images{" "}
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Music">
                  <i className="fe fe-music"></i> Music
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="ideos">
                  <i className="fe fe-video"></i> Videos
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="APKS">
                  <i className="fe fe-smartphone"></i> APKS
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Downloads">
                  <i className="fe fe-download"></i> Downloads
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Favourites">
                  <i className="fe fe-heart"></i> Favourites
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Hidden">
                  <i className="fe fe-eye"></i> Hidden FIles
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Transfer">
                  <i className="fe fe-share"></i> Transfer files{" "}
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Google">
                  <i className="fe fe-database"></i> Google Drive
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="FTP">
                  <i className="fe fe-airplay"></i> FTP
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Private">
                  <i className="fe fe-lock"></i> Private FIles
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="Deep">
                  <i className="fe fe-wind"></i> Deep Clean
                </Nav.Link></Nav.Item>
                <Nav.Item>
                <Nav.Link className="thumb" eventKey="More">
                  <i className="fe fe-grid "></i> More
                </Nav.Link></Nav.Item>
              </Nav>
              {/* </div><!-- main-mail-menu --> */}
              <Card className="custom-card mt-3 pb-0 mb-0">
                <Card.Header className="font-weight-bold">
                  <i className="fe fe-hard-drive me-2"></i>Storage
                </Card.Header>
                <Card.Body className="pt-0">
                  <div className="progress fileprogress mg-b-10">
                    {/* <div
                      className="progress-bar progress-bar-xs wd-15p"
                      role="progressbar"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div> */}
                  </div>
                  <div className="text-muted font-weight-semibold tx-13 mb-1">
                    26.24 GB Used of 128GB
                  </div>
                  <div className="tx-13 text-primary font-weight-semibold">
                    Upgrade Storage
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={9} lg={8}>
        <Row>
          <div className="col-6">
            <div className="tx-18 mb-4">FIle Manager</div>
          </div>
          <div className="col-6 col-auto">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search folder....."
              />
              <span className="input-group-append">
                <Button variant="" className="btn ripple btn-primary" type="button">
                  Search
                </Button>
              </span>
            </div>
          </div>
        </Row>
        <div className="text-muted mb-2 tx-16">All Files</div>
        <Row>
          <Col xl={3} md={6}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fbb8c7"
                        d="M18.12158,11.88672c-1.18039-1.14226-3.05327-1.14485-4.23681-0.00586l-1.58985,1.58008c-0.39155,0.38922-0.39343,1.02216-0.00421,1.41371c0.00043,0.00043,0.00085,0.00086,0.00128,0.00129l4.67481,4.68457L17.14148,20H19c1.65611-0.00181,2.99819-1.34389,3-3v-0.83008c-0.00009-0.26567-0.10585-0.52039-0.29395-0.708L18.12158,11.88672z"
                      />
                      <path
                        fill="#f74f75"
                        d="M5,20h14c0.355-0.00278,0.70662-0.06923,1.03815-0.19617l-9.91657-9.91711C8.94094,8.74376,7.06706,8.74161,5.88379,9.88184L2.294,13.46191c-0.18812,0.1876-0.2939,0.44232-0.294,0.708V17C2.00181,18.65611,3.34389,19.99819,5,20z"
                      />
                      <path
                        fill="#fa95ac"
                        d="M19,4H5C3.34387,4.00183,2.00183,5.34387,2,7v7.16992c0.00012-0.26569,0.1059-0.52039,0.29401-0.70801l3.58978-3.58008c1.18329-1.14026,3.05713-1.13806,4.23779,0.00488l2.87585,2.87604l0.88733-0.8819c1.18353-1.13898,3.05646-1.13641,4.23682,0.00586l3.58447,3.5752c0.18811,0.18762,0.29388,0.44232,0.29395,0.70801V7C21.99817,5.34387,20.65613,4.00183,19,4z"
                      />
                    </svg>
                    Image
                    <div className="float-end tx-13 text-muted mt-1">
                      14.2 mb
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#94daf6"
                        d="M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z"
                      />
                      <path
                        fill="#4ec2f0"
                        d="M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z"
                      />
                    </svg>
                    Video
                    <div className="float-end tx-13 text-muted mt-1">
                      212 mb
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffd79c"
                        d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
                      />
                      <path
                        fill="#ffbd5a"
                        d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-2a1 1 0 1 1 2 0v2A.99943.99943 0 0 1 12 18.00031zM12 13.00031a.8444.8444 0 0 1-.37988-.08008 1.02883 1.02883 0 0 1-.33008-.21.98946.98946 0 0 1-.29-.71 1.02776 1.02776 0 0 1 .29-.71 1.60941 1.60941 0 0 1 .14941-.12012.74157.74157 0 0 1 .18067-.08984.61981.61981 0 0 1 .17968-.06055.95515.95515 0 0 1 .58008.06055 1.16023 1.16023 0 0 1 .33008.21 1.0321 1.0321 0 0 1 .29.71.99349.99349 0 0 1-.29.71A1.01024 1.01024 0 0 1 12 13.00031z"
                      />
                    </svg>
                    Docs
                    <div className="float-end tx-13 text-muted mt-1">34 mb</div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#f34343"
                        d="M21.65137,2.24121a1.00561,1.00561,0,0,0-.80323-.22949l-13,2A1.00054,1.00054,0,0,0,7,5V15.35107A3.45946,3.45946,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.85779L20,9.16553v4.18554A3.45946,3.45946,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A.99909.99909,0,0,0,21.65137,2.24121Z"
                      />
                    </svg>
                    Music
                    <div className="float-end tx-13 text-muted mt-1">
                      1.5 gb
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#aca7fb"
                        d="M21.2,6.21l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,13.79398,9.38198,13.79199,9.38,13.79L1.8,6.21C2.29464,5.16676,3.34544,4.50126,4.5,4.5h14C19.65456,4.50126,20.70536,5.16676,21.2,6.21z"
                      />
                      <path
                        fill="#c8c4fc"
                        d="M21.20001,6.21002L13.62,13.78998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.38397,13.79401,9.38196,13.79199,9.38,13.78998L1.79999,6.21002C1.60345,6.61169,1.50085,7.0528,1.5,7.5v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.49915,7.0528,21.39655,6.61169,21.20001,6.21002z"
                      />
                      <path
                        fill="#766df9"
                        d="M17.5,9.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2-2c-0.38694-0.39399-0.38123-1.02706,0.01276-1.414c0.38897-0.38202,1.01227-0.38202,1.40125,0L17.5,7.086l3.293-3.293c0.39399-0.38694,1.02706-0.38122,1.414,0.01277c0.38201,0.38897,0.38201,1.01226,0,1.40123l-4,4C18.01971,9.39485,17.76527,9.5003,17.5,9.5z"
                      />
                    </svg>
                    APK
                    <div className="float-end tx-13 text-muted mt-1">
                      550 mb
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#75c3b6"
                        d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
                      />
                      <path
                        fill="#1a9c86"
                        d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-5a1 1 0 1 1 2 0v5A.99943.99943 0 0 1 12 18.00031z"
                      />
                      <path
                        fill="#1a9c86"
                        d="M12,18.00031a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,1,1,10.707,14.29328L12,15.58625l1.293-1.293A.99989.99989,0,1,1,14.707,15.70734l-2,2A.99676.99676,0,0,1,12,18.00031Z"
                      />
                    </svg>
                    Downloads
                    <div className="float-end tx-13 text-muted mt-1">
                      10.8 mb
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fdb172"
                        d="M12.00011,22h-9a.99991.99991,0,0,1-.707-1.707L4.257,18.3291A10.00061,10.00061,0,1,1,12.00011,22Z"
                      />
                      <path
                        fill="#fd7e14"
                        d="M12,16.24219a.99676.99676,0,0,1-.707-.293L8.46484,13.12109a3.00244,3.00244,0,0,1,0-4.24218A3.06772,3.06772,0,0,1,12,8.35254a3.0699,3.0699,0,0,1,3.53613.52637,3.00332,3.00332,0,0,1-.001,4.24218L12.707,15.94922A.99676.99676,0,0,1,12,16.24219Z"
                      />
                    </svg>
                    Chat
                    <div className="float-end tx-13 text-muted mt-1">
                      1.5 Gb
                    </div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col md={6}xl={3}>
            <Card>
              <Link to={`${process.env.PUBLIC_URL}/app/filemanager1`}>
                <Card.Body>
                  <div className="tx-16 mb-1">
                    <svg
                      className="file-manager-icon me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="9"
                        height="9"
                        x="2"
                        y="2"
                        fill="#f74f75"
                        rx="1"
                      />
                      <rect
                        width="9"
                        height="9"
                        x="2"
                        y="13"
                        fill="#fa95ac"
                        rx="1"
                      />
                      <rect
                        width="9"
                        height="9"
                        x="13"
                        y="2"
                        fill="#fa95ac"
                        rx="1"
                      />
                      <rect
                        width="9"
                        height="9"
                        x="13"
                        y="13"
                        fill="#fa95ac"
                        rx="1"
                      />
                    </svg>
                    More
                    <div className="float-end tx-13 text-muted mt-1">16 Gb</div>
                  </div>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
        <div className="text-muted mb-2 tx-16">Folders</div>
        <Row>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/folder.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">videos</h6>
                <span className="text-muted tx-11">4.23gb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/folder.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">Images</h6>
                <span className="text-muted">1.23gb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/image.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">Sea</h6>
                <span className="text-muted">8.97mb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/folder.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">Downloads</h6>
                <span className="text-muted">453kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/file.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">document.pdf</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/file.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">document.pdf</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/word.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">Word document</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/file.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">document.pdf</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/image.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">Outdoor Image</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/file.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">document.pdf</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/folder.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">Downloads</h6>
                <span className="text-muted">453kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <Card className="p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="example-checkbox2"
                    value="option2"
                  />
                  <span className="custom-control-label"></span>
                </label>
                <Dropdown className="float-end ms-auto optiondots">
                  <Dropdown.Toggle variant="" className="option-dots ">
                    <i className="fe fe-more-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-edit me-2"></i> Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-share me-2"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-download me-2"></i> Download
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/file.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold">document.pdf</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ul className="pagination float-end mb-4">
          <li className="page-item page-prev disabled">
            <Link className="page-link" to="#" tabIndex={-1}>
              Prev
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item page-next">
            <Link className="page-link" to="#">
              Next
            </Link>
          </li>
        </ul>
      </Col>
      {/* <!-- End Row --> */}
    </Row>
  </div>
);

Filemanager.propTypes = {};

Filemanager.defaultProps = {};

export default Filemanager;
