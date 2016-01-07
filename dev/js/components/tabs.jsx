import React from 'react'
import Websites from 'websites'
import Logos from 'logos'
import Newest from 'newest'

const Tabs = React.createClass({
	render() {
		return (
			<div ref="tab-container" className="tab-container">
				<Newest />
				<Websites />
				<Logos />
			</div>
		)
	}
});

module.exports = Tabs;