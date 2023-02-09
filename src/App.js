import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TransformText from './Components/TransformText/TransformText';
import Transform2 from './Components/TransformText/Transform2';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<TransformText />} /> */}
        <Route path="/" element={<Transform2 />} />
      </Routes>
    </Router>
  );
}

export default App;
