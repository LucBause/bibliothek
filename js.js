class Buch{
    verlag
    titel
    seitenanzahl
    thema
    anzahl

    constructor(verlag, titel, seitenzahl, thema, anzahl) {
        this.verlag = verlag
        this.titel = titel
        this.seitenanzahl = seitenzahl
        this.thema = thema
        this.anzahl = anzahl
    }
    verfuegbar() {
        if (anzahl > 0){
            console.log("Das Buch ist verfügbar.")
        }
    }
    verkauft() {
        this.anzahl = this.anzahl -1
    }
}

let lager

init()


