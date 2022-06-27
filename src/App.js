import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import BrailleContainer from './components/BrailleContainer'
import DotContainer from './components/DotContainer';
import Navbar from './components/Navbar';
import { useNavigate, Routes, Route } from 'react-router'
// import Reference from './components/Reference';
// import Encrypt from './components/Encrypt';


function App() {
  return (
    <div className="App">
    Here's the App:
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BrailleContainer />} />
      {/* <Route exact path="/reference" element={<Reference />} />
      <Route exact path="/encrypt" element={<Encrypt />} /> */}
      <Route />
    </Routes>
    </div>
  );
}

export default App;
