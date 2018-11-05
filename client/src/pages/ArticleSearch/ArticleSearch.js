import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import SaveButton from "../../components/SaveButton";
import SearchForm from "../../components/SearchForm/SearchForm";
// import SearchResults from "../../components/SearchResults";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteButton from "../../components/DeleteButton";
import Footer from "../../components/Footer";


class ArticleSearch extends Component {
  state = {
    topic: "",
    start_date: "",
    end_date: "",
    date: "",
    title: "",
    url: "",
    snippet: "",
    articles: []
  };

  componentDidMount() {
    this.searchArticles("Donald Trump", "2016", "2018");
  };

  searchArticles = (topic, start_date, end_date) => {
    API.search(topic, start_date, end_date)
      .then(res => this.setState({ result: res.data }))
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
      console.log(`
      this.state.topic = ${this.state.topic}
      this.state.start_date = ${this.state.start_date}
      this.state.end_date = ${this.state.end_date}
      `)
    )
      .then(res => {
        this.setState({ articles: res.data.response.docs })
        console.log(res.data);
        console.log(res.data.response.docs[0]);
        console.log(this.state.articles);
        console.log(this.state.articles[0].headline.main);
        this.setState({ title: this.state.articles[0].headline.main });
        console.log(this.state.title);
        console.log(this.state.articles[0].web_url);
        console.log(this.state.articles[0].snippet);
      })
      .catch(error => console.log(error));
  };

//   handleSaveArticle = event => {
//     event.preventDefault();
//       API.saveArticle({
//         {this.state.articles.map(article => {
//         title: article.headline.main,
//         date: article.pub_date,
//         url: article.web_url
//       })}
//       )}
//         .then(res => this.getArticles())
//         .catch(err => console.log(err));
// };

  render() {
    return (
      <div className="container">
        {/* <Container> */}
        <Jumbotron>
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Jumbotron>
        <Row>
          <Col size="md-12">
            <h1>Results</h1>
            <List>
              {this.state.articles.map(article => {
                return (
                  <ListItem>
                    <a href={article.web_url} target="_blank">
                      {article.headline.main}
                    </a>
                    <SaveButton onClick={this.handleSaveArticle} />
                  </ListItem>
                )
              })}
            </List>
          </Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col size="md-12">
            <h1>Saved Articles</h1>
            <List>
              {this.state.articles.map(article => {
                return (
                  <ListItem>
                    <a href={article.web_url} target="_blank">
                      {article.headline.main}
                    </a>
                    <DeleteButton onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                )
              })}
            </List>

            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>

        <Footer />
      </div>
    )
  }
};

export default ArticleSearch;