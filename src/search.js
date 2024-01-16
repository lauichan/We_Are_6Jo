import { searchPage } from "./fetch.js";
import { handleClickCard } from "./movie.js";

let currentPage = 1;
const keyword = new URL(location.href).searchParams.get("query");

function morePage() {
  currentPage++;
  searchPage(currentPage, keyword);
}

searchPage(currentPage, keyword);
document.getElementById("searchInput").focus();
document.getElementById("morePage").addEventListener("click", morePage);
document.getElementById("movies").addEventListener("click", handleClickCard);
