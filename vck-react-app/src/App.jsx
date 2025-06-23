import './styles/pages.css'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import  Contactpage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionPage from './pages/Admission';

const App = ()  =>{
  return(
     <div>
       <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<Contactpage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
        </Router> 
     </div> 
  );

}
export default App;

