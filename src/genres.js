// Todos esses são filmes disponíveis para streaming no Brasil, via Netflix ou Amazon Prime.

const movieGenres = {
    // NETFLIX
  
    actionNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=28&with_watch_providers=8&watch_region=BR",
  
    adventureNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=12&with_watch_providers=8&watch_region=BR",
  
    animationNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=16&with_watch_providers=8&watch_region=BR",
  
    comedyNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=35&with_watch_providers=8&watch_region=BR",
  
    crimeNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=80&with_watch_providers=8&watch_region=BR",
  
    documentaryNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=99&with_watch_providers=8&watch_region=BR",
  
    dramaNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=18&with_watch_providers=8&watch_region=BR",
  
    familyNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10751&with_watch_providers=8&watch_region=BR",
  
    fantasyNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=14&with_watch_providers=8&watch_region=BR",
  
    historyNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=36&with_watch_providers=8&watch_region=BR",
  
    horrorNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=27&with_watch_providers=8&watch_region=BR",
  
    musicNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10402&with_watch_providers=8&watch_region=BR",
  
    mysteryNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=9648&with_watch_providers=8&watch_region=BR",
  
    romanceNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10749&with_watch_providers=8&watch_region=BR",
  
    scifiNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=878&with_watch_providers=8&watch_region=BR",
  
    tvMovieNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10770&with_watch_providers=8&watch_region=BR",
  
    thrillerNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=53&with_watch_providers=8&watch_region=BR",
  
    warNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10752&with_watch_providers=8&watch_region=BR",
  
    westernNfx: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=37&with_watch_providers=8&watch_region=BR",
  
    // AMAZON PRIME
  
    actionAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=28&with_watch_providers=119&watch_region=BR",
  
    adventureAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=12&with_watch_providers=119&watch_region=BR",
  
    animationAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=16&with_watch_providers=119&watch_region=BR",
  
    comedyAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=35&with_watch_providers=119&watch_region=BR",
  
    crimeAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=80&with_watch_providers=119&watch_region=BR",
  
    documentaryAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=99&with_watch_providers=119&watch_region=BR",
  
    dramaAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=18&with_watch_providers=119&watch_region=BR",
  
    familyAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10751&with_watch_providers=119&watch_region=BR",
  
    fantasyAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=14&with_watch_providers=119&watch_region=BR",
  
    historyAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=36&with_watch_providers=119&watch_region=BR",
  
    horrorAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=27&with_watch_providers=119&watch_region=BR",
  
    musicAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10402&with_watch_providers=119&watch_region=BR",
  
    mysteryAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=9648&with_watch_providers=119&watch_region=BR",
  
    romanceAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10749&with_watch_providers=119&watch_region=BR",
  
    scifiAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=878&with_watch_providers=119&watch_region=BR",
  
    tvMovieAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10770&with_watch_providers=119&watch_region=BR",
  
    thrillerAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=53&with_watch_providers=119&watch_region=BR",
  
    warAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=10752&with_watch_providers=119&watch_region=BR",
  
    westernAmz: "https://api.themoviedb.org/3/discover/movie?api_key=ffcaacca8cc231c4c2d075dba16d3d62&language=pt-BR&region=BR&sort_by=popularity.desc&with_genres=37&with_watch_providers=119&watch_region=BR",
  }
  
  export default movieGenres;