import React from "react";


const rightWords = (fragment) => {
	switch (fragment) {
		case 'article':
			return 'вашей статьи';
		case 'test':
			return 'вашего теста';
		case 'video':
			return 'вашего видеоролика';

		default:
			return '';
	}
}

const FragmentTitle = (props) => {
	return (
		<div>
			<div>Название {rightWords(props.fragmentType)}</div>
		</div>
	);
}

export default FragmentTitle;