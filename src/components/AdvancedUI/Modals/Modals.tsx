import React, { useState } from 'react';
import { Breadcrumb, Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { DraggableModal,  ExtralargeModal, Fullscreen, Gridmodala,  Tooltipa, Varyingmodal, Varyingmodal1, Varyingmodal2, VerticallyCenteredModal } from './data';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Select from "react-select";

const Modals = () => {
  const [basic, setbasic] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [gridshow, setGridshow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [Scroll, setScroll] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setscroll] = React.useState("paper");

  const handleClickOpen = (scrollType:any) => () => {
    setOpen(true);
    setscroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef:any = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  let viewDemoShow = (modal:any) => {
    switch (modal) {
      case "Basic":
        setbasic(true)
        break;
        case "smShow":
          setSmShow(true)
          break;
          case "lgShow":
            setLgShow(true)
            break;
            case "gridshow":
              setGridshow(true)
            break;
            case "success":
              setSuccess(true)
            break;
            case "Error":
              setError(true)
            break;
            case "select":
              setSelect(true)
            break;
            case "Scroll":
              setScroll(true)
            break;
            // case "modalShow":
            //   setmodalShow(true)
            // break;
    }
  }

  let viewDemoClose = (modal:any) => {
    switch (modal) {
      case "Basic":
        setbasic(false)
        break;
        case "smShow":
          setSmShow(false)
          break;
          case "lgShow":
            setLgShow(false)
            break;
            case "gridshow":
              setGridshow(false)
            break;
            case "success":
              setSuccess(false)
            break;
            case "Error":
              setError(false)
            break;
            case "select":
              setSelect(false)
            break;
            case "Scroll":
              setScroll(false)
            break;
            // case "modalShow":
            //   setmodalShow(false)
            // break;
    }
  }
  const options = [
    { value: "Firefox", label: "Firefox" },
    { value: "Chrome", label: "Chrome" },
    { value: "Safari", label: "Safari" },
    { value: "Opera", label: "Opera " },
    { value: "Internet Explorer", label: "Internet Explorer" },
  ];

  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">MODALS</span>
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
              Modals
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Basic Example of Modal View</h6>
                <p className="text-muted card-sub-title">
                  Below is the static example of the basic modal.
                </p>
              </div>
              <div className="pd-20">
                <div className="modal d-block pos-static basic-modal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                      <Modal.Header>
                        <h6 className="modal-title">Modal Header</h6>
                        <Button
                          variant=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                          <span aria-hidden="true">&times;</span>
                        </Button>
                      </Modal.Header>
                      <Modal.Body>
                        <h6>Modal Body</h6>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                          aut odit aut fugit, sed quia consequuntur magni dolores
                          eos qui ratione voluptatem sequi nesciunt.
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant=""
                          className="btn ripple btn-primary"
                          type="button"
                        >
                          Save changes
                        </Button>
                        <Button
                          variant=""
                          className="btn ripple btn-secondary"
                          type="button"
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Row>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Basic Modal</h6>
              </div>
                <Button
                  className="btn ripple btn-primary"
                  variant=""
                  onClick={() => viewDemoShow("Basic")}
                >
                  View demo
                </Button>
                <Modal show={basic} >
                  <Modal.Header>
                    <Modal.Title>Basic Modal</Modal.Title>
                    <Button variant="" className="btn btn-close" onClick={() => { viewDemoClose("Basic") }}>
                      x
                    </Button>
                  </Modal.Header>
                  <Modal.Body>
                    <h6>Modal Body</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={() => { viewDemoClose("Basic") }}>
                      Save Changes
                    </Button>
                    <Button variant="secondary" onClick={() => { viewDemoClose("Basic") }}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Small Modal</h6>
              </div>
      <Button
           onClick={() => viewDemoShow("smShow")}
        className="btn ripple btn-secondary"
        variant=""
      >
        View Demo
      </Button>
      <Modal
        size="sm"
        show={smShow}
        
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title>Small Modal</Modal.Title>
          <Button
            variant=""
            className="btn btn-close ms-auto"
            onClick={() => { viewDemoClose("smShow") }}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { viewDemoClose("smShow") }}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={() => { viewDemoClose("smShow") }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Large Modal</h6>
              </div>
      <Button
          onClick={() => viewDemoShow("lgShow")}
        className="btn ripple btn-info"
        variant=""
      >
        View Demo
      </Button>
      <Modal
        size="lg"
        show={lgShow}
        
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title>Large Modal</Modal.Title>
          <Button
            variant=""
            className="btn btn-close ms-auto"
           onClick={() => { viewDemoClose("lgShow") }}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"onClick={() => { viewDemoClose("lgShow") }}>
            Save Changes
          </Button>
          <Button variant="secondary"onClick={() => { viewDemoClose("lgShow") }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Grid Modal</h6>
              </div>
      <Button
        onClick={() => viewDemoShow("gridshow")}
        variant=""
        className="btn ripple btn-warning"
      >
        View Demo
      </Button>
      <Modal
        size="lg"
        show={gridshow}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title>Grid Modal</Modal.Title>
          <Button variant="" className="btn btn-close text-dark"onClick={() => { viewDemoClose("gridshow") }}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {" "}
            <div className="col-md-6">
              {" "}
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the who loves toil and pain can
                procureor sit aspernatur system.
              </p>
            </div>{" "}
          </div>{" "}
          <div className="row">
            {" "}
            <div className="col-md-6">
              {" "}
              <p>
                expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes,
                or avoids pleasure itself, because it is pleasure desires to
                obtain pain.
              </p>
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat aut
                odit voluptatem.
              </p>
            </div>{" "}
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"onClick={() => { viewDemoClose("gridshow") }}>
            Save Changes
          </Button>
          <Button variant="secondary"onClick={() => { viewDemoClose("gridshow") }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Modal Success Alert Messages</h6>
              </div>
      <Button
        className="btn ripple btn-success"
        variant=""
        onClick={() => viewDemoShow("success")}
      >
        View demo
      </Button>
      <Modal show={success} >
        <Modal.Header>
          <Button variant="" className="btn btn-close" onClick={() => { viewDemoClose("success") }}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="tx-center ">
            <i className="icon ion-ios-checkmark-circle-outline tx-100 tx-success lh-1 mg-t-20 d-inline-block"></i>{" "}
            <h4 className="tx-success tx-semibold mg-b-20">Congratulations!</h4>{" "}
            <p className="mg-b-20 mg-x-20">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <Button
              variant=""
              aria-label="Close"
              className="btn ripple btn-success pd-x-25"
              type="button"
            >
              Continue
            </Button>{" "}
          </div>
        </Modal.Body>
      </Modal>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Modal Danger Alert Messages</h6>
              </div>
              <>
      <Button className="btn ripple btn-danger" variant=""  onClick={() => viewDemoShow("Error")}>
        View demo
      </Button>
      <Modal show={Error} >
        <Modal.Header>
          <Button variant="" className="btn btn-close" onClick={() => { viewDemoClose("Error") }}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="tx-center">
            {" "}
            <i className="icon icon ion-ios-close-circle-outline tx-100 tx-danger lh-1 mg-t-20 d-inline-block"></i>{" "}
            <h4 className="tx-danger mg-b-20">
              Error: Cannot process your entry!
            </h4>{" "}
            <p className="mg-b-20 mg-x-20">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <Button
              variant=""
              aria-label="Close"
              className="btn ripple btn-danger pd-x-25"
              type="button"
            >
              Continue
            </Button>{" "}
          </div>
        </Modal.Body>
      </Modal>
    </> 
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Select2 Inside Modals</h6>
              </div>
              <>
      <Button className="btn ripple btn-teal" variant="" onClick={() => viewDemoShow("select")}>
        View demo
      </Button>

      <Modal show={select} >
        <Modal.Header>
          <Modal.Title>Select2 Modal</Modal.Title>
          <Button variant="" className="btn btn-close" onClick={() => { viewDemoClose("select") }}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <h6>Modal Body</h6>
          <div className=" SlectBox">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              placeholder="Chrome"
              classNamePrefix="selectform"
            />
          </div>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { viewDemoClose("select") }}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={() => { viewDemoClose("select") }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Scrolling Modal</h6>
              </div>
              <>
      <Button
        className="btn ripple btn-primary"
        variant=""
        
        onClick={() => viewDemoShow("Scroll")}
      >
        View demo
      </Button>

      <Modal show={Scroll} >
        <Modal.Header>
          <Modal.Title>Scrolling With Content Modal</Modal.Title>
          <Button variant="" className="btn btn-close" onClick={() => { viewDemoClose("Scroll") }}>
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.{" "}
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.
          </p>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain.
          </p>
          <p>
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"  onClick={() => { viewDemoClose("Scroll") }}>
            Save Changes
          </Button>
          <Button variant="secondary"  onClick={() => { viewDemoClose("Scroll") }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={12} lg={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Scrolling with Content</h6>
              </div>
              <>
      <Button
        className="btn ripple btn-secondary"
        variant=""
        onClick={handleClickOpen("paper")}
      >
        View Demo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Modal title</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            {[...new Array(50)]
              .map(
                () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? 
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="me-1" onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Row>
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Varying modal content</h6>
                <p className="text-muted card-sub-title">
                  Below are different kind of effects to choose from.
                </p>
              </div>
              <Row className="row-sm">
                <div className="btn-list">
                  <Varyingmodal />

                  <Varyingmodal1 />

                  <Varyingmodal2 />

                </div>
                <Modal
                  className="fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <Modal.Header>
                        <h5 className="modal-title" id="exampleModalLabel">
                          New message
                        </h5>
                        <Button
                          variant=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                          <span aria-hidden="true">&times;</span>
                        </Button>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <div className="mb-3">
                            <Form.Label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Recipient:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control"
                              id="recipient-name"
                            />
                          </div>
                          <div className="mb-3">
                            <Form.Label
                              htmlFor="message-text"
                              className="col-form-label"
                            >
                              Message:
                            </Form.Label>
                            <textarea
                              className="form-control"
                              id="message-text"
                            ></textarea>
                          </div>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </Button>
                        <Button
                          variant=""
                          type="button"
                          className="btn btn-primary"
                        >
                          Send message
                        </Button>
                      </Modal.Footer>
                    </div>
                  </div>
                </Modal>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
      <Row>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Toggle between modals</h6>
              </div>
              <Row className="row-sm">
                <DraggableModal />
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">full-screen</h6>
              </div>
              <Fullscreen />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">popover model</h6>
              </div>
              <Tooltipa />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Grid Modal</h6>
              </div>
              <Gridmodala />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Vertically centered</h6>
              </div>
              <VerticallyCenteredModal />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="card-title">Extra-large</h6>
              </div>
              <ExtralargeModal />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
}

Modals.propTypes = {};

Modals.defaultProps = {};

export default Modals;
