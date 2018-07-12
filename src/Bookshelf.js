import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends React.Component {
  state = {}

  render(){
    const books = this.props.books
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
  
        {books.map( book => (
          <li key= {book.id}> 
          <Book
          book= {book}/>
          
        </li>
        )

        )}
          
          
        </ol>
      </div>
    </div>

    )
  }
}


export default Bookshelf