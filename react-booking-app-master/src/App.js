import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Hotel from './pages/Hotel'
import List from './pages/List'
import SingleHotel from './pages/SingleHotel'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route  path='/' element={<Home/>}  />
           <Route  path='/hotel' element={<Hotel/>}  />
           <Route  path='/hotel/:id' element={<SingleHotel/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
