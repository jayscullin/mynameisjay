import React from 'react';

module.exports = {

	// Generate random id
	makeId:function(){
		function s4(){
			return Math.floor((1 + Math.random()) * 0x1000).toString(8).substring(1);
		}
		return s4() + s4() + s4();
	},

};