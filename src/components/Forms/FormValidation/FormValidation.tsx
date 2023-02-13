import React, { useState } from "react";
import { Breadcrumb, Card, Col, Form } from "react-bootstrap";
import Select from 'react-select';
import { optionselectyear,optionCustom,objectArraysingle,optionTooltips,optiondefault} from "./data"
import {
  CForm,
  CCol,
  CFormLabel,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CFormCheck,
} from "@coreui/react";

const FormValidation = () =>{
  const [Server, setServer] = useState("");

  const handleOnchangeServer = () => {
    setServer(Server);
  };
  //custom validation
  const [Custom, setCustom] = useState("");

  const handleOnchangeCustom = () => {
    setCustom(Custom);
  };
  const [validatedCustom, setValidatedCustom] = useState(false);
  const handleSubmitCustom = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };
  //custom Validation

  //singleSelect
  const [Single, setSingle] = useState("");

  const handleOnchangeSingle = () => {
    setSingle(Single);
  };
  //singleSelect
  //Tooltips
  const [Tooltips, setTooltips] = useState("");

  const handleOnchangeTooltips = () => {
    setTooltips(Tooltips);
  };
  const [validatedTooltips, setValidatedTooltips] = useState(false);
  const handleSubmitTooltips = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedTooltips(true);
  };
  //Tooltips
  //DefaultValidation
  const [Default, setDefault] = useState("");

  const handleOnchangedefault = () => {
    setDefault(Default);
  };
  const [validateddefault, setValidateddefault] = useState(false);
  const handleSubmitdefault = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidateddefault(true);
  };
  //DefaultValidation
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            FORM VALIDATIONS
          </span>
          
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
              Form Validations
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!--Row--> */}
      <div className="row">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Custom Validation</h3>
            </Card.Header>
            <Card.Body>
            <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validatedCustom}
      onSubmit={handleSubmitCustom}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom01"
          defaultValue="Mark"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustom02"
          defaultValue="Otto"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
       
        <Select
        classNamePrefix="selectproduct"
			onChange={handleOnchangeCustom}
			options={optionCustom}
			isSearchable
			placeholder="--Select--"
		  />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default Validation</h3>
            </Card.Header>
            <Card.Body>
            <CForm
      className="row g-3 needs-validation"
      validated={validateddefault}
      onSubmit={handleSubmitdefault}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationDefault01"
          defaultValue="Mark"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationDefault02"
          defaultValue="Otto"
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        
        <Select
        classNamePrefix="selectproduct"
			onChange={handleOnchangedefault}
			options={optiondefault}
			isSearchable
			placeholder="--Select--"
		  />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
              
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Server Side Validation</h3>
            </Card.Header>
            <Card.Body>
            <CForm className="row g-3 needs-validation">
      <CCol md={4}>
        <CFormLabel htmlFor="validationServer01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationServer01"
          defaultValue="Mark"
          valid
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationServer02"
          defaultValue="Otto"
          valid
          required
        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationServerUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend03"
            invalid
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationServer03">City</CFormLabel>
        <CFormInput type="text" id="validationServer03" invalid required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationServer04">City</CFormLabel>
        
         <Select
         classNamePrefix="selectproduct"
			onChange={handleOnchangeServer}
			options={optionselectyear}
			isSearchable
			placeholder="--Select--"
		  />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationServer05">City</CFormLabel>
        <CFormInput type="text" id="validationServer05" invalid required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          invalid
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
              
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Supported Elements</h3>
            </Card.Header>
            <Card.Body>
              <Form className="was-validated">
                <div className="mb-3">
                  <label htmlFor="validationTextarea" className="form-label">
                    Textarea
                  </label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder=" required example textarea"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="validationFormCheck1"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="validationFormCheck1"
                  >
                    Check this checkbox
                  </label>
                  <div className="invalid-feedback">
                    Example invalid feedback text
                  </div>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="validationFormCheck2"
                    name="radio-stacked"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="validationFormCheck2"
                  >
                    Toggle this radio
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="validationFormCheck3"
                    name="radio-stacked"
                    required
                  />
                  <label
                    className="form-check-label"
                    htmlFor="validationFormCheck3"
                  >
                    Or toggle this other radio
                  </label>
                  <div className="invalid-feedback">
                    More example invalid feedback text
                  </div>
                </div>

                <div className="mb-3">
          
        <Select
        classNamePrefix="selectproduct"
			onChange={handleOnchangeSingle}
			options={objectArraysingle}
			isSearchable
			placeholder="--Select--"
		  />
                  <div className="invalid-feedback">
                    Example invalid select feedback
                  </div>
                </div>

                <div className="input-group file-browser mb-5 input-group-rtl">
                  <input
                    type="text"
                    className="form-control border-end-0 browse-file"
                    placeholder="choose"
                    readOnly
                  />
                  <label className="input-group-text btn btn-primary">
                  Browse {" "}
                    <input
                      type="file"
                      className="file-browserinput"
                      style={{ display: "none" }}
                      multiple
                    />
                  </label>
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary" type="submit" disabled>
                    Submit form
                  </button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tooltips</h3>
            </Card.Header>
            <Card.Body>
            <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validatedTooltips}
      onSubmit={handleSubmitTooltips}
    >
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          defaultValue="Mark"
          required
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          defaultValue="Otto"
          required
        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
        
        <Select
        classNamePrefix="selectproduct"
			onChange={handleOnchangeTooltips}
			options={optionTooltips}
			isSearchable
			placeholder="--Select--"
		  />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol md={3} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip05" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
            </Card.Body>
          </Card>
        </Col>
      </div>
      {/* <!--/Row--> */}
    </div>
  );
} 

FormValidation.propTypes = {};

FormValidation.defaultProps = {};

export default FormValidation;
