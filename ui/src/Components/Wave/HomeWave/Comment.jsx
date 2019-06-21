import React, { Component } from "react";
import styled from "styled-components";

import { Card } from "semantic-ui-react";

const CardHeader = styled.div`
	padding: 1em;
`;

const Title = styled.span`
	font-size: 24px;
`;

export default class Comment extends Component {
	render() {
		return (
			<Card
				style={{
					gridColumn: 2,
					gridRow: 3,
					margin: "0 1em 1em 1em",
					width: "calc(100% - 1em)"
				}}
				fluid>
				<CardHeader>
					<Title>Comentários</Title>
				</CardHeader>
				<Card.Content>asdasdasdasd</Card.Content>
			</Card>
		);
	}
}
