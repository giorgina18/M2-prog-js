class App {
    runApplication() {
        let data = ['internet', 'lui', 'kerstvakantie', 'werk', 'nummers']

        let headersByCssClass = document.getElementsByClassName("bandName");

        for (let i = 0; i < data.length; i++) {
            const getal = data[i];
            console.log(i + ":" + getal)
            headersByCssClass[i].innerText = getal
        }

       
        
    }
}
let app = new App();
app.runApplication();