import './styles/pages.css'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import  Contactpage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionPage from './pages/Admission';
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './components/Developerinfo/DeveloperInfoPopup';
import { useState } from 'react';

const App = ()  =>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Suraj Yadrave"
          studentPhotoUrl="/public/suraj.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
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
        <ChatbotComponent/>
        </Router> 
     </div> 
     </>
  );

}
export default App;

