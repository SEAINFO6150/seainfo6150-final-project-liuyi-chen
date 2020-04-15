import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./BookItem.module.css";




const BookItem = props => {
  return (
    <Route>
    <div>
      <div><img  className={styles.image}  src={props._url} alt={props.bookname} /></div>
      <div className={styles.bookName}><Link to={props.url}>{props.bookname}</Link></div>
      <div className={styles.author}>Author:{props.author}</div>

      
    </div>
    </Route>
  );
};

export default BookItem
