import React, { Component } from "react";
import "../styles/Searchbar.css";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";



class SearchBar extends Component {
  // Setting the component's initial state
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.getTours("Paris");
  }

  getTours = query => {
    console.log("you're looking for ", query)
    API.getTours(query)
      .then(res => {
        console.log(res.data)
        this.setState({ result: res.data })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.getTours(this.state.search);
  };
  handleSavedButton = event => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state.tours)
    let savedTours = this.state.tours.filter(tour => tour.id === event.target.id)
    savedTours = savedTours[0];
    API.saveTour(savedTours)
        .then(this.setState({ message: alert("Your tour is saved") }))
        .catch(err => console.log(err))
}

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="searchBarmenu">

        <form>
          <div className="form-group">
            <label htmlFor="search" className="title1">Let's Tour Around.</label>
            <br></br>
            <input className='searchBar1'
              onChange={this.handleInputChange}
              value={this.search}
              name="search"
              type="text"
              placeholder="Search for a City"
              id="search"
            /><br></br>
            <button onClick={this.handleFormSubmit} className="btn btn-outline-secondary mt-3">
              Tour Me!
        </button>

          </div>
        </form>
<SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default SearchBar;