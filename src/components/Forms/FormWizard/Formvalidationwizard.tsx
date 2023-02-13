import React,{useState} from "react";
import { Col, Form, FormGroup, InputGroup, Row,Button } from "react-bootstrap";
import validator from "validator";

function Name({ nextStep, handleFormData, values }:any){
    const [error, setError] = useState(false);
    const submitFormData = (e:any) => {
      e.preventDefault();
      if (
        validator.isEmpty(values.firstName) ||
        validator.isEmpty(values.lastName)
      ) {
        setError(true);
      } else {
        nextStep();
      }
    };
  
    return (
          <div>
            <Form onSubmit={submitFormData}>
              <Form.Group className="">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid #6259ca" : "" }}
                  name="firstName"
                  defaultValue={values.firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={handleFormData("firstName")}
                />
                {error ? (
                  <Form.Text style={{ color: "#6259ca" }}>
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group className="">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  style={{ border: error ? "2px solid #6259ca" : "" }}
                  name="lastName"
                  defaultValue={values.lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={handleFormData("lastName")}
                />
                {error ? (
                  <Form.Text style={{ color: "#6259ca" }}>
                    This is a required field
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Button type="submit" className="btn mt-3 btn-primary">
                Continue
              </Button>
            </Form>
          </div>
    );
   }
   function StepTwo  ({ nextStep, handleFormData, prevStep, values }:any) {
    
   const [error, setError] = useState(false);
  
     
   const submitFormData = (e:any) => {
     e.preventDefault();
  
      
     if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
       setError(true);
     } else {
       nextStep();
     }
   };
   return (
     <div>
       <Form onSubmit={submitFormData}>
         <Form.Group className="mb-3">
           <Form.Label>Age</Form.Label>
           <Form.Control
             style={{ border: error ? "2px solid red" : "" }}
             type="number"
             placeholder="Age"
             onChange={handleFormData("age")}
           />
           {error ? (
             <Form.Text style={{ color: "red" }}>
               This is a required field
             </Form.Text>
           ) : (
             ""
           )}
         </Form.Group>
         <Form.Group className="mb-3">
           <Form.Label>Email</Form.Label>
           <Form.Control
             style={{ border: error ? "2px solid red" : "" }}
             type="email"
             placeholder="email"
             onChange={handleFormData("email")}
           />
           {error ? (
             <Form.Text style={{ color: "red" }}>
               This is a required field
             </Form.Text>
           ) : (
             ""
           )}
         </Form.Group>
         <div>
           <Button className="float-start btn btn-primary" onClick={prevStep}>
             Previous
           </Button>
  
           <Button className="float-end btn btn-primary" type="submit">
             Submit
           </Button>
         </div>
       </Form>
     </div>
   );
  };
   function Final({ nextStep,handleFormData, prevStep, values }:any) {
       const [error, setError] = useState(false);
  
       const submitFormData = (e:any) => {
         e.preventDefault();
  
         if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
           setError(true);
         } else {
           nextStep();
         }
       };
     return (
       <div>
         <section>
           <FormGroup className="form-group" onSubmit={submitFormData}>
             <Form.Label className="form-label">CardHolder Name</Form.Label>
             <Form.Control
               style={{ border: error ? "2px solid red" : "" }}
               type="text"
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
                 <Button variant="" className="btn btn-secondary" type="button">
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
                 <Form.Control type="number" className="form-control" required />
               </FormGroup>
             </Col>
           </Row>
         </section>
         <div>
           <Button
             className="float-start btn btn-primary mt-2"
             onClick={prevStep}
           >
             Previous
           </Button>
  
           <Button
             className="float-end btn btn-primary mt-2"
             disabled
             type="submit"
           >
             Submit
           </Button>
         </div>
       </div>
     );
   };
  export function WizardForm() {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  })
  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData:any = (input:any) => (e:any) => { 
    const {value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
   switch (step) {
    case 1:
      return (
              <div className="custom-margin">
                <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </div>
      );
     default:
      return (
              <div  className="custom-margin">
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </div>
      );
    case 3:
      return (
        <div className="">
              <div className="custom-margin">
                <Final values={formData}  />
              </div>
            </div>
      ); 
  }
  }
