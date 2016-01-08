import React from 'react'
import Toolbar from 'toolbar'
import Tabs from 'tabs'

const Work = React.createClass({
	render() {
		return (

			<div>
				<div className="wrapper">

					<section id="work" className="full-width pad-section">

						<h2>My Work</h2>

						<a id="example-code-on-github" className="github button float-right" href="https://github.com/jayscullin/mynameisjay" target="_blank"><img src="../img/github-icon.png" />Code on Github</a>

						<div id="work-toolbar">
							<Toolbar />
						</div>

						<Tabs />

					</section>

				</div>

			</div>

		)
	}
});

module.exports = Work;