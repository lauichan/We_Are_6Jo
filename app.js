// 메인 파일
import { loadGenre, loadPage } from "./src/fetch.js";
import { handleClickCard } from "./src/movie.js";

let currentPage = 1;

async function load() {
  await loadGenre();
  return loadPage(currentPage);
}

function morePage() {
  currentPage++;
  loadPage(currentPage);
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
