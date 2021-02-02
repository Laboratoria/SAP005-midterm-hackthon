import movieGenres from "./genres.js"

let imgBaseUrl = "https://image.tmdb.org/t/p/w200";
let imgSrc = "";
let posters = "";

const getPoster = (array) => {
  return fetch(array)
    .then(response => response.json())
    .then(json => json.results)
}

function showMovieInfo(array) {
  getPoster(array).then(moviesList => {
    console.log(moviesList);
    for (let movie of moviesList) {
      console.log(movie.poster_path);
      imgSrc = imgBaseUrl + movie.poster_path;
      console.log(imgSrc);
      posters += `
        <div class="poster">
          <div class="poster-container">
            <div class="poster-front">
              <img src="${imgSrc}">
            </div>
            <div class="poster-back">
              <h3>${movie.title}</h3>
              <p>Sinopse: ${movie.overview}</p>
            </div>
          </div>
        </div>
      `;
    }
    document.getElementById("root").innerHTML = posters;
  })
}

const filterAction = document.getElementById("acao");
filterAction.addEventListener("click", () => {
  ;
  showMovieInfo(movieGenres.actionAmz);
  console.log(showMovieInfo(movieGenres.actionNfx))
})

const filterAnimation = document.getElementById("animation");
filterAnimation.addEventListener("click", () => {
  showMovieInfo(movieGenres.animationNfx);
  showMovieInfo(movieGenres.animationAmz);
})

const filterAdventure = document.getElementById("adventure");
filterAdventure.addEventListener("click", () => {
  showMovieInfo(movieGenres.adventureNfx);
  showMovieInfo(movieGenres.adventureAmz);
})

const filterComedy = document.getElementById("comedy");
filterComedy.addEventListener("click", () => {
  showMovieInfo(movieGenres.comedyNfx);
  showMovieInfo(movieGenres.comedyAmz);
})

const filterDocumentary = document.getElementById("documentary");
filterDocumentary.addEventListener("click", () => {
  showMovieInfo(movieGenres.documentaryNfx);
  showMovieInfo(movieGenres.documentaryAmz);
})

const filterDrama = document.getElementById("drama");
filterDrama.addEventListener("click", () => {
  showMovieInfo(movieGenres.dramaNfx);
  showMovieInfo(movieGenres.dramaAmz);
})

const filterFamily = document.getElementById("family");
filterFamily.addEventListener("click", () => {
  showMovieInfo(movieGenres.familyNfx);
  showMovieInfo(movieGenres.familyAmz);
})

const filterFantasy = document.getElementById("fantasy");
filterFantasy.addEventListener("click", () => {
  showMovieInfo(movieGenres.fantasyNfx);
  showMovieInfo(movieGenres.fantasyAmz);
})

const filterWester = document.getElementById("wester");
filterWester.addEventListener("click", () => {
  showMovieInfo(movieGenres. westernNfx);
  showMovieInfo(movieGenres.westerAmz);
})

const filterScifi = document.getElementById("scifi");
filterScifi.addEventListener("click", () => {
  showMovieInfo(movieGenres.scifiNfx);
  showMovieInfo(movieGenres.scifiAmz);
})

const filterHistory = document.getElementById("history");
filterHistory.addEventListener("click", () => {
  showMovieInfo(movieGenres.historyNfx);
  showMovieInfo(movieGenres.historyAmz);
})

const filterMystery = document.getElementById("mystery");
filterMystery.addEventListener("click", () => {
  showMovieInfo(movieGenres.mysteryNfx);
  showMovieInfo(movieGenres.mysteryAmz);
})
