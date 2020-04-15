import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./BookItem.module.css";




const BookItem = props => {
  return (
    <Route>
    <div>
      <div><img  src={props._url} alt={props.bookname} /></div>
      <h3><Link to={props.url}>{props.bookname}</Link></h3>
      <div className={styles.author}>Author:{props.author}</div>

      
    </div>
    </Route>
  );
};

export default BookItem
