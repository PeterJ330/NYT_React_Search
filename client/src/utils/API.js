import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "&api-key=cab3f8a1a7e1493788e64d9a06520504";
// const APIKEY = "cab3f8a1a7e1493788e64d9a06520504";

export default {
  search: function(topic,start_date, end_date) {
    // return axios.get(BASEURL + APIKEY + "&q=" +  topic + "&begin_date=" + start_date + "0101" + "&end_date=" + end_date + "1231");
    return axios.get(BASEURL + APIKEY + "&q=" +  topic + "&begin_date=" + start_date + "0101" + "&end_date=" + end_date + "1231");
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Saves article to the database
  saveArticle: function(data) {
    console.log(data);
    return axios.post("/api/articles", data);
  },
  // Deletes article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
};
