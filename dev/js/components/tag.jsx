import React from 'react'
import Packery from 'packery'

const Tag = React.createClass({
	getDefaultProps: function() {
		return {
			size:1,
			name:"Tag",
			href:""
		};
	},
	componentDidMount: function() {

		// Use packery to make a grid of tags
		var packery = new Packery(document.getElementById('tags'),{
			itemSelector: '.tag'
		});
		packery.bindResize(); // Window resize
		packery.fit(); // Packery type
	},
	render() {

		return (

			<span className={"tag size-" + this.props.size}>
				{this.props.name}
			</span>

		)
	}
});

module.exports = Tag;