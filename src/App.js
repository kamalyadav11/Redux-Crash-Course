import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/userAction';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser() {
    this.props.onUpdateUser('Sammy');
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onUpdateUser}>
          Update User
        </button>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
  
});

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
//Connect can take upto three arguments
//1. mapStateToProps => basically recieves state of store and pass it as props to the component
//2. mapDispatchToProps or mapActionToprops => helps us dispatch actions from our components easily, so we dont mess with using dispatch in the component itself we can call functions that will automatically dispatch actions to the store.