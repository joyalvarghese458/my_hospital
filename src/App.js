import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MedicalServices from './pages/MedicalServices';
import Admin from './Admin/Admin';
import LoginPage from './Admin/LoginPage';
import Doctors from './pages/Doctors';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      
       <Routes>
       
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/medicalServices' element={<MedicalServices />} />
         <Route path='/admin' element={<Admin />} />
         <Route path='/login' element={<LoginPage />} />
         <Route path='/doctors' element={<Doctors />} />
         <Route path='/joinus' element={<JoinUs />} />
         <Route path='/contact' element={<Contact />} />
         
       </Routes>
      
    </div>
  );
}

export default App;
