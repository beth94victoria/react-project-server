import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

const Package = (props) => {
	return (
		<Card className="mb-3">
			<CardImg top width="100%" src={props.avatar} alt={props.alt} />
			<CardBody>
				<CardTitle>{props.title}</CardTitle>
				<CardText className="text-left">{props.description}</CardText>
				<button className="btn btn-success float-left">{props.more}</button>
			</CardBody>
		</Card>
	);
};

export default Package;
