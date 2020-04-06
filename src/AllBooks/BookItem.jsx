import React from "react";


const BookItem = props => {
  return (
    <div>
     <h3>{props.book.bookName}</h3>
    <div>Author:{props.book.author}</div>
    <div><img src={props.book.image._url} alt={props.book.bookName}/></div>
    </div>
  );
};

export default BookItem;
