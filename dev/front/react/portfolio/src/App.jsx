import './css/app.css';
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutme from './pages/Aboutme.jsx'
import Examples from './pages/Examples'
import Reviews from './pages/Reviews'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="*" element={<Aboutme/>}/>
          <Route path="/examples" element={<Examples/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
