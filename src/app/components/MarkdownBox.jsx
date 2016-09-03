import React from "react";

export const MarkdownBox = (props) => {
	return (
		<div>{props.text}</div>
	);
};

MarkdownBox.propTypes = {
	text: React.PropTypes.string
};