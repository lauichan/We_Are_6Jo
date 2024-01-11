import { moviePage, loadGenre } from "./fetch.js";

const id = new URL(location.href).searchParams.get("id");

console.log(id);

async function load() {
  await loadGenre();
  return moviePage(id);
}

load();

// document.getElementById("movies").addEventListener("click", handleClickCard);

async function loadPost(backdrop_path, title, genres, overview) {
  document.getElementById("detailmain").insertAdjacentHTML(
    ` 
    <main class="detail_main">
     <div class="detail_bg">
     <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="영화이미지" class="detail_bg_img"/>
    </div>
   </main>
   <section class="detail_section">
  <h1 class="detail_movie_title">${title}</h1>
  <div class="detail_movie_wrap_two">
    <span class="detail_movie_wrap_time_genre">${genres}</span>
    <p class="detail_movie_wrap_year">${release_date}</p>
  </div>
  <div class="detail_movie_over_view">
    <p class="detail_movie_over_view_text">${overview}</p>
  </div>
  <button class="detail_movie_appreciate">감상하기</button>
</section>`
  );
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
