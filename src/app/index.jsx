import React from "react";
import { render } from "react-dom";

import { EditorBox, MarkdownBox } from "./Markdown.jsx";

require("./css/main.scss");

class App extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="left-col">
					<EditorBox />
				</div>
				<div className="right-col">
					<MarkdownBox />
				</div>
			</div>
		);
	}
} 

render(<App />, document.getElementById("app"));