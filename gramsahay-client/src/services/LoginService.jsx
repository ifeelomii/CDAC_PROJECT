import axios from "axios";
let baseUrl = "http://localhost:7373/login/";
class LoginService {
  adminLogin(admin) {
    return axios.get(baseUrl + "/admin", admin);
  }
  userLogin(user) {
    return axios.get(baseUrl + "/user", user);
  }
  gramsevakLogin(gramsevak) {
    return axios.get(baseUrl + "/gramsevak", gramsevak);
  }
}

export default new LoginService();
