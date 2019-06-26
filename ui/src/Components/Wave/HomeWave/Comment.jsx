import React, { Component } from "react";
import styled from "styled-components";

import api from "../../../Utils/Api";
import { Button, Card, Input } from "semantic-ui-react";
import { FaArrowRight } from "react-icons/fa";

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
	state = {
		comments: [],
		comment: ""
	};

	async componentDidMount() {
		const {
			data: { comments }
		} = await api.post("comment/view/", {
			name: this.props.data.name
		});

		this.setState({
			comments: comments[0].comment.reverse()
		});
	}

	handleChange = field => ({ target }) => {
		this.setState({
			[field]: target.value
		});
	};

	handleSubmit = async () => {
		const { comment } = this.state;
		const { data } = this.props;

		await api.post("comment/add/", {
			name: data.name,
			comment
		});

		const {
			data: { comments }
		} = await api.post("comment/view/", {
			name: data.name
		});

		this.setState({
			comments: comments[0].comment.reverse(),
			comment: ""
		});
	};

	returnDate(timestamp) {
		const date = new Date(timestamp);

		if (!timestamp) {
			return null;
		}

		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}

	renderComment = () => {
		const { comments } = this.state;

		if (!comments || comments.length === 0) {
			return <div>sem comentarios</div>;
		}

		if (comments.length === 1) {
			return (
				<CommentContainer>
					<CommentAuthor>{comments[0].author || "Desconhecido"}</CommentAuthor>
					<CommentContent>{comments[0].comment || comments[0]}</CommentContent>
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
						<CommentAuthor>{comment.author || "Desconhecido"}</CommentAuthor>
						<CommentTime>{this.returnDate(comment.time)}</CommentTime>
					</CommentInfo>
					<CommentContent>{comment.comment || comment}</CommentContent>
				</div>
			</CommentContainer>
		));
	};

	render() {
		const { comment } = this.state;
		const { isLog } = this.props;

		return (
			<Card
				style={{
					margin: "0 1em 1em 1em",
					width: "calc(100% - 1em)",
					height: "fit-content",
					gridArea: "10 / 2 / 16 / 15"
				}}
				fluid>
				<CardHeader>
					<Title>Comentários</Title>
				</CardHeader>
				{isLog ? (
					<Card.Content>
						<Input
							fluid
							value={comment}
							onChange={this.handleChange("comment")}
						/>
						<Button animated onClick={this.handleSubmit}>
							<Button.Content visible>Comentar</Button.Content>
							<Button.Content hidden>
								<FaArrowRight />
							</Button.Content>
						</Button>
					</Card.Content>
				) : null}
				<Card.Content>
					<CommentFeed>{this.renderComment()}</CommentFeed>
				</Card.Content>
			</Card>
		);
	}
}
