import React from 'react'

class Child extends React.Component {
  render () {
    return (
      <div className='book-cover'
        style={{
          width: 128,
          height: 188,
          backgroundImage: `url(${this.props.thumb})`
        }} />
    )
  }
}

class Parent extends React.Component {
  state = {
    thumbnail: './photo.jpg'
  }

  render () {
    return (
      <Child
        thumb={this.state.thumbnail}
      />
    )
  }
}
