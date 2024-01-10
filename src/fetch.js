import { createCard } from "./movie.js";
import { apikey } from "./apikeys.js";

let urls = "https://api.themoviedb.org/3/";

export let genreList;

export async function loadJSON(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function loadGenre() {
  const response = await loadJSON(`${urls}genre/movie/list?api_key=${apikey}&language=en`); // 중복되는 url을 변수로 지정하면 추후에 변할 때도 적용이 가능하기때문에
  genreList = response.genres;
  console.log(genreList);
}

export async function loadPage(page) {
  const data = await loadJSON(`${urls}movie/top_rated?api_key=${apikey}&language=en&page=${page}`);
  createCard(data);
}

export async function searchPage(page, keyword) {
  const data = await loadJSON(
    `${urls}search/movie?api_key=${apikey}&query=${keyword}&include_adult=false&language=en-US&page=${page}`
  );
  createCard(data);
}
