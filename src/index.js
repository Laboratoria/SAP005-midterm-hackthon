import movieGenres from "./genres.js"


const getPoster = () => {
  return fetch(movieGenres.actionNfx)
    .then(response => response.json())
    .then(json => json.results);
}

getPoster().then(moviesList => {
  console.log(moviesList)

  for (let movie of moviesList) {
    let cards = movie.poster_path;
    let sinopse = movie.overview_path;
    console.log(cards)
    console.log(sinopse)
  }
  // imgSrc = imgBaseUrl + posterPath;
  // document.getElementById("root").innerHTML = `
  // <img src="${imgSrc}">
  // `;
  // console.log(imgSrc);
});
