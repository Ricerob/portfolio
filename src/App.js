import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Software from './Software'

function App() {


  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/software" element={<Software />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
