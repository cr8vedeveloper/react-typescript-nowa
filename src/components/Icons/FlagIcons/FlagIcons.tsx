import React from 'react';
import {
  Col,
  Row,
  Card,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FlagIcons = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">FLAG</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Icons
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Flag icons
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- Row--> */}
    <Row>
      <Col md={12}>
        <Card className="custom-card">
          <Card.Body>
            <Row className="row-sm">
              <Col sm={12} lg={12} className="mb-2">
                <h6 className="main-content-label">Flags Icons</h6>
                <p className="mb-2">
                  {" "}
                  For more info{" "}
                  <a
                    href="#" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="flag flag-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ad</Tooltip>}
                      >
                      <i
                        className="flag flag-ad"
                        data-bs-container=".flag-ad"
                        title="flag flag-ad"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ae</Tooltip>}
                      >
                      <i
                        className="flag flag-ae"
                        data-bs-container=".flag-ae"
                        title="flag flag-ae"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-af</Tooltip>}
                      >
                      <i
                        className="flag flag-af"
                        data-bs-container=".flag-af"
                        title="flag flag-af"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ag</Tooltip>}
                      >
                      <i
                        className="flag flag-ag"
                        data-bs-container=".flag-ag"
                        title="flag flag-ag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ai</Tooltip>}
                      >
                      <i
                        className="flag flag-ai"
                        data-bs-container=".flag-ai"
                        title="flag flag-ai"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-al</Tooltip>}
                      >
                      <i
                        className="flag flag-al"
                        data-bs-container=".flag-al"
                        title="flag flag-al"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-am</Tooltip>}
                      >
                      <i
                        className="flag flag-am"
                        data-bs-container=".flag-am"
                        title="flag flag-am"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ao</Tooltip>}
                      >
                      <i
                        className="flag flag-ao"
                        data-bs-container=".flag-ao"
                        title="flag flag-ao"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-aq</Tooltip>}
                      >
                      <i
                        className="flag flag-aq"
                        data-bs-container=".flag-aq"
                        title="flag flag-aq"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ar</Tooltip>}
                      >
                      <i
                        className="flag flag-ar"
                        data-bs-container=".flag-ar"
                        title="flag flag-ar"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-as</Tooltip>}
                      >
                      <i
                        className="flag flag-as"
                        data-bs-container=".flag-as"
                        title="flag flag-as"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-at</Tooltip>}
                      >
                      <i
                        className="flag flag-at"
                        data-bs-container=".flag-at"
                        title="flag flag-at"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-au</Tooltip>}
                      >
                      <i
                        className="flag flag-au"
                        data-bs-container=".flag-au"
                        title="flag flag-au"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-aw</Tooltip>}
                      >
                      <i
                        className="flag flag-aw"
                        data-bs-container=".flag-aw"
                        title="flag flag-aw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ax</Tooltip>}
                      >
                      <i
                        className="flag flag-ax"
                        data-bs-container=".flag-ax"
                        title="flag flag-ax"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-az</Tooltip>}
                      >
                      <i
                        className="flag flag-az"
                        data-bs-container=".flag-az"
                        title="flag flag-az"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ba</Tooltip>}
                      >
                      <i
                        className="flag flag-ba"
                        data-bs-container=".flag-ba"
                        title="flag flag-ba"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bb</Tooltip>}
                      >
                      <i
                        className="flag flag-bb"
                        data-bs-container=".flag-bb"
                        title="flag flag-bb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bd</Tooltip>}
                      >
                      <i
                        className="flag flag-bd"
                        data-bs-container=".flag-bd"
                        title="flag flag-bd"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-be</Tooltip>}
                      >
                      <i
                        className="flag flag-be"
                        data-bs-container=".flag-be"
                        title="flag flag-be"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bf</Tooltip>}
                      >
                      <i
                        className="flag flag-bf"
                        data-bs-container=".flag-bf"
                        title="flag flag-bf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bg</Tooltip>}
                      >
                      <i
                        className="flag flag-bg"
                        data-bs-container=".flag-bg"
                        title="flag flag-bg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bh</Tooltip>}
                      >
                      <i
                        className="flag flag-bh"
                        data-bs-container=".flag-bh"
                        title="flag flag-bh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bi</Tooltip>}
                      >
                      <i
                        className="flag flag-bi"
                        data-bs-container=".flag-bi"
                        title="flag flag-bi"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bj</Tooltip>}
                      >
                      <i
                        className="flag flag-bj"
                        data-bs-container=".flag-bj"
                        title="flag flag-bj"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bl</Tooltip>}
                      >
                      <i
                        className="flag flag-bl"
                        data-bs-container=".flag-bl"
                        title="flag flag-bl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bm</Tooltip>}
                      >
                      <i
                        className="flag flag-bm"
                        data-bs-container=".flag-bm"
                        title="flag flag-bm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bn</Tooltip>}
                      >
                      <i
                        className="flag flag-bn"
                        data-bs-container=".flag-bn"
                        title="flag flag-bn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bo</Tooltip>}
                      >
                      <i
                        className="flag flag-bo"
                        data-bs-container=".flag-bo"
                        title="flag flag-bo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bq</Tooltip>}
                      >
                      <i
                        className="flag flag-bq"
                        data-bs-container=".flag-bq"
                        title="flag flag-bq"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-br</Tooltip>}
                      >
                      <i
                        className="flag flag-br"
                        data-bs-container=".flag-br"
                        title="flag flag-br"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bs</Tooltip>}
                      >
                      <i
                        className="flag flag-bs"
                        data-bs-container=".flag-bs"
                        title="flag flag-bs"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bt</Tooltip>}
                      >
                      <i
                        className="flag flag-bt"
                        data-bs-container=".flag-bt"
                        title="flag flag-bt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bv</Tooltip>}
                      >
                      <i
                        className="flag flag-bv"
                        data-bs-container=".flag-bv"
                        title="flag flag-bv"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bw</Tooltip>}
                      >
                      <i
                        className="flag flag-bw"
                        data-bs-container=".flag-bw"
                        title="flag flag-bw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-by</Tooltip>}
                      >
                      <i
                        className="flag flag-by"
                        data-bs-container=".flag-by"
                        title="flag flag-by"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-bz</Tooltip>}
                      >
                      <i
                        className="flag flag-bz"
                        data-bs-container=".flag-bz"
                        title="flag flag-bz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ca</Tooltip>}
                      >
                      <i
                        className="flag flag-ca"
                        data-bs-container=".flag-ca"
                        title="flag flag-ca"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cc</Tooltip>}
                      >
                      <i
                        className="flag flag-cc"
                        data-bs-container=".flag-cc"
                        title="flag flag-cc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cd</Tooltip>}
                      >
                      <i
                        className="flag flag-cd"
                        data-bs-container=".flag-cd"
                        title="flag flag-cd"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cf</Tooltip>}
                      >
                      <i
                        className="flag flag-cf"
                        data-bs-container=".flag-cf"
                        title="flag flag-cf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cg</Tooltip>}
                      >
                      <i
                        className="flag flag-cg"
                        data-bs-container=".flag-cg"
                        title="flag flag-cg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ch</Tooltip>}
                      >
                      <i
                        className="flag flag-ch"
                        data-bs-container=".flag-ch"
                        title="flag flag-ch"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ci</Tooltip>}
                      >
                      <i
                        className="flag flag-ci"
                        data-bs-container=".flag-ci"
                        title="flag flag-ci"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ck</Tooltip>}
                      >
                      <i
                        className="flag flag-ck"
                        data-bs-container=".flag-ck"
                        title="flag flag-ck"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cl</Tooltip>}
                      >
                      <i
                        className="flag flag-cl"
                        data-bs-container=".flag-cl"
                        title="flag flag-cl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cm</Tooltip>}
                      >
                      <i
                        className="flag flag-cm"
                        data-bs-container=".flag-cm"
                        title="flag flag-cm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cn</Tooltip>}
                      >
                      <i
                        className="flag flag-cn"
                        data-bs-container=".flag-cn"
                        title="flag flag-cn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-co</Tooltip>}
                      >
                      <i
                        className="flag flag-co"
                        data-bs-container=".flag-co"
                        title="flag flag-co"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cr</Tooltip>}
                      >
                      <i
                        className="flag flag-cr"
                        data-bs-container=".flag-cr"
                        title="flag flag-cr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cu</Tooltip>}
                      >
                      <i
                        className="flag flag-cu"
                        data-bs-container=".flag-cu"
                        title="flag flag-cu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cv</Tooltip>}
                      >
                      <i
                        className="flag flag-cv"
                        data-bs-container=".flag-cv"
                        title="flag flag-cv"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cw</Tooltip>}
                      >
                      <i
                        className="flag flag-cw"
                        data-bs-container=".flag-cw"
                        title="flag flag-cw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cx</Tooltip>}
                      >
                      <i
                        className="flag flag-cx"
                        data-bs-container=".flag-cx"
                        title="flag flag-cx"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cy</Tooltip>}
                      >
                      <i
                        className="flag flag-cy"
                        data-bs-container=".flag-cy"
                        title="flag flag-cy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-cz</Tooltip>}
                      >
                      <i
                        className="flag flag-cz"
                        data-bs-container=".flag-cz"
                        title="flag flag-cz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-de</Tooltip>}
                      >
                      <i
                        className="flag flag-de"
                        data-bs-container=".flag-de"
                        title="flag flag-de"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-dj</Tooltip>}
                      >
                      <i
                        className="flag flag-dj"
                        data-bs-container=".flag-dj"
                        title="flag flag-dj"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-dk</Tooltip>}
                      >
                      <i
                        className="flag flag-dk"
                        data-bs-container=".flag-dk"
                        title="flag flag-dk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-dm</Tooltip>}
                      >
                      <i
                        className="flag flag-dm"
                        data-bs-container=".flag-dm"
                        title="flag flag-dm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-do</Tooltip>}
                      >
                      <i
                        className="flag flag-do"
                        data-bs-container=".flag-do"
                        title="flag flag-do"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-dz</Tooltip>}
                      >
                      <i
                        className="flag flag-dz"
                        data-bs-container=".flag-dz"
                        title="flag flag-dz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ec</Tooltip>}
                      >
                      <i
                        className="flag flag-ec"
                        data-bs-container=".flag-ec"
                        title="flag flag-ec"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ee</Tooltip>}
                      >
                      <i
                        className="flag flag-ee"
                        data-bs-container=".flag-ee"
                        title="flag flag-ee"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-eg</Tooltip>}
                      >
                      <i
                        className="flag flag-eg"
                        data-bs-container=".flag-eg"
                        title="flag flag-eg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-eh</Tooltip>}
                      >
                      <i
                        className="flag flag-eh"
                        data-bs-container=".flag-eh"
                        title="flag flag-eh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-er</Tooltip>}
                      >
                      <i
                        className="flag flag-er"
                        data-bs-container=".flag-er"
                        title="flag flag-er"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-es</Tooltip>}
                      >
                      <i
                        className="flag flag-es"
                        data-bs-container=".flag-es"
                        title="flag flag-es"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-et</Tooltip>}
                      >
                      <i
                        className="flag flag-et"
                        data-bs-container=".flag-et"
                        title="flag flag-et"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-eu</Tooltip>}
                      >
                      <i
                        className="flag flag-eu"
                        data-bs-container=".flag-eu"
                        title="flag flag-eu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-fi</Tooltip>}
                      >
                      <i
                        className="flag flag-fi"
                        data-bs-container=".flag-fi"
                        title="flag flag-fi"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-fj</Tooltip>}
                      >
                      <i
                        className="flag flag-fj"
                        data-bs-container=".flag-fj"
                        title="flag flag-fj"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-fk</Tooltip>}
                      >
                      <i
                        className="flag flag-fk"
                        data-bs-container=".flag-fk"
                        title="flag flag-fk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-fm</Tooltip>}
                      >
                      <i
                        className="flag flag-fm"
                        data-bs-container=".flag-fm"
                        title="flag flag-fm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-fo</Tooltip>}
                      >
                      <i
                        className="flag flag-fo"
                        data-bs-container=".flag-fo"
                        title="flag flag-fo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-fr</Tooltip>}
                      >
                      <i
                        className="flag flag-fr"
                        data-bs-container=".flag-fr"
                        title="flag flag-fr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ga</Tooltip>}
                      >
                      <i
                        className="flag flag-ga"
                        data-bs-container=".flag-ga"
                        title="flag flag-ga"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gb</Tooltip>}
                      >
                      <i
                        className="flag flag-gb"
                        data-bs-container=".flag-gb"
                        title="flag flag-gb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gb-eng</Tooltip>}
                      >
                      <i
                        className="flag flag-gb-eng"
                        data-bs-container=".flag-gb-eng"
                        title="flag flag-gb-eng"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gb-nir</Tooltip>}
                      >
                      <i
                        className="flag flag-gb-nir"
                        data-bs-container=".flag-gb-nir"
                        title="flag flag-gb-nir"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gb-sct</Tooltip>}
                      >
                      <i
                        className="flag flag-gb-sct"
                        data-bs-container=".flag-gb-sct"
                        title="flag flag-gb-sct"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gb-wls</Tooltip>}
                      >
                      <i
                        className="flag flag-gb-wls"
                        data-bs-container=".flag-gb-wls"
                        title="flag flag-gb-wls"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gd</Tooltip>}
                      >
                      <i
                        className="flag flag-gd"
                        data-bs-container=".flag-gd"
                        title="flag flag-gd"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ge</Tooltip>}
                      >
                      <i
                        className="flag flag-ge"
                        data-bs-container=".flag-ge"
                        title="flag flag-ge"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gf</Tooltip>}
                      >
                      <i
                        className="flag flag-gf"
                        data-bs-container=".flag-gf"
                        title="flag flag-gf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gg</Tooltip>}
                      >
                      <i
                        className="flag flag-gg"
                        data-bs-container=".flag-gg"
                        title="flag flag-gg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gh</Tooltip>}
                      >
                      <i
                        className="flag flag-gh"
                        data-bs-container=".flag-gh"
                        title="flag flag-gh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gi</Tooltip>}
                      >
                      <i
                        className="flag flag-gi"
                        data-bs-container=".flag-gi"
                        title="flag flag-gi"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gl</Tooltip>}
                      >
                      <i
                        className="flag flag-gl"
                        data-bs-container=".flag-gl"
                        title="flag flag-gl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gm</Tooltip>}
                      >
                      <i
                        className="flag flag-gm"
                        data-bs-container=".flag-gm"
                        title="flag flag-gm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gn</Tooltip>}
                      >
                      <i
                        className="flag flag-gn"
                        data-bs-container=".flag-gn"
                        title="flag flag-gn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gp</Tooltip>}
                      >
                      <i
                        className="flag flag-gp"
                        data-bs-container=".flag-gp"
                        title="flag flag-gp"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gq</Tooltip>}
                      >
                      <i
                        className="flag flag-gq"
                        data-bs-container=".flag-gq"
                        title="flag flag-gq"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gr</Tooltip>}
                      >
                      <i
                        className="flag flag-gr"
                        data-bs-container=".flag-gr"
                        title="flag flag-gr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gs</Tooltip>}
                      >
                      <i
                        className="flag flag-gs"
                        data-bs-container=".flag-gs"
                        title="flag flag-gs"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gt</Tooltip>}
                      >
                      <i
                        className="flag flag-gt"
                        data-bs-container=".flag-gt"
                        title="flag flag-gt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gu</Tooltip>}
                      >
                      <i
                        className="flag flag-gu"
                        data-bs-container=".flag-gu"
                        title="flag flag-gu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gw</Tooltip>}
                      >
                      <i
                        className="flag flag-gw"
                        data-bs-container=".flag-gw"
                        title="flag flag-gw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-gy</Tooltip>}
                      >
                      <i
                        className="flag flag-gy"
                        data-bs-container=".flag-gy"
                        title="flag flag-gy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-hk</Tooltip>}
                      >
                      <i
                        className="flag flag-hk"
                        data-bs-container=".flag-hk"
                        title="flag flag-hk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-hm</Tooltip>}
                      >
                      <i
                        className="flag flag-hm"
                        data-bs-container=".flag-hm"
                        title="flag flag-hm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-hn</Tooltip>}
                      >
                      <i
                        className="flag flag-hn"
                        data-bs-container=".flag-hn"
                        title="flag flag-hn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-hr</Tooltip>}
                      >
                      <i
                        className="flag flag-hr"
                        data-bs-container=".flag-hr"
                        title="flag flag-hr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ht</Tooltip>}
                      >
                      <i
                        className="flag flag-ht"
                        data-bs-container=".flag-ht"
                        title="flag flag-ht"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-hu</Tooltip>}
                      >
                      <i
                        className="flag flag-hu"
                        data-bs-container=".flag-hu"
                        title="flag flag-hu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-id</Tooltip>}
                      >
                      <i
                        className="flag flag-id"
                        data-bs-container=".flag-id"
                        title="flag flag-id"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ie</Tooltip>}
                      >
                      <i
                        className="flag flag-ie"
                        data-bs-container=".flag-ie"
                        title="flag flag-ie"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-il</Tooltip>}
                      >
                      <i
                        className="flag flag-il"
                        data-bs-container=".flag-il"
                        title="flag flag-il"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-im</Tooltip>}
                      >
                      <i
                        className="flag flag-im"
                        data-bs-container=".flag-im"
                        title="flag flag-im"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-in</Tooltip>}
                      >
                      <i
                        className="flag flag-in"
                        data-bs-container=".flag-in"
                        title="flag flag-in"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-io</Tooltip>}
                      >
                      <i
                        className="flag flag-io"
                        data-bs-container=".flag-io"
                        title="flag flag-io"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-iq</Tooltip>}
                      >
                      <i
                        className="flag flag-iq"
                        data-bs-container=".flag-iq"
                        title="flag flag-iq"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ir</Tooltip>}
                      >
                      <i
                        className="flag flag-ir"
                        data-bs-container=".flag-ir"
                        title="flag flag-ir"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-is</Tooltip>}
                      >
                      <i
                        className="flag flag-is"
                        data-bs-container=".flag-is"
                        title="flag flag-is"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-it</Tooltip>}
                      >
                      <i
                        className="flag flag-it"
                        data-bs-container=".flag-it"
                        title="flag flag-it"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-je</Tooltip>}
                      >
                      <i
                        className="flag flag-je"
                        data-bs-container=".flag-je"
                        title="flag flag-je"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-jm</Tooltip>}
                      >
                      <i
                        className="flag flag-jm"
                        data-bs-container=".flag-jm"
                        title="flag flag-jm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-jo</Tooltip>}
                      >
                      <i
                        className="flag flag-jo"
                        data-bs-container=".flag-jo"
                        title="flag flag-jo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-jp</Tooltip>}
                      >
                      <i
                        className="flag flag-jp"
                        data-bs-container=".flag-jp"
                        title="flag flag-jp"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ke</Tooltip>}
                      >
                      <i
                        className="flag flag-ke"
                        data-bs-container=".flag-ke"
                        title="flag flag-ke"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kg</Tooltip>}
                      >
                      <i
                        className="flag flag-kg"
                        data-bs-container=".flag-kg"
                        title="flag flag-kg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kh</Tooltip>}
                      >
                      <i
                        className="flag flag-kh"
                        data-bs-container=".flag-kh"
                        title="flag flag-kh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ki</Tooltip>}
                      >
                      <i
                        className="flag flag-ki"
                        data-bs-container=".flag-ki"
                        title="flag flag-ki"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-km</Tooltip>}
                      >
                      <i
                        className="flag flag-km"
                        data-bs-container=".flag-km"
                        title="flag flag-km"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kn</Tooltip>}
                      >
                      <i
                        className="flag flag-kn"
                        data-bs-container=".flag-kn"
                        title="flag flag-kn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kp</Tooltip>}
                      >
                      <i
                        className="flag flag-kp"
                        data-bs-container=".flag-kp"
                        title="flag flag-kp"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kr</Tooltip>}
                      >
                      <i
                        className="flag flag-kr"
                        data-bs-container=".flag-kr"
                        title="flag flag-kr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kw</Tooltip>}
                      >
                      <i
                        className="flag flag-kw"
                        data-bs-container=".flag-kw"
                        title="flag flag-kw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ky</Tooltip>}
                      >
                      <i
                        className="flag flag-ky"
                        data-bs-container=".flag-ky"
                        title="flag flag-ky"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-kz</Tooltip>}
                      >
                      <i
                        className="flag flag-kz"
                        data-bs-container=".flag-kz"
                        title="flag flag-kz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-la</Tooltip>}
                      >
                      <i
                        className="flag flag-la"
                        data-bs-container=".flag-la"
                        title="flag flag-la"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lb</Tooltip>}
                      >
                      <i
                        className="flag flag-lb"
                        data-bs-container=".flag-lb"
                        title="flag flag-lb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lc</Tooltip>}
                      >
                      <i
                        className="flag flag-lc"
                        data-bs-container=".flag-lc"
                        title="flag flag-lc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-li</Tooltip>}
                      >
                      <i
                        className="flag flag-li"
                        data-bs-container=".flag-li"
                        title="flag flag-li"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lk</Tooltip>}
                      >
                      <i
                        className="flag flag-lk"
                        data-bs-container=".flag-lk"
                        title="flag flag-lk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lr</Tooltip>}
                      >
                      <i
                        className="flag flag-lr"
                        data-bs-container=".flag-lr"
                        title="flag flag-lr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ls</Tooltip>}
                      >
                      <i
                        className="flag flag-ls"
                        data-bs-container=".flag-ls"
                        title="flag flag-ls"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lt</Tooltip>}
                      >
                      <i
                        className="flag flag-lt"
                        data-bs-container=".flag-lt"
                        title="flag flag-lt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lu</Tooltip>}
                      >
                      <i
                        className="flag flag-lu"
                        data-bs-container=".flag-lu"
                        title="flag flag-lu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-lv</Tooltip>}
                      >
                      <i
                        className="flag flag-lv"
                        data-bs-container=".flag-lv"
                        title="flag flag-lv"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ly</Tooltip>}
                      >
                      <i
                        className="flag flag-ly"
                        data-bs-container=".flag-ly"
                        title="flag flag-ly"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ma</Tooltip>}
                      >
                      <i
                        className="flag flag-ma"
                        data-bs-container=".flag-ma"
                        title="flag flag-ma"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mc</Tooltip>}
                      >
                      <i
                        className="flag flag-mc"
                        data-bs-container=".flag-mc"
                        title="flag flag-mc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-md</Tooltip>}
                      >
                      <i
                        className="flag flag-md"
                        data-bs-container=".flag-md"
                        title="flag flag-md"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-me</Tooltip>}
                      >
                      <i
                        className="flag flag-me"
                        data-bs-container=".flag-me"
                        title="flag flag-me"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mf</Tooltip>}
                      >
                      <i
                        className="flag flag-mf"
                        data-bs-container=".flag-mf"
                        title="flag flag-mf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mg</Tooltip>}
                      >
                      <i
                        className="flag flag-mg"
                        data-bs-container=".flag-mg"
                        title="flag flag-mg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mh</Tooltip>}
                      >
                      <i
                        className="flag flag-mh"
                        data-bs-container=".flag-mh"
                        title="flag flag-mh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mk</Tooltip>}
                      >
                      <i
                        className="flag flag-mk"
                        data-bs-container=".flag-mk"
                        title="flag flag-mk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ml</Tooltip>}
                      >
                      <i
                        className="flag flag-ml"
                        data-bs-container=".flag-ml"
                        title="flag flag-ml"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mm</Tooltip>}
                      >
                      <i
                        className="flag flag-mm"
                        data-bs-container=".flag-mm"
                        title="flag flag-mm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mn</Tooltip>}
                      >
                      <i
                        className="flag flag-mn"
                        data-bs-container=".flag-mn"
                        title="flag flag-mn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mo</Tooltip>}
                      >
                      <i
                        className="flag flag-mo"
                        data-bs-container=".flag-mo"
                        title="flag flag-mo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mp</Tooltip>}
                      >
                      <i
                        className="flag flag-mp"
                        data-bs-container=".flag-mp"
                        title="flag flag-mp"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mq</Tooltip>}
                      >
                      <i
                        className="flag flag-mq"
                        data-bs-container=".flag-mq"
                        title="flag flag-mq"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mr</Tooltip>}
                      >
                      <i
                        className="flag flag-mr"
                        data-bs-container=".flag-mr"
                        title="flag flag-mr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ms</Tooltip>}
                      >
                      <i
                        className="flag flag-ms"
                        data-bs-container=".flag-ms"
                        title="flag flag-ms"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mt</Tooltip>}
                      >
                      <i
                        className="flag flag-mt"
                        data-bs-container=".flag-mt"
                        title="flag flag-mt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mu</Tooltip>}
                      >
                      <i
                        className="flag flag-mu"
                        data-bs-container=".flag-mu"
                        title="flag flag-mu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mv</Tooltip>}
                      >
                      <i
                        className="flag flag-mv"
                        data-bs-container=".flag-mv"
                        title="flag flag-mv"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mw</Tooltip>}
                      >
                      <i
                        className="flag flag-mw"
                        data-bs-container=".flag-mw"
                        title="flag flag-mw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mx</Tooltip>}
                      >
                      <i
                        className="flag flag-mx"
                        data-bs-container=".flag-mx"
                        title="flag flag-mx"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-my</Tooltip>}
                      >
                      <i
                        className="flag flag-my"
                        data-bs-container=".flag-my"
                        title="flag flag-my"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-mz</Tooltip>}
                      >
                      <i
                        className="flag flag-mz"
                        data-bs-container=".flag-mz"
                        title="flag flag-mz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-na</Tooltip>}
                      >
                      <i
                        className="flag flag-na"
                        data-bs-container=".flag-na"
                        title="flag flag-na"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-nc</Tooltip>}
                      >
                      <i
                        className="flag flag-nc"
                        data-bs-container=".flag-nc"
                        title="flag flag-nc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ne</Tooltip>}
                      >
                      <i
                        className="flag flag-ne"
                        data-bs-container=".flag-ne"
                        title="flag flag-ne"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-nf</Tooltip>}
                      >
                      <i
                        className="flag flag-nf"
                        data-bs-container=".flag-nf"
                        title="flag flag-nf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ng</Tooltip>}
                      >
                      <i
                        className="flag flag-ng"
                        data-bs-container=".flag-ng"
                        title="flag flag-ng"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ni</Tooltip>}
                      >
                      <i
                        className="flag flag-ni"
                        data-bs-container=".flag-ni"
                        title="flag flag-ni"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-nl</Tooltip>}
                      >
                      <i
                        className="flag flag-nl"
                        data-bs-container=".flag-nl"
                        title="flag flag-nl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-no</Tooltip>}
                      >
                      <i
                        className="flag flag-no"
                        data-bs-container=".flag-no"
                        title="flag flag-no"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-np</Tooltip>}
                      >
                      <i
                        className="flag flag-np"
                        data-bs-container=".flag-np"
                        title="flag flag-np"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-nr</Tooltip>}
                      >
                      <i
                        className="flag flag-nr"
                        data-bs-container=".flag-nr"
                        title="flag flag-nr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-nu</Tooltip>}
                      >
                      <i
                        className="flag flag-nu"
                        data-bs-container=".flag-nu"
                        title="flag flag-nu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-nz</Tooltip>}
                      >
                      <i
                        className="flag flag-nz"
                        data-bs-container=".flag-nz"
                        title="flag flag-nz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-om</Tooltip>}
                      >
                      <i
                        className="flag flag-om"
                        data-bs-container=".flag-om"
                        title="flag flag-om"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pa</Tooltip>}
                      >
                      <i
                        className="flag flag-pa"
                        data-bs-container=".flag-pa"
                        title="flag flag-pa"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pe</Tooltip>}
                      >
                      <i
                        className="flag flag-pe"
                        data-bs-container=".flag-pe"
                        title="flag flag-pe"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pf</Tooltip>}
                      >
                      <i
                        className="flag flag-pf"
                        data-bs-container=".flag-pf"
                        title="flag flag-pf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pg</Tooltip>}
                      >
                      <i
                        className="flag flag-pg"
                        data-bs-container=".flag-pg"
                        title="flag flag-pg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ph</Tooltip>}
                      >
                      <i
                        className="flag flag-ph"
                        data-bs-container=".flag-ph"
                        title="flag flag-ph"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pk</Tooltip>}
                      >
                      <i
                        className="flag flag-pk"
                        data-bs-container=".flag-pk"
                        title="flag flag-pk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pl</Tooltip>}
                      >
                      <i
                        className="flag flag-pl"
                        data-bs-container=".flag-pl"
                        title="flag flag-pl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pm</Tooltip>}
                      >
                      <i
                        className="flag flag-pm"
                        data-bs-container=".flag-pm"
                        title="flag flag-pm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pn</Tooltip>}
                      >
                      <i
                        className="flag flag-pn"
                        data-bs-container=".flag-pn"
                        title="flag flag-pn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pr</Tooltip>}
                      >
                      <i
                        className="flag flag-pr"
                        data-bs-container=".flag-pr"
                        title="flag flag-pr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ps</Tooltip>}
                      >
                      <i
                        className="flag flag-ps"
                        data-bs-container=".flag-ps"
                        title="flag flag-ps"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pt</Tooltip>}
                      >
                      <i
                        className="flag flag-pt"
                        data-bs-container=".flag-pt"
                        title="flag flag-pt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-pw</Tooltip>}
                      >
                      <i
                        className="flag flag-pw"
                        data-bs-container=".flag-pw"
                        title="flag flag-pw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-py</Tooltip>}
                      >
                      <i
                        className="flag flag-py"
                        data-bs-container=".flag-py"
                        title="flag flag-py"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-qa</Tooltip>}
                      >
                      <i
                        className="flag flag-qa"
                        data-bs-container=".flag-qa"
                        title="flag flag-qa"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-re</Tooltip>}
                      >
                      <i
                        className="flag flag-re"
                        data-bs-container=".flag-re"
                        title="flag flag-re"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ro</Tooltip>}
                      >
                      <i
                        className="flag flag-ro"
                        data-bs-container=".flag-ro"
                        title="flag flag-ro"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-rs</Tooltip>}
                      >
                      <i
                        className="flag flag-rs"
                        data-bs-container=".flag-rs"
                        title="flag flag-rs"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ru</Tooltip>}
                      >
                      <i
                        className="flag flag-ru"
                        data-bs-container=".flag-ru"
                        title="flag flag-ru"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-rw</Tooltip>}
                      >
                      <i
                        className="flag flag-rw"
                        data-bs-container=".flag-rw"
                        title="flag flag-rw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sa</Tooltip>}
                      >
                      <i
                        className="flag flag-sa"
                        data-bs-container=".flag-sa"
                        title="flag flag-sa"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sb</Tooltip>}
                      >
                      <i
                        className="flag flag-sb"
                        data-bs-container=".flag-sb"
                        title="flag flag-sb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sc</Tooltip>}
                      >
                      <i
                        className="flag flag-sc"
                        data-bs-container=".flag-sc"
                        title="flag flag-sc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sd</Tooltip>}
                      >
                      <i
                        className="flag flag-sd"
                        data-bs-container=".flag-sd"
                        title="flag flag-sd"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-se</Tooltip>}
                      >
                      <i
                        className="flag flag-se"
                        data-bs-container=".flag-se"
                        title="flag flag-se"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sg</Tooltip>}
                      >
                      <i
                        className="flag flag-sg"
                        data-bs-container=".flag-sg"
                        title="flag flag-sg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sh</Tooltip>}
                      >
                      <i
                        className="flag flag-sh"
                        data-bs-container=".flag-sh"
                        title="flag flag-sh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-si</Tooltip>}
                      >
                      <i
                        className="flag flag-si"
                        data-bs-container=".flag-si"
                        title="flag flag-si"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sj</Tooltip>}
                      >
                      <i
                        className="flag flag-sj"
                        data-bs-container=".flag-sj"
                        title="flag flag-sj"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sk</Tooltip>}
                      >
                      <i
                        className="flag flag-sk"
                        data-bs-container=".flag-sk"
                        title="flag flag-sk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sl</Tooltip>}
                      >
                      <i
                        className="flag flag-sl"
                        data-bs-container=".flag-sl"
                        title="flag flag-sl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sm</Tooltip>}
                      >
                      <i
                        className="flag flag-sm"
                        data-bs-container=".flag-sm"
                        title="flag flag-sm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sn</Tooltip>}
                      >
                      <i
                        className="flag flag-sn"
                        data-bs-container=".flag-sn"
                        title="flag flag-sn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-so</Tooltip>}
                      >
                      <i
                        className="flag flag-so"
                        data-bs-container=".flag-so"
                        title="flag flag-so"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sr</Tooltip>}
                      >
                      <i
                        className="flag flag-sr"
                        data-bs-container=".flag-sr"
                        title="flag flag-sr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ss</Tooltip>}
                      >
                      <i
                        className="flag flag-ss"
                        data-bs-container=".flag-ss"
                        title="flag flag-ss"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-st</Tooltip>}
                      >
                      <i
                        className="flag flag-st"
                        data-bs-container=".flag-st"
                        title="flag flag-st"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sv</Tooltip>}
                      >
                      <i
                        className="flag flag-sv"
                        data-bs-container=".flag-sv"
                        title="flag flag-sv"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sx</Tooltip>}
                      >
                      <i
                        className="flag flag-sx"
                        data-bs-container=".flag-sx"
                        title="flag flag-sx"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sy</Tooltip>}
                      >
                      <i
                        className="flag flag-sy"
                        data-bs-container=".flag-sy"
                        title="flag flag-sy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-sz</Tooltip>}
                      >
                      <i
                        className="flag flag-sz"
                        data-bs-container=".flag-sz"
                        title="flag flag-sz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tc</Tooltip>}
                      >
                      <i
                        className="flag flag-tc"
                        data-bs-container=".flag-tc"
                        title="flag flag-tc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-td</Tooltip>}
                      >
                      <i
                        className="flag flag-td"
                        data-bs-container=".flag-td"
                        title="flag flag-td"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tf</Tooltip>}
                      >
                      <i
                        className="flag flag-tf"
                        data-bs-container=".flag-tf"
                        title="flag flag-tf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tg</Tooltip>}
                      >
                      <i
                        className="flag flag-tg"
                        data-bs-container=".flag-tg"
                        title="flag flag-tg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-th</Tooltip>}
                      >
                      <i
                        className="flag flag-th"
                        data-bs-container=".flag-th"
                        title="flag flag-th"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tj</Tooltip>}
                      >
                      <i
                        className="flag flag-tj"
                        data-bs-container=".flag-tj"
                        title="flag flag-tj"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tk</Tooltip>}
                      >
                      <i
                        className="flag flag-tk"
                        data-bs-container=".flag-tk"
                        title="flag flag-tk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tl</Tooltip>}
                      >
                      <i
                        className="flag flag-tl"
                        data-bs-container=".flag-tl"
                        title="flag flag-tl"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tm</Tooltip>}
                      >
                      <i
                        className="flag flag-tm"
                        data-bs-container=".flag-tm"
                        title="flag flag-tm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tn</Tooltip>}
                      >
                      <i
                        className="flag flag-tn"
                        data-bs-container=".flag-tn"
                        title="flag flag-tn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-to</Tooltip>}
                      >
                      <i
                        className="flag flag-to"
                        data-bs-container=".flag-to"
                        title="flag flag-to"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tr</Tooltip>}
                      >
                      <i
                        className="flag flag-tr"
                        data-bs-container=".flag-tr"
                        title="flag flag-tr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tt</Tooltip>}
                      >
                      <i
                        className="flag flag-tt"
                        data-bs-container=".flag-tt"
                        title="flag flag-tt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tv</Tooltip>}
                      >
                      <i
                        className="flag flag-tv"
                        data-bs-container=".flag-tv"
                        title="flag flag-tv"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tw</Tooltip>}
                      >
                      <i
                        className="flag flag-tw"
                        data-bs-container=".flag-tw"
                        title="flag flag-tw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-tz</Tooltip>}
                      >
                      <i
                        className="flag flag-tz"
                        data-bs-container=".flag-tz"
                        title="flag flag-tz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ua</Tooltip>}
                      >
                      <i
                        className="flag flag-ua"
                        data-bs-container=".flag-ua"
                        title="flag flag-ua"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ug</Tooltip>}
                      >
                      <i
                        className="flag flag-ug"
                        data-bs-container=".flag-ug"
                        title="flag flag-ug"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-um</Tooltip>}
                      >
                      <i
                        className="flag flag-um"
                        data-bs-container=".flag-um"
                        title="flag flag-um"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-un</Tooltip>}
                      >
                      <i
                        className="flag flag-un"
                        data-bs-container=".flag-un"
                        title="flag flag-un"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-us</Tooltip>}
                      >
                      <i
                        className="flag flag-us"
                        data-bs-container=".flag-us"
                        title="flag flag-us"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-uy</Tooltip>}
                      >
                      <i
                        className="flag flag-uy"
                        data-bs-container=".flag-uy"
                        title="flag flag-uy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-uz</Tooltip>}
                      >
                      <i
                        className="flag flag-uz"
                        data-bs-container=".flag-uz"
                        title="flag flag-uz"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-va</Tooltip>}
                      >
                      <i
                        className="flag flag-va"
                        data-bs-container=".flag-va"
                        title="flag flag-va"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-vc</Tooltip>}
                      >
                      <i
                        className="flag flag-vc"
                        data-bs-container=".flag-vc"
                        title="flag flag-vc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ve</Tooltip>}
                      >
                      <i
                        className="flag flag-ve"
                        data-bs-container=".flag-ve"
                        title="flag flag-ve"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-vg</Tooltip>}
                      >
                      <i
                        className="flag flag-vg"
                        data-bs-container=".flag-vg"
                        title="flag flag-vg"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-vi</Tooltip>}
                      >
                      <i
                        className="flag flag-vi"
                        data-bs-container=".flag-vi"
                        title="flag flag-vi"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-vn</Tooltip>}
                      >
                      <i
                        className="flag flag-vn"
                        data-bs-container=".flag-vn"
                        title="flag flag-vn"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-vu</Tooltip>}
                      >
                      <i
                        className="flag flag-vu"
                        data-bs-container=".flag-vu"
                        title="flag flag-vu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-wf</Tooltip>}
                      >
                      <i
                        className="flag flag-wf"
                        data-bs-container=".flag-wf"
                        title="flag flag-wf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ws</Tooltip>}
                      >
                      <i
                        className="flag flag-ws"
                        data-bs-container=".flag-ws"
                        title="flag flag-ws"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-ye</Tooltip>}
                      >
                      <i
                        className="flag flag-ye"
                        data-bs-container=".flag-ye"
                        title="flag flag-ye"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-yt</Tooltip>}
                      >
                      <i
                        className="flag flag-yt"
                        data-bs-container=".flag-yt"
                        title="flag flag-yt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-za</Tooltip>}
                      >
                      <i
                        className="flag flag-za"
                        data-bs-container=".flag-za"
                        title="flag flag-za"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-zm</Tooltip>}
                      >
                      <i
                        className="flag flag-zm"
                        data-bs-container=".flag-zm"
                        title="flag flag-zm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>flag flag-zw</Tooltip>}
                      >
                      <i
                        className="flag flag-zw"
                        data-bs-container=".flag-zw"
                        title="flag flag-zw"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <div className="card-header mt-3 ms-1 border-bottom-0">
            <h6 className="main-content-label">Payments Icons</h6>
          </div>
          <Card.Body>
            <Row className="row-sm">
              <Col sm={12} lg={12} className="mb-2">
                <p className="mb-2">
                  {" "}
                  For more info{" "}
                  <a href="#" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>
                    &lt;i className="payment payment-ICON_NAME"&gt;&lt;/i&gt;
                  </code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-2checkout</Tooltip>}
                      >
                      <i
                        className="payment payment-2checkout"
                        data-bs-container=".payment-2checkout"
                        title="payment payment-2checkout"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-alipay</Tooltip>}
                      >
                      <i
                        className="payment payment-alipay"
                        data-bs-container=".payment-alipay"
                        title="payment payment-alipay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-amazon</Tooltip>}
                      >
                      <i
                        className="payment payment-amazon"
                        data-bs-container=".payment-amazon"
                        title="payment payment-amazon"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-americanexpress</Tooltip>}
                      >
                      <i
                        className="payment payment-americanexpress"
                        data-bs-container=".payment-americanexpress"
                        title="payment payment-americanexpress"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-applepay</Tooltip>}
                      >
                      <i
                        className="payment payment-applepay"
                        data-bs-container=".payment-applepay"
                        title="payment payment-applepay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-bancontact</Tooltip>}
                      >
                      <i
                        className="payment payment-bancontact"
                        data-bs-container=".payment-bancontact"
                        title="payment payment-bancontact"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-bitcoin</Tooltip>}
                      >
                      <i
                        className="payment payment-bitcoin"
                        data-bs-container=".payment-bitcoin"
                        title="payment payment-bitcoin"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-bitpay</Tooltip>}
                      >
                      <i
                        className="payment payment-bitpay"
                        data-bs-container=".payment-bitpay"
                        title="payment payment-bitpay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-cirrus</Tooltip>}
                      >
                      <i
                        className="payment payment-cirrus"
                        data-bs-container=".payment-cirrus"
                        title="payment payment-cirrus"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-clickandbuy</Tooltip>}
                      >
                      <i
                        className="payment payment-clickandbuy"
                        data-bs-container=".payment-clickandbuy"
                        title="payment payment-clickandbuy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-coinkite</Tooltip>}
                      >
                      <i
                        className="payment payment-coinkite"
                        data-bs-container=".payment-coinkite"
                        title="payment payment-coinkite"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-dinersclub</Tooltip>}
                      >
                      <i
                        className="payment payment-dinersclub"
                        data-bs-container=".payment-dinersclub"
                        title="payment payment-dinersclub"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-directdebit</Tooltip>}
                      >
                      <i
                        className="payment payment-directdebit"
                        data-bs-container=".payment-directdebit"
                        title="payment payment-directdebit"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-discover</Tooltip>}
                      >
                      <i
                        className="payment payment-discover"
                        data-bs-container=".payment-discover"
                        title="payment payment-discover"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-dwolla</Tooltip>}
                      >
                      <i
                        className="payment payment-dwolla"
                        data-bs-container=".payment-dwolla"
                        title="payment payment-dwolla"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ebay</Tooltip>}
                      >
                      <i
                        className="payment payment-ebay"
                        data-bs-container=".payment-ebay"
                        title="payment payment-ebay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-eway</Tooltip>}
                      >
                      <i
                        className="payment payment-eway"
                        data-bs-container=".payment-eway"
                        title="payment payment-eway"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-giropay</Tooltip>}
                      >
                      <i
                        className="payment payment-giropay"
                        data-bs-container=".payment-giropay"
                        title="payment payment-giropay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-googlewallet</Tooltip>}
                      >
                      <i
                        className="payment payment-googlewallet"
                        data-bs-container=".payment-googlewallet"
                        title="payment payment-googlewallet"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ingenico</Tooltip>}
                      >
                      <i
                        className="payment payment-ingenico"
                        data-bs-container=".payment-ingenico"
                        title="payment payment-ingenico"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-jcb</Tooltip>}
                      >
                      <i
                        className="payment payment-jcb"
                        data-bs-container=".payment-jcb"
                        title="payment payment-jcb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-klarna</Tooltip>}
                      >
                      <i
                        className="payment payment-klarna"
                        data-bs-container=".payment-klarna"
                        title="payment payment-klarna"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-laser</Tooltip>}
                      >
                      <i
                        className="payment payment-laser"
                        data-bs-container=".payment-laser"
                        title="payment payment-laser"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-maestro</Tooltip>}
                      >
                      <i
                        className="payment payment-maestro"
                        data-bs-container=".payment-maestro"
                        title="payment payment-maestro"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-mastercard</Tooltip>}
                      >
                      <i
                        className="payment payment-mastercard"
                        data-bs-container=".payment-mastercard"
                        title="payment payment-mastercard"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-monero</Tooltip>}
                      >
                      <i
                        className="payment payment-monero"
                        data-bs-container=".payment-monero"
                        title="payment payment-monero"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-neteller</Tooltip>}
                      >
                      <i
                        className="payment payment-neteller"
                        data-bs-container=".payment-neteller"
                        title="payment payment-neteller"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ogone</Tooltip>}
                      >
                      <i
                        className="payment payment-ogone"
                        data-bs-container=".payment-ogone"
                        title="payment payment-ogone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-okpay</Tooltip>}
                      >
                      <i
                        className="payment payment-okpay"
                        data-bs-container=".payment-okpay"
                        title="payment payment-okpay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paybox</Tooltip>}
                      >
                      <i
                        className="payment payment-paybox"
                        data-bs-container=".payment-paybox"
                        title="payment payment-paybox"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paymill</Tooltip>}
                      >
                      <i
                        className="payment payment-paymill"
                        data-bs-container=".payment-paymill"
                        title="payment payment-paymill"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payone</Tooltip>}
                      >
                      <i
                        className="payment payment-payone"
                        data-bs-container=".payment-payone"
                        title="payment payment-payone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payoneer</Tooltip>}
                      >
                      <i
                        className="payment payment-payoneer"
                        data-bs-container=".payment-payoneer"
                        title="payment payment-payoneer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paypal</Tooltip>}
                      >
                      <i
                        className="payment payment-paypal"
                        data-bs-container=".payment-paypal"
                        title="payment payment-paypal"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paysafecard</Tooltip>}
                      >
                      <i
                        className="payment payment-paysafecard"
                        data-bs-container=".payment-paysafecard"
                        title="payment payment-paysafecard"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payu</Tooltip>}
                      >
                      <i
                        className="payment payment-payu"
                        data-bs-container=".payment-payu"
                        title="payment payment-payu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payza</Tooltip>}
                      >
                      <i
                        className="payment payment-payza"
                        data-bs-container=".payment-payza"
                        title="payment payment-payza"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ripple</Tooltip>}
                      >
                      <i
                        className="payment payment-ripple"
                        data-bs-container=".payment-ripple"
                        title="payment payment-ripple"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-sage</Tooltip>}
                      >
                      <i
                        className="payment payment-sage"
                        data-bs-container=".payment-sage"
                        title="payment payment-sage"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-sepa</Tooltip>}
                      >
                      <i
                        className="payment payment-sepa"
                        data-bs-container=".payment-sepa"
                        title="payment payment-sepa"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-shopify</Tooltip>}
                      >
                      <i
                        className="payment payment-shopify"
                        data-bs-container=".payment-shopify"
                        title="payment payment-shopify"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-skrill</Tooltip>}
                      >
                      <i
                        className="payment payment-skrill"
                        data-bs-container=".payment-skrill"
                        title="payment payment-skrill"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-solo</Tooltip>}
                      >
                      <i
                        className="payment payment-solo"
                        data-bs-container=".payment-solo"
                        title="payment payment-solo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-square</Tooltip>}
                      >
                      <i
                        className="payment payment-square"
                        data-bs-container=".payment-square"
                        title="payment payment-square"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-stripe</Tooltip>}
                      >
                      <i
                        className="payment payment-stripe"
                        data-bs-container=".payment-stripe"
                        title="payment payment-stripe"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-switch</Tooltip>}
                      >
                      <i
                        className="payment payment-switch"
                        data-bs-container=".payment-switch"
                        title="payment payment-switch"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ukash</Tooltip>}
                      >
                      <i
                        className="payment payment-ukash"
                        data-bs-container=".payment-ukash"
                        title="payment payment-ukash"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-unionpay</Tooltip>}
                      >
                      <i
                        className="payment payment-unionpay"
                        data-bs-container=".payment-unionpay"
                        title="payment payment-unionpay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-verifone</Tooltip>}
                      >
                      <i
                        className="payment payment-verifone"
                        data-bs-container=".payment-verifone"
                        title="payment payment-verifone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-verisign</Tooltip>}
                      >
                      <i
                        className="payment payment-verisign"
                        data-bs-container=".payment-verisign"
                        title="payment payment-verisign"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-visa</Tooltip>}
                      >
                      <i
                        className="payment payment-visa"
                        data-bs-container=".payment-visa"
                        title="payment payment-visa"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-webmoney</Tooltip>}
                      >
                      <i
                        className="payment payment-webmoney"
                        data-bs-container=".payment-webmoney"
                        title="payment payment-webmoney"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-westernunion</Tooltip>}
                      >
                      <i
                        className="payment payment-westernunion"
                        data-bs-container=".payment-westernunion"
                        title="payment payment-westernunion"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-worldpay</Tooltip>}
                      >
                      <i
                        className="payment payment-worldpay"
                        data-bs-container=".flag-al"
                        title="payment payment-worldpay"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-2checkout-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-2checkout-dark"
                        data-bs-container=".payment-worldpay"
                        title="payment payment-2checkout-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-alipay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-alipay-dark"
                        data-bs-container=".payment-alipay-dark"
                        title="payment payment-alipay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-amazon-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-amazon-dark"
                        data-bs-container=".payment-amazon-dark"
                        title="payment payment-amazon-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-americanexpress-</Tooltip>}
                      >
                      <i
                        className="payment payment-americanexpress-dark"
                        data-bs-container=".payment-americanexpress-dark"
                        title="payment payment-americanexpress-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-applepay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-applepay-dark"
                        data-bs-container=".payment-applepay-dark"
                        title="payment payment-applepay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-bancontact-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-bancontact-dark"
                        data-bs-container=".payment-bancontact-dark"
                        title="payment payment-bancontact-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-bitcoin-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-bitcoin-dark"
                        data-bs-container=".payment-bitcoin-dark"
                        title="payment payment-bitcoin-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-bitpay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-bitpay-dark"
                        data-bs-container=".payment-bitpay-dark"
                        title="payment payment-bitpay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-cirrus-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-cirrus-dark"
                        data-bs-container=".payment-cirrus-dark"
                        title="payment payment-cirrus-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-clickandbuy-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-clickandbuy-dark"
                        data-bs-container=".payment-clickandbuy-dark"
                        title="payment payment-clickandbuy-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-coinkite-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-coinkite-dark"
                        data-bs-container=".payment-coinkite-dark"
                        title="payment payment-coinkite-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-dinersclub-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-dinersclub-dark"
                        data-bs-container=".payment-dinersclub-dark"
                        title="payment payment-dinersclub-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-directdebit-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-directdebit-dark"
                        data-bs-container=".payment-directdebit-dark"
                        title="payment payment-directdebit-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-discover-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-discover-dark"
                        data-bs-container=".payment-discover-dark"
                        title="payment payment-discover-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-dwolla-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-dwolla-dark"
                        data-bs-container=".payment-dwolla-dark"
                        title="payment payment-dwolla-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ebay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-ebay-dark"
                        data-bs-container=".payment-ebay-dark"
                        title="payment payment-ebay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-eway-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-eway-dark"
                        data-bs-container=".payment-eway-dark"
                        title="payment payment-eway-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-giropay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-giropay-dark"
                        data-bs-container=".payment-giropay-dark"
                        title="payment payment-giropay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-googlewallet-dar</Tooltip>}
                      >
                      <i
                        className="payment payment-googlewallet-dark"
                        data-bs-container=".payment-googlewallet-dark"
                        title="payment payment-googlewallet-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ingenico-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-ingenico-dark"
                        data-bs-container=".payment-ingenico-dark"
                        title="payment payment-ingenico-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-jcb-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-jcb-dark"
                        data-bs-container=".payment-jcb-dark"
                        title="payment payment-jcb-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-klarna-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-klarna-dark"
                        data-bs-container=".payment-klarna-dark"
                        title="payment payment-klarna-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-laser-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-laser-dark"
                        data-bs-container=".payment-laser-dark"
                        title="payment payment-laser-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-maestro-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-maestro-dark"
                        data-bs-container=".payment-maestro-dark"
                        title="payment payment-maestro-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-mastercard-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-mastercard-dark"
                        data-bs-container=".payment-mastercard-dark"
                        title="payment payment-mastercard-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-monero-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-monero-dark"
                        data-bs-container=".payment-monero-dark"
                        title="payment payment-monero-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-neteller-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-neteller-dark"
                        data-bs-container=".payment-neteller-dark"
                        title="payment payment-neteller-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ogone-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-ogone-dark"
                        data-bs-container=".payment-ogone-dark"
                        title="payment payment-ogone-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-okpay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-okpay-dark"
                        data-bs-container=".payment-okpay-dark"
                        title="payment payment-okpay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paybox-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-paybox-dark"
                        data-bs-container=".payment-paybox-dark"
                        title="payment payment-paybox-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paymill-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-paymill-dark"
                        data-bs-container=".payment-paymill-dark"
                        title="payment payment-paymill-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payone-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-payone-dark"
                        data-bs-container=".payment-payone-dark"
                        title="payment payment-payone-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payoneer-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-payoneer-dark"
                        data-bs-container=".payment-payoneer-dark"
                        title="payment payment-payoneer-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paypal-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-paypal-dark"
                        data-bs-container=".payment-paypal-dark"
                        title="payment payment-paypal-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-paysafecard-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-paysafecard-dark"
                        data-bs-container=".payment-paysafecard-dark"
                        title="payment payment-paysafecard-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payu-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-payu-dark"
                        data-bs-container=".payment-payu-dark"
                        title="payment payment-payu-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-payza-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-payza-dark"
                        data-bs-container=".payment-payza-dark"
                        title="payment payment-payza-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ripple-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-ripple-dark"
                        data-bs-container=".payment-ripple-dark"
                        title="payment payment-ripple-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-sage-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-sage-dark"
                        data-bs-container=".payment-sage-dark"
                        title="payment payment-sage-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-sepa-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-sepa-dark"
                        data-bs-container=".payment-sepa-dark"
                        title="payment payment-sepa-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-shopify-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-shopify-dark"
                        data-bs-container=".payment-shopify-dark"
                        title="payment payment-shopify-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-skrill-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-skrill-dark"
                        data-bs-container=".payment-skrill-dark"
                        title="payment payment-skrill-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-solo-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-solo-dark"
                        data-bs-container=".payment-solo-dark"
                        title="payment payment-solo-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-square-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-square-dark"
                        data-bs-container=".payment-square-dark"
                        title="payment payment-square-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-stripe-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-stripe-dark"
                        data-bs-container=".payment-stripe-dark"
                        title="payment payment-stripe-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-switch-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-switch-dark"
                        data-bs-container=".payment-switch-dark"
                        title="payment payment-switch-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-ukash-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-ukash-dark"
                        data-bs-container=".payment-ukash-dark"
                        title="payment payment-ukash-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-unionpay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-unionpay-dark"
                        data-bs-container=".payment-unionpay-dark"
                        title="payment payment-unionpay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-verifone-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-verifone-dark"
                        data-bs-container=".payment-verifone-dark"
                        title="payment payment-verifone-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-verisign-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-verisign-dark"
                        data-bs-container=".payment-verisign-dark"
                        title="payment payment-verisign-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-visa-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-visa-dark"
                        data-bs-container=".payment-visa-dark"
                        title="payment payment-visa-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-webmoney-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-webmoney-dark"
                        data-bs-container=".payment-webmoney-dark"
                        title="payment payment-webmoney-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-westernunion-dar</Tooltip>}
                      >
                      <i
                        className="payment payment-westernunion-dark"
                        data-bs-container=".payment-westernunion-dark"
                        title="payment payment-westernunion-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>payment payment-worldpay-dark</Tooltip>}
                      >
                      <i
                        className="payment payment-worldpay-dark"
                        data-bs-container=".payment-worldpay-dark"
                        title="payment payment-worldpay-dark"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

FlagIcons.propTypes = {};

FlagIcons.defaultProps = {};

export default FlagIcons;
