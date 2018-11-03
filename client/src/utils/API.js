import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes article with the given id
  deleteBook: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves article to the database
  saveBook: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
