import Header from './components/header/header';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
