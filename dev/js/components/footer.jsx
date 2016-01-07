import React from 'react'

const Footer = React.createClass({
	makeCopyrightYear: function(){
		return new Date().getFullYear();
	},
	render() {
		return (

			<div id="footer" className="full-width">

				<div className="wrapper">

					<a href="https://www.linkedin.com/in/scullin" target="_blank" className="linkedin button"><img src="../img/linkedin-icon.png" />Linkedin</a>
					<a href="https://www.facebook.com/jayscullin" target="_blank" className="facebook button"><img src="../img/facebook-icon.png" />Facebook</a>
					<a href="https://twitter.com/jayscullin" target="_blank" className="twitter button"><img src="../img/twitter-icon.png" />Twitter</a>
					<a href="https://github.com/jayscullin/mynameisjay" target="_blank" className="github button"><img src="../img/github-icon.png" />Github</a>

					<small className="float-right">
						Copyright &copy; {this.makeCopyrightYear()} Jay Scullin
					</small>

				</div>

			</div>

		)
	}
});

module.exports = Footer;