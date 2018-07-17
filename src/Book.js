
import React from 'react'

function Book (props) {
  const {changeShelf, book} = props
  const noCoverImage = './nocover.jpg'

  return (

    <div className='book'>
      <div className='book-top'>
        <div className='book-cover'
          style={{
            width: 128,
            height: 193,
            background: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCoverImage})`

          }} />
        <div className='book-shelf-changer'>
          <select
            id='shelf'
            value={book.shelf ? book.shelf : 'none'}
            onChange={(e) => changeShelf(book, e.target.value)}
          >
            <option value='move' disabled>Move to...</option>
            <option value='currentlyReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{book.authors ? (book.authors.join(', ')) : ('')}</div>

    </div>
  )
}

export default Book
