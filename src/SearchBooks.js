import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'



function SearchBooks (props) {
  let books = props.searchedBooks
  let query = props.query
  const updateQuery = props.updateQuery
  
  // books.sort(sortBy('title'))  // sort alphabetically
    return (
     
      <div className="search-books">
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search" 
                    >Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value= {query}
                        onChange={(event) => {
                          
                          updateQuery(event.target.value);

                        }
                      }
                    />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
              
                    {(books.length > 0) && books.map( book =>
                              (
                                <li key= {book.id}>
                                  <Book
                                    book= {book}
                                    changeShelf={props.changeShelf}/>
                                </li>
                              )
                           )
                    }
                </ol>
            </div>
      </div>
    )
}


export default SearchBooks


