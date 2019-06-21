import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import Pool from "../../Components/Pool/PoolMovie";

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
`;

const Container = styled.div`
	display: flex;
	grid-column: 2;
	justify-content: space-between;
`;

const movie = [
	{
		title: "Filme 1",
		description: "descrição do filme 1, é um filme com uma galerinha da pesada",
		genry: "Terror",
		date: new Date().getTime(),
		duration: 60 * 60 * 2.5,
		comments: [
			{
				author: "Ramiro",
				time: 1563728203000,
				comment: "ola"
			},
			{
				author: "Benjamin",
				time: 1563730278000,
				comment: "ola 2"
			}
		],
		likes: 215435,
		like: NOT_RATED,
		favorite: UNFAVORITED
	},
	{
		title: "Filme 2",
		description: "descrição do filme 2, é um filme com uma galerinha da pesada",
		genry: "Terror",
		date: new Date().getTime(),
		duration: 60 * 60 * 2.5,
		comments: [
			{
				author: "Ramiro",
				comment: "ola"
			},
			{
				author: "Benjamin",
				comment: "ola 2"
			}
		],
		likes: 115435,
		like: LIKED,
		favorite: UNFAVORITED
	},
	{
		title: "Filme 3",
		description: "descrição do filme 3, é um filme com uma galerinha da pesada",
		likes: 5435,
		like: UNLIKED,
		favorite: UNFAVORITED
	},
	{
		title: "Filme 4",
		description: "descrição do filme 4, é um filme com uma galerinha da pesada",
		likes: 5342,
		like: LIKED,
		favorite: FAVORITED
	},
	{
		title: "Filme 5",
		description: "descrição do filme 5, é um filme com uma galerinha da pesada",
		likes: 3634,
		like: LIKED,
		favorite: UNFAVORITED
	},
	{
		title: "Filme 6",
		description: "descrição do filme 6, é um filme com uma galerinha da pesada",
		likes: 2154,
		like: LIKED,
		favorite: FAVORITED
	},
	{
		title: "Filme 7",
		description: "descrição do filme 7, é um filme com uma galerinha da pesada",
		likes: 1353,
		like: LIKED,
		favorite: FAVORITED
	}
];

const serie = [
	{
		title: "Série 1",
		description:
			"descrição da série 1, é uma série com uma galerinha da pesada",
		likes: 131254,
		like: LIKED,
		favorite: FAVORITED
	}
];

const anime = [
	{
		title: "Anime 1",
		description:
			"descrição do anime 1, é anime com um protagonista fudido, onde ele é imortal por que foda-se",
		likes: 131254,
		like: UNLIKED,
		favorite: UNFAVORITED
	}
];

class Ranking extends Component {
	goto = route => () => {
		this.props.history.push(route);
	};

	render() {
		return (
			<Grid>
				<Container>
					<Pool title="Filmes" list={movie} {...this.props} />
					<Pool title="Séries" list={serie} {...this.props} />
					<Pool title="Animes" list={anime} {...this.props} />
				</Container>
			</Grid>
		);
	}
}

export default withRouter(Ranking);
