import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";

class ArticleSearch extends Component {
  state = {
    topic: "",
    start_date: "",
    end_date: "",
    date: "",
    url: "",
    // snippet: "",
    articles: []
  };

  componentDidMount() {
    this.searchArticles("Donald Trump", "2016", "2018");
  };

  searchArticles = (topic, start_date, end_date) => {
    API.search(topic, start_date, end_date)
    .then(res => this.setState({ result: res.data}))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(
      this.state.topic,
      this.state.start_date,
      this.state.end_date,
      // this.state.snippet
      )
      .then(res => {
        this.setState({ articles: res.data.response.docs })
        console.log(res.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <SearchForm
        value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    )
  }
};

export default ArticleSearch;