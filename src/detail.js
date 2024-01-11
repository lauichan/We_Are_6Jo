import { loadGenre } from "./fetch.js";
import { handleClickCard } from "./movie.js";

const id = new URL(location.href).searchParams.get("id");
console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

load();

`<main class="detail_main">
<div class="detail_bg">
  <img src="#" alt="영화이미지" class="detail_bg_img" />
</div>
</main>
<section class="detail_section">
<h1 class="detail_movie_title">영화 제목</h1>
<div class="detail_movie_wrap_two">
  <span class="detail_movie_wrap_time_genre">코미디</span>
  <p class="detail_movie_wrap_year">2023</p>
</div>
<div class="detail_movie_over_view">
  <p class="detail_movie_over_view_text">영화의 내용을 입력한다</p>
</div>
<button class="detail_movie_appreciate">감상하기</button>
</section>`;

document.getElementById("searchInput").focus();
document.getElementById("movies").addEventListener("click", handleClickCard);
