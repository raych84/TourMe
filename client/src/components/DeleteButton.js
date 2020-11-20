import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      <button type="button" className="btn btn-success btn-sm"> Remove Tour</button>
    </span>
  );
}

export default DeleteButton;
