import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import createPost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to='/createPost'>Create a post</Link>
          <Link to='/'>Home Page</Link>
        </div>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/createPost" exact Component={createPost}/>
          <Route path="/Post/:id" exact Component={Post}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
