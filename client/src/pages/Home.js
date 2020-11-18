import React from "react";
import Searchbar from "../components/Searchbar";
import Hero from "../components/Hero";

function Home() {
	return (
		<div>
			<Hero />


			<h1>TourMe</h1>
			<p>
				Have you ever gone to a new city or town, maybe to visit family or even for work? Did you ever think, "I wonder what there is to do here?" or "Where should I eat?" TourMe provides travelers with different tours and places to eat available in the city you're currently in or plan on going to.
			</p>
			<Searchbar />
			<br />
			<hr />
		

		</div>
	)
}
export default Home;