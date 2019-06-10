import React, { Component } from "react";
import styled from "styled-components";

import { Button, Card, Image } from "semantic-ui-react";

import HomeWave from "../../Wave/HomeWave";
import RateButton from "../../Generic/RateButton";

const Container = styled.div`
	margin: 10px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 12fr 6fr;
`;

const Info = styled.div`
	display: grid;
	justify-items: start;
	grid-template-rows: 1fr 4fr 1fr;
`;

const OptionContainer = styled.div`
	align-self: end;
`;

class PoolCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.title,
			description: props.description,
			likes: props.likes,
			like: props.like,
			favorite: props.favorite
		};
	}

	render() {
		const { handleOpen } = this.props;
		const { title, description, likes, like, favorite } = this.state;

		return (
			<Container>
				<Card fluid>
					<Card.Content>
						<Grid>
							<Info>
								<Card.Header>{title}</Card.Header>
								<Card.Meta>{description}</Card.Meta>
								<OptionContainer>
									<RateButton status={like} type="like" value={likes} />
									<RateButton status={favorite} type="favorite" />
								</OptionContainer>
							</Info>
							<div>
								<Image
									floated="right"
									size="small"
									src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
								/>
							</div>
						</Grid>
					</Card.Content>
					<Card.Content>
						<Button
							basic
							compact
							onClick={handleOpen(HomeWave, { ...this.state })}>
							Visualizar
						</Button>
					</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default PoolCard;
