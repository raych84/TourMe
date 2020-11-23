
import React from "react";

import Hero from "../components/Hero";
import { SearchResults } from "../components/SearchResults";

function Home() {
	return (
		<div>
			<Hero />
			<div className='page'>	
		
		<div className="container"> <br />
			<h4>About Us</h4>
		<div className="row">
			
			<br />
    <div class="col">
		
      <h3><img src="https://img.icons8.com/offices/2x/statue-of-liberty.png"/><br/>Our Vision</h3>
	  <p>"Tourism that is ethical, fair, adventurous and a positive experience for the travelers and the places they visit."</p>

    </div>
    <div className="col">
		
     <h3><img src="https://img.icons8.com/offices/2x/coliseum.png"/> <br />Our Mission</h3>
	 <p>“To serve our clients with enhanced travel experience by providing quality Services that address their Travel needs, through the most efficient arrangements so that customer loyalty, superior financial results and excellent customer satisfaction can be achieved”.</p>
    </div>
    <div className="col">
	<h3><img src="https://img.icons8.com/offices/2x/eiffel-tower.png"/> <br />Safety Information</h3>
	<p>"Vacation is a time to relax in safe surroundings. Safety is our number one core value. We are uncompromising in our commitment to the health and safety of our employees, subcontractors, customers, and community. We will continually improve our processes, demonstrate leadership, and promote comprehensive safety. "</p>
    </div>
	
		<hr />
		<SearchResults />

		</div>
		<br /><h4>Gallery</h4><div class="row">
		<br />
  <div className="col"><SearchResults /></div>
  </div></div></div> </div> 
			)
}
export default Home;