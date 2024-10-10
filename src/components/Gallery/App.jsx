import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryItem from './components/GalleryItem';
import Solidworks from './components/solidworks';
import CentreOFun from './components/centr';
import Farewell from './components/farewell';
import Junkyard from './components/junk';
import WaterRocket from './components/water-rocket-2k17';
import './styles/index.css';
function App() {
  return (
    <Router> {/* Wrap Routes in Router */}
      <Routes>
        <Route path="/" element={<GalleryItem />} />
        <Route path="/solidworks" element={<Solidworks />} />
        <Route path="/centre-o-fun" element={<CentreOFun />} />
        <Route path="/farewell" element={<Farewell />} />
        <Route path="/junkyard-wars" element={<Junkyard />} />
        <Route path="/water-rocket" element={<WaterRocket />} />
      </Routes>
    
  );
}

export default App;

