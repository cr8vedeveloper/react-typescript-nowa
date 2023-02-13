import React,{useState} from "react";
import { Col, Form, FormGroup, InputGroup, Row, Table,Card,Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";
import {
  DropzoneAreaBase
} from "material-ui-dropzone";
const Wizardhor = ({ step: currentIndex, ...props }:any) => {
    const steps:any = React.Children.toArray(props.children);
    const prevStep:any = currentIndex !== 0 && steps[currentIndex - 1].props;
    const nextStep:any =
      currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;
  
    return (
      <div className="row border">
        <nav className=" steps col-sm-3 bordera">
          {steps.map((step:any, index:any) => (
            <Buttons
              key={step.props.number}
              onClick={() => props.onChange(index)}
              className={getClsNavBtns(index === currentIndex)}
            >
              <span className="number me-2">{step.props.number}</span>
              <i>{step.props.title}</i>
            </Buttons>
          ))}
        </nav>
  
        {steps[currentIndex]}
        <div className="col-sm-3 bordera"></div>
        <div className=" p-3 d-flex justify-content-between col-sm-9 ">
          <Buttons
            visible={prevStep}
            onClick={() => props.onChange(currentIndex - 1)}
            title={prevStep.description}
          >
            Back
          </Buttons>
          <Buttons
            visible={nextStep}
            onClick={() => props.onChange(currentIndex + 1)}
            title={nextStep.description}
          >
            Next
          </Buttons>
        </div>
      </div>
    );
  };
  const Steps = ({ children }:any) => children;
  
  function getClsNavBtns(active:any) {
    return "btn horwizard" + (active ? " active" : "");
  }
  function Buttons({ visible, ...props }:any) {
    return (
      <button className={visible ? "btn btn-primary " : "invisible"} {...props} />
    );
  }
  const Drop =()=>{
   const [selectedFiles, setselectedFiles] = useState([]);
   function formatBytes(bytes:any, decimals = 2) {
     if (bytes === 0) return "0 Bytes";
     const k = 1024;
     const dm = decimals < 0 ? 0 : decimals;
     const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  
     const i = Math.floor(Math.log(bytes) / Math.log(k));
     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
   }
   function handleAcceptedFiles(files:any) {
     files.map((file:any) =>
       Object.assign(file, {
         preview: URL.createObjectURL(file),
         formattedSize: formatBytes(file.size),
       })
     );
     setselectedFiles(files);
   }
   return (
     <React.Fragment>
       <Dropzone
         onDrop={(acceptedFiles) => {
           handleAcceptedFiles(acceptedFiles);
         }}
       >
         {({ getRootProps, getInputProps }) => (
           <div className="dropzone dz-clickable">
             <div className="dz-message needsclick" {...getRootProps()}>
               <div className="mb-2 mt-5 dropzoneicon ">
                 <i className="mdi mdi-apple-mobileme"></i>
               </div>
               <p style={{color: "#9393b5"}}>Drop files here or click to upload.</p>
             </div>
           </div>
         )}
       </Dropzone>
       <div className="list-unstyled mb-0" id="file-previews">
         {selectedFiles.map((f:any, i:any) => {
           return (
             <Card
               className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
               key={i + "-file"}
             >
               <div className="p-2">
                 <Row className="align-items-center">
                   <Col className="col-auto">
                     <img
                       data-dz-thumbnail=""
                       height="80"
                       className="avatar-sm rounded bg-light"
                       alt={f.name}
                       src={f.preview}
                     />
                   </Col>
                   <Col>
                     <Link to="#" className="text-muted font-weight-bold">
                       {f.name}
                     </Link>
                     <p className="mb-0">
                       <strong>{f.formattedSize}</strong>
                     </p>
                   </Col>
                 </Row>
               </div>
             </Card>
           );
         })}
       </div>
     </React.Fragment>
      
   );
  }
   const Drop1 = () => {
       const [files, setFiles] = useState<any>([]);
  
       const handleAdd = (newFiles:any) => {
         newFiles = newFiles.filter(
           (file:any) => !files.find((f:any) => f.data === file.data)
         );
         setFiles([...files, ...newFiles]);
       };
  
       const handleDelete = (deleted:any) => {
         setFiles(files.filter((f:any) => f !== deleted));
       };
  
       return (
         <DropzoneAreaBase
           fileObjects={files}
           onAdd={handleAdd}
           onDelete={handleDelete}
         />
       );
     }
   
  export class Vertical extends React.Component {
      
    state = { step: 0 };
  
    handleStep = (step:any) => {
      this.setState({ step });
    };
   
  
  
  
    render() {
      return (
        <Wizardhor step={this.state.step} onChange={this.handleStep}>
          <Steps title="Personal Information" number="1">
            <section className="card-body col-sm-9">
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
              <FormGroup className="control-group form-group mb-2">
                <Form.Label className="form-label">Address</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  required
                  placeholder="Address"
                />
              </FormGroup>
              <div className="mb-2 drop">
                <Drop />
              </div>
              <div className="mb-0 drop1">
                <Drop1 />
              </div>
            </section>
          </Steps>
  
          <Steps title="Billing Information" number="2">
            <section className="card-body col-sm-9">
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
          </Steps>
          <Steps title="Payment Details" number="3">
            <section className="card-body col-sm-9">
              <FormGroup className="form-group">
                <Form.Label className="form-label">CardHolder Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="name12"
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
          </Steps>
        </Wizardhor>
      );
    }
  }
