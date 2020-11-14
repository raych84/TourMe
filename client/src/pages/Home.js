import React from "react";
import Hero from "../components/Hero";
import SearcBar from "../components/SearchBar";

function Home(){
	return(
		<div>
			<Hero />
			<h1>TourMe</h1>
			<p>
				TourMe provides travelers with different tours available in the city you're currently in or plan on going to. You're able to create an itinerary to keep you on schedule.
			</p>
		</div>
	)
}
export default Home;