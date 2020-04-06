import React from "react"
import PropTypes from 'prop-types'
import BookItem from "./BookItem"


const Books = props => {
  return (
    <div>
      {props.books.map(book => (
      
          <BookItem book={book} />
        
      ))}
      </div>
    
  );}
  Books.propTypes = {
    books: PropTypes.array.isRequired
  };

export default Books;
