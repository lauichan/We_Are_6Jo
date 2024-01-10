// 메인 파일
import { loadPage, loadGenre } from "./src/fetch.js";
import { handleClickCard } from "./src/movie.js";

let currentPage = 1;

loadGenre();
loadPage(currentPage);

function morePage() {
  currentPage++;
  loadPage(currentPage);
}

document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
