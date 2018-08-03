import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(items => (
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

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
