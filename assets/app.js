const base = 'https://api.themoviedb.org/3/search/movie?api_key=3e60976c4307fa5a4b76524c4a26318e&query=';
const IMAGE_URL = "https://image.tmdb.org/t/p/original";

const result = document.querySelector('.search-box');

result.addEventListener('keypress', setQuery);

function setQuery(evt) {
     if(evt.keyCode == 13){
        search(result.value);
        result.value= '';
 }
}

const movieSearchable = document.querySelector('#collections');

function renderSearcMovies(result) {
            movieSearchable.innerHTML = ' ';
            const movies = result.results;
            const movieBlk = createMovieContainer(movies)
            movieSearchable.appendChild(movieBlk);
}

function createMovieContainer(value) {
   const movieElement = document.createElement('div');
   movieElement.setAttribute('class', 'movie');
   const template =  `<div id="image">
                        ${miau(value)}
                      </div>`;
   movieElement.innerHTML = template;
   return movieElement;
}

function search(value) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e60976c4307fa5a4b76524c4a26318e&query=${value}`)
    .then(response => response.json())
    .then(renderSearcMovies)
    .catch(error => console.log('error', error));
}

 function miau(elements){
      return elements.map(el => {
            if(el.poster_path){
        return `<img src='${IMAGE_URL + el.poster_path}' alt="Girl in a jacket" width="500" height="600">`}});
      }

function searchable() {
    search(result.value);
    result.value= '';
}