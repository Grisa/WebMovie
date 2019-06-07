import React, { Component } from "react";
import styled from "styled-components";

import LaneMovie from "../../Components/Lanes/LaneMovie";

const Container = styled.div`
	border: 0 solid #444;
	margin-top: 30px;
	color: #7d4cdb;
	font-size: 25px;
	font-weight: bold;
	height: fit-content;
	width: 100%;
	grid-column: 2;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 13fr 1fr;
`;

const filmes = [
	{
		name: "filme 1",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 2",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		name: "filme 3",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 4",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		name: "filme 5",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 6",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		name: "filme 7",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		name: "filme 8",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	}
];

class Home extends Component {
	render() {
		return (
			<Grid>
				<Container>
					<LaneMovie title="Filmes" movies={filmes} {...this.props} />
					<LaneMovie title="Séries" movies={filmes} {...this.props} />
					<LaneMovie title="Animes" movies={filmes} {...this.props} />
					<div />
				</Container>
			</Grid>
		);
	}
}

export default Home;
