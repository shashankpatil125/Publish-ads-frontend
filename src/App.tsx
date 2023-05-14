import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adportal from './pages/adPortal/Adportal';
import AllAds from './pages/allAds/AllAds';
import { Test } from './pages/test/Test';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adportal/>}></Route>
          <Route path="/allads" element={<AllAds/>}></Route>
          <Route path="/test" element={<Test/>}></Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
