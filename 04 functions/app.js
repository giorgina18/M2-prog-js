function heeftEenResultaat() {
    let resulaat = 1;

    return resulaat
}
let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());



let x = 9;
let a = 3;
let b = 4;
let c = 89;


function ax2bcWiskunde(x, a, b, c) {

    let y = (a * (x * x)) + (b * x) + c;
    console.log(y);

    return y;
}
let y1 = ax2bcWiskunde(9, 3, 4, 89);
console.log(y1)

let y2 = ax2bcWiskunde(3, 6, 5, 45)
console.log(y2)

let y3 = ax2bcWiskunde(7, 1, 2, 13)
console.log(y3)


let u = 9;
let h = 8;
let l = 15;
//  let logY = Math.log(1) + h + Math.pow(u,2);
//  console.log(logY)
function wiskunde(u, h, l) {



    let logY = Math.log(l) + h + Math.pow(u, 2);
    console.log(logY)
    return logY;

}

let k = (u * (l * l)) + (h * u) + l
console.log(k)

let k1 = wiskunde(7, 5, 0.5, 22)
console.log(k1)

let k2 = wiskunde(3, 2, 56, 0.3)
console.log(k2)

let k3 = wiskunde(2, 67, 0.2, 4)
console.log(k3)



function argumentsAreHandy(shoutout) {
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

