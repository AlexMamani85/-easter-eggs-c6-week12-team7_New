function TicTacToe() {
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
  const intervalId = setInterval(animate, 1000);
  // setTimeout(clearInterval, 3000, intervalId)
  setTimeout(() => {
    clearInterval(intervalId);
      console.clear();
      }, 5500);
    }
}

function Clock() {
}

function numberFormatter() {
}

function EasterEgg() {

}

const loader = new Loader()
