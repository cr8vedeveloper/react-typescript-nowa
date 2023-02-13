
import React from 'react';
import { Breadcrumb, Card, Form, Collapse } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Images = () =>{
  const [Responsive,setResponsive] = React.useState(false);
  const [Thumbnail,setThumbnail] = React.useState(false);
  const [Right,setRight] = React.useState(false);
  const [Background,setBackground] = React.useState(false);
 return(
  <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">IMAGES</span>
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
              Images
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row --> */}
      <Card className=" mg-b-20" id="image1">
        <Card.Body>
          <div className='d-flex'>
          <h3 className="card-title  mg-b-10">Responsive</h3>
         <Form className="d-flex ms-auto">
           <Form.Check
             label="Show Code"
              type="switch"
             id="custom-switch"
             onClick={() => setResponsive(!Responsive)}
             className="showcode d-flex ms-auto "
           />
         </Form></div>
          <p className="mg-b-20">
            It is Very Easy to Customize and it uses in your website
            apllication.
          </p>
          <div className="text-wrap">
            <div className="example">
             
              <div>
                <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                  <img
                    alt="Responsive"
                    className="img-fluid br-5"
                    src={require("../../../assets/img/photos/1.jpg")}
                  />
                </Link>
              </div>
            
            </div>
          </div>
         <Collapse in={Responsive} className="mt-2">
           <pre>
             <code>
               {`
<div className="text-wrap">
  <div className="example">
    <div>
      <Link to="#">
         <img
           alt="Responsive"
           className="img-fluid br-5"
           src={require("../../../assets/img/photos/1.jpg")}
         />
       </Link>
    </div>
  </div>
</div>
            `}
             </code>
           </pre>
         </Collapse>
        </Card.Body>
      </Card>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Card className=" mg-b-20" id="image2">
        <Card.Body>
          <div className='d-flex'>
          <h3 className="card-title  mg-b-10">Image Thumbnail</h3>
         <Form className="d-flex ms-auto">
           <Form.Check
             label="Show Code"
              type="switch"
             id="custom-switch"
             onClick={() => setThumbnail(!Thumbnail)}
             className="showcode d-flex ms-auto "
           />
         </Form>
         </div>
          <p className="mg-b-20">
            It is Very Easy to Customize and it uses in your website
            apllication.
          </p>
          <div className="text-wrap">
            <div className="example">
            
                  <div>
              <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                <img
                  alt="Responsive"
                  className="img-thumbnail wd-100p wd-sm-200"
                  src={require("../../../assets/img/photos/1.jpg")}
                />
              </Link>
             </div>
            </div>
            
          </div>
         <Collapse in={Thumbnail}>
           <pre>
             <code>
               {`
<div className="text-wrap">
  <div className="example">
    <div>
      <Link to="#">
         <img
           alt="Responsive"
           className="img-thumbnail wd-100p wd-sm-200"
           src={require("../../../assets/img/photos/1.jpg")}
         />
       </Link>
    </div> 
  </div>
</div>
                  `}
             </code>
           </pre>
         </Collapse>
        </Card.Body>
      </Card>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Card className=" mg-b-20" id="image3">
        <Card.Body>
          <div className='d-flex'>
          <h3 className="card-title  mg-b-10">right and left Aligning </h3>
         <Form className="d-flex ms-auto">
           <Form.Check
             label="Show Code"
              type="switch"
             id="custom-switch"
             onClick={() => setRight(!Right)}
             className="showcode d-flex ms-auto "
           />
         </Form>
         </div>
          <p className="mg-b-20">
            It is Very Easy to Customize and it uses in your website
            apllication.
          </p>
          <div className="text-wrap">
            <div className="example">
              
              <div className="bd pd-20 clearfix">
                <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                  <img
                    alt=""
                    className="rounded float-sm-left wd-100p wd-sm-200"
                    src={require("../../../assets/img/photos/1.jpg")}
                  />
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                  <img
                    alt=""
                    className="rounded float-sm-right wd-100p wd-sm-200 mg-t-10 mg-lg-t-0"
                    src={require("../../../assets/img/photos/1.jpg")}
                  />
                </Link>
              </div>
              
            </div>
          </div>
         <Collapse in={Right} className="mt-2">
           <pre>
             <code>
               {`
<div className="text-wrap">
  <div className="example">
    <div className="bd pd-20 clearfix">
      <Link to="#">
         <img
           alt=""
           className="rounded float-sm-left wd-100p wd-sm-200"
           src={require("../../../assets/img/photos/1.jpg")}
         />
      </Link>
      <Link to="#">
         <img
           alt=""
           className="rounded float-sm-right wd-100p wd-sm-200 mg-t-10 mg-lg-t-0"
           src={require("../../../assets/img/photos/1.jpg")}
         />
       </Link>
    </div>
  </div>
</div>
                    `}
             </code>
           </pre>
         </Collapse>
        </Card.Body>
      </Card>
      {/* <!-- /row --> */}

      {/* <!-- row --> */}
      <Card id="image4">
        <Card.Body>
          <h3 className="card-title  mg-b-10">Background Image</h3>
          <p className="mg-b-20">
            It is Very Easy to Customize and it uses in your website
            apllication.
          </p>
          <div className="text-wrap">
            <div className="example">
              <Form className="d-flex ms-auto">
                    <Form.Check
                      type="switch"
                      label="Show Code"
                      
                      id="custom-switch"
                onClick={() => setBackground(!Background)}
                      className="showcode d-flex ms-auto "
                    />
                  </Form>
                  <div>
              <Link to={`${process.env.PUBLIC_URL}/pages/gallery`}>
                <figure className="pos-relative  br-5 mg-b-0 wd-sm-80p wd-md-50p">
                  <img
                    alt="Responsive"
                    className="img-fit-cover  br-5"
                    src={require("../../../assets/img/photos/1.jpg")}
                  />
                  <figcaption className="pos-absolute  br-5 a-0 pd-25 bg-black-5 tx-white-8">
                    <h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">
                      What Does Royalty-Free Mean?
                    </h6>
                    <p className="mg-b-0 tx-10 tx-sm-16">
                      Royalty free means you just need to pay. You don't need to
                      pay additional or ongoing fees for each person who sees or
                      uses it.
                    </p>
                  </figcaption>
                </figure>
              </Link>
              </div>
              <Collapse in={Background} className="mt-2">
                <pre>
                  <code>
                    {`
<div className="text-wrap">
  <div className="example"> 
    <div>
      <Link to="#">
        <figure className="pos-relative  br-5 mg-b-0 wd-sm-80p wd-md-50p">
          <img
            alt="Responsive"
            className="img-fit-cover  br-5"
            src={require("../../../assets/img/photos/1.jpg")}
          />
          <figcaption className="pos-absolute  br-5 a-0 pd-25 bg-black-5 tx-white-8">
            <h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">
              What Does Royalty-Free Mean?
            </h6>
            <p className="mg-b-0">
              Royalty free means you just need to pay. You don't need to
              pay additional or ongoing fees for each person who sees or
              uses it.
            </p>
          </figcaption>
        </figure>
      </Link>
    </div>
  </div>
</div>                   
                    `}
                  </code>
                </pre>
              </Collapse>
            </div>
          </div>
        </Card.Body>
        {/* <!-- /row --> */}
      </Card>
    </div>
);}

Images.propTypes = {};

Images.defaultProps = {};

export default Images;
