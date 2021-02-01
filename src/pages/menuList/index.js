let movie = "";

export const allMovies = async () => {
  let fetchMovies = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=5050539d52522a0616ff555db4437bd6&language=pt-BR"
  );
  let list= await fetchMovies.json();
  let showList = list.results;
  
    await showList.forEach(img=> {
    document.getElementById("root").innerHTML = movie += `
      <div class = "backgroundPoster">
        <img class = "poster" src = "https://image.tmdb.org/t/p/original/${img.poster_path}">
        <div class = "btnAdd">
          <button>+ASSISTIDO</button>
          <button id ="toWatch">+ASSISTIR</button>
        </div>
      </div>
    </div>`
  });  

  let toWatch = document.querySelectorAll("#toWatch")
  toWatch.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault()
      const containerFeed = e.target.parentNode.parentNode
      let movies = {
        listToWatch:[],
        sybiabib
      }
     
  });

  })  
};
allMovies();

 
