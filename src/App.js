// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";

import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


export default function App() {
  return (

    <div>
      <Home />
      <div className="container">
        <About />
        <Projects />
        <Contact />

      </div>

    </div>

  );
}