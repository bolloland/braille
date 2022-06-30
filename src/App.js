import './App.css';
import BrailleContainer from './components/BrailleContainer'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router'
import AcceptButton from './components/AcceptButton';
import SymbolContainer from './components/SymbolContainer';
import ContextProvider from './ContextProvider';
import PlainText from './components/PlainText';


function App() {
  return (
    <div className="App">
    
    <ContextProvider>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<BrailleContainer />} />
      {/* <Route exact path="/reference" element={<Reference />} />
      <Route exact path="/encrypt" element={<Encrypt />} /> */}
      <Route />
    </Routes>
    <SymbolContainer />
    <AcceptButton />
    <PlainText />
    </ContextProvider>
    </div>
  );
}

export default App;
