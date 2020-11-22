import React, { useState } from "react";
import "../styles/Searchbar.css";
import API from "../utils/API";
import { Container, Row, Col } from "./Grid";
import { SearchResults, TourListItems, } from "./SearchResults";
import { Form, Input, FormBtn } from "./Form";



function Searchbar() {

  const [tours, setTours] = useState([]);
  const [tourSearch, setTourSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setTourSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getTours(tourSearch)
      .then(res => setTours(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>

      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <div className="searchBarmenu">
                      <form>
                        <div className="form-group">
                          <label htmlFor="search" className="title1">Let's Tour Around.</label>
                          <br />
                          <input className="searchBar1"
                            name="TourSearch"
                            value={tourSearch}
                            onChange={handleInputChange}
                            placeholder="Search Tours"
                          />
                          <br /><br />
                          <button onClick={handleFormSubmit} className="btn btn-outline-light">
                            Tour Me!
                        </button>
                        </div>
                      </form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
     
        <Row>
          <Col size="xs-12">
            <SearchResults>
              {tours.map(recipe => {
                return (
                  <TourListItems
                    key={tours.title}
                    title={tours.title}
                    location={tours.location}
                    image={tours.image}
                  />
                );
              })}
            </SearchResults>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Searchbar;
