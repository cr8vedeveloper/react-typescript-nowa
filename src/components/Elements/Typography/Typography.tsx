import React from 'react';
import { Breadcrumb,  Card, Col, Collapse, Form, Row, Table } from 'react-bootstrap';

const Typography = () => {
  const [Default, setDefault] = React.useState(false);
  const [Color, setColor] = React.useState(false);
  const [Headings, setHeadings] = React.useState(false);
  const [Inline, setInline] = React.useState(false);
  const [Fontsize, setFontsize] = React.useState(false);
  const [Lineheight, setLineheight] = React.useState(false);
  const [Fontcolor, setFontcolor] = React.useState(false);
  const [Fontspacing, setFontspacing] = React.useState(false);
  const [Fontweight,setFontweight] = React.useState(false);
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">
            TYPOGRAPHY
          </span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Typography
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!--row open --> */}
      <Row className="row-sm">
        <Col xl={6} md={12}>
          <Card>
            <Card.Header className="card-header pb-0">
              <div className='d-flex'>
                <h3 className="card-title mb-2">Default Heading Text</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setDefault(!Default)}
                  className="showcode d-flex ms-auto "/></Form>

              </div>
              <p className="mg-b-20 tx-13 text-muted">
                Examples using standard <code>h1</code> to <code>h6</code> html
                tags
              </p>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="text-wrap">
                <div className="example">
                  <h1>h1. Heading</h1>
                  <h2>h2. Heading</h2>
                  <h3>h3. Heading</h3>
                  <h4>h4. Heading</h4>
                  <h5>h5. Heading</h5>
                  <h6>h6. Heading</h6>
                </div>
             
              </div>
              <Collapse in={Default} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
  </div>
