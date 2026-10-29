





const films = [
  {
    id: 1,
    titre: "Mission Galaxie",
    genre: "Science-fiction",
    duree: 124,
    prix: 55,
    affiche: "assets/images/mission-galaxie.png",
    description: "Une exploratrice suit un signal inconnu jusqu'aux confins d'une galaxie oubliée.",
    seances: [
      { id: 101, horaire: "14:00", siegesOccupes: ["A1", "A2", "B3", "D5"] },
      { id: 102, horaire: "17:30", siegesOccupes: ["A4", "B1", "B2", "C6", "E3"] },
      { id: 103, horaire: "21:00", siegesOccupes: ["A6", "C2", "C3", "D4", "E5"] }
    ]
  },
  {
    id: 2,
    titre: "Minuit à Casablanca",
    genre: "Thriller",
    duree: 108,
    prix: 50,
    affiche: "assets/images/minuit-casablanca.png",
    description: "Une nuit pluvieuse, un projectionniste découvre un secret caché dans une bobine ancienne.",
    seances: [
      { id: 201, horaire: "16:15", siegesOccupes: ["A3", "B4", "C1"] },
      { id: 202, horaire: "19:00", siegesOccupes: ["A1", "A5", "C4", "D2", "E6"] }
    ]
  },
  {
    id: 3,
    titre: "Le Secret de l'Atlas",
    genre: "Aventure",
    duree: 116,
    prix: 45,
    affiche: "assets/images/secret-atlas.png",
    description: "Deux jeunes voyageurs partent à la recherche d'une porte légendaire au cœur des montagnes.",
    seances: [
      { id: 301, horaire: "13:30", siegesOccupes: ["B2", "B3", "D1"] },
      { id: 302, horaire: "16:45", siegesOccupes: ["A2", "C3", "C4", "E1"] },
      { id: 303, horaire: "19:30", siegesOccupes: ["A5", "B6", "D3", "D4"] }
    ]
  },
  {
    id: 4,
    titre: "Dernière Fréquence",
    genre: "Drame futuriste",
    duree: 132,
    prix: 60,
    affiche: "assets/images/derniere-frequence.png",
    description: "La dernière opératrice radio d'une ville côtière reçoit un message qui change tout.",
    seances: [
      { id: 401, horaire: "15:00", siegesOccupes: ["A1", "B5", "C2", "E4"] },
      { id: 402, horaire: "18:15", siegesOccupes: ["A3", "A4", "C5", "D6"] },
      { id: 403, horaire: "21:30", siegesOccupes: ["B1", "B2", "C3", "D4", "E5", "E6"] }
    ]
  }
];
const rangees = ["A", "B", "C", "D", "E"];
const siegesParRangee = 6;

const filmStorage = document.querySelector("#films-container");





function duration(duree) {
  let heure = duree / 60;
  let min = duree % 60;
  return parseInt(heure) + "h " + min + "min";
}

films.forEach(f => {


  filmStorage.innerHTML += `<article class="overflow-hidden rounded-2xl border border-red-400 bg-white shadow-xl ring-2 ring-red-100"
  data-film-id=${f.id}>
  <div class="relative"><img src=${f.affiche} alt="Affiche de Mission Galaxie"
                class="aspect-[2/3] w-full object-cover"><span
                class="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold shadow-lg">${f.prix}
                DH</span></div>
            <div class="p-4">
              <p class="text-xs font-bold uppercase tracking-wider text-cine-red">${f.genre
    }</p>
              <h3 class="mt-1 text-lg font-black">${f.titre}</h3>
              <p class="mt-2 text-sm text-slate-500">${duration(f.duree)}</p>
              <button type="button" class="mt-4 w-full rounded-xl bg-cine-red px-4 py-3 font-extrabold text-white btnSelectFilm" id=${f.id}>Sélectionné</button>
            </div>
          </article> `;
  console.log(f);
});


const buttons = document.querySelectorAll("button.btnSelectFilm");
console.log(buttons);

const listFilm = [];


buttons.forEach(btn => {
  btn.addEventListener('click',  event => {
  
    // console.log(event.currentTarget.id);
    event.currentTarget.id
   
  })
  
})


const choixFilm = document.querySelector("#film-details")
const accueil = document.getElementById("accueil")


const confirmerReservation = document.getElementById("confirmer-reservation");

confirmerReservation.addEventListener("click", aficher =>{films.forEach(film => {
  if(films.duree > 60){

     accueil.innerHTML += `<article class="overflow-hidden rounded-2xl border border-red-400 bg-white shadow-xl ring-2 ring-red-100"
  data-film-id=${film.id}>
  <div class="relative"><img src=${film.affiche} alt="Affiche de Mission Galaxie"
                class="aspect-[2/3] w-full object-cover"><span
                class="absolute bottom-3 right-3 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold shadow-lg">${film.prix}
                DH</span></div>
            <div class="p-4">
              <p class="text-xs font-bold uppercase tracking-wider text-cine-red">${film.genre
    }</p>
              <h3 class="mt-1 text-lg font-black">${film.titre}</h3>
              <p class="mt-2 text-sm text-slate-500">${duration(film.duree)}</p>
              <button type="button" class="mt-4 w-full rounded-xl bg-cine-red px-4 py-3 font-extrabold text-white btnSelectFilm" id=${film.id}>Sélectionné</button>
            </div>
          </article> `;
          console.log(film);
          
  }
});})
