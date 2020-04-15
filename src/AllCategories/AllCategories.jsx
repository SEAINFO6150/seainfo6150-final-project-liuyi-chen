import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./AllCategories.module.css";




const AllCategories = () => {
    return (
  

       <Route>
         <div>
         <h1>All Categories</h1>
       
          <div className={styles.container}>
            <div>
          <div><img   className={styles.image} src="/images/Fiction.jpg" alt="fiction" /> </div>
          <div className={styles.title}>
             <Link to="/fiction">Fiction</Link>
          </div>
            </div>
          
            <div>
          <div><img   className={styles.image} src="/images/Nonfiction.jpg" alt="nonfiction" /></div>
          <div className={styles.title}>
          <Link to="/nonfiction">Nonfiction</Link>
          </div>
          </div>

          </div>
       
        </div>


        </Route>
       
        

        
    )
}


export default AllCategories
