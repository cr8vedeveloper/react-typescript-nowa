import React from 'react';
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';

const Display = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">DISPLAYS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Utilities
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Displays
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12}xl={12}xs={12}sm={12}>
        {/* <!--div--> */}
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Basic Display</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mb-0 mg-t-5">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-inline</code>
                    </td>
                    <td>Set an inline display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-inline-block</code>
                    </td>
                    <td>Set an inline-block display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Set a block display property of an element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12}xl={12}xs={12}sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Hiding Elements</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference mb-0 mg-t-5">
                <thead>
                  <tr>
                    <th className="wd-40p">ClassName</th>
                    <th className="wd-60p">Screen Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-none</code>
                    </td>
                    <td>Hidden on all</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-sm-block</code>
                    </td>
                    <td>Hidden only on xs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-sm-none .d-md-block</code>
                    </td>
                    <td>Hidden only on sm</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-md-none .d-lg-block</code>
                    </td>
                    <td>Hidden only on md</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-lg-none .d-xl-block</code>
                    </td>
                    <td>Hidden only on lg</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-xl-none</code>
                    </td>
                    <td>Hidden only on xl</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-xxl-none</code>
                    </td>
                    <td>Hidden only on xxl</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Visible on all</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block .d-sm-none</code>
                    </td>
                    <td>Visible only on xs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-sm-block .d-md-none</code>
                    </td>
                    <td>Visible only on sm</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-md-block .d-lg-none</code>
                    </td>
                    <td>Visible only on md</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-lg-block .d-xl-none</code>
                    </td>
                    <td>Visible only on lg</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-xl-block</code>
                    </td>
                    <td>Visible only on xl</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-xxl-block</code>
                    </td>
                    <td>Visible only on xxl</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

Display.propTypes = {};

Display.defaultProps = {};

export default Display;
