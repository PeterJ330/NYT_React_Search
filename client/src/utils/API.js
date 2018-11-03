import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
// const APIKEY = "api-key=" + "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // search: function(searchParams) {
  //   return axios.get(BASEURL + searchParams.query + APIKEY);
  // },
  search: function(searchParams) 
  { return axios.get(BASEURL + APIKEY + "&q=" +  searchParams.query + "&begin_date=" + searchParams.start_date + "0101" + "&end_date=" + searchParams.end_date + "1231");
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
