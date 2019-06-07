import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

const Container = styled.div`
	height: inherit;
	width: 100%;
	z-index: 9999999;
	position: absolute;
	display: grid;
	grid-template-columns: 1fr 7fr 4fr 1fr 1fr 1fr;
	grid-template-rows: 0.5fr 1fr 13fr;
`;

class SearchWave extends Component {
	render() {
		const { data } = this.props;

		return (
			<Container>
				<Card style={{ gridColumn: 2, gridRow: 2 }} fluid>
					<Card.Header>{data.name}</Card.Header>
					<Card.Content>{data.name}</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default SearchWave;
