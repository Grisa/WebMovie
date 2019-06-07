import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import styled from "styled-components";

class Ranking extends Component {
	goto = route => () => {
		this.props.history.push(route);
	};

	render() {
		return <div />;
	}
}

export default withRouter(Ranking);
