import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
	console.log("window event:");
  window.e.emit('message', {text: 'Hello from childApp1'});
  return (
  	<BrowserRouter basename={"/parent"}>
    <div className="App">
        Hello from child app 1
        <p>
        <button 
        	onClick={() => {
        		console.log("informing parent to change pathName");
        		window.e.emit('goTo', {pathName: '/childApp2'});
        	}}
        >
          Go to childApp2
        </button>
        </p>
    </div>
    </BrowserRouter>
  );
}

export default App;
