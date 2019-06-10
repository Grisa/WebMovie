import React, { Component } from "react";
import styled from "styled-components";

import PoolCard from "../../Cards/PoolCard";

const Pool = styled.div`
	min-height: 600px;
	height: fit-content;
	width: 30%;
`;

const Title = styled.span`
	color: #7d4cdb;
	font-size: 25px;
	font-weight: bold;
`;

const Container = styled.div`
	background: #7d4cdb;
	min-height: 600px;
	height: inherit;
	display: flex;
	flex-direction: column;
`;

class PoolMovie extends Component {
	render() {
		const { title, handleOpen, list } = this.props;

		return (
			<Pool>
				<Title>{title}</Title>
				<Container>
					{list.map((item, index) => (
						<PoolCard key={index} handleOpen={handleOpen} {...item} />
					))}
				</Container>
			</Pool>
		);
	}
}

export default PoolMovie;
