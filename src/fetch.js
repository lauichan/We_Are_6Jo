import { createCard } from "./movie.js";
import { apikey } from "./apikeys.js";

export let genreList;

export async function loadJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function loadGenre() {
  const response = await loadJSON(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en`);
  genreList = response.genres;
  console.log(genreList);
}

export async function loadPage(page) {
  const data = await loadJSON(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en&page=${page}`
  );
  createCard(data);
}

export async function loadSearchPage(page, keyword) {
  const data = await loadJSON(
    `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}&include_adult=false&language=en-US&page=${page}`
  );
  createCard(data);
}
