import React from 'react'
import Card from 'card'

const PrintDesign = React.createClass({
	render() {
		return (
			<div id="logos" className="tab">
				<Card src="./img/portfolio/logos/maqui-goal.jpg" />
				<Card src="./img/portfolio/logos/stratos.jpg" />
				<Card src="./img/portfolio/logos/t206.jpg" />
				<Card src="./img/portfolio/logos/dr-norma.jpg" />
				<Card src="./img/portfolio/logos/iracing.jpg" />
				<Card src="./img/portfolio/logos/futsal.jpg" />
				<Card src="./img/portfolio/logos/granite-state-games.jpg" />
				<Card src="./img/portfolio/logos/explore-the-trades.jpg" />
				<Card src="./img/portfolio/logos/virgin-olive.jpg" />
				<Card src="./img/portfolio/logos/bonafide.jpg" />
			</div>
		)
	}
});

module.exports = PrintDesign;