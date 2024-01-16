import { loadPage } from "./fetch.js";
import { handleClickCard } from "./movie.js";

let currentPage = 1;

function morePage() {
  currentPage++;
  loadPage(currentPage);
}

loadPage(currentPage);
document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
