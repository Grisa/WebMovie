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

		console.log(movie.rating);

		return (
			<ImageContainer>
				<Image
					src={"https://react.semantic-ui.com/images/avatar/large/daniel.jpg"}
					size="medium"
					onDoubleClick={onDoubleClick(HomeWave, { ...movie })}
				/>
			</ImageContainer>
		);
	}
}

export default MovieCard;
