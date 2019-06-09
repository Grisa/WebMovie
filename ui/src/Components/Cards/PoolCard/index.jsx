import React, { Component } from "react";
import styled from "styled-components";

import { Button, Card, Icon, Image, Label } from "semantic-ui-react";

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

const Likes = styled.div`
	align-self: end;
`;

class PoolCard extends Component {
	render() {
		const { title } = this.props;

		return (
			<Container>
				<Card fluid>
					<Card.Content>
						<Grid>
							<Info>
								<Card.Header>{title}</Card.Header>
								<Card.Meta>Descrição do filme </Card.Meta>
								<Likes>
									<Label>
										<Icon name="star" />
										21351351 likes
									</Label>
								</Likes>
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
						<Button basic compact>
							Visualizar
						</Button>
					</Card.Content>
				</Card>
			</Container>
		);
	}
}

export default PoolCard;
