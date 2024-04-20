import React, { useState } from 'react';
import "./App.css";
import MoviesData from './components/MoviesData';
import MovieList from './components/MovieList';
import MovieDescription from './components/MoviesDescription';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/description/:id' element={<MovieDescription movies={MoviesData}  />} />


        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;


