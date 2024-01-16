import { moviePage, loadGenre } from "./fetch.js";
import { sendReview, loadReview } from "./review.js";

async function load() {
  await loadGenre();
  loadReview();
  moviePage();
}

load();
document.getElementById("detailCommentReviewWrap").addEventListener("submit", sendReview);
