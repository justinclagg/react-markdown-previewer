import React from "react";

export const Editor = (props) => {
	return (
		<textarea value={props.text} onChange={props.onTextChange} name="editor" rows="30" cols="50"></textarea>
	);
};

Editor.propTypes = {
	text: React.PropTypes.string,
	onTextChange: React.PropTypes.func
};