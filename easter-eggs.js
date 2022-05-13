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
  const intervalId = setInterval(animate, 600);
  // setTimeout(clearInterval, 3000, intervalId)
  setTimeout(() => {
    clearInterval(intervalId);
      console.clear();
      }, 3000);
    }
}
const loader = new Loader()

function Clock() {
}

function numberFormatter() {
}

function EasterEgg(content, long) {
  let arr2 = Marquee(content, long)
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
  }, long * 200 - 200);

}

  // EasterEgg("No mas pollos en un pais de cuyes",100)
  // EasterEgg("No mas pollos en un pais de cuyes",100)
  
function Marquee(content, long) {
  this.content = content;
  this.banner = " ".repeat(long);
  let arr = []
  let j = long
  for (let i = 1; i < long; i++) {
    espacio="*";
    espacio=" ";
    let result = espacio.repeat(j);
    let result2 = espacio.repeat(i);
    console.clear();
    arr.push(result.concat(content,result2).slice(content.length+2,long));
    j--;
  }
  return arr
}
