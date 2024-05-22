let sectionEl = document.querySelector("section");
let team = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "Founder & CEO",
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg",
    },
    {
        nome :" Walter Gordon",
        ruolo : "Office Manager",
        foto : "walter-gordon-office-manager.jpg",
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg",
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "scott-estrada-developer.jpg",
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg",
    }
];
stampaInConsole(team);

function stampaInConsole(array) {
    for (let index = 0; index < array.length; index++) {
        const singolaClasse = array[index];
        for (let chiave in array[index]){
            console.log(singolaClasse[chiave]);
        }
    }
}
console.log(team)


// Stampare le stesse informazioni su DOM sottoforma di stringhe -->
// -creo una section nel main;
// - richiamo la section in selectionEl;
// - nel js creo al interno di un ciclo for l'elemento article;
// - semore al interno del ciclo, al articleEl aggiungo team[index], esempio: articleEl.append(team[index]);