import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';

const EmptyPage = () => (
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">EMPTY PAGE</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Empty Page
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb -->

					<!-- row --> */}
      <Row>
        <Col md={12} xl={12} xs={12} sm={12} >
          <Card>
            <Card.Body>
              <div>
                <h6>Type text here.....</h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
);

EmptyPage.propTypes = {};

EmptyPage.defaultProps = {};

export default EmptyPage;
