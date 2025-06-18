import React from 'react'
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import PageNotFound from './pages/pageNotFound/PageNotFound';


export default function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path = "/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      
    </div>
  )
}
