import React, { Component } from "react";
import "../styles/Searchbar.css";
import API from "../utils/API";
import { Container } from "./Grid";
import SearchResults from "./SearchResults";




class Searchbar extends Component {
  state = {
    search: "",
    tours: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getTours()
      .then(res => this.setState({ tours: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getTours(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (

      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search for your next tour!</h1>
        {/* <Alert className="alert-error"
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </alert> */}
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
              /><br></br><br></br>
              <button onClick={this.handleFormSubmit} className="btn btn-outline-light">
                Tour Me!
</button>
              <SearchResults results={this.state.results} />
            </div>
          </form>
        </div>
      </Container>


    );
  }
}



export default Searchbar;
