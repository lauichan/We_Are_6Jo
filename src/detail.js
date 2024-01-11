import { moviePage, loadGenre } from "./fetch.js";
import { createGenreList } from "./movie.js";
let movieId;

async function moviePost() {
  await moviePage();
  moviePage(movieId, currentPage);
}

async function createGenreList() {
  await loadGenre();
  moviePage(currentPage, keyword);
}

async function loadPost(backdrop_path, title, genres, overview) {
  return `<main class="detail_main" id="moviePost";>
  <div class="detail_bg">
    <img src="${this.backdrop_path}" alt="영화이미지" class="detail_bg_img"/>
  </div>
</main>
<section class="detail_section">
  <h1 class="detail_movie_title">${this.title}</h1>
  <div class="detail_movie_wrap_two">
    <span class="detail_movie_wrap_time_genre">${genres}</span>
    <p class="detail_movie_wrap_year">${release_date}</p>
  </div>
  <div class="detail_movie_over_view">
    <p class="detail_movie_over_view_text">${overview}</p>
  </div>
  <button class="detail_movie_appreciate">감상하기</button>
</section>`;
}

loadPost();
//localStorage.getItem('key');
//localStorage.getItem('username'); 예시

//localStorage.setItem('key', 'value'); 저장시 임의의 키 값
//localStorage.setItem('username', 'Alice'); 저장된 임의의 키 값

//localStorage.removeItem('key');
//localStorage.removeItem('username');

async function handleClickCard(event) {
  const cardList = document.getElementById("detail_section");
}

// click add

// 리뷰창을 만듭니다. <innerHTML x>
// insertAdjacentHTML

// 새로고침하더라도 없어지지 않는 방식을 구현해야함.
// ui를 생성할 때 localstorage를 get한다..
//
