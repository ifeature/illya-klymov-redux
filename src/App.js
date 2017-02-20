import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadIssues } from './actions';
import SimpleComponent from './SimpleComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    this.props.loadIssues();
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.props.counter}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.handleClick}>Load issues</button>
        <ul>
          {
            this.props.issues.map(issue => <li>{issue.title}</li>)
          }
        </ul>
        <SimpleComponent />
      </div>
    );
  }
}

export default connect(state => (
  {
    counter: state.counter,
    issues: state.issues
  }
), dispatch => bindActionCreators({ loadIssues }, dispatch))(App);

