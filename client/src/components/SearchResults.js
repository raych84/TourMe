import React from "react";
import Searchbar from "./Searchbar";

function SearchResults(props) {
	return (
<ul className="list-group search-results">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt="tour" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}


export default SearchResults;