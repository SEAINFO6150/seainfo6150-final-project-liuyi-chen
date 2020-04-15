import React from "react";
import styles from "./BookItem.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const BookItem = props => {
  return (
    <Route>
    <div className={styles.container}>
      
       <div><img  className={styles.image} src={props.book.image._url} alt={props.book.bookName}/></div>
    <div><Link to={props.book.url}> {props.book.bookName}</Link> </div>
    <div className={styles.author}>Author: {props.book.author}</div>
    <div className={styles.price}>Price: {props.book.price}</div>
    
   
    </div>
    </Route>
  );
};

export default BookItem;
