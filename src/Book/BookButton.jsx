import React from 'react'





const BookButton = props => {
  return (
  
    <div>
      <button
      onClick={() => alert("Are you sue to buy "+props.bookname )}
    >
      Buy now
    </button>
    </div>
 
  );
};

export default BookButton
