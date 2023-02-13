import React from 'react';
import { Breadcrumb, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { InlineEditEditor } from '../../Forms/FormEditor/InlineEditeditor';
import { DropzoneArea} from "material-ui-dropzone";
import { createStyles, makeStyles } from "@material-ui/core";
const Editpost = () =>{
  const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);
const classes = useStyles();
  return(
  <div>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">EDIT POST</span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
            Advanced UI
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Edit-Post
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row>
      <Col lg={12}md={12} >
        <Card>
          <Card.Body>
            <FormGroup>
              <Form.Label className="form-label text-dark">Course Title</Form.Label>
              <input
                type="text"
                className="form-control"
                defaultValue="Advanced Web Develpment"
              />
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Category</Form.Label>
              <select className="form-control select2 form-select">
                <option>Select</option>
                <option defaultValue="1" >
                  IT
                </option>
                <option defaultValue="2">Language</option>
                <option defaultValue="3">Science</option>
                <option defaultValue="4">Health</option>
                <option defaultValue="5">Humanities</option>
                <option defaultValue="6">Business</option>
                <option defaultValue="7">Maths</option>
                <option defaultValue="8">Marketing</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Instructor</Form.Label>
              <select className="form-control select2 form-select">
                <option>Select</option>
                <option defaultValue="1" >
                  Pedro Cox
                </option>
                <option defaultValue="2">Vera Guzman</option>
                <option defaultValue="3">Glenda Long</option>
                <option defaultValue="4">Joel Anderson</option>
                <option defaultValue="5">Blanche Henderson</option>
              </select>
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label text-dark">Type of mode</Form.Label>
              <div className="d-md-flex ad-post-details">
                <Form.Label className="custom-control custom-radio mb-2 me-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios2"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Online{" "}
                    </Link>
                  </span>
                </Form.Label>
                <Form.Label className="custom-control custom-radio  mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios2"
                    defaultValue="option2"
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Offline
                    </Link>
                  </span>
                </Form.Label>
              </div>
            </FormGroup>
            <div className="ql-wrapper border">
              
              <InlineEditEditor />
            </div>
            <FormGroup>
              <Form.Label className="form-label text-dark">Course Type</Form.Label>
              <div className="d-md-flex ad-post-details">
                <Form.Label className="custom-control custom-radio mb-2 me-4">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios12"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Free{" "}
                    </Link>
                  </span>
                </Form.Label>
                <Form.Label className="custom-control custom-radio  mb-2">
                  <input
                    type="radio"
                    className="custom-control-input"
                    name="radios12"
                    defaultValue="option2"
                  />
                  <span className="custom-control-label">
                    <Link to="#" className="">
                      Paid
                    </Link>
                  </span>
                </Form.Label>
              </div>
            </FormGroup>
            <FormGroup className="p-4 border mb-4 form-group">
              <div>
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
            </FormGroup>
            <FormGroup>
              <Form.Label className="form-label">Upload Video URL</Form.Label>
              <input
                type="text"
                className="form-control"
                placeholder="https://videos.com"
                defaultValue="https://www.youtube.com/embed/tMWkeBIohBs"
              />
            </FormGroup>
            <div className="control-group form-group  mb-0">
              <Form.Label className="form-label text-dark">
                Course Post Package
              </Form.Label>
              <div className=" border p-3 br-7">
                <div className="d-md-flex ad-post-details">
                  <Form.Label className="custom-control custom-radio mb-0 me-5">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultValue="option7"
                    />
                    <span className="custom-control-label">30 Days Free</span>
                  </Form.Label>
                  <Form.Label className="custom-control custom-radio  mb-0 me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultValue="option8"
                      defaultChecked
                    />
                    <span className="custom-control-label">
                      60 days / <span className="font-weight-bold">$20</span>
                    </span>
                  </Form.Label>
                  <Form.Label className="custom-control custom-radio  mb-0 me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultValue="option9"
                    />
                    <span className="custom-control-label">
                      6months /<span className="font-weight-bold">$50</span>
                    </span>
                  </Form.Label>
                  <Form.Label className="custom-control custom-radio  mb-0">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="radios1"
                      defaultValue="option10"
                    />
                    <span className="custom-control-label">
                      1 year / <span className="font-weight-bold">$80</span>
                    </span>
                  </Form.Label>
                </div>
              </div>
            </div>
          </Card.Body>
          <div className="card-footer ">
            <Link to="#" className="btn btn-secondary">
              Save to Draft
            </Link>
            <Link to="#" className="btn btn-primary float-end">
              Publish Now
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
  </div>
);
  }

Editpost.propTypes = {};

Editpost.defaultProps = {};

export default Editpost;
