// runApplication()
// {
// console.log("hello world");
// let canvas = document.getElementById("canvasId");

// let g = canvas.getContext("2d");
// g.fillRect(0,0,10,10);
// }





class App {
    runApplication() {

        this.canvas = document.getElementById("canvasId")
        console.log(this.canvas)
        this.g = this.canvas.getContext("2d");
    }

    tekenHuis(x, y) {
        // let x = 20;
        // let y =20;
        // this.g.fillStyle = "blue";
        // g.fillRect(0,0,10,10);
        // this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.g.beginPath();
        this.g.fillStyle = "darkRed";
        this.g.moveTo(300 + x, 100 + y)
        this.g.lineTo(700 + x, 200 + y)
        this.g.lineTo(600 + x, 400 + y)
        this.g.lineTo(200 + x, 300 + y)
        this.g.closePath();
        this.g.stroke();
        this.g.fill()

        this.g.beginPath();
        this.g.fillStyle = "grey"
        this.g.moveTo(700 + x, 200 + y)
        this.g.lineTo(800 + x, 300 + y)
        this.g.lineTo(600 + x, 400 + y)
        this.g.closePath();
        this.g.stroke();
        this.g.fill()

        this.g.beginPath();
        this.g.fillStyle = "grey"
        this.g.moveTo(600 + x, 400 + y)
        this.g.lineTo(800 + x, 300 + y)
        this.g.lineTo(800 + x, 500 + y)
        this.g.lineTo(600 + x, 600 + y)
        this.g.closePath();
        this.g.stroke();
        this.g.fill()

        this.g.beginPath();
        this.g.fillStyle = "lightgrey"
        this.g.moveTo(600 + x, 400 + y)
        this.g.lineTo(600 + x, 400 + y)
        this.g.lineTo(200 + x, 300 + y)
        this.g.lineTo(200 + x, 500 + y)
        this.g.lineTo(200 + x, 500 + y)
        this.g.lineTo(600 + x, 600 + y)
        this.g.closePath();
        this.g.stroke();
        this.g.fill()

        this.g.beginPath();
        this.g.fillStyle = "lightyellow";
        this.g.fillRect(400 + x, 400 + y, 100, 90)
        this.g.closePath();
        this.g.stroke();
        this.g.fill()







    }
    
    tekenKerstBoom(x, y){
        this.g.beginPath();
       this.g.fillStyle = "brown"
       this.g.fillRect(100 + x, 200 + y, 10, 50);
       this.g.closePath();
       this.g.stroke(); 
       this.g.fill();

       this.g.beginPath();
       this.g.fillStyle = "green";
       this.g.moveTo(100+x,0 + y);
       this.g.lineTo(0 + x, 200 + y);
       this.g.lineTo(200 + x, 200 + y);
       this.g.closePath();
       this.g.stroke();
       this.g.fill();
    }
}


let app = new App();
app.runApplication();
app.tekenHuis(-300, -200);
app.tekenHuis(100, 200);
app.tekenHuis(-200, 200);
app.tekenHuis(0, 500);
app.tekenKerstBoom( 400,200)

