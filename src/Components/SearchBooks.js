import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function SearchBooks ({shelfBooks, searchedBooks, updateQuery, changeShelf, noMatch}) {
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
            onChange={(event) => { updateQuery(event.target.value) }}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>

          {/* Check if the book is already in the selves
            * If it is, don't show it in the results, then generate the HTML for the results
            */}
          {searchedBooks.length > 0 &&
            noMatch === false &&
              searchedBooks.filter(searchedBook =>
                !shelfBooks.some(shelfBook =>
                  shelfBook.id === searchedBook.id
                )
              )
                .map(book =>
                  (
                    <li key={book.id}>
                      <Book
                        book={book}
                        changeShelf={changeShelf} />
                    </li>
                  )
                )
          }
          {shelfBooks.filter(shelfBook =>
            searchedBooks.some(searchedBook =>
              shelfBook.id === searchedBook.id
            )
          ).map(book =>
            (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={changeShelf} />
              </li>
            )

          )}
          {noMatch === true &&
          <li>
            No books match your search
          </li>
          }

        </ol>

      </div>
    </div>
  )
}

export default SearchBooks
