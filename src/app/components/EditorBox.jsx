import React from "react";

export const EditorBox = (props) => {
	return (
		<textarea value={props.text}> onChange={props.changeText} name="editor" rows="30" cols="50"</textarea>
	);
};

EditorBox.propTypes = {
	text: React.PropTypes.string,
	changeText: React.PropType.func
};