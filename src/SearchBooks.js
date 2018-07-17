import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function SearchBooks (props) {
  let searchedBooks = props.searchedBooks
  const updateQuery = props.updateQuery
  let shelfBooks = props.shelfBooks

  return (

    <div className='search-books'>
      <div className='search-books-bar'>
        <Link
          to='/'
          className='close-search'
        >Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            onChange={(event) => {
              console.log('event:', event.target.value)
              updateQuery(event.target.value)
            }
            }
          />

        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>

          {/* Check if the book is already in the selves
            * If yes, don't show it in the results, then generate the HTML for the results
            */}
          {(searchedBooks.length > 0) && searchedBooks.filter(searchedBook =>
            !shelfBooks.some(shelfBook =>
              shelfBook.id === searchedBook.id
            )
          ).map(book =>
            (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={props.changeShelf} />
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
