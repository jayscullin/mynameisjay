import React from 'react'
import SVGImg from 'svg-img';

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

const Intro = React.createClass({
	render() {
		return (
			<div className="wrapper">
				<section id="intro" className="full-width pad-section">
						
					<SVGImg src="../img/profile.svg" classes="img-right" />
					<h2>Clean Design, Clean Code</h2>
					<p>I'm passionate about creating clean, usable interfaces and bringing them to life using the most lightweight, readable markup. I've been designing and coding professionally since 2005, and non-professionally since I could click a mouse and type on a keyboard.</p>
					<p>At my full-time job as a Web Engineer at <a href="http://iracing.com" target="_blank">iRacing</a>, I get to use the latest frontend web technology to bring our entire platform to the next level. My dev stack includes <a href="http://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>, <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="http://gulpjs.com" target="_blank">Gulp</a>, <a href="https://www.npmjs.com" target="_blank">NPM</a>, and <a href="http://sass-lang.com" target="_blank">Sass</a>.</p>
					<p>In my spare time, I build Wordpress sites and design print materials and logos for small companies throughout Massachusetts.</p>

				</section>

				<hr />

			</div>
		)
	}
});

const Work = React.createClass({
	render() {
		return (
			<div className="wrapper">

				<section id="work" className="full-width pad-section">
							
						
					<h2>My Work</h2>

					<div id="work-toolbar">

						<div className="toolbar">
							<a className="secondary button float-left">Websites</a>
							<a className="transparent button float-left">Logos</a>
							<a className="transparent button float-left">Print Design</a>
						</div>

						<a className="primary button float-right">Code on Github</a>

					</div>

					
				</section>

			</div>
		)
	}
});

const App = React.createClass({
	render() {
		return (
			<div>
				<Hero />
				<Intro />
				<Work />
			</div>
		)
	}
});

module.exports = App;
