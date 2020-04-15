import React from 'react'
import styles from "./BookImg.module.css";





const BookImg = props => {
  return (
    <div><img  className={styles.image} src={props.url} alt={props.bookname} /> </div>
  );
};

export default BookImg
