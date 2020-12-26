import axios from "../config/axios-common";

class UserService {
  static async register(data) {
    return await axios.post("/auth/local/register", data);
  }
  static async login(data) {
    return await axios.post("/auth/local", data);
  }
}
export default UserService;
