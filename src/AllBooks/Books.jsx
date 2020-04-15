import React from "react"
import PropTypes from 'prop-types'
import BookItem from "./BookItem"
import styles from "./Books.module.css";


const Books = props => {
  return (
    <div>
       <ul className={styles.container}>
      {props.books.map(book => (
      
         <ol> <BookItem book={book} /></ol>
        
      ))}
      </ul>
      </div>
    
  );}
  Books.propTypes = {
    books: PropTypes.array.isRequired
  };

export default Books;
