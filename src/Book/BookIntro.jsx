import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




const BookItem = props => {
  return (
    <Route>
    <div>
      <h3><Link to={props.url}>{props.bookname}</Link></h3>
      <div>Author:{props.author}</div>
      <div><img src={props._url} alt={props.bookname} /></div>
    </div>
    </Route>
  );
};

export default BookItem
