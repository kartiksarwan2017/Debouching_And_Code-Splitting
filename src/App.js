import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

// Dynamically importing the components using lazy
const Home = lazy(() => import("./components/Home/Home"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const About = lazy(() => import("./components/About/About"));


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
