import React from 'react'

const Card = React.createClass({
	getDefaultProps: function() {
		return {
			name:"",
			src:"",
			href:"",
			designed: null,
			coded: null,
			logo: null,
			descriptionType:"website",
			buttonText:"Visit Website",
			disabled: null,
			hideButton: null
		};
	},
	makeADescription(){
		var description = "I ";
		if(this.props.designed) description += " designed";
		if(this.props.coded) description += " and coded";
		description += ' this '+this.props.descriptionType+'.';
		if(this.props.logo) description += " I also designed the logo."
		return description;
	},
	render() {

		console.log(this.refs.card)

		var cardStyle = {
			backgroundImage:"url("+this.props.src+")"
		}

		var cardClasses = classNames('card',{
			'has-link' : this.props.href.length > 0,
			'has-overlay' : this.props.name.length > 0
		});

		var buttonClasses = classNames('inverted button',{
			'disabled' : this.props.disabled
		});

		return (
			<div ref="card" className={cardClasses} style={cardStyle}>
				{this.props.name.length > 0 ?
					<div className="card-overlay">
						<div className="card-overlay-content">
							<h4>{this.props.name}</h4>
							<p>{this.makeADescription()}</p>
							{!this.props.hideButton ? <a className={buttonClasses} href={this.props.href.length > 0 ? this.props.href : "javascript:void(0)"} target="_blank">{this.props.buttonText}</a> : null}
						</div>
					</div>
				: null}
			</div>

		)
	}

});

module.exports = Card;