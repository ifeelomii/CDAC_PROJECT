import "./App.css";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Landingpage from "./pages/Landingpage";
import AboutPage from "./pages/Aboutpage";
import Loginpage from "./pages/Loginpage";
import { MainFooter } from "./components/Footer/MainFooter";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import GSLogin from "./components/Login/GSLogin/GSLogin";
import UserLogin from "./components/Login/UserLogin/UserLogin";
import FeedbackPage from "./pages/FeedbackPage";
import UserRegistrationForm from "./components/Registration/User/Userreg";
import GSRegistrationForm from "./components/Registration/GS/GSreg";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
        </Routes>
        <Routes>
          <Route path="/login/admin" element={<AdminLogin />} />
        </Routes>
        <Routes>
          <Route path="/login/gramsevak" element={<GSLogin />} />
        </Routes>
        <Routes>
          <Route path="/login/user" element={<UserLogin />} />
        </Routes>
        <Routes>
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <Routes>
          <Route path="/user/registeruser" element={<UserRegistrationForm />} />
        </Routes>
        <Routes>
          <Route
            path="/gramsevak/registergs"
            element={<GSRegistrationForm />}
          />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}

export default App;
