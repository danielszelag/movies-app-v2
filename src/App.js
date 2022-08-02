import React, { useEffect } from 'react';
import MoviesList from './components/MoviesList';
import Navbar from './components/Navbar';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MoviesList />
    </div>
  );
};

export default App;
