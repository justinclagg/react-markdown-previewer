import React from "react";
import marked from "marked";

function toMarkdown(text) {
	marked.setOptions = {sanitize: true};
	return {__html: marked(text)};
}

export const Markdown = (props) => {
	const html = toMarkdown(props.text);
	return (
		<div dangerouslySetInnerHTML={html}></div>
	);
};

Markdown.propTypes = {
	text: React.PropTypes.string
};