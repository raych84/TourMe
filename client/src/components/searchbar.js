import React, {Component} from "react";
import "./Searchbar.css";
import API from "../utils/API";



class Searchbar extends Component {
    // Setting the component's initial state
    state = {
      search:"",
      results: []
    };
  
    componentDidMount() {
      this.searchTours();
    }
  
    searchTours = query => {
      API.GetAllAvailableTours(query)
        .then(res => this.setState({ result: res.data }))
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
      this.searchTours(this.state.search);
    };
  
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
  
        </div>
      );
    }
  }
  
  export default Searchbar;
  