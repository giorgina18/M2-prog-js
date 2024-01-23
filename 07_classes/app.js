class Greet {
    constructor() {
    }
 showGreeting(){
    console.log("greetings")
 }
}

let greet = new Greet()
greet.showGreeting();



class GoodBye {
    constructor() {
    }
showBye(){
    console.log("bye bye:)!");
}

}

let bye = new GoodBye()
bye.showBye();
greet.showGreeting();
bye.showBye();
greet.showGreeting();
bye.showBye();



class App {
    runApplication() {
        console.log("hello world");

    }
}
let app = new App();
app.runApplication();

