import React from 'react'
import Hero from 'hero'
import Intro from 'intro'
import Skills from 'skills'
import Work from 'work'
import Footer from 'footer'

const App = React.createClass({
	render() {
		return (
			<div>
				<Hero />
				<Intro />
				<Skills />
				<Work />
				<Footer />
			</div>
		)
	}
});

module.exports = App;
