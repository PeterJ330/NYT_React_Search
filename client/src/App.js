import React, { Component } from "react";
// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
// import Container from "./components/Container";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm/SearchForm";
import Footer from "./components/Footer"
import Articles from "./pages/Articles/Articles";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

class App extends Component {
  state = {
    topic: "",
    startDate: "",
    endDate: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const searchParams = {
      query: this.state.topic,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    };
    API.search(searchParams)
      .then(results => {
        const articles = results.data.response.docs;
        articles.forEach(article => {
          const headline = article.headline.main;
          const date = article.pub_date;
          const url = article.web_url;
          const snippet = article.snippet;
        })
      })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    return (

      <div className="App">
          <Nav />
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Articles />        
        <Footer />
      </div>
    );
  }
}

export default App;



// const App = () => (

//     <Router>
//         <div>
//             <Nav />
//             <SearchForm
//             formSubmit = {this.formSubmit}
//             handleInputChange = {this.handleInputChange}
//             />
//             <Switch>
//                 <Route exact path="/" component={Articles} />
//                 <Route exact path="/articles" component={Articles} />
//                 <Route exact path="/articles/:id" component={Detail} />
//                 <Route component={NoMatch} />
//             </Switch>
//         </div>
//     </Router>
// );

// export default App;