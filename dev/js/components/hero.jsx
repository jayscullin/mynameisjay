import React from 'react'

const Hero = React.createClass({
	componentDidMount:function(){

		// Eye Candy
		particleground(document.getElementById('hero'), {
			dotColor:'#68b4ff',
			lineColor:'#68b4ff',
			lineWidth:0.5,
			particleRadius:5,
			proximity:120,
			density:8000,
			parallax:false
		});

	},
	render() {
		return (
			<section id="hero" className="full-width">

				<div className="wrapper">

					<nav id="masthead" className="full-width">
						<a id="logo">Jay Scullin</a>
						<a className="inverted button float-right">Get My Resume</a>
					</nav>

					<div id="hero-headline">
						<h1>I'm a <strong>Designer</strong> & <strong>Developer</strong></h1>
						<h3>From Billerica, MA</h3>
					</div>

				</div>

			</section>
		)
	}
});

module.exports = Hero;
