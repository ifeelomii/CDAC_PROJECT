import "./App.css";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landingpage from "./pages/Landingpage";
import About from "./components/About/About";
import { MainFooter } from "./components/Footer/MainFooter";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import GSLogin from "./components/Login/GSLogin/GSLogin";
import UserLogin from "./components/Login/UserLogin/UserLogin";
import Feedback from "./components/Feedback/Feedback";
import UserRegistrationForm from "./components/Registration/User/Userreg";
import GSRegistrationForm from "./components/Registration/GS/GSreg";
import ComplaintRegistration from "./components/Complaint/ComplaintRegistration";
import LoginSection from "./components/LoginSection/LoginSection";
import AdminDashboard from "./pages/Adminpage/AdminDashboard";
import AllUsers from "./pages/Userpage/AllUsers";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landingpage />} />
        
          <Route path="/about" element={<About />} />
        
          <Route path="/login" element={<LoginSection />} />
        
          <Route path="/login/admin" element={<AdminLogin />} />
        
          <Route path="/login/gramsevak" element={<GSLogin />} />
        
          <Route path="/login/user" element={<UserLogin />} />
        
          <Route path="/feedback" element={<Feedback />} />
        
          <Route path="/complaint" element={<ComplaintRegistration />} />
        
          <Route path="/user/registeruser" element={<UserRegistrationForm />} />
        
          <Route path="/user/allusers/:username" element={<AllUsers />} />
        
          <Route path="/gramsevak/registergramsevak" element={<GSRegistrationForm />} />
        
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}

export default App;
