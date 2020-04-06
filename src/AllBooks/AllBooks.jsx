import React from 'react'
import books from "../data/books.json"
import Books from "./Books"

const AllBooks = () => {
    return (
        <div>
            <h1>All Books</h1>
            <Books books={Object.values(books)} />
        </div>
    )
}

export default AllBooks
