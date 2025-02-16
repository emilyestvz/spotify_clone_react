import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Songs from './pages/Songs';
import Song from './pages/Song';

const App = () => {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/artists' element={<Artists />} />
            <Route exact path='/artist/:id' element={<Artist />} />
            <Route exact path='/songs' element={<Songs />} />
            <Route exact path='/song/:id' element={<Song />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default App

