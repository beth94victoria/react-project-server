import React, { Component } from 'react';

class Services extends Component {
	render() {
		return (
			<div>
				{/* the code commented out below is for image upload to be implemented later */}
				{/* <div className="widget">
				<script src="//widget.cloudinary.com/global/all.js" type="text/javascript"></script>
				<script src="bundle.js"></script>
				</div> */}
		<div className="container">
			<div className="row">
				<div className="col-6 align-items-center">
					<div>
						<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/mower_res.jpg"} alt="mower"/>
						<br/><p className="servicetext">LAWN MOWING</p>
					</div>		
				</div>
				<div className="col-6 align-items-center">
					<div>
						<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408307/Five%20Star/whippersnipper_res.jpg"} alt="whipsnip"/>
						<br/><p className="servicetext">WHIPPER SNIPPING</p>
					</div>				
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408307/Five%20Star/weeding_res.jpg"} alt="weeding"/>
					<br/><p className="servicetext">WEEDING</p>				
				</div>
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/hedging_res.jpg"} alt="hedging"/>
					<br/><p className="servicetext">HEDGE TRIMMING</p>				
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408307/Five%20Star/spraying_res.jpg"} alt="spraying"/>
					<br/><p className="servicetext">PLANT SPRAYING</p>				
				</div>
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/rubbish_res.jpg"} alt="rubbish"/>
					<br/><p className="servicetext">RUBBISH REMOVAL</p>				
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/gardening_res.jpg"} alt="gardening"/>
					<br/><p className="servicetext">GARDENING</p>				
				</div>
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408307/Five%20Star/treetrim_res.jpg"} alt="treetrim"/>
					<br/><p className="servicetext">TREE TRIMMING</p>				
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408307/Five%20Star/treeremove_res.jpg"} alt="treecut"/>
					<br/><p className="servicetext">TREE REMOVAL</p>				
				</div>
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408307/Five%20Star/turf_res.jpg"} alt="turfing"/>
					<br/><p className="servicetext">TURF LAYING</p>				
				</div>
			</div>
			<div className="row">
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/fert_res.jpg"} alt="fertilizer"/>
					<br/><p className="servicetext">FERTILISE LAWNS</p>				
				</div>
				<div className="col-6">
					<img className="rounded servimg" src={"https://res.cloudinary.com/dvqlfwgtf/image/upload/v1549408306/Five%20Star/pressurewash_res.jpg"} alt="pressurewash"/>
					<br/><p className="servicetext">PRESSURE WASHING</p>				
				</div>
			</div>
		</div>
		</div>
		)
	}
}

export default Services;


