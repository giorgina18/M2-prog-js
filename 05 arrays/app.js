class App {
    runApplication() {
        console.log("hello world!")

        let favorieten = ["skillet(1)", "viezeAsbak(2)", "dikkeBaap(3)", "vlinderVos(4)", "natteVisstick(5)"]
        console.log(favorieten)
        favorieten.push("ladyyGaga")

        let indexToRemove = favorieten.indexOf("ladyGaga")
        favorieten.splice(indexToRemove, 1)
        favorieten.push("XXXtentacion", "juiceWorld")

        for (let i = 0; i < favorieten.length; i++) {
            const favoriet = favorieten[i];
            console.log(i + ":" + favoriet)
        }

        let nummers = [0.5, 22, 980]
        console.log(nummers)

        for (let i = 0; i < nummers.length; i++) {
            const nummer = nummers[i];
            console.log(nummer)

        }
    }
}
let app = new App();
app.runApplication();