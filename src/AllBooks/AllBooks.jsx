import React from 'react'
import books from "../data/books.json"
import Books from "./Books"
import styles from "./AllBooks.module.css";

const AllBooks = () => {
    return (
        <div>
            <h1>All Books</h1>
            <ul>
           <li><Books books={Object.values(books)} /></li> 
            </ul>
        </div>
    )
}

export default AllBooks
