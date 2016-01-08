import React from 'react';
import MixinUtilities from 'mixin-utilities';
import Snap from 'snapsvg';

const SVGImg = React.createClass({
	mixins:[MixinUtilities],
	getDefaultProps: function() {
		return {
			src:"",
			id:null,
			classes:"img-left"
		};
	},
	getInitialState: function() {

		// If there is an id prop, use that otherwise make a unique id
		return {
			id:(!this.props.id) ? 'svg-img-'+this.makeId() : this.props.id
		};
	},
	componentDidMount: function() {

		// Use a dead-basic Snap instance and put it in a div
		var s = Snap('#'+this.refs.SVGImg.id);

		Snap.load(this.props.src,function(f){
			s.append(f);
		});

	},
	render() {

		var id = (!this.props.id) ? this.makeId() : this.props.id;

		return (
			<div ref="SVGImg" id={this.state.id} className={"svg-container "+this.props.classes} />
		)
	}
});

module.exports = SVGImg;