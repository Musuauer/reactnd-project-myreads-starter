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
      query: '',
      searchResults: []

  }

  componentDidMount() {
      this.fetchBooks();
  }

  fetchBooks(){
      BooksAPI.getAll().then( books => {
        this.setState({books});
        console.log('books fetched')
      })
  }

  changeShelf = (book, shelf) =>{
      BooksAPI.update(book, shelf);
      console.log('changeshelf called')
      this.fetchBooks();
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    
    if(query.length > 0){
      BooksAPI.search(query).then(books => {
        this.setState({ searchResults: books })
      })}
      else {
        this.setState({ searchResults: [] })
       console.log(this.state.searchResults)
      }
   

  }


  render() {
    const shelves = [
      {name: 'Currently Reading', id:'currentlyReading'},
      {name: 'Read', id:'read'},
      {name: 'Want to read', id:'wantToRead'}
       ]

    return (
      <div className="app">

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
            </div>
          )}
          />

          <div className="open-search">
                <Link 
                  to='/search'
                  >Add a book
                </Link>
            </div>

          <Route path='/search' render={() => (
              <SearchBooks
                  query={this.state.query}
                  updateQuery={this.updateQuery}
                  searchedBooks={this.state.searchResults}
                  changeShelf={this.changeShelf}
              />
          )}
          />
      </div>
    )
  }
}

export default BooksApp
