import logo from './logo.svg';
import './App.css';
import { getWidget } from './server/config';
import react, { useEffect } from 'react';

function App() {
  useEffect(() => {
    getWidget({
      'id': 'LocalNews',
      'ajax': 'json'
    }).then((data) => {
      console.log('data---');
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;
