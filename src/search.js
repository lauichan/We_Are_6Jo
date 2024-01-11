// 검색 페이지 파일
import { searchPage, loadGenre, genreList } from "./fetch.js";
import { handleClickCard } from "./movie.js";

let currentPage = 1;

console.log(location.search);
const keyword = new URL(location.href).searchParams.get("query");
console.log(keyword);

async function load() {
  loadGenre();
  searchPage(currentPage, keyword);
}

function morePage() {
  currentPage++;
  searchPage(currentPage, keyword);
}

function search(event) {
  event.preventDefault();
  const value = document.getElementById("searchInput").value;
  location.href = `search.html?query=${value}`;
}

load();
document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
document.getElementById("search").addEventListener("submit", search);
