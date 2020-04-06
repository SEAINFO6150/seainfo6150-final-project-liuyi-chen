import React from 'react'





const BookInfo = props => {
  return (

    <div>
      <h1>{props.bookname}</h1>
      <h3>Author:{props.author}</h3>
      <time>{props.pubYear}</time>
    </div>
   
  );
};

export default BookInfo
