import React from 'react';
import {Routes, Route} from "react-router-dom"

import './App.css';
import { Header } from './components/layout/header/Header';
import { DishScreen } from './screens/dish-screen/DishScreen';
import { SportsScreen } from './screens/sports-screen/SportsScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dishscreen" element={<DishScreen/>} />
        <Route path="/sportscreen" element={<SportsScreen/>} /> 
      </Routes>
    </div>
  );
}

export default App;
