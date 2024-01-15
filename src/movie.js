import { genreList } from "./fetch.js";

export function createCard(response) {
  const movies = response.results;

  let html = "";
  movies.forEach((movie) => (html += renderCardHTML(movie)));
  document.getElementById("movies").insertAdjacentHTML("beforeend", html);
}

function renderCardHTML(movie) {
  let src = "";
  if (movie.poster_path) {
    src = `https://image.tmdb.org/t/p/w300${movie.backdrop_path}`;
  } else {
    src = "images/noimage.jpg";
  }

  return `
  <div id="${movie.id}" class="card">
    <img class="poster" src="${src}" alt="${movie.title}"/>
    <div class="over">
      <h2 class="title">${movie.title}</h2>
    </div>
  </div>`;
}

function createGenreList(movieId, genreIds) {
  const genreName = genreList.filter((genre) => genreIds.includes(genre.id));
  const genreListElement = document.getElementById(`${movieId}`).querySelector(".genre");

  genreName.forEach((genre) => {
    const li = `<li class=${genre.class}>${genre.name}</li>`;
    genreListElement.insertAdjacentHTML("beforeend", li);
  });
}

export function handleClickCard(event) {
  const cardList = document.getElementById("movies");
  if (event.target === cardList) return;
  let target = event.target.closest(".card");
  alert(`${target.id}`); // 나중에 지우세요.
  location.href = `detail.html?id=${target.id}`;
}

export async function loadPost({ id, backdrop_path, title, release_date, genres, overview, vote_average }) {
  let dataLoad = `
  <div class="detail_main">
    <div class="detail_bg">
      <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="영화이미지" class="detail_bg_img"/>
    </div>
  </div>
  <section class="detail_section">
    <h1 class="detail_movie_title">${title}</h1>
    <div class="detail_movie_wrap_two" id="${id}">
      <ul class="genre"></ul>
      <p class="detail_movie_wrap_year">${release_date}</p>
    </div>
    <div class="detail_movie_vote">
      <p class="detail_movie_vote_average">${vote_average}</p>
    </div>
    <div class="detail_movie_over_view">
      <p class="detail_movie_over_view_text">${overview}</p>
    </div>
    <a href ="#detail_commentView" class="detail_movie_appreciate" >리뷰 남기기</a>
  </section>`;

  document.getElementById("moviePost").insertAdjacentHTML("beforeend", dataLoad);
  let genreIds = genres.map((a) => a.id);
  createGenreList(id, genreIds);
}

export function checkLastPage(dataLength) {
  const morePageBtn = document.getElementById("morePage");
  if (dataLength < 20) {
    morePageBtn.disabled = true;
    morePageBtn.textContent = dataLength === 0 ? "검색결과가 없습니다." : "다음 페이지가 없습니다.";
  }
}
