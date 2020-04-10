import React, {
  useEffect
} from 'react';
// import { useInterval } from './useInterval'
import './App.css';
const basePixel = 10;
  function App() {
  const   directions = {
  up: {x: 0, y: -1},
  down: {x: 0, y: 1},
  left: {x: -1, y: 0},
  right: {x: 1, y: 0}
};
  const canvasRef = React.useRef();
  const [snake , setSnake] = React.useState([ {x:50, y:50}]);
  const [apple, setApple] = React.useState([50,50]);
  const [snakeDirection, setSnakeDirection] = React.useState(directions.up);
  const onStartGame = () => {
console.log('game start');
  };
  // useInterval to loop through current direction command whiche cheking apple eaten and self collition
  // randowly generate apple if eaten
  const onKeyPress = (event) => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowUp':
        setSnakeDirection(directions.up)
        console.log(event.key);
        break;
      case 'ArrowDown':
        setSnakeDirection(directions.down)
        console.log(event.key);
        break;
      case 'ArrowRight':
        setSnakeDirection(directions.right)
        console.log(event.key);
        break;
      case 'ArrowLeft':
        setSnakeDirection(directions.left)
        console.log(event.key);
        break;
      default:
        break;
    }
  }
useEffect(() => {
console.log("use effect")
const canvasContext = canvasRef.current.getContext('2d');
canvasContext.clearRect(0,0,500,500);
canvasContext.fillStyle = 'black';
for (const position of snake) {
  debugger
  canvasContext.fillRect(position.x*basePixel,position.y*basePixel,basePixel, basePixel);
  canvasContext.strokeStyle = "red";
  canvasContext.strokeRect(position.x*basePixel,position.y*basePixel,basePixel, basePixel);
}
canvasContext.fillStyle = 'red';
canvasContext.fillRect(10*basePixel,44*basePixel,basePixel, basePixel);
},[apple,snake]);
useEffect(() => {
  const newSnake = snake.slice();
  const newHead = {x:snake[0].x + snakeDirection.x ,y:snake[0].y + snakeDirection.y};
  newSnake.unshift(newHead);
  // newSnake.pop();
  setSnake(newSnake);
},[snakeDirection]);
  return (
    <div tabIndex="0" onKeyDown={(e) => onKeyPress(e)}>
      <h3 className="" > Snake Game </h3>
      <canvas ref={
        canvasRef
      }
        className="margin-left game-canvas" width="501" height="501" > </canvas>
        <br/>
        <button  onClick={onStartGame} className=""> Start Game</button>
    </div>
  );
}

export default App;