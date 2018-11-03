import React from "react";
import "./DeleteButton.css";

const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    ✗
  </span>
);

export default DeleteBtn;
