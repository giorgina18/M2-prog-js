class App
{
    runApplication()
    {
        console.log("hello world!");

        let user1 = new User ("puck")
        let user2 = new User ("milan")
        let user3 = new User ("timo")
        let user4 = new User ("elisa")
        let user5 = new User ("eliot")
        let user6 = new User ("loesje")

        user1.wieBenIk(); 
        user2.wieBenIk(); 
        user3.wieBenIk();  
        user4.wieBenIk(); 
        user5.wieBenIk(); 
        user6.wieBenIk(); 
    }
}

class User{
    constructor(name){
        this.name = name;
    }
    wieBenIk(){
        console.log(this.name);
    }
}

let app = new App();
app.runApplication();
