import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./AllCategories.module.css";




const AllCategories = () => {
    return (
  

       <Route>
         <div>
         <h1>All Categories</h1>
        <ul>
          
          <ol><img   className={styles.image} src="/images/Fiction.jpg" alt="fiction" /> </ol>
          <ol className={styles.title}>
             <Link to="/fiction">Fiction</Link>
          </ol>
          <ul></ul>
          <ul></ul>
          
          <ol><img   className={styles.image} src="/images/Nonfiction.jpg" alt="nonfiction" /></ol>
          <ol className={styles.title}>
          <Link to="/nonfiction">Nonfiction</Link>
          </ol>
        </ul>
        </div>


        </Route>
       
        

        
    )
}


export default AllCategories
