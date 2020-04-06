import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import AllBooks from "./AllBooks/AllBooks.jsx";
import AllCategories from "./AllCategories/AllCategories.jsx";
import UserInfo from "./UserInfo/UserInfo.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Fiction from "./AllCategories/Fiction.jsx";
import Nonfiction from "./AllCategories/Nonfiction.jsx";
import Gone_with_the_wind from "./Book/gone_with_the_wind.jsx";
import Pride_and_Prjudice from "./Book/pride_and_prejudice.jsx";
import Silent_spring from "./Book/silent_spring.jsx";
import A_room_of_ones_own from "./Book/a_room_of_ones_own.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allBooks">AllBooks</Link>
            </li>
            <li>
              <Link to="/allCategories">AllCategories</Link>
            </li>
            <li>
              <Link to="/userinfo">User Information</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/bar/hats/sombrero">Bar</Link>
            </li>
            <li>
              <Link to="/baz">Baz</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/allBooks" exact component={AllBooks} />
        <Route path="/allCategories" exact component={AllCategories} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/userinfo" exact component={UserInfo} />
        <Route path="/fiction" exact component={Fiction} />
        <Route path="/nonfiction" exact component={Nonfiction} />
        <Route path="/fiction/gone_with_the_wind" exact component={Gone_with_the_wind} />
        <Route path="/fiction/pride_and_prejudice" exact component={Pride_and_Prjudice} />
        <Route path="/nonfiction/silent_spring" exact component={Silent_spring} />
        <Route path="/nonfiction/a_room_of_ones_own" exact component={A_room_of_ones_own} />
        
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} /> 
      </Switch>
    </Router>
  );
}

export default App;
