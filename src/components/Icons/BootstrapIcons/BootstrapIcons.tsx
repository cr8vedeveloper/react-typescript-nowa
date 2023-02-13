import React from 'react';
import {
  Col,
  Row,
  Card,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const BootstrapIcons = () => (
  <div>
    {/* <!-- container --> */}
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          BOOTSTRAP ICONS
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Icons
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Bootstrap Icons
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- Row--> */}
    <Row className="row-sm">
      <Card className="custom-card">
        <Card.Body>
          <Col lg={12} sm={12} className=" mb-2">
            <h6 className="main-content-label  mb-2 ">Bootstrap icons</h6>
            <p className="mb-2">
              Powered by Font Awesome set. For more info{" "}
              <a
                href="https://icons.getbootstrap.com/"
                target="blank"
                className="text-primary"
              >
                click here
              </a>
              .
            </p>
            <p>
              <code>&lt;i className="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code>
            </p>
          </Col>
          <div className="main-icon-group main-icon-list font-awesome">
            <ul className="icons-list">
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-alarm</Tooltip>}
                >
                  <i className="bi bi-alarm"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-alt</Tooltip>}
                >
                  <i className="bi bi-alt"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-app</Tooltip>}
                >
                  <i className="bi bi-app"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-app-indicator</Tooltip>}
                >
                  <i className="bi bi-app-indicator"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-archive</Tooltip>}
                >
                  <i className="bi bi-archive"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-90deg-down</Tooltip>}
                >
                  <i className="bi bi-arrow-90deg-down"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-90deg-left</Tooltip>}
                >
                  <i className="bi bi-arrow-90deg-left"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-90deg-right</Tooltip>}
                >
                  <i className="bi bi-arrow-90deg-right"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-90deg-up</Tooltip>}
                >
                  <i className="bi bi-arrow-90deg-up"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-bar-down</Tooltip>}
                >
                  <i className="bi bi-arrow-bar-down"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-bar-left</Tooltip>}
                >
                  <i className="bi bi-arrow-bar-left"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-bar-right</Tooltip>}
                >
                  <i className="bi bi-arrow-bar-right"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-bar-up</Tooltip>}
                >
                  <i className="bi bi-arrow-bar-up"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-clockwise</Tooltip>}
                >
                  <i className="bi bi-arrow-clockwise"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-arrow-counterclockwise</Tooltip>}
                >
                  <i className="bi bi-arrow-counterclockwise"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-bank</Tooltip>}
                >
                  <i className="bi bi-bank"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-bar-chart</Tooltip>}
                >
                  <i className="bi bi-bar-chart"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-basket</Tooltip>}
                >
                  <i className="bi bi-basket"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-battery</Tooltip>}
                >
                  <i className="bi bi-battery"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-battery-full</Tooltip>}
                >
                  <i className="bi bi-battery-full"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-blockquote-right</Tooltip>}
                >
                  <i className="bi bi-blockquote-right"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-bell</Tooltip>}
                >
                  <i className="bi bi-bell"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-bicycle</Tooltip>}
                >
                  <i className="bi bi-bicycle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-book</Tooltip>}
                >
                  <i className="bi bi-book"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-briefcase</Tooltip>}
                >
                  <i className="bi bi-briefcase"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-brightness-high</Tooltip>}
                >
                  <i className="bi bi-brightness-high"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-broadcast</Tooltip>}
                >
                  <i className="bi bi-broadcast"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-brush</Tooltip>}
                >
                  <i className="bi bi-brush"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-bucket</Tooltip>}
                >
                  <i className="bi bi-bucket"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-bullseye</Tooltip>}
                >
                  <i className="bi bi-bullseye"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-calculator</Tooltip>}
                >
                  <i className="bi bi-calculator"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-calendar</Tooltip>}
                >
                  <i className="bi bi-calendar"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-calendar2-week</Tooltip>}
                >
                  <i className="bi bi-calendar2-week"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-camera</Tooltip>}
                >
                  <i className="bi bi-camera"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-camera-video</Tooltip>}
                >
                  <i className="bi bi-camera-video"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-card-image</Tooltip>}
                >
                  <i className="bi bi-card-image"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-card-list</Tooltip>}
                >
                  <i className="bi bi-card-list"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cart</Tooltip>}
                >
                  <i className="bi bi-cart"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cart4</Tooltip>}
                >
                  <i className="bi bi-cart4"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cash</Tooltip>}
                >
                  <i className="bi bi-cash"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-chat-dots</Tooltip>}
                >
                  <i className="bi bi-chat-dots"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-chat-left-dots</Tooltip>}
                >
                  <i className="bi bi-chat-left-dots"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-chat-square-dots</Tooltip>}
                >
                  <i className="bi bi-chat-square-dots"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-chat-square</Tooltip>}
                >
                  <i className="bi bi-chat-square"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-circle</Tooltip>}
                >
                  <i className="bi bi-circle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-clipboard</Tooltip>}
                >
                  <i className="bi bi-clipboard"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-clipboard-data</Tooltip>}
                >
                  <i className="bi bi-clipboard-data"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-clock</Tooltip>}
                >
                  <i className="bi bi-clock"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cloud-arrow-down</Tooltip>}
                >
                  <i className="bi bi-cloud-arrow-down"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cloud-drizzle</Tooltip>}
                >
                  <i className="bi bi-cloud-drizzle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cloud-sun</Tooltip>}
                >
                  <i className="bi bi-cloud-sun"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-columns</Tooltip>}
                >
                  <i className="bi bi-columns"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-columns-gap</Tooltip>}
                >
                  <i className="bi bi-columns-gap"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-collection-play</Tooltip>}
                >
                  <i className="bi bi-collection-play"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-credit-card</Tooltip>}
                >
                  <i className="bi bi-credit-card"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cup</Tooltip>}
                >
                  <i className="bi bi-cup"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-cursor</Tooltip>}
                >
                  <i className="bi bi-cursor"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-eraser</Tooltip>}
                >
                  <i className="bi bi-eraser"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-exclamation-diamond</Tooltip>}
                >
                  <i className="bi bi-exclamation-diamond"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-exclamation-circle</Tooltip>}
                >
                  <i className="bi bi-exclamation-circle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-exclamation-triangle</Tooltip>}
                >
                  <i className="bi bi-exclamation-triangle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-eye</Tooltip>}
                >
                  <i className="bi bi-eye"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-exclamation-octagon</Tooltip>}
                >
                  <i className="bi bi-exclamation-octagon"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-eyedropper</Tooltip>}
                >
                  <i className="bi bi-eyedropper"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-file-earmark-plus</Tooltip>}
                >
                  <i className="bi bi-file-earmark-plus"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-file-earmark-zip</Tooltip>}
                >
                  <i className="bi bi-file-earmark-zip"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-files</Tooltip>}
                >
                  <i className="bi bi-files"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-folder-minus</Tooltip>}
                >
                  <i className="bi bi-folder-minus"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-folder-plus</Tooltip>}
                >
                  <i className="bi bi-folder-plus"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-fullscreen</Tooltip>}
                >
                  <i className="bi bi-fullscreen"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-grid</Tooltip>}
                >
                  <i className="bi bi-grid"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-hand-thumbs-down</Tooltip>}
                >
                  <i className="bi bi-hand-thumbs-down"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-hand-thumbs-up</Tooltip>}
                >
                  <i className="bi bi-hand-thumbs-up"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-hdd</Tooltip>}
                >
                  <i className="bi bi-hdd"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-hdd-stack</Tooltip>}
                >
                  <i className="bi bi-hdd-stack"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-headphones</Tooltip>}
                >
                  <i className="bi bi-headphones"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-heart</Tooltip>}
                >
                  <i className="bi bi-heart"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-heptagon</Tooltip>}
                >
                  <i className="bi bi-heptagon"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-hexagon</Tooltip>}
                >
                  <i className="bi bi-hexagon"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-hourglass</Tooltip>}
                >
                  <i className="bi bi-hourglass"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-house</Tooltip>}
                >
                  <i className="bi bi-house"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-info-circle</Tooltip>}
                >
                  <i className="bi bi-info-circle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-lightbulb</Tooltip>}
                >
                  <i className="bi bi-lightbulb"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-link</Tooltip>}
                >
                  <i className="bi bi-link"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-palette</Tooltip>}
                >
                  <i className="bi bi-palette"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-person-plus</Tooltip>}
                >
                  <i className="bi bi-person-plus"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-pin-map</Tooltip>}
                >
                  <i className="bi bi-pin-map"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-globe</Tooltip>}
                >
                  <i className="bi bi-globe"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-pause-circle</Tooltip>}
                >
                  <i className="bi bi-pause-circle"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-search</Tooltip>}
                >
                  <i className="bi bi-search"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-telephone</Tooltip>}
                >
                  <i className="bi bi-telephone"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-unlock</Tooltip>}
                >
                  <i className="bi bi-unlock"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-wifi</Tooltip>}
                >
                  <i className="bi bi-wifi"></i>
                </OverlayTrigger>
              </li>
              <li className="icons-list-item">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>bi bi-wifi-off</Tooltip>}
                >
                  <i className="bi bi-wifi-off"></i>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Row>
    {/* <!-- End Row--> */}
  </div>

);

BootstrapIcons.propTypes = {};

BootstrapIcons.defaultProps = {};

export default BootstrapIcons;
