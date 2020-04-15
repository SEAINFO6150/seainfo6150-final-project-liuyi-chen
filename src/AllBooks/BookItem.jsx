import React from "react";
import styles from "./BookItem.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const BookItem = props => {
  return (
    <div className={styles.container}>
      <Route>
       <div><img src={props.book.image._url} alt={props.book.bookName}/></div>
     <h3><Link to={props.book.url}> {props.book.bookName}</Link> </h3>
    <div className={styles.author}>Author: {props.book.author}</div>
    <div className={styles.price}>Price: {props.book.price}</div>
    </Route>
   
    </div>
  );
};

export default BookItem;
