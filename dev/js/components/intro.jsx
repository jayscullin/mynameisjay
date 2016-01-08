import React from 'react'
import SVGImg from 'svg-img'

const Intro = React.createClass({
	render() {
		return (
			<div className="wrapper">
				<section id="intro" className="full-width pad-section">

					<SVGImg src="../img/profile.svg" classes="img-right" />
					<h2>Clean Design, Clean Code</h2>
					<p>I'm a full-stack developer who is passionate about creating clean, usable interfaces and bringing them to life using the most lightweight, readable markup. I've been designing and coding professionally since 2005, and non-professionally since I could click a mouse and type on a keyboard.</p>
					<p>At my full-time job as a Web Engineer at <a href="http://iracing.com" target="_blank">iRacing</a>, I get to use the latest frontend web technology to bring our entire platform to the next level. My dev stack includes <a href="http://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>, <a href="https://facebook.github.io/react/" target="_blank">ReactJS</a>, <a href="http://gulpjs.com" target="_blank">Gulp</a>, <a href="https://www.npmjs.com" target="_blank">NPM</a>, and <a href="http://sass-lang.com" target="_blank">Sass</a>.</p>
					<p>In my spare time, I build Wordpress sites and design print materials and logos for small companies throughout Massachusetts and New Hampshire.</p>

				</section>

				<hr />

			</div>
		)
	}
});

module.exports = Intro
