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

const testBtn = document.getElementById("test-btn");
testBtn.addEventListener("click", () => {
  showMovieInfo(movieGenres.animationNfx);
})
