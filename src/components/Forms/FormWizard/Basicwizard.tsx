import React from "react";
import { Col, Form, FormGroup, InputGroup, Row, Table,Card } from "react-bootstrap";




//Basic start
const Wizard = ({ step: currentIndex, ...props }:any) => {
  const steps:any = React.Children.toArray(props.children);
  const prevStep:any = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep:any = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div>
      
      <nav className="btn-group steps basicsteps">
        {steps.map((step:any, index:any) => (
          <Button
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
          >
            <span className="number me-2 ">{step.props.number}</span>
            <i>{step.props.title}</i>
          </Button>
        ))}
      </nav>

      {steps[currentIndex]}

      <div className=" p-3 d-flex justify-content-between  ">
        <Button
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
const Step = ({ children }:any) => children;

function getClsNavBtn(active:any) {
  return "btn" + (active ? " active" : "");
}
function Button({ visible, ...props }:any) {
  return (
    
      <button
        className={visible ? "btn btn-primary " : "invisible"}
        {...props}
      />
    
  );
}

export class Basicwizard extends React.Component {
  state = { step: 0 };

  handleStep = (step:any) => {
    this.setState({ step });
  };

  render() {
    return (
      <Wizard step={this.state.step} onChange={this.handleStep}>
        <Step title="Personal Information" number="1">
          <section className="card-body Basicwizard ">
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                required
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Phone Number</Form.Label>
              <Form.Control
                type="number"
                className="form-control"
                required
                placeholder="Number"
              />
            </FormGroup>
            <div className="control-group form-group mb-0">
              <Form.Label className="form-label">Address</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Address"
              />
            </div>
          </section>
        </Step>

        <Step title="Billing Information" number="2">
          <section className="card-body Basicwizard ">
            <div className="table-responsive mg-t-20">
              <Table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$792.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Totals</span>
                    </td>
                    <td className="text-end text-muted">
                      <span>$792.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Order Total</span>
                    </td>
                    <td>
                      <h2 className="price text-end mb-0">$792.00</h2>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </Step>
        <Step title="Payment Details" number="3">
          <section className="card-body Basicwizard ">
            <FormGroup className="form-group">
              <Form.Label className="form-label">CardHolder Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                id="name1"
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="form-label">Card number</Form.Label>
              <InputGroup className="input-group">
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-append">
                  <Button
                    variant=""
                    className="btn btn-secondary"
                    type="button"
                  >
                    <i className="fab fa-cc-visa"></i> &nbsp;{" "}
                    <i className="fab fa-cc-amex"></i> &nbsp;
                    <i className="fab fa-cc-mastercard"></i>
                  </Button>
                </span>
              </InputGroup>
            </FormGroup>
            <Row>
              <Col sm={8}>
                <FormGroup className="form-group mb-sm-0">
                  <Form.Label className="form-label">Expiration</Form.Label>
                  <InputGroup className="input-group">
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup className="form-group mb-0">
                  <Form.Label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Step>
      </Wizard>
    );
  }
}
//Basic end
