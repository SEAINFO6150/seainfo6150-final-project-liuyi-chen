import React from 'react'
import BookItem from "./BookItem"
import styles from "./Fiction.module.css";




const Fiction = () => {
  return (
      <div>
         <h1> The Fiction page</h1>
         <div className={styles.container}>
         <div className={styles.book}>
           <BookItem bookname="Gone with the wind" author="Margaret Mitchell" _url="/images/Gone_with_the_Wind.jpg" url="/fiction/gone_with_the_wind" />
          </div>
           <div className={styles.book}>
              <BookItem bookname="Pride and Prejudice" author="Jane Austen" _url="/images/Pride_and_Prejudice.jpg" url="/fiction/pride_and_prejudice" />
         </div>
      
         </div>
      </div>
  )
}

export default Fiction
