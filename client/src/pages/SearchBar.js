import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import "../styles/Searchbar.css";
import API from "../utils/API";


class SearchBar extends Component {
  // Setting the component's initial state
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchCity("Paris");
  }

  searchCity = query => {
    console.log("you're looking for ", query)
    API.searchCity(query)
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


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCity(this.state.search);
  };
  handleSavedButton = post => {
    // console.log(post)
     API.saveTour(post)
        .then(this.setState({ message: alert("Your tour is saved") }))
        .catch(err => console.log(err))
}

  render() {
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
      </div>
    );
  }
}

export default SearchBar;