import React from "react";
import { Accordion, Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Accordions = () => (
  <>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">ACCORDION</span>
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
            Accordion
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- row --> */}
    <Row className="accordiondclose">
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Basic Style Accordion</h6>
              <p className="text-muted card-sub-title">
                The default collapse behavior to create an accordion.
              </p>
            </div>
            <Accordion defaultActiveKey="Item1" id="accordion">
              <Accordion.Item eventKey="Item1" className="">
                <Accordion.Header
                  className=" "
                  id="headingOne"
                >
                  Making a Beautiful CSS3 Button Set
                </Accordion.Header>
                <Accordion.Body className="borders">
                  A concisely coded CSS3 button set increases usability across
                  the board, gives you a ton of options, and keeps all the code
                  involved to an absolute minimum. Anim pariatur cliche
                  reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat
                  skateboard dolor brunch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="Item2" className="">
                <Accordion.Header
                  className=" "
                  id="headingTwo"
                >
                  Horizontal Navigation Menu Fold Animation
                </Accordion.Header>
                <Accordion.Body className="borders">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="Item3" className="">
                <Accordion.Header
                  className=" "
                  id="headingThree"
                >
                  Creating CSS3 Button with Rounded Corners
                </Accordion.Header>
                <Accordion.Body className="borders">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="accordiondclose">
      <Col lg={12} md={12}>
        <div className="card overflow-hidden">
          <div className="card-header pb-0">
            <h3 className="card-title">Accordion Style01</h3>
            <p className="text-muted card-sub-title mb-0">
              The default collapse behavior to create an accordion.
            </p>
          </div>
          <Card.Body>
            <div className="panel-group1" id="accordion11" role="tablist">
              <div className="card overflow-hidden">
                <Accordion>
                  <Accordion.Item
                    eventKey="Item1"
                    className="accordion-toggle panel-heading1"
                  >
                    <Accordion.Header>Section 1</Accordion.Header>
                    <Accordion.Body className="borders">
                      A concisely coded CSS3 button set increases usability
                      across the board, gives you a ton of options, and keeps
                      all the code involved to an absolute minimum. Anim
                      pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="card overflow-hidden">
                <Accordion>
                  <Accordion.Item
                    eventKey="Item1"
                    className="accordion-toggle panel-heading1"
                  >
                    <Accordion.Header className=" " id="headingOne">
                      Section 2
                    </Accordion.Header>
                    <Accordion.Body className="borders">
                      A concisely coded CSS3 button set increases usability
                      across the board, gives you a ton of options, and keeps
                      all the code involved to an absolute minimum. Anim
                      pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

            </div>
          </Card.Body>
        </div>
      </Col>
    </Row>
    {/* // <!-- row closed -->

					// <!-- row opened --> */}
    <Row className="accordiondclose">
      <Col xl={12}>
        <Card>
          <div className="card-header">
            <h3 className="card-title">Accordion Style02</h3>
          </div>
          <Card.Body className=" h-100">
            <div
              id="accordion01"
              className="w-100 overflow-hidden Accordion-Style02 "
            >
              <div className="mb-2">
                <Accordion
                  defaultActiveKey="0"
                  flush
                  className="accor"
                  id="headingOne1"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> Accordions With Text</Accordion.Header>
                    <Accordion.Body
                      id="collapseOne1"
                      className="border p-3 accstyle border-top-0"
                    >
                      <div>
                        I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, but because those who do not know how to
                        pursue pleasure rationally encounter consequences that
                        are extremely painful sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum
                        quidem rerum facilis est et expedita distinctio. Nam
                        libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus. Temporibus autem quibusdam et aut
                        officiis debitis aut rerum necessitatibus saepe eveniet
                        ut et voluptates repudiandae sint et molestiae
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header  id="headingTwo2">
                      {" "}
                      Accordions with images
                    </Accordion.Header>
                    <Accordion.Body className="border p-3 accstyle border-top-0">
                      <div >
                        <Row>
                          <Col lg={3} md={6}>
                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`} className="bg-transparent">
                              <img
                                className="img-fluid rounded m-2 "
                                src={require("../../../assets/img/photos/11.jpg")}
                                alt="banner"
                              />
                            </Link>
                          </Col>
                          <Col lg={3} md={6}>
                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`} className="bg-transparent">
                              <img
                                className="img-fluid rounded m-2"
                                src={require("../../../assets/img/photos/10.jpg")}
                                alt="banner"
                              />
                            </Link>
                          </Col>
                          <Col lg={3} md={6}>
                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`} className="bg-transparent">
                              <img
                                className="img-fluid rounded m-2"
                                src={require("../../../assets/img/photos/11.jpg")}
                                alt="banner"
                              />
                            </Link>
                          </Col>
                          <Col lg={3} md={6}>
                            <Link to={`${process.env.PUBLIC_URL}/pages/gallery`} className="bg-transparent">
                              <img
                                className="img-fluid rounded m-2"
                                src={require("../../../assets/img/photos/12.jpg")}
                                alt="banner"
                              />
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="mb-2">
                <Accordion className="accor">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header id="headingThree3">
                      Accordions with tables
                    </Accordion.Header>
                    <Accordion.Body className="border table-responsive p-3 accstyle border-top-0">
                      <Table className="table mb-0 table-bordered border-top mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div
                  id="collapseThree1"
                  className="collapse b-b0"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div></div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- row closed --> */}

    {/* <!-- Row --> */}
    <Row className="accordiondclose">
      <Col lg={12} md={12}>
        <Card>
          <Card.Body>
            <div>
              <h6 className="card-title mb-1">Accordion With Icons</h6>
              <p className="text-muted card-sub-title">
                The default collapse behavior to create an accordion.
              </p>
            </div>
            <div
              aria-multiselectable="true"
              className="accordion accordion-dark"
              id="accordion2"
              role="tablist"
            >
              <div className="card mb-0">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      className=""
                      id="headingOne2"
                      role="tab"
                    >
                      <i className="fe fe-plus-circle me-2"></i>Making a
                      Beautiful CSS3 Button Set
                    </Accordion.Header>
                    <Accordion.Body className="borders">
                      A concisely coded CSS3 button set increases usability
                      across the board, gives you a ton of options, and keeps
                      all the code involved to an absolute minimum. Anim
                      pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="card mb-0 mt-2">
                    <Accordion.Header
                      className=""
                      id="headingTwo4"
                      role="tab"
                    >
                      <i className="fe fe-plus-circle me-2"></i>Horizontal
                      Navigation Menu Fold Animation
                    </Accordion.Header>
                    <Accordion.Body className="borders">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="card mb-0 mt-2">
                    <Accordion.Header
                      className=""
                      id="headingThree2"
                      role="tab"
                    >
                      <i className="fe fe-plus-circle me-2"></i>Creating CSS3
                      Button with Rounded Corners
                    </Accordion.Header>
                    <Accordion.Body className="borders">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

            </div>
            {/* <!-- accordion --> */}
          </Card.Body>
          <Card.Footer>
            <Table className="table main-table-reference mt-0 mb-0">
              <thead>
                <tr>
                  <th className="wd-40p">Class Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className="p-0 bg-transparent">
                      className="accordion accordion-[value]"
                    </code>
                  </td>
                  <td>indigo | blue | dark | gray</td>
                </tr>
              </tbody>
            </Table>
          </Card.Footer>
        </Card>
      </Col>
    </Row>

    {/* <!-- row closed --> */}
  </>
);

Accordions.propTypes = {};

Accordions.defaultProps = {};

export default Accordions;
