import React from 'react'
import BookItem from "./BookItem"
import styles from "./Nonfiction.module.css";





const Nonfiction = () => {
  return (
      <div>
         <h1> The Fiction page</h1>
         <div className={styles.container}>
         <div className={styles.book}>
           <BookItem bookname="Silent Spring" author="Rachel Carson" _url="/images/Silent_Spring.jpg" url="/nonfiction/silent_spring" />
          </div>
           <div className={styles.book}>
              <BookItem bookname="A Room of One's Own" author="Virginia Woolf" _url="/images/A_Room_of_one's_Own.jpg" url="/nonfiction/a_room_of_ones_own" />
         </div>
         </div>
      </div>
  )
}


export default Nonfiction
