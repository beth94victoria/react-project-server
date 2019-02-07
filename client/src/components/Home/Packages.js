import React from 'react';
import Package from './Package';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Lawn from '../../resources/images/lawn-thumbnail.png';
import Grass from '../../resources/images/grass-care.png';
import Hedge from '../../resources/images/loop-hedge.png';

const Packages = () => {
	return (
		<div className="container mb-5 mt-5">
			<div className="row">
				<Zoom duration={500}>
					<div className="col-md-4">
						<Package
							title="Lawn Mowing"
							alt="Lawn Mowing"
							avatar={Lawn}
							description={
								"lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "
							}
							more="Explore More..."
						/>
					</div>
				</Zoom>
				<Bounce buttom>
					<div className="col-md-4">
						<Package
							title="Garden Care"
							alt="Garden Care"
							avatar={Grass}
							description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "
							more="Explore More..."
						/>
					</div>
				</Bounce>
				<Slide right>
					<div className="col-md-4">
						<Package
							title="Tree Lopping & HEDGE trimming"
							alt=""
							avatar={Hedge}
							description="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "
							more="Explore More..."
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Packages;
