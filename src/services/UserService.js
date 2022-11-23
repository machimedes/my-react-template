import {post} from "../tools/tools";

const USER_URL = "/user"

class UserService {
  createUser(user) {
    return post(USER_URL, user);
  }
}

export default new UserService()