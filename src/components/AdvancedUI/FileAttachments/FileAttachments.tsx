import React from "react";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Attachments = () => (
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            FILE ATTACHMENT TAGS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Advanced UI
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active"
              aria-current="page"
            >
              File attachment taga
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- Row --> */}
      <Row className="sidemenu-height">
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Coloured Square File Attachment
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-secondary text-white"
                  >
                    <i className="mdi mdi-file-word me-2"></i> Word_file.doc
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-secondary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success text-white"
                  >
                    <i className="mdi mdi-file-excel me-2"></i> Excel_file.xls
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-success text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-warning text-white"
                  >
                    <i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-warning text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-danger text-white"
                  >
                    <i className="mdi mdi-file-video me-2"></i> Video_file.mp4
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-danger text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info text-white"
                  >
                    <i className="mdi mdi-file-music me-2"></i> Audio_file.mp3
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-info text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Coloured Rounded File Attachment
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-secondary text-white"
                  >
                    <i className="mdi mdi-file-word me-2"></i> Word_file.doc
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-secondary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-success text-white"
                  >
                    <i className="mdi mdi-file-excel me-2"></i> Excel_file.xls
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-success text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-warning text-white"
                  >
                    <i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-warning text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-danger text-white"
                  >
                    <i className="mdi mdi-file-video me-2"></i> Video_file.mp4
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-danger text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-info text-white"
                  >
                    <i className="mdi mdi-file-music me-2"></i> Audio_file.mp3
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-info text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Outline Square File Attachment
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-primary"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-secondary"
                  >
                    <i className="mdi mdi-file-word me-2"></i> Word_file.doc
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-secondary"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-success"
                  >
                    <i className="mdi mdi-file-excel me-2"></i> Excel_file.xls
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-success"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-warning"
                  >
                    <i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-warning"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    <i className="mdi mdi-file-video me-2"></i> Video_file.mp4
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-danger"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-info"
                  >
                    <i className="mdi mdi-file-music me-2"></i> Audio_file.mp3
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-info"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Outline Rounded File Attachment
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-primary"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-primary"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-secondary"
                  >
                    <i className="mdi mdi-file-word me-2"></i> Word_file.doc
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-secondary"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-success"
                  >
                    <i className="mdi mdi-file-excel me-2"></i> Excel_file.xls
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-success"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-warning"
                  >
                    <i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-warning"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-danger"
                  >
                    <i className="mdi mdi-file-video me-2"></i> Video_file.mp4
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-danger"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-info"
                  >
                    <i className="mdi mdi-file-music me-2"></i> Audio_file.mp3
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-info"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Transparent Square File Attachment
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary-light"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-primary-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-secondary-light"
                  >
                    <i className="mdi mdi-file-word me-2"></i> Word_file.doc
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-secondary-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success-light"
                  >
                    <i className="mdi mdi-file-excel me-2"></i> Excel_file.xls
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-success-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-warning-light"
                  >
                    <i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-warning-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-danger-light"
                  >
                    <i className="mdi mdi-file-video me-2"></i> Video_file.mp4
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-danger-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info-light"
                  >
                    <i className="mdi mdi-file-music me-2"></i> Audio_file.mp3
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-info-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Transparent Rounded File Attachment
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary-light rounded-pill"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-primary-light rounded-pill"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-secondary-light rounded-pill"
                  >
                    <i className="mdi mdi-file-word me-2"></i> Word_file.doc
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-secondary-light rounded-pill"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success-light rounded-pill"
                  >
                    <i className="mdi mdi-file-excel me-2"></i> Excel_file.xls
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-success-light rounded-pill"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-warning-light rounded-pill"
                  >
                    <i className="mdi mdi-file-pdf me-2"></i> pdf_file.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-warning-light rounded-pill"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-danger-light rounded-pill"
                  >
                    <i className="mdi mdi-file-video me-2"></i> Video_file.mp4
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-danger-light rounded-pill"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-info-light rounded-pill"
                  >
                    <i className="mdi mdi-file-music me-2"></i> Audio_file.mp3
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-info-light rounded-pill"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Square File Attachment with Link
                </h6>
                <p className="text-muted card-sub-title">
                  Square File Attachment with{" "}
                  <code className="highlighter-rouge">&lt;a&gt;</code> tag.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image mx-2"></i>Image01..._jpg
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-outline-secondary"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-outline-secondary"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-success-light"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-success-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Rounded File Attachment with link
                </h6>
                <p className="text-muted card-sub-title">
                  Rounded File_Attachment with{" "}
                  <code className="highlighter-rouge">&lt;a&gt;</code> tag.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-info text-white"
                  >
                    <i className="mdi mdi-file-image mx-2"></i>Image01..._jpg
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-info text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-outline-warning"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-outline-warning"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-danger-light"
                  >
                    <i className="mdi mdi-file-image me-2"></i> Image_file.jpg{" "}
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-danger-light"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Square File Attachment Sizes
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-sm btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image mx-2"></i>Image01..._jpg
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-sm btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button variant="" className="btn btn-secondary text-white">
                    <i className="mdi mdi-file-excel me-2"></i>Document.exl
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-close btn-secondary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-lg btn-info"
                  >
                    <i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-close btn-lg btn-info"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Rounded File Attachment Sizes
                </h6>
                <p className="text-muted card-sub-title">
                  Predefined button styles, each serving its own semantic
                  purpose.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-sm btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image me-2"></i>Image01..._jpg
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-sm btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-secondary"
                  >
                    <i className="mdi mdi-file-excel me-2"></i>Document.exl
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-secondary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-lg btn-info"
                  >
                    <i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf
                  </Button>
                  <Button
                    variant=""
                    type="button"
                    className="btn rounded-pill btn-close btn-lg btn-info"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Square File Attachment Sizes with link
                </h6>
                <p className="text-muted card-sub-title">
                  Square File_Attachment Sizes with{" "}
                  <code className="highlighter-rouge">&lt;a&gt;</code> tag.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    className="btn btn-sm btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image mx-2"></i>Image01..._jpg
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-close btn-sm btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button variant="" className="btn btn-secondary text-white">
                    <i className="mdi mdi-file-excel me-2"></i>Document.exl
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-close btn-secondary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button variant="" className="btn btn-lg btn-info">
                    <i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf
                  </Button>
                  <Button
                    variant=""
                    className="btn btn-close btn-lg btn-info"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Rounded File Attachment Sizes with link
                </h6>
                <p className="text-muted card-sub-title">
                  Rounded File_Attachment Sizes with{" "}
                  <code className="highlighter-rouge">&lt;a&gt;</code> tag.
                </p>
              </div>
              <div className="tags">
                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    className="btn rounded-pill btn-sm btn-primary text-white"
                  >
                    <i className="mdi mdi-file-image me-2"></i>Image01..._jpg
                  </Button>
                  <Button
                    variant=""
                    className="btn rounded-pill btn-close btn-sm btn-primary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    className="btn rounded-pill btn-secondary text-white"
                  >
                    <i className="mdi mdi-file-excel me-2"></i>Document.exl
                  </Button>
                  <Button
                    variant=""
                    className="btn rounded-pill btn-close btn-secondary text-white"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>

                <ButtonGroup
                  className="btn-group file-attach m-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <Button
                    variant=""
                    className="btn rounded-pill btn-lg btn-info"
                  >
                    <i className="mdi mdi-file-pdf fs-20 me-2"></i>AMN0012.pdf
                  </Button>
                  <Button
                    variant=""
                    className="btn rounded-pill btn-close btn-lg btn-info"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </ButtonGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={3}lg={6}sm={12}md={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1 card-sub-title">
                  Image-attachment
                </h6>
                <p className="text-muted card-sub-title"></p>
              </div>
              <div className="h-100  attached-file-grid6">
                <div className="pro-img-box attached-file-image">
                  <Link to="#">
                    <img
                      className=" pic-1 pos-relative br-5 w-100"
                      src={require("../../../assets/img/media/1.jpg")}
                      alt="attached-file"
                    />
                    <span className="image-pic">123image.jpg</span>
                  </Link>
                  <ul className="icons">
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">download</Tooltip>}
                      >
                        <i className="fe fe-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">deldete</Tooltip>}
                      >
                        <i className="fe fe-trash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">share</Tooltip>}
                      >
                        <i className="fe fe-share"></i>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}lg={6}sm={12}md={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Image-attachment</h6>
                <p className="text-muted card-sub-title"></p>
              </div>
              <div className="h-100  attached-file-grid6">
                <div className="pro-img-box attached-file-image">
                  <Link to="#">
                    <img
                      className=" pic-1 pos-relative br-5 w-100"
                      src={require("../../../assets/img/media/2.jpg")}
                      alt="attached-file"
                    />
                    <span className="image-pic">123image.jpg</span>
                  </Link>
                  <ul className="icons">
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">download</Tooltip>}
                      >
                        <i className="fe fe-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">deldete</Tooltip>}
                      >
                        <i className="fe fe-trash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">share</Tooltip>}
                      >
                        <i className="fe fe-share"></i>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}lg={6}sm={12}md={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Image-attachment</h6>
                <p className="text-muted card-sub-title"></p>
              </div>
              <div className="h-100  attached-file-grid6">
                <div className="pro-img-box attached-file-image">
                  <Link to="#">
                    <img
                      className=" pic-1 pos-relative br-5 w-100"
                      src={require("../../../assets/img/media/3.jpg")}
                      alt="attached-file"
                    />
                    <span className="image-pic">123image.jpg</span>
                  </Link>
                  <ul className="icons">
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">download</Tooltip>}
                      >
                        <i className="fe fe-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">deldete</Tooltip>}
                      >
                        <i className="fe fe-trash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">share</Tooltip>}
                      >
                        <i className="fe fe-share"></i>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3}lg={6}sm={12}md={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Image-attachment</h6>
                <p className="text-muted card-sub-title"></p>
              </div>
              <div className="h-100  attached-file-grid6">
                <div className="pro-img-box attached-file-image">
                  <Link to="#">
                    <img
                      className=" pic-1 pos-relative br-5 w-100"
                      src={require("../../../assets/img/media/4.jpg")}
                      alt="attached-file"
                    />
                    <span className="image-pic">123image.jpg</span>
                  </Link>
                  <ul className="icons">
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">download</Tooltip>}
                      >
                        <i className="fe fe-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">deldete</Tooltip>}
                      >
                        <i className="fe fe-trash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="me-1">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip className="btn">share</Tooltip>}
                      >
                        <i className="fe fe-share"></i>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <!-- ROW-4 OPEN --> */}
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Image File_Attachment Small Size</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap pb-3">
                <div className="file-image-1">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/image.png")}
                        className="br-5"
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Image01.jpg</span>
                </div>
                <div className="file-image-1">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/doc.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Word.doc</span>
                </div>
                <div className="file-image-1">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/file2.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Excel.xls</span>
                </div>
                <div className="file-image-1">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/file.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Document.pdf</span>
                </div>
                <div className="file-image-1">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/media/climate.jpg")}
                        className="br-5"
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Image02.jpg</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-4 CLOSED -->

                    <!-- ROW-5 OPEN --> */}
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Image File_Attachment Medium Size</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap pb-3">
                <div className="file-image-1 file-image-md">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/image.png")}
                        className="br-5"
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Image01.jpg</span>
                </div>
                <div className="file-image-1 file-image-md">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/doc.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Word.doc</span>
                </div>
                <div className="file-image-1 file-image-md">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/file2.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Excel.xls</span>
                </div>
                <div className="file-image-1 file-image-md">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/file.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Document.pdf</span>
                </div>
                <div className="file-image-1 file-image-md">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/media/climate.jpg")}
                        className="br-5"
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Image02.jpg</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-5 CLOSED -->

                    <!-- ROW-6 OPEN --> */}
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Image File_Attachment Large Size</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap pb-3">
                <div className="file-image-1 file-image-lg">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/image.png")}
                        className="br-5"
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Image01.jpg</span>
                </div>
                <div className="file-image-1 file-image-lg">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/doc.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Word.doc</span>
                </div>
                <div className="file-image-1 file-image-lg">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/file2.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Excel.xls</span>
                </div>
                <div className="file-image-1 file-image-lg">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/files/file.png")}
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Document.pdf</span>
                </div>
                <div className="file-image-1 file-image-lg">
                  <div className="product-image">
                    <Link to={`${process.env.PUBLIC_URL}/app/filedetails`}>
                      <img
                        src={require("../../../assets/img/media/climate.jpg")}
                        className="br-5"
                        alt=""
                      />
                    </Link>
                    <ul className="icons">
                      <li>
                        <Link to="#" className="btn bg-danger">
                          <i className="fe fe-trash"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-secondary">
                          <i className="fe fe-download"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="btn bg-primary">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span className="file-name-1">Image02.jpg</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- ROW-6 CLOSED --> */}
      {/* <!-- End Row --> */}
    </div>
);

Attachments.propTypes = {};

Attachments.defaultProps = {};

export default Attachments;
