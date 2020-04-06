import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fiction from "./Fiction.jsx";
import Nonfiction from "./Nonfiction.jsx";




const AllCategories = () => {
    return (
  

       <Route>
         <h1>All Categories</h1>
        <ul>
          <ol>
             <Link to="/fiction">Fiction</Link>
          </ol>
          <ol><img src="/images/Fiction.jpg" alt="fiction" /> </ol>
          <ol>
          <Link to="/nonfiction">Nonfiction</Link>
          </ol>
          <ol><img src="/images/Nonfiction.jpg" alt="nonfiction" /></ol>
        </ul>


        </Route>
       
        

        
    )
}


export default AllCategories
