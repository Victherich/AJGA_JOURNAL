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
import PrivateAuthorSignup from './components/PrivateAuthorSignup';
import PrivateAuthorLogin from './components/PrivateAuthorLogin';
import AuthorForgotPassword from './components/AuthorForgotPassword';
import AuthorResetPassword from './components/AuthorResetPassword';
import PrivateEditorDashboard from './components/PrivateEditorDashboard';
import EditorDashboard from './components/EditorDashboard';
import PrivateEditorSignup from './components/PrivateEditorSignup';
import EditorSignUp from './components/EditorSignUp';
import PrivateEditorLogin from './components/PrivateEditorLogin';
import EditorLogin from './components/EditorLogin';
import EditorForgotPassword from './components/EditorForgotPassword';
import EditorResetPassword from './components/EditorResetPassword';
import EditorEmailVerification from './components/EditorEmailVerification';


function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
 {/* <ShootingStars/> */}
 <FloatingBubbles/>
 <Raindrops/>
   <Header/>
    <Routes>
      {/* public pages */}
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/issuesandpubs' element={<ArchivesPage/>}/>
      <Route path="/contactus" element={<ContactSupport/>}/>
      <Route path='/publishingpolicy' element={<PublishingPolicies/>}/>
  

{/* author pages */}
      <Route path='/authordashboard' element={<PrivateAuthorDashboard/>}>
        <Route path='' element={<AuthorDashboard/>}/>
      </Route>

      <Route path='/authorsignup' element={<PrivateAuthorSignup/>}>
        <Route path='' element={<AuthorSignUp/>}/>
      </Route>

      <Route path='/authorlogin' element={<PrivateAuthorLogin/>}>
        <Route path='' element={<AuthorLogin/>}/>
      </Route>
  
      <Route path='/authorverifyemail/:token' element={<AuthorEmailVerification/>}/>
      <Route path='/authorforgotpassword' element={<AuthorForgotPassword/>}/>
      <Route path='/author-reset-password/:token' element={<AuthorResetPassword/>}/>



      {/* editor pages */}

      <Route path='/editordashboard' element={<PrivateEditorDashboard/>}>
        <Route path='' element={<EditorDashboard/>}/>
      </Route>

      <Route path='/editorsignup' element={<PrivateEditorSignup/>}>
        <Route path='' element={<EditorSignUp/>}/>
      </Route>

      <Route path='/editorlogin' element={<PrivateEditorLogin/>}>
        <Route path='' element={<EditorLogin/>}/>
      </Route>
  
      <Route path='/editorverifyemail/:token' element={<EditorEmailVerification/>}/>
      <Route path='/editorforgotpassword' element={<EditorForgotPassword/>}/>
      <Route path='/editor-reset-password/:token' element={<EditorResetPassword/>}/>







    </Routes>
    <a><img src={logo} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/2348185609702", "_blank")} /></a> 
  
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
