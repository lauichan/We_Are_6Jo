// 검색 페이지 파일
import { searchPage, loadGenre } from "./fetch.js";
import { handleClickCard } from "./movie.js";
import { navigateToSearch } from "./utils.js";

let currentPage = 1;

const keyword = new URL(location.href).searchParams.get("query");
console.log(keyword);

async function load() {
  await loadGenre();
  searchPage(currentPage, keyword);
}

function morePage() {
  currentPage++;
  searchPage(currentPage, keyword);
}

load();
document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
document.getElementById("search").addEventListener("submit", navigateToSearch);
