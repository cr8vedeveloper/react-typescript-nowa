import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import {  Basicwizard  } from './Basicwizard';
import {Vertical} from "./Verticalwizard"
import {WizardForm} from "./Formvalidationwizard"
const FormWizard = () =>{

return (
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">FORM WIZARD</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Forms
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Form Wizard
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Basic Content Wizard
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>

            <div id="wizard1" className="border">
              <Basicwizard  />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Basic Wizard With Validation
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <div id="wizard2">
              <WizardForm/>
              
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Vertical Orientation Wizard
            </div>
            <p className="mg-b-20">
              It is Very Easy to Customize and it uses in your website
              apllication.
            </p>
            <div id="wizard3">
              <Vertical/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}
  </div>
);};

FormWizard.propTypes = {};

FormWizard.defaultProps = {};

export default FormWizard;
