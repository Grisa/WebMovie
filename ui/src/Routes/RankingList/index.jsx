import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Pool from "../../Components/Pool/PoolMovie";
import api from "../../Utils/Api";

import {
	LIKED,
	UNLIKED,
	NOT_RATED,
	FAVORITED,
	UNFAVORITED
} from "../../Utils/Constants";

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 13fr 1fr;
	padding: 20px 0;
	min-height: calc(100vmin - 90px - 300px);
	overflow: hidden;
	height: 100%;
`;

const Container = styled.div`
	display: flex;
	grid-column: 2;
	justify-content: space-between;
`;

class Ranking extends Component {
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
		movies = movies.sort(this.sortMovies).slice(0, 10);
		series = series.sort(this.sortMovies).slice(0, 10);
		animes = animes.sort(this.sortMovies).slice(0, 10);

		this.setState({
			movies,
			series,
			animes
		});
	}

	sortMovies = (a, b) => {
		if (a.rating.count > b.rating.count) {
			return 1;
		}
		if (a.rating.count < b.rating.count) {
			return -1;
		}

		return 0;
	};

	goto = route => () => {
		this.props.history.push(route);
	};

	render() {
		const { open } = this.props;
		const { movies, series, animes } = this.state;

		return (
			<Grid style={open ? { height: 10 } : {}}>
				<Container>
					<Pool title="Filmes" list={movies} {...this.props} />
					<Pool title="Séries" list={series} {...this.props} />
					<Pool title="Animes" list={animes} {...this.props} />
				</Container>
			</Grid>
		);
	}
}

export default withRouter(Ranking);
