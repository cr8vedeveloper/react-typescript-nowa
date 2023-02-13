import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Form, FormGroup, Row,Tooltip, OverlayTrigger,  Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Datacard} from './data'
import { Delete, REMOVE, ADD } from '../../../../redux/actions/action';

const Cart = () => {
  const dec = (el:any) => {
    let unit = el.target.parentElement.querySelector('input').value;
    if (unit === 0) {
      return false;
    }
    else {
      el.target.parentElement.querySelector('input').value--
    }
  }
  const inc = (el:any) => {
    el.target.parentElement.querySelector('input').value++
  }
  function handleRemove(id:any) {
    const newList = list.filter((list) => list.id !== id);
    setList(newList);
  }
  const [list, setList] = React.useState(Datacard);
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state:any) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log(open);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const remove = (item:any) => {
    dispatch(REMOVE(item))
  }
  const send = (e:any) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  const ondelete = (item:any) => {
    dispatch(Delete(item))
  }


  const total = () => {
    let price = 0;
    getdata.map((ele:any) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">CART</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Ecommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Cart
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- row opened --> */}
      <Row>
        <Col md={12} xl={9} lg={12}>
          <Card>
            <Card.Body>
              {/* <!-- Shopping Cart--> */}
              <div className="product-details table-responsive text-nowrap">
               <Table className="table table-bordered table-hover mb-0 text-nowrap">
      <thead>
        <tr>
          <th className="text-start">Product</th>
          <th className="w-150">num</th>
          <th>price</th>
          <th>STATUS</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          getdata.length ?
            <Fragment>
              {
                getdata.map((item:any) => {
                  return (
                    <Fragment key={item.id}>
                      <tr >
                        <td 
                          // open={open}
                           onClick={handleClose}>
                          <div className="media">
                            <div className="card-aside-img">
                              <img src={item.src} className="h-60 w-60" alt="" />
                            </div>
                            <div className="media-body">
                              <div className="card-item-desc mt-0">
                                <h6 className="font-weight-semibold mt-0 text-uppercase">
                                  {item.name}
                                </h6>
                                <dl className="card-item-desc-1">
                                  <dt>{item.Size}</dt>
                                  <dd>{item.XXL}</dd>
                                </dl>
                                <dl className="card-item-desc-1">
                                  <dt>{item.bg} </dt>
                                  <dd>{item.colors}</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="handle-counter ms-2" id="handleCounter4">
                            <Button
                              variant=""
                              className="counter-minus btn btn-white lh-2 shadow-none"
                              onClick={item.qnty <= 1 ? () => ondelete(item.id) : () => remove(item) }
                            >
                              -
                            </Button>
                            <span className="qty"  ><div className="mt-2">{item.qnty}</div></span>
                            <Button
                              variant=""
                              className="counter-plus btn btn-white lh-2 shadow-none"
                             onClick = {()=> send(item)}
                            >
                              +
                            </Button>
                          </span>
                        </td>
                        <td className="text-center text-lg text-medium font-weight-bold  tx-15">
                          ${item.price}
                        </td>
                        <td className="text-center">
                          <span className={`badge bg-${item.stockbg} p-1`}>
                            {item.stock}
                          </span>
                        </td>
                        <td className="text-center">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Remove item</Tooltip>}
                          >
                            <div
                              className="btn btn-sm btn-danger-light"
                              onClick={() => ondelete(item.id)}
                            >
                              <i className="fe fe-trash "></i>
                            </div>
                          </OverlayTrigger>
                          <div className=' d-none'> {price}</div>
                        </td>
                      </tr>
                    </Fragment>
                  )
                })
              }
              
            </Fragment>
            :
            <>
            {
                list.map((item:any,k:any) => {
                  return (
                    <Fragment key={k}>
                      <tr >
                        <td 
                          // open={open}
                           onClick={handleClose}>
                          <div className="media">
                            <div className="card-aside-img">
                              <img src={item.src} className="h-60 w-60" alt="" />
                            </div>
                            <div className="media-body">
                              <div className="card-item-desc mt-0">
                                <h6 className="font-weight-semibold mt-0 text-uppercase">
                                  {item.name}
                                </h6>
                                <dl className="card-item-desc-1">
                                  <dt>{item.Size}</dt>:{' '} 
                                  <dd>{item.XXl}</dd>
                                </dl>
                                <dl className="card-item-desc-1">
                                  <dt>{item.bg} </dt>:{' '}
                                  <dd>{item.color}</dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="handle-counter ms-2" id="handleCounter4">
                            <Button
                              variant=""
                              className="counter-minus btn btn-white lh-2 shadow-none"
                              onClick={dec }
                            >
                              -
                            </Button>
                            <input type="text" className="qty"   defaultValue={item.Quantity}/>
                            <Button
                              variant=""
                              className="counter-plus btn btn-white lh-2 shadow-none"
                             onClick = {inc}
                            >
                              +
                            </Button>
                          </span>
                        </td>
                        <td className="text-center text-lg text-medium font-weight-bold  tx-15">
                          ${item.prices}
                        </td>
                        <td className="text-center">
                          <span className={`badge bg-${item.stockbg} p-1`}>
                            {item.stock}
                          </span>
                        </td>
                        <td className="text-center">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Remove item</Tooltip>}
                          >
                            <div
                              className="btn btn-sm btn-danger-light"
                              onClick={() => handleRemove(item.id)}
                            >
                              <i className="fe fe-trash "></i>
                            </div>
                          </OverlayTrigger>
                          <div className=' d-none'> {price}</div>
                        </td>
                      </tr>
                    </Fragment>
                  )
                })
              }
            </>
        }
        
      </tbody>
    </Table>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="shopping-cart-footer bd-0">
                <div className="column">
                  <Link className="btn btn-secondary" to={`${process.env.PUBLIC_URL}/pages/e-commerce/shop`}>
                    <i className="fe fe-corner-up-left  mx-2"></i>Back to Shopping
                  </Link>
                </div>
                <div className="column">
                  <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/pages/e-commerce/cart`}>
                    <i className="fe fe-refresh-cw mx-2"></i>Update Cart
                  </Link>
                  <Link className="btn btn-outline-primary" to={`${process.env.PUBLIC_URL}/pages/e-commerce/checkout`}>
                    <i className="fe fe-log-in mx-2"></i>Checkout
                  </Link>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg={12} xl={3} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <Form>
                <FormGroup className="mb-0">
                  {" "}
                  <label>Have coupon?</label>
                  <div className="input-group">
                    {" "}
                    <input
                      type="text"
                      className="form-control coupon"
                      placeholder="Coupon code"
                    />{" "}
                    <span className="input-group-append">
                      {" "}
                      <Button
                        variant=""
                        className="btn btn-primary btn-apply coupon"
                      >
                        Apply
                      </Button>{" "}
                    </span>{" "}
                  </div>
                </FormGroup>
              </Form>
            </Card.Body>
          </Card>
          <Card className="custom-card cart-details">
            <Card.Body>
              <h5 className="mb-3 font-weight-bold tx-14">PRICE DETAIL</h5>
              <dl className="dlist-align">
                <dt className="">ITEMS 3</dt>
                <dd className="text-end ms-auto">$ 262.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-end text-danger ms-auto">- $20.00</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Total price:</dt>
                <dd className="text-end ms-auto">$252.97</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Delivery:</dt>
                <dd className="text-end text-success ms-auto">Free</dd>
              </dl>
              <hr />
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-end  ms-auto tx-20">
                  <strong>$252.97</strong>
                </dd>
              </dl>
            </Card.Body>
            <Card.Footer>
              <div className="column">
                <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/pages/e-commerce/shop`}>
                  Continue Shopping
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* <!-- row closed --> */}
    </div>
  );
}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
