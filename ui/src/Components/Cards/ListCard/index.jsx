import React, { Component } from "react";
import styled from "styled-components";

import { Card } from "semantic-ui-react";

const Container = styled.div`
	border: 1px solid #7d4cdb;
	background: #7d4cdb;
	width: 300px;
	height: 150px;
	padding: 10px;
`;

class ListCard extends Component {
	render() {
		return (
			<Container>
				<Card fluid style={{ height: "100%" }}>
					<Card.Header>
						<span>nome do filme</span>
					</Card.Header>
					<Card.Content>
						<span>gênero</span>
						<span>imagem</span>
						<span>classificação</span>
					</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default ListCard;
