// 메인 파일
import { loadPage } from "./fetch.js";
import { handleClickCard } from "./movie.js";

let currentPage = 1;

async function load() {
  return loadPage(currentPage);
}

function morePage() {
  currentPage++;
  loadPage(currentPage);
}

load();
document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
