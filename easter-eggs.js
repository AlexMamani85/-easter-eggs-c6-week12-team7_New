function TicTacToe(player,x=0,y=0,board) {
  function move(x,y,marc) {
    let array_board = board.split("");
    if (x==1 && y<=3 && y>0) {
      array_board[1 + 4*(y-1)] = marc;
    }
    else if (x==2 && y<=3 && y>0) {
      array_board[25 + 4*(y-1)] = marc;
    }
    else if (x==3 && y<=3 && y>0) {
      array_board[49 + 4*(y-1)] = marc;
    }
    else if (x==0 && y==0) {}
    board = array_board.join("");
  }

  if (player==0) {
    board = "   |   |   \n-----------\n   |   |   \n-----------\n   |   |   "
  }
  else if (player%2 == 1){
    let marc = "O";
    move(x,y,marc);
  }
  else {
    let marc = "X";
    move(x,y,marc);
  }
  return board
}

function Loader(frames = ["|"  , "/", "-","\\"]) {
  this.frames = frames;
  this.execute;
  let index = 0;
  const animate = () => {
    if( index >= this.frames.length ) index = 0;
    console.clear();
    console.log(this.frames[index]);
    index += 1;
  }
  this.render = function() {
    const intervalId = setInterval(animate, 300);
    // setTimeout(clearInterval, 3000, intervalId)
    setTimeout(() => {
      clearInterval(intervalId);
      console.clear();
    }, 3000);
  }
}
  // const loader = new Loader()

function Clock() {

  function time() {
    console.clear();
    let date = new Date()
    console.log(date.toLocaleTimeString())
  }

  const intervalId1 = setInterval(time, 1000);
  window.addEventListener("click", (e)=> {
    clearInterval(intervalId1);
    console.clear();
    console.log("Let's keep playing!");
  })
}

function numberFormatter(range, suffixes, num) {
  let cont = 0
  suffixes.forEach( (e,i) => {
    if(num < range**(i+1) && cont == 0){
      console.log(`${Math.trunc(num/range**(i))} ${suffixes[i]}`)
      cont++
    }
  });
}

function EasterEgg(func, ...args) {
  const loader = new Loader()
  loader.render()
  
  let range;
  let suffixes;
  let player = 0;
  let board = "";
  let moves_1 = {}
  let moves_2 = {}
  let finished = false;
  let valid;

  setTimeout(()=>{
    switch(func){
      case "clock":
        Clock();
        break;
      case "marquee":
        Marquee(args[0], args[1]);
        break;
      case "number formatter":
        range = args[0];
        suffixes = args[1];
        this.snippet = (num) => {
          numberFormatter(range, suffixes, num)
        }
        break;
      case "tic tac toe":
        board = TicTacToe(player);
        console.log(board);
        player = 1
        this.snippet = {
          play(x,y) {
            console.clear();
            if (!finished) {
              valid = valid_move(x,y,moves_1,moves_2)
              if (valid) {
                board = TicTacToe(player,x,y,board);
                if (player%2 == 1){
                  moves_1[[x,y]]=[x,y];
                  finished = winner(moves_1)
                } 
                else {
                  moves_2[[x,y]]=[x,y];
                  finished = winner(moves_2)
                }
                player++;
              }
              else {
                console.log("Invalid move, play again")
              }
            }  
            if (finished) {
              console.log(board);
              (player-1)%2==0 ? console.log("Player2 win!!!") : console.log("Player1 win!!!");
            }
            else{
              console.log(board);
            }
          }
        }
        break;
    }
  }, 3000)
}

function valid_move(x,y,moves_1,moves_2) {
  return (x>=1 && x<=3 && y>=1 && y<=3 && !([x,y] in moves_1) && !([x,y] in moves_2)) ? true : false
}

function winner(moves) {
  //[1,1],[1,2],[1,3],
  //[2,1],[2,2],[2,3],
  //[3,1],[3,2],[3,3]
  let fila_1 = Object.values(moves).filter( (move) => move[0] == 1).length
  let fila_2 = Object.values(moves).filter( (move) => move[0] == 2).length
  let fila_3 = Object.values(moves).filter( (move) => move[0] == 3).length
  let column_1 = Object.values(moves).filter( (move) => move[1] == 1).length
  let column_2 = Object.values(moves).filter( (move) => move[1] == 2).length
  let column_3 = Object.values(moves).filter( (move) => move[1] == 3).length
  let diagonal_1 = Object.values(moves).filter( (move) => move[0] == move[1]).length
  let diagonal_2 = Object.values(moves).filter( (move) => move[0] + move[1] == 4).length

  return (fila_1 == 3 || fila_2 == 3 || fila_3 == 3 || column_1 == 3 || column_2 == 3 || column_3 == 3 || diagonal_1 == 3 || diagonal_2 == 3) ? true : false
}

// const egg = new EasterEgg("number formatter",1024, ["b", "Kb", "Mb"] )
// EasterEgg("clock")
// EasterEgg("marquee","No mas pollos en un pais de cuyes",100)
// const egg = new EasterEgg("tic tac toe")

function Banner(content, long) {  
  this.content = content;
  let arr = []
  let j = long
  for (let i = 0; i < long + content.length + 1; i++) {
    let espacio=" ";
    let result = espacio.repeat(j + content.length);
    let result2 = espacio.repeat(i);
    arr.push(result.concat(content,result2).slice(content.length,content.length + long))
    j--;
  }
  return arr
}

function Marquee(content, long){
  let arr2 = Banner(content, long)
  this.frames = arr2;
  this.execute;
  let index = 0;
  const animate = () => {
    console.clear();
    console.log(this.frames[index]);
    index += 1;
  }

  const intervalId = setInterval(animate, 200);
    setTimeout(() => {
    clearInterval(intervalId);
    console.clear();
  }, (frames.length + 1)*200);
}

 