import React, { Component } from "react";
import styled from "styled-components";
import { Button, Card } from "semantic-ui-react";

const Container = styled.div`
	height: inherit;
	width: 100%;
	z-index: 9999999;
	position: absolute;
	display: grid;
	grid-template-columns: 1fr 7fr 4fr 1fr 1fr 1fr;
	grid-template-rows: 0.5fr 1fr 13fr;
`;

class HomeWave extends Component {
	render() {
		const { handleClose, data } = this.props;

		return (
			<Container>
				<Button
					style={{
						gridColumn: 5,
						gridRow: 2,
						borderRadius: "15em",
						height: "50px",
						width: "50px"
					}}
					circular
					icon="x"
					onClick={handleClose()}
				/>
				<Card style={{ gridColumn: 2, gridRow: 2 }} fluid>
					<Card.Header>{data.name}</Card.Header>
					<Card.Content>{data.name}</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default HomeWave;
