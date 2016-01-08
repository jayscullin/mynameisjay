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

		// Watch the event within the toolbar. Gotta be a button
		if(event){
			this.setState({
				activeButton : event.target.innerHTML,
				activeTab : event.target.getAttribute('data-tab')
			});
		}


		// Loop through buttons and set the active state
		var buttons = this.refs.toolbar.childNodes;

		for (var i = buttons.length - 1; i >= 0; i--) {

			// Button text == Clicked button text or Button text == Active button state
			var isActive = (event) ? buttons[i].innerHTML == event.target.innerHTML : buttons[i].innerHTML == this.state.activeButton;

			// Handle classes
			if(isActive){
				buttons[i].classList.remove('transparent');
				buttons[i].classList.add('secondary');
			} else {
				buttons[i].classList.remove('secondary');
				buttons[i].classList.add('transparent');
			}

		};

		// Loop through tabs and set the active tab
		var tabContainers = document.querySelectorAll('.tab-container');

		for (var i = tabContainers.length - 1; i >= 0; i--) {

			var tabs = tabContainers[i].querySelectorAll('.tab');

			for (var j = tabs.length - 1; j >= 0; j--) {

				// Tab ID == Clicked button data-tab attr or Tab ID == Active tab state
				var isActive = (event) ? tabs[j].id == event.target.getAttribute('data-tab') : tabs[j].id == this.state.activeTab;

				// Handle classes
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