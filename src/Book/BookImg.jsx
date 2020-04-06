import React from 'react'





const BookImg = props => {
  return (
    <div><img src={props.url} alt={props.bookname} /> </div>
  );
};

export default BookImg
