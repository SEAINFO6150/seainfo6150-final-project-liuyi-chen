import React from 'react'
import BookInfo from "./BookInfo"

import BookButton from "./BookButton"
import BookImg from "./BookImg"
import styles from "./book.module.css";





const a_room_of_ones_own = () => {
  return (
      <div>
        
        <div><BookImg url="/images/A_Room_of_one's_Own.jpg" bookname="A Room of One's Own" /></div>
         <div><BookInfo bookname="A Room of One's Own" author="Virginia Woolf"  pubYear="2003" price="30.00"/> </div>
  <div><BookButton bookname="A Room of One's Own" price="30.00"/> </div> 
       
      
      <section className={styles.container} >
        <div className={styles.article}>
        <p>
        A Room of One's Own is an extended essay by Virginia Woolf, first published in September 1929.
         The work is based on two lectures Woolf delivered in October 1928 at Newnham College and Girton College,
          women's constituent colleges at the University of Cambridge.
        </p>
        <p>
        An important feminist text, the essay is noted in its argument for both a literal and figurative space for 
        women’s writers within a literary tradition dominated by men.
        </p>
        </div>

      </section>
      </div>
  )
}

export default a_room_of_ones_own
