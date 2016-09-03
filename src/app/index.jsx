import React from "react";
import { render } from "react-dom";

import { MarkdownBox } from "./components/MarkdownBox.jsx";
import { EditorBox } from "./components/EditorBox.jsx";

require("./css/main.scss");

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			text: "Your markdown goes here."
		};
	}

	onTextChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	render() {
		return (
			<div className="row">
				<div className="left-col">
					<EditorBox text={this.state.text} changeText={this.onTextChange.bind(this)} />
				</div>
				<div className="right-col">
					<MarkdownBox text={this.state.text} changeText={this.onTextChange.bind(this)} />
				</div>
			</div>
		);
	}
} 

render(<App />, document.getElementById("app"));