import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import { Sweettable } from "./Sweetalerttable"
import Swal from "sweetalert2";


const Sweetalert = () => {

 
  const Timer = () => {
    Swal.fire({
      title: 'Your message',
      text: 'Your message(close after 2 seconds)',
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
    })
  }


  function Basic() {
    Swal.fire({
      title: "Welcome to Your Admin Page",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
    });
  }
  function Title() {
    Swal.fire({
      title: "Here is  a title!",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      text: "All are available in the template",
    });
  }
  //Primaryalert
  function Primaryalert() {
    Swal.fire({
      title: "Well done!",
      icon: "success",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#38cab3",
      text: "You clicked the button!",
    });
  }
  //Warningalert
  function PASSINGALERT() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Your will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  }
  function Warningalert() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  function Infoalertimg() {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: require("../../../assets/img/faces/6.jpg"),
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Custom image",
    });
  }


  const Ajax = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(``)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            SWEET ALERTS
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item " active aria-current="page">
              Sweet alert
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row opened --> */}
      <Row className="row-deck">
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Sweet-alert</h3>
            </Card.Header>
            <Card.Body className=" pt-0">
              <Sweettable />
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- col end --> */}
      </Row>
      {/* <!-- col end --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col sm={6} md={6} lg={4} xl={3}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Basic Alert</h6>
                <p className="text-muted card-sub-title">A Basic Message</p>
              </div>
              <div
                className="btn ripple btn-primary"
                id="swal-basic"
                onClick={Basic}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Title alert</h6>
                <p className="text-muted card-sub-title">
                  A title with a text under
                </p>
              </div>
              <div
                className="btn ripple btn-danger"
                id="swal-title"
                onClick={Title}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Success alert</h6>
                <p className="text-muted card-sub-title">A Success Message</p>
              </div>
              <div
                className="btn ripple btn-success"
                id="swal-success"
                onClick={Primaryalert}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Warning alert</h6>
                <p className="text-muted card-sub-title">A warning message</p>
              </div>
              <div
                className="btn ripple btn-warning"
                id="swal-warning"
                onClick={Warningalert}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div className='parameteralert'>
                <h6 className="card-title mb-1">Passing a parameter alert</h6>
                <p className="text-muted card-sub-title">
                  By passing a parameter
                </p>
              </div>
              <div
                className="btn ripple btn-secondary parameteralert"
                id="swal-parameter"
                onClick={PASSINGALERT}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Image alert</h6>
                <p className="text-muted card-sub-title">
                  A message with custom Image
                </p>
              </div>
              <div
                className="btn ripple btn-info"
                id="swal-image"
                onClick={Infoalertimg}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Timer alert</h6>
                <p className="text-muted card-sub-title">
                  A message with auto close timer
                </p>
              </div>
              <div
                className="btn ripple btn-dark"
                id="swal-timer"
                onClick={Timer}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={4} md={6} sm={6}>
          <Card className="custom-card text-center">
            <Card.Body>
              <div>
                <h6 className="card-title mb-1">Ajax Alert</h6>
                <p className="text-muted card-sub-title">
                  With a loader (for a AJAX requests)
                </p>
              </div>
              <div
                className="btn ripple btn-pink"
                id="swal-ajax"
                onClick={Ajax}
              >
                Click me !
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
}
export default Sweetalert;
