import React from 'react';

import {
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
  Card,
  Breadcrumb,
} from "react-bootstrap";
const MaterialDesignIcons = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          MATERIAL DESIGN
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Icons
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Material design icons
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
            <Row className="row-sm">
              <Col sm={12} lg={12} className="mb-2">
                <h6 className="main-content-label">MaterialDesignIcons</h6>
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://materialdesignicons.com"
                    target="blank"
                    className="text-primary"
                  >
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="mdi mdi-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-access-point</Tooltip>}
                      >
                        <i
                          className="mdi mdi-access-point"
                          title="mdi-access-point"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-access-point-network</Tooltip>}
                      >
                        <i
                          className="mdi mdi-access-point-network"
                          title="mdi-access-point-network"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account</Tooltip>}
                      >
                        <i className="mdi mdi-account" title="mdi-account"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-alert</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-alert"
                          title="mdi-account-alert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-box"
                          title="mdi-account-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-box-outline</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-box-outline"
                          title="mdi-account-box-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-card-details</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-card-details"
                          title="mdi-account-card-details"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-check</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-check"
                          title="mdi-account-check"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-circle"
                          title="mdi-account-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-convert</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-convert"
                          title="mdi-account-convert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-edit</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-edit"
                          title="mdi-account-edit"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-key</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-key"
                          title="mdi-account-key"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-location</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-location"
                          title="mdi-account-location"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-minus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-minus"
                          title="mdi-account-minus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-multiple</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-multiple"
                          title="mdi-account-multiple"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-multiple-minus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-multiple-minus"
                          title="mdi-account-multiple-minus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-account-multiple-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-account-multiple-outline"
                          title="mdi-account-multiple-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-multiple-plus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-multiple-plus"
                          title="mdi-account-multiple-plus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-network</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-network"
                          title="mdi-account-network"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-off</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-off"
                          title="mdi-account-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-outline</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-outline"
                          title="mdi-account-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-plus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-plus"
                          title="mdi-account-plus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-remove</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-remove"
                          title="mdi-account-remove"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-search</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-search"
                          title="mdi-account-search"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-settings</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-settings"
                          title="mdi-account-settings"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-account-settings-variant</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-account-settings-variant"
                          title="mdi-account-settings-variant"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-star</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-star"
                          title="mdi-account-star"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-switch</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-switch"
                          title="mdi-account-switch"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-adjust</Tooltip>}
                      >
                        <i className="mdi mdi-adjust" title="mdi-adjust"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-air-conditioner</Tooltip>}
                      >
                        <i
                          className="mdi mdi-air-conditioner"
                          title="mdi-air-conditioner"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-airballoon</Tooltip>}
                      >
                        <i
                          className="mdi mdi-airballoon"
                          title="mdi-airballoon"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-airplane</Tooltip>}
                      >
                        <i
                          className="mdi mdi-airplane"
                          title="mdi-airplane"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-airplane-landing</Tooltip>}
                      >
                        <i
                          className="mdi mdi-airplane-landing"
                          title="mdi-airplane-landing"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-airplane-off</Tooltip>}
                      >
                        <i
                          className="mdi mdi-airplane-off"
                          title="mdi-airplane-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-airplane-takeoff</Tooltip>}
                      >
                        <i
                          className="mdi mdi-airplane-takeoff"
                          title="mdi-airplane-takeoff"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-airplay</Tooltip>}
                      >
                        <i className="mdi mdi-airplay" title="mdi-airplay"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm</Tooltip>}
                      >
                        <i className="mdi mdi-alarm" title="mdi-alarm"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-bell</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-bell"
                          title="mdi-alarm-bell"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-check</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-check"
                          title="mdi-alarm-check"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-light</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-light"
                          title="mdi-alarm-light"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-multiple</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-multiple"
                          title="mdi-alarm-multiple"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-off</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-off"
                          title="mdi-alarm-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-plus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-plus"
                          title="mdi-alarm-plus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alarm-snooze</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alarm-snooze"
                          title="mdi-alarm-snooze"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-album</Tooltip>}
                      >
                        <i className="mdi mdi-album" title="mdi-album"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert</Tooltip>}
                      >
                        <i className="mdi mdi-alert" title="mdi-alert"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-box"
                          title="mdi-alert-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-circle"
                          title="mdi-alert-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-circle-outline</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-circle-outline"
                          title="mdi-alert-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-decagram</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-decagram"
                          title="mdi-alert-decagram"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-octagon</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-octagon"
                          title="mdi-alert-octagon"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-octagram</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-octagram"
                          title="mdi-alert-octagram"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alert-outline</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alert-outline"
                          title="mdi-alert-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-all-inclusive</Tooltip>}
                      >
                        <i
                          className="mdi mdi-all-inclusive"
                          title="mdi-all-inclusive"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alpha</Tooltip>}
                      >
                        <i className="mdi mdi-alpha" title="mdi-alpha"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-alphabetical</Tooltip>}
                      >
                        <i
                          className="mdi mdi-alphabetical"
                          title="mdi-alphabetical"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-altimeter</Tooltip>}
                      >
                        <i
                          className="mdi mdi-altimeter"
                          title="mdi-altimeter"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-amazon</Tooltip>}
                      >
                        <i className="mdi mdi-amazon" title="mdi-amazon"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-amazon-clouddrive</Tooltip>}
                      >
                        <i
                          className="mdi mdi-amazon-clouddrive"
                          title="mdi-amazon-clouddrive"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-ambulance</Tooltip>}
                      >
                        <i
                          className="mdi mdi-ambulance"
                          title="mdi-ambulance"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-amplifier</Tooltip>}
                      >
                        <i
                          className="mdi mdi-amplifier"
                          title="mdi-amplifier"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-anchor</Tooltip>}
                      >
                        <i className="mdi mdi-anchor" title="mdi-anchor"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-android</Tooltip>}
                      >
                        <i className="mdi mdi-android" title="mdi-android"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-android-debug-bridge</Tooltip>}
                      >
                        <i
                          className="mdi mdi-android-debug-bridge"
                          title="mdi-android-debug-bridge"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-android-head</Tooltip>}
                      >
                        <i
                          className="mdi mdi-android-head"
                          title="mdi-android-head"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-android-studio</Tooltip>}
                      >
                        <i
                          className="mdi mdi-android-studio"
                          title="mdi-android-studio"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-angular</Tooltip>}
                      >
                        <i className="mdi mdi-angular" title="mdi-angular"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-angularjs</Tooltip>}
                      >
                        <i
                          className="mdi mdi-angularjs"
                          title="mdi-angularjs"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-animation</Tooltip>}
                      >
                        <i
                          className="mdi mdi-animation"
                          title="mdi-animation"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple</Tooltip>}
                      >
                        <i className="mdi mdi-apple" title="mdi-apple"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-finder</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-finder"
                          title="mdi-apple-finder"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-ios</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-ios"
                          title="mdi-apple-ios"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-keyboard-caps</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-keyboard-caps"
                          title="mdi-apple-keyboard-caps"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-keyboard-command</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-keyboard-command"
                          title="mdi-apple-keyboard-command"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-keyboard-control</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-keyboard-control"
                          title="mdi-apple-keyboard-control"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-keyboard-option</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-keyboard-option"
                          title="mdi-apple-keyboard-option"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-keyboard-shift</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-keyboard-shift"
                          title="mdi-apple-keyboard-shift"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-mobileme</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-mobileme"
                          title="mdi-apple-mobileme"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apple-safari</Tooltip>}
                      >
                        <i
                          className="mdi mdi-apple-safari"
                          title="mdi-apple-safari"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-application</Tooltip>}
                      >
                        <i
                          className="mdi mdi-application"
                          title="mdi-application"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-approval</Tooltip>}
                      >
                        <i
                          className="mdi mdi-approval"
                          title="mdi-approval"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-apps</Tooltip>}
                      >
                        <i className="mdi mdi-apps" title="mdi-apps"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-archive</Tooltip>}
                      >
                        <i className="mdi mdi-archive" title="mdi-archive"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrange-bring-forward</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrange-bring-forward"
                          title="mdi-arrange-bring-forward"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrange-send-to-back</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrange-send-to-back"
                          title="mdi-arrange-send-to-back"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrange-bring-to-front</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrange-bring-to-front"
                          title="mdi-arrange-bring-to-front"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrange-send-backward</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrange-send-backward"
                          title="mdi-arrange-send-backward"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-all</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-all"
                          title="mdi-arrow-all"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-bottom-left</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-bottom-left"
                          title="mdi-arrow-bottom-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-bottom-right</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-bottom-right"
                          title="mdi-arrow-bottom-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-collapse</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-collapse"
                          title="mdi-arrow-collapse"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-collapse-all</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-collapse-all"
                          title="mdi-arrow-collapse-all"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-collapse-down</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-collapse-down"
                          title="mdi-arrow-collapse-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-collapse-left</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-collapse-left"
                          title="mdi-arrow-collapse-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-collapse-right</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-collapse-right"
                          title="mdi-arrow-collapse-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-collapse-up</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-collapse-up"
                          title="mdi-arrow-collapse-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down"
                          title="mdi-arrow-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down-bold</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down-bold"
                          title="mdi-arrow-down-bold"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down-bold-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down-bold-box"
                          title="mdi-arrow-down-bold-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-down-bold-box-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-down-bold-box-outline"
                          title="mdi-arrow-down-bold-box-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down-bold-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down-bold-circle"
                          title="mdi-arrow-down-bold-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-down-bold-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-down-bold-circle-outline"
                          title="mdi-arrow-down-bold-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-down-bold-hexagon-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-down-bold-hexagon-outline"
                          title="mdi-arrow-down-bold-hexagon-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down-box"
                          title="mdi-arrow-down-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down-drop-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down-drop-circle"
                          title="mdi-arrow-down-drop-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-down-drop-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-down-drop-circle-outline"
                          title="mdi-arrow-down-drop-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-down-thick</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-down-thick"
                          title="mdi-arrow-down-thick"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-expand</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-expand"
                          title="mdi-arrow-expand"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-expand-all</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-expand-all"
                          title="mdi-arrow-expand-all"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-expand-down</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-expand-down"
                          title="mdi-arrow-expand-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-expand-left</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-expand-left"
                          title="mdi-arrow-expand-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-expand-right</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-expand-right"
                          title="mdi-arrow-expand-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-expand-up</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-expand-up"
                          title="mdi-arrow-expand-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left"
                          title="mdi-arrow-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left-bold</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left-bold"
                          title="mdi-arrow-left-bold"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left-bold-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left-bold-box"
                          title="mdi-arrow-left-bold-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-left-bold-box-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-left-bold-box-outline"
                          title="mdi-arrow-left-bold-box-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left-bold-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left-bold-circle"
                          title="mdi-arrow-left-bold-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-left-bold-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-left-bold-circle-outline"
                          title="mdi-arrow-left-bold-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-left-bold-hexagon-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-left-bold-hexagon-outline"
                          title="mdi-arrow-left-bold-hexagon-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left-box"
                          title="mdi-arrow-left-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left-drop-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left-drop-circle"
                          title="mdi-arrow-left-drop-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-left-drop-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-left-drop-circle-outline"
                          title="mdi-arrow-left-drop-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-left-thick</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-left-thick"
                          title="mdi-arrow-left-thick"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right"
                          title="mdi-arrow-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right-bold</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right-bold"
                          title="mdi-arrow-right-bold"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right-bold-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right-bold-box"
                          title="mdi-arrow-right-bold-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-right-bold-box-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-right-bold-box-outline"
                          title="mdi-arrow-right-bold-box-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right-bold-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right-bold-circle"
                          title="mdi-arrow-right-bold-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-right-bold-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-right-bold-circle-outline"
                          title="mdi-arrow-right-bold-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            mdi-arrow-right-bold-hexagon-outline
                          </Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-right-bold-hexagon-outline"
                          title="mdi-arrow-right-bold-hexagon-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right-box"
                          title="mdi-arrow-right-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right-drop-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right-drop-circle"
                          title="mdi-arrow-right-drop-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-right-drop-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-right-drop-circle-outline"
                          title="mdi-arrow-right-drop-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-right-thick</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-right-thick"
                          title="mdi-arrow-right-thick"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-top-left</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-top-left"
                          title="mdi-arrow-top-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-top-right</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-top-right"
                          title="mdi-arrow-top-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up"
                          title="mdi-arrow-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up-bold</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up-bold"
                          title="mdi-arrow-up-bold"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up-bold-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up-bold-box"
                          title="mdi-arrow-up-bold-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-up-bold-box-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-up-bold-box-outline"
                          title="mdi-arrow-up-bold-box-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up-bold-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up-bold-circle"
                          title="mdi-arrow-up-bold-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-up-bold-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-up-bold-circle-outline"
                          title="mdi-arrow-up-bold-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-up-bold-hexagon-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-up-bold-hexagon-outline"
                          title="mdi-arrow-up-bold-hexagon-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up-box"
                          title="mdi-arrow-up-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up-drop-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up-drop-circle"
                          title="mdi-arrow-up-drop-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>mdi-arrow-up-drop-circle-outline</Tooltip>
                        }
                      >
                        <i
                          className="mdi mdi-arrow-up-drop-circle-outline"
                          title="mdi-arrow-up-drop-circle-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-arrow-up-thick</Tooltip>}
                      >
                        <i
                          className="mdi mdi-arrow-up-thick"
                          title="mdi-arrow-up-thick"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-assistant</Tooltip>}
                      >
                        <i
                          className="mdi mdi-assistant"
                          title="mdi-assistant"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-asterisk</Tooltip>}
                      >
                        <i
                          className="mdi mdi-asterisk"
                          title="mdi-asterisk"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-at</Tooltip>}
                      >
                        <i className="mdi mdi-at" title="mdi-at"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-atom</Tooltip>}
                      >
                        <i className="mdi mdi-atom" title="mdi-atom"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-attachment</Tooltip>}
                      >
                        <i
                          className="mdi mdi-attachment"
                          title="mdi-attachment"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-audiobook</Tooltip>}
                      >
                        <i
                          className="mdi mdi-audiobook"
                          title="mdi-audiobook"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-auto-fix</Tooltip>}
                      >
                        <i
                          className="mdi mdi-auto-fix"
                          title="mdi-auto-fix"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-auto-upload</Tooltip>}
                      >
                        <i
                          className="mdi mdi-auto-upload"
                          title="mdi-auto-upload"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-autorenew</Tooltip>}
                      >
                        <i
                          className="mdi mdi-autorenew"
                          title="mdi-autorenew"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-av-timer</Tooltip>}
                      >
                        <i
                          className="mdi mdi-av-timer"
                          title="mdi-av-timer"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-baby</Tooltip>}
                      >
                        <i className="mdi mdi-baby" title="mdi-baby"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-baby-buggy</Tooltip>}
                      >
                        <i
                          className="mdi mdi-baby-buggy"
                          title="mdi-baby-buggy"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-backburger</Tooltip>}
                      >
                        <i
                          className="mdi mdi-backburger"
                          title="mdi-backburger"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-backspace</Tooltip>}
                      >
                        <i
                          className="mdi mdi-backspace"
                          title="mdi-backspace"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-backup-restore</Tooltip>}
                      >
                        <i
                          className="mdi mdi-backup-restore"
                          title="mdi-backup-restore"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-bandcamp</Tooltip>}
                      >
                        <i
                          className="mdi mdi-bandcamp"
                          title="mdi-bandcamp"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-bank</Tooltip>}
                      >
                        <i className="mdi mdi-bank" title="mdi-bank"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-barcode</Tooltip>}
                      >
                        <i className="mdi mdi-barcode" title="mdi-barcode"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-barcode-scan</Tooltip>}
                      >
                        <i
                          className="mdi mdi-barcode-scan"
                          title="mdi-barcode-scan"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-barley</Tooltip>}
                      >
                        <i className="mdi mdi-barley" title="mdi-barley"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-barrel</Tooltip>}
                      >
                        <i className="mdi mdi-barrel" title="mdi-barrel"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-basecamp</Tooltip>}
                      >
                        <i
                          className="mdi mdi-basecamp"
                          title="mdi-basecamp"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-basket</Tooltip>}
                      >
                        <i className="mdi mdi-basket" title="mdi-basket"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-basket-fill</Tooltip>}
                      >
                        <i
                          className="mdi mdi-basket-fill"
                          title="mdi-basket-fill"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-basket-unfill</Tooltip>}
                      >
                        <i
                          className="mdi mdi-basket-unfill"
                          title="mdi-basket-unfill"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery</Tooltip>}
                      >
                        <i className="mdi mdi-battery" title="mdi-battery"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-10</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-10"
                          title="mdi-battery-10"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-20</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-20"
                          title="mdi-battery-20"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-30</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-30"
                          title="mdi-battery-30"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-40</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-40"
                          title="mdi-battery-40"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-50</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-50"
                          title="mdi-battery-50"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-60</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-60"
                          title="mdi-battery-60"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-70</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-70"
                          title="mdi-battery-70"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-80</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-80"
                          title="mdi-battery-80"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-90</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-90"
                          title="mdi-battery-90"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-alert</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-alert"
                          title="mdi-battery-alert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging"
                          title="mdi-battery-charging"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-100</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-100"
                          title="mdi-battery-charging-100"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-20</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-20"
                          title="mdi-battery-charging-20"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-30</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-30"
                          title="mdi-battery-charging-30"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-40</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-40"
                          title="mdi-battery-charging-40"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-60</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-60"
                          title="mdi-battery-charging-60"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-80</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-80"
                          title="mdi-battery-charging-80"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-charging-90</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-charging-90"
                          title="mdi-battery-charging-90"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-minus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-minus"
                          title="mdi-battery-minus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-negative</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-negative"
                          title="mdi-battery-negative"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-outline</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-outline"
                          title="mdi-battery-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-plus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-plus"
                          title="mdi-battery-plus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-battery-unknown</Tooltip>}
                      >
                        <i
                          className="mdi mdi-battery-unknown"
                          title="mdi-battery-unknown"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-beach</Tooltip>}
                      >
                        <i className="mdi mdi-beach" title="mdi-beach"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-zip-box</Tooltip>}
                      >
                        <i className="mdi mdi-zip-box" title="mdi-zip-box"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-youtube-play</Tooltip>}
                      >
                        <i
                          className="mdi mdi-youtube-play"
                          title="mdi-youtube-play"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-yin-yang</Tooltip>}
                      >
                        <i
                          className="mdi mdi-yin-yang"
                          title="mdi-yin-yang"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-yelp</Tooltip>}
                      >
                        <i className="mdi mdi-yelp" title="mdi-yelp"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-yammer</Tooltip>}
                      >
                        <i className="mdi mdi-yammer" title="mdi-yammer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-xmpp</Tooltip>}
                      >
                        <i className="mdi mdi-xmpp" title="mdi-xmpp"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-xml</Tooltip>}
                      >
                        <i className="mdi mdi-xml" title="mdi-xml"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-wrench</Tooltip>}
                      >
                        <i className="mdi mdi-wrench" title="mdi-wrench"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-wrap</Tooltip>}
                      >
                        <i className="mdi mdi-wrap" title="mdi-wrap"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-wunderlist</Tooltip>}
                      >
                        <i
                          className="mdi mdi-wunderlist"
                          title="mdi-wunderlist"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-wrench</Tooltip>}
                      >
                        <i className="mdi mdi-wrench" title="mdi-wrench"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-vpn</Tooltip>}
                      >
                        <i className="mdi mdi-vpn" title="mdi-vpn"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-volume-off</Tooltip>}
                      >
                        <i
                          className="mdi mdi-volume-off"
                          title="mdi-volume-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-volume-mute</Tooltip>}
                      >
                        <i
                          className="mdi mdi-volume-mute"
                          title="mdi-volume-mute"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-vlc</Tooltip>}
                      >
                        <i className="mdi mdi-vlc" title="mdi-vlc"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-video</Tooltip>}
                      >
                        <i className="mdi mdi-video" title="mdi-video"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-usb</Tooltip>}
                      >
                        <i className="mdi mdi-usb" title="mdi-usb"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-upload-network</Tooltip>}
                      >
                        <i
                          className="mdi mdi-upload-network"
                          title="mdi-upload-network"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-update</Tooltip>}
                      >
                        <i className="mdi mdi-update" title="mdi-update"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-unity</Tooltip>}
                      >
                        <i className="mdi mdi-unity" title="mdi-unity"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-undo</Tooltip>}
                      >
                        <i className="mdi mdi-undo" title="mdi-undo"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-ubuntu</Tooltip>}
                      >
                        <i className="mdi mdi-ubuntu" title="mdi-ubuntu"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-tune</Tooltip>}
                      >
                        <i className="mdi mdi-tune" title="mdi-tune"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-truck-trailer</Tooltip>}
                      >
                        <i
                          className="mdi mdi-truck-trailer"
                          title="mdi-truck-trailer"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-truck</Tooltip>}
                      >
                        <i className="mdi mdi-truck" title="mdi-truck"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-svg</Tooltip>}
                      >
                        <i className="mdi mdi-svg" title="mdi-svg"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-subway</Tooltip>}
                      >
                        <i className="mdi mdi-subway" title="mdi-subway"></i>
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
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <div className="card custom-card">
          <div className="card-header mt-3 ms-1 border-bottom-0">
            <div className="main-content-label">Material Design Icons</div>
          </div>
          <div className="card-body">
            <Row className="row-sm">
              <div className="col-lg-12 col-sm-12 mb-2">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a href="https://materialdesignicons.com/" 
                  target="blank"
                  className="text-primary"
                  >
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="zmdi zmdi-NAME"&gt;&lt;/i&gt;</code>
                </p>
              </div>
              <div className="col-sm-12 col-lg-12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-group</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-group"
                          title="zmdi zmdi-group"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-rss</Tooltip>}
                      >
                        <i className="zmdi zmdi-rss" title="zmdi zmdi-rss"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-shape</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-shape"
                          title="zmdi zmdi-shape"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-spinner</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-spinner"
                          title="zmdi zmdi-spinner"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-ungroup</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-ungroup"
                          title="zmdi zmdi-ungroup"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-500px</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-500px"
                          title="zmdi zmdi-500px"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-8tracks</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-8tracks"
                          title="zmdi zmdi-8tracks"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-amazon</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-amazon"
                          title="zmdi zmdi-amazon"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-blogger</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-blogger"
                          title="zmdi zmdi-blogger"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-delicious</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-delicious"
                          title="zmdi zmdi-delicious"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-disqus</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-disqus"
                          title="zmdi zmdi-disqus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flattr</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flattr"
                          title="zmdi zmdi-flattr"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flickr</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flickr"
                          title="zmdi zmdi-flickr"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-github-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-github-alt"
                          title="zmdi zmdi-github-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-google-old</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-google-old"
                          title="zmdi zmdi-google-old"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-linkedin</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-linkedin"
                          title="zmdi zmdi-linkedin"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-odnoklassniki</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-odnoklassniki"
                          title="zmdi zmdi-odnoklassniki"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-outlook</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-outlook"
                          title="zmdi zmdi-outlook"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-paypal-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-paypal-alt"
                          title="zmdi zmdi-paypal-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pinterest</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pinterest"
                          title="zmdi zmdi-pinterest"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-playstation</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-playstation"
                          title="zmdi zmdi-playstation"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-reddit</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-reddit"
                          title="zmdi zmdi-reddit"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-skype</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-skype"
                          title="zmdi zmdi-skype"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-slideshare</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-slideshare"
                          title="zmdi zmdi-slideshare"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-soundcloud</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-soundcloud"
                          title="zmdi zmdi-soundcloud"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-tumblr</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-tumblr"
                          title="zmdi zmdi-tumblr"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-twitch</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-twitch"
                          title="zmdi zmdi-twitch"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-vimeo</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-vimeo"
                          title="zmdi zmdi-vimeo"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-whatsapp</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-whatsapp"
                          title="zmdi zmdi-whatsapp"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-xbox</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-xbox"
                          title="zmdi zmdi-xbox"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-yahoo</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-yahoo"
                          title="zmdi zmdi-yahoo"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-youtube-play</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-youtube-play"
                          title="zmdi zmdi-youtube-play"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-youtube</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-youtube"
                          title="zmdi zmdi-youtube"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-3d-rotation</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-3d-rotation"
                          title="zmdi zmdi-3d-rotation"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-airplane-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-airplane-off"
                          title="zmdi zmdi-airplane-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-airplane</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-airplane"
                          title="zmdi zmdi-airplane"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-album</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-album"
                          title="zmdi zmdi-album"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-archive</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-archive"
                          title="zmdi zmdi-archive"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-assignment-account</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-assignment-account"
                          title="zmdi zmdi-assignment-account"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-assignment-alert</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-assignment-alert"
                          title="zmdi zmdi-assignment-alert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-assignment-check</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-assignment-check"
                          title="zmdi zmdi-assignment-check"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-assignment-o</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-assignment-o"
                          title="zmdi zmdi-assignment-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-assignment-return</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-assignment-return"
                          title="zmdi zmdi-assignment-return"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-assignment-returned</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-assignment-returned"
                          title="zmdi zmdi-assignment-returned"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-assignment</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-assignment"
                          title="zmdi zmdi-assignment"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-attachment-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-attachment-alt"
                          title="zmdi zmdi-attachment-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-attachment</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-attachment"
                          title="zmdi zmdi-attachment"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-audio</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-audio"
                          title="zmdi zmdi-audio"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-badge-check</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-badge-check"
                          title="zmdi zmdi-badge-check"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-balance-wallet</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-balance-wallet"
                          title="zmdi zmdi-balance-wallet"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-balance</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-balance"
                          title="zmdi zmdi-balance"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-battery-alert</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-battery-alert"
                          title="zmdi zmdi-battery-alert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-battery-flash</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-battery-flash"
                          title="zmdi zmdi-battery-flash"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-battery-unknown</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-battery-unknown"
                          title="zmdi zmdi-battery-unknown"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-battery</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-battery"
                          title="zmdi zmdi-battery"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-bike</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-bike"
                          title="zmdi zmdi-bike"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-block-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-block-alt"
                          title="zmdi zmdi-block-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-block</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-block"
                          title="zmdi zmdi-block"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-boat</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-boat"
                          title="zmdi zmdi-boat"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-book-image</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-book-image"
                          title="zmdi zmdi-book-image"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-book</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-book"
                          title="zmdi zmdi-book"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-bookmark-outline</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-bookmark-outline"
                          title="zmdi zmdi-bookmark-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-bookmark</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-bookmark"
                          title="zmdi zmdi-bookmark"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-brush</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-brush"
                          title="zmdi zmdi-brush"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-bug</Tooltip>}
                      >
                        <i className="zmdi zmdi-bug" title="zmdi zmdi-bug"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-bus</Tooltip>}
                      >
                        <i className="zmdi zmdi-bus" title="zmdi zmdi-bus"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-cake</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-cake"
                          title="zmdi zmdi-cake"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-car-taxi</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-car-taxi"
                          title="zmdi zmdi-car-taxi"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-car-wash</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-car-wash"
                          title="zmdi zmdi-car-wash"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-car</Tooltip>}
                      >
                        <i className="zmdi zmdi-car" title="zmdi zmdi-car"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-card-giftcard</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-card-giftcard"
                          title="zmdi zmdi-card-giftcard"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-card-membership</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-card-membership"
                          title="zmdi zmdi-card-membership"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-card-travel</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-card-travel"
                          title="zmdi zmdi-card-travel"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-card</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-card"
                          title="zmdi zmdi-card"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-case-check</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-case-check"
                          title="zmdi zmdi-case-check"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-case-download</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-case-download"
                          title="zmdi zmdi-case-download"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-case-play</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-case-play"
                          title="zmdi zmdi-case-play"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-case</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-case"
                          title="zmdi zmdi-case"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-cast-connected</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-cast-connected"
                          title="zmdi zmdi-cast-connected"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-cast</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-cast"
                          title="zmdi zmdi-cast"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-chart-donut</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-chart-donut"
                          title="zmdi zmdi-chart-donut"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-chart</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-chart"
                          title="zmdi zmdi-chart"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-city-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-city-alt"
                          title="zmdi zmdi-city-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-city</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-city"
                          title="zmdi zmdi-city"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-close-circle-o</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-close-circle-o"
                          title="zmdi zmdi-close-circle-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-close-circle</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-close-circle"
                          title="zmdi zmdi-close-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-close</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-close"
                          title="zmdi zmdi-close"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-cocktail</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-cocktail"
                          title="zmdi zmdi-cocktail"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-code-setting</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-code-setting"
                          title="zmdi zmdi-code-setting"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-code-smartphone</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-code-smartphone"
                          title="zmdi zmdi-code-smartphone"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-code</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-code"
                          title="zmdi zmdi-code"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-coffee</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-coffee"
                          title="zmdi zmdi-coffee"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-collection-bookmark</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-collection-bookmark"
                          title="zmdi zmdi-collection-bookmark"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-collection-case-play</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-collection-case-play"
                          title="zmdi zmdi-collection-case-play"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-collection-folder-image</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-collection-folder-image"
                          title="zmdi zmdi-collection-folder-image"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-collection-image-o</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-collection-image-o"
                          title="zmdi zmdi-collection-image-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-image</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-image"
                          title="zmdi zmdi-collection-image"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-1</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-1"
                          title="zmdi zmdi-collection-item-1"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-2</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-2"
                          title="zmdi zmdi-collection-item-2"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-3</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-3"
                          title="zmdi zmdi-collection-item-3"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-4</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-4"
                          title="zmdi zmdi-collection-item-4"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-5</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-5"
                          title="zmdi zmdi-collection-item-5"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-6</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-6"
                          title="zmdi zmdi-collection-item-6"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-7</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-7"
                          title="zmdi zmdi-collection-item-7"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-8</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-8"
                          title="zmdi zmdi-collection-item-8"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item-9</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-9-plus"
                          title="zmdi zmdi-collection-item-9"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ion-unlocked</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item-9"
                          title="ion-unlocked"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-item</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-item"
                          title="zmdi zmdi-collection-item"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-music</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-music"
                          title="zmdi zmdi-collection-music"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-pdf</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-pdf"
                          title="zmdi zmdi-collection-pdf"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-plus</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-plus"
                          title="zmdi zmdi-collection-plus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>zmdi zmdi-collection-speaker</Tooltip>
                        }
                      >
                        <i
                          className="zmdi zmdi-collection-speaker"
                          title="zmdi zmdi-collection-speaker"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-text</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-text"
                          title="zmdi zmdi-collection-text"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-collection-video</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-collection-video"
                          title="zmdi zmdi-collection-video"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-compass</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-compass"
                          title="zmdi zmdi-compass"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-cutlery</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-cutlery"
                          title="zmdi zmdi-cutlery"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-delete</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-delete"
                          title="zmdi zmdi-delete"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-dialpad</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-dialpad"
                          title="zmdi zmdi-dialpad"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-dns</Tooltip>}
                      >
                        <i className="zmdi zmdi-dns" title="zmdi zmdi-dns"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-drink</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-drink"
                          title="zmdi zmdi-drink"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-edit</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-edit"
                          title="zmdi zmdi-edit"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-email-open</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-email-open"
                          title="zmdi zmdi-email-open"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-email</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-email"
                          title="zmdi zmdi-email"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-eye-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-eye-off"
                          title="zmdi zmdi-eye-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-eye</Tooltip>}
                      >
                        <i className="zmdi zmdi-eye" title="zmdi zmdi-eye"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-eyedropper</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-eyedropper"
                          title="zmdi zmdi-eyedropper"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-favorite-outline</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-favorite-outline"
                          title="zmdi zmdi-favorite-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-favorite</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-favorite"
                          title="zmdi zmdi-favorite"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-filter-list</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-filter-list"
                          title="zmdi zmdi-filter-list"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-fire</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-fire"
                          title="zmdi zmdi-fire"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flag</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flag"
                          title="zmdi zmdi-flag"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flare</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flare"
                          title="zmdi zmdi-flare"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flash-auto</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flash-auto"
                          title="zmdi zmdi-flash-auto"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flash-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flash-off"
                          title="zmdi zmdi-flash-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flash</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flash"
                          title="zmdi zmdi-flash"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flip</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flip"
                          title="zmdi zmdi-flip"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flower-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flower-alt"
                          title="zmdi zmdi-flower-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-flower</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-flower"
                          title="zmdi zmdi-flower"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-font</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-font"
                          title="zmdi zmdi-font"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-fullscreen-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-fullscreen-alt"
                          title="zmdi zmdi-fullscreen-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-fullscreen-exit</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-fullscreen-exit"
                          title="zmdi zmdi-fullscreen-exit"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-fullscreen</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-fullscreen"
                          title="zmdi zmdi-fullscreen"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-functions</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-functions"
                          title="zmdi zmdi-functions"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-gas-station</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-gas-station"
                          title="zmdi zmdi-gas-station"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-gesture</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-gesture"
                          title="zmdi zmdi-gesture"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-globe-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-globe-alt"
                          title="zmdi zmdi-globe-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-globe-lock</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-globe-lock"
                          title="zmdi zmdi-globe-lock"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-globe</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-globe"
                          title="zmdi zmdi-globe"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-graduation-cap</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-graduation-cap"
                          title="zmdi zmdi-graduation-cap"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-group</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-group"
                          title="zmdi zmdi-group"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-home</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-home"
                          title="zmdi zmdi-home"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-hospital-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-hospital-alt"
                          title="zmdi zmdi-hospital-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-hospital</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-hospital"
                          title="zmdi zmdi-hospital"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-hotel</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-hotel"
                          title="zmdi zmdi-hotel"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-hourglass-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-hourglass-alt"
                          title="zmdi zmdi-hourglass-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-hourglass-outline</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-hourglass-outline"
                          title="zmdi zmdi-hourglass-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-hourglass</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-hourglass"
                          title="zmdi zmdi-hourglass"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-http</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-http"
                          title="zmdi zmdi-http"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-image-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-image-alt"
                          title="zmdi zmdi-image-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-image-o</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-image-o"
                          title="zmdi zmdi-image-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-image</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-image"
                          title="zmdi zmdi-image"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-inbox</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-inbox"
                          title="zmdi zmdi-inbox"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-invert-colors-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-invert-colors-off"
                          title="zmdi zmdi-invert-colors-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-invert-colors</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-invert-colors"
                          title="zmdi zmdi-invert-colors"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-key</Tooltip>}
                      >
                        <i className="zmdi zmdi-key" title="zmdi zmdi-key"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-label-alt-outline</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-label-alt-outline"
                          title="zmdi zmdi-label-alt-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-label-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-label-alt"
                          title="zmdi zmdi-label-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-label-heart</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-label-heart"
                          title="zmdi zmdi-label-heart"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-label</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-label"
                          title="zmdi zmdi-label"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-labels</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-labels"
                          title="zmdi zmdi-labels"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-lamp</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-lamp"
                          title="zmdi zmdi-lamp"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-landscape</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-landscape"
                          title="zmdi zmdi-landscape"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-layers-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-layers-off"
                          title="zmdi zmdi-layers-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-layers</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-layers"
                          title="zmdi zmdi-layers"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-library</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-library"
                          title="zmdi zmdi-library"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-link</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-link"
                          title="zmdi zmdi-link"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-lock-open</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-lock-open"
                          title="zmdi zmdi-lock-open"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-lock-outline</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-lock-outline"
                          title="zmdi zmdi-lock-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-lock</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-lock"
                          title="zmdi zmdi-lock"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-mail-reply-all</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-mail-reply-all"
                          title="zmdi zmdi-mail-reply-all"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-mail-reply</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-mail-reply"
                          title="zmdi zmdi-mail-reply"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-mail-send</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-mail-send"
                          title="zmdi zmdi-mail-send"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-mall</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-mall"
                          title="zmdi zmdi-mall"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-map</Tooltip>}
                      >
                        <i className="zmdi zmdi-map" title="zmdi zmdi-map"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-menu</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-menu"
                          title="zmdi zmdi-menu"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-money-box</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-money-box"
                          title="zmdi zmdi-money-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-money-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-money-off"
                          title="zmdi zmdi-money-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-money</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-money"
                          title="zmdi zmdi-money"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-more-vert</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-more-vert"
                          title="zmdi zmdi-more-vert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-more</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-more"
                          title="zmdi zmdi-more"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-movie-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-movie-alt"
                          title="zmdi zmdi-movie-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-nature-people</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-nature-people"
                          title="zmdi zmdi-nature-people"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-nature</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-nature"
                          title="zmdi zmdi-nature"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-navigation</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-navigation"
                          title="zmdi zmdi-navigation"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-open-in-browser</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-open-in-browser"
                          title="zmdi zmdi-open-in-browser"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-open-in-new</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-open-in-new"
                          title="zmdi zmdi-open-in-new"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-palette</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-palette"
                          title="zmdi zmdi-palette"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-parking</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-parking"
                          title="zmdi zmdi-parking"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pin-account</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pin-account"
                          title="zmdi zmdi-pin-account"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pin-assistant</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pin-assistant"
                          title="zmdi zmdi-pin-assistant"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pin-drop</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pin-drop"
                          title="zmdi zmdi-pin-drop"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pin-help</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pin-help"
                          title="zmdi zmdi-pin-help"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pin-off</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pin-off"
                          title="zmdi zmdi-pin-off"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pin</Tooltip>}
                      >
                        <i className="zmdi zmdi-pin" title="zmdi zmdi-pin"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-pizza</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-pizza"
                          title="zmdi zmdi-pizza"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-plaster</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-plaster"
                          title="zmdi zmdi-plaster"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-power-setting</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-power-setting"
                          title="zmdi zmdi-power-setting"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-power</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-power"
                          title="zmdi zmdi-power"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-print</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-print"
                          title="zmdi zmdi-print"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-puzzle-piece</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-puzzle-piece"
                          title="zmdi zmdi-puzzle-piece"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-quote</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-quote"
                          title="zmdi zmdi-quote"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-railway</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-railway"
                          title="zmdi zmdi-railway"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-receipt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-receipt"
                          title="zmdi zmdi-receipt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>zmdi zmdi-refresh-alt</Tooltip>}
                      >
                        <i
                          className="zmdi zmdi-refresh-alt"
                          title="zmdi zmdi-refresh-alt"
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
              </div>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

MaterialDesignIcons.propTypes = {};

MaterialDesignIcons.defaultProps = {};

export default MaterialDesignIcons;
