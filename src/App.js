import { render } from '@testing-library/react';
import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Components/navBar';
import {Systems} from './pages/systems';

function App() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/systems' element={ <Systems/> }/>
      </Routes>
    </Router>
  )
}

export default App;