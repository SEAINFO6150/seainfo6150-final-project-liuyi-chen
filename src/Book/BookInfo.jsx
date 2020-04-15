import React from 'react'
import styles from "./BookInfo.module.css";





const BookInfo = props => {
  return (

    <div>
      <div className={styles.bookName}>{props.bookname}</div>
      <div className={styles.author}>Author:{props.author}</div>
      <time>Year of Publication:{props.pubYear}</time>
      <div className={styles.price}> Price:{props.price}</div>
    </div>
   
  );
};

export default BookInfo
