import {post} from "../tools/httptool/axiostool";

const USER_URL = "/user"

class UserService {
  createUser(user) {
    return post(USER_URL, user);
  }
}

export default new UserService()