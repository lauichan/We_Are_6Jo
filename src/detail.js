import { moviePage, loadGenre } from "./fetch.js";
import { sendReview, loadReview } from "./review.js";

async function load() {
  await loadGenre();
  moviePage();
  loadReview();
}

load();
document.getElementById("detailReviewForm").addEventListener("submit", sendReview);
