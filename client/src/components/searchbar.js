import React, {Component} from "react";
import "./Searchbar.css";


class Searchbar extends Component {
    // Setting the component's initial state
    state = {
      firstName: "",
      lastName: "",
      password: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      if (name === "password") {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.firstName || !this.state.lastName) {
        alert("Fill out your first and last name please!");
      } else if (this.state.password.length < 6) {
        alert(
          `Choose a more secure password ${this.state.firstName} ${this.state
            .lastName}`
        );
      } else {
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      }
  
      this.setState({
        firstName: "",
        lastName: "",
        password: ""
      });
    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div className="searchBarmenu">

          <form>
      <div className="form-group">
        <label htmlFor="search" className="title1">Let's see what we can find.</label>
       <br></br>
        <input className='searchBar1'
          onChange={this.handleInputChange}
          value={this.search}
          name="search"
          type="text"
          placeholder="Search for a City"
          id="search"
        /><br></br>
        <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
          Tour Me!
        </button>
      </div>
    </form>
        </div>
      );
    }
  }
  
  export default Searchbar;
  