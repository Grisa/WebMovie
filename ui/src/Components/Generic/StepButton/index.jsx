import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

import {
	uninitialized,
	initialized,
	success,
	failed,
	warning,
	NOT_INITIALIZED,
	INITIALIZED,
	SUCCESS,
	FAILED,
	WARNING,
	LOADING
} from "../../../Utils/Constants";

const ButtonGroup = styled.div`
	display: flex;
    align-items: center;
    justify-content: center
	width: 300px;
`;

const ButtonStep = styled.div`
	display: flex;
	align-items: center;
`;

const Line = styled.div`
	border-top: 1px dashed #555555;
	width: 100px;
`;

class StepButton extends Component {
	returnColor = status => {
		switch (status) {
			case NOT_INITIALIZED:
			case LOADING:
			default:
				return uninitialized.color;
			case SUCCESS:
				return success.color;
			case FAILED:
				return failed.color;
			case WARNING:
				return warning.color;
		}
	};

	returnIcon = status => {
		switch (status) {
			case NOT_INITIALIZED:
			case LOADING:
			default:
				return uninitialized.icon;
			case INITIALIZED:
				return initialized.icon;
			case SUCCESS:
				return success.icon;
			case FAILED:
				return failed.icon;
			case WARNING:
				return warning.icon;
		}
	};

	beforeClick = ({ onClick, stepState: status }) => () => {
		console.log(status);
		console.log(onClick);
		switch (status) {
			case INITIALIZED:
			case WARNING:
			case FAILED:
				onClick.call();
				break;
			default:
				alert("Não rola");
				break;
		}
	};

	render() {
		const { steps } = this.props;

		return (
			<ButtonGroup>
				{steps.map((step, index, { length }) => {
					if (length > 1 && index + 1 < length) {
						return (
							<ButtonStep key={index}>
								<Button
									style={{
										backgroundColor: this.returnColor(step.stepState),
										color: "#f4f4f4",
										marginRight: 0
									}}
									circular
									onClick={this.beforeClick(step)}
									size={
										step.stepState !== NOT_INITIALIZED &&
										step.stepState !== SUCCESS
											? "huge"
											: "medium"
									}
									icon={this.returnIcon(step.stepState)}
									loading={step.stepState === LOADING}
								/>
								<Line />
							</ButtonStep>
						);
					}
					return (
						<Button
							key={index}
							style={{
								backgroundColor: this.returnColor(step.stepState),
								color: "#f4f4f4",
								marginRight: 0
							}}
							circular
							onClick={this.beforeClick(step)}
							size={
								step.stepState !== NOT_INITIALIZED && step.stepState !== SUCCESS
									? "huge"
									: "medium"
							}
							icon={this.returnIcon(step.stepState)}
							loading={step.stepState === LOADING}
						/>
					);
				})}
			</ButtonGroup>
		);
	}
}

export default StepButton;
