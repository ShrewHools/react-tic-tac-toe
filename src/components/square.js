import React from 'react';

// Функциональная компонента
function Square(props) {
	return (
		<button className={"square " + (props.winner_line ? 'winner_line_css' : null)} onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Square;