import React from 'react';
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';

const Width = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">WIDTHS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Utilities
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Width
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12} xl={12} xs={12} sm={12}>
        {/* <!--div--> */}
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Width Values</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="d-md-flex mb-3">
              <div className="d-flex align-items-center justify-content-center wd-200 ht-100 bg-gray-200 mt-4 mt-md-0">
                .wd-200
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-100 bg-gray-200 ms-md-4 mt-4 mt-md-0">
                .wd-150
              </div>
              <div className="d-flex align-items-center justify-content-center wd-100 ht-100 bg-gray-200 ms-md-4 mt-4 mt-md-0">
                .wd-100
              </div>
              <div className="d-flex align-items-center justify-content-center wd-80 ht-100 bg-gray-200 ms-md-4 mt-4 mt-md-0">
                .wd-80
              </div>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Regular Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Bigger Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>
                      150 | 200 | 250 | 300 | ... | 1000 &nbsp; (step of 50)
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Percentage Width</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]p</code>
                    </td>
                    <td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Media Query Width</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[size]-[value]</code>
                    </td>
                    <td rowSpan={2}>
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the width value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.wd-[size]-[value]p</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Extra Width ClassNamees</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference text-nowrap mg-t-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-100v</code>
                    </td>
                    <td>Set a width to an element based on viewport width.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.wd-auto</code>
                    </td>
                    <td>Set an auto width to an element.</td>
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

Width.propTypes = {};

Width.defaultProps = {};

export default Width;
