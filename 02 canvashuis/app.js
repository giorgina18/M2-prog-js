class App
{
    runApplication(){

console.log("hallo wereld!")        
let canvas = document.getElementById("canvasId")
console.log(canvas)
let g = canvas.getContext("2d");
g.fillStyle = "blue";
g.fillRect(0,0,10,10);
g.fillRect(0,0,canvas.width,canvas.height);

g.fillStyle = "lightblue"; 
g.fillRect(235,150,100,100)

}
}
let app = new App();
app.runApplication();

