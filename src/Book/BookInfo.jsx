import React from 'react'
import styles from "./BookInfo.module.css";





const BookInfo = props => {
  return (

    <div>
      <h1>{props.bookname}</h1>
      <h3>Author:{props.author}</h3>
      <time>Year of Publication:{props.pubYear}</time>
      <div className={styles.price}> Price:{props.price}</div>
    </div>
   
  );
};

export default BookInfo
