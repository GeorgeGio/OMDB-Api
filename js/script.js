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

  console.log("userMovie", userMovie);


  displayMoviePoster(userMovie);


  getSimilarMovies(userMovie);



});




function displayMoviePoster(movie) {
  fetch(`https://www.omdbapi.com/?t=${movie}&apikey=b8054373`)
  .then((response) => response.json())
  //   .then(data => console.log(data));
  .then((data) => {
    //could condense these 2 lines into 1
    userMoviePosterUrl = data.Poster;
    
    moviePosterEl.src = userMoviePosterUrl;
    
    let similarButton = document.body.appendChild(document.createElement("button"));
    console.log(similarButton);
    similarButton.textContent = "Similar movies";
    similarButton.setAttribute("class" , "simButMov");
    let buttonClass = document.querySelector(".simButMov");

    
    buttonClass.addEventListener("click",function(){
      console.log("works");
      let similarMoviesString = localStorage.getItem("SimilarMovies");
      
      // console.log(similarMoviesArr);
      similarMoviesArr = JSON.parse(similarMoviesString) || [];
      // console.log(similarMoviesArr);

    });
    
    // getSimilarMovies(movie);
  });
}

function getSimilarMovies(movie) {




  // fetch("https://tastedive.com/api/similar?q=movie:matrix&k=447474-Project1-74HRK333")
  fetch("https://tastedive.com/api/similar?q=movie:" + movie + "&k=447625-Project1-NTMYY5L9&limit=3")
    .then(response => response.json())
    // .then(similarMovies => console.log(similarMovies))
    .then((similarMovies) => {
      let localArray = [];
      for (let index = 0; index < 3; index++) {
        let movieIndex = similarMovies.Similar.Results[index].Name;
        localArray.push(movieIndex);


      }
      localStorage.setItem("SimilarMovies",JSON.stringify(localArray));


    })

}


