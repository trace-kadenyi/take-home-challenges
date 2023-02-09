import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransformText from './Components/TransformText/TransformText';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransformText />} />
      </Routes>
    </Router>
  );
}

export default App;
