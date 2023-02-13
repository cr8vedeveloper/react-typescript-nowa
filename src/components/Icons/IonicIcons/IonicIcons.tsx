import React from 'react';
import {
  Col,
  Row,
  Card,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


const IonicIcons = () => (
  <div>

      {/* <!-- container --> */}
      <div className="main-container container-fluid">
        {/* <!-- breadcrumb --> */}
        <div className="breadcrumb-header justify-content-between">
          <div className="left-content">
            <span className="main-content-title mg-b-0 mg-b-lg-1">ICONIC</span>
          </div>
          <div className="justify-content-center mt-2">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
                Icons
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className="breadcrumb-item"
                active
                aria-current="page"
              >
                Iconic icons
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        {/* <!-- /breadcrumb --> */}

        {/* <!-- Row--> */}
        <Row className="row-sm">
          <Col md={12}>
            <Card className="custom-card">
              <Card.Body>
                <Col lg={12} sm={12}>
                  <h6 className="main-content-label">Ionic Icons</h6>
                  <p className="mb-2">
                    Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://ionicons.com"
                      target="blank"
                      className="text-primary"
                    >
                      click here
                    </a>
                    .
                  </p>
                  <p>
                    <code>&lt;i className="ion ICON_NAME"&gt;&lt;/i&gt;</code>
                  </p>
                </Col>
                <div className="main-icon-group main-icon-list">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-alarm</Tooltip>}
                      >
                      <i className="icon ion-md-alarm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-chatboxes</Tooltip>}
                      >
                      <i className="icon ion-md-chatboxes"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-copy</Tooltip>}
                      >
                      <i className="icon ion-md-copy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-cube</Tooltip>}
                      >
                      <i className="icon ion-md-cube"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-filing</Tooltip>}
                      >
                      <i className="icon ion-md-filing"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-eye</Tooltip>}
                      >
                      <i className="icon ion-md-eye"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-globe</Tooltip>}
                      >
                      <i className="icon ion-md-globe"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-images</Tooltip>}
                      >
                      <i className="icon ion-md-images"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-laptop</Tooltip>}
                      >
                      <i className="icon ion-md-laptop"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-paper</Tooltip>}
                      >
                      <i className="icon ion-md-paper"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-paper-plane</Tooltip>}
                      >
                      <i className="icon ion-md-paper-plane"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-pricetags</Tooltip>}
                      >
                      <i className="icon ion-md-pricetags"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-settings</Tooltip>}
                      >
                      <i className="icon ion-ios-settings"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-stats</Tooltip>}
                      >
                      <i className="icon ion-ios-stats"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-share-alt</Tooltip>}
                      >
                      <i className="icon ion-ios-share-alt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-rocket</Tooltip>}
                      >
                      <i className="icon ion-ios-rocket"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-rainy</Tooltip>}
                      >
                      <i className="icon ion-ios-rainy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-print</Tooltip>}
                      >
                      <i className="icon ion-ios-print"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-pie</Tooltip>}
                      >
                      <i className="icon ion-ios-pie"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-mic</Tooltip>}
                      >
                      <i className="icon ion-ios-mic"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-locate</Tooltip>}
                      >
                      <i className="icon ion-ios-locate"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-list-box</Tooltip>}
                      >
                      <i className="icon ion-ios-list-box"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-add</Tooltip>}
                      >
                      <i className="icon ion-ios-add"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-add-circle</Tooltip>}
                      >
                      <i className="icon ion-md-add-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-airplane</Tooltip>}
                      >
                      <i className="icon ion-md-airplane"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-alert</Tooltip>}
                      >
                      <i className="icon ion-md-alert"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-albums</Tooltip>}
                      >
                      <i className="icon ion-md-albums"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-analytics</Tooltip>}
                      >
                      <i className="icon ion-md-analytics"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-aperture</Tooltip>}
                      >
                      <i className="icon ion-md-aperture"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-appstore</Tooltip>}
                      >
                      <i className="icon ion-md-appstore"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-archive</Tooltip>}
                      >
                      <i className="icon ion-md-archive"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-arrow-back</Tooltip>}
                      >
                      <i className="icon ion-md-arrow-back"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-arrow-down</Tooltip>}
                      >
                      <i className="icon ion-md-arrow-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>"icon ion-md-arrow-dropdown-</Tooltip>}
                      >
                      <i className="icon ion-md-arrow-dropdown-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-arrow-dropleft</Tooltip>}
                      >
                      <i className="icon ion-md-arrow-dropleft"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>"icon ion-md-arrow-dropleft-</Tooltip>}
                      >
                      <i className="icon ion-md-arrow-dropleft-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-arrow-dropdown</Tooltip>}
                      >
                      <i className="icon ion-md-arrow-dropdown"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-at</Tooltip>}
                      >
                      <i className="icon ion-md-at"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-backspace</Tooltip>}
                      >
                      <i className="icon ion-md-backspace"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-barcode</Tooltip>}
                      >
                      <i className="icon ion-md-barcode"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-basket</Tooltip>}
                      >
                      <i className="icon ion-md-basket"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-basketball</Tooltip>}
                      >
                      <i className="icon ion-md-basketball"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-battery-chargin</Tooltip>}
                      >
                      <i className="icon ion-md-battery-charging"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-battery-dead</Tooltip>}
                      >
                      <i className="icon ion-md-battery-dead"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-battery-full</Tooltip>}
                      >
                      <i className="icon ion-md-battery-full"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-sad</Tooltip>}
                      >
                      <i className="icon ion-md-sad"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-save</Tooltip>}
                      >
                      <i className="icon ion-md-save"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-school</Tooltip>}
                      >
                      <i className="icon ion-md-school"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-search</Tooltip>}
                      >
                      <i className="icon ion-md-search"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-send</Tooltip>}
                      >
                      <i className="icon ion-md-send"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-settings</Tooltip>}
                      >
                      <i className="icon ion-md-settings"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-share</Tooltip>}
                      >
                      <i className="icon ion-md-share"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-share-alt</Tooltip>}
                      >
                      <i className="icon ion-md-share-alt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-shirt</Tooltip>}
                      >
                      <i className="icon ion-md-shirt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-shuffle</Tooltip>}
                      >
                      <i className="icon ion-md-shuffle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-skip-backward</Tooltip>}
                      >
                      <i className="icon ion-md-skip-backward"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-skip-forward</Tooltip>}
                      >
                      <i className="icon ion-md-skip-forward"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-snow</Tooltip>}
                      >
                      <i className="icon ion-md-snow"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-speedometer</Tooltip>}
                      >
                      <i className="icon ion-md-speedometer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-square</Tooltip>}
                      >
                      <i className="icon ion-md-square"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-star</Tooltip>}
                      >
                      <i className="icon ion-md-star"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-star-half</Tooltip>}
                      >
                      <i className="icon ion-md-star-half"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-star-outline</Tooltip>}
                      >
                      <i className="icon ion-md-star-outline"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-stats</Tooltip>}
                      >
                      <i className="icon ion-md-stats"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-stopwatch</Tooltip>}
                      >
                      <i className="icon ion-md-stopwatch"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-subway</Tooltip>}
                      >
                      <i className="icon ion-md-subway"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-sunny</Tooltip>}
                      >
                      <i className="icon ion-md-sunny"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-switch</Tooltip>}
                      >
                      <i className="icon ion-md-switch"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-sync</Tooltip>}
                      >
                      <i className="icon ion-md-sync"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-tablet-landscap</Tooltip>}
                      >
                      <i className="icon ion-md-tablet-landscape"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-tablet-portrait</Tooltip>}
                      >
                      <i className="icon ion-md-tablet-portrait"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-tennisball</Tooltip>}
                      >
                      <i className="icon ion-md-tennisball"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-text</Tooltip>}
                      >
                      <i className="icon ion-md-text"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-thermometer</Tooltip>}
                      >
                      <i className="icon ion-md-thermometer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-thumbs-down</Tooltip>}
                      >
                      <i className="icon ion-md-thumbs-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-thumbs-up</Tooltip>}
                      >
                      <i className="icon ion-md-thumbs-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-thunderstorm</Tooltip>}
                      >
                      <i className="icon ion-md-thunderstorm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-time</Tooltip>}
                      >
                      <i className="icon ion-md-time"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-timer</Tooltip>}
                      >
                      <i className="icon ion-md-timer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-today</Tooltip>}
                      >
                      <i className="icon ion-md-today"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-train</Tooltip>}
                      >
                      <i className="icon ion-md-train"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-transgender</Tooltip>}
                      >
                      <i className="icon ion-md-transgender"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-trash</Tooltip>}
                      >
                      <i className="icon ion-md-trash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-trending-down</Tooltip>}
                      >
                      <i className="icon ion-md-trending-down"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-trending-up</Tooltip>}
                      >
                      <i className="icon ion-md-trending-up"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-trophy</Tooltip>}
                      >
                      <i className="icon ion-md-trophy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-tv</Tooltip>}
                      >
                      <i className="icon ion-md-tv"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-umbrella</Tooltip>}
                      >
                      <i className="icon ion-md-umbrella"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-undo</Tooltip>}
                      >
                      <i className="icon ion-md-undo"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-unlock</Tooltip>}
                      >
                      <i className="icon ion-md-unlock"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-videocam</Tooltip>}
                      >
                      <i className="icon ion-md-videocam"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-volume-high</Tooltip>}
                      >
                      <i className="icon ion-md-volume-high"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-volume-low</Tooltip>}
                      >
                      <i className="icon ion-md-volume-low"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-volume-mute</Tooltip>}
                      >
                      <i className="icon ion-md-volume-mute"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-volume-off</Tooltip>}
                      >
                      <i className="icon ion-md-volume-off"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-walk</Tooltip>}
                      >
                      <i className="icon ion-md-walk"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-wallet</Tooltip>}
                      >
                      <i className="icon ion-md-wallet"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-warning</Tooltip>}
                      >
                      <i className="icon ion-md-warning"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-watch</Tooltip>}
                      >
                      <i className="icon ion-md-watch"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-water</Tooltip>}
                      >
                      <i className="icon ion-md-water"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-wifi</Tooltip>}
                      >
                      <i className="icon ion-md-wifi"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-wine</Tooltip>}
                      >
                      <i className="icon ion-md-wine"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-woman</Tooltip>}
                      >
                      <i className="icon ion-md-woman"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-attach</Tooltip>}
                      >
                      <i className="icon ion-ios-attach"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-boat</Tooltip>}
                      >
                      <i className="icon ion-ios-boat"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bluetooth</Tooltip>}
                      >
                      <i className="icon ion-ios-bluetooth"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bonfire</Tooltip>}
                      >
                      <i className="icon ion-ios-bonfire"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-book</Tooltip>}
                      >
                      <i className="icon ion-ios-book"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bookmark</Tooltip>}
                      >
                      <i className="icon ion-ios-bookmark"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bookmarks</Tooltip>}
                      >
                      <i className="icon ion-ios-bookmarks"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bowtie</Tooltip>}
                      >
                      <i className="icon ion-ios-bowtie"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-briefcase</Tooltip>}
                      >
                      <i className="icon ion-ios-briefcase"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-browsers</Tooltip>}
                      >
                      <i className="icon ion-ios-browsers"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-brush</Tooltip>}
                      >
                      <i className="icon ion-ios-brush"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bug</Tooltip>}
                      >
                      <i className="icon ion-ios-bug"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-build</Tooltip>}
                      >
                      <i className="icon ion-ios-build"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bulb</Tooltip>}
                      >
                      <i className="icon ion-ios-bulb"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-bus</Tooltip>}
                      >
                      <i className="icon ion-ios-bus"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-business</Tooltip>}
                      >
                      <i className="icon ion-ios-business"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cafe</Tooltip>}
                      >
                      <i className="icon ion-ios-cafe"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-calculator</Tooltip>}
                      >
                      <i className="icon ion-ios-calculator"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-calendar</Tooltip>}
                      >
                      <i className="icon ion-ios-calendar"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-call</Tooltip>}
                      >
                      <i className="icon ion-ios-call"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-camera</Tooltip>}
                      >
                      <i className="icon ion-ios-camera"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-car</Tooltip>}
                      >
                      <i className="icon ion-ios-car"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-card</Tooltip>}
                      >
                      <i className="icon ion-ios-card"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cart</Tooltip>}
                      >
                      <i className="icon ion-ios-cart"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cash</Tooltip>}
                      >
                      <i className="icon ion-ios-cash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cellular</Tooltip>}
                      >
                      <i className="icon ion-ios-cellular"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-chatboxes</Tooltip>}
                      >
                      <i className="icon ion-ios-chatboxes"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-chatbubbles</Tooltip>}
                      >
                      <i className="icon ion-ios-chatbubbles"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-checkbox</Tooltip>}
                      >
                      <i className="icon ion-ios-checkbox"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>"icon ion-ios-checkbox-outli</Tooltip>}
                      >
                      <i className="icon ion-ios-checkbox-outline"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-checkmark</Tooltip>}
                      >
                      <i className="icon ion-ios-checkmark"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>"icon ion-ios-checkmark-circ</Tooltip>}
                      >
                      <i className="icon ion-ios-checkmark-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>"icon ion-ios-checkmark-circ</Tooltip>}
                      >
                      <i className="icon ion-ios-checkmark-circle-outline"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-clipboard</Tooltip>}
                      >
                      <i className="icon ion-ios-clipboard"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-clock</Tooltip>}
                      >
                      <i className="icon ion-ios-clock"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-close</Tooltip>}
                      >
                      <i className="icon ion-ios-close"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-close-circle</Tooltip>}
                      >
                      <i className="icon ion-ios-close-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>"icon ion-ios-close-circle-o</Tooltip>}
                      >
                      <i className="icon ion-ios-close-circle-outline"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloud</Tooltip>}
                      >
                      <i className="icon ion-ios-cloud"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloud-circle</Tooltip>}
                      >
                      <i className="icon ion-ios-cloud-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloud-done</Tooltip>}
                      >
                      <i className="icon ion-ios-cloud-done"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloud-download</Tooltip>}
                      >
                      <i className="icon ion-ios-cloud-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloud-outline</Tooltip>}
                      >
                      <i className="icon ion-ios-cloud-outline"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloud-upload</Tooltip>}
                      >
                      <i className="icon ion-ios-cloud-upload"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloudy</Tooltip>}
                      >
                      <i className="icon ion-ios-cloudy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cloudy-night</Tooltip>}
                      >
                      <i className="icon ion-ios-cloudy-night"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-code</Tooltip>}
                      >
                      <i className="icon ion-ios-code"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-code-download</Tooltip>}
                      >
                      <i className="icon ion-ios-code-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-code-working</Tooltip>}
                      >
                      <i className="icon ion-ios-code-working"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cog</Tooltip>}
                      >
                      <i className="icon ion-ios-cog"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-color-fill</Tooltip>}
                      >
                      <i className="icon ion-ios-color-fill"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-color-filter</Tooltip>}
                      >
                      <i className="icon ion-ios-color-filter"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-color-palette</Tooltip>}
                      >
                      <i className="icon ion-ios-color-palette"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-color-wand</Tooltip>}
                      >
                      <i className="icon ion-ios-color-wand"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-compass</Tooltip>}
                      >
                      <i className="icon ion-ios-compass"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-construct</Tooltip>}
                      >
                      <i className="icon ion-ios-construct"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-contact</Tooltip>}
                      >
                      <i className="icon ion-ios-contact"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-contacts</Tooltip>}
                      >
                      <i className="icon ion-ios-contacts"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-contract</Tooltip>}
                      >
                      <i className="icon ion-ios-contract"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-contrast</Tooltip>}
                      >
                      <i className="icon ion-ios-contrast"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-copy</Tooltip>}
                      >
                      <i className="icon ion-ios-copy"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-create</Tooltip>}
                      >
                      <i className="icon ion-ios-create"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-crop</Tooltip>}
                      >
                      <i className="icon ion-ios-crop"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cube</Tooltip>}
                      >
                      <i className="icon ion-ios-cube"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-cut</Tooltip>}
                      >
                      <i className="icon ion-ios-cut"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-desktop</Tooltip>}
                      >
                      <i className="icon ion-ios-desktop"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-disc</Tooltip>}
                      >
                      <i className="icon ion-ios-disc"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-document</Tooltip>}
                      >
                      <i className="icon ion-ios-document"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-done-all</Tooltip>}
                      >
                      <i className="icon ion-ios-done-all"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-download</Tooltip>}
                      >
                      <i className="icon ion-ios-download"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-easel</Tooltip>}
                      >
                      <i className="icon ion-ios-easel"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-egg</Tooltip>}
                      >
                      <i className="icon ion-ios-egg"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-exit</Tooltip>}
                      >
                      <i className="icon ion-ios-exit"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-expand</Tooltip>}
                      >
                      <i className="icon ion-ios-expand"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-eye</Tooltip>}
                      >
                      <i className="icon ion-ios-eye"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-eye-off</Tooltip>}
                      >
                      <i className="icon ion-ios-eye-off"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-fastforward</Tooltip>}
                      >
                      <i className="icon ion-ios-fastforward"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-female</Tooltip>}
                      >
                      <i className="icon ion-ios-female"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-filing</Tooltip>}
                      >
                      <i className="icon ion-ios-filing"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-film</Tooltip>}
                      >
                      <i className="icon ion-ios-film"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-finger-print</Tooltip>}
                      >
                      <i className="icon ion-ios-finger-print"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-fitness</Tooltip>}
                      >
                      <i className="icon ion-ios-fitness"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-flag</Tooltip>}
                      >
                      <i className="icon ion-ios-flag"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-flame</Tooltip>}
                      >
                      <i className="icon ion-ios-flame"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-flash</Tooltip>}
                      >
                      <i className="icon ion-ios-flash"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-flashlight</Tooltip>}
                      >
                      <i className="icon ion-ios-flashlight"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-flask</Tooltip>}
                      >
                      <i className="icon ion-ios-flask"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                       <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-flower</Tooltip>}
                      >
                      <i className="icon ion-ios-flower"></i>
                      </OverlayTrigger>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- End Row--> */}
      </div>
      {/* <!-- Container closed --> */}
    </div>
);

IonicIcons.propTypes = {};

IonicIcons.defaultProps = {};

export default IonicIcons;
