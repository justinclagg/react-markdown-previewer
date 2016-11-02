import React from "react";
import { render } from "react-dom";

import { Markdown } from "./components/Markdown.jsx";
import { Editor } from "./components/Editor.jsx";
import { initialText } from "./components/initialText.js";
import Footer from "./components/Footer.jsx";

require("./css/main.scss");

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {text: initialText};
	}

	onTextChange(event) {
		this.setState({text: event.target.value});
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="left-col">
						<Editor text={this.state.text} onTextChange={this.onTextChange.bind(this)} />
					</div>
					<div className="right-col">
						<Markdown text={this.state.text} />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
} 

render(<App />, document.getElementById("app"));