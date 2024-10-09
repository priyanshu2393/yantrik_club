import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryItem from './components/GalleryItem';
import Solidworks from './components/solidworks';
import CentreOFun from './components/centr';
import Farewell from './components/farewell';
import Junkyard from './components/junk';
import WaterRocket2K17 from './components/rocket_17';
import WaterRocket2K22 from './components/rocket_22';
import './styles/index.css';
function App() {
  return (

      <Routes>
        <Route path="/" element={<GalleryItem />} />
        <Route path="/solidworks" element={<Solidworks />} />
        <Route path="/centre-o-fun" element={<CentreOFun />} />
        <Route path="/farewell" element={<Farewell />} />
        <Route path="/junkyard-wars" element={<Junkyard />} />
        <Route path="/water-rocket-2k17" element={<WaterRocket2K17 />} />
        <Route path="/water-rocket-2k22" element={<WaterRocket2K22 />} />
      </Routes>
    
  );
}

export default App;

