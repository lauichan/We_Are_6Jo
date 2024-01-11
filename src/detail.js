import { moviePage, loadGenre } from "./fetch.js";
import { handleClickCard } from "./movie.js";

const id = new URL(location.href).searchParams.get("id");
console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

load();
document.getElementById("searchInput").focus();
document.getElementById("movies").addEventListener("click", handleClickCard);
