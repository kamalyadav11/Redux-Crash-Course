import React, { Component } from 'react'

export default class Posts extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(items => (
      <div key={items.id}>
        <h3>{items.title}</h3>
        <p>{items.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
