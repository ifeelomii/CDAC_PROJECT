import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landingpage from "./pages/Landingpage/Landingpage";
import About from "./components/About/About";
import { MainFooter } from "./components/Footer/MainFooter";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import GSLogin from "./components/Login/GSLogin/GSLogin";
import UserLogin from "./components/Login/UserLogin/UserLogin";
import Feedback from "./components/Feedback/Feedback";
import GSRegistrationForm from "./components/Registration/GS/GSreg";
import ComplaintRegistration from "./components/Complaint/ComplaintRegistration";
import LoginSection from "./components/LoginSection/LoginSection";
import AdminDashboard from "./pages/Adminpage/AdminDashboard";
import AllUsers from "./pages/Userpage/AllUsers";
import AllGS from "./pages/GSpage/AllGS";
import AllComplaints from "./pages/Complaintspage/Allcomplaints";
import AllAdmins from "./pages/Adminpage/AllAdmins";
import Showuser from "./pages/Userpage/ShowUser";
import AddUser from "./pages/Userpage/AddUser";
import EditUser from "./pages/Userpage/EditUser";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landingpage />} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<LoginSection />} />

          <Route path="/feedback" element={<Feedback />} />

          {/* USER PATHS */}
          <Route
            path="/users/adduser"
            element={<AddUser />}
          />

          <Route
            path="/users/edituser/:id"
            element={<EditUser />}
          />


          <Route path="/login/user" element={<UserLogin />} />

          <Route
            path="/users/alluserdetails/:username"
            element={<AllUsers />}
          />

          <Route path="/users/viewuser/:uid" element={<Showuser />} />

          {/* GRAMSEVAK PATHS */}
          <Route
            path="/gramsevaks/registergramsevak"
            element={<GSRegistrationForm />}
          />

          <Route path="/login/gramsevak" element={<GSLogin />} />

          <Route
            path="/gramsevaks/allgramsevaks/:username"
            element={<AllGS />}
          />

          {/* COMPLAINT PATHS */}
          <Route path="/complaints" element={<ComplaintRegistration />} />

          <Route
            path="/complaints/allcomplaints/:username"
            element={<AllComplaints />}
          />

          {/* ADMIN PATHS */}
          <Route path="/login/admin" element={<AdminLogin />} />

          <Route path="/admins/alladmins/:username" element={<AllAdmins />} />

          <Route path="/admins/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}

export default App;
