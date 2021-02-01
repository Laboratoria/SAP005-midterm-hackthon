import movieGenres from "./genres.js"

let imgBaseUrl = "https://image.tmdb.org/t/p/w200";
let imgSrc = "";

const getPoster = () => {
  return fetch(movieGenres.actionNfx)
    .then(response => response.json())
    .then(json => json.results);
}

getPoster().then(moviesList => {
  console.log(moviesList)

  for (let movie of moviesList) {
    console.log(movie.poster_path)
  }
  // imgSrc = imgBaseUrl + posterPath;
  // document.getElementById("root").innerHTML = `
  // <img src="${imgSrc}">
  // `;
  // console.log(imgSrc);
})
