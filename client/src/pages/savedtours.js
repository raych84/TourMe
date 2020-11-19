
import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteButton from "../components/DeleteButton";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

const SavedTours = () => {
  const [state, dispatch] = useStoreContext();

  const getAllSavedTours = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeSavedTour = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getAllSavedTours();
  }, []);

  return (
    <div className="container mb-5 mt-5">
      
      <h1 className="text-center">Here's All of Your Favorite Tours</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a tour name to view in detail</h3>
          {state.favorites.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteButton onClick={() => removeSavedTour(post._id)} />
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

export default SavedTours;
