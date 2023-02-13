import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Error501 = () => (
  <div>
  
					{/* <!-- row --> */}
					<Row>
						 {/* <!-- Main-error-wrapper --> */}
							<div className="main-error-wrapper wrapper-1 page page-h">
								<h1 className="">501<span className="tx-20">error</span></h1>
								<h2 className="">Oopps. The page you were looking for doesn't exist.</h2>
				<h6 className="">You may have mistyped the address or the page may have moved.</h6><Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/dashboard/dashboard-1`}>Back to Home</Link>
							</div>
				        {/* <!-- /Main-error-wrapper --> */}

					</Row>
					{/* <!-- row closed --> */}
				</div>
 
);

Error501.propTypes = {};

Error501.defaultProps = {};

export default Error501;
