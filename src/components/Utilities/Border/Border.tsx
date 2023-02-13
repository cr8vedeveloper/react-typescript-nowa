import React from 'react';
import { Breadcrumb, Card, Col, Row, Table } from 'react-bootstrap';



const Border = () => (
  <div>
				{/* <!-- breadcrumb --> */}
				<div className="breadcrumb-header justify-content-between">
					<div className="left-content">
					<span className="main-content-title mg-b-0 mg-b-lg-1">BORDERS</span>
					</div>
					<div className="justify-content-center mt-2">
						<Breadcrumb className="breadcrumb">
							<Breadcrumb.Item className="breadcrumb-item tx-15"href='#'>Utilities</Breadcrumb.Item>
							<Breadcrumb.Item className="breadcrumb-item "active aria-current="page">Border</Breadcrumb.Item>
						</Breadcrumb>
					</div>
				</div>
				{/* <!-- /breadcrumb --> */}

				{/* <!-- row --> */}
				<Row>
					<Col md={12} xl={12} xs={12}sm={12}>
						{/* <!--div--> */}
						<Card>
							<Card.Body>
						         <h3 className="card-title  mg-b-10">Set Border</h3>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
								<div className="d-flex flex-wrap">
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2">.bd</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd-s bd-2  ">.bd-s</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd-t bd-2 ">.bd-t</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd-y bd-2 ">.bd-y</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd-e bd-2">.bd-e</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd-x bd-2  ">.bd-x</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd-e bd-b bd-2 mb-0">.bd-b</div>
								</div>
								<div className="table-responsive mg-t-25">
									<Table className="table main-table-reference mg-b-0 mg-t-10">
										<thead>
											<tr>
												<th className="wd-30p">ClassNaclassName</th>
												<th className="wd-70p">Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd"</code></td>
												<td>Add border in all sides of an element using default color and width.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd-t"</code></td>
												<td>Add border to top side of element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd-e"</code></td>
												<td>Add border to right side of element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd-b"</code></td>
												<td>Add border to bottom side of element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd-s"</code></td>
												<td>Add border to left side of element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd-x"</code></td>
												<td>Add border to left and right side of element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd-y"</code></td>
												<td>Add border to top and bottom side of element.</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Card.Body>
						</Card>
					</Col>
          {/* <!--/div--> */}
					{/* <!--div--> */}
					<Col md={12} xl={12}xs={12}sm={12}>
						<Card>
							<Card.Body>
						         <h3 className="card-title  mg-b-10">Border Sizes</h3>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
								<div className="d-flex flex-wrap">
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd ">.bd</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2">.bd .bd-2</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-3">.bd .bd-3</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-4">.bd .bd-4</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-5">.bd .bd-5</div>
								</div>
								<div className="table-responsive mg-t-25">
									<Table className="table main-table-reference text-nowrap mg-b-0 mg-t-10">
										<thead>
											<tr>
												<th className="wd-30p">ClassNaclassName</th>
												<th className="wd-70p">Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd"</code></td>
												<td>Set 1px (default) border to element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd bd-2"</code></td>
												<td>Set 2px border to element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd bd-3"</code></td>
												<td>Set 3px border to element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd bd-4"</code></td>
												<td>Set 4px border to element.</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">className="bd bd-5"</code></td>
												<td>Set 5px border to element.</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Card.Body>
						</Card>
					</Col>
          {/* <!--/div--> */}
					<Col md={12} xl={12}xs={12}sm={12}>
						<div className="card mg-b-20">
							<Card.Body>
						         <h3 className="card-title  mg-b-10">Remove Border</h3>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
								<div className="d-flex flex-wrap">
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2 bd-t-0">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2 bd-e-0">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2 bd-b-0">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2 bd-s-0">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100  bd bd-2 bd-x-0">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bg-gray-100 bd bd-2 bd-y-0">.border</div>
								</div>
								<div className="table-responsive mg-t-25">
									<Table className="table main-table-reference text-nowrap mg-b-0 mg-t-10">
										<thead>
											<tr>
												<th className="wd-30p">ClassNaclassName</th>
												<th className="wd-70p">Description</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-t-0</code></td>
												<td>Remove top border of an element</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-e-0</code></td>
												<td>Remove right border of an element</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-b-0</code></td>
												<td>Remove bottom border of an element</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-s-0</code></td>
												<td>Remove left border of an element</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-x-0</code></td>
												<td>Remove left and right border of an element</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-y-0</code></td>
												<td>Remove top and bottom border of an element</td>
											</tr>
											<tr>
												<td><code className="p-0 bg-transparent">.bd-[t||r|bl|x|y]-0-f</code></td>
												<td>Force remove border of any side of an element.</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Card.Body>
						</div>
					</Col>
          {/* <!--/div--> */}
					<Col md={12} xl={12}xs={12}sm={12}>
						<Card>
							<Card.Body>
						         <h3 className="card-title  mg-b-10">Border Color</h3>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
								<div className="d-flex flex-wrap">
									<div className="p-5 w-40 mg-l-10 mb-2 bd bd-2 bd-primary">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bd bd-2 bd-success">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bd bd-2 bd-danger">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bd bd-2 bd-warning">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bd bd-2 bd-secondary">.border</div>
									<div className="p-5 w-40 mg-l-10 mb-2 bd bd-2 bd-teal">.border</div>
								</div>
								<div className="table-responsive mg-t-20 mb-0">
									<Table className="table main-table-reference text-nowrap mg-b-0 mg-t-0">
										<tbody>
											<tr>
												<td className="bg-gray-100 wd-20p"><b>className</b></td>
												<td><code className="p-0 bg-transparent">.bd-[value]</code></td>
												<td><code className="p-0 bg-transparent">.bd-gray-[value]</code></td>
											</tr>
											<tr>
												<td className="bg-gray-100 wd-20p"><b>Values</b></td>
												<td>primary | success | warning | danger | info | indigo | purple | pink | teal | orange</td>
												<td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col md={12} xl={12}xs={12}sm={12}>
						<Card>
							<Card.Body>
						         <h3 className="card-title  mg-b-10">Border Radius</h3>
								<p className="mg-b-20">It is Very Easy to Customize and it uses in website apllication.</p>
								<div className="d-flex">
									<div className="wd-80 ht-80 mg-l-10  bd bd-gray-500 radius-1"></div>
									<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 radius-5"></div>
									<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 radius-10"></div>
									<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 radius-20"></div>
									<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 radius-30"></div>
									<div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-circle"></div>
								</div>
								<div className="table-responsive mg-t-20 mb-0">
									<Table className="table main-table-reference mg-b-0 mg-t-0">
										<tbody>
											<tr>
												<td className="bg-gray-100 wd-20p"><b>className</b></td>
												<td><code className="p-0 bg-transparent">.radius</code></td>
												<td><code className="p-0 bg-transparent">.radius-[value]</code></td>
											</tr>
											<tr>
												<td className="bg-gray-100 wd-20p"><b>Values</b></td>
												<td>Set a border radius of 2px (default) to an element.</td>
												<td>1 | 5 | 10 | 20 | 30 | 50 | circle</td>
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

Border.propTypes = {};

Border.defaultProps = {};

export default Border;
