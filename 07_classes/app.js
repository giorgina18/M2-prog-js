class Greet {
    constructor() {
        this.greeting = "greetings!";
    }
 showGreeting(){
console.log("greetings van binnen<3" + this.greeting) 
}
}

let greet = new Greet()
greet.showGreeting();

console.log("groetjes van buiten:)" + greet.greeting)




class GoodBye {
    constructor() {
        this.farewell = "doei doei";
    }
showBye(){
    console.log("doei doei van binnen<3" + this.farewell)
}

}

let bye = new GoodBye()
bye.showBye();

console.log("doei doei van buiten<3" + bye.farewell)







class App {
    runApplication() {
        console.log("hello world");

    }
}
let app = new App();
app.runApplication();

