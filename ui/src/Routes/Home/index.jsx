import React, { Component } from "react";
import styled from "styled-components";

import api from "../../Utils/Api";

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
		title: "filme 1",
		description: "filme 1",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		title: "filme 2",
		description: "filme 2",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		title: "filme 3",
		description: "filme 3",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		title: "filme 4",
		description: "filme 4",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		title: "filme 5",
		description: "filme 5",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		title: "filme 6",
		description: "filme 6",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	},
	{
		title: "filme 7",
		description: "filme 7",
		image: "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
	},
	{
		title: "filme 8",
		description: "filme 8",
		image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
	}
];

class Home extends Component {
	state = {
		movies: [],
		series: [],
		animes: []
	};
	async componentDidMount() {
		const { data } = await api.post("movie/getall");
		let movies = [],
			series = [],
			animes = [];

		for (let i in data.data) {
			switch (parseInt(data.data[i].type, 10)) {
				case 1:
					movies.push(data.data[i]);
					break;
				case 2:
					series.push(data.data[i]);
					break;
				case 3:
					animes.push(data.data[i]);
					break;
				default:
					console.warn("Tipo não detectado");
					break;
			}
		}

		this.setState({
			movies,
			series,
			animes
		});
	}

	render() {
		const { movies, series, animes } = this.state;

		return (
			<Grid>
				<Container>
					<LaneMovie title="Filmes" movies={movies} {...this.props} />
					<LaneMovie title="Séries" movies={series} {...this.props} />
					<LaneMovie title="Animes" movies={animes} {...this.props} />
					<div />
				</Container>
			</Grid>
		);
	}
}

export default Home;
