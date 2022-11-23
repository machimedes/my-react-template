import axios from "axios";
import {post} from "../tools/httptool/axiostool";

const SESSION_URL = "/session"

const sessionState = {isLogin: false, user: "", token: ""}

class SessionService {
  async createSession(signIn) {
    return post(SESSION_URL, signIn);
  }
}

export default new SessionService()