import React from 'react'
import BookInfo from "./BookInfo"

import BookButton from "./BookButton"
import BookImg from "./BookImg"
import styles from "./book.module.css";





const silent_spring = () => {
  return (
      <div>
        
        <div><BookImg url="/images/Silent_Spring.jpg" bookname="Silent Spring" /></div>
         <div><BookInfo bookname="Silent Spring" author="Rachel Carson"  pubYear="2000" price="15.00"/> </div>
  <div><BookButton bookname="Silent Spring" price="15.00"/> </div> 
       
      
      <section>
      <div className={styles.article}>
        <p>
        Silent Spring is an environmental science book by Rachel Carson.[1] The book was published on September 27,
         1962, documenting the adverse environmental effects caused by the indiscriminate use of pesticides. Carson
          accused the chemical industry of spreading disinformation, and public officials of accepting the industry's
           marketing claims unquestioningly.
        </p>
        <p>
        Starting in the late 1950s, prior to the book's publication, Carson had focused her attention on environmental
         conservation, especially environmental problems that she believed were caused by synthetic pesticides. The
          result of her research was Silent Spring, which brought environmental concerns to the American public.
           The book was met with fierce opposition by chemical companies, but, owing to public opinion, it brought
            about numerous changes. It spurred a reversal in the United States' national pesticide policy, led to a
             nationwide ban on DDT for agricultural uses,[2] and helped to inspire an environmental movement that led
              to the creation of the U.S. Environmental Protection Agency.
        </p>
        </div>

      </section>
      </div>
  )
}

export default silent_spring
