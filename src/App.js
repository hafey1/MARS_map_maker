import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import logo from './logo.svg';
import './App.css';
import FileIn from './FileIn/FileIn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileIn/>
        <Button> {"Please click me"}</Button>

      </div>
    );
  }
}

export default App;
