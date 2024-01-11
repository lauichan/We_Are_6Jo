import { genreList } from "./fetch.js";

export function createCard(response) {
  const movies = response.results;

  movies.forEach((movie) => {
    document.getElementById("movies").insertAdjacentHTML("beforeend", cardHTML(movie));
    createGenreList(movie.id, movie.genre_ids);
  });
}

function cardHTML(movie) {
  return `
  <div id="${movie.id}">
    <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" title="${movie.id}"/>
    <h2 class="title">${movie.title}</h2>
    <p class="overview">${movie.overview}</p>
    <ul class="genre"></ul>
    <p class="vote">${(movie.vote_average * 10).toFixed(1)}%</p>
  </div>`;
}

// 장르를 불러오는 함수를 사용하고싶어서 export했습니다.
function createGenreList(ele_id, genre_ids) {
  const genreName = genreList.filter((genre) => genre_ids.includes(genre.id));
  const genreListElement = document.getElementById(`${ele_id}`); //.querySelector(".genre");

  genreName.forEach((genre) => {
    const liElement = document.createElement("li");
    liElement.classList.add(`${genre.name.toLowerCase().replace(" ", "")}`);
    liElement.textContent = genre.name;
    genreListElement.appendChild(liElement);
  });
}

export function handleClickCard(event) {
  const cardList = document.getElementById("movies");
  if (event.target === cardList) return;
  let target = event.target.matches("div") ? event.target : event.target.parentNode;
  alert(`영화 id: ${target.id}`);
  target.classList.toggle("click");
  location.href = `detail.html?id=${target.id}`;
  console.log("click");
}

export async function loadPost({ id, backdrop_path, title, release_date, genres, overview }) {
  let dataLoad = `
  <main class="detail_main">
    <div class="detail_bg">
      <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="영화이미지" class="detail_bg_img"/>
    </div>
  </main>
  <section class="detail_section">
    <h1 class="detail_movie_title">${title}</h1>
    <div class="detail_movie_wrap_two" id="${id}">
      <ul class="genre"></ul>
      <p class="detail_movie_wrap_year">${release_date}</p>
    </div>
    <div class="detail_movie_over_view">
      <p class="detail_movie_over_view_text">${overview}</p>
    </div>
    <button class="detail_movie_appreciate">감상하기</button>
  </section>`;

  document.getElementById("moviePost").insertAdjacentHTML("beforeend", dataLoad);
  let genre_ids = genres.map((a) => a.id);
  createGenreList(id, genre_ids);
}
