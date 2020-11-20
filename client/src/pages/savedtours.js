import React, { useEffect, useState } from "react";
import API from "../utils/API";
import DeleteButton from "../components/DeleteButton";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid";



function SavedTours() {
  const [tours, setTours] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadTours()
  }, [])

  function loadTours() {
    API.getAllSaved()
      .then(res =>
        setTours(res.data)
      )
      .catch(err => console.log(err));
  };
  function deleteSaved(id) {
    API.deleteSaved(id)
      .then(res => loadTours())
      .catch(err => console.log(err));
  }


  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.location) {
      API.saveTour({
        title: formObject.title,
        duration: formObject.duration,
        location: formObject.location,
        date: formObject.date,
        price: formObject.price,
        details: formObject.details,
        itinerary: formObject.itinerary,
      })
        .then(res => loadTours())
        .catch(err => console.log(err));
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
     
      <h1 style={{textAlign:"center"}}>Your Saved Tours:</h1> 
           {tours.length ? (
          <List style={{textAlign:"center"}}>
            {tours.map(tour => (
              <ListItem key={tour._id}>
                {tour.title} going to {tour.location}
                {tour.duration}
                {tour.price}
                {tour.itinerary}
                <br/>
                <DeleteButton onClick={() => deleteSaved(tour._id)} />
              </ListItem>
            ))}
          </List>
       ) : (
       <h3>No Saved Tours</h3>
       )}
   </Col>
   </Row>
    </Container >

  )
}
export default SavedTours;

