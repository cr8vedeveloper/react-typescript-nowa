import React from 'react';
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';

const Margin = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">MARGINS</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Utilities
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Margins
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
            <h3 className="card-title  mg-b-10">Margin-top Values</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="d-flex">
              <div className="wd-150 ht-80 bg-gray-200 me-3"></div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-t-20 me-3">
                .mg-t-20
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-t-40 me-3">
                .mg-t-40
              </div>
            </div>
            <div className="table-responsive mt-3">
              <Table className="table main-table-reference mg-t-10 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNamees</b>
                    </td>
                    <td>
                      <code>.mg-t-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Margin-left Values</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="d-flex">
              <div className="wd-150 ht-80 bg-gray-200 br-5"></div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-l-20">
                .mg-l-20
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-l-40">
                .mg-l-40
              </div>
            </div>
            <div className="table-responsive mt-3">
              <Table className="table main-table-reference mg-t-10 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNamees</b>
                    </td>
                    <td>
                      <code>.mg-l-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Margin-right Values</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="d-flex">
              <div className="wd-150 d-flex align-items-center justify-content-center ht-80 bg-gray-200 mg-r-10">
                .mg-r-10
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-r-40">
                .mg-r-40
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-r-20">
                .mg-r-20
              </div>
            </div>
            <div className="table-responsive mt-3">
              <Table className="table main-table-reference mg-t-10 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNamees</b>
                    </td>
                    <td>
                      <code>.mg-r-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Margin-bottom Values</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <div className="d-flex">
                <div className="wd-150 ht-80 bg-gray-200 me-3"></div>
                <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-b-20 me-3">
                  .mg-b-20
                </div>
                <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-200 mg-b-40 me-3">
                  .mg-b-40
                </div>
              </div>
              <Table className="table main-table-reference mg-t-10 mb-0">
                <tbody>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>ClassNamees</b>
                    </td>
                    <td>
                      <code>.mg-b-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-gray-100 wd-20p">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
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
            <h3 className="card-title  mg-b-10">Media Query Margin</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference mg-t-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .mg-[breakpoint]-t-[value]
                        <br />
                        .mg-[breakpoint]-r-[value]
                        <br />
                        .mg-[breakpoint]-b-[value]
                        <br />
                        .mg-[breakpoint]-l-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: the margin value (refer to code above)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      <Col md={12} xl={12} xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Auto Margin</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="table-responsive">
              <Table className="table main-table-reference  mg-t-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">ClassName</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.mg-t-auto</code>
                    </td>
                    <td>Set a top margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-r-auto</code>
                    </td>
                    <td>Set a right margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-b-auto</code>
                    </td>
                    <td>Set a bottom margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-l-auto</code>
                    </td>
                    <td>Set a left margin to auto</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}
    </Row>
    {/* <!-- /row --> */}
  </div>
);

Margin.propTypes = {};

Margin.defaultProps = {};

export default Margin;
