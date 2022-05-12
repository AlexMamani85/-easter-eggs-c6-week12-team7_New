// const frames = ["", ".", "..", "..."];
// let index = 0;

// const intervalId = setInterval(
//   function(){
//     if( index >= frames.length ) index = 0;
//     console.clear();
//     console.log(frames[index]);
//     index += 1;
//   }, 1000);

// setInterval(() => clearInterval(intervalId), 4000)
// setInterval(clearInterval, 4000, intervalId)

function Loader(frames = ["loading", "loading.", "loading..", "loading..."]) {
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
  
    // load(htmlWrapper, "p", "div")
    this.load = function(callback, ...args) {
      this.render()
      this.execute = callback(...args)
    }
  }
  
  function htmlWrapper(tag) {
    return function(content) {
      return `<${tag}>${content}</${tag}>`
    }
  }
  
  function partialSum(a,b) {
    return function(c, d) {
      return a + b + c + d
    }
  }
  
  function sumAll(init = 0) {
    return function(...rest) {
      return rest.reduce((acc, element) => acc + element, init)
    }
  }
  
  // const loader = new Loader()
  // const loader = new Loader(["👆","👉","👇","👈"])
  // const loader = new Loader(["__","--"])
  // const loader = new Loader(["🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔"])
  const loader = new Loader([
    ":::: 10%",
    ":::::::::: 40%",
    "::::::::::::::::: 60%",
    "::::::::::::::::::::::: 80%",
    "::::::::::::::::::::::::::::: 100%"])
    
    