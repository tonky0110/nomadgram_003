import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style.App__header}>
          <img src={logo} className={style.App__logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.App__link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
