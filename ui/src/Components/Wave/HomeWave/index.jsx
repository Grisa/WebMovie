import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import Comment from "./Comment";
import MovieData from "./MovieData";
import Evaluation from "./Evaluation";

const Container = styled.div`
	height: 100vmax;
	width: 100%;
	z-index: 9999999;
	position: absolute;
	animation-delay: 3s;
	display: grid;
	overflow: hidden;
	grid-template-columns: repeat(16, 1fr);
	grid-template-rows: repeat(32, 50px);
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
						borderRadius: "15em",
						height: "50px",
						width: "50px",
						gridArea: "2 / 15 / auto / auto",
						justifySelf: "end"
					}}
					circular
					icon="x"
					onClick={handleClose()}
				/>
				<MovieData data={data} />
				<Evaluation data={data} />
				<Comment comments={data.comments} />
			</Container>
		);
	}
}

export default HomeWave;
