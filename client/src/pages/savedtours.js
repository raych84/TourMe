import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteButton from "../components/DeleteButton";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center">Here's All of Your Favorite Posts</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
          {state.favorites.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteButton onClick={() => removeFromFavorites(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
=======
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

