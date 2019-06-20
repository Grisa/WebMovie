import React, { Component } from "react";
import styled from "styled-components";

import { Card } from "semantic-ui-react";

const CardHeader = styled.div`
	padding: 1em;
`;

const Title = styled.span`
	font-size: 24px;
`;

const Description = styled.div``;

const Genry = styled.div``;
const Date = styled.div``;
const Duration = styled.div``;

export default class MovieData extends Component {
	render() {
		const { data } = this.props;

		return (
			<Card
				style={{
					gridColumn: 2,
					gridRow: 2,
					margin: "0 1em 1em 1em",
					width: "calc(100% - 1em)"
				}}
				fluid>
				<CardHeader>
					<Title>{data.title}</Title>
				</CardHeader>
				<Card.Content>
					<Description>{data.description}</Description>
					<Genry>{data.genry}</Genry>
					<Date>{data.date}</Date>
					<Duration>{data.duration}</Duration>
				</Card.Content>
			</Card>
		);
	}
}
