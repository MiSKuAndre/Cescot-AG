function esercizio01() {

    let numeroInserito = window.prompt("Inserisci un numero da 1 a 10");
    let numeroDaTrovare = Math.ceil(Math.random() * 10); //"ceil" arrotonda il numero random per eccesso "floor" per difetto

    while(numeroInserito != numeroDaTrovare) {
        numeroInserito = window.prompt("Sbagliato, riprova");
    }
    document.getElementById("es1-numeroScelto").innerText = "Il numero era " + numeroDaTrovare;
    document.getElementById("es1-risultato").innerText = "Congratulazioni";
}

function esercizio02() {

    let numero = window.prompt("Inserisci un numero");
    let fattoriale = 1;

    for (let i=numero; i>0; i--) {
        fattoriale = fattoriale * i;
    }
    document.getElementById("es2-risultato").innerText = "Il fattoriale del numero scelto è " + fattoriale;
}

function esercizio03() {

    let studente = {
        nome: "",
        cognome: "",
        matricola: "",
        voti: []
    };
    
    for (chiave in studente) {
        if (chiave != "voti") {
            studente[chiave] = window.prompt("Inserire" + chiave);
        } else {
            let stringaVoti = window.prompt("Inserire i voti separati da ',");
            studente[chiave] = stringaVoti.split(",");
        }
    }
    let mediaVoti = 0;
    for(voto of studente.voti) {
        mediaVoti += voto;
    }
    studente.mediaVoti = Mediavoti / studente.voti.length;

    let risultato = "";
    for(chiave in studente) {
        if (chiave != studente.voti) {
        risultato += chiave + ": " + studente[chiave];
        }
    }
    document.getElementById("es3-risultato").innerHTML = risultato;
}
