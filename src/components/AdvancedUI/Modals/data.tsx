import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import Draggable from "react-draggable";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

export function Varyingmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open modal for @mdo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Modal heading
          </Modal.Title>
          <Button variant="" onClick={handleClose}>
            X          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Recipient:</Form.Label>
              <Form.Control type="email" placeholder="@mdo" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Send message</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export function Varyingmodal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open modal for @fat
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Modal heading
          </Modal.Title>
          <Button variant="" onClick={handleClose}>
            X          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Recipient:</Form.Label>
              <Form.Control type="email" placeholder="@mdo" autoFocus />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Send message</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export function Varyingmodal2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open modal for @getbootstrap
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
          <Button variant="" onClick={handleClose}>
X          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Recipient:</Form.Label>
              <Form.Control
                type="email"
                placeholder=" @getbootstrap"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Send message</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//PaperComponent
export function PaperComponent(props:any) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export function DraggableModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"
        href="#modaldemo8"
        variant="primary"
        onClick={handleClickOpen}
      >
        View Demo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Message Preview
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function Fullscreen() {

  let [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint: any) {
      setFullscreen(breakpoint);
      setShow(true);
  }

  return (
      <>

          <Button variant="warning" className="bg-warning-gradient mt-3 mb-3 mb-md-0 me-1" onClick={() => handleShow(true)}>
              Full screen

          </Button>

          <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
              <Modal.Header>
                  <Modal.Title>Modal</Modal.Title>
                  <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={fullscreenmodalClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={fullscreenmodalClose}>
                      Save Changes
                  </Button>
              </Modal.Footer>
          </Modal>
      </>
  )
};
export function Tooltipa() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn ripple btn-primary"
        variant=""
        onClick={handleShow}
      >
        View demo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>popover model</Modal.Title>
          <Button variant="" className="btn btn-close" onClick={handleClose}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <h5>Popover in a modal</h5>{" "}
          <p>
            This{" "}
            <OverlayTrigger
              placement="right"
             
              overlay={
                <Tooltip id="button-tooltip" >
                  Simple tooltip
                </Tooltip>
              }
            >
              <Button variant="" className="btn btn-secondary me-2">
               
                button
              </Button>
            </OverlayTrigger>
            
            triggers a popover on click.
          </p>
          <hr /> <h5>Tooltips in a modal</h5>{" "}
          <p>
            {" "}
            <Button
              variant=""
              className="btn btn-secondary me-1"
              data-bs-placement="top"
              data-bs-toggle="tooltip"
              title=""
              type="button"
              data-bs-original-title="Tooltip on top"
            >
              This link
            </Button>
            and{" "}
            <Button
              variant=""
              className="btn btn-secondary"
              data-bs-placement="top"
              data-bs-toggle="tooltip"
              title=""
              type="button"
              data-bs-original-title="Tooltip on top"
            >
              that link
            </Button>{" "}
            have tooltips on hover.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//ExtralargeModal
export function ExtralargeModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="me-2" variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal
        size="lg"
        show={show}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title>Large Modal</Modal.Title>
          <Button
            onClick={() => setShow(false)}
            className="btn-close"
            variant=""
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>Modal body text goes here.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export function MyVerticallyCenteredModal(props:any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"

          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export function VerticallyCenteredModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="btn ripple btn-primary"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        View Demo
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export function MydModalWithGrid(props:any) {
  
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title>Using Grid in Modal</Modal.Title>
        <Button variant="" className="btn btn-close text-dark" onClick={props.onHide}>
            x
          </Button>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"
          href="#modaldemo8"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//Gridmodal
export function Gridmodala() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="btn ripple btn-primary"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        View Demo
      </Button>

      <MydModalWithGrid
        variant="primary"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}