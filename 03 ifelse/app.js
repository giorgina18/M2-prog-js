class App {
    runApplication() {

        console.log("hello world");

        let title = document.getElementById("newstitle")
        console.log(title)

        let headline = document.getElementsByClassName("headline")
        console.log(headline)

        let gamenews = document.getElementsByClassName("gamenews")
        console.log(gamenews)


        let random = Math.random();//0-1.000
        console.log(random)

        if (random >= 0 && random < 0.2) {
            title.style.backgroundColor = "#FF0000";
        }
        else if (random >= 0.2 && random < 0.6) {
            title.style.backgroundColor = "#00FF00";
        }
        else if (random > 0.2 && random < 0.75) {
            title.style.backgroundColor = "#9933FF";
        }
        else if (random > 0.75) {
            title.style.backgroundColor = "#FF0099";
        }


        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]


        if (random >= 0 && random < 0.2) {
            newsitem1.style.backgroundColor = "#00FF00";
        }
        else if (random >= 0.2 && random < 0.6) {
            newsitem1.style.backgroundColor = "#FF0000";
        }

        if (random > 0.2 && random < 0.75) {
            newsitem2.style.backgroundColor = "#FF0099";
        }
        else if (random > 0.75) {
            newsitem2.style.backgroundColor = "#9933FF";
        }


    }
}
let app = new App();
app.runApplication();


