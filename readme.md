Consegna:
<!-- Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. -->
-creo un array team;
-al inerno del array team aggiungo oggetti , esempio: let team = [
    {

    },
    {

    }
];
<!-- MILESTONE 0: -->
<!-- Creare l’array di oggetti con le informazioni fornite. -->
- al interno delle parentesi {} aggiungo i dati dei membri;  

<!-- MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto -->
- uso un ciclo for con index < team.length per stampare le informazioni in console per ogni membro.
<!-- MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe -->
-creo una section nel main;
- richiamo la section in selectionEl;
- nel js creo al interno di un ciclo for l'elemento article;
- semore al interno del ciclo, al articleEl aggiungo team[index], esempio: articleEl.append(team[index]);
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!

<!-- Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg -->