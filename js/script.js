
let team = [
    {
        ruolo : "Founder & CEO",
        nome : "Wayne Barnett",
        foto : "wayne-barnett-founder-ceo.jpg",
    },
    {
        ruolo : "Chief Editor",
        nome : "Angela Caroll",
        foto : "angela-caroll-chief-editor.jpg",
    },
    {
        ruolo : "Office Manager",
        nome :" Walter Gordon",
        foto : "walter-gordon-office-manager.jpg",
    },
    {
        ruolo : "Social Media Manager",
        nome : "Angela Lopez",
        foto : "angela-lopez-social-media-manager.jpg",
    },
    {
        ruolo : "Developer",
        nome : "Scott Estrada",
        foto : "scott-estrada-developer.jpg",
    },
    {
        ruolo : "Graphic Designer",
        nome : "Barbara Ramos",
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
        if (key === "foto") {
            let imgEl = document.createElement("img");
            imgEl.src = "./img/" + singolaClasse[key];
            articleEl.appendChild(imgEl);
        } else{
            let divEl = document.createElement("div");
            articleEl.appendChild(divEl);
            divEl.append(singolaClasse[key]);
        }
        }
        sectionEl.append(articleEl);    
    }