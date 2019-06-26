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
