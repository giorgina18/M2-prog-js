class App {
    runApplication() {
        console.log("hello")

        let uiButton = document.getElementById("myButton")

        //  localeFunction = function (e) 
        //     // console.log("click!");

        uiButton.addEventListener("click", function (e) {
            // console.log("click!");
            const para = document.createElement("p")
            const node = document.createTextNode("this is new.")
            para.appendChild(node);
            document.body.appendChild(para);
        })

        let knop = document.getElementById("mijknop")
        knop.addEventListener("click", function (e) {
            const para = document.createElement("h1")
            const node = document.createTextNode("dit is een cute kat")
            para.appendChild(node);
            document.body.appendChild(para);

            const para2 = document.createElement("p")
            const node2 = document.createTextNode("katten zijn beste dieren op wereld")
            para2.appendChild(node2);
            document.body.appendChild(para2);
            const para3 = document.createElement("img")
            document.body.appendChild(para3);

            para3.src = "images/leuke-katten-die-binnenshuis-ontspannen_23-2150692685.avif"
        })


        let div = document.getElementById("color")
        div.addEventListener("click", function (e) {
        div.style.backgroundColor = "pink";
        })


    }
}
let app = new App();
app.runApplication();

