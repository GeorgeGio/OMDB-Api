let nyAPIkey = "MssSerOq7vOA5WVLlEYMeraNlBWUPlpN";
let userMovie = "";
let userMoviePosterUrl = "";
let similarMoviesArr = [];
let similarMoviePosterUrl = [];
//number of similar movies to show
let similarMoviesToShow = 3;

let movieSearchEl = document.querySelector("#movie-search");
let moviePosterEl = document.querySelector("#movie-poster");
let similarButtonEl = document.querySelector(".simButMov");

let movieSearchButtonEl = document.querySelector("#movie-search-button");

let movieReviewEl = document.querySelector(".movie-review");
let movieReviewerEl = document.querySelector(".movie-reviewer");

//EventListener for MovieSearchButton

movieSearchButtonEl.addEventListener("click", function () {
  userMovie = movieSearchEl.value.trim();


  displayMoviePoster(userMovie);
  newYorkReview(userMovie);

  // getSimilarMovies(userMovie);

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

function newYorkReview(movie) {
  fetch(
    `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=MssSerOq7vOA5WVLlEYMeraNlBWUPlpN`
  )
    .then((response) => response.json())
    .then((newYorkTimesData) => {
      for (let i = 0; i < similarMoviesToShow; i++) {
        //this if statement is never true so i commented it out
        //   if(newYorkTimesData.results[i].display_title === movie){

        let similarMovieName = newYorkTimesData.results[i].display_title;
        localStorage.setItem(i, similarMovieName);


        //not sure if you wanted to display reviews...but i've commented this out
        // let reviewMovie = newYorkTimesData.results[i].summary_short;
        // movieReviewEl.textContent = `"${reviewMovie}"`;
        // let reviewerMovie = newYorkTimesData.results[i].byline;
        // movieReviewerEl.textContent = reviewerMovie;
        //   };
      }
      // let reviewMovie = newYorkTimesData.results[1].summary_short;
      // console.log(reviewMovie);

      //
    })
    .then(() => FetchSimilarMoviePosters());
}

// function getSimilarMovies(movie) {
//   fetch(
//     "https://tastedive.com/api/similar?q=movie:" +
//     movie +
//     "&k=447625-Project1-NTMYY5L9&limit=3"
//   )
//     .then((response) => response.json())
//     .then((similarMovies) => {
//       // localStorage.clear();
//       for (let index = 0; index < 3; index++) {
//         let similarMovieName = similarMovies.Similar.Results[index].Name;
//         localStorage.setItem(index, similarMovieName);
//       }
//     })
//     .then(() => (DisplaySimilarMoviePosters()));

// }

function FetchSimilarMoviePosters() {
  //loop through local storage, storage urls is array and call DisplaySimilarMoviePosters
  for (let index = 0; index < localStorage.length; index++) {
   

    fetch(`https://www.omdbapi.com/?t=${localStorage[index]}&apikey=b8054373`)
      .then((response) => response.json())
      .then((data) => {
        similarMoviePosterUrl[index] = data.Poster;
      })
      .then(() => DisplaySimilarMoviePosters());
  }
}
function DisplaySimilarMoviePosters() {
  for (let index = 0; index < localStorage.length; index++) {
    let similarMoviePosterEl = document.querySelector(
      `#similar-movie-poster-${index}`
    );

    similarMoviePosterEl.src = similarMoviePosterUrl[index];
  }
}
