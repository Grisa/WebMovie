import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Dropdown, Input } from "semantic-ui-react";
import SearchWave from "../../Wave/SearchWave";

const options = [
	{ key: "1", text: "Home", value: "/home" },
	{ key: "2", text: "Ranking", value: "/ranking" },
	{ key: "3", text: "Minha lista", value: "/mylist" }
];

class MenuList extends Component {
	advancedHandleClose = () => {
		const { handleClose } = this.props;

		handleClose()();
	};

	advancedHandleOpen = () => {
		const { handleOpen } = this.props;

		handleOpen(SearchWave, {})();
	};

	focusSearchInput = () => {
		const searchInput = this.refs.searchInput;

		searchInput.focus();
	};

	goto = route => () => {
		this.props.history.push(route);
	};

	render() {
		const { midia } = this.props;

		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
				<Dropdown
					button
					className="icon"
					floating
					labeled
					icon="th list"
					text="Menu"
					style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}>
					<Dropdown.Menu>
						{options.map(option => (
							<Dropdown.Item
								key={option.key}
								{...option}
								onClick={this.goto(option.value)}
							/>
						))}
					</Dropdown.Menu>
				</Dropdown>
				<Input
					label={
						<Dropdown
							defaultValue="1"
							options={midia}
							style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}
							onFocus={this.advancedHandleOpen}
							onChange={this.advancedHandleOpen}
							onBlur={this.focusSearchInput}
						/>
					}
					ref="searchInput"
					labelPosition="left"
					placeholder="Pesquise algo..."
					onFocus={this.advancedHandleOpen}
					onBlur={this.advancedHandleClose}
				/>
			</div>
		);
	}
}

export default withRouter(MenuList);
