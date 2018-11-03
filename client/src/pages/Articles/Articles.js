import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import DeleteButton from "../../components/DeleteButton";
// import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormButton } from "../../components/SearchForm";

class Articles extends Component {
  state = {
    // articles: [],
    articles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // event.preventDefault();
    API.saveArticle({
      title: this.state.title,
      date: this.state.date,
      url: this.state.url
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          {this.state.articles.map(article => (
            <Link to={"/articles/" + article._id}>
              <ul>{article.title} {article.date} {article.url}</ul>
            </Link>
          ))}
          <DeleteButton
            // onClick={() => this.deleteArticle(article._id)}
            />
        </Container>

      </div>
    );
  }
}
export default Articles;








    //   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Articles Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormButton
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Save Article
//               </FormButton>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Articles On My List</h1>
//             </Jumbotron>
//             {this.state.articles.length ? (
//               <List>
//                 {this.state.articles.map(article => (
//                   <ListItem key={article._id}>
//                     <Link to={"/articles/" + article._id}>
//                       <strong>
//                         {article.title} by
//                         {/* {article.author} */}
//                       </strong>
//                     </Link>
//                     <DeleteButton onClick={() => this.deleteArticle(article._id)} />
//                   </ListItem>
//                 ))};
//               </List>
//             ) : (
//                 <h3>No Results to Display</h3>
//               )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Articles;
