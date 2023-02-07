let userMovie = "";
let userMoviePosterUrl = "";
let similarMoviesArr = [];
let similarMoviesToShow = 3;

let movieSearchEl = document.querySelector("#movie-search");
let moviePosterEl = document.querySelector("#movie-poster");

let movieSearchButtonEl = document.querySelector("#movie-search-button");


//EventListener for MovieSearchButton

movieSearchButtonEl.addEventListener("click", function () {
  userMovie = movieSearchEl.value.trim();

  console.log("userMovie", userMovie);

 
  getUserMovie(userMovie);


  getSimilarMovies();


  
});


function displayUserMoviePoster(){
  moviePosterEl.src = userMoviePosterUrl;


}



function getUserMovie(movie) {
  fetch(`http://www.omdbapi.com/?t=${movie}&apikey=b8054373`)
    .then((response) => response.json())
    //   .then(data => console.log(data));
    .then((data) => {
      //could condense these 2 lines into 1
      userMoviePosterUrl = data.Poster;

      displayUserMoviePoster();

      
    });
}

function getSimilarMovies(){
  



 // fetch("https://tastedive.com/api/similar?q=movie:matrix&k=447474-Project1-74HRK333")
 fetch("https://tastedive.com/api/similar?q=movie:matrix&k=447625-Project1-NTMYY5L9&limit=3")
  .then(response => response.json())
  .then(data => console.log(data))
  
  // for (let index = 0; index < similarMoviesToShow; index++) {
  //   similarMoviesArr[index] = ["movie"+index, "url"+index];
    
  // }
  
  

}