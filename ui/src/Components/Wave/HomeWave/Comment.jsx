import React, { Component } from "react";
import styled from "styled-components";

import { Card, Input } from "semantic-ui-react";

const CardHeader = styled.div`
	padding: 1em;
`;

const Title = styled.span`
	font-size: 24px;
`;

const CommentFeed = styled.div`
	display: flex;
	flex-direction: column;
`;

const CommentContainer = styled.div`
	display: flex;
`;

const CommentAuthor = styled.span`
	font-size: 12pt;
`;

const CommentTime = styled.span`
	font-size: 8pt;
	color: #999999;
`;

const CommentContent = styled.span`
	font-size: 12pt;
	margin: 1em;
`;

const CommentInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5em 1em;
`;

const VerticalLine = styled.div`
	height: calc(100% - 50px);
	display: block;

	${CommentContainer} div &:not(:first-child) {
		border-left: 1px dashed #3a3a3a;
	}
`;

export default class Comment extends Component {
	returnDate(timestamp) {
		const date = new Date(timestamp);

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	renderComment = () => {
		const { comments } = this.props;

		if (!comments) {
			return <div>sem comentarios</div>;
		}

		if (comments.length === 1) {
			return (
				<CommentContainer>
					<CommentAuthor>{comments[0].author}</CommentAuthor>
					<CommentContent>{comments[0].comment}</CommentContent>
				</CommentContainer>
			);
		}

		return comments.map((comment, index) => (
			<CommentContainer key={index}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}>
					<div
						style={{
							background: "#7159c1",
							borderRadius: 30,
							height: 50,
							width: 50
						}}
					/>
					<VerticalLine />
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "1em",
						borderBottom: "1px solid #CCCCCC",
						width: "100%"
					}}>
					<CommentInfo>
						<CommentAuthor>{comment.author}</CommentAuthor>
						<CommentTime>{this.returnDate(comment.time)}</CommentTime>
					</CommentInfo>
					<CommentContent>{comment.comment}</CommentContent>
				</div>
			</CommentContainer>
		));
	};
	render() {
		return (
			<Card
				style={{
					margin: "0 1em 1em 1em",
					width: "calc(100% - 1em)",
					height: "fit-content",
					maxHeight: "700px",
					gridArea: "10 / 2 / 16 / 15"
				}}
				fluid>
				<CardHeader>
					<Title>Comentários</Title>
				</CardHeader>
				<Card.Content>
					<Input action={"Comentar"} fluid />
				</Card.Content>
				<Card.Content>
					<CommentFeed>{this.renderComment()}</CommentFeed>
				</Card.Content>
			</Card>
		);
	}
}
