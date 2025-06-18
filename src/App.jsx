import React from 'react'
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import About from './pages/about/About';
import Service from './pages/service/Service';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import { Toaster } from 'react-hot-toast';


export default function App() {
  return (
    <div >
      <Router>
          <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path = "/*" element={<PageNotFound />} />
          <Route path="/about" element = {<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </Router>
      
    </div>
  )
}
