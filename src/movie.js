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
