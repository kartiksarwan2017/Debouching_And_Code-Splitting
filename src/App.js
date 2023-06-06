import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
