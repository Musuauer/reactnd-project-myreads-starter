import React from 'react'
import Book from './Book'
import sortBy from 'sort-by'

function Bookshelf (props) {
  const books = props.books
  const shelf = props.shelfId

  { /*   Create a new array that only has the books
    *   of the same shelf value
    */ }
  let filteredBooks = books.filter(book =>
    (book.shelf === shelf))

  books.sort(sortBy('title')) // sort alphabetically

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.shelfName}</h2>
      {filteredBooks.length > 0 ? (
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {filteredBooks.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={props.changeShelf} />
              </li>
            )

            )}

          </ol>
        </div>
      ) : (
        <h2 className='bookshelf-books'>This shelf has no books</h2>
      )
      }

    </div>

  )
}

export default Bookshelf
