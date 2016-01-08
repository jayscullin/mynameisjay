import React from 'react'

const Hero = React.createClass({
	componentDidMount:function(){

		// Eye Candy (Warning: Chrome goes full-throttle CPU-crazy)
		particleground(document.getElementById('hero'), {
			dotColor:'#68b4ff',
			lineColor:'#68b4ff',
			lineWidth:1,
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
						<a id="get-my-resume" className="inverted button float-right" target="_blank" href="jay-scullin-resume-web.pdf">Get My Resume</a>
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
