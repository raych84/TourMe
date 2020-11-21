import React from "react";


function SearchResults(props) {
	return (
<ul className="list-group search-results">
      {props.results.map(result => (
        <li className="list-group-item" key={result.vacations}>
          
        </li>
      ))}
    </ul>
  );
}


export default SearchResults;