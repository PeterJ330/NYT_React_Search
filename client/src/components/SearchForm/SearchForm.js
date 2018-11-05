import React from "react";
import "./SearchForm.css";
// import SearchResults from "../SearchResults/SearchResults";
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
        name="start_date" type="text" className="form-control" placeholder="Start Year" id="startDate"
      />
      <br />
      {/* endYear search field */}
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="end_date" type="text" className="form-control" placeholder="End Year" id="endDate"
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
  {/* <SearchResults /> */}
  </div>
);

export default SearchForm;
