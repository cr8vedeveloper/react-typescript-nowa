import React from 'react';
import { Breadcrumb, Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Filemanager1 = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">FILE MANAGER 1</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            File manager1
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12} xl={12}>
        <Row>
          <div className="col-6">
            <div className="tx-18 mb-4">Files</div>
          </div>
          <div className="col-6 col-auto">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search files....."
              />
              <span className="input-group-append">
                <Button className="btn ripple btn-primary" type="button">
                  Search
                </Button>
              </span>
            </div>
          </div>
        </Row>
        <Row>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                <span className="text-muted">4.23gb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                      <i className="fe fe-trash me-2"></i> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Card.Body className="pt-0 text-center">
                <div className="file-manger-icon1">
                  <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                    <img
                      src={require("../../../assets/img/files/doc.png")}
                      alt=""
                      className="br-7"
                    />
                  </Link>
                </div>
                <h6 className="mb-1 font-weight-semibold mt-1">Document</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                <h6 className="mb-1 font-weight-semibold mt-2">login image</h6>
                <span className="text-muted">23kb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                <h6 className="mb-1 font-weight-semibold mt-2">beach image</h6>
                <span className="text-muted">4.23gb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                <h6 className="mb-1 font-weight-semibold mt-2">sky image</h6>
                <span className="text-muted">1.23gb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                <h6 className="mb-1 font-weight-semibold mt-2">Sea</h6>
                <span className="text-muted">897mb</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xl={2} md={4}>
            <Card className=" p-0 ">
              <div className="d-flex align-items-center px-3 pt-3">
                <Dropdown className="float-end optiondots ms-auto">
                  <Dropdown.Toggle
                  variant=''
                    className="option-dots"
                  >
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
                <h6 className="mb-1 font-weight-semibold mt-2">Outdoor Image</h6>
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
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

Filemanager1.propTypes = {};

Filemanager1.defaultProps = {};

export default Filemanager1;
