
import React from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

  state = {
    query: ''
  }


  render(){
    const book = this.props.book
    const { query } = this.state
    console.log('the books', this.props.book)
    // let showingBooks
    // if (query){
    //   const match = new RegExp(escapeRegExp(this.state.query), 'i')   // 'i' means 'ignore case'
    //   showingContacts = contacts.filter((contact) => match.test(contact.name))
    // } else {
    //   showingContacts = contacts
    // }
  
  


    return (
        <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
      )
    
    }
      

    
   
  }

    

export default Book