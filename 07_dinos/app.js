class App {
    runApplication() {
        console.log("hello world!");

        let dino = new Dino("T-Rex", true, 20);
        let planterEter = new Dino("Brachiosaurus", false, 20)

        console.log(dino)
        console.log(planterEter)

        console.log("de leeftijd van deze " + dino.naam + " is:" + dino.leeftijd);
        console.log("en deze " + dino.naam + " eet vlees:" + dino.vleeseter);

        dino.eatFood(planterEter)
        console.log("leeft " + planterEter.naam + "?? " + planterEter.leeft);

        let gras = new Plant("gras", true);
        let struik = new Plant("struik", true);
        console.log(gras);
        console.log(struik);
    }
}

class Dino {
    constructor(naam, vleeseter, leeftijd,) {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true
    }
    eatFood(foodToEat) {
        foodToEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam);
        console.log("mijn honger: " + this.honger);
        console.log("ik eet nu " + foodToEat.naam);
    }
}

class Plant {
    constructor(naam, leeft) {
        this.naam = naam;
        this.leeft = leeft;
    }
}

let app = new App();
app.runApplication();