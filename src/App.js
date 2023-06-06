import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

// Dynamically importing the components using lazy
const Home1 = lazy(() => import("./components/Home/Home1"));
const Home = lazy(() => import("./components/Home/Home"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const About = lazy(() => import("./components/About/About"));


function App() {
  return (
    <div className="App">
      <Router>
       <Suspense fallback={<div>Loading...</div>}>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       </Suspense>
      </Router>
    </div>
  );
}

export default App;
