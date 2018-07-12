
import React from 'react'

class Book extends React.Component{
state = {
  shelf: ''
}

changeShelf = (event) => {
  this.setState({ shelf: event.target.value });
  this.props.updateShelf(this.props.book, event.target.value);
};


  render(){
  return (
    <div className="book">
  <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
    <div className="book-shelf-changer">
      <select
      id="shelf"
      onChange={this.changeShelf} 
      value={this.state.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  </div>
  <div className="book-title">{this.props.book.title}</div>
  <div className="book-authors">{this.props.book.authors.join(', ')}</div>
</div>
  )
}
}


export default Book