import React, { Component } from 'react';
// import Text from '../Text'



class About extends Component {
	render() {
		let imgStyle = {
			width: '200px',
			height: '200px',
			float: 'left',
			marginRight: '30px',
			marginTop: '20px',
			marginBottom: '10px'


		}
		return (
			<div class="container mt-4 mb-4" style={{ height: '600px' }}>

				<div>
					<img style={imgStyle} src="https://res.cloudinary.com/dvqlfwgtf/image/upload/v1548736044/Five%20Star/Troy_c.jpg" class="rounded-circle" ></img>
				</div>
				<div class="p-4 pb-5 " >
					<p class=" pb-2 lead">
						Five Star Mowing offers fast and reliable lawn and garden care for commercial and domestic resident properties in Caboolture and the surrounding areas of north Brisbane. After years of experience what keeps Troy going is the rewarding opportunity to stand back and see what has been accomplished. The satisfying feeling of ‘I did that!’ Even the smallest changes can make a big difference to a yard.
					</p>
					<p class="pb-2 lead">
						So just fill out the <a type="button" href="/freequote" class="btn btn-outline-primary ">Quote Form</a> to have a free quote and property inspection.
					</p>
					{/* <p class=" pb-2">
						Five Star Mowing offers fast and reliable lawn and garden care for commercial and domestic resident properties in Caboolture and the surrounding areas of north Brisbane.
						Fill out the <a href="/Quote.js">(Quote Form)</a> to have a free quote and property inspection.
					</p>
					<p class=" pb-2">
						Five Star Mowing offers fast and reliable lawn and garden care for commercial and domestic resident properties in Caboolture and the surrounding areas of north Brisbane.
						Fill out the <a href="/Quote.js">(Quote Form)</a> to have a free quote and property inspection.
					</p>
					<p class=" pb-2">
						Five Star Mowing offers fast and reliable lawn and garden care for commercial and domestic resident properties in Caboolture and the surrounding areas of north Brisbane.
						Fill out the <a href="/Quote.js">(Quote Form)</a> to have a free quote and property inspection.
					</p>
					<p class=" pb-2">
						Five Star Mowing offers fast and reliable lawn and garden care for commercial and domestic resident properties in Caboolture and the surrounding areas of north Brisbane.
						Fill out the <a href="/Quote.js">(Quote Form)</a> to have a free quote and property inspection.
					</p> */}
					<p class="container lead py-4">Because you’ve got better things to do on a weekend than mow!</p>

				</div>
			</div>
		)
	}
}

export default About;