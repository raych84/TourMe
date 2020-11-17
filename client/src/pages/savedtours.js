import React, { useEffect } from "react";
import Card  from "../components/Card"
import DeleteButton from "../components/DeleteButton";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_TOUR, REMOVE_TOUR, SET_CURRENT_TOUR, LOADING} from "../utils/actions";

const SavedTours = props => {
	const [state, dispatch]= useStoreContext();
	
	useEffect(() => {
		API.getAllSaved(props.match.params.id)
		  .then(res => dispatch({ type: SET_CURRENT_TOUR, post: res.data }))
		  .catch(err => console.log(err));
	  }, []);

	  const getSaved = () =>{
		  dispatch({ type: LOADING});
		  dispatch({type: UPDATE_TOUR});
	  };		

	const updateTour = () => {
		dispatch({
			type: UPDATE_TOUR,
			tour: state.currentTour
		  });
		};
	
	const removeTour = id => {
		dispatch({
			type: REMOVE_TOUR,
			_id: state.currentTour._id
		  });
	};
	useEffect(() => {
		getSaved();
	}, []);
	return(
		<div className="container mb-5 mt-5">
		<h1 className="text-center">Here's All of Your Favorite Tours</h1>
		<Card />		
		<DeleteButton  onClick={() => removeTour(state.CurrentTour._id)} />
	  </div>
	);
};

export default SavedTours;