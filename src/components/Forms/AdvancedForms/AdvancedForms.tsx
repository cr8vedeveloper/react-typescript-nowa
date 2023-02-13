import React, { useState } from "react";
import { Breadcrumb, Button, Card, Col, Row } from 'react-bootstrap';
import { options } from './data';
import IntlTelInput from "react-intl-tel-input";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import Creatable from "react-select/creatable";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";
import { createStyles, makeStyles } from "@material-ui/core";
import { groupedOptions } from './data'
const AdvancedForms = () => {
  const [selected1, setSelected1] = useState<any>([]);
  const [selected2, setSelected2] = useState<any>([]);
  const [selectedFiles, setselectedFiles] = useState([]);
  const [Singleselect, setSingleselect] = useState<any>("");
  const [Selectdis, setSelectdis] = useState<any>("");
  const [Search, setSearch] = useState<any>("");

  
  const BasicMutipleSelect = () => {
    const [selected, setSelected] = useState([]);
    const options=[
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  return (

    <MultiSelect
     value={selected}
        onChange={setSelected}
        labelledBy="Select"
      options={options}
      disableSearch
      className=""
       
    />
  );
};
const BasicMutipleSelect2 = () => {
  const [selected, setSelected] = useState([]);
  const options=[
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
return (

  <MultiSelect
   value={selected}
      onChange={setSelected}
      labelledBy="Select"
    options={options}
    disabled
  />
);
};
const BasicMutipleSelect3 = () => {
  const [selected, setSelected] = useState([]);
  const options=[
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "volkswagen", label: "volkswagen" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "mitsubishi", label: "mitsubishi" },
  { value: "hyundai", label: "hyundai" },
  { value: "fiat", label: "fiat" },
];
return (

  <MultiSelect
   value={selected}
      onChange={setSelected}
      labelledBy="Select"
    options={options}
    hasSelectAll
    isCreatable
  />
);
};
  //Fileuploader
  const [Fileuploader, setFileuploader] = useState([]);
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
    setFileuploader(files);
  }
  //MUIdropzonebadge
  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    })
  );
  const classes = useStyles();

  //Fileuploader2
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
  console.log(setselectedFiles)
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            ADVANCED FORMS
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
              Advanced Forms
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Single Select Style</h6>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Single Select</p>
                <div className=" SlectBox">
                  <Select
                    defaultValue={Singleselect}
                    onChange={setSingleselect}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix="selectform"
                  />
                </div>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Disabled Select</p>
                <div className="SlectBox">
                  <Select
                    classNamePrefix="selectform"
                    defaultValue={Selectdis}
                    onChange={setSelectdis}
                    options={options}
                    placeholder="eg1"
                    isDisabled
                  />
                </div>
              </div>
              <div>
                <p className="mg-b-10">Inline Search Select</p>
                <div className=" SlectBox">
                  <Select
                    defaultValue={Search}
                    onChange={setSearch}
                    options={options}
                    placeholder="eg1"
                    classNamePrefix="selectform"
                    isSearchable
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Multiple Select Styles</h6>
              </div>
              <div className="mb-3">
                <p className="mg-b-9">Multiple Select</p>
                <BasicMutipleSelect/>
              </div>
              <div className="mb-3">
                <p className="mg-b-9">Disabled Select</p>
                <BasicMutipleSelect2/>
              </div>
              <div>
                <p className="mg-b-9">Creatable Select</p>
                <BasicMutipleSelect3/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Multiple Select Styles</h6>
              </div>
              <div className="mb-4">
                <p className="mg-b-10">Multiple Select-1</p>
                <Creatable
                  classNamePrefix="background"
                  // display="value"
                  options={groupedOptions}
                  value={selected1}
                  onChange={setSelected1}
                  // labelledBy="Select"
                />
              </div>
              <div>
                <p className="mg-b-10">Multiple Select-2</p>
                <div>
                  <Creatable
                    classNamePrefix="background"
                    // display="value"
                    options={groupedOptions}
                    value={selected2}
                    onChange={setSelected2}
                    // labelledBy="Select"
                    isMulti
                  />
                </div>
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
              <div>
                <h6 className="card-title mb-1">Telephone Input</h6>
                <p className="text-muted card-sub-title">
                  A JavaScript plugin for entering and validating international
                  telephone numbers. It adds a flag dropdown to any input, detects
                  the user's country, displays a relevant placeholder and provides
                  formatting/validation methods.
                </p>
              </div>
              <div className="input-group ">
                <IntlTelInput
                  containerClassName="intl-tel-input mb-5 mb-sm-0"
                  inputClassName="form-control"
                />
                <span className="input-group-btn tele-input">
                  <Button className="btn ripple btn-primary" type="button">
                    Submit
                  </Button>
                </span>
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
              <div>
                <h6 className="card-title mb-1">File Upload</h6>

              </div>
              <Row className="mb-4">
                <Col sm={12} md={4}>
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
                          <p style={{ color: "#9393b5" }}>
                            Drop files here or click to upload.
                          </p>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <div className="list-unstyled mb-0" id="file-previews">
                    {Fileuploader.map((f:any, i:any) => {
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
                </Col>
                <Col sm={12} md={4} className="mg-t-10 mg-md-t-0">
                  <DropzoneAreaBase
                    fileObjects={files}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                  />
                </Col>
                <Col sm={12} md={4} className="mg-t-10 mg-md-t-0">
                  <Dropzone
                    disabled
                    onDrop={(acceptedFiles:any) => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps, getInputProps }:any) => (
                      <div className="dropzone dz-clickable">
                        <div className="dz-message needsclick" {...getRootProps()}>
                          <div className="mb-2 mt-5 dropzoneicon ">
                            <i className="mdi mdi-apple-mobileme"></i>
                          </div>
                          <p style={{ color: "#9393b5" }}>
                            Drop files here or click to upload.
                          </p>
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
                </Col>
              </Row>
              <div className='textnone'>
                <div>
                  <DropzoneArea
                    showPreviews={true}
                    showPreviewsInDropzone={false}
                    useChipsForPreview
                    previewGridProps={{ container: { spacing: 1, direction: "row" } }}
                    previewChipProps={{ classes: { root: classes.previewChip } }}
                    previewText="Selected files"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
}

AdvancedForms.propTypes = {};

AdvancedForms.defaultProps = {};

export default AdvancedForms;
