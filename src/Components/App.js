import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../css/App.css'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'
import { Route, Redirect, Switch, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    searchResults: [],
    noMatch: false,
    shelves: [
      {name: 'Currently Reading', id: 'currentlyReading'},
      {name: 'Read', id: 'read'},
      {name: 'Want to read', id: 'wantToRead'}
    ]
  }

  componentDidMount () {
    this.fetchBooks()
  }

  fetchBooks () {
    BooksAPI.getAll().then(books => {
      this.setState({books})
      console.log('books fetched')
    })
  }

  updateBookLocally = book => {
    const { books } = this.state
    const updatedBooks = books.filter(localBook => localBook.id !== book.id)
    this.setState({ books: [...updatedBooks, book] })
  }

  changeShelf = (book, shelf) => {
    const updatedBook = {...book, shelf}
    BooksAPI.update(book, shelf)
      .then(() => this.updateBookLocally(updatedBook))
  }

  updateQuery = (query) => {
    if (query.length > 0) {
      this.setState({ noMatch: false })
      BooksAPI.search(query)
        .then(books => {
          console.log('books from query:', books)
          this.setState({ searchResults: books.filter(
            (book) => {
              return (
                book.title.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                (book.authors &&
                  book.authors.join(' ').toLowerCase().indexOf(query.toLowerCase()) > -1
                )

              )
            })
          })
        }).catch(error => {
          console.log('error...', error)
          this.setState({ noMatch: true })
        })
    } else {
      this.setState({ searchResults: [] })
    }
  }

  render () {
    return (
      <div className='app'>
        <Switch>

          <Route path='/search' render={() => (
            <SearchBooks
              shelfBooks={this.state.books}
              updateQuery={this.updateQuery}
              searchedBooks={this.state.searchResults}
              changeShelf={this.changeShelf}
              noMatch={this.state.noMatch}
            />
          )}
          />

          <Route exact path='/' render={() => (

            <div className='list-books'>
              <div className='list-books-title'>
                <h1>MyReads</h1>
              </div>
              <div className='list-books-content'>
                {this.state.shelves.map(shelf =>
                  <div key={shelf.id}>
                    <Bookshelf
                      books={this.state.books}
                      shelfName={shelf.name}
                      shelfId={shelf.id}
                      changeShelf={this.changeShelf}
                    />
                  </div>
                )}
              </div>
              <div className='open-search'>

                <Link
                  to='/search'
                >Add a book
                </Link>
              </div>
            </div>
          )}
          />

          <Redirect from='*' to='/' />

        </Switch>
      </div>
    )
  }
}

export default BooksApp
