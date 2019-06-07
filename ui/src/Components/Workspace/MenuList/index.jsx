import React, { Component } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import SearchWave from "../../Wave/SearchWave";

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

	render() {
		const { options, midia } = this.props;

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
					options={options}
					text="Menu"
					style={{ backgroundColor: "#7D4CDB", color: "#f4f4f4" }}
				/>
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

export default MenuList;
