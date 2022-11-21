import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import BooksList from './components/BooksList';
import WishList from './components/WishList';

function App() {
  const [name, setAppName] = useState("");
  console.log(name);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bookslist">BooksList</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
          </ul>
        </nav>
        <div>Welcome {name}!</div>
        <Routes>
          <Route path="/bookslist" element={<BooksList/>}>
          </Route>
          <Route path="/wishlist" element={<WishList/>}>
          </Route>
          <Route path="/" element={<Home userName={setAppName} />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
