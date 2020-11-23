import React from "react";
import { Col, Row } from "./Grid"


function SearchResults(props) {
    return (
    <div>
      <ul>
        <li className="search-list list-group-item">
          <Row className="SearchResult row" id={props.title} key={props._id}>
            
            <Col size="2" className="tourImage">
              <img src={props.image} alt={props.title} />
            </Col>                   
            <Col size="9" className="tourInfo">
              <Row>
                <h3 className="tourTitle">{props.title}</h3>
              </Row>
              <Row>
                <h4 className="tourCity">{props.city}</h4>
              </Row>
              <Row>
                <p className="tourDescription">{props.description}</p>
              </Row>
            </Col>
          </Row>
          <br></br>
          <Row className="buttonDiv ">
            <button className="saveTourbtn btn-success btn-sm" id={props.id} onClick={(event) => props.handleSavedButton(event)}>
              Save Tour
            </button>

          </Row>
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;
