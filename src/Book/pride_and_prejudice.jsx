import React from 'react'
import BookInfo from "./BookInfo"

import BookButton from "./BookButton"
import BookImg from "./BookImg"
import styles from "./book.module.css";





const pride_and_prejudice = () => {
  return (
    <div>
        
    <div><BookImg url="/images/Pride_and_Prejudice.jpg" bookname="Pride and Prejudice" /></div>
     <div><BookInfo bookname="Pride and Prejudice" author="Jane Austen"  pubYear="2009" price="35.00" /> </div>
<div><BookButton bookname="Pride and Prejudice" price="35.00"/> </div> 
   <section>
   <div className={styles.article}>
     <p>
   Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character
    development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty
     judgments and comes to appreciate the difference between superficial goodness and actual goodness.
    </p>
    <p>
    Pride and Prejudice has consistently appeared near the top of lists of "most-loved books" among literary scholars and
     the reading public. It has become one of the most popular novels in English literature, with over 20 million copies sold,
      and has inspired many derivatives in modern literature. For more than a century, dramatic adaptations, reprints,
       unofficial sequels, films, and TV versions of Pride and Prejudice have portrayed the memorable characters and themes of
        the novel, reaching mass audiences. The 2005 film Pride and Prejudice is the most recent film adaptation that closely
         represents the book.
    </p>
    </div>
     </section>
   
  </div>
  )
}

export default pride_and_prejudice
