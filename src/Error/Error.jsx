import React from 'react'
import styles from "./Error.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Error = () => {
    return (
        <div className={styles.container}>
            <ul></ul>
           <div> 
               <h1>404 Not Found</h1>
               </div>
           <div className={styles.text}>
               <p>
               The page you find doesn't exist!
               </p>
               <p>
                Please check the input!
               </p>              
               <p>
               <Route>
               <Link to="/">Back to homepage</Link> 
                </Route>
               </p>
               </div>
        </div>
    )
}

export default Error
