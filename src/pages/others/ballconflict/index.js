let timer = {};

const colorList = ["#FFFF99", "#B5FF91", "#94DBFF", "#FFBAFF", "#FFBD9D", "#C7A3ED", "#CC9898", "#8AC007", "#CCC007"];
const colorNum = colorList.length;


const ballList = [];
const timerList = [];

class ball {
  constructor(_id, _r, _x, _y, _c, _vx, _vy) {
    this.id = _id;
    this.r = _r;
    this.x = _x;
    this.y = _y;
    this.c = _c;
    this.vx = _vx;
    this.vy = _vy;
  }

  addBall(obj) {
    const ball = document.createElement("div");
    ball.className = "ball";

    ball.id = this.id;
    ball.style.height = this.r + "px";
    ball.style.width = this.r + "px";
    ball.style.left = this.x + "px";
    ball.style.top = this.y + "px";
    ball.style.backgroundColor = this.c;
    //ball.textContent = ball.id;

    obj.appendChild(ball);
  }

  move() {
    let nextx = this.x + this.vx;
    let nexty = this.y + this.vy;

    if (nextx < 10 + 20 || nextx > 10 + 700 - this.r + 20)
      this.vx = -this.vx;
    if (nexty < 10 + 20 || nexty > 10 + 700 - this.r + 20)
      this.vy = -this.vy;

    for (let i = 0; i < ballList.length; i++) {
      if (this.id !== i) {
        console.log(this.id + "\t" + i)
        const other = ballList[i]
        if (Math.sqrt(Math.pow((nextx - other.x), 2) + Math.pow((nexty - other.y), 2)) < ((this.r + other.r) / 2)+1) {
          let tmpvx = this.vx;
          let tmpvy = this.vy;
          this.vx = other.vx;
          this.vy = other.vy;
          other.vx = tmpvx;
          other.vy = tmpvy;
        }
      }
    }

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.vx = this.vx + iax + this.vx * ikx;
    this.vy = this.vy + iay + this.vy * iky;
    //console.log("new position "+this.x+"\t"+this.y+"\t\t"+"new velocity "+this.vx+"\t"+this.vy);

    const thisBall = document.getElementById(this.id);
    thisBall.style.left = this.x + "px";
    thisBall.style.top = this.y + "px";

  }
}


let
  ballCount = 0;
//时间间隔
const
  dt = 5;

//重力场
const
  iax = 0
  ,
  iay = 0.05;

//阻力系数
const
  ikx = 0
  ,
  iky = 0;

// eslint-disable-next-line no-unused-vars
function

createBall(obj) {
  // eslint-disable-next-line no-restricted-globals
  const e = event || window.event;
  const div_x = e.clientX;
  const div_y = e.clientY;

  let _id =  ballCount;

  let _r = Math.random() * 50 + 25;

  let _x = div_x - _r / 2;
  let _y = div_y - _r / 2;

  let _c = colorList[Math.floor(Math.random() * colorNum)];

  let _theta = Math.floor(Math.random() * 180);

  let _v = 5;
  let _vx = _v * Math.cos(_theta);
  let _vy = _v * Math.sin(_theta);

  ballList[ballCount] = new ball(_id, _r, _x, _y, _c, _vx, _vy);
  console.log("ball created " + ballList[ballCount]);
  ballList[ballCount].addBall(obj);
  ballCount++;
}

// eslint-disable-next-line no-unused-vars
function moving() {
  for (let i = 0; i < ballList.length; i++) {
    ballList[i].move();
  }
}

// eslint-disable-next-line no-unused-vars
function keepMoving() {
  clearInterval(timer);
  timer = setInterval("moving()", dt);
}

