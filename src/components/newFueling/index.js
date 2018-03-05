import React, { Component } from 'react';

import Autocomplete from '../Autocomplete'

class NewFueling extends Component {
	render() {
		return (
			<div>
				{/*Vehicle autocomplete*/}
				<Autocomplete />
				{/*Driver autocomplete*/}
				{/*Tank select-box*/}
				{/*Pump select-box*/}
				{/*Reason autocomplete*/}
				{/*ODO input*/}
			</div>
		);
	}
}

export default NewFueling