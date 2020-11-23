import React from "react";
import { Container, Row, Col } from "./Grid";

export function SearchResults({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function TourListItems({
  image,
  title,
  location,

}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Location: {location}</p>

          </Col>
        </Row>
      </Container>
    </li>
  );
}
