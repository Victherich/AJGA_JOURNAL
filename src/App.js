import logo from './Images/logo.png';
import './App.css';
import LandingPage from './components/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ArchivesPage from './components/ArchivesPage';
import Sidebar from './components/SideBar';
import ContactSupport from './components/Contactus';
import ScrollToTop from './components/ScrollToTop';
import PublishingPolicies from './components/PublishingPolicy';
import FallingLeaves from './components/EffectComponent';
import ShootingStars from './components/EffectComponent';
import FloatingBubbles from './components/EffectComponent';
import Raindrops from './components/RainEffects';
import AuthorDashboard from './components/AuthorDashboard';
import PrivateAuthorDashboard from './components/PrivateAuthorDashboard';
import AuthorLogin from './components/AuthorLogin';
import AuthorSignUp from './components/AuthorSignUp';
import AuthorEmailVerification from './components/AuthorEmailVerification';


function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
 {/* <ShootingStars/> */}
 <FloatingBubbles/>
 <Raindrops/>
   <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/issuesandpubs' element={<ArchivesPage/>}/>
      <Route path="/contactus" element={<ContactSupport/>}/>
      <Route path='/publishingpolicy' element={<PublishingPolicies/>}/>
      {/* <Route path='/authordashboard' element={<AuthorDashboard/>}/> */}
      <Route path='/authordashboard' element={<PrivateAuthorDashboard/>}>
        <Route path='' element={<AuthorDashboard/>}/>
      </Route>

      <Route path='/authorlogin' element={<AuthorLogin/>}/>
      <Route path='/authorsignup' element={<AuthorSignUp/>}/>
      <Route path='/authorverifyemail/:token' element={<AuthorEmailVerification/>}/>
    </Routes>
    <a><img src={logo} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/2348185609702", "_blank")} /></a> 
  
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
