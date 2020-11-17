import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_TOUR,
  REMOVE_TOUR,
  UPDATE_TOUR,
  ADD_TOUR, 
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_TOUR:
    return {
      ...state,
      currentTour: action.tour,
      loading: false
    };

  case UPDATE_TOUR:
    return {
      ...state,
      tour: [...action.tour],
      loading: false
    };

  case ADD_TOUR:
    return {
      ...state,
      tours: [action.tour, ...state.tours],
      loading: false
    };

  case REMOVE_TOUR:
    return {
      ...state,
      tours: state.tours.filter((tour) => {
        return tour._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    tours: [],
    currentTours: {
      _id: 0,
      city: "",
      state: "",
	  country: "",
	  body: ""
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
