let userMovie = "";
let userMoviePosterUrl = "";
let similarMoviesArr = [];
let similarMoviesToShow = 3;
// let similarMovie1 = document.querySelector("#similarMovie1");
// let similarMovie2 = document.querySelector("#similarMovie2");
// let similarMovie3 = document.querySelector("#similarMovie3");

let movieSearchEl = document.querySelector("#movie-search");
let moviePosterEl = document.querySelector("#movie-poster");
let similarButtonEl = document.querySelector(".simButMov");

let movieSearchButtonEl = document.querySelector("#movie-search-button");

//EventListener for MovieSearchButton

movieSearchButtonEl.addEventListener("click", function () {
  userMovie = movieSearchEl.value.trim();

  console.log("userMovie: ", userMovie);

  displayMoviePoster(userMovie);

  getSimilarMovies(userMovie);

//  DisplaySimilarMoviePosters();
});

function displayMoviePoster(movie) {
  fetch(`https://www.omdbapi.com/?t=${movie}&apikey=b8054373`)
    .then((response) => response.json())
    .then((data) => {
      userMoviePosterUrl = data.Poster;

      moviePosterEl.src = userMoviePosterUrl;

    });
}

function getSimilarMovies(movie) {
  fetch(
    "https://tastedive.com/api/similar?q=movie:" +
      movie +
      "&k=447625-Project1-NTMYY5L9&limit=3"
  )
    .then((response) => response.json())
    .then((similarMovies) => {
      localStorage.clear();
      for (let index = 0; index < 3; index++) {
        let similarMovieName = similarMovies.Similar.Results[index].Name;
        localStorage.setItem(index, similarMovieName);
      }
    })
    .then (()=> (DisplaySimilarMoviePosters()));

}

function DisplaySimilarMoviePosters() {
  //loop through local storage and call DisplaySimiarMoviePosters
  for (let index = 0; index < localStorage.length; index++) {

    console.log("localStorage:", index, " ", localStorage[index]);

    //this parts depends on whether you want to create images dynamically or use IDs in the HTML - but that depends on the content framework you want to use
  }
}
