import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Software from './Software'
import About from './About'

function App() {


  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/software" element={<Software />}>
          </Route>
          <Route exact path="/me" element={<About />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
