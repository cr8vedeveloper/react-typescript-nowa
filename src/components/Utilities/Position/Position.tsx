import React from 'react';
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';

const Position = () => (
  <div>
					{/* <!-- breadcrumb --> */}
					<div className="breadcrumb-header justify-content-between">
						<div className="left-content">
						  <span className="main-content-title mg-b-0 mg-b-lg-1">POSITION</span>
						</div>
						<div className="justify-content-center mt-2">
							<Breadcrumb className="breadcrumb">
								<Breadcrumb.Item className="breadcrumb-item tx-15"href="#">Utilities</Breadcrumb.Item>
								<Breadcrumb.Item className="breadcrumb-item active" aria-current="page">Position</Breadcrumb.Item>
							</Breadcrumb>
						</div>
					</div>
					{/* <!-- /breadcrumb --> */}

					{/* <!-- row --> */}
					<Row>
						<Col md={12}xl={12}xs={12} sm={12}>
							{/* <!--div--> */}
							<Card>
								<Card.Body>
						         <h3 className="card-title  mg-b-10">Set Position</h3>
									<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
									<div className="table-responsive">
										<Table className="table main-table-reference mg-t-0 mb-0">
											<thead>
												<tr>
													<th className="wd-30p">ClassName</th>
													<th className="wd-70p">Value</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><code>.pos-relative</code></td>
													<td>Set a relative position to an element.</td>
												</tr>
												<tr>
													<td><code>.pos-absolute</code></td>
													<td>Set an absolute position to an element.</td>
												</tr>
												<tr>
													<td><code>.pos-fixed</code></td>
													<td>Set a fixed position to an element.</td>
												</tr>
												<tr>
													<td><code>.pos-static</code></td>
													<td>Set a static position to an element.</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <!--/div--> */}

						{/* <!--div--> */}
						<Col md={12}xl={12}xs={12} sm={12}>
							<Card>
								<Card.Body>
						         <h3 className="card-title  mg-b-10">Cornering</h3>
									<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
									<div className="table-responsive">
										<Table className="table main-table-reference  mg-t-0 mb-0">
											<thead>
												<tr>
													<th className="wd-30p">ClassName</th>
													<th className="wd-70p">Value</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><code>.t-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.r-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.b-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.l-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <!--/div--> */}

						{/* <!--div--> */}
						<Col md={12}xl={12}xs={12} sm={12}>
							<Card>
								<Card.Body>
						         <h3 className="card-title  mg-b-10">X and Y Position</h3>
									<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
									<div className="table-responsive">
										<Table className="table main-table-reference mg-t-0 mb-0">
											<thead>
												<tr>
													<th className="wd-30p">ClassName</th>
													<th className="wd-70p">Value</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><code>.t-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.r-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.b-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.l-[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <!--/div--> */}

						{/* <!--div--> */}
						<Col md={12}xl={12}xs={12} sm={12}>
							<Card>
								<Card.Body>
						         <h3 className="card-title  mg-b-10">Negative Corner</h3>
									<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
									<div className="table-responsive">
										<Table className="table main-table-reference mg-t-0 mb-0">
											<thead>
												<tr>
													<th className="wd-30p">ClassName</th>
													<th className="wd-70p">Value</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><code>.t--[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.r--[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.b--[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
												<tr>
													<td><code>.l--[value]</code></td>
													<td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
						{/* <!--/div--> */}

						{/* <!--div--> */}
						<Col md={12}xl={12}xs={12} sm={12}>
							<Card>
								<Card.Body>
						         <h3 className="card-title  mg-b-10">Z-Index Property</h3>
									<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
									<div className="table-responsive">
										<Table className="table main-table-reference mg-t-0 mb-0">
											<thead>
												<tr>
													<th className="wd-30p">ClassName</th>
													<th className="wd-70p">Value</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><code>.z-index-[value]</code></td>
													<td>10 | 50 | 100 | 150 | 200</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					{/* <!-- row closed --> */}
				</div>
);

Position.propTypes = {};

Position.defaultProps = {};

export default Position;
