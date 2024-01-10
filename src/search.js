// 검색 페이지 파일
import { loadSearchPage, loadGenre } from "./fetch.js";
import { handleClickCard } from "./movie.js";

let currentPage = 1;

let keyword = "spider";

async function load() {
  await loadGenre();
  loadSearchPage(currentPage, keyword);
}

function morePage() {
  currentPage++;
  loadSearchPage(currentPage, keyword);
}

load();
document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
