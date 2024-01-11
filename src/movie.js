import { genreList } from "./fetch.js";

export function createCard(response) {
  const movies = response.results;

  movies.forEach((movie) => {
    document.getElementById("movies").appendChild(cardHTML(movie));
    createGenreList(movie.id, movie.genre_ids);
  });
}

function cardHTML(movie) {
  const cardDiv = document.createElement("div");
  cardDiv.id = movie.id;
  const imgElement = document.createElement("img");
  imgElement.classList.add("poster");
  imgElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  imgElement.title = movie.id;

  const titleElement = document.createElement("h2");
  titleElement.classList.add("title");
  titleElement.textContent = movie.title;

  const overviewElement = document.createElement("p");
  overviewElement.classList.add("overview");
  overviewElement.textContent = movie.overview;

  const genreElement = document.createElement("ul");
  genreElement.classList.add("genre");

  const voteElement = document.createElement("p");
  voteElement.classList.add("vote");

  voteElement.textContent = `${(movie.vote_average * 10).toFixed(1)}%`;

  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(overviewElement);
  cardDiv.appendChild(genreElement);
  cardDiv.appendChild(voteElement);

  return cardDiv;
}

// 장르를 불러오는 함수를 사용하고싶어서 export했습니다.
export function createGenreList(ele_id, genre_ids) {
  const genreName = genreList.filter((genre) => genre_ids.includes(genre.id));
  const genreListElement = document.getElementById(`${ele_id}`).querySelector(".genre");

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

export async function loadPost(backdrop_path, title, release_date, genres, overview) {
  let dataDown = `<main class="detail_main">
  <div class="detail_bg">
    <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="영화이미지" class="detail_bg_img"/>
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
</section>`;

  document.getElementById("moviePost").insertAdjacentHTML("beforeend", dataDown);
}
