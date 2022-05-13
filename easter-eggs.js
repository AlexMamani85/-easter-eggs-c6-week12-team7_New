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

function numberFormatter() {
}

function EasterEgg(func, ...args) {
  const loader = new Loader()
  loader.render()
  setTimeout(()=>{
    switch(func){
      case "clock":
        Clock();
        break;
      case "marquee":
        Marquee(args[0], args[1]);
        break;     
    }
  }, 3000)
  
      
}

// EasterEgg("clock")
// EasterEgg("marquee","No mas pollos en un pais de cuyes",100)

function Banner(content, long) {
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
  }, long * 200 - 200);
}
