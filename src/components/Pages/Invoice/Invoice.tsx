import React from 'react';
import { Breadcrumb, Button, Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 const print = () => {
   window.print();
 };
const Invoice = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">INVOICE</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">Pages</Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Invoice
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={12} lg={12}>
        <Card className=" custom-card">
          <Card.Body>
            <div className="d-lg-flex">
              <h6 className="main-content-label mb-1">
                <span className="d-flex mb-4">
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`}>
                    <img
                      src={require("../../../assets/img/brand/favicon.png")}
                      className="sign-favicon ht-40"
                      alt="logo"
                    />
                  </Link>
                </span>
              </h6>
              <div className="ms-auto">
                <p className="mb-1">
                  <span className="font-weight-bold">Invoice No : #000321</span>
                </p>
              </div>
            </div>
            <Row className="row-sm">
              <Col lg={6}>
                <p className="h3">Invoice Form:</p>
                <address>
                  Street Address
                  <br />
                  State, City
                  <br />
                  Region, Postal Code
                  <br />
                  yourdomain@example.com
                </address>
              </Col>
              <Col lg={6} className=" text-end">
                <p className="h3">Invoice To:</p>
                <address>
                  Street Address
                  <br />
                  State, City
                  <br />
                  Region, Postal Code
                  <br />
                  ypurdomain@example.com
                </address>
                <div className="">
                  <p className="mb-1">
                    <span className="font-weight-bold">Invoice Date :</span>
                  </p>
                  <address>01st November 2020</address>
                </div>
              </Col>
            </Row>
            <div className="table-responsive mg-t-40">
              <Table className="table table-invoice table-bordered">
                <thead>
                  <tr>
                    <th className="wd-20p">Product</th>
                    <th className="wd-40p">Description</th>
                    <th className="tx-center">QNTY</th>
                    <th className="tx-right">Unit</th>
                    <th className="tx-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Logo Creation</td>
                    <td className="tx-12">Logo and business cards design</td>
                    <td className="tx-center">2</td>
                    <td className="tx-right">$60.00</td>
                    <td className="tx-right">$120.00</td>
                  </tr>
                  <tr>
                    <td>Online Store Design & Development</td>
                    <td className="tx-12">
                      Design/Development for all popular modern browsers
                    </td>
                    <td className="tx-center">3</td>
                    <td className="tx-right">$80.00</td>
                    <td className="tx-right">$240.00</td>
                  </tr>
                  <tr>
                    <td>App Design</td>
                    <td className="tx-12">Promotional mobile application</td>
                    <td className="tx-center">1</td>
                    <td className="tx-right">$40.00</td>
                    <td className="tx-right">$40.00</td>
                  </tr>
                  <tr>
                    <td className="valign-middle" 
                    colSpan={2} rowSpan={4}
                    >
                      <div className="invoice-notes">
                        <label className="main-content-label tx-13">
                          Notes
                        </label>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                      {/*<!-- invoice-notes --> */}
                    </td>
                    <td className="tx-right">Sub-Total</td>
                    <td className="tx-right"colSpan={2}>
                      $400.00
                    </td>
                  </tr>
                  <tr>
                    <td className="tx-right">Tax</td>
                    <td className="tx-right"colSpan={2}>
                      3%
                    </td>
                  </tr>
                  <tr>
                    <td className="tx-right">Discount</td>
                    <td className="tx-right"colSpan={2}>
                      10%
                    </td>
                  </tr>
                  <tr>
                    <td className="tx-right tx-uppercase tx-bold tx-inverse">
                      Total Due
                    </td>
                    <td className="tx-right"colSpan={2}>
                      <h4 className="tx-bold">$450.00</h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Footer className=" text-end">
            <Button variant='' type="button" className="btn ripple btn-primary mb-1 me-2">
              <i className="fe fe-credit-card me-1"></i> Pay Invoice
            </Button>
            <Button
            variant=''
              type="button"
              className="btn ripple btn-secondary mb-1 me-2"
            >
              <i className="fe fe-send me-1"></i> Send Invoice
            </Button>
            <Button variant=''
              type="button"
              className="btn ripple btn-info mb-1 me-2"
              onClick={print}
            >
              <i className="fe fe-printer me-1"></i> Print Invoice
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

Invoice.propTypes = {};

Invoice.defaultProps = {};

export default Invoice;
