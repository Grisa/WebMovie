import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import Comment from "./Comment";
import MovieData from "./MovieData";
import Evaluation from "./Evaluation";

const Container = styled.div`
	height: inherit;
	width: 100%;
	z-index: 9999999;
	position: absolute;
	animation-delay: 3s;
	display: grid;
	grid-template-columns: 1fr 7fr 6fr 0.25fr 0.25fr 1fr;
	grid-template-rows: 0.25fr 2fr 5fr 5fr;
`;

/**
 * Nome
 * Descrição
 * Genero
 * Data
 * Duração
 * Comentários
 * Like/Fav
 */

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
				<MovieData data={data} />
				<Evaluation />
				<Comment comments={data.comments} />
			</Container>
		);
	}
}

export default HomeWave;
