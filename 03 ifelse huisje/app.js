class App {
    runApplication() {

        console.log("hallo wereld!")
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
        g.fillStyle = "blue";
        // g.fillRect(0,0,10,10);
        g.fillRect(0, 0, canvas.width, canvas.height);
         let randomGetal = Math.random();
         console.log(randomGetal)

        g.beginPath();
        g.fillStyle = "darkRed";
        g.moveTo(300, 100)
        g.lineTo(700, 200)
        g.lineTo(600, 400)
        g.lineTo(200, 300)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(700, 200)
        g.lineTo(800, 300)
        g.lineTo(600, 400)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "grey"
        g.moveTo(600, 400)
        g.lineTo(800, 300)
        g.lineTo(800, 500)
        g.lineTo(600, 600)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        g.fillStyle = "lightgrey"
        g.moveTo(600, 400)
        g.lineTo(600, 400)
        g.lineTo(200, 300)
        g.lineTo(200, 500)
        g.lineTo(200, 500)
        g.lineTo(600, 600)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath();
        if(randomGetal <= 0.5){
            g.fillStyle = "yellow";
        }
        else{ 
            g.fillStyle = "grey"
        }
        g.fillRect(400, 400, 100, 90)
        g.closePath();
        g.stroke();
        g.fill()

    }
}
let app = new App();
app.runApplication();


