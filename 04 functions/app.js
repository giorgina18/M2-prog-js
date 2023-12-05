function argumentsAreHandy(shoutout){
    console.log("do you want to give a shout out")
    console.log(shoutout);
}
argumentsAreHandy("Super Shout out");
argumentsAreHandy("hou het netjes!");
argumentsAreHandy("je bent super goed bezig");




function superMooieGlobalFunction() {
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");

}

function aanroepVoorbeeld() {
    
}

superMooieGlobalFunction();
aanroepVoorbeeld();


class App {
    runApplication() {
        console.log("hello world!")
        superMooieGlobalFunction();

    }
}


let app = new App();
app.runApplication();

