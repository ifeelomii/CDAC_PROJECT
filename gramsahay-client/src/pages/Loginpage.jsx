import { Route, Routes } from "react-router-dom";
import AdminLogin from "../components/Login/AdminLogin/AdminLogin";
import GSLogin from "../components/Login/GSLogin/GSLogin";
import UserLogin from "../components/Login/UserLogin/UserLogin";
import LoginSection from "../components/LoginSection/LoginSection";

const Loginpage = () => {
    return (
      <>
        <div className="container">
          {/* <Routes>
            <Route path="/login/admin" element={<AdminLogin />} />
          </Routes>
          <Routes>
            <Route path="/login/gs" element={<GSLogin />} />
          </Routes>
          <Routes>
            <Route path="/user" element={<UserLogin />} />
          </Routes> */}
                <LoginSection/>
        </div>
      </>
    );
};

export default Loginpage;
