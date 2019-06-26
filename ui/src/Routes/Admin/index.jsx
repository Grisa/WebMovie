import React, { Component } from "react";
import styled from "styled-components";
import api from "../../Utils/Api";

import { Card, Image } from "semantic-ui-react";
import { FaPlusCircle } from "react-icons/fa";

import EditableWave from "../../Components/Wave/EditableWave";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(16, 1fr);
	min-height: calc(100vmin - 90px - 300px);
`;

const List = styled.div`
	grid-area: 1 / 2 / auto / 16;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-bottom: 20px;
`;

const CreateCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

class Admin extends Component {
	state = {
		data: []
	};

	async componentDidMount() {
		const { data } = await api.post("movie/getall");

		this.setState({ data: data.data });
	}

	getImage = () => {
		let avatares = ["matthew.png", "steve.jpg", "elliot.jpg"];
		let i = Math.floor(Math.random() * avatares.length);

		return `https://react.semantic-ui.com/images/avatar/large/${avatares[i]}`;
	};

	render() {
		const { data } = this.state;
		const { handleOpen } = this.props;

		return (
			<Container>
				<List>
					<Card
						style={{ margin: "0 0 20px 0", minHeight: 290 }}
						onClick={handleOpen(EditableWave, { create: true })}>
						<CreateCard>
							<FaPlusCircle size={75} />
						</CreateCard>
					</Card>
					{data.map(movie => (
						<Card
							style={{ margin: "0 0 20px 0", minHeight: 290 }}
							key={movie._id}
							onClick={handleOpen(EditableWave, { ...movie, edit: true })}>
							<Card.Header style={{ fontSize: "13pt" }}>
								{movie.name}
							</Card.Header>
							<Card.Content>
								<Image size="medium" src={this.getImage()} />
							</Card.Content>
						</Card>
					))}
				</List>
			</Container>
		);
	}
}

export default Admin;
