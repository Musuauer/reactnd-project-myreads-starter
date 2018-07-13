import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

    books: [],
    
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
        <Route path='/search' component={SearchBooks}/>

        <Route exact path='/' render={() => (
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
            <Link 
            to='/search'
            >Add a book</Link>
          </div>
          
        </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
