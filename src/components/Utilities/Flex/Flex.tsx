import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';



const Flex = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">FLEX</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15"href='#'>
            Utilities
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
            Flex
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row  --> */}
    <Row className=" row-sm">
      <Col md={12}xl={12}xs={12} sm={12}>
        {/* <!--div--> */}
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Enable Flex</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div className="d-flex pd-10 bg-gray-200">I'm a flexbox container!</div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Direction</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex flex-row border p-3 br-5  mg-b-20">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row-reverse border p-3 br-5 ">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Justify Content</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex flex-row justify-content-start mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-end mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-center mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-between mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-around  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Align Items</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex flex-row align-items-start ht-100 mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-center  ht-100 mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-end ht-100 mg-b-20 border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
              <div className="d-flex flex-row align-items-stretch ht-100  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item 1</div>
                <div className="pd-10 bg-gray-300">Flex item 2</div>
                <div className="pd-10 bg-gray-400">Flex item 3</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Align Self</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex flex-row ht-100 mg-b-20  border p-3 br-5">
                <div className="pd-10 bg-gray-200 align-self-start">
                  Flex item 1
                </div>
                <div className="pd-10 bg-gray-300 align-self-center">
                  Flex item 2
                </div>
                <div className="pd-10 bg-gray-400 align-self-end">Flex item 3</div>
                <div className="pd-10 bg-gray-300 align-self-stretch">
                  Flex item 4
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Fill</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex  border p-3 br-5">
                <div className="pd-10 bg-gray-200 flex-fill">
                  Flex item with a lot of content
                </div>
                <div className="pd-10 bg-gray-300 flex-fill">Flex item</div>
                <div className="pd-10 bg-gray-400 flex-fill">Flex item</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Grow and Shrink</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex  border p-3 br-5">
                <div className="pd-10 bg-gray-200 flex-grow-1">Flex item</div>
                <div className="pd-10 bg-gray-300">Flex item</div>
                <div className="pd-10 bg-gray-400">Third flex item</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}

      {/* <!--div--> */}
      <Col md={12}xl={12}xs={12} sm={12}>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Auto Margins</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <div>
              <div className="d-flex  border p-3 br-5">
                <div className="pd-10 bg-gray-200">Flex item</div>
                <div className="pd-10 bg-gray-300">Flex item</div>
                <div className="pd-10 bg-gray-400 mg-l-auto">Third flex item</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <!--/div--> */}
    </Row>
    {/* <!-- row closed --> */}
  </div>
);

Flex.propTypes = {};

Flex.defaultProps = {};

export default Flex;
