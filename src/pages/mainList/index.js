let db = firebase.firestore();
let movie = "";

export const allMovies = async () => {
  let fetchMovies = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=5050539d52522a0616ff555db4437bd6&language=pt-BR"
  );
  let list= await fetchMovies.json();
  let showList = list.results;
  
    await showList.forEach(img => {
    document.getElementById("root").innerHTML = 
      movie += `
      <div class = "backgroundPoster" id = "${img.poster_path}">
        <img class = "poster"  src = "https://image.tmdb.org/t/p/original/${img.poster_path}">
        <div class = "btnAdd">
          <button id ="watched">+ASSISTIDO</button>
          <button id ="toWatch">+ASSISTIR</button>
        </div>
      </div>
    </div>`
   
  });   

  let toWatch = document.querySelectorAll("#toWatch")
  toWatch.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault()
      const userId = firebase.auth().currentUser.uid
      const containerFeed = e.target.parentNode.parentNode
      db.collection("users").doc(userId).update({
        listToWatch: firebase.firestore.FieldValue.arrayUnion(containerFeed.id)
    })
       
    })        

  })
  
  let watched = document.querySelectorAll("#watched")
  toWatch.forEach((button) => {
    button.addEventListener("click", async (e) => {
      e.preventDefault()
      const userId = firebase.auth().currentUser.uid
      const containerFeed = e.target.parentNode.parentNode
      db.collection("users").doc(userId).update({
        listwatched: firebase.firestore.FieldValue.arrayUnion(containerFeed.id)
    })
       
    })        

  }) 
 
};
allMovies();
