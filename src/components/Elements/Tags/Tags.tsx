import React from 'react';
import { Breadcrumb, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";
import Select from 'react-select';

const Tags = () => {
	const [selected, setSelected] = React.useState([
		"Javascript",
		"ReactJs",
		"AngularJs",
		"VueJs",
		"jQuery",
		"Script",
		"Net",
	]);

	function MultipleselectTags() {
		const [value, setvalue] = React.useState("");

		const handleOnchange = () => {
			setvalue(value);
		};
		const Optioncategory1 = [
			{
				value: "category-2",
				label: "Firefox",
			},
			{
				value: "category-3",
				label: "Chrome",
			},
			{
				value: "category-4",
				label: "Safari",
			},
			{
				value: "category-5",
				label: "Opera",
			},
			{
				value: "category-6",
				label: "Internet Explorer",
			},
		];
		return (
			
			<Select
			onChange={handleOnchange}
			options={Optioncategory1}
			className="mt-2 "
			classNamePrefix="selectproduct"
			isSearchable
			placeholder="Firefox"
		  />
		);
	}
	const [Default, setDefault] = React.useState(false);
	const [Links, setLinks] = React.useState(false);
	const [Defaulttags, setDefaulttags] = React.useState(false);
	const [Color,setColor] = React.useState(false);
	return (
		<div>
			{/* <!-- breadcrumb --> */}
			<div className="breadcrumb-header justify-content-between">
				<div className="left-content">
					<span className="main-content-title mg-b-0 mg-b-lg-1">TAGS</span>
				</div>
				<div className="justify-content-center mt-2">
					<Breadcrumb className="breadcrumb">
						<Breadcrumb.Item className="breadcrumb-item tx-15" href="#">Elements</Breadcrumb.Item>
						<Breadcrumb.Item className="breadcrumb-item " active aria-current="page">Tags</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</div>
			{/* <!-- /breadcrumb --> */}

			{/* <!-- row --> */}
			<Row>
				<Col xl={6} lg={12}>
					{/* <!-- div --> */}
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								DEFAULT TAG
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										 type="switch"
										id="custom-switch"
										onClick={() => setDefault(!Default)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag">First tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
										<span className="tag">Second tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
										<span className="tag">Third tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
										<span className="tag">Fourth tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
									</div>
								</div>
								<Collapse  in={Default} className="mt-2">
									<pre>
										<code>
											{`
<div className="text-wrap">
	<div className="example">
        <div className="tags">
        	<span className="tag">First tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        	<span className="tag">Second tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        	<span className="tag">Third tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        	<span className="tag">Fourth tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
        </div>
	</div>
</div>
											`}
										</code>
									</pre>
								</Collapse>
							</div>
							
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col xl={6} lg={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Link Tag
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										 type="switch"
										id="custom-switch"
										onClick={() => setLinks(!Links)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-rounded">First tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
										<span className="tag tag-rounded">Second tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
										<span className="tag tag-rounded">Third tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
										<span className="tag tag-rounded">Fourth tag<Link to="#" className="tag-addon rounded-pill "><i className="fe fe-x"></i></Link></span>
									</div>
								</div>
								<Collapse in={Links} className="mt-2">
									<pre>
										<code>
											{`
<div className="text-wrap">
	<div className="example">
		<div className="tags">
            <span className="tag tag-rounded">First tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
            <span className="tag tag-rounded">Second tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
            <span className="tag tag-rounded">Third tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>
            <span className="tag tag-rounded">Fourth tag<Link to="#" className="tag-addon rounded-pill "><i className="fe fe-x"></i></Link></span>
		</div>
	</div>
</div>
											`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col xl={6} lg={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Default Tags Addon
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										 type="switch"
										id="custom-switch"
										onClick={() => setDefaulttags(!Defaulttags)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-default bg-light">
											One
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default  bg-light">
											Two
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default  bg-light">
											Three
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
										<span className="tag tag-default  bg-light">
											Four
											<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
										</span>
									</div>
								</div>
								<Collapse in={Defaulttags} className="mt-2">
									<pre><code>
										{`
<div className="text-wrap">
    <div className="example">
    	<div className="tags">
    		<span className="tag tag-default bg-light">
    			One
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    		<span className="tag tag-default  bg-light">
    			Two
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    		<span className="tag tag-default  bg-light">
    			Three
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    		<span className="tag tag-default  bg-light">
    			Four
    			<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>
    		</span>
    	</div>
    </div>
</div>
										`}
										</code></pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col xl={6} lg={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Colored tags
							</div>
								<Form className="ms-auto">
									<Form.Check
										
										label="Show Code"
										 type="switch"
										id="custom-switch"
										onClick={() => setColor(!Color)}
										className="showcode d-flex ms-auto "
									/>
								</Form>
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="example">
									<div className="tags">
										<span className="tag tag-primary br-5">primary tag<Link to="#" className="tag-addon bg-primary"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-secondary br-5">secondary tag<Link to="#" className="tag-addon bg-secondary"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-success br-5">success tag<Link to="#" className="tag-addon bg-success"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-warning br-5">warning tag<Link to="#" className="tag-addon bg-warning"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-teal br-5">teal tag<Link to="#" className="tag-addon bg-teal"><i className="fe fe-x"></i></Link> </span>
										<span className="tag tag-danger br-5">danger tag<Link to="#" className="tag-addon bg-danger"><i className="fe fe-x"></i></Link> </span>
									</div>
								</div>
								<Collapse in={Color} className="mt-2">
									<pre>
										<code>
											{`
<div className="text-wrap">
    <div className="example">
    	<div className="tags">
    		<span className="tag tag-primary br-5">primary tag<Link to="#" className="tag-addon bg-primary"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-secondary br-5">secondary tag<Link to="#" className="tag-addon bg-secondary"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-success br-5">success tag<Link to="#" className="tag-addon bg-success"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-warning br-5">warning tag<Link to="#" className="tag-addon bg-warning"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-teal br-5">teal tag<Link to="#" className="tag-addon bg-teal"><i className="fe fe-x"></i></Link> </span>
    		<span className="tag tag-danger br-5">danger tag<Link to="#" className="tag-addon bg-danger"><i className="fe fe-x"></i></Link> </span>
    	</div>
    </div>
</div>
											`}
										</code>
									</pre>
								</Collapse>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col lg={12} xl={12}>
					<Card>
						<Card.Body>
							<div className='d-flex'>
							<div className="main-content-label mg-b-5">
								Input Tags
							</div>
							
							</div>
							<p className="mg-b-20">It is Very Easy to Customize and it uses in your website aplication.</p>
							<div className="text-wrap">
								<div className="">
									<div className='form-group'>
										<div className='bootstrap-tagsinput'>
											<TagsInput
												// className="badge badge bg-primary"
												value={selected}
												onChange={setSelected}
												name="courses"
											/>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}

				{/* <!--div--> */}
				<Col lg={12} xl={12}>
					<Card>
						<Card.Body>
							<div className="main-content-label mg-b-5">
								Multiple select Tags
							</div>
							<p className="mg-b-10">Multiple Select</p>
							<MultipleselectTags />
							
						</Card.Body>
					</Card>
				</Col>
				{/* <!--/div--> */}
			</Row>
			{/* <!-- /row --> */}
		</div>
	);
}

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
