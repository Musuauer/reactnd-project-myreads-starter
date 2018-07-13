
import React from 'react'

function Book (props){

  const {changeShelf, book} = props
  

  return (

    <div className="book">
  <div className="book-top">
    <div className="book-cover" 
    style={{ 
      width: 128, 
      height: 193, 
      background: `url(${book.imageLinks && book.imageLinks.thumbnail})`

      }}>
      </div>
    <div className="book-shelf-changer">
      <select
      id="shelf"
      onChange={ (e) => changeShelf(book, e.target.value) }         
      defaultValue="move">
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">{book.title}</div>
  <div className="book-authors">{book.authors.join(', ')}</div>
</div>
  )
}


export default Book