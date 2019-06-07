import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

import HomeWave from "../../Wave/HomeWave";

const ImageContainer = styled.div`
	margin-right: 10px;
`;

class MovieCard extends Component {
	render() {
		const { movie, onDoubleClick } = this.props;

		return (
			<ImageContainer>
				<Image
					src={movie.image}
					size="medium"
					onDoubleClick={onDoubleClick(HomeWave, { ...movie })}
				/>
			</ImageContainer>
		);
	}
}

export default MovieCard;
