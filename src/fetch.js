import { createCard } from "./movie.js";

export let genreList;

export async function loadJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function loadGenre() {
  const response = await loadJSON(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d8289aa2bec02bd78af67f82343d08c8&language=en"
  );
  genreList = response.genres;
}

export async function loadPage(page) {
  const data = await loadJSON(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=d8289aa2bec02bd78af67f82343d08c8&language=en&page=${page}`
  );
  createCard(data);
}

export async function searchPage(page, keyword) {
  const data = await loadJSON(
    `https://api.themoviedb.org/3/search/movie?api_key=d8289aa2bec02bd78af67f82343d08c8&query=${keyword}&include_adult=false&language=en-US&page=${page}`
  );
  console.log(data);
  createCard(data);
}
