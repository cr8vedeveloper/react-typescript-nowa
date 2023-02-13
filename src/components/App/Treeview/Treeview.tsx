import React from "react";
import { Breadcrumb,Card, Col, Row } from "react-bootstrap";
import  { FileSystemNavigator1, FileSystemNavigator2, BasicTreeviewexample1,BasicTreeviewexample2, BasicTreeview1,BasicTreeview2, TreeviewStyle, TreeviewStylecolord, TreeViewwithbutton } from './data';

const Treeview = () => (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">TREEVIEW</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Treeview
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <h3 className="card-title  mg-b-10">Basic Treeview</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <Row>
              {/* <!-- col --> */}
              <Col sm={12} xl={4} md={12} lg={6}>
                <span id="treeview1" className="tree">
                 < FileSystemNavigator1 />
                  < FileSystemNavigator2 />
                </span>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
                <span id="treeview2" className="tree">
                  <BasicTreeview1/>
                  <BasicTreeview2/>
                </span>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
                <span id="treeview3" className="tree">
                   <BasicTreeviewexample1/>
                  <BasicTreeviewexample2/>
                </span> 
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <h3 className="card-title  mg-b-10">Tree View Styles</h3>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in website apllication.
            </p>
            <Row>
              {/* <!-- col --> */}
              <Col sm={12} xl={4} md={12} lg={6}>
                 <span id="tree1" className="tree">
                  <TreeviewStyle/>
                </span> 
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
               <span id="tree2" className="tree">
               <TreeviewStylecolord/>
                </span> 
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col className="mt-4 mt-lg-0" lg={6} xl={4} md={12} sm={12}>
               <span id="tree3" className="tree">
               <TreeViewwithbutton/> 
                </span> 
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row --> */}
  </div>
);

Treeview.propTypes = {};

Treeview.defaultProps = {};

export default Treeview;