</div>
                      `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/*<!-- COL-END --> */}
        <Col xl={6} md={12}>
          <Card>
            <Card.Header className="card-header pb-0">
              <div className='d-flex'>
                <h3 className="card-title mb-2">HEADING WITH COLOR TEXT</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setColor(!Color)}
                  className="showcode d-flex ms-auto "/></Form>

              </div>
              <p className="mg-b-20 tx-13 text-muted">
                Examples using standard <code>h1</code> to <code>h6</code> html
                tags
              </p>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="text-wrap">
                <div className="example">
                  <h1 className="text-primary">h1. Heading</h1>
                  <h2 className="text-secondary">h2. Heading</h2>
                  <h3 className="text-success">h3. Heading</h3>
                  <h4 className="text-danger">h4. Heading</h4>
                  <h5 className="text-info">h5. Heading</h5>
                  <h6 className="text-warning">h6. Heading</h6>
                </div>
               
              </div>
              <Collapse in={Color} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example">
    <h1 className="text-primary">h1. Heading</h1>
    <h2 className="text-secondary">h2. Heading</h2>
    <h3 className="text-success">h3. Heading</h3>
    <h4 className="text-danger">h4. Heading</h4>
    <h5 className="text-info">h5. Heading</h5>
    <h6 className="text-warning">h6. Heading</h6>
  </div>
</div>
                `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
        {/*<!-- COL-END --> */}
      </Row>
      {/* <!-- row closed --> */}

      <Card className=" custom-card" id="display">
        <Card.Body>
          <div>
            <div className='d-flex'>
              <h3 className="card-title  mg-b-10">Display headings</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                onClick={() => setHeadings(!Headings)}
                className="showcode d-flex ms-auto "
              /></Form>
            </div>
            <p className="text-muted card-sub-title">
              you need a heading to stand out, consider using a display
              heading—a larger, slightly more opinionated heading style.
            </p>
          </div>
          <div className="text-wrap">
            <div className="example">
              <h1 className="display-1">Display 1</h1>
              <h1 className="display-2">Display 2</h1>
              <h1 className="display-3">Display 3</h1>
              <h1 className="display-4">Display 4</h1>
              <h1 className="display-5">Display 5</h1>
              <h1 className="display-6">Display 6</h1>
            </div>
            
          </div>
          <Collapse in={Headings} className="mt-2">
            <pre>
              <code>
                {`
<div className="text-wrap">
  <div className="example">
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
    <h1 className="display-3">Display 3</h1>
    <h1 className="display-4">Display 4</h1>
    <h1 className="display-5">Display 5</h1>
    <h1 className="display-6">Display 6</h1>
  </div>
</div>
                  `}
              </code>
            </pre>
          </Collapse>
        </Card.Body>
      </Card>
      <Card className=" custom-card" id="linetext">
        <Card.Body>
          <div>
            <div className='d-flex'>
              <h3 className="card-title  mg-b-10">Inline text elements</h3>
              <Form className="ms-auto">
                <Form.Check
                  label="Show Code"
                   type="switch"
                  id="custom-switch"
                onClick={() => setInline(!Inline)}
                className="showcode d-flex ms-auto "/></Form>
            </div>
            <p className="text-muted card-sub-title">
              Styling for common inline HTML5 elements.
            </p>
          </div>
          <div className="text-wrap">
            <div className="example">
              <p>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
              <p>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
              <p>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </p>
              <p>
                <ins>
                  This line of text is meant to be treated as an addition to the
                  document.
                </ins>
              </p>
              <p>
                <u>This line of text will render as underlined</u>
              </p>
              <p>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </p>
              <p>
                <strong>This line rendered as bold text.</strong>
              </p>
              <p className="mb-0">
                <em>This line rendered as italicized text.</em>
              </p>
            </div>
           
          </div>
          <Collapse in={Inline} className="mt-2">
            <pre>
              <code>
                {`
<div className="text-wrap">
  <div className="example">
    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
    <p>
      <del>
        This line of text is meant to be treated as deleted text.
      </del>
    </p>
    <p>
      <s>
        This line of text is meant to be treated as no longer
        accurate.
      </s>
    </p>
    <p>
      <ins>
        This line of text is meant to be treated as an addition to the
        document.
      </ins>
    </p>
    <p>
      <u>This line of text will render as underlined</u>
    </p>
    <p>
      <small>
        This line of text is meant to be treated as fine print.
      </small>
    </p>
    <p>
      <strong>This line rendered as bold text.</strong>
    </p>
    <p className="mb-0">
      <em>This line rendered as italicized text.</em>
    </p>
  </div>
</div>
                  `}
              </code>
            </pre>
          </Collapse>
        </Card.Body>
      </Card>

      {/* <!--row open --> */}
      <Row>
        <Col lg={12} xl={12}>
          <Card className=" mg-b-20" id="typography">
            <Card.Body>
              <div className='d-flex'>
                <h3 className="card-title  mg-b-10">Font Size</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setFontsize(!Fontsize)}
                  className="showcode d-flex ms-auto "
                /></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[size]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Values</b>
                      </td>
                      <td>
                        8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22
                        | 24 | ... | 140
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[viewport]-[size]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Viewports</b>
                      </td>
                      <td>xs | sm | md | lg | xl</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Sizes</b>
                      </td>
                      <td>
                        8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22
                        | 24 | ... | 140 (step of 2)
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Collapse in={Fontsize} className="mt-2">
                  <pre>
                    <code>
                      {`
<div className="table-responsive">
  <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
    <tbody>
      <tr>
        <td className="bg-gray-100">
          <b>Classes</b>
        </td>
        <td>
          <code>.tx-[viewport]-[size]</code>
        </td>
      </tr>
      <tr>
        <td className="bg-gray-100">
          <b>Viewports</b>
        </td>
        <td>xs | sm | md | lg | xl</td>
      </tr>
      <tr>
        <td className="bg-gray-100">
          <b>Sizes</b>
        </td>
        <td>
          8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 22
          | 24 | ... | 140 (step of 2)
        </td>
      </tr>
    </tbody>
  </Table>
</div>
                      `}
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>

          {/* <!--div--> */}
          <Card className=" mg-b-20">
            <Card.Body>
              <div className='d-flex'>
                <h3 className="card-title  mg-b-10">Font Weight</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setFontweight(!Fontweight)}
                  className="showcode d-flex ms-auto "
                /></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[weight]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100">
                        <b>Weight</b>
                      </td>
                      <td>
                        bold | semibold | medium | normal | light | thin | xthin
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Fontweight} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
  <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
    <tbody>
      <tr>
        <td className="bg-gray-100">
          <b>Classes</b>
        </td>
        <td>
          <code>.tx-[weight]</code>
        </td>
      </tr>
      <tr>
        <td className="bg-gray-100">
          <b>Weight</b>
        </td>
        <td>
          bold | semibold | medium | normal | light | thin | xthin
        </td>
      </tr>
    </tbody>
  </Table>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}

          {/* <!--div--> */}
          <Card className=" mg-b-20">
            <Card.Body>
              <div className='d-flex'>
              <h3 className="card-title  mg-b-10">Font Color</h3>
              <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                onClick={() => setFontcolor(!Fontcolor)}
                className="showcode d-flex ms-auto "
              /></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-[color]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Colors</b>
                      </td>
                      <td>
                        primary | success | warning | danger | info | indigo |
                        purple | orange | teal | pink | black | white | inverse
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-gray-[num]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Colors</b>
                      </td>
                      <td>
                        100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-white-[transparency]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Colors</b>
                      </td>
                      <td>2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Fontcolor} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
  <Table className="table main-table-reference text-nowrap mg-t-0">
    <tbody>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Classes</b>
        </td>
        <td>
          <code>.tx-[color]</code>
        </td>
      </tr>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Colors</b>
        </td>
        <td>
          primary | success | warning | danger | info | indigo |
          purple | orange | teal | pink | black | white | inverse
        </td>
      </tr>
    </tbody>
  </Table>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}

          {/* <!--div--> */}
          <Card className=" mg-b-20">
            <Card.Body>
              <div className="d-flex">
              <h3 className="card-title  mg-b-10">Font Spacing</h3>
              <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                onClick={() => setFontspacing(!Fontspacing)}
                className="showcode d-flex ms-auto "
              /></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-spacing-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.tx-spacing--[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ( negative spacing result
                        )
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Fontspacing} className="mt-2" >
                <pre>
                  <code>
                    {`
<div className="table-responsive">
  <Table className="table main-table-reference text-nowrap mg-t-0">
    <tbody>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Classes</b>
        </td>
        <td>
          <code>.tx-spacing-[value]</code>
        </td>
      </tr>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Values</b>
        </td>
        <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
      </tr>
    </tbody>
  </Table>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
          {/* <!--/div--> */}

          {/* <!--div--> */}
          <Card>
            <Card.Body>
              <div className='d-flex'>
                <h3 className="card-title  mg-b-10">Line Height</h3>
                <Form className="ms-auto">
                  <Form.Check
                    label="Show Code"
                     type="switch"
                    id="custom-switch"
                  onClick={() => setLineheight(!Lineheight)}
                  className="showcode d-flex ms-auto "
                /></Form>
              </div>
              <p className="mg-b-20">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.lh-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
                        14 | 15
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="table-responsive">
                <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
                  <tbody>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Classes</b>
                      </td>
                      <td>
                        <code>.lh-[viewport]-[value]</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>View Port</b>
                      </td>
                      <td>xs | sm | md | lg | xl</td>
                    </tr>
                    <tr>
                      <td className="bg-gray-100 wd-20p">
                        <b>Values</b>
                      </td>
                      <td>
                        1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
                        14 | 15
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Collapse in={Lineheight} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="table-responsive">
  <Table className="table main-table-reference text-nowrap mg-t-0">
    <tbody>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Classes</b>
        </td>
        <td>
          <code>.lh-[value]</code>
        </td>
      </tr>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Values</b>
        </td>
        <td>
          1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
          14 | 15
        </td>
      </tr>
    </tbody>
  </Table>
</div>
<div className="table-responsive">
  <Table className="table main-table-reference text-nowrap mg-t-0 mg-b-0">
    <tbody>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Classes</b>
        </td>
        <td>
          <code>.lh-[viewport]-[value]</code>
        </td>
      </tr>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>View Port</b>
        </td>
        <td>xs | sm | md | lg | xl</td>
      </tr>
      <tr>
        <td className="bg-gray-100 wd-20p">
          <b>Values</b>
        </td>
        <td>
          1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
          14 | 15
        </td>
      </tr>
    </tbody>
  </Table>
</div>
                    `}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- /row --> */}
    </div>
  );
}
Typography.propTypes = {};

Typography.defaultProps = {};

export default Typography;
