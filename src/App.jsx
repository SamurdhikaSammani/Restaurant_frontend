import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './Pages/Home.jsx';
import Sucess from './Pages/Sucess.jsx';
import NotFound from './Pages/NotFound.jsx';  

const App = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Sucess/>} />
      <Route path='/contact' element={<NotFound/>} />
    </Routes>
    <Toaster/>

  </Router>
}
export default App; 