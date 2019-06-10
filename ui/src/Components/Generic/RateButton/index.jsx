import React, { Component } from "react";
// import styled from "styled-components";
import { Icon, Label } from "semantic-ui-react";

import {
	LIKED,
	UNLIKED,
	NOT_RATED,
	FAVORITED,
	UNFAVORITED
} from "../../../Utils/Constants";

class RateButton extends Component {
	getLikeStatus = () => {
		const { status } = this.props;

		switch (status) {
			case LIKED:
				return "yellow";
			case UNLIKED:
				return "red";
			case NOT_RATED:
			default:
				return "blue";
		}
	};

	getFavStatus = () => {
		const { status } = this.props;

		switch (status) {
			case FAVORITED:
				return "red";
			case UNFAVORITED:
			default:
				return "grey";
		}
	};

	renderLike = () => {
		const { value } = this.props;

		return (
			<Label color={this.getLikeStatus()}>
				<Icon name="thumbs up" style={{ color: "#fafafa" }} />
				{value && `${value} likes`}
			</Label>
		);
	};

	renderFavorite = () => {
		const { value, status } = this.props;

		return (
			<Label color={this.getFavStatus()}>
				<Icon name="heart" style={{ color: "#fafafa" }} />
				{status == FAVORITED ? "Gostou" : "Não gostou"}
			</Label>
		);
	};

	render() {
		const { type } = this.props;

		if (type === "like") {
			return this.renderLike();
		}

		return this.renderFavorite();
	}
}

export default RateButton;
