import React, { Component } from "react";
import styled from "styled-components";

const ColorBG = styled.div`
	background-color: #7d4cdb;
	-webkit-transition: height 500ms ease-in-out;
	height: 0px;
	width: 100%;
	z-index: 9999999;
	position: absolute;
	overflow: hidden;
`;

class Wave extends Component {
	render() {
		const { open, component } = this.props;
		const style = { height: "100vmax" };
		const WaveRender = component;

		return (
			<ColorBG style={open ? style : {}}>
				{!open ? <div /> : <WaveRender {...this.props} />}
			</ColorBG>
		);
	}
}

export default Wave;
