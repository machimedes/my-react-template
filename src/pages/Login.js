import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import {useState} from "react";
import {
  alertAppError,
  alertHttpError,
  formObject,
  theme
} from "../tools/tools";
import {Avatar, Divider} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import {deepPurple} from "@mui/material/colors";
import userService from "../services/UserService";
import sessionService from "../services/SessionService";

export default function Login() {
  const [signIn, setSignIn] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!signIn) {
      const registerData = formObject(data)
      // 注册事件对应创建用户
      const wr = await userService.createUser(registerData)
      console.log(wr)
      if (alertHttpError(wr) || alertAppError(wr)) {
        return;
      }
      alert("注册成功")
      setSignIn(!signIn)
      setPassword("")
      setConfirmPassword("")
      return
    }
    const ip = "-" // await queryIPFromGeolocation()
    const signInData = formObject(data)
    signInData["ip"] = ip
    // 登录事件对应创建会话
    const wr = await sessionService.createSession(signInData)
    console.log(wr)
  }

  const handleSwitch = (signIn) => {
    setPassword("")
    setConfirmPassword("")
    setSignIn(!signIn)
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" variant="outlined" maxWidth="md" sx={{padding: 5}}>
        <Box sx={{p: 2, border: '1px dashed grey'}}>
          <Box sx={{display: 'flex', justifyContent: 'center',}}>
            <Avatar sx={{width: 80, height: 80, bgcolor: deepPurple[500]}}><LockIcon sx={{fontSize: 60}}/> </Avatar>
          </Box>
          <Typography component="h1" variant="h5" sx={{marginTop: 2, marginBottom: 2}}>
            <b> {signIn ? "Welcome" : "Create New User"}</b>
          </Typography>
          <Divider/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus/>
            <TextField type="password" autoComplete='off' value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       margin="normal" required fullWidth
                       id="password" label="Password" name="password"/>
            {!signIn &&
              <TextField type="password" autoComplete='off' value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         margin="normal" required fullWidth
                         id="confirmPassword" label="Confirm Password" name="confirmPassword"/>}
            <Box sx={{display: "flex"}}>
              <Box sx={{marginTop: 2, display: "flex", alignItems: "center", width: 0.5}}>
                <Button type="submit" variant="contained" size="large">
                  <b> {signIn ? "Sign In" : "Register"} </b>
                </Button>
                {signIn &&
                  <Link sx={{marginLeft: 2}} href="#" underline="hover"> Forgot your password? </Link>
                }
              </Box>
              <Box sx={{marginTop: 2, display: "flex", justifyContent: "flex-end", alignItems: "center", width: 0.5}}>
                <Button variant="contained" size="large" color="secondary" onClick={() => handleSwitch(signIn)}>
                  {signIn ? "Don't have account? Register" : "Already have an account? Sign In"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}