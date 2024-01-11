class App {
    runApplication() {


        console.log("hallo wereld!")
        let canvas = document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
        // g.fillStyle = "blue";
        // g.fillRect(0, 0, 10, 10);
        // g.fillRect(0, 0, canvas.width, canvas.height);

        // g.fillStyle = "lightblue";
        // g.fillRect(235, 150, 100, 100)

        this.tekenCirkel (g, 400,200)
        
                for (let i = 0; i < 200; i++) {
                    let y = Math.random()*600
                    let x = Math.random()*200
                    this.tekenCirkel(g, x, y); 
                    
                }
        
    }
    
    tekenCirkel(g,x,y){
            g.beginPath();
            g.arc(x, y, 20, 0, Math.PI * 2);
            g.stroke();
            g.fill();
            g.closePath();
        }
}
let app = new App();
app.runApplication();
