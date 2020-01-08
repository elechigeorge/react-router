import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Posts from './components/posts'
import About from './components/about'
import Post from './components/Post'
import Landing from './components/landing'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Landing} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/post/:id" component={Post} />
        <Route path="/about" component={About} />
      </div>
    </Router>

  );
}

export default App;
