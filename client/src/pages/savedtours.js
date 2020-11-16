// import React, { useEffect } from "react";
// import Card from "../components/Card"

// const SavedTours = () => {
// 	const [state, dispatch]= useStoreContext();

// 	const getSaved = () => {
// 		dispatch({ type:LOADING });
// 		dispatch({ type: UPDATE_SAVED });
// 	};
// 	const removeFromSaved = id => {
// 		dispatch({
// 			type: REMOVE_SAVED,
// 			_id: id
// 		});
// 	};
// 	useEffect(() => {
// 		getSaved();
// 	}, []);
// 	return(
// 		<div className="container mb-5 mt-5">
//       <h1 className="text-center">Here's All of Your Favorite Tours</h1>
//       {state.saved.length ? (
//         <List>
//           <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
//           {state.favorites.map(post => (
//             <ListItem key={post._id}>
//               <Link to={"/posts/" + post._id}>
//                 <strong>
//                   {post.title} by {post.author}
//                 </strong>
//               </Link>
//               <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
//             </ListItem>
//           ))}
//         </List>
//       ) : (
//         <h3>You haven't added any favorites yet!</h3>
//       )}
//       <div className="mt-5">
//         <Link to="home">Back to home</Link>
//       </div>
//     </div>
// 	);
// };