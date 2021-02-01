import movieGenres from "./genres.js"

let imgBaseUrl = "https://image.tmdb.org/t/p/w200";
let imgSrc = "";

const getPoster = () => {
  return fetch(movieGenres.actionNfx)
    .then(response => response.json())
    .then(json => json.results[0].poster_path);
}

getPoster().then(posterPath => {
  imgSrc = imgBaseUrl + posterPath;
  document.getElementById("root").innerHTML = `
  <img src="${imgSrc}">
  `;
  console.log(imgSrc);
})
