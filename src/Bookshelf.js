import React from 'react'
import Book from './Book'


class Bookshelf extends React.Component {
  state = {
   
  }

 

  render(){
    const books = this.props.books
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
  
        {books.map( book => (
          <li key= {book.id}> 
          <Book
          book= {book}
          updateShelf={this.props.changeShelf}/>
          
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