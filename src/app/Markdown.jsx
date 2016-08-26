import React from "react";

export class EditorBox extends React.Component {
	render() {
		return (
			<textarea name="editor" rows="30" cols="50">
				Your markdown goes here.
			</textarea>
		);
	}
}

export class MarkdownBox extends React.Component {
	render() {
		return (
			<div>
				Your markdown goes here.
			</div>
		);
	}
}