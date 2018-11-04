import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticleSearch from "./pages/ArticleSearch";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleDisplay from "./pages/ArticleDisplay";
import NoMatch from "./pages/NoMatch";

// const App = () => (

//     <Router>
//         <div>
//             <Nav />
//             <Switch>
//                 <Route exact path="/" component={ArticleSearch} />
//                 <Route exact path="/articles" component={ArticleDisplay} />
//                 <Route exact path="/articles/:id" component={ArticleDetail} />
//                 <Route component={NoMatch} />
//             </Switch>
//             <Footer />
//         </div>
//     </Router>
// );

// export default App;

const App = () => (
    <div>
        <Nav />
    <ArticleSearch />
    {/* <ArticleDisplay /> */}
    {/* <ArticleDetail /> */}
    <Footer />
    </div>
)
export default App;