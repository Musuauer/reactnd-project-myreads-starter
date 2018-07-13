import React from 'react'
import Book from './Book'


function Bookshelf (props) {
 
    const books = props.books
    const shelf = props.id

    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.filter( book =>
                              (book.shelf === shelf)
                      ).map( book => (
          <li key= {book.id}>
           <Book
           book= {book}
           changeShelf={props.changeShelf}/>
          </li>
        )

        )}
          
          
        </ol>
      </div>
    </div>

    )
  }


export default Bookshelf