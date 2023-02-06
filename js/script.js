fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b8054373")
    .then(response => response.json())
    .then(data => console.log(data));

fetch("https://tastedive.com/api/similar?q=movie:matrix&k=447474-Project1-74HRK333")
.then(response => response.json())
.then(data => console.log(data))