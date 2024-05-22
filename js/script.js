
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
// stampaNelDom(team);

function stampaInConsole(array) {
    for (let index = 0; index < array.length; index++) {
        const singolaClasse = array[index];
        for (let chiave in array[index]){
            console.log(singolaClasse[chiave]);
        }
    }
}
let sectionEl = document.querySelector("section");



for (let index = 0; index < team.length; index++) {
    const singolaClasse = team[index];
    let articleEl = document.createElement("article");
    for (let key in team[index]){
            let divEl = document.createElement("div");
            articleEl.appendChild(divEl);
            divEl.append(singolaClasse[key]);
            articleEl.append(divEl);
        }
        sectionEl.append(articleEl);    
    }