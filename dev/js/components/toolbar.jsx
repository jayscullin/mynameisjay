import React from 'react'

const Toolbar = React.createClass({
	getDefaultProps: function() {
		return {
			activeButton:"Newest",
			activeTab:'newest'
		};
	},
	getInitialState: function() {
		return {
			activeButton:this.props.activeButton,
			activeTab:this.props.activeTab
		};
	},
	toggleActive: function(event){

		if(event){
			this.setState({
				activeButton : event.target.innerHTML,
				activeTab : event.target.getAttribute('data-tab')
			});
		}

		var buttons = this.refs.toolbar.childNodes;

		for (var i = buttons.length - 1; i >= 0; i--) {

			var isActive = (event) ? buttons[i].innerHTML == event.target.innerHTML : buttons[i].innerHTML == this.state.activeButton;

			if(isActive){
				buttons[i].classList.remove('transparent');
				buttons[i].classList.add('secondary');
			} else {
				buttons[i].classList.remove('secondary');
				buttons[i].classList.add('transparent');
			}

		};

		var tabContainers = document.querySelectorAll('.tab-container');

		for (var i = tabContainers.length - 1; i >= 0; i--) {

			var tabs = tabContainers[i].querySelectorAll('.tab');

			for (var j = tabs.length - 1; j >= 0; j--) {

				var isActive = (event) ? tabs[j].id == event.target.getAttribute('data-tab') : tabs[j].id == this.state.activeTab;

				if(isActive){
					tabs[j].classList.add('active');
				} else {
					tabs[j].classList.remove('active');
				}

			};

		};

	},
	componentDidMount: function() {
		this.toggleActive();
	},
	render() {

		return (
			<div ref="toolbar" className="toolbar">
				<a onClick={this.toggleActive} data-tab="newest" className="button float-left">Newest</a>
				<a onClick={this.toggleActive} data-tab="websites" className="button float-left">Websites</a>
				<a onClick={this.toggleActive} data-tab="logos" className="button float-left">Logos</a>
			</div>
		)
	}
});

module.exports = Toolbar;