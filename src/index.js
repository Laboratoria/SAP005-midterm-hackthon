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
        <img src="${imgSrc}">
      `;
    }
    document.getElementById("root").innerHTML = posters;
  })
}

const testBtn = document.getElementById("img1");
testBtn.addEventListener("click", () => {
  showMovieInfo(movieGenres.animationNfx);
  showMovieInfo(movieGenres.animationAmz);
})

const testBtn1 = document.getElementById("img2");
testBtn1.addEventListener("click", () => {
  showMovieInfo(movieGenres.horrorAmz);
})

