import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {

    books: [],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    showSearchPage: false
  }

componentDidMount() {
  this.fetchBooks();
}
fetchBooks(){
  BooksAPI.getAll().then( books => {
    this.setState({books});
    console.log('books updated!');
})
}
changeShelf = (book, shelf) =>{
  console.log('updateBooks called', book, shelf);
  BooksAPI.update(book, shelf);
  this.fetchBooks();
}

  render() {
    const shelves = [
      {name: 'Currently Reading', id:'currentlyReading'},
      {name: 'Read', id:'read'},
      {name: 'Want to read', id:'wantToRead'}
       ]

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              
                {shelves.map( shelf =>
                <div key={shelf.id}>
                   <Bookshelf
                   books={this.state.books}
                   shelfName={shelf.name}
                   id={shelf.id}
                   changeShelf={this.changeShelf}
                   />
                    </div>
                )}

             
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
