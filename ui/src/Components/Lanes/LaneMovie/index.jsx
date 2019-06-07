import React, { Component } from "react";
import styled from "styled-components";

import MovieCard from "../../Cards/MovieCard";

const Line = styled.div`
	border-bottom: 5px solid #7d4cdb;
	margin: 10px 0;
`;

const Lane = styled.div`
	margin-bottom: 30px;
`;

const Inline = styled.div`
	display: -webkit-box;
	overflow: auto;
`;

class LaneMovie extends Component {
	render() {
		const { movies, title, handleOpen } = this.props;

		return (
			<Lane>
				<span>{title}</span>
				<Line />
				<Inline>
					{movies.map((movie, index) => (
						<MovieCard key={index} movie={movie} onDoubleClick={handleOpen} />
					))}
				</Inline>
			</Lane>
		);
	}
}

export default LaneMovie;
