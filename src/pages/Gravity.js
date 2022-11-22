import React, {Component} from "react";
import {Box, Button, Card, Container, Divider, Grid, Stack, TextField, ThemeProvider, Typography} from "@mui/material";
import {theme, baseMBP} from "../muitheme/theme"
import InputGrid from "../compontents/InputGrid";

const mpb = {margin: 10, border: 0, padding: 0}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Gravity extends Component {
  constructor(props) {
    super(props);
    this.dt = 1;
    this.g = 0.0000000000667 * 10000000000
    this.balls = [];
    this.box = React.createRef();
    this.state = {ballNum: 0, seq: 0};
    this.origin = {x: 0, y: 0}
    this.inputGrid = {i0: {}, i1: {}, i2: {}}
  }

  moveContinuously = () => {
    setInterval(this.moveOnce, 1)
  }


  moveOnce = () => {
    console.log(this.state.seq)
    // 根据当前速度计算新的坐标

    this.balls.filter(ball => ball.id !== 0).filter(ball => ball.tag !== 0).forEach(ball => {
      const traceBall = Object.assign({}, ball)
      traceBall.tag = 0
      let ox_ = ball.ox;
      let oy_ = ball.oy;
      ball.ox = ox_ + ball.ovx * this.dt;
      ball.oy = oy_ + ball.ovy * this.dt;
      ball.updateXY(this.origin);
      if (this.state.seq % 27 === 0)
        this.balls.push(traceBall)
    })

    // 计算各个球当前的加速度并更新速度
    for (const tgt of this.balls) {
      for (const src of this.balls) {
        if (tgt.id !== src.id && tgt.tag !== 0 && src.tag !== 0) {
          const rx = src.ox - tgt.ox
          const ry = src.oy - tgt.oy
          const rr = rx * rx + ry * ry
          const ax = this.g * src.m / rr * rx
          const ay = this.g * src.m / rr * ry
          let ovx_ = tgt.ovx;
          let ovy_ = tgt.ovy;
          tgt["ovx"] = ovx_ + ax * this.dt;
          tgt["ovy"] = ovy_ + ay * this.dt;
        }
      }

    }
    this.setState({seq: this.state.seq + 1})
    return this.state.seq
  }


  createBall = (event) => {
    if (this.state.ballNum > 2)
      return

    const p = this.getEventRelativePosition(event)
    const ball = new Ball(p.x, p.y, 3).updateOXOY(this.origin);
    console.log("初次创建的ball的参数")
    console.log(ball)

    const id = ball.id

    this.inputGrid["i" + id]["id"] = ball.id
    this.inputGrid["i" + id]["mass"] = ball.m
    this.inputGrid["i" + id]["ox"] = ball.ox
    this.inputGrid["i" + id]["oy"] = ball.oy
    this.inputGrid["i" + id]["ovx"] = ball.ovx
    this.inputGrid["i" + id]["ovy"] = ball.ovy

    this.setState({ballNum: this.balls.push(ball)});
  }

  getEventRelativePosition = (event) => {
    return new Point(event.clientX - this.pOffsetLeft, event.clientY - this.pOffsetTop)
  }

  getEventAbsolutePosition = (event) => {
    return new Point(event.clientX, event.clientY)
  }

  componentDidMount() {
    this.pOffsetLeft = this.box.current.offsetLeft;
    this.pOffsetTop = this.box.current.offsetTop

    this.origin.x = 0;
    this.origin.y = this.box.current.offsetHeight;
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formObject = {};
    data.forEach((value, key) => {
      return formObject[key] = value;
    });

    for (const ball of this.balls) {
      const id = ball.id
      const idInput = Object.fromEntries(Object.entries(formObject).filter(([key]) => key.startsWith(id)));
      ball.ox = Number(idInput[id + "ox"])
      ball.m = Number(idInput[id + "mass"])
      ball.ox = Number(idInput[id + "ox"])
      ball.oy = Number(idInput[id + "oy"])
      ball.ovx = Number(idInput[id + "ovx"])
      ball.ovy = Number(idInput[id + "ovy"])
      ball.updateXY(this.origin)
    }

    console.log("手动更新后的ball的参数")
    for (const ball of this.balls) {
      console.log(ball)
    }

    this.moveContinuously()

  }

  render() {
    return <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="body1">基于万有引力公式模拟行星轨迹</Typography>

        <Card sx={{...baseMBP, backgroundColor: "primary.light"}}>
          <Typography variant="body2">质量单位 kg;
            时间单位 s -> 1s对应一个setInterval的时间间隔;
            距离单位 m -> 1m对应1px; 有引力常数 6.67×10−11 m3kg−1s-2 -> 乘以10^10 否则引力太小 视觉效果不明显
          </Typography>
        </Card>

        <Box component="form" onSubmit={this.handleSubmit} sx={{...baseMBP}}>

          <InputGrid {...this.inputGrid}/>

          <Button type="submit" variant="contained" size="large">
            启动
          </Button>
        </Box>

        <div ref={this.box}
             style={{position: "absolute", width: 800, height: 800, backgroundColor: "lightblue", ...mpb}}
             onClick={this.createBall}>
          {this.balls.map((element, index) => {
            return <BallDiv key={index} element={element}></BallDiv>
          })}
        </div>
      </Container>
    </ThemeProvider>
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Ball {
  static
  cnt = 0;
  static
  colors = ["red", "green", "blue", "yellow", "grey"];

  constructor(px, py, r) {
    this.ox = -1;
    this.oy = -1;
    this.ovx = getRandomInt(100) / 77;
    this.ovy = getRandomInt(100) / 77;
    this.id = Ball.cnt;
    this.x = px;
    this.y = py;
    this.r = r;
    this.m = 1;
    this.tag = 1;
    this.c = Ball.colors[this.id % 5];
    Ball.cnt++;
  }


  updateXY(origin) {
    this.x = this.ox + origin.x;
    this.y = origin.y - this.oy
    return this;
  }

  updateOXOY(origin) {
    this.ox = this.x - origin.x;
    this.oy = origin.y - this.y
    return this;
  }
}

export default Gravity;

const BallDiv = ({element, index}) => {
  return <Box key={index} sx={{borderRadius: '50%'}} style={{
    width: 2 * element.r, height: 2 * element.r,
    position: "absolute",
    left: element.x - element.r,
    top: element.y - element.r,
    backgroundColor: element.c
  }}></Box>
}