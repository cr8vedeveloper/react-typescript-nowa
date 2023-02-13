import React from 'react';
import { Breadcrumb, Card, Col, Form, FormGroup, InputGroup, Row } from 'react-bootstrap';


const FormInputSpinners = () => (
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            BOOTSTRAP INPUT SPINNERS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Bootstrap Input Spinners
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Small bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="spinner-border spinner-border-sm text-warning"
                />
                <div className="spinner-border spinner-border-sm text-warning"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="disabled spinner-border spinner-border-sm"
                  disabled
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="readonly spinner-border spinner-border-sm"
                  readOnly
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="disabled spinner-border spinner-border-sm text-warning"
                  disabled
                />
                <div className="spinner-border spinner-border-sm text-warning"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="readonly spinner-border spinner-border-sm text-warning"
                  readOnly
                />
                <div className="spinner-border spinner-border-sm text-warning"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-valid"
                  placeholder="is-valid spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-invalid"
                  placeholder="is-invalid spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-valid"
                  placeholder="is-valid disabled spinner-border spinner-border-sm"
                  disabled
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-valid"
                  placeholder="is-valid readonly spinner-border spinner-border-sm"
                  readOnly
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-invalid"
                  placeholder="is-invalid disabled spinner-border spinner-border-sm"
                  disabled
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-invalid"
                  placeholder="is-invalid readonly spinner-border spinner-border-sm"
                  readOnly
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Small bootstrap-input-spinner-grow
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="spinner-grow spinner-grow-sm"
                />
                <div className="spinner-grow spinner-grow-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="disabled spinner-grow spinner-grow-sm"
                  disabled
                />
                <div className="spinner-grow spinner-grow-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="readonly spinner-grow spinner-grow-sm"
                  readOnly
                />
                <div className="spinner-grow spinner-grow-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-valid"
                  placeholder="is-valid spinner-grow spinner-grow-sm"
                />
                <div className="spinner-grow spinner-grow-sm"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Large bootstrap-input-spinner-grow
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <Form.Control className="form-control" placeholder="spinner-grow" />
                <div className="spinner-grow"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="disabled spinner-grow"
                  disabled
                />
                <div className="spinner-grow"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="readonly spinner-grow"
                  readOnly
                />
                <div className="spinner-grow"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-valid"
                  placeholder="is-valid spinner-grow"
                />
                <div className="spinner-grow"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Small textarea bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3">
                <textarea
                  className="form-control is-valid"
                  placeholder="is-valid"
                ></textarea>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control"
                  placeholder="spinner-border spinner-border-sm"
                ></textarea>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control"
                  placeholder="disabled spinner-border spinner-border-sm"
                  disabled
                ></textarea>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control"
                  placeholder="readonly spinner-border spinner-border-sm"
                  readOnly
                ></textarea>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control is-valid"
                  placeholder="is-valid spinner-border spinner-border-sm"
                ></textarea>
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Large textarea bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <textarea
                  className="form-control"
                  placeholder="spinner-border"
                ></textarea>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control"
                  placeholder="disabled spinner-border"
                  disabled
                ></textarea>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control"
                  placeholder="readonly spinner-border"
                  readOnly
                ></textarea>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <textarea
                  className="form-control is-valid"
                  placeholder="is-valid spinner-border"
                ></textarea>
                <div className="spinner-border"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Small Select (can be broken, use form-select instead)
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3">
                <select className="form-control is-valid">
                  <option>is-valid</option>
                </select>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control">
                  <option>spinner-border spinner-border-sm</option>
                </select>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control" disabled>
                  <option>disabled spinner-border spinner-border-sm</option>
                </select>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control is-valid">
                  <option>is-valid spinner-border spinner-border-sm</option>
                </select>
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Large Select (can be broken, use form-select instead)
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <select className="form-control">
                  <option>spinner-border</option>
                </select>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control" disabled>
                  <option>disabled spinner-border</option>
                </select>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control is-valid">
                  <option>is-valid spinner-border</option>
                </select>
                <div className="spinner-border"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Small multiple (can be broken, use form-select instead)
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3">
                <select className="form-control is-valid" multiple>
                  <option>is-valid</option>
                </select>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control" multiple>
                  <option>spinner-border spinner-border-sm</option>
                </select>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control" multiple disabled>
                  <option>disabled spinner-border spinner-border-sm</option>
                </select>
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control is-valid" multiple>
                  <option>is-valid spinner-border spinner-border-sm</option>
                </select>
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Large Select (can be broken, use form-select instead)
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <select className="form-control" multiple>
                  <option>spinner-border</option>
                </select>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control" multiple disabled>
                  <option>disabled spinner-border</option>
                </select>
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <select className="form-control is-valid" multiple>
                  <option>is-valid spinner-border</option>
                </select>
                <div className="spinner-border"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Large bootstrap-input-spinner
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3 is-loading">
                <Form.Control className="form-control" placeholder="spinner-border" />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="disabled spinner-border"
                  disabled
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control"
                  placeholder="readonly spinner-border"
                  readOnly
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-valid"
                  placeholder="is-valid spinner-border"
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control is-invalid"
                  placeholder="is-invalid spinner-border"
                />
                <div className="spinner-border"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Small Bootstrap-input-spinners with label
              </h4>
            </Card.Header>
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label htmlFor="input-label-sm">Small Label</Form.Label>
                <div className="is-loading">
                  <input
                    id="input-label-sm"
                    className="form-control"
                    placeholder="spinner-border spinner-border-sm"
                  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label htmlFor="input-label-sm-is-valid">
                  Is valid small Label
                </Form.Label>
                <div className="is-loading">
                  <input
                    id="input-label-sm-is-valid"
                    className="form-control is-valid"
                    placeholder="is-valid spinner-border spinner-border-sm"
                  />
                  <div className="spinner-border spinner-border-sm-is-valid"></div>
                </div>
              </FormGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Large Bootstrap-input-spinners with label
              </h4>
            </Card.Header>
            <Card.Body>
              <FormGroup className="form-group">
                <Form.Label htmlFor="input-label-lg">Large Label</Form.Label>
                <div className="is-loading">
                  <input
                    id="input-label-lg"
                    className="form-control"
                    placeholder="spinner-border spinner-border-lg"
                  />
                  <div className="spinner-border spinner-border-lg"></div>
                </div>
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label htmlFor="input-label-lg-is-valid">
                  Is valid Large Label
                </Form.Label>
                <div className="is-loading">
                  <input
                    id="input-label-lg-is-valid"
                    className="form-control is-valid"
                    placeholder="is-valid spinner-border spinner-border-lg"
                  />
                  <div className="spinner-border spinner-border-lg-is-valid"></div>
                </div>
              </FormGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                form-control-sm Bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3">
                <Form.Control
                  className="form-control form-control-sm is-valid"
                  placeholder="form-control-sm is-valid"
                />
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-sm"
                  placeholder="form-control-sm spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-sm"
                  placeholder="form-control-sm disabled spinner-border spinner-border-sm"
                  disabled
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-sm"
                  placeholder="form-control-sm readonly spinner-border spinner-border-sm"
                  readOnly
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-sm is-valid"
                  placeholder="form-control-sm is-valid spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-sm is-invalid"
                  placeholder="form-control-sm is-invalid spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                form-control-lg Bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3">
                <Form.Control
                  className="form-control form-control-lg is-valid"
                  placeholder="form-control-lg is-valid"
                />
              </div>

              <h6 className="my-4 fw-semibold fs-15" id="form-control-lg-sm">
                Small spinners
              </h6>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="form-control-lg spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="form-control-lg disabled spinner-border spinner-border-sm"
                  disabled
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="form-control-lg readonly spinner-border spinner-border-sm"
                  readOnly
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg is-valid"
                  placeholder="form-control-lg is-valid spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg is-invalid"
                  placeholder="form-control-lg is-invalid spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <h6 className="my-4 fw-semibold fs-15" id="form-control-lg-lg">
                Large Spinners
              </h6>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="form-control-lg spinner-border"
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="form-control-lg disabled spinner-border"
                  disabled
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg"
                  placeholder="form-control-lg readonly spinner-border"
                  readOnly
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg is-valid"
                  placeholder="form-control-lg is-valid spinner-border"
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control form-control-lg is-invalid"
                  placeholder="form-control-lg is-invalid spinner-border"
                />
                <div className="spinner-border"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                form-control-plaintext Bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3 SmallSpinners">
              <h6 className="fw-semibold fs-15" id="form-control-plaintext-sm">
                Small Spinners
              </h6>
              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext"
                  placeholder="form-control-plaintext spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext"
                  placeholder="form-control-plaintext disabled spinner-border spinner-border-sm"
                  disabled
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext"
                  placeholder="form-control-plaintext readonly spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext "
                  placeholder="form-control-plaintext  spinner-border spinner-border-sm"
                />
                <div className="spinner-border spinner-border-sm"></div>
              </div>

              <h6
                className="my-4 fw-semibold fs-15"
                id="form-control-plaintext-lg"
              >
                Large Spinners
              </h6>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext"
                  placeholder="form-control-plaintext spinner-border"
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext"
                  placeholder="form-control-plaintext disabled spinner-border"
                  disabled
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext"
                  placeholder="form-control-plaintext readonly spinner-border"
                  readOnly
                />
                <div className="spinner-border"></div>
              </div>

              <div className="mb-3 is-loading">
                <Form.Control
                  className="form-control-plaintext "
                  placeholder="form-control-plaintext  spinner-border"
                />
                <div className="spinner-border"></div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Input-group prepend Bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3">
              <div className="mb-3">
                <div className="input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control is-valid"
                    placeholder="is-valid"
                  />
                </div>
              </div>

              <h6
                className="my-4 fw-semibold fs-15"
                id="input-group-prepend-sm"
              >
                Small spinner input-group prepend
              </h6>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    placeholder="spinner-border spinner-border-sm"
                  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    placeholder="disabled spinner-border spinner-border-sm"
                    disabled
                  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    placeholder="readonly spinner-border spinner-border-sm"
                    readOnly
                  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control is-valid"
                    placeholder="is-valid spinner-border spinner-border-sm"
                  />
                  <div className="spinner-border spinner-border-sm"></div>
                </div>
              </div>

              <h6
                className="my-4 fw-semibold fs-15"
                id="input-group-prepend-lg"
              >
                Large spinner input-group prepend
              </h6>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    placeholder="spinner-border"
                  />
                  <div className="spinner-border"></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    placeholder="disabled spinner-border"
                    disabled
                  />
                  <div className="spinner-border"></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    placeholder="readonly spinner-border"
                    readOnly
                  />
                  <div className="spinner-border"></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group is-loading">
                  <InputGroup.Text  className="input-group-text">prepend</InputGroup.Text>
                  <Form.Control
                    className="form-control is-valid"
                    placeholder="is-valid spinner-border"
                  />
                  <div className="spinner-border"></div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Input-group append Bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3 spinner-input-group">
              <div className="mb-3">
                <div className="input-group">
                  <Form.Control
                    className="form-control is-valid"
                    placeholder="is-valid"
                  />
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <h5 className="my-4 fw-semibold fs-15">
                Small spinner input-group append
              </h5>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control"
                      placeholder="spinner-border spinner-border-sm"
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control"
                      placeholder="disabled spinner-border spinner-border-sm"
                      disabled
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control"
                      placeholder="readonly spinner-border spinner-border-sm"
                      readOnly
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control is-valid"
                      placeholder="is-valid spinner-border spinner-border-sm"
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <h6 className="my-4 fw-semibold fs-15" id="input-group-append-lg">
                Large spinner input-group append
              </h6>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control"
                      placeholder="spinner-border"
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control"
                      placeholder="disabled spinner-border"
                      disabled
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control"
                      placeholder="readonly spinner-border"
                      readOnly
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <div className="is-loading flex-fill spinner-append">
                    <Form.Control
                      className="form-control is-valid"
                      placeholder="is-valid spinner-border"
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text">append</InputGroup.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-sm-12">
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">
                Input-group append prepend Bootstrap-input-spinners
              </h4>
            </Card.Header>
            <Card.Body className="pb-3 spinner-input-group">
              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <input className="form-control is-valid rounded-0" />
                  <input className="form-control is-valid rounded-0" />
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <h5 className="my-4 fw-semibold fs-15">
                Small spinner input-group append prepend
              </h5>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="spinner-border spinner-border-sm"
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="spinner-border spinner-border-sm"
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="disabled spinner-border spinner-border-sm"
                      disabled
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="disabled spinner-border spinner-border-sm"
                      disabled
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="readonly spinner-border spinner-border-sm"
                      readOnly
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="readonly spinner-border spinner-border-sm"
                      readOnly
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control is-valid rounded-0"
                      placeholder="is-valid spinner-border spinner-border-sm"
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control is-valid rounded-0"
                      placeholder="is-valid spinner-border spinner-border-sm"
                    />
                    <div className="spinner-border spinner-border-sm"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <h5 className="my-4 fw-semibold fs-15">
                Large spinner input-group append prepend
              </h5>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="spinner-border"
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="spinner-border"
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="disabled spinner-border"
                      disabled
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="disabled spinner-border"
                      disabled
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="readonly spinner-border"
                      readOnly
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control rounded-0"
                      placeholder="readonly spinner-border"
                      readOnly
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>

              <div className="mb-3">
                <div className="input-group multiple-input-group input-group-rtl">
                  <InputGroup.Text  className="input-group-text">prepend1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text rounded-0">prepend2</InputGroup.Text>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control is-valid rounded-0"
                      placeholder="is-valid spinner-border"
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <div className="is-loading flex-fill">
                    <Form.Control
                      className="form-control is-valid rounded-0"
                      placeholder="is-valid spinner-border"
                    />
                    <div className="spinner-border"></div>
                  </div>
                  <InputGroup.Text  className="input-group-text rounded-0">append1</InputGroup.Text>
                  <InputGroup.Text  className="input-group-text">append2</InputGroup.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
      {/* <!-- row closed --> */}
    </div>
);

FormInputSpinners.propTypes = {};

FormInputSpinners.defaultProps = {};

export default FormInputSpinners;
