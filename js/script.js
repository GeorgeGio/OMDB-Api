let nyAPIkey = "MssSerOq7vOA5WVLlEYMeraNlBWUPlpN";
let userMovie = "";
let userMoviePosterUrl = "";
let similarMoviesArr = [];
let similarMoviePosterUrl = [];
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

  console.log("userMovie: ", userMovie);

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
  fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=MssSerOq7vOA5WVLlEYMeraNlBWUPlpN`)
  .then((response) => response.json())
  .then((newYorkTimesData) => {
    console.log(newYorkTimesData.results);
    for (let i = 0; i < newYorkTimesData.results.length; i++) {
      if(newYorkTimesData.results[i].display_title === movie){

      
        console.log(newYorkTimesData.results[i].display_title)
        console.log(newYorkTimesData.results[i].summary_short)
        let reviewMovie = newYorkTimesData.results[i].summary_short;
        movieReviewEl.textContent = `"${reviewMovie}"`
        let reviewerMovie = newYorkTimesData.results[i].byline;
        movieReviewerEl.textContent = reviewerMovie;
      };
    }
    // let reviewMovie = newYorkTimesData.results[1].summary_short;
    // console.log(reviewMovie);

    // 
    
  });
  
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


// function DisplaySimilarMoviePosters() {
//   //loop through local storage and call DisplaySimiarMoviePosters
//   for (let index = 0; index < localStorage.length; index++) {
//     console.log("localStorage:", index, " ", localStorage[index]);

//     fetch(`https://www.omdbapi.com/?t=${localStorage[index]}&apikey=b8054373`)
//       .then((response) => response.json())
//       .then((data) => {
//         let counterSim = similarMoviePosterUrl[index];
//         counterSim = data.Poster;
//         console.log(counterSim);

//         let similarMoviePosterEl = document.querySelector(`#similar-movie-poster-${index}`);

//         similarMoviePosterEl.src = counterSim;
//       });
//     //this parts depends on whether you want to create images dynamically or use IDs in the HTML - but that depends on the content framework you want to use
//   }
// }
