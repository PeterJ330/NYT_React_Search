import React from "react";
import "./SearchForm.css";
// import Container from "../Container/Container";

const SearchForm = props => (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"></label>
      {/* topic search field */}
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="topic" type="text" className="form-control" placeholder="Topic" id="topic"
      />
      <br />
      {/* startYear search field */}
        <input
        onChange={props.handleInputChange}
        value={props.value}
        name="startYear" type="text" className="form-control" placeholder="Start Year" id="startYear"
      />
      <br />
      {/* endYear search field */}
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="endYear" type="text" className="form-control" placeholder="End Year" id="endYear"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  </form>
  </div>
);

export default SearchForm;
