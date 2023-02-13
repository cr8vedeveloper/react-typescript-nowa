import React from 'react';
import {
  Col,
  Row,
  Card,
  Breadcrumb,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


const SimpleLineIcons = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">SIMPLE LINE</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Icons
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Simple line icons
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
              <Col sm={12} lg={12} className=" mb-2">
                <h6 className="main-content-label">Simpleline Icons</h6>
                <p className="mb-2">
                  Simply beautiful open source icons. For more info&nbsp;
                  <a
                    href=" https://simplelineicons.github.io/"
                    target="blank"
                    className="text-primary "
                  >
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="si si-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-user</Tooltip>}
                      >
                      <i
                        className="si si-user"
                        title="si-user"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-peop</Tooltip>}
                      >
                      <i
                        className="si si-people"
                        title="si-people"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-user</Tooltip>}
                      >
                      <i
                        className="si si-user-female"
                        title="si-user-female"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-user</Tooltip>}
                      >
                      <i
                        className="si si-user-follow"
                        title="si-user-follow"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-user</Tooltip>}
                      >
                      <i
                        className="si si-user-following"
                        title="si-user-following"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-user</Tooltip>}
                      >
                      <i
                        className="si si-user-unfollow"
                        title="si-user-unfollow"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-logi</Tooltip>}
                      >
                      <i
                        className="si si-login"
                        title="si-login"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-logo</Tooltip>}
                      >
                      <i
                        className="si si-logout"
                        title="si-logout"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-emot</Tooltip>}
                      >
                      <i
                        className="si si-emotsmile"
                        title="si-emotsmile"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-phon</Tooltip>}
                      >
                      <i
                        className="si si-phone"
                        title="si-phone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-call</Tooltip>}
                      >
                      <i
                        className="si si-call-end"
                        title="si-call-end"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-call</Tooltip>}
                      >
                      <i
                        className="si si-call-in"
                        title="si-call-in"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-call</Tooltip>}
                      >
                      <i
                        className="si si-call-out"
                        title="si-call-out"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-map</Tooltip>}
                      >
                      <i
                        className="si si-map"
                        title="si-map"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-loca</Tooltip>}
                      >
                      <i
                        className="si si-location-pin"
                        title="si-location-pin"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-dire</Tooltip>}
                      >
                      <i
                        className="si si-direction"
                        title="si-direction"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-dire</Tooltip>}
                      >
                      <i
                        className="si si-directions"
                        title="si-directions"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-comp</Tooltip>}
                      >
                      <i
                        className="si si-compass"
                        title="si-compass"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-laye</Tooltip>}
                      >
                      <i
                        className="si si-layers"
                        title="si-layers"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-menu</Tooltip>}
                      >
                      <i
                        className="si si-menu"
                        title="si-menu"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-list</Tooltip>}
                      >
                      <i
                        className="si si-list"
                        title="si-list"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-opti</Tooltip>}
                      >
                      <i
                        className="si si-options-vertical"
                        title="si-options-vertical"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-opti</Tooltip>}
                      >
                      <i
                        className="si si-options"
                        title="si-options"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-down"
                        title="si-arrow-down"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-left"
                        title="si-arrow-left"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-right"
                        title="si-arrow-right"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-up"
                        title="si-arrow-up"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-up-circle"
                        title="si-arrow-up-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-left-circle"
                        title="si-arrow-left-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-right-circle"
                        title="si-arrow-right-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-arro</Tooltip>}
                      >
                      <i
                        className="si si-arrow-down-circle"
                        title="si-arrow-down-circle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-chec</Tooltip>}
                      >
                      <i
                        className="si si-check"
                        title="si-check"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cloc</Tooltip>}
                      >
                      <i
                        className="si si-clock"
                        title="si-clock"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-plus</Tooltip>}
                      >
                      <i
                        className="si si-plus"
                        title="si-plus"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-minu</Tooltip>}
                      >
                      <i
                        className="si si-minus"
                        title="si-minus"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-clos</Tooltip>}
                      >
                      <i
                        className="si si-close"
                        title="si-close"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-even</Tooltip>}
                      >
                      <i
                        className="si si-event"
                        title="si-event"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-excl</Tooltip>}
                      >
                      <i
                        className="si si-exclamation"
                        title="si-exclamation"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-orga</Tooltip>}
                      >
                      <i
                        className="si si-organization"
                        title="si-organization"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-trop</Tooltip>}
                      >
                      <i
                        className="si si-trophy"
                        title="si-trophy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-scre</Tooltip>}
                      >
                      <i
                        className="si si-screen-smartphone"
                        title="si-screen-smartphone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-scre</Tooltip>}
                      >
                      <i
                        className="si si-screen-desktop"
                        title="si-screen-desktop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-plan</Tooltip>}
                      >
                      <i
                        className="si si-plane"
                        title="si-plane"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-note</Tooltip>}
                      >
                      <i
                        className="si si-notebook"
                        title="si-notebook"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-must</Tooltip>}
                      >
                      <i
                        className="si si-mustache"
                        title="si-mustache"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-mous</Tooltip>}
                      >
                      <i
                        className="si si-mouse"
                        title="si-mouse"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-magn</Tooltip>}
                      >
                      <i
                        className="si si-magnet"
                        title="si-magnet"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-ener</Tooltip>}
                      >
                      <i
                        className="si si-energy"
                        title="si-energy"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-disc</Tooltip>}
                      >
                      <i
                        className="si si-disc"
                        title="si-disc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-curs</Tooltip>}
                      >
                      <i
                        className="si si-cursor"
                        title="si-cursor"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-curs</Tooltip>}
                      >
                      <i
                        className="si si-cursor-move"
                        title="si-cursor-move"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-crop</Tooltip>}
                      >
                      <i
                        className="si si-crop"
                        title="si-crop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-chem</Tooltip>}
                      >
                      <i
                        className="si si-chemistry"
                        title="si-chemistry"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-spee</Tooltip>}
                      >
                      <i
                        className="si si-speedometer"
                        title="si-speedometer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-shie</Tooltip>}
                      >
                      <i
                        className="si si-shield"
                        title="si-shield"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-scre</Tooltip>}
                      >
                      <i
                        className="si si-screen-tablet"
                        title="si-screen-tablet"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-magi</Tooltip>}
                      >
                      <i
                        className="si si-magic-wand"
                        title="si-magic-wand"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-hour</Tooltip>}
                      >
                      <i
                        className="si si-hourglass"
                        title="si-hourglass"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-grad</Tooltip>}
                      >
                      <i
                        className="si si-graduation"
                        title="si-graduation"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-ghos</Tooltip>}
                      >
                      <i
                        className="si si-ghost"
                        title="si-ghost"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-game</Tooltip>}
                      >
                      <i
                        className="si si-game-controller"
                        title="si-game-controller"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-fire</Tooltip>}
                      >
                      <i
                        className="si si-fire"
                        title="si-fire"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-eyeg</Tooltip>}
                      >
                      <i
                        className="si si-eyeglass"
                        title="si-eyeglass"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-enve</Tooltip>}
                      >
                      <i
                        className="si si-envelope-open"
                        title="si-envelope-open"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-enve</Tooltip>}
                      >
                      <i
                        className="si si-envelope-letter"
                        title="si-envelope-letter"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bell</Tooltip>}
                      >
                      <i
                        className="si si-bell"
                        title="si-bell"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-badg</Tooltip>}
                      >
                      <i
                        className="si si-badge"
                        title="si-badge"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-anch</Tooltip>}
                      >
                      <i
                        className="si si-anchor"
                        title="si-anchor"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-wall</Tooltip>}
                      >
                      <i
                        className="si si-wallet"
                        title="si-wallet"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-vect</Tooltip>}
                      >
                      <i
                        className="si si-vector"
                        title="si-vector"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-spee</Tooltip>}
                      >
                      <i
                        className="si si-speech"
                        title="si-speech"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-puzz</Tooltip>}
                      >
                      <i
                        className="si si-puzzle"
                        title="si-puzzle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-prin</Tooltip>}
                      >
                      <i
                        className="si si-printer"
                        title="si-printer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-pres</Tooltip>}
                      >
                      <i
                        className="si si-present"
                        title="si-present"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-play</Tooltip>}
                      >
                      <i
                        className="si si-playlist"
                        title="si-playlist"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-pin</Tooltip>}
                      >
                      <i
                        className="si si-pin"
                        title="si-pin"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-pict</Tooltip>}
                      >
                      <i
                        className="si si-picture"
                        title="si-picture"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-hand</Tooltip>}
                      >
                      <i
                        className="si si-handbag"
                        title="si-handbag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-glob</Tooltip>}
                      >
                      <i
                        className="si si-globe-alt"
                        title="si-globe-alt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-glob</Tooltip>}
                      >
                      <i
                        className="si si-globe"
                        title="si-globe"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-fold</Tooltip>}
                      >
                      <i
                        className="si si-folder-alt"
                        title="si-folder-alt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-fold</Tooltip>}
                      >
                      <i
                        className="si si-folder"
                        title="si-folder"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-film</Tooltip>}
                      >
                      <i
                        className="si si-film"
                        title="si-film"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-feed</Tooltip>}
                      >
                      <i
                        className="si si-feed"
                        title="si-feed"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-drop</Tooltip>}
                      >
                      <i
                        className="si si-drop"
                        title="si-drop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-draw</Tooltip>}
                      >
                      <i
                        className="si si-drawer"
                        title="si-drawer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-docs</Tooltip>}
                      >
                      <i
                        className="si si-docs"
                        title="si-docs"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-doc</Tooltip>}
                      >
                      <i
                        className="si si-doc"
                        title="si-doc"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-diam</Tooltip>}
                      >
                      <i
                        className="si si-diamond"
                        title="si-diamond"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cup</Tooltip>}
                      >
                      <i
                        className="si si-cup"
                        title="si-cup"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-calc</Tooltip>}
                      >
                      <i
                        className="si si-calculator"
                        title="si-calculator"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bubb</Tooltip>}
                      >
                      <i
                        className="si si-bubbles"
                        title="si-bubbles"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-brie</Tooltip>}
                      >
                      <i
                        className="si si-briefcase"
                        title="si-briefcase"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-book</Tooltip>}
                      >
                      <i
                        className="si si-book-open"
                        title="si-book-open"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bask</Tooltip>}
                      >
                      <i
                        className="si si-basket-loaded"
                        title="si-basket-loaded"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bask</Tooltip>}
                      >
                      <i
                        className="si si-basket"
                        title="si-basket"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bag</Tooltip>}
                      >
                      <i
                        className="si si-bag"
                        title="si-bag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-acti</Tooltip>}
                      >
                      <i
                        className="si si-action-undo"
                        title="si-action-undo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-acti</Tooltip>}
                      >
                      <i
                        className="si si-action-redo"
                        title="si-action-redo"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-wren</Tooltip>}
                      >
                      <i
                        className="si si-wrench"
                        title="si-wrench"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-umbr</Tooltip>}
                      >
                      <i
                        className="si si-umbrella"
                        title="si-umbrella"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-tras</Tooltip>}
                      >
                      <i
                        className="si si-trash"
                        title="si-trash"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-tag</Tooltip>}
                      >
                      <i
                        className="si si-tag"
                        title="si-tag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-supp</Tooltip>}
                      >
                      <i
                        className="si si-support"
                        title="si-support"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-fram</Tooltip>}
                      >
                      <i
                        className="si si-frame"
                        title="si-frame"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-size</Tooltip>}
                      >
                      <i
                        className="si si-size-fullscreen"
                        title="si-size-fullscreen"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-size</Tooltip>}
                      >
                      <i
                        className="si si-size-actual"
                        title="si-size-actual"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-shuf</Tooltip>}
                      >
                      <i
                        className="si si-shuffle"
                        title="si-shuffle"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-shar</Tooltip>}
                      >
                      <i
                        className="si si-share-alt"
                        title="si-share-alt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-shar</Tooltip>}
                      >
                      <i
                        className="si si-share"
                        title="si-share"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-rock</Tooltip>}
                      >
                      <i
                        className="si si-rocket"
                        title="si-rocket"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-ques</Tooltip>}
                      >
                      <i
                        className="si si-question"
                        title="si-question"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-pie-</Tooltip>}
                      >
                      <i
                        className="si si-pie-chart"
                        title="si-pie-chart"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-penc</Tooltip>}
                      >
                      <i
                        className="si si-pencil"
                        title="si-pencil"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-note</Tooltip>}
                      >
                      <i
                        className="si si-note"
                        title="si-note"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-loop</Tooltip>}
                      >
                      <i
                        className="si si-loop"
                        title="si-loop"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-home</Tooltip>}
                      >
                      <i
                        className="si si-home"
                        title="si-home"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-grid</Tooltip>}
                      >
                      <i
                        className="si si-grid"
                        title="si-grid"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-grap</Tooltip>}
                      >
                      <i
                        className="si si-graph"
                        title="si-graph"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-micr</Tooltip>}
                      >
                      <i
                        className="si si-microphone"
                        title="si-microphone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-musi</Tooltip>}
                      >
                      <i
                        className="si si-music-tone-alt"
                        title="si-music-tone-alt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-musi</Tooltip>}
                      >
                      <i
                        className="si si-music-tone"
                        title="si-music-tone"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-earp</Tooltip>}
                      >
                      <i
                        className="si si-earphones-alt"
                        title="si-earphones-alt"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-earp</Tooltip>}
                      >
                      <i
                        className="si si-earphones"
                        title="si-earphones"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-equa</Tooltip>}
                      >
                      <i
                        className="si si-equalizer"
                        title="si-equalizer"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-like</Tooltip>}
                      >
                      <i
                        className="si si-like"
                        title="si-like"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-disl</Tooltip>}
                      >
                      <i
                        className="si si-dislike"
                        title="si-dislike"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cont</Tooltip>}
                      >
                      <i
                        className="si si-control-start"
                        title="si-control-start"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cont</Tooltip>}
                      >
                      <i
                        className="si si-control-rewind"
                        title="si-control-rewind"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cont</Tooltip>}
                      >
                      <i
                        className="si si-control-play"
                        title="si-control-play"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cont</Tooltip>}
                      >
                      <i
                        className="si si-control-pause"
                        title="si-control-pause"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cont</Tooltip>}
                      >
                      <i
                        className="si si-control-forward"
                        title="si-control-forward"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cont</Tooltip>}
                      >
                      <i
                        className="si si-control-end"
                        title="si-control-end"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-volu</Tooltip>}
                      >
                      <i
                        className="si si-volume-1"
                        title="si-volume-1"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-volu</Tooltip>}
                      >
                      <i
                        className="si si-volume-2"
                        title="si-volume-2"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-volu</Tooltip>}
                      >
                      <i
                        className="si si-volume-off"
                        title="si-volume-off"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cale</Tooltip>}
                      >
                      <i
                        className="si si-calendar"
                        title="si-calendar"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bulb</Tooltip>}
                      >
                      <i
                        className="si si-bulb"
                        title="si-bulb"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-char</Tooltip>}
                      >
                      <i
                        className="si si-chart"
                        title="si-chart"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-ban</Tooltip>}
                      >
                      <i
                        className="si si-ban"
                        title="si-ban"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-bubb</Tooltip>}
                      >
                      <i
                        className="si si-bubble"
                        title="si-bubble"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-camr</Tooltip>}
                      >
                      <i
                        className="si si-camrecorder"
                        title="si-camrecorder"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-came</Tooltip>}
                      >
                      <i
                        className="si si-camera"
                        title="si-camera"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-clou</Tooltip>}
                      >
                      <i
                        className="si si-cloud-download"
                        title="si-cloud-download"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-clou</Tooltip>}
                      >
                      <i
                        className="si si-cloud-upload"
                        title="si-cloud-upload"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-enve</Tooltip>}
                      >
                      <i
                        className="si si-envelope"
                        title="si-envelope"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-eye</Tooltip>}
                      >
                      <i
                        className="si si-eye"
                        title="si-eye"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-flag</Tooltip>}
                      >
                      <i
                        className="si si-flag"
                        title="si-flag"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-hear</Tooltip>}
                      >
                      <i
                        className="si si-heart"
                        title="si-heart"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-info</Tooltip>}
                      >
                      <i
                        className="si si-info"
                        title="si-info"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-key</Tooltip>}
                      >
                      <i
                        className="si si-key"
                        title="si-key"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-link</Tooltip>}
                      >
                      <i
                        className="si si-link"
                        title="si-link"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-lock</Tooltip>}
                      >
                      <i
                        className="si si-lock"
                        title="si-lock"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-lock</Tooltip>}
                      >
                      <i
                        className="si si-lock-open"
                        title="si-lock-open"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-magn</Tooltip>}
                      >
                      <i
                        className="si si-magnifier"
                        title="si-magnifier"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-magn</Tooltip>}
                      >
                      <i
                        className="si si-magnifier-add"
                        title="si-magnifier-add"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-magn</Tooltip>}
                      >
                      <i
                        className="si si-magnifier-remove"
                        title="si-magnifier-remove"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-pape</Tooltip>}
                      >
                      <i
                        className="si si-paper-clip"
                        title="si-paper-clip"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-pape</Tooltip>}
                      >
                      <i
                        className="si si-paper-plane"
                        title="si-paper-plane"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-powe</Tooltip>}
                      >
                      <i
                        className="si si-power"
                        title="si-power"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-refr</Tooltip>}
                      >
                      <i
                        className="si si-refresh"
                        title="si-refresh"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-relo</Tooltip>}
                      >
                      <i
                        className="si si-reload"
                        title="si-reload"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-sett</Tooltip>}
                      >
                      <i
                        className="si si-settings"
                        title="si-settings"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-star</Tooltip>}
                      >
                      <i
                        className="si si-star"
                        title="si-star"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-symb</Tooltip>}
                      >
                      <i
                        className="si si-symbol-female"
                        title="si-symbol-female"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-symb</Tooltip>}
                      >
                      <i
                        className="si si-symbol-male"
                        title="si-symbol-male"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-targ</Tooltip>}
                      >
                      <i
                        className="si si-target"
                        title="si-target"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-cred</Tooltip>}
                      >
                      <i
                        className="si si-credit-card"
                        title="si-credit-card"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-payp</Tooltip>}
                      >
                      <i
                        className="si si-paypal"
                        title="si-paypal"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-tumblr"
                        title="si-social-tumblr"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-twitter"
                        title="si-social-twitter"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-facebook"
                        title="si-social-facebook"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-instagram"
                        title="si-social-instagram"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-linkedin"
                        title="si-social-linkedin"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-pinterest"
                        title="si-social-pinterest"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-github"
                        title="si-social-github"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-google"
                        title="si-social-google"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-reddit"
                        title="si-social-reddit"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-skype"
                        title="si-social-skype"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-dribbble"
                        title="si-social-dribbble"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-behance"
                        title="si-social-behance"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-foursqare"
                        title="si-social-foursqare"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-soundcloud"
                        title="si-social-soundcloud"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-spotify"
                        title="si-social-spotify"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-stumbleupon"
                        title="si-social-stumbleupon"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-youtube"
                        title="si-social-youtube"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-dropbox"
                        title="si-social-dropbox"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-vkontakte"
                        title="si-social-vkontakte"
                      ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si-soci</Tooltip>}
                      >
                      <i
                        className="si si-social-steam"
                        title="si-social-steam"
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

SimpleLineIcons.propTypes = {};

SimpleLineIcons.defaultProps = {};

export default SimpleLineIcons;
