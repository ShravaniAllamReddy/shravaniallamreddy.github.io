
import Home from "./pages/Home";
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <div className="container content">
        <Route path="/">
          <About />
        </Route>
        <Route path="/">
          <Projects />
        </Route>
        <Route path="/">
          <Contact />
        </Route>
      </div>
    </Router >
  );
  
}