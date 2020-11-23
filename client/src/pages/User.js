import React, { Component } from 'react';
import Hero from "../components/Hero";
import SavedTours from "./SavedTours"

class User extends Component {
	render() {
		return (
			<div>
				<Hero />
				<SavedTours />
							</div>
		);
	}
}

export default User;