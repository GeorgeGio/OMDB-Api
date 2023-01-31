fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b8054373")
.then(response => response.json())
.then(data => console.log(data))