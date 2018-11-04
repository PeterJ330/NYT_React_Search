import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm/SearchForm";

class ArticleDisplay extends Component {
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
        this.loadArticles();
    }

    loadArticles = () => {
        API.getSavedArticles()
            .then(res => 
                this.setState({ articles: res.data, topic: "", startDate: "", endDate: "", snippet: ""}))
            .catch(err => console.log(err));
    };

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    //  };

    // formSubmit = event => {
    //     event.preventDefault();
    //     API.search(this.state.topic, this.state.startDate, this.state.endDate, this.state.snippet)
    //     .then(res => {
    //       this.setState ({articles: res.data.response.docs})
    //       console.log(res.data);    
    //   })
    //   .catch(error => console.log(error));          
         
    // }

    saveArticle = event => {
        event.preventDefault();
        API.saveArticle({
           "title": this.state.topic,
           "url": this.state.url,
           "snippet": this.state.snippet
       })
       .then(res => this.loadArticles())
       .catch(err => console.log(err));
    };
      
    render() {
        return (
            <div className="bg">                
                <SearchForm
                    formSubmit = {this.formSubmit}
                    handleInputChange = {this.handleInputChange}
                />
                
                <div className="container">
                <div className="row">
                <div className="col md-12">

                {this.state.articles.map((article, i) =>(

                <div key= {i} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{article.headline.main}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{article.pub_date}</h6>
                                <p className="card-text">{article.snippet}</p>
                                    <button className="btn btn-outline-primary"><a href={article.web_url} target="_blank">Read</a></button>
                                    <button href="#" className="btn btn-outline-secondary" onClick={this.saveArticle}>Save</button>
                    </div>
                </div>

                ))}

                </div>


                </div>
            </div>
                  
                              
            </div>
            );
        }
}

export default ArticleDisplay;