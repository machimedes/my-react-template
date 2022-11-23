import axios from "axios";
import Button from '@mui/material/Button';

const ECHO_URL = "/echo"

// 测试用服务器 查看发送请求的内容
class EchoService {
  echo(data) {
    try {
      return axios.post(ECHO_URL, data)
    } catch (e) {
      alert(e)
    }
  }
}

export default new EchoService()