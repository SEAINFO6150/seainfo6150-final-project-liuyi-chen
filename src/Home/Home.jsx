import React from 'react'
import styles from "./Home.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <Route>
        <div className={styles.container}>
            <h1>Online Bookstore</h1>
            
            <img  className={styles.image} src="/images/books.jpg" alt="books" />
            <div className={styles.text}>
                <h2>Knowledge makes humble, ignorance makes proud.</h2>
            </div>
            <div className={styles.books} ><Link to="/allBooks">View All Books</Link></div>
            
            <div className={styles.categories} ><Link to="/allCategories">View All Categories</Link></div>
    
        </div>
        </Route>
    )
}

export default Home
