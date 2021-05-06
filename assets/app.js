const base = 'https://api.themoviedb.org/3/search/movie?api_key=3e60976c4307fa5a4b76524c4a26318e&query=';

const result = document.querySelector('.search-box');


result.addEventListener('keypress', setQuery);

function setQuery(evt) {
     if(evt.keyCode == 13){
        search(result.value);
 }
}

function search(value) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e60976c4307fa5a4b76524c4a26318e&query=${value}`)
  .then(response => response.json())
  .then(result =>
        console.log(result.results))
  .catch(error => console.log('error', error));
}

function searchable() {
    search(result.value);
}


