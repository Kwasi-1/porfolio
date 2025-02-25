import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:postId' element={<BlogPost />} />
      </Routes>  
    </Router>
  );
}

export default App;
