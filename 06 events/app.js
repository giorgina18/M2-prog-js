class App {
    runApplication() {
        console.log("hello")

        let uiButton = document.getElementById("myButton")

        //  localeFunction = function (e) 
        //     // console.log("click!");
        
        uiButton.addEventListener("click", function (e){
            console.log("click!");

        })

    }
}
let app = new App();    
app.runApplication();

