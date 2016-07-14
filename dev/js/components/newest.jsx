import React from 'react'
import Card from 'card'

const Newest = React.createClass({
	render() {
		return (
			<div id="newest" className="tab">
				<Card
					src="./img/portfolio/websites/iracing.jpg"
					name="iRacing (in development)"
					designed
					coded
					logo
					disabled
					descriptionType="ReactJS + Coherent UI app"
					buttonText="Under Development"
				/>
				<Card
					src="./img/portfolio/websites/dr-norma-colletta-dmdpc.jpg"
					name="Dr. Norma Colletta, DMD PC"
					designed
					coded
					logo
					disabled
					buttonText="Under Development"
				/>
				<Card
					src="./img/portfolio/websites/t206.jpg"
					name="T206 Investments"
					designed
					coded
					logo
					disabled
					buttonText="Under Development"
				/>
				<Card
					src="./img/portfolio/websites/tignj.jpg"
					name="The Insulation Heating and Cooling Group"
					href="http://tignj.com"
					designed
					coded
				/>
				<Card
					src="./img/portfolio/websites/rocks.jpg"
					name="ROCKs"
					href="http://cookwithrocks.org"
					designed
					coded
					disabled
					buttonText="Under Development"
				/>
				<Card
					src="./img/portfolio/websites/stratos.jpg"
					name="Seastreet: StratOS"
					href="http://seastreet.com"
					designed
					coded
					logo
				/>
			</div>
		)
	}
});

module.exports = Newest;