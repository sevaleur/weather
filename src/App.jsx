import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Weather from './pages/weather/Weather';
import Weather2 from './pages/weather/Weather2';
import Weather3 from './pages/weather/Weather3';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>
        
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/weather" element={ <Weather/> } />
          <Route path="/weather2" element={ <Weather2/> } />
          <Route path="/weather3" element={ <Weather3/> } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
