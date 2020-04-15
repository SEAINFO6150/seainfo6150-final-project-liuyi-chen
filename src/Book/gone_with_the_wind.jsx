import React from 'react'
import BookInfo from "./BookInfo"

import BookButton from "./BookButton"
import BookImg from "./BookImg"
import styles from "./book.module.css";





const gone_with_the_wind = () => {
  return (
      <div>
        <div className={styles.container}>
        <div><BookImg url="/images/Gone_with_the_Wind.jpg" bookname="Gone with the Wind" /></div>
        <div className={styles.rest}>
         <div><BookInfo bookname="Gone with the Wind" author="Margaret Mitchell"  pubYear="2017" price="55.00" /> </div>
       <div><BookButton bookname="Gone with the Wind"  price="55.00" /> </div> 
       </div>
       </div>
      
      <section>
      <div className={styles.article}>
        <p>
        Gone with the Wind is a novel by American writer Margaret Mitchell, first published in 1936.
         The story is set in Clayton County and Atlanta, both in Georgia, during the American Civil War and
          Reconstruction Era. It depicts the struggles of young Scarlett O'Hara, the spoiled daughter of a
           well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty
            following Sherman's destructive "March to the Sea". This historical novel features a coming-of-age story,
             with the title taken from a poem written by Ernest Dowson.
        </p>
        <p>
        Gone with the Wind is a controversial reference point for subsequent writers of the South, both black
         and white. Scholars at American universities refer to, interpret, and study it in their writings. The novel
          has been absorbed into American popular culture.
        </p>
        </div>

      </section>
      </div>
  )
}

export default gone_with_the_wind
