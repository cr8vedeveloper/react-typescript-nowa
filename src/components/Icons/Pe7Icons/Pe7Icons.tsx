import React from 'react';
import {
  Col,
  Row,
  Card,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


const Pe7Icons = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">PE7</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Icons
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Pe7 icons
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
            <Row  className="row-sm">
              <Col lg={12}sm={12} className=" mb-2">
                <h6 className="main-content-label">Pe7 Icons</h6>
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://themes-pixeden.com/font-demos/7-stroke/"
                    target="blank"
                    className="text-primary"
                  >
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="pe-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col lg={12}sm={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-arc</Tooltip>}
                      >
                      <i
                        className="pe-7s-arc"
                        title="pe-7s-arc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-back-2</Tooltip>}
                      >
                      <i
                        className="pe-7s-back-2"
                        title="pe-7s-back-2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-bandaid</Tooltip>}
                      >
                      <i
                        className="pe-7s-bandaid"
                        title="pe-7s-bandaid"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-car</Tooltip>}
                      >
                      <i
                        className="pe-7s-car"
                        title="pe-7s-car"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-diamond</Tooltip>}
                      >
                      <i
                        className="pe-7s-diamond"
                        title="pe-7s-diamond"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-door-lock</Tooltip>}
                      >
                      <i
                        className="pe-7s-door-lock"
                        title="pe-7s-door-lock"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-eyedropper</Tooltip>}
                      >
                      <i
                        className="pe-7s-eyedropper"
                        title="pe-7s-eyedropper"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-female</Tooltip>}
                      >
                      <i
                        className="pe-7s-female"
                        title="pe-7s-female"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-gym</Tooltip>}
                      >
                      <i
                        className="pe-7s-gym"
                        title="pe-7s-gym"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-hammer</Tooltip>}
                      >
                      <i
                        className="pe-7s-hammer"
                        title="pe-7s-hammer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-headphones</Tooltip>}
                      >
                      <i
                        className="pe-7s-headphones"
                        title="pe-7s-headphones"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-helm</Tooltip>}
                      >
                      <i
                        className="pe-7s-helm"
                        title="pe-7s-helm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-hourglass</Tooltip>}
                      >
                      <i
                        className="pe-7s-hourglass"
                        title="pe-7s-hourglass"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-leaf</Tooltip>}
                      >
                      <i
                        className="pe-7s-leaf"
                        title="pe-7s-leaf"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-magic-wand</Tooltip>}
                      >
                      <i
                        className="pe-7s-magic-wand"
                        title="pe-7s-magic-wand"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-male</Tooltip>}
                      >
                      <i
                        className="pe-7s-male"
                        title="pe-7s-male"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-map-2</Tooltip>}
                      >
                      <i
                        className="pe-7s-map-2"
                        title="pe-7s-map-2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-next-2</Tooltip>}
                      >
                      <i
                        className="pe-7s-next-2"
                        title="pe-7s-next-2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-paint-bucket</Tooltip>}
                      >
                      <i
                        className="pe-7s-paint-bucket"
                        title="pe-7s-paint-bucket"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-pendrive</Tooltip>}
                      >
                      <i
                        className="pe-7s-pendrive"
                        title="pe-7s-pendrive"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-photo</Tooltip>}
                      >
                      <i
                        className="pe-7s-photo"
                        title="pe-7s-photo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-piggy</Tooltip>}
                      >
                      <i
                        className="pe-7s-piggy"
                        title="pe-7s-piggy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-plugin</Tooltip>}
                      >
                      <i
                        className="pe-7s-plugin"
                        title="pe-7s-plugin"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-refresh-2</Tooltip>}
                      >
                      <i
                        className="pe-7s-refresh-2"
                        title="pe-7s-refresh-2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-rocket</Tooltip>}
                      >
                      <i
                        className="pe-7s-rocket"
                        title="pe-7s-rocket"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-settings</Tooltip>}
                      >
                      <i
                        className="pe-7s-settings"
                        title="pe-7s-settings"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-shield</Tooltip>}
                      >
                      <i
                        className="pe-7s-shield"
                        title="pe-7s-shield"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-smile</Tooltip>}
                      >
                      <i
                        className="pe-7s-smile"
                        title="pe-7s-smile"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-usb</Tooltip>}
                      >
                      <i
                        className="pe-7s-usb"
                        title="pe-7s-usb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-vector</Tooltip>}
                      >
                      <i
                        className="pe-7s-vector"
                        title="pe-7s-vector"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-wine</Tooltip>}
                      >
                      <i
                        className="pe-7s-wine"
                        title="pe-7s-wine"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-cloud-upload</Tooltip>}
                      >
                      <i
                        className="pe-7s-cloud-upload"
                        title="pe-7s-cloud-upload"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-cash</Tooltip>}
                      >
                      <i
                        className="pe-7s-cash"
                        title="pe-7s-cash"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-close</Tooltip>}
                      >
                      <i
                        className="pe-7s-close"
                        title="pe-7s-close"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-bluetooth</Tooltip>}
                      >
                      <i
                        className="pe-7s-bluetooth"
                        title="pe-7s-bluetooth"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-cloud-download</Tooltip>}
                      >
                      <i
                        className="pe-7s-cloud-download"
                        title="pe-7s-cloud-download"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-way</Tooltip>}
                      >
                      <i
                        className="pe-7s-way"
                        title="pe-7s-way"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-close-circle</Tooltip>}
                      >
                      <i
                        className="pe-7s-close-circle"
                        title="pe-7s-close-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-id</Tooltip>}
                      >
                      <i
                        className="pe-7s-id"
                        title="pe-7s-id"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-up</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-up"
                        title="pe-7s-angle-up"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-wristwatch</Tooltip>}
                      >
                      <i
                        className="pe-7s-wristwatch"
                        title="pe-7s-wristwatch"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-up-circle</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-up-circle"
                        title="pe-7s-angle-up-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-world</Tooltip>}
                      >
                      <i
                        className="pe-7s-world"
                        title="pe-7s-world"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-right</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-right"
                        title="pe-7s-angle-right"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-volume</Tooltip>}
                      >
                      <i
                        className="pe-7s-volume"
                        title="pe-7s-volume"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-right-circle</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-right-circle"
                        title="pe-7s-angle-right-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-users</Tooltip>}
                      >
                      <i
                        className="pe-7s-users"
                        title="pe-7s-users"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-left</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-left"
                        title="pe-7s-angle-left"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-user-female</Tooltip>}
                      >
                      <i
                        className="pe-7s-user-female"
                        title="pe-7s-user-female"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-left-circle</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-left-circle"
                        title="pe-7s-angle-left-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-up-arrow</Tooltip>}
                      >
                      <i
                        className="pe-7s-up-arrow"
                        title="pe-7s-up-arrow"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-down</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-down"
                        title="pe-7s-angle-down"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-switch</Tooltip>}
                      >
                      <i
                        className="pe-7s-switch"
                        title="pe-7s-switch"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-angle-down-circle</Tooltip>}
                      >
                      <i
                        className="pe-7s-angle-down-circle"
                        title="pe-7s-angle-down-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-scissors</Tooltip>}
                      >
                      <i
                        className="pe-7s-scissors"
                        title="pe-7s-scissors"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-wallet</Tooltip>}
                      >
                      <i
                        className="pe-7s-wallet"
                        title="pe-7s-wallet"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-safe</Tooltip>}
                      >
                      <i
                        className="pe-7s-safe"
                        title="pe-7s-safe"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-volume2</Tooltip>}
                      >
                      <i
                        className="pe-7s-volume2"
                        title="pe-7s-volume2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-volume1</Tooltip>}
                      >
                      <i
                        className="pe-7s-volume1"
                        title="pe-7s-volume1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-voicemail</Tooltip>}
                      >
                      <i
                        className="pe-7s-voicemail"
                        title="pe-7s-voicemail"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-video</Tooltip>}
                      >
                      <i
                        className="pe-7s-video"
                        title="pe-7s-video"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-user</Tooltip>}
                      >
                      <i
                        className="pe-7s-user"
                        title="pe-7s-user"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-upload</Tooltip>}
                      >
                      <i
                        className="pe-7s-upload"
                        title="pe-7s-upload"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-unlock</Tooltip>}
                      >
                      <i
                        className="pe-7s-unlock"
                        title="pe-7s-unlock"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-umbrella</Tooltip>}
                      >
                      <i
                        className="pe-7s-umbrella"
                        title="pe-7s-umbrella"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-trash</Tooltip>}
                      >
                      <i
                        className="pe-7s-trash"
                        title="pe-7s-trash"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-tools</Tooltip>}
                      >
                      <i
                        className="pe-7s-tools"
                        title="pe-7s-tools"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-timer</Tooltip>}
                      >
                      <i
                        className="pe-7s-timer"
                        title="pe-7s-timer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-ticket</Tooltip>}
                      >
                      <i
                        className="pe-7s-ticket"
                        title="pe-7s-ticket"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-target</Tooltip>}
                      >
                      <i
                        className="pe-7s-target"
                        title="pe-7s-target"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-sun</Tooltip>}
                      >
                      <i
                        className="pe-7s-sun"
                        title="pe-7s-sun"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-study</Tooltip>}
                      >
                      <i
                        className="pe-7s-study"
                        title="pe-7s-study"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-stopwatch</Tooltip>}
                      >
                      <i
                        className="pe-7s-stopwatch"
                        title="pe-7s-stopwatch"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-star</Tooltip>}
                      >
                      <i
                        className="pe-7s-star"
                        title="pe-7s-star"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-speaker</Tooltip>}
                      >
                      <i
                        className="pe-7s-speaker"
                        title="pe-7s-speaker"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-signal</Tooltip>}
                      >
                      <i
                        className="pe-7s-signal"
                        title="pe-7s-signal"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-shuffle</Tooltip>}
                      >
                      <i
                        className="pe-7s-shuffle"
                        title="pe-7s-shuffle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-shopbag</Tooltip>}
                      >
                      <i
                        className="pe-7s-shopbag"
                        title="pe-7s-shopbag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-share</Tooltip>}
                      >
                      <i
                        className="pe-7s-share"
                        title="pe-7s-share"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-server</Tooltip>}
                      >
                      <i
                        className="pe-7s-server"
                        title="pe-7s-server"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-search</Tooltip>}
                      >
                      <i
                        className="pe-7s-search"
                        title="pe-7s-search"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-film</Tooltip>}
                      >
                      <i
                        className="pe-7s-film"
                        title="pe-7s-film"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-science</Tooltip>}
                      >
                      <i
                        className="pe-7s-science"
                        title="pe-7s-science"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-disk</Tooltip>}
                      >
                      <i
                        className="pe-7s-disk"
                        title="pe-7s-disk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-ribbon</Tooltip>}
                      >
                      <i
                        className="pe-7s-ribbon"
                        title="pe-7s-ribbon"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-repeat</Tooltip>}
                      >
                      <i
                        className="pe-7s-repeat"
                        title="pe-7s-repeat"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-refresh</Tooltip>}
                      >
                      <i
                        className="pe-7s-refresh"
                        title="pe-7s-refresh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-add-user</Tooltip>}
                      >
                      <i
                        className="pe-7s-add-user"
                        title="pe-7s-add-user"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-refresh-cloud</Tooltip>}
                      >
                      <i
                        className="pe-7s-refresh-cloud"
                        title="pe-7s-refresh-cloud"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-paperclip</Tooltip>}
                      >
                      <i
                        className="pe-7s-paperclip"
                        title="pe-7s-paperclip"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-radio</Tooltip>}
                      >
                      <i
                        className="pe-7s-radio"
                        title="pe-7s-radio"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-note2</Tooltip>}
                      >
                      <i
                        className="pe-7s-note2"
                        title="pe-7s-note2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-print</Tooltip>}
                      >
                      <i
                        className="pe-7s-print"
                        title="pe-7s-print"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-network</Tooltip>}
                      >
                      <i
                        className="pe-7s-network"
                        title="pe-7s-network"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-prev</Tooltip>}
                      >
                      <i
                        className="pe-7s-prev"
                        title="pe-7s-prev"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-mute</Tooltip>}
                      >
                      <i
                        className="pe-7s-mute"
                        title="pe-7s-mute"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-power</Tooltip>}
                      >
                      <i
                        className="pe-7s-power"
                        title="pe-7s-power"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-medal</Tooltip>}
                      >
                      <i
                        className="pe-7s-medal"
                        title="pe-7s-medal"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-portfolio</Tooltip>}
                      >
                      <i
                        className="pe-7s-portfolio"
                        title="pe-7s-portfolio"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-like2</Tooltip>}
                      >
                      <i
                        className="pe-7s-like2"
                        title="pe-7s-like2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-plus</Tooltip>}
                      >
                      <i
                        className="pe-7s-plus"
                        title="pe-7s-plus"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-left-arrow</Tooltip>}
                      >
                      <i
                        className="pe-7s-left-arrow"
                        title="pe-7s-left-arrow"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-play</Tooltip>}
                      >
                      <i
                        className="pe-7s-play"
                        title="pe-7s-play"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-key</Tooltip>}
                      >
                      <i
                        className="pe-7s-key"
                        title="pe-7s-key"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-plane</Tooltip>}
                      >
                      <i
                        className="pe-7s-plane"
                        title="pe-7s-plane"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-joy</Tooltip>}
                      >
                      <i
                        className="pe-7s-joy"
                        title="pe-7s-joy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-photo-gallery</Tooltip>}
                      >
                      <i
                        className="pe-7s-photo-gallery"
                        title="pe-7s-photo-gallery"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-pin</Tooltip>}
                      >
                      <i
                        className="pe-7s-pin"
                        title="pe-7s-pin"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-phone</Tooltip>}
                      >
                      <i
                        className="pe-7s-phone"
                        title="pe-7s-phone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-plug</Tooltip>}
                      >
                      <i
                        className="pe-7s-plug"
                        title="pe-7s-plug"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-pen</Tooltip>}
                      >
                      <i
                        className="pe-7s-pen"
                        title="pe-7s-pen"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-right-arrow</Tooltip>}
                      >
                      <i
                        className="pe-7s-right-arrow"
                        title="pe-7s-right-arrow"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-paper-plane</Tooltip>}
                      >
                      <i
                        className="pe-7s-paper-plane"
                        title="pe-7s-paper-plane"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-delete-user</Tooltip>}
                      >
                      <i
                        className="pe-7s-delete-user"
                        title="pe-7s-delete-user"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-paint</Tooltip>}
                      >
                      <i
                        className="pe-7s-paint"
                        title="pe-7s-paint"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-bottom-arrow</Tooltip>}
                      >
                      <i
                        className="pe-7s-bottom-arrow"
                        title="pe-7s-bottom-arrow"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-notebook</Tooltip>}
                      >
                      <i
                        className="pe-7s-notebook"
                        title="pe-7s-notebook"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-note</Tooltip>}
                      >
                      <i
                        className="pe-7s-note"
                        title="pe-7s-note"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-next</Tooltip>}
                      >
                      <i
                        className="pe-7s-next"
                        title="pe-7s-next"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-news-paper</Tooltip>}
                      >
                      <i
                        className="pe-7s-news-paper"
                        title="pe-7s-news-paper"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-musiclist</Tooltip>}
                      >
                      <i
                        className="pe-7s-musiclist"
                        title="pe-7s-musiclist"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-music</Tooltip>}
                      >
                      <i
                        className="pe-7s-music"
                        title="pe-7s-music"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-mouse</Tooltip>}
                      >
                      <i
                        className="pe-7s-mouse"
                        title="pe-7s-mouse"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-more</Tooltip>}
                      >
                      <i
                        className="pe-7s-more"
                        title="pe-7s-more"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-moon</Tooltip>}
                      >
                      <i
                        className="pe-7s-moon"
                        title="pe-7s-moon"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-monitor</Tooltip>}
                      >
                      <i
                        className="pe-7s-monitor"
                        title="pe-7s-monitor"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-micro</Tooltip>}
                      >
                      <i
                        className="pe-7s-micro"
                        title="pe-7s-micro"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-menu</Tooltip>}
                      >
                      <i
                        className="pe-7s-menu"
                        title="pe-7s-menu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-map</Tooltip>}
                      >
                      <i
                        className="pe-7s-map"
                        title="pe-7s-map"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-map-marker</Tooltip>}
                      >
                      <i
                        className="pe-7s-map-marker"
                        title="pe-7s-map-marker"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-mail</Tooltip>}
                      >
                      <i
                        className="pe-7s-mail"
                        title="pe-7s-mail"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-mail-open</Tooltip>}
                      >
                      <i
                        className="pe-7s-mail-open"
                        title="pe-7s-mail-open"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-mail-open-file</Tooltip>}
                      >
                      <i
                        className="pe-7s-mail-open-file"
                        title="pe-7s-mail-open-file"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-magnet</Tooltip>}
                      >
                      <i
                        className="pe-7s-magnet"
                        title="pe-7s-magnet"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-loop</Tooltip>}
                      >
                      <i
                        className="pe-7s-loop"
                        title="pe-7s-loop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-look</Tooltip>}
                      >
                      <i
                        className="pe-7s-look"
                        title="pe-7s-look"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-lock</Tooltip>}
                      >
                      <i
                        className="pe-7s-lock"
                        title="pe-7s-lock"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-lintern</Tooltip>}
                      >
                      <i
                        className="pe-7s-lintern"
                        title="pe-7s-lintern"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-link</Tooltip>}
                      >
                      <i
                        className="pe-7s-link"
                        title="pe-7s-link"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-like</Tooltip>}
                      >
                      <i
                        className="pe-7s-like"
                        title="pe-7s-like"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-light</Tooltip>}
                      >
                      <i
                        className="pe-7s-light"
                        title="pe-7s-light"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-less</Tooltip>}
                      >
                      <i
                        className="pe-7s-less"
                        title="pe-7s-less"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-keypad</Tooltip>}
                      >
                      <i
                        className="pe-7s-keypad"
                        title="pe-7s-keypad"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-junk</Tooltip>}
                      >
                      <i
                        className="pe-7s-junk"
                        title="pe-7s-junk"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-info</Tooltip>}
                      >
                      <i
                        className="pe-7s-info"
                        title="pe-7s-info"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-home</Tooltip>}
                      >
                      <i
                        className="pe-7s-home"
                        title="pe-7s-home"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-help2</Tooltip>}
                      >
                      <i
                        className="pe-7s-help2"
                        title="pe-7s-help2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-help1</Tooltip>}
                      >
                      <i
                        className="pe-7s-help1"
                        title="pe-7s-help1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-graph3</Tooltip>}
                      >
                      <i
                        className="pe-7s-graph3"
                        title="pe-7s-graph3"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-graph2</Tooltip>}
                      >
                      <i
                        className="pe-7s-graph2"
                        title="pe-7s-graph2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-graph1</Tooltip>}
                      >
                      <i
                        className="pe-7s-graph1"
                        title="pe-7s-graph1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-graph</Tooltip>}
                      >
                      <i
                        className="pe-7s-graph"
                        title="pe-7s-graph"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-global</Tooltip>}
                      >
                      <i
                        className="pe-7s-global"
                        title="pe-7s-global"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-gleam</Tooltip>}
                      >
                      <i
                        className="pe-7s-gleam"
                        title="pe-7s-gleam"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-glasses</Tooltip>}
                      >
                      <i
                        className="pe-7s-glasses"
                        title="pe-7s-glasses"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-gift</Tooltip>}
                      >
                      <i
                        className="pe-7s-gift"
                        title="pe-7s-gift"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-folder</Tooltip>}
                      >
                      <i
                        className="pe-7s-folder"
                        title="pe-7s-folder"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-flag</Tooltip>}
                      >
                      <i
                        className="pe-7s-flag"
                        title="pe-7s-flag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-filter</Tooltip>}
                      >
                      <i
                        className="pe-7s-filter"
                        title="pe-7s-filter"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-file</Tooltip>}
                      >
                      <i
                        className="pe-7s-file"
                        title="pe-7s-file"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-expand1</Tooltip>}
                      >
                      <i
                        className="pe-7s-expand1"
                        title="pe-7s-expand1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-exapnd2</Tooltip>}
                      >
                      <i
                        className="pe-7s-exapnd2"
                        title="pe-7s-exapnd2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-edit</Tooltip>}
                      >
                      <i
                        className="pe-7s-edit"
                        title="pe-7s-edit"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-drop</Tooltip>}
                      >
                      <i
                        className="pe-7s-drop"
                        title="pe-7s-drop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-drawer</Tooltip>}
                      >
                      <i
                        className="pe-7s-drawer"
                        title="pe-7s-drawer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-download</Tooltip>}
                      >
                      <i
                        className="pe-7s-download"
                        title="pe-7s-download"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-display2</Tooltip>}
                      >
                      <i
                        className="pe-7s-display2"
                        title="pe-7s-display2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-display1</Tooltip>}
                      >
                      <i
                        className="pe-7s-display1"
                        title="pe-7s-display1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-diskette</Tooltip>}
                      >
                      <i
                        className="pe-7s-diskette"
                        title="pe-7s-diskette"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-date</Tooltip>}
                      >
                      <i
                        className="pe-7s-date"
                        title="pe-7s-date"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-cup</Tooltip>}
                      >
                      <i
                        className="pe-7s-cup"
                        title="pe-7s-cup"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-culture</Tooltip>}
                      >
                      <i
                        className="pe-7s-culture"
                        title="pe-7s-culture"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-crop</Tooltip>}
                      >
                      <i
                        className="pe-7s-crop"
                        title="pe-7s-crop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-credit</Tooltip>}
                      >
                      <i
                        className="pe-7s-credit"
                        title="pe-7s-credit"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-copy-file</Tooltip>}
                      >
                      <i
                        className="pe-7s-copy-file"
                        title="pe-7s-copy-file"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-config</Tooltip>}
                      >
                      <i
                        className="pe-7s-config"
                        title="pe-7s-config"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-compass</Tooltip>}
                      >
                      <i
                        className="pe-7s-compass"
                        title="pe-7s-compass"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-comment</Tooltip>}
                      >
                      <i
                        className="pe-7s-comment"
                        title="pe-7s-comment"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-coffee</Tooltip>}
                      >
                      <i
                        className="pe-7s-coffee"
                        title="pe-7s-coffee"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-cloud</Tooltip>}
                      >
                      <i
                        className="pe-7s-cloud"
                        title="pe-7s-cloud"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-clock</Tooltip>}
                      >
                      <i
                        className="pe-7s-clock"
                        title="pe-7s-clock"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-check</Tooltip>}
                      >
                      <i
                        className="pe-7s-check"
                        title="pe-7s-check"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-chat</Tooltip>}
                      >
                      <i
                        className="pe-7s-chat"
                        title="pe-7s-chat"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-cart</Tooltip>}
                      >
                      <i
                        className="pe-7s-cart"
                        title="pe-7s-cart"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-camera</Tooltip>}
                      >
                      <i
                        className="pe-7s-camera"
                        title="pe-7s-camera"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-call</Tooltip>}
                      >
                      <i
                        className="pe-7s-call"
                        title="pe-7s-call"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-calculator</Tooltip>}
                      >
                      <i
                        className="pe-7s-calculator"
                        title="pe-7s-calculator"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-browser</Tooltip>}
                      >
                      <i
                        className="pe-7s-browser"
                        title="pe-7s-browser"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-box2</Tooltip>}
                      >
                      <i
                        className="pe-7s-box2"
                        title="pe-7s-box2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-box1</Tooltip>}
                      >
                      <i
                        className="pe-7s-box1"
                        title="pe-7s-box1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-bookmarks</Tooltip>}
                      >
                      <i
                        className="pe-7s-bookmarks"
                        title="pe-7s-bookmarks"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-bicycle</Tooltip>}
                      >
                      <i
                        className="pe-7s-bicycle"
                        title="pe-7s-bicycle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-bell</Tooltip>}
                      >
                      <i
                        className="pe-7s-bell"
                        title="pe-7s-bell"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-battery</Tooltip>}
                      >
                      <i
                        className="pe-7s-battery"
                        title="pe-7s-battery"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-ball</Tooltip>}
                      >
                      <i
                        className="pe-7s-ball"
                        title="pe-7s-ball"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-back</Tooltip>}
                      >
                      <i
                        className="pe-7s-back"
                        title="pe-7s-back"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-attention</Tooltip>}
                      >
                      <i
                        className="pe-7s-attention"
                        title="pe-7s-attention"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-anchor</Tooltip>}
                      >
                      <i
                        className="pe-7s-anchor"
                        title="pe-7s-anchor"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-albums</Tooltip>}
                      >
                      <i
                        className="pe-7s-albums"
                        title="pe-7s-albums"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-alarm</Tooltip>}
                      >
                      <i
                        className="pe-7s-alarm"
                        title="pe-7s-alarm"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>pe-7s-airplay</Tooltip>}
                      >
                      <i
                        className="pe-7s-airplay"
                        title="pe-7s-airplay"
                      ></i>
                      </OverlayTrigger>
                    </li>
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

Pe7Icons.propTypes = {};

Pe7Icons.defaultProps = {};

export default Pe7Icons;
