import React from 'react'
import styles from "./BookButton.module.css";




const BookButton = props => {
  return (
  
    <div>
      <button
      onClick={() => alert("Are you sue to buy "+props.bookname +" at $"+props.price+"?" )}
     >
      Buy now
    </button>
    </div>
 
  );
};

export default BookButton
