import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import {
	FaMedal,
	FaCheckCircle,
	FaAngry,
	FaMeh,
	FaGrin,
	FaThumbsUp,
	FaThumbsDown,
	FaHeart,
	FaRegHeart
} from "react-icons/fa";

import {
	LIKED,
	UNLIKED,
	NOT_RATED,
	success,
	failed,
	normal,
	FAVORITED,
	UNFAVORITED
} from "../../../Utils/Constants";

const CardHeader = styled.div`
	padding: 1em;
`;

const Title = styled.span`
	font-size: 24px;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 100%;
`;

const Box = styled.div`
	background: #7519c1;
	width: calc(25% - 10px);
	height: fit-content;
	color: #fff;
	font-size: 15pt;
	padding: 15px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ScorePosition = styled.div`
	margin-top: 10px;
`;

const ApprovSpan = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const RateContainer = styled.div`
	margin-top: 10px;
	display: flex;
	width: 100%;
	justify-content: space-evenly;
`;

export default class Evaluation extends Component {
	state = {
		liked: NOT_RATED,
		tempLiked: NOT_RATED,
		fav: UNFAVORITED,
		tempFav: UNFAVORITED
	};

	renderRanking() {
		return (
			<Box>
				<FaMedal size={50} style={{ textAlign: "center" }} />
				<ScorePosition>Ranking #12</ScorePosition>
			</Box>
		);
	}

	renderApproval() {
		return (
			<Box>
				<FaCheckCircle size={50} style={{ textAlign: "center" }} />
				<ApprovSpan>
					Aprovação do público
					<span>73%</span>
				</ApprovSpan>
			</Box>
		);
	}

	renderRate() {
		const { tempLiked, liked } = this.state;
		let color;

		switch (tempLiked) {
			case LIKED:
				color = success.color;
				break;
			case UNLIKED:
				color = failed.color;
				break;
			case NOT_RATED:
			default:
				color = normal.color;
				break;
		}

		return (
			<Box style={{ background: color }}>
				{tempLiked === LIKED ? (
					<FaGrin size={50} style={{ textAlign: "center" }} />
				) : null}
				{tempLiked === UNLIKED ? (
					<FaAngry size={50} style={{ textAlign: "center" }} />
				) : null}
				{tempLiked === NOT_RATED ? (
					<FaMeh size={50} style={{ textAlign: "center" }} />
				) : null}
				<span style={{ marginTop: 10 }}>Você gostou?</span>
				<RateContainer>
					<FaThumbsUp
						size={tempLiked === LIKED ? 40 : 30}
						onMouseOver={this.handleLike(LIKED, "tempLiked")}
						onMouseLeave={this.handleLike(liked, "tempLiked")}
						onClick={this.handleLike(LIKED, "liked")}
					/>
					<FaThumbsDown
						size={tempLiked === UNLIKED ? 40 : 30}
						onMouseOver={this.handleLike(UNLIKED, "tempLiked")}
						onMouseLeave={this.handleLike(liked, "tempLiked")}
						onClick={this.handleLike(UNLIKED, "liked")}
					/>
				</RateContainer>
			</Box>
		);
	}

	handleLike = (status, type) => () => {
		this.setState({
			[type]: status
		});
	};

	renderFav() {
		const { tempFav, fav } = this.state;
		let color;

		switch (tempFav) {
			case FAVORITED:
				color = failed.color;
				break;
			case UNFAVORITED:
			default:
				color = normal.color;
				break;
		}

		return (
			<Box style={{ background: color }}>
				{fav === FAVORITED ? (
					<FaHeart
						size={50}
						style={{ textAlign: "center" }}
						onClick={this.handleFav(UNFAVORITED, "fav")}
						onMouseOver={this.handleFav(FAVORITED, "tempFav")}
						onMouseLeave={this.handleFav(FAVORITED, "tempFav")}
					/>
				) : (
					<FaRegHeart
						size={50}
						style={{ textAlign: "center" }}
						onClick={this.handleFav(FAVORITED, "fav")}
						onMouseOver={this.handleFav(UNFAVORITED, "tempFav")}
						onMouseLeave={this.handleFav(UNFAVORITED, "tempFav")}
					/>
				)}
				Favoritou
			</Box>
		);
	}

	handleFav = (status, type) => () => {
		this.setState({
			[type]: status
		});
	};

	render() {
		return (
			<Card
				style={{
					gridColumn: 3,
					gridRow: 2,
					margin: "0 1em 1em 1em",
					width: "calc(100% - 1em)"
				}}
				fluid>
				<CardHeader>
					<Title>Avaliações</Title>
				</CardHeader>
				<Card.Content>
					<Container>
						{this.renderRanking()}
						{this.renderApproval()}
						{this.renderRate()}
						{this.renderFav()}
					</Container>
				</Card.Content>
			</Card>
		);
	}
}
